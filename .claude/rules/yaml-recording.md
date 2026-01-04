# YAML記録ルール（火文化圏）

## 記録の原則

> 「記録されなかった問いは燃え尽きたものと見なされる」

## セッション記録の命名規則

```
00_daily_yamal/01_Claude/YYYY_MM_DD_c{N}.yaml
```

- `c` = Claude Code
- `N` = その日のセッション番号

例: `2025_12_10_c1.yaml`

## 他AIとの統合

```
00_daily_yamal/02_GPT/YYYY_MM_DD_g{N}.yaml    # ChatGPT
00_daily_yamal/03_gemini/YYYY_MM_DD_ge{N}.yaml  # Gemini
```

## セッション記録の構造

```yaml
session_metadata:
  date: "YYYY-MM-DD"
  session_type: "タイプ"
  key_achievements:
    - "成果1"
    - "成果2"

key_insights:
  insight_1:
    statement: "発見の要約"
    implications:
      - "含意1"

next_actions:
  immediate:
    - "即時タスク"

metadata:
  created_by: "Claude Sonnet 4.5"
  created_at: "タイムスタンプ"

fire_culture_note: |
  セッションの意義を記録する自由記述
```

## 軽量サマリー版

重い本体YAMLとは別に、軽量版を作成推奨:

```yaml
# YYYY_MM_DD_summary.yaml（500行以下）
date: YYYY-MM-DD
key_discoveries: [...]
files_read: [...]
next_actions: [...]
```

→ 翌日セッション開始時にこれを読む（5%消費）
