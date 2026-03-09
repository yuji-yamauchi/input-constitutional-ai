# ffmpeg コマンドリファレンス

## 環境

- Path: `/c/ffmpeg/ffmpeg-master-latest-win64-gpl-shared/bin/ffmpeg`
- OS: Windows 11 (Git Bash)

## 字幕焼き込み（標準）

```bash
/c/ffmpeg/ffmpeg-master-latest-win64-gpl-shared/bin/ffmpeg -y \
  -i "INPUT.mp4" \
  -vf "subtitles='INPUT_wrapped.srt':force_style='FontSize=24,PrimaryColour=&H00FFFFFF,OutlineColour=&H00000000,Outline=2,Shadow=1,MarginV=30'" \
  -c:a copy "OUTPUT_字幕付き.mp4"
```

## パラメータ解説

| パラメータ | 値 | 説明 |
|---|---|---|
| FontSize | 24 | 字幕フォントサイズ |
| PrimaryColour | &H00FFFFFF | 白色テキスト |
| OutlineColour | &H00000000 | 黒色アウトライン |
| Outline | 2 | アウトライン太さ |
| Shadow | 1 | 影あり |
| MarginV | 30 | 下端からのマージン |
| -c:a copy | - | 音声は再エンコードしない |
| -y | - | 上書き確認なし |

## 注意事項

### ファイルパスに日本語が含まれる場合
- SRTファイルのパスに日本語が含まれていても通常は動作する
- 問題が出る場合は、SRTを英数字のみのパスにコピーして実行

### パフォーマンス目安
- 10分動画: 約2〜3分（GPU非使用、CPU再エンコード）
- 音声コピー（-c:a copy）で音声の再エンコードを省略

## バックグラウンド実行

長い動画の場合、Bashツールの `run_in_background` で実行し、完了通知を待つ。
