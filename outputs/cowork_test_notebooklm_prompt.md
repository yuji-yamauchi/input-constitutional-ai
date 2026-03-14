# Cowork テスト: NotebookLMで解説動画の音声素材を作成

## テスト目的
Cowork + Claude in Chrome で NotebookLM の Audio Overview 生成を自動化できるかを検証する。

## 指示プロンプト（Coworkに貼り付け）

---

以下の手順でNotebookLMを使って音声コンテンツを作成してください。
Chrome連携を使ってブラウザ操作を行ってください。

### Step 1: NotebookLMにアクセス
1. Chrome で https://notebooklm.google.com/ を開く
2. 「新しいノートブック」を作成

### Step 2: ソース資料のアップロード
以下のフォルダにあるMarkdownファイルをソースとしてアップロードしてください:

```
C:\Users\USER\Documents\GitHub\input-constitutional-ai\outputs\llm_landscape_2026_03_14.md
```

アップロード方法:
- 「ソースを追加」→「ファイルをアップロード」
- 上記のファイルを選択

### Step 3: Audio Overview の生成
1. ソースがアップロードされたら「Audio Overview」セクションを探す
2. 言語設定を「日本語」にする
3. 「生成」ボタンを押す
4. 生成完了まで待つ（数分かかる場合あり）

### Step 4: 音声ファイルのダウンロード
1. 生成された音声の「ダウンロード」ボタンを押す
2. MP4/MP3ファイルがDownloadsフォルダに保存されることを確認

### 成功基準
- [ ] NotebookLMにアクセスできた
- [ ] ソースファイルをアップロードできた
- [ ] Audio Overview を日本語で生成開始できた
- [ ] 音声ファイルをダウンロードできた

### 失敗した場合
どの手順で失敗したか、エラーメッセージやスクリーンショットがあれば報告してください。

---

## 備考
- このテストは「LLM最新バージョンアップ情報（2026年3月14日時点）」の解説音声を作成する実験
- 成功すれば、字幕パイプライン（Whisper → 用語修正 → SRT整形 → ffmpeg）に接続してYouTube動画化する
- NotebookLMのAudio OverviewにはAPIがないため、ブラウザ操作での自動化が唯一の方法
