# トークン効率化ルール

## 基本原則

1. **必要最小限の読み込み**
   - 大きなファイルは全体ではなく必要部分だけ
   - offset/limit パラメータを活用

2. **事前フィルタリング**
   - Read の前に Grep/Glob で対象を絞る
   - 「全部読んで」より「〇〇について書いてある部分だけ」

3. **段階的アプローチ**
   - Step 1: metadata/key_insights だけ読む
   - Step 2: 必要なセクションを深掘り
   - Step 3: 詳細が必要なら全文読み込み

## リセット時刻

- **PST 0:00 = JST 17:00**（冬時間）
- 重い作業は17:00以降に実行推奨

## 消費量の目安

| 作業 | 消費量 |
|------|--------|
| Grep/Glob検索 | 2-3% |
| 500行YAML読み込み | 5% |
| 1000行YAML読み込み | 10% |
| 3000行YAML読み込み | 25% |
| 詳細レビュー+長文出力 | 20-30% |

## 推奨パターン

### 状況把握（軽量）
```
Grep → 対象ファイル特定 → metadata のみ Read
消費: 5-10%
```

### 本格作業（重い）
```
対象ファイル全文 Read → 分析 → 文書作成
消費: 30-50%
→ 17:00リセット後に実行
```

---

## 4. Puu 専用プロジェクト最適化ルール（SoE・研究計画書向け）

### 🔹 部分読み込みの優先順位
大規模 YAML / MD を完全に読む前に、以下の順序で段階的に処理する。

1. **metadata のみ先読み**
   - date  
   - target_folder  
   - reason  
   - file_name_suggestion  

2. **トップレベルのキーだけ読む**
   - philosophy / social_system / ai_rights / SoE / practice / research_context / integration / research_proposal

3. **詳細本文は Puu の明示指示がある場合のみ読む**
   - 特に 09_research_proposal 配下は全文が長いため、基本は README.md だけ

---

## 5. Claude Code 推奨コマンドセット（安全版）

Claude Code が暴走して全ファイルを一気読みしないよう、  
以下の “低負荷コマンド” を優先的に使用する。

### 🔹 読み込みコマンド

read --limit 300 <file>
read --limit 800 --offset 0 <file>
read --head <file>
read --tail <file>


### 🔹 検索コマンド
search "keyword" <directory>
glob "**/*.yaml"


---

## 6. 深堀り禁止条件（Fail-safe）

Claude は長文解析を自動的に試みるため、以下の条件では **自動解析を行わない**。

- 1000行を超える YAML / MD
- 1MBを超えるファイル
- Puu が「読まなくていい」と明言したフォルダ
- `08_integration` の全文構造（部分読み込みのみ許可）
- 日報フォルダ（00_daily_yaml）は “当日ファイルのみ” 読む

これらに該当する場合、Claude は必ず次のプロンプトを返す：

> “ファイルが大規模のため、どの粒度で読み込むか指示してください。”

---

## 7. モデル役割の明確化（ChatGPT / Gemini との協働）

Claude Code は **構造編集と統合** に専念し、  
高度な理論分析は ChatGPT・Gemini に任せる。

### Claude Code の役割
- 構造整理  
- YAML分割・統合  
- リファクタリング  
- CLI / VSCode 作業  
- 書類の整形  
- 長文の再構築

### 他LLMの役割
- 深い哲学的考察（ChatGPT）  
- 事実検証・論文検索（Gemini など）  
- 国際英語化（ChatGPT）  
- 論理的破綻の修正（ChatGPT）

---

## 8. 連続タスク時のトークン節約（Batch Strategy）

複数タスクを連続すると Claude のトークンが急減するため、  
以下の “バッチ方式” を標準とする。

1. Puu が ChatGPT / Gemini で議論し「素材 YAML」を作成  
2. VSCode に投げて Claude Code が構造整理  
3. Claude Code は結果を **必要なディレクトリに分配保存**  
4. 深掘りは行わず、構造整理だけで次タスクへ移行  
5. 詳細考察は別LLMへ委譲する（Claude Code は消費を抑える）

---

## 9. 例外ルール（無制限読み込みを許可する場面）

以下は Puu の判断で全文読み込みを許可できる。

- 新しい研究計画書ドラフト（3000字程度）
- 研究背景（researcher_context）の最新まとめ
- SoEの技術仕様書（構造が重要なため）
- 重要な CLUDE.md 更新内容

その場合、Claude Code は次のように確認を取る：

> “全文読み込みを行いますか？  
>  行うとトークン消費が増えます。”

---