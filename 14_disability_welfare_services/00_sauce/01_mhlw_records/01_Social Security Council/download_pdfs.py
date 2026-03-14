#!/usr/bin/env python3
"""
厚労省 社会保障審議会（障害者部会）PDF一括ダウンロードスクリプト
================================================================
00_URL_index.md に記載された各回の議事録ページ・資料ページから
PDFリンクを抽出し、対応するフォルダにダウンロードします。

使い方:
  python download_pdfs.py

オプション:
  --start N    N回目のエントリから開始（0始まり、デフォルト: 0）
  --end N      N回目のエントリまで処理（デフォルト: 全件）
  --dry-run    ダウンロードせずPDFリンク一覧だけ表示
  --delay SEC  リクエスト間の待機秒数（デフォルト: 1.0）

例:
  python download_pdfs.py                     # 全件ダウンロード
  python download_pdfs.py --start 0 --end 10  # 最初の10件だけ
  python download_pdfs.py --dry-run            # PDFリンク確認のみ
"""

import os
import re
import sys
import time
import argparse
import logging
from pathlib import Path
from urllib.parse import urljoin, urlparse, unquote

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    print("必要なライブラリをインストールしてください:")
    print("  pip install requests beautifulsoup4")
    sys.exit(1)

# ============================================================
# 設定
# ============================================================

# このスクリプトと同じフォルダを基準にする
BASE_DIR = Path(__file__).parent.resolve()
INDEX_FILE = BASE_DIR / "00_URL_index.md"

# ログ設定
LOG_FILE = BASE_DIR / "download_log.txt"
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler(LOG_FILE, encoding="utf-8"),
        logging.StreamHandler(sys.stdout),
    ],
)
logger = logging.getLogger(__name__)

# HTTP設定
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                  "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "ja,en-US;q=0.7,en;q=0.3",
}
TIMEOUT = 30
MAX_RETRIES = 3
RETRY_WAIT = 5


# ============================================================
# Markdown パーサー
# ============================================================

def parse_index_md(filepath: Path) -> list[dict]:
    """00_URL_index.md のMarkdownテーブルをパースして辞書リストを返す"""
    entries = []
    text = filepath.read_text(encoding="utf-8")

    # テーブル行を抽出（ヘッダー行と区切り行を除く）
    for line in text.splitlines():
        line = line.strip()
        if not line.startswith("|"):
            continue
        cells = [c.strip() for c in line.split("|")]
        # 空文字を除去（先頭・末尾の|で生まれる）
        cells = [c for c in cells if c]
        if len(cells) < 4:
            continue
        # ヘッダー行・区切り行をスキップ
        if cells[0] == "フォルダ名" or cells[0].startswith("---"):
            continue

        folder_name = cells[0]
        session_label = cells[1]

        # MarkdownリンクからURLを抽出
        gijiroku_url = extract_md_link(cells[2])
        shiryou_url = extract_md_link(cells[3])

        entries.append({
            "folder": folder_name,
            "label": session_label,
            "gijiroku_url": gijiroku_url,
            "shiryou_url": shiryou_url,
        })

    return entries


def extract_md_link(md_text: str) -> str:
    """Markdownリンク [text](url) からURLを抽出。空なら空文字を返す"""
    m = re.search(r'\[.*?\]\((https?://[^)]+)\)', md_text)
    return m.group(1) if m else ""


# ============================================================
# PDF リンク抽出
# ============================================================

def fetch_page(url: str, session: requests.Session) -> str | None:
    """URLからHTMLを取得。リトライ付き。"""
    for attempt in range(1, MAX_RETRIES + 1):
        try:
            resp = session.get(url, headers=HEADERS, timeout=TIMEOUT)
            resp.raise_for_status()
            resp.encoding = resp.apparent_encoding or "utf-8"
            return resp.text
        except requests.RequestException as e:
            logger.warning(f"  取得失敗 (attempt {attempt}/{MAX_RETRIES}): {url} -> {e}")
            if attempt < MAX_RETRIES:
                time.sleep(RETRY_WAIT)
    return None


def extract_pdf_links(html: str, base_url: str) -> list[dict]:
    """
    HTMLページからPDFリンクを抽出する。
    返値: [{"url": "https://...", "filename": "xxx.pdf"}, ...]
    """
    soup = BeautifulSoup(html, "html.parser")
    pdf_links = []
    seen_urls = set()

    for a_tag in soup.find_all("a", href=True):
        href = a_tag["href"].strip()
        # 相対URLを絶対URLに変換
        full_url = urljoin(base_url, href)

        # PDFリンクのみ
        parsed = urlparse(full_url)
        path_lower = parsed.path.lower()
        if not path_lower.endswith(".pdf"):
            continue

        # 重複排除
        if full_url in seen_urls:
            continue
        seen_urls.add(full_url)

        # ファイル名をURLパスから取得
        filename = unquote(os.path.basename(parsed.path))
        if not filename:
            filename = f"document_{len(pdf_links)+1}.pdf"

        pdf_links.append({"url": full_url, "filename": filename})

    return pdf_links


# ============================================================
# ダウンロード
# ============================================================

def download_pdf(url: str, save_path: Path, session: requests.Session) -> bool:
    """PDFをダウンロードして保存する。既存ファイルはスキップ。"""
    if save_path.exists() and save_path.stat().st_size > 0:
        logger.info(f"    スキップ（既存）: {save_path.name}")
        return True

    for attempt in range(1, MAX_RETRIES + 1):
        try:
            resp = session.get(url, headers=HEADERS, timeout=TIMEOUT, stream=True)
            resp.raise_for_status()

            # 一時ファイルに書き込んでからリネーム（途中で切れた場合の安全策）
            tmp_path = save_path.with_suffix(".tmp")
            with open(tmp_path, "wb") as f:
                for chunk in resp.iter_content(chunk_size=8192):
                    f.write(chunk)

            # サイズチェック
            if tmp_path.stat().st_size == 0:
                tmp_path.unlink()
                logger.warning(f"    空ファイル: {url}")
                return False

            tmp_path.rename(save_path)
            size_kb = save_path.stat().st_size / 1024
            logger.info(f"    DL完了: {save_path.name} ({size_kb:.0f} KB)")
            return True

        except requests.RequestException as e:
            logger.warning(f"    DL失敗 (attempt {attempt}/{MAX_RETRIES}): {url} -> {e}")
            if attempt < MAX_RETRIES:
                time.sleep(RETRY_WAIT)

    return False


# ============================================================
# メイン処理
# ============================================================

def process_entry(entry: dict, session: requests.Session, delay: float, dry_run: bool) -> dict:
    """1回分の会議を処理する。返値は統計情報。"""
    folder_path = BASE_DIR / entry["folder"]
    folder_path.mkdir(parents=True, exist_ok=True)

    stats = {"downloaded": 0, "skipped": 0, "failed": 0, "total_pdfs": 0}

    # 資料ページと議事録ページの両方を処理
    pages = []
    if entry["shiryou_url"]:
        pages.append(("資料", entry["shiryou_url"]))
    if entry["gijiroku_url"]:
        pages.append(("議事録", entry["gijiroku_url"]))

    for page_type, page_url in pages:
        logger.info(f"  [{page_type}] {page_url}")
        time.sleep(delay)

        html = fetch_page(page_url, session)
        if html is None:
            logger.error(f"  ページ取得失敗: {page_url}")
            stats["failed"] += 1
            continue

        pdf_links = extract_pdf_links(html, page_url)
        logger.info(f"  → PDFリンク {len(pdf_links)} 件検出")
        stats["total_pdfs"] += len(pdf_links)

        if dry_run:
            for pdf in pdf_links:
                logger.info(f"    [dry-run] {pdf['filename']} -> {pdf['url']}")
            continue

        for pdf in pdf_links:
            save_path = folder_path / pdf["filename"]
            time.sleep(delay * 0.5)  # PDF間は短めに待機

            if save_path.exists() and save_path.stat().st_size > 0:
                stats["skipped"] += 1
                logger.info(f"    スキップ（既存）: {pdf['filename']}")
                continue

            success = download_pdf(pdf["url"], save_path, session)
            if success:
                stats["downloaded"] += 1
            else:
                stats["failed"] += 1

    return stats


def main():
    parser = argparse.ArgumentParser(description="厚労省 障害者部会 PDF一括ダウンロード")
    parser.add_argument("--start", type=int, default=0, help="開始インデックス（0始まり）")
    parser.add_argument("--end", type=int, default=None, help="終了インデックス")
    parser.add_argument("--dry-run", action="store_true", help="ダウンロードせずPDFリンクだけ表示")
    parser.add_argument("--delay", type=float, default=1.0, help="リクエスト間の待機秒数")
    args = parser.parse_args()

    logger.info("=" * 60)
    logger.info("厚労省 社会保障審議会（障害者部会）PDF一括ダウンロード")
    logger.info("=" * 60)

    # インデックス読み込み
    if not INDEX_FILE.exists():
        logger.error(f"インデックスファイルが見つかりません: {INDEX_FILE}")
        sys.exit(1)

    entries = parse_index_md(INDEX_FILE)
    logger.info(f"全 {len(entries)} 件の会議データを読み込みました")

    # 範囲指定
    end = args.end if args.end is not None else len(entries)
    target_entries = entries[args.start:end]
    logger.info(f"処理対象: {args.start}〜{end-1} ({len(target_entries)} 件)")

    if args.dry_run:
        logger.info("*** DRY RUN モード（ダウンロードは行いません）***")

    # セッション作成（プロキシを無効化してmhlw.go.jpに直接接続）
    session = requests.Session()
    session.trust_env = False  # 環境変数のプロキシ設定を無視

    # 全体統計
    total_stats = {"downloaded": 0, "skipped": 0, "failed": 0, "total_pdfs": 0}

    for i, entry in enumerate(target_entries):
        idx = args.start + i
        logger.info(f"\n--- [{idx+1}/{len(entries)}] {entry['label']} ({entry['folder']}) ---")

        stats = process_entry(entry, session, args.delay, args.dry_run)
        for key in total_stats:
            total_stats[key] += stats[key]

        # 進捗レポート（10件ごと）
        if (i + 1) % 10 == 0:
            logger.info(f"\n=== 進捗: {i+1}/{len(target_entries)} 件完了 ===")
            logger.info(f"  DL: {total_stats['downloaded']}, "
                        f"スキップ: {total_stats['skipped']}, "
                        f"失敗: {total_stats['failed']}")

    # 最終レポート
    logger.info("\n" + "=" * 60)
    logger.info("完了！")
    logger.info(f"  検出PDF総数: {total_stats['total_pdfs']}")
    logger.info(f"  ダウンロード: {total_stats['downloaded']}")
    logger.info(f"  スキップ（既存）: {total_stats['skipped']}")
    logger.info(f"  失敗: {total_stats['failed']}")
    logger.info(f"  ログファイル: {LOG_FILE}")
    logger.info("=" * 60)


if __name__ == "__main__":
    main()
