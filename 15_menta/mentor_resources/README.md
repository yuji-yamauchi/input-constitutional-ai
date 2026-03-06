# メンターリソース

メンター側で使用するマーケティング素材、ロール定義、テンプレート、実績集

## ディレクトリ構造

```
mentor_resources/
├── marketing/          # マーケティング・プロモーション素材
│   └── notebooklm_source_mentor_profile.md
├── roles/              # AIロール定義（秘書官・議事官等）
│   ├── hishokan_bias_detection.yaml
│   └── mentee_sovereignty_check.yaml
├── templates/          # 再利用可能なテンプレート
└── case_studies/       # 匿名化された実績・ケーススタディ
    └── 2026_01_case_infrastructure_startup.md
```

## ロール定義

### 秘書官（Hishokan）
- **目的**: メンターの認知バイアスを検出・警告
- **対象**: 8つの偏重パターン（パターナリズム、救世主コンプレックス等）
- **ファイル**: `roles/hishokan_bias_detection.yaml`

### メンティー主体性チェック
- **目的**: メンティーの自走が阻害されていないか監査
- **視点**: メンティー側から見た健全性
- **ファイル**: `roles/mentee_sovereignty_check.yaml`

## ケーススタディ（匿名化実績）

### 命名規則

```
YYYY_MM_case_{領域キーワード}.md
```

例: `2026_01_case_infrastructure_startup.md`

### 匿名化ルール

- 個人名 → メンティーA/B/C
- 企業名 → 企業X/Y/Z
- 地名 → 地方都市、都市X
- プロジェクト名 → プロジェクトA

---

## SoEとの整合性

これらのロール定義は、SoE（Service of Empowerment）における
「支援者倫理」の実装として設計されている。

**核心の問い**: 支援が Empowerment か Exploitation か？

---

*作成: 2026-01-25*
