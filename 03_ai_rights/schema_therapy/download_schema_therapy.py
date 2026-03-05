import os, time, urllib.request, re
from pathlib import Path

BASE_DIR = Path(r"c:\Users\USER\Documents\GitHub\input-constitutional-ai\03_ai_rights\schema_therapy\papers")
URL_FILE = Path(r"c:\Users\USER\Documents\GitHub\input-constitutional-ai\03_ai_rights\schema_therapy\schema_therapy_urls.txt")

BASE_DIR.mkdir(parents=True, exist_ok=True)

def sanitize(name, max_len=100):
    name = re.sub(r'[\\/:*?"<>|]', '', name)
    return name[:max_len].strip()

lines = URL_FILE.read_text(encoding="utf-8").strip().splitlines()
total = len(lines)
ok = skip = err = 0

for i, line in enumerate(lines, 1):
    parts = line.split("\t")
    if len(parts) < 3:
        continue
    label, url, title = parts[0], parts[1], parts[2]
    fname = f"{label}_{sanitize(title)}.pdf"
    dest = BASE_DIR / fname
    if dest.exists() and dest.stat().st_size > 1024:
        print(f"[{i}/{total}] SKIP (exists): {fname}")
        skip += 1
        continue
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
        dest.write_bytes(data)
        print(f"[{i}/{total}] OK: {fname}  ({len(data)} bytes)")
        ok += 1
    except Exception as e:
        print(f"[{i}/{total}] ERR: {fname}  ({e})")
        err += 1
    time.sleep(0.5)

print(f"\nDone: {ok} downloaded, {skip} skipped, {err} errors (total {total})")
