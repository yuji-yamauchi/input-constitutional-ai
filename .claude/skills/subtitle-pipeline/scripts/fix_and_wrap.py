#!/usr/bin/env python3
"""
SRT Error Fix & Japanese Text Wrapping Script
Usage: python fix_and_wrap.py "input.srt" [--fixes '{"誤": "正"}'] [--dict path/to/welfare_dictionary.json]
Output: input_wrapped.srt (same directory)
"""

import sys
import os
import re
import json
import argparse


def load_welfare_dictionary(dict_path):
    """Load welfare terminology dictionary for Whisper error correction."""
    if not os.path.exists(dict_path):
        print(f"Warning: Dictionary not found: {dict_path}")
        return {}

    with open(dict_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    # Flatten all categories into a single dict (skip _meta, _notes)
    fixes = {}
    for key, value in data.items():
        if key.startswith("_"):
            continue
        if isinstance(value, dict):
            fixes.update(value)

    return fixes


def apply_fixes(content, fixes):
    """Apply all fixes to content string."""
    count = 0
    for old, new in fixes.items():
        if old in content:
            occurrences = content.count(old)
            content = content.replace(old, new)
            count += occurrences
    return content, count


def wrap_text(text, max_chars=16, max_lines=2):
    """Wrap Japanese text to max_chars per line, max_lines lines."""
    if len(text) <= max_chars:
        return text

    # Priority break points
    break_points = [
        "。", "、", "？", "！",  # Punctuation
        "は", "が", "を", "に", "で", "と", "の", "も", "へ",  # Particles
        "て", "し", "ね", "よ", "か", "け",  # Auxiliary
    ]

    best = max_chars
    for i in range(min(max_chars, len(text) - 1), max(max_chars // 2, 0), -1):
        if text[i - 1] in break_points or text[i] in break_points[:4]:
            best = i
            break

    # Don't start line with punctuation
    while best < len(text) and text[best] in "。、？！）」』":
        best += 1

    line1 = text[:best]
    line2 = text[best:]

    if len(line2) > max_chars:
        line2 = line2[:max_chars]

    if line2:
        return line1 + "\n" + line2
    return line1


def split_subtitle(idx, start, end, text, max_chars=16, max_lines=2):
    """Split long subtitle into multiple time-based blocks."""
    total_len = len(text)

    if total_len <= max_chars * max_lines:
        wrapped = wrap_text(text, max_chars, max_lines)
        return [(idx, start, end, wrapped)]

    # Find good split point near middle
    mid = total_len // 2
    for i in range(mid, min(mid + 10, total_len)):
        if text[i] in "。、？！はがをにでと":
            mid = i + 1
            break

    duration = end - start
    mid_time = start + duration * (mid / total_len)

    part1 = text[:mid]
    part2 = text[mid:]

    w1 = wrap_text(part1, max_chars, max_lines)
    w2 = wrap_text(part2, max_chars, max_lines)

    return [(idx, start, mid_time, w1), (idx + 0.5, mid_time, end, w2)]


def format_timestamp(seconds):
    """Convert seconds to SRT timestamp format."""
    h = int(seconds // 3600)
    m = int((seconds % 3600) // 60)
    s = seconds % 60
    return f"{h:02d}:{m:02d}:{s:06.3f}".replace(".", ",")


def parse_timestamp(ts):
    """Parse SRT timestamp to seconds."""
    ts = ts.replace(",", ".")
    parts = ts.split(":")
    return int(parts[0]) * 3600 + int(parts[1]) * 60 + float(parts[2])


def process_srt(input_path, extra_fixes=None, dict_path=None):
    """Main processing: fix errors and wrap text."""

    # Load dictionary
    if dict_path is None:
        # Default: look for dictionary relative to this script
        script_dir = os.path.dirname(os.path.abspath(__file__))
        dict_path = os.path.join(script_dir, "..", "references", "welfare_dictionary.json")

    all_fixes = load_welfare_dictionary(dict_path)

    # Merge extra fixes (override dictionary)
    if extra_fixes:
        all_fixes.update(extra_fixes)

    # Read SRT
    with open(input_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Apply fixes
    content, fix_count = apply_fixes(content, all_fixes)

    # Parse SRT blocks
    blocks = re.split(r"\n\n+", content.strip())
    entries = []
    for block in blocks:
        lines = block.strip().split("\n")
        if len(lines) >= 3:
            try:
                idx = int(lines[0])
            except ValueError:
                continue
            ts_match = re.match(
                r"(\d{2}:\d{2}:\d{2}[\.,]\d{3})\s*-->\s*(\d{2}:\d{2}:\d{2}[\.,]\d{3})",
                lines[1],
            )
            if ts_match:
                start = parse_timestamp(ts_match.group(1))
                end = parse_timestamp(ts_match.group(2))
                text = "".join(lines[2:])
                entries.append((idx, start, end, text))

    # Wrap and split
    all_subs = []
    for idx, start, end, text in entries:
        all_subs.extend(split_subtitle(idx, start, end, text))

    # Remove duplicates (same text in consecutive blocks)
    cleaned = [all_subs[0]] if all_subs else []
    for i in range(1, len(all_subs)):
        if all_subs[i][3] != all_subs[i - 1][3]:
            cleaned.append(all_subs[i])
    all_subs = cleaned

    # Write wrapped SRT
    base = os.path.splitext(input_path)[0]
    output_path = base + "_wrapped.srt"

    max_lines_found = 0
    with open(output_path, "w", encoding="utf-8") as f:
        for i, (_, start, end, text) in enumerate(all_subs, 1):
            f.write(f"{i}\n")
            f.write(f"{format_timestamp(start)} --> {format_timestamp(end)}\n")
            f.write(f"{text}\n\n")
            nl = text.count("\n") + 1
            if nl > max_lines_found:
                max_lines_found = nl

    print(f"Done. Blocks: {len(all_subs)}, Max lines: {max_lines_found}, Fixes: {fix_count}")
    return output_path


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="SRT Fix & Wrap")
    parser.add_argument("input", help="Input SRT file path")
    parser.add_argument("--fixes", default=None, help='Extra fixes as JSON: \'{"誤": "正"}\'')
    parser.add_argument("--dict", default=None, help="Path to welfare_dictionary.json")
    args = parser.parse_args()

    if not os.path.exists(args.input):
        print(f"Error: File not found: {args.input}")
        sys.exit(1)

    extra = json.loads(args.fixes) if args.fixes else None
    process_srt(args.input, extra_fixes=extra, dict_path=args.dict)
