# DeepResearch Prompt: 日本語能力試験（JLPT）N認定調査

```yaml
# ============================================
# DeepResearch Prompt: 日本語能力試験（JLPT）N認定
# ============================================
# 作成日: 2025-02-01
# 研究者: Yuji Yamauchi
# 目的: 障害福祉就労支援における外国人利用者の
#       日本語能力評価基準の理解と活用
# ============================================

research_task:
  title: "日本語能力試験（JLPT）N認定の指標・評価項目の包括的調査"
  language: "日本語（公式用語は英語併記）"
  
  primary_objective: |
    日本語能力試験（Japanese-Language Proficiency Test: JLPT）の
    N1〜N5認定レベルについて、評価指標・認定基準・Can-do statements・
    得点算出方法を体系的に調査し、就労支援における日本語能力評価への
    応用可能性を検討する。

research_questions:

  section_1_jlpt_overview:
    title: "JLPT制度の概要"
    questions:
      - "JLPTの歴史的経緯（1984年開始〜2010年改定）"
      - "実施主体（国際交流基金・日本国際教育支援協会）の役割"
      - "試験実施国・受験者数の推移"
      - "2010年改定の主要変更点（4段階→5段階、尺度得点導入等）"
      - "他の日本語能力評価（BJT、NAT-TEST、J-TEST等）との位置づけ"

  section_2_n_levels_definition:
    title: "N1〜N5レベルの定義と認定基準"
    format: |
      各レベルについて以下の情報を体系的に整理：
      - 公式レベル定義
      - 認定の目安（読む・聞く能力の記述）
      - 想定される日本語学習時間
      - 典型的な使用場面・タスク
    
    levels_to_cover:
      - level: "N1"
        description: "幅広い場面で使われる日本語を理解することができる"
        target: "高度な日本語能力、ビジネス・学術レベル"
      
      - level: "N2"
        description: "日常的な場面で使われる日本語に加え、より幅広い場面で使われる日本語をある程度理解することができる"
        target: "日常会話以上、一般的な職場コミュニケーション"
      
      - level: "N3"
        description: "日常的な場面で使われる日本語をある程度理解することができる"
        target: "N2とN4の橋渡し、日常生活の自立"
      
      - level: "N4"
        description: "基本的な日本語を理解することができる"
        target: "基本的な日常会話、初級後半"
      
      - level: "N5"
        description: "基本的な日本語をある程度理解することができる"
        target: "ひらがな・カタカナ・基本漢字、初級前半"

  section_3_test_structure:
    title: "試験構成と評価項目"
    questions:
      - "各レベルの試験科目構成（言語知識・読解・聴解）"
      - "試験時間配分"
      - "問題形式（選択式の種類）"
      - "出題範囲（語彙数・漢字数・文法項目）"
    
    detail_by_level:
      N1_N2:
        sections:
          - "言語知識（文字・語彙・文法）・読解"
          - "聴解"
      N3:
        sections:
          - "言語知識（文字・語彙）"
          - "言語知識（文法）・読解"
          - "聴解"
      N4_N5:
        sections:
          - "言語知識（文字・語彙）"
          - "言語知識（文法）・読解"
          - "聴解"

  section_4_scoring_system:
    title: "得点算出・合否判定システム"
    questions:
      - "尺度得点（Scaled Score）の算出方法と意義"
      - "項目応答理論（IRT）の適用"
      - "等化（Equating）による難易度調整"
      - "各レベルの得点範囲と配点"
      - "合格基準点（総合得点・基準点）"
      - "基準点の意味（各科目の最低ライン）"
    
    scoring_table_request:
      columns:
        - "レベル"
        - "得点区分"
        - "得点範囲"
        - "合格点（総合）"
        - "基準点（各科目）"

  section_5_can_do_statements:
    title: "Can-do statements（自己評価リスト）"
    questions:
      - "JF日本語教育スタンダードとの関係"
      - "CEFR（ヨーロッパ言語共通参照枠）との対応関係"
      - "各レベルのCan-do記述（読む・聞く・話す・書く）"
      - "自己評価と試験得点の相関研究"
      - "Can-doリストの活用方法（学習目標設定・到達度確認）"
    
    cefr_correspondence:
      note: "JLPTとCEFRの対応関係（公式・非公式）を調査"
      expected_mapping:
        N1: "C1相当"
        N2: "B2相当"
        N3: "B1相当"
        N4: "A2相当"
        N5: "A1相当"

  section_6_validity_research:
    title: "妥当性・信頼性に関する研究"
    questions:
      - "JLPTの構成概念妥当性に関する研究"
      - "予測妥当性（就労・進学との関連）"
      - "信頼性係数"
      - "項目分析結果の公開状況"
      - "批判的検討（限界・課題）"

  section_7_employment_application:
    title: "就労場面での活用"
    questions:
      - "在留資格要件としてのJLPT（特定技能・技能実習等）"
      - "企業の採用基準としての活用実態"
      - "介護・福祉分野での日本語要件"
      - "N3/N4レベルでの就労可能性と課題"
      - "やさしい日本語との関係"
    
    specific_context:
      disability_employment_support: |
        障害福祉就労支援サービス（就労移行支援・就労継続支援）において
        外国籍利用者の日本語能力をどのように評価・支援すべきか。
        N認定レベルと就労可能性の関係を検討する。

  section_8_assessment_alternatives:
    title: "JLPTの限界と補完的評価"
    questions:
      - "JLPTが測定しない能力（話す・書く）"
      - "職場日本語能力の評価方法"
      - "BJTビジネス日本語能力テストとの比較"
      - "EPA介護福祉士候補者向け日本語研修との関係"
      - "OPI（Oral Proficiency Interview）等の面接式評価"

output_requirements:
  
  format:
    structure: "Markdown形式、見出し階層化"
    tables: "レベル別情報は表形式で整理"
    citations: "公式資料・学術文献の出典明記"
    language: "日本語"
  
  deliverables:
    - type: "概要サマリー"
      length: "800-1,200字"
      content: "JLPT N認定制度の全体像"
    
    - type: "N1〜N5レベル比較表"
      format: "表形式"
      columns:
        - "レベル"
        - "認定の目安"
        - "試験科目・時間"
        - "得点範囲"
        - "合格基準"
        - "CEFR対応"
        - "想定学習時間"
    
    - type: "得点算出・合否判定の詳細"
      length: "500-800字"
      content: "尺度得点・基準点の仕組み"
    
    - type: "Can-do statements一覧"
      format: "レベル別・技能別マトリクス"
    
    - type: "就労支援への示唆"
      length: "400-600字"
      content: "障害福祉就労支援における活用考察"
    
    - type: "参考文献・公式リソースリスト"
      format: "URL付きリスト"

search_scope:
  
  priority_sources:
    - "国際交流基金公式サイト（jlpt.jp）"
    - "日本国際教育支援協会公式資料"
    - "JF日本語教育スタンダード"
    - "文化庁「日本語教育の参照枠」"
    - "CiNii/J-STAGE収載の学術論文"
  
  keywords:
    japanese:
      - "日本語能力試験"
      - "JLPT"
      - "N1 N2 N3 N4 N5"
      - "認定基準"
      - "尺度得点"
      - "Can-do statements"
      - "日本語教育スタンダード"
      - "CEFR 日本語"
      - "就労 日本語能力"
      - "特定技能 日本語要件"
    english:
      - "Japanese-Language Proficiency Test"
      - "JLPT scoring system"
      - "JLPT CEFR alignment"
      - "Japanese language assessment"
  
  exclusion:
    - "個人ブログの受験体験記"
    - "非公式の予想問題・対策本レビュー"
    - "2010年改定以前の旧制度情報（歴史的文脈除く）"

metadata:
  target_folder: "05_practice/"
  file_name_suggestion: "JLPT_N_certification_research_2025_02_01.md"
  integration_with:
    - "外国人利用者の日本語能力評価"
    - "多文化共生型就労支援"
    - "やさしい日本語による支援コミュニケーション"
```

---

## 使用方法

1. 上記YAMLブロック全体をコピー
2. DeepResearchに投入
3. 出力されたMarkdownレポートを `05_practice/` フォルダに保存

## 期待される出力構成

```
JLPT_N_certification_research_2025_02_01.md
├── 1. 概要サマリー
├── 2. JLPT制度の概要と歴史
├── 3. N1〜N5レベル定義と比較表
├── 4. 試験構成と評価項目
├── 5. 得点算出・合否判定システム
├── 6. Can-do statements
├── 7. CEFR対応関係
├── 8. 就労場面での活用
├── 9. 限界と補完的評価
├── 10. 就労支援への示唆
└── 参考文献・公式リソース
```
