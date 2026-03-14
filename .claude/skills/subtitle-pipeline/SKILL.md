---
name: subtitle-pipeline
description: >
  NotebookLM等のMP4動画をYouTube用字幕付き動画に変換するパイプライン。
  Use when user says "字幕付き", "字幕作成", "subtitle", "動画編集",
  "YouTube用に", "字幕焼き込み", or provides an MP4 file for processing.
  Handles: Whisper transcription, welfare domain error correction,
  16-char x 2-line Japanese wrapping, ffmpeg hardsub, YouTube description,
  and content Markdown generation.
license: MIT
metadata:
  author: d-rel.jp
  version: 1.0.0
  category: video-processing
  tags: [subtitle, whisper, ffmpeg, youtube, welfare, notebooklm]
---

# Subtitle Pipeline — NotebookLM動画 → YouTube字幕付き動画

## Overview

NotebookLM Audio Overview等のMP4動画を、字幕付きYouTube動画に変換する
6ステップのパイプライン。障害福祉分野の専門用語辞書によるWhisperエラー自動修正を含む。

## Prerequisites

- Python環境: `~/whisper-env/` (PyTorch + CUDA + openai-whisper)
- ffmpeg: `/c/ffmpeg/ffmpeg-master-latest-win64-gpl-shared/bin/ffmpeg`
- GPU: CUDA対応GPU（RTX 2070 SUPER等）

## Instructions

### Step 1: Whisper GPU書き起こし

入力MP4からSRTファイルを生成する。

```bash
cd "C:/Users/USER/Downloads" && source ~/whisper-env/Scripts/activate
python scripts/whisper_transcribe.py "INPUT.mp4"
```

または以下のPythonコードを直接実行:

```python
import whisper, torch
model = whisper.load_model('medium')
result = model.transcribe('INPUT.mp4', language='ja', verbose=False)
# SRT形式で保存（scripts/whisper_transcribe.py参照）
```

**Expected output**: `INPUT.srt` (同ディレクトリ)

### Step 2: Whisperエラー修正（福祉用語辞書）

`references/welfare_dictionary.json` を参照し、福祉ドメイン特有の誤認識を自動修正する。

**CRITICAL**: 辞書にない誤認識はSRT全文を目視で確認して手動追加する。
毎回の動画で新しいエラーパターンが見つかるため、辞書は継続的に更新する。

修正の手順:
1. SRTファイルを全文読み込み
2. 福祉用語辞書の全エントリを一括置換
3. 目視確認で辞書にないエラーを特定
4. 動画固有のfixes辞書を作成
5. 辞書に新パターンを追記（次回以降の自動修正に反映）

### Step 3: 16文字×2行ラッピング

日本語テキストを最大16文字×2行に収まるよう折り返す。

```bash
python scripts/fix_and_wrap.py "INPUT.srt" --fixes '{"誤認識": "正しい表現"}'
```

**ラッピングルール**:
- 最大16文字/行、最大2行/ブロック
- 句読点（。、？！）、助詞（は、が、を、に、で、と）で優先的に改行
- 句読点が行頭に来ないよう調整
- 2行に収まらないテキストは時間で分割して複数ブロック化

**Expected output**: `INPUT_wrapped.srt`

### Step 4: ffmpeg字幕焼き込み

```bash
/c/ffmpeg/ffmpeg-master-latest-win64-gpl-shared/bin/ffmpeg -y \
  -i "INPUT.mp4" \
  -vf "subtitles='INPUT_wrapped.srt':force_style='FontSize=24,PrimaryColour=&H00FFFFFF,OutlineColour=&H00000000,Outline=2,Shadow=1,MarginV=30'" \
  -c:a copy "INPUT_字幕付き.mp4"
```

**Expected output**: `INPUT_字幕付き.mp4`

### Step 5: YouTube説明文作成

SRTの内容からタイムスタンプ付きの説明文を生成する。

含めるべき要素:
- タイトル（動画ファイル名ベース）
- 概要（3〜4行）
- タイムスタンプ（主要セクション、`MM:SS セクション名` 形式）
- キーワード一覧
- 関連法令
- シリーズ名: 「障害福祉サービス　研修動画シリーズ」
- ハッシュタグ

**Expected output**: `INPUT_youtube_description.txt` (Downloads)

### Step 6: Content Markdown作成

動画の内容を構造化Markdownにまとめる。

含めるべき要素:
- 動画メタデータ（日付、シリーズ、時間、ソース）
- セクションごとの要約（タイムスタンプ付き）
- 表形式での対比・整理
- Whisper修正記録
- SoE理論との接続表

保存先: `16_youtube/{チャンネル}/{シリーズ}/{動画名}/YYYY_MM_DD_タイトル.md`

**Expected output**: Markdownファイル（GitHub repo内）

### Step 7: 成果物を動画フォルダへ移動

字幕付き動画完成後、動画・音声ファイル以外のテキスト系成果物を
対応する `16_youtube/` 配下の動画フォルダへ移動する。

**移動対象**:
- `.md` — 台本・Content Markdown
- `.srt` / `_wrapped.srt` — 字幕ファイル
- `_youtube_description.txt` — YouTube説明文
- `.pptx` — スライド資料
- `.png` / `.webp` — サムネイル画像

**移動しないもの**（Downloadsに残すか別管理）:
- `.mp4` — 元動画・字幕付き動画
- `.mp3` / `.wav` — 音声ファイル

**移動先の決定ルール**:
- 日本語教育動画 → `16_youtube/01_d-rel_ja/障害福祉スタッフ教育動画/{シリーズ名}/`
- 英語SoEコンテンツ → `16_youtube/02_Soe_en/{トピック名}/`
- フォルダが存在しない場合は作成する

## Examples

### Example 1: 標準的なNotebookLM動画処理

User says: "C:\Users\USER\Downloads\障害者権利条約：福祉専門職のためのガイド.mp4 字幕付き動画編集とYouTube説明欄案作成お願い"

Actions:
1. Whisper GPU → SRT (103 segments)
2. 福祉用語辞書で自動修正 (7 fixes: 崩壊性→法改正, 韓国→勧告, etc.)
3. 16字×2行ラッピング (128 blocks)
4. ffmpeg焼き込み → 字幕付き.mp4
5. YouTube説明文 → _youtube_description.txt
6. Content Markdown → 16_youtube/01_d-rel_ja/障害福祉スタッフ教育動画/{動画名}/
7. .md, .srt, .txt を動画フォルダへ移動

Result: 字幕付きMP4（Downloads）+ テキスト成果物（16_youtube/配下の動画フォルダ）

## Troubleshooting

### Error: CUDA out of memory
Cause: GPUメモリ不足（medium modelは約5GB必要）
Solution: `whisper.load_model('small')` に変更、またはGPUメモリを確認

### Error: ffmpeg subtitles filter fails
Cause: SRTファイルパスに特殊文字（日本語、記号）
Solution: SRTファイルを英数字のみのパスにコピーしてから実行

### Error: 字幕が2行を超える
Cause: ラッピングスクリプトの分割ロジック不備
Solution: `fix_and_wrap.py` の `split_subtitle` 関数を確認

## Performance Notes

- Whisper medium + RTX 2070 SUPER: 約1分の動画に対し約15秒
- ffmpeg焼き込み: 約1分の動画に対し約20秒
- 全パイプライン（10分動画）: 約5〜8分
