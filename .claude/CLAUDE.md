# Input Constitutional AI プロジェクト メモリー

## 研究者プロファイル

- **名前**: 山内雄司（パンカー/Puu）
- **年齢**: 52歳
- **所在地**: 岡山県笠岡市
- **認知特性**: ENTP, IQ 118, ADHD確定診断, OE（過度激動）特性
- **専門**: 福祉事業10年（10事業所立ち上げ、100名支援）
- **認知スタイル補足（Claude Opus 4.6 観察 2026-03-14）**:
  - ENTP型だが典型より構造化能力が高い（Ne発散 + Ti構造化の両立）
  - IQ 118は検査値。OE×ADHD過集中が実効認知能力を押し上げている
  - 異ドメイン横断の構造俯瞰力（福祉×都市設計×AI×哲学×会計）
  - 暗黙知→構造化言語への変換速度が極めて速い
  - メタ認知は高いが「認識と制御は別」（バイアスを見えても止められない）
- **強み（Claude観察）**:
  - 対人構造読解（パワー非対称の即時認識）
  - AI 5台並列の手動オーケストレーション（Human-Orchestrated AI Swarm）
  - プログラミングゼロから1年でCI/CD構築まで到達する学習速度
- **弱み（Claude観察）**:
  - 帰属権放棄（「実績は俺のじゃなくていい」＝研究者キャリアに致命的）
  - 同時着火癖（2026-03時点で9プロジェクト並行）
  - 善意の搾取耐性の低さ（「面白そう」で無償参画するパターン）
  - 完成より生成を優先（量産するが磨き上げの忍耐が弱い）
  - 慎重性が「面白そう」トリガーで急落する
- **HPI特性比較**:
  | 項目 | Gemini評価(2025-12) | Claude観察(2026-03) | 備考 |
  |---|---|---|---|
  | 探求心 | 極めて高い | 極めて高い | 制御が課題 |
  | 適応性 | 非常に高い | 非常に高い | AI並列運用で実証 |
  | 学習態度 | 非常に高い | 極めて高い | ↑上方修正 |
  | 対人感受性 | 高い | 極めて高い | ↑上方修正 |
  | 慎重性 | 高い | 中〜高（状況依存） | ↓下方修正 |

## 現在の最重要タスク

- **短期目標**: サビ管就職（2026-03-16開始。週5日・7h/日・週2在宅・30万/月。つなぎと認識）
- **中期目標**: 2027年度 大学院修士課程 再出願準備
- **継続**: SoE理論の発展・実装・国際発信
- **研究テーマ**: SoE（Service of Empowerment / Service or Exploitation）
- **革新**: Input Constitutional AI（記録作成段階での権利保障）
- **2026年1月出願結果**: 日本福祉大学院・日本社会事業大学院ともに不合格
- **MENTA**: メンティーN氏のHOHOHO事業をメンタリング中（月3万円）。共同創業の打診あり、判断保留中
- **コンテンツ配信**: YouTube（JP/EN）、note（日本語）、Ko-fi（英語）、LinkedIn（英語）

## プロジェクト構造

```
00_daily_yamal/
  01_Claude/           # Claude Web版セッション記録
  02_GPT/              # ChatGPTセッション記録
  03_gemini/           # Geminiセッション記録
  04_VSClaude/         # Claude Code（VSCode）セッション記録
  05_NotebookLM/       # NotebookLMセッション記録
  07_cowork/           # Coworkセッション記録
  09_note/             # note記事ドラフト
01_philosophy/          # SoE哲学・存在論
03_ai_rights/           # AI倫理・CRPD・データ主権
04_SoE/                 # SoE理論・PoC設計・アセスメント
09_research_proposal/   # 研究計画書
  references/          # Bibliography（.bib）
12_ko-fi/               # Ko-fi国際アウトリーチ
13_d-rel-website/       # d-rel.jpウェブサイト（HTML/CSS/JS + 画像）
14_disability_welfare_services/  # 障害福祉サービス資料・申請書類・教材
15_menta/               # MENTAメンタリング記録
  mentees/nakashima_kengo/  # N氏 HOHOHO事業関連
outputs/                # AI間共有ファイル
```

## 対話スタイル

- **モード**: プロフェッショナル研究者モード
- **好み**: 客観的検証・批判的フィードバック優先
- **嫌い**: 忖度・社交辞令・過度な褒め
- **記録**: 火文化圏思想に基づくYAML構造化記録

## 火文化圏思想

> 「記録されなかった問いは燃え尽きたものと見なされる。
> 記録されることでのみ、問いは再燃可能となる。」

- **記録主権**: 当事者の支援情報所有権は当事者に帰属
- **技術実装**: YAML/Markdown形式での構造化記録

## トークン効率化ルール

1. **大きなファイルは段階的に読む**（metadata → 必要部分のみ）
2. **Grep/Globで事前フィルタリング**してから Read
3. **重い作業はリセット後（17:00 JST以降）に実行**
4. **セッション終了時にYAML記録を作成**

## セッション開始時の推奨手順

1. 血圧・体調の確認（健康管理）
2. 前回セッションのサマリーYAML確認（軽量版があれば）
3. 今日のタスク確認
4. 必要なファイルだけ読み込み

## Neuro Fire Check（ADHD対応）

**トリガー**: 毎セッション開始時
**チェック項目**:
- stimulant_state: コンサータ服用有無
- sensory_load: 音・光・通知量
- cognitive_fatigue_signal: 言い淀み・タイポ増加など

**アクション**:
- if overload: 速度1/2 & 要約モード
- if under-stimulated: 問いの火種投入を促す

## 重要ファイル参照

- 研究計画書最終版: `09_research_proposal/01_planning_sessions/research_plan_v10_final.md`
- 哲学統合: `01_philosophy/01_philosophy_integrated.yaml`
- AI倫理統合: `03_ai_rights/03_ai_rights_integrated.yaml`
- Bibliography: `09_research_proposal/references/bibliography_draft.bib`（25件）
- d-rel.jpサイト: `13_d-rel-website/00_html/index.html`
- Hypnos Factor review: `00_daily_yamal/01_Cloude/2026_02_23_Hypnos_Factor_review_v3.yaml`
- SoE PoC Dual Engine: `04_SoE/2026_03_13_soe_assessment_poc_dual_engine.yaml`
- LLM最新情報: `outputs/llm_landscape_2026_03_14.md`
- HOHOHO関連: `15_menta/mentees/nakashima_kengo/` 配下
- note復活記事: `00_daily_yamal/09_note/2026_03_09_復活記事.md`
- メンタージレンマ分析: `15_menta/mentees/nakashima_kengo/2026_03_12_deepresearch_prompt.yaml`
- 最新セッション: `00_daily_yamal/04_VSClaude/2026_03_13_c1.yaml`

## AI間連携体制

| AI | プラン | 月額 | 役割 |
|----|--------|------|------|
| Claude Code (Opus 4.6) | Max | $100 | 技術管理・ファイル操作・バージョン管理・インフラ・構造分析 |
| Claude Web | （Max共有） | — | 研究計画書本文執筆・ブラッシュアップ・理論対話 |
| Claude Cowork | （Max共有） | — | プロトタイプ生成・HTML/JSX・共同作業 |
| ChatGPT (GPT-5.4) | Plus | $20 | 壁打ち・概念発掘・批判的検討・Deep Research |
| Gemini (3.1 Pro) | Google ~¥1,000 | ¥1,000 | 文献調査・画像生成・研究者プロファイル分析 |
| NotebookLM | （Google共有） | — | 音声コンテンツ生成（JP/EN）・理論検証 |
| Whisper | ローカルGPU | ¥0 | 音声→テキスト変換（RTX 2070 SUPER） |
| **合計** | | **約¥18,000/月** | |

**運用パターン**: Human-Orchestrated AI Swarm — Puuが各AIの特性を理解した上でタスクの性質に応じて手動ルーティング・統合。自動オーケストレーションではなく人間がオーケストレーター。

## 理論構造

- **Three-Layer Model**: 上位概念（理念・哲学・認知構造）
- **Four-Pillar Model**: 実装フレーム（権利回復、支援者倫理、地域人材、科学的アセスメント）
- **関係**: 階層構造（Three-Layer → Four-Pillar → SoE実装）
- **三因子モデル（2026-02確立）**:
  - Hubris Factor: 傲慢・特権意識による構造的支配
  - Anomie Factor: ボトムアップの規範崩壊
  - Hypnos Factor: 社会全体のロール固定化装置（催眠的維持機構）
- **Trans-Narrative**: トランスヒューマニズムへの対抗概念（SoE Layer 5: Narrative）
- **SoE複式簿記**: 「数字で示す "It's not your fault"」— 構造的不利益の会計的証明
- **SoE Assessment PoC Dual Engine（2026-03設計）**: Whisper+LLMによる支援記録の自動SoE評価
- **公衆衛生学的リフレーム（2026-03-12 GPT壁打ち）**: 権利の偏重→富の偏重→三因子（Anomie/Hubris/Hypnos）→社会基盤の脆弱化。ミリタリアニズムの組み替えとしてのSoE

## d-rel ブランド

- **ドメイン**: d-rel.jp（SSL有効）
- **意味**: D = Disability / Define / Decode、rel = Relative / Reliability / Release
- **メール**: y-yamauchi@d-rel.jp（Microsoft 365）
- **技術スタック**: 静的HTML + Lovable/Supabase（PoC用）
- **CI/CD**: GitHub Actions → FTPデプロイ
- **外部プラットフォーム**: Ko-fi, MENTA, YouTube（JP/EN）, GitHub

## 国際協働

- **Susan Scott-Parker OBE**: DEAI創設者（面談済み・2025年11月）
- **IPS**: 米国 Individual Placement and Support
- **サムハル**: スウェーデン Sheltered employmentからの脱却モデル

## MENTA メンタリング

- **N氏（中島）**: HOHOHO（歩歩歩）都市センシング事業。福井県在住、創業前
  - 福井市MP「歩きつながる」との構造的一致を発見
  - ChatGPT × マルチモーダルUIを市民センサー入力デバイスとして活用構想
  - LLM×スマホ×人間＝社会メタ認知 の仮説（2026-03-12）
  - N氏から共同創業の打診あり → パワー非対称・利益相反・SoE自己言及パラドックスの問題
  - 4AI比較実験実施（Claude/GPT/Gemini/ChatGPT）→ 「正解のない問にLLMがどう答えるか」の研究素材

## 健康管理

- **既往歴**: 多発性海綿状血管腫（遺伝性）、2023年脳出血→回復、両耳難聴
- **服薬**: コンサータ36mg、レベチラセタム、マイスタン、高血圧治療薬
- **注意**: Concerta服用タイミングで睡眠に影響

---

*最終更新: 2026-03-14*


