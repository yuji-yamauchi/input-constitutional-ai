"""
厚労省 社会保障審議会（障害者部会）PDF一括ダウンロードスクリプト
Coworkセッションからの引き継ぎタスク

pdf_urls.txt のフォーマット: folder_name\tURL
"""

import os
import time
import urllib.request
from pathlib import Path

BASE_DIR = Path(r"C:\Users\USER\Desktop\cowork\00_sauce\01_mhlw_records\01_Social Security Council")
URL_FILE = Path(r"C:\Users\USER\Documents\GitHub\input-constitutional-ai\00_daily_yamal\07_cowork\pdf_urls.txt")

def download_pdfs():
    with open(URL_FILE, "r", encoding="utf-8") as f:
        lines = f.readlines()

    total = len(lines)
    downloaded = 0
    skipped = 0
    errors = 0

    for i, line in enumerate(lines, 1):
        line = line.strip()
        if not line:
            continue

        parts = line.split("\t")
        if len(parts) != 2:
            print(f"[SKIP] Line {i}: invalid format")
            skipped += 1
            continue

        folder_name, url = parts
        folder_path = BASE_DIR / folder_name
        folder_path.mkdir(parents=True, exist_ok=True)

        filename = url.split("/")[-1]
        file_path = folder_path / filename

        if file_path.exists():
            skipped += 1
            continue

        try:
            req = urllib.request.Request(url, headers={
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
            })
            with urllib.request.urlopen(req, timeout=30) as response:
                data = response.read()
                with open(file_path, "wb") as out:
                    out.write(data)
            downloaded += 1
            if downloaded % 20 == 0:
                print(f"[{i}/{total}] Downloaded {downloaded} files...")
            time.sleep(0.3)
        except Exception as e:
            print(f"[ERROR] {url}: {e}")
            errors += 1

    print(f"\nDone: {downloaded} downloaded, {skipped} skipped, {errors} errors (total {total} URLs)")

if __name__ == "__main__":
    download_pdfs()
