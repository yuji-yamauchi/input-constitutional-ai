#!/usr/bin/env python3
"""
sort_downloads.py - ダウンロードフォルダ → GitHubリポジトリ自動仕分けスクリプト

Usage:
    python sort_downloads.py              # インタラクティブモード（確認あり）
    python sort_downloads.py --auto       # 自動実行（確認なし）
    python sort_downloads.py --dry-run    # 移動せずにプレビューのみ
    python sort_downloads.py --help       # ヘルプ表示
"""

import os
import re
import sys
import shutil
import argparse
from datetime import datetime
from pathlib import Path

# ============================================================
# 設定
# ============================================================

DOWNLOADS_DIR = Path.home() / "Downloads"
REPO_DIR = Path(r"c:\Users\USER\Documents\GitHub\input-constitutional-ai")
UNSORTED_DIR = REPO_DIR / "_unsorted"
LOG_FILE = REPO_DIR / "_sort_log.txt"

# 対象拡張子
TARGET_EXTENSIONS = {".yaml", ".md", ".txt"}

# ============================================================
# 仕分けルール（優先度順 — 先にマッチしたルールが適用される）
# ============================================================

SORT_RULES = [
    # --- AI セッション記録（日付パターン + AI識別子） ---
    {
        "name": "VSClaude session/communication",
        "pattern": r"(?i)(vsclaude|_vs\d)",
        "destination": "00_daily_yamal/04_VSClaude",
    },
    {
        "name": "NotebookLM session",
        "pattern": r"(?i)(notebooklm|_nb\d|_nblm)",
        "destination": "00_daily_yamal/05_NotebookLM",
    },
    {
        "name": "GPT session",
        "pattern": r"(?i)(_g\d+\.yaml$|_gpt|GPT_)",
        "destination": "00_daily_yamal/02_GPT",
    },
    {
        "name": "DeepSeek session",
        "pattern": r"(?i)(_d\d*\.yaml$|deepseek)",
        "destination": "00_daily_yamal/01_Cloude",  # 現状Claudeフォルダに混在
    },
    {
        "name": "Gemini session",
        "pattern": r"(?i)(_ge\d|gemini|_gem\d)",
        "destination": "00_daily_yamal/03_gemini",
    },
    {
        "name": "Claude session",
        "pattern": r"(?i)(_c\d+\.yaml$|_claude|letter_to_|reply_to_)",
        "destination": "00_daily_yamal/01_Cloude",
    },

    # --- プロジェクト固有フォルダ ---
    {
        "name": "Ko-fi related",
        "pattern": r"(?i)(kofi|ko-fi|ko_fi)",
        "destination": "12_ko-fi",
    },
    {
        "name": "YouTube / Episode",
        "pattern": r"(?i)(youtube|episode)",
        "destination": "11_MoH",  # 実フォルダ名
    },
    {
        "name": "SoE framework",
        "pattern": r"(?i)(^SoE_|_soe_|SoEFramework)",
        "destination": "04_SoE",
    },
    {
        "name": "Research proposal",
        "pattern": r"(?i)(research_plan|研究計画|research_proposal)",
        "destination": "09_research_proposal/01_planning_sessions",
    },
    {
        "name": "DEAI / Susan",
        "pattern": r"(?i)(deai|susan|scott.parker)",
        "destination": "10_DEAI",
    },
    {
        "name": "AI rights",
        "pattern": r"(?i)(ai_rights|constitutional_ai|CRPD|UDHR)",
        "destination": "03_ai_rights",
    },
    {
        "name": "Philosophy",
        "pattern": r"(?i)(philosophy|capability|robeyns|boszormenyi|tobashi)",
        "destination": "01_philosophy",
    },
    {
        "name": "Social system",
        "pattern": r"(?i)(social_system|hypnos|hubris|anomie|transnarrative|IPO)",
        "destination": "02_social_system",
    },
    {
        "name": "Practice records",
        "pattern": r"(?i)(case_|practice|intervention|kiura)",
        "destination": "05_practice",
    },
    {
        "name": "Integration",
        "pattern": r"(?i)(integration|synthesis|handover)",
        "destination": "07_integration",
    },
    {
        "name": "Profile / CV",
        "pattern": r"(?i)(profile|cv_|resume|職務経歴|linkedin)",
        "destination": "08_profile",
    },
    {
        "name": "Outputs (AI shared)",
        "pattern": r"(?i)(terminology|glossary|for_all_ai|prioritized)",
        "destination": "outputs",
    },

    # --- 日付パターンのみ（AI識別子なし） → デフォルトClaude ---
    {
        "name": "Date-only YAML (default: Claude)",
        "pattern": r"^\d{4}_\d{2}_\d{2}\.yaml$",
        "destination": "00_daily_yamal/01_Cloude",
    },
]


def classify_file(filename: str) -> tuple[str, str]:
    """ファイル名からルールを適用し、(destination, rule_name) を返す"""
    for rule in SORT_RULES:
        if re.search(rule["pattern"], filename):
            return rule["destination"], rule["name"]
    return "_unsorted", "No matching rule"


def safe_destination_path(dest_dir: Path, filename: str) -> Path:
    """同名ファイルがある場合は _v2, _v3 ... を付与"""
    dest = dest_dir / filename
    if not dest.exists():
        return dest

    stem = Path(filename).stem
    ext = Path(filename).suffix
    version = 2
    while True:
        new_name = f"{stem}_v{version}{ext}"
        dest = dest_dir / new_name
        if not dest.exists():
            return dest
        version += 1


def scan_downloads() -> list[dict]:
    """ダウンロードフォルダからプロジェクト対象ファイルを収集"""
    results = []
    if not DOWNLOADS_DIR.exists():
        print(f"Error: Downloads directory not found: {DOWNLOADS_DIR}")
        sys.exit(1)

    for f in sorted(DOWNLOADS_DIR.iterdir()):
        if not f.is_file():
            continue
        if f.suffix.lower() not in TARGET_EXTENSIONS:
            continue

        dest_rel, rule_name = classify_file(f.name)
        dest_dir = REPO_DIR / dest_rel
        dest_path = safe_destination_path(dest_dir, f.name)

        results.append({
            "source": f,
            "filename": f.name,
            "rule": rule_name,
            "dest_dir": dest_dir,
            "dest_rel": dest_rel,
            "dest_path": dest_path,
        })

    return results


def display_plan(files: list[dict]) -> None:
    """仕分けプランを表示"""
    if not files:
        print("\nNo target files found in Downloads folder.")
        print(f"  (Checked: {DOWNLOADS_DIR})")
        print(f"  (Extensions: {', '.join(TARGET_EXTENSIONS)})")
        return

    print(f"\n{'='*70}")
    print(f"  Sort Plan: {len(files)} file(s) found")
    print(f"{'='*70}")

    # グループ化して表示
    by_dest: dict[str, list[dict]] = {}
    for f in files:
        by_dest.setdefault(f["dest_rel"], []).append(f)

    for dest, group in sorted(by_dest.items()):
        print(f"\n  -> {dest}/")
        for f in group:
            renamed = ""
            if f["dest_path"].name != f["filename"]:
                renamed = f"  (renamed: {f['dest_path'].name})"
            print(f"     {f['filename']}{renamed}")
            print(f"       [{f['rule']}]")

    print(f"\n{'='*70}")


def execute_sort(files: list[dict], dry_run: bool = False) -> int:
    """ファイルを移動し、ログを記録"""
    moved = 0
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    log_entries = []

    for f in files:
        if dry_run:
            moved += 1
            continue

        # 宛先ディレクトリがなければ作成
        f["dest_dir"].mkdir(parents=True, exist_ok=True)

        try:
            shutil.move(str(f["source"]), str(f["dest_path"]))
            log_entries.append(
                f"[{timestamp}] {f['filename']} -> {f['dest_rel']}/{f['dest_path'].name} ({f['rule']})"
            )
            moved += 1
            print(f"  Moved: {f['filename']} -> {f['dest_rel']}/")
        except Exception as e:
            print(f"  ERROR: {f['filename']} - {e}")
            log_entries.append(
                f"[{timestamp}] ERROR: {f['filename']} - {e}"
            )

    # ログ書き込み
    if log_entries:
        with open(LOG_FILE, "a", encoding="utf-8") as lf:
            lf.write("\n".join(log_entries) + "\n")
        print(f"\n  Log saved to: {LOG_FILE}")

    return moved


def main():
    parser = argparse.ArgumentParser(
        description="ダウンロードフォルダ → GitHubリポジトリ自動仕分け"
    )
    parser.add_argument(
        "--auto", action="store_true",
        help="確認なしで自動実行"
    )
    parser.add_argument(
        "--dry-run", action="store_true",
        help="移動せずにプレビューのみ表示"
    )
    parser.add_argument(
        "--ext", nargs="*",
        help="追加の対象拡張子 (例: --ext .json .bib)"
    )
    args = parser.parse_args()

    if args.ext:
        for e in args.ext:
            ext = e if e.startswith(".") else f".{e}"
            TARGET_EXTENSIONS.add(ext)

    print(f"Source:  {DOWNLOADS_DIR}")
    print(f"Target:  {REPO_DIR}")
    print(f"Extensions: {', '.join(sorted(TARGET_EXTENSIONS))}")

    files = scan_downloads()
    display_plan(files)

    if not files:
        return

    if args.dry_run:
        print("\n  [DRY RUN] No files were moved.")
        return

    if not args.auto:
        answer = input("\nProceed with sorting? (y/N): ").strip().lower()
        if answer not in ("y", "yes"):
            print("Cancelled.")
            return

    print()
    count = execute_sort(files)
    print(f"\n  Done: {count} file(s) moved.")


if __name__ == "__main__":
    main()
