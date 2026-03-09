---
name: daily-report
description: >
  日報・セッション記録のYAML作成パイプライン。
  Use when user says "日報", "日報まとめて", "セッション記録",
  "今日のまとめ", "YAML記録", "daily report", "session log".
  Downloads内の当日ファイルをスキャンし、各AIフォルダへ振り分け、
  火文化圏ルールに基づくYAMLセッション記録を生成する。
license: MIT
metadata:
  author: d-rel.jp
  version: 1.0.0
  category: session-management
  tags: [yaml, daily-report, fire-culture, session-log]
---

# Daily Report — 日報YAML自動生成

## Overview

「日報まとめて」の一言で、当日のDownloadsフォルダの活動痕跡を収集し、
適切なフォルダへ振り分け、火文化圏ルールに基づくYAMLセッション記録を生成する。

## Instructions

### Step 0: 現在時刻と日付の確認

```bash
powershell -Command "Get-Date -Format 'yyyy-MM-dd HH:mm:ss'"
```

当日の日付を `YYYY_MM_DD` 形式で保持する（ファイル命名に使用）。

### Step 1: Downloadsフォルダのスキャン

当日作成・更新されたファイルを一覧取得する。

```bash
find "C:/Users/USER/Downloads" -maxdepth 1 -newermt "YYYY-MM-DD" -type f | sort
```

**チェックポイント**:
- MP4/MP3ファイル → 字幕パイプライン関連
- SRT/TXT → 字幕・説明文の成果物
- PDF → 資料ダウンロード
- YAML/MD → セッション記録・ソース資料

### Step 2: 振り分け対象の判定

ファイル名パターンから振り分け先を判定する。

| パターン | 振り分け先 |
|---|---|
| `*_youtube_description.txt` | 成果物（Downloadsに残す） |
| `*_字幕付き.mp4` | 成果物（Downloadsに残す） |
| `*_wrapped.srt` | 成果物（Downloadsに残す） |
| `*.srt`（元ファイル） | 成果物（Downloadsに残す） |
| `*.pdf`（研究資料） | `02_social_system/` 配下の適切なフォルダ |
| Gemini日報YAML | `00_daily_yamal/03_gemini/` |
| GPT日報YAML | `00_daily_yamal/02_GPT/` |

**CRITICAL**: 振り分けはユーザーに確認してから実行する。勝手に移動しない。

### Step 3: GitHubリポジトリの当日活動スキャン

```bash
cd "c:/Users/USER/Documents/GitHub/input-constitutional-ai"
git log --since="YYYY-MM-DD" --oneline
git diff --stat
```

当日のコミット履歴と未コミットの変更を確認。

### Step 4: 各AIフォルダの当日ファイル確認

```bash
# Claude Code セッション
ls 00_daily_yamal/04_VSClaude/YYYY_MM_DD*
# Claude Web セッション
ls 00_daily_yamal/01_Claude/YYYY_MM_DD*
# GPT セッション
ls 00_daily_yamal/02_GPT/YYYY_MM_DD*
# Gemini セッション
ls 00_daily_yamal/03_gemini/YYYY_MM_DD*
# NotebookLM
ls 00_daily_yamal/05_NotebookLM/YYYY_MM_DD*
# YouTube
ls 00_daily_yamal/08_youtube/YYYY_MM_DD*
# Cowork
ls 00_daily_yamal/07_cowork/YYYY_MM_DD*
```

### Step 5: YAML日報の生成

収集した情報を火文化圏ルールに基づくYAML形式でまとめる。

**保存先**: `00_daily_yamal/04_VSClaude/YYYY_MM_DD_c{N}.yaml`
- `c` = Claude Code
- `N` = その日のセッション番号（既存ファイルの次番号）

**YAML構造**:

```yaml
session_metadata:
  date: "YYYY-MM-DD"
  session_type: "日報まとめ"
  time_check: "HH:MM JST"
  health_check:
    blood_pressure: "未確認"  # ユーザーに聞く
    concerta: "未確認"        # ユーザーに聞く

key_achievements:
  - "成果1の要約"
  - "成果2の要約"

files_created:
  downloads:
    - filename: "ファイル名"
      type: "MP4/SRT/PDF/etc"
      purpose: "用途"
  repo:
    - path: "リポジトリ内パス"
      purpose: "用途"

ai_sessions:
  claude_code:
    - "セッション内容の要約"
  claude_web:
    - "セッション内容の要約（あれば）"
  chatgpt:
    - "セッション内容の要約（あれば）"
  gemini:
    - "セッション内容の要約（あれば）"
  notebooklm:
    - "セッション内容の要約（あれば）"

key_insights:
  insight_1:
    statement: "発見の要約"
    implications:
      - "含意1"

next_actions:
  immediate:
    - "即時タスク"
  tomorrow:
    - "明日のタスク"

git_activity:
  commits_today: 0
  uncommitted_changes: []

metadata:
  created_by: "Claude Opus 4.6"
  created_at: "YYYY-MM-DDTHH:MM:SS+09:00"

fire_culture_note: |
  本日のセッションの意義を記録する自由記述。
```

### Step 6: 個人情報・組織名の秘匿化チェック

GitHubにアップされるファイル（リポジトリ内のYAML、Markdown等）について、
以下の秘匿化ルールを適用する。

**秘匿化対象**:
- **個人名**: 山内雄司（Puu/パンカー）以外の実名 → イニシャル or 仮名に置換
  - 例: 「木浦太郎」→「K氏」、「田中先生」→「T先生」
  - 例外: 公人・公開情報上の人物（Susan Scott-Parker OBE等）はそのまま
- **組織名**: 山内が現在・過去に所属した事業所名、面接先企業名 → 匿名化
  - 例: 「株式会社○○」→「A事業所」「B社」
  - 例外: 公的機関（厚労省、WHO等）、大学名、公開団体名はそのまま
- **利用者情報**: 支援対象者に関する一切の個人特定情報 → 完全匿名化
- **住所・電話番号**: 公開情報（d-rel.jp等）以外は削除
- **医療情報**: 山内本人以外の診断名・服薬情報 → 削除

**チェック手順**:
1. 新規作成・変更したリポジトリ内ファイルを一覧する
2. 各ファイルの内容をスキャンし、上記対象が含まれていないか確認
3. 該当があればユーザーに報告し、置換案を提示
4. 承認後に置換を実行

**秘匿化不要**:
- Downloads内のファイル（ローカル成果物でGitHubにアップしない）
- `.gitignore`で除外されているファイル
- 山内本人の情報（CLAUDE.mdに記載の範囲）

### Step 7: ユーザーへの確認

生成したYAMLの内容をユーザーに提示し、以下を確認:
- 追加すべき活動はないか
- 修正すべき内容はないか
- 体調・血圧の記録を追加するか
- 個人情報・組織名の秘匿化に漏れはないか
- コミットするか

## Examples

### Example 1: 動画制作が中心の日

User says: "日報まとめて"

Actions:
1. Downloads内を確認 → MP4, SRT, TXT, MDファイルを検出
2. リポジトリの当日コミット・変更を確認
3. 08_youtube/ の当日Markdownを確認
4. YouTube動画処理の成果をYAMLにまとめる
5. `00_daily_yamal/04_VSClaude/2026_03_09_c1.yaml` として保存

### Example 2: 研究資料整理の日

User says: "今日のまとめ"

Actions:
1. Downloads内を確認 → PDFファイルを検出
2. 02_social_system/ への振り分けを提案
3. NotebookLMソース作成の活動を記録
4. YAMLにまとめて保存

## Troubleshooting

### 当日ファイルが見つからない
Cause: find の日付フィルタがタイムゾーンずれ
Solution: PowerShellで正確な日付を取得してから実行

### セッション番号の重複
Cause: 同じ日に複数回日報を作成
Solution: 既存ファイルを確認して次の番号を使用

## Performance Notes

- Downloadsスキャン: 数秒
- Git log確認: 数秒
- YAML生成: 即時
- 全体: 1〜2分（ユーザー確認含む）
