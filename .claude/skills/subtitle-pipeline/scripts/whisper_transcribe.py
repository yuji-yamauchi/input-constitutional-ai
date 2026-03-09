#!/usr/bin/env python3
"""
Whisper GPU Transcription Script
Usage: python whisper_transcribe.py "input.mp4" [--model medium] [--language ja]
Output: input.srt (same directory as input file)
"""

import sys
import os
import argparse


def format_timestamp(seconds):
    """Convert seconds to SRT timestamp format HH:MM:SS,mmm"""
    h = int(seconds // 3600)
    m = int((seconds % 3600) // 60)
    s = seconds % 60
    return f"{h:02d}:{m:02d}:{s:06.3f}".replace(".", ",")


def transcribe(input_path, model_name="medium", language="ja"):
    """Run Whisper transcription and save as SRT."""
    import whisper
    import torch

    print(f"CUDA available: {torch.cuda.is_available()}")
    if torch.cuda.is_available():
        print(f"GPU: {torch.cuda.get_device_name(0)}")

    print(f"Loading model: {model_name}")
    model = whisper.load_model(model_name)

    print(f"Transcribing: {input_path}")
    result = model.transcribe(input_path, language=language, verbose=False)

    segments = result["segments"]
    duration = segments[-1]["end"] if segments else 0
    mins = int(duration // 60)
    secs = int(duration % 60)
    print(f"Duration: {mins}:{secs:02d}, Segments: {len(segments)}")

    # Generate output path
    base = os.path.splitext(input_path)[0]
    srt_path = base + ".srt"

    # Write SRT
    with open(srt_path, "w", encoding="utf-8") as f:
        for i, seg in enumerate(segments, 1):
            start_ts = format_timestamp(seg["start"])
            end_ts = format_timestamp(seg["end"])
            text = seg["text"].strip()
            f.write(f"{i}\n{start_ts} --> {end_ts}\n{text}\n\n")

    print(f"Saved: {srt_path}")
    print(f"Done. Segments: {len(segments)}")
    return srt_path


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Whisper GPU Transcription")
    parser.add_argument("input", help="Input MP4/MP3 file path")
    parser.add_argument("--model", default="medium", help="Whisper model (default: medium)")
    parser.add_argument("--language", default="ja", help="Language (default: ja)")
    args = parser.parse_args()

    if not os.path.exists(args.input):
        print(f"Error: File not found: {args.input}")
        sys.exit(1)

    transcribe(args.input, args.model, args.language)
