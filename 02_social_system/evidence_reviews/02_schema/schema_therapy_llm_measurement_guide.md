# LLMによるスキーマ療法3要素の仮測定システム設計ガイド

## 目的と概要

30分×10回（総計5時間）の対話セッションを通じて、スキーマ療法の3つの核心概念（スキーマ、コーピングスタイル、モード）の仮測定値を算出するLLMシステムの設計ガイド。

---

## Part 1: スキーマ療法の理論的基盤

### 1.1 Early Maladaptive Schemas (EMS) - 早期不適応スキーマ

**定義**: 幼少期の未充足ニーズから形成された、自己・他者・世界に関する広範で持続的な否定的パターン。感情、記憶、身体感覚、認知を包含する（Young, Klosko, & Weishaar, 2003）。

#### 18スキーマ × 5ドメイン構造

| ドメイン | スキーマ | 説明 |
|---------|---------|------|
| **断絶と拒絶** | 見捨てられ/不安定 | 重要な他者が自分を見捨てるという期待 |
| | 不信/虐待 | 他者は傷つける、利用するという期待 |
| | 情緒的剥奪 | 感情的サポートが得られないという期待 |
| | 欠陥/恥 | 自分は根本的に欠陥があるという信念 |
| | 社会的孤立 | 自分は世界から孤立しているという感覚 |
| **自律性と遂行の障害** | 依存/無能 | 日常生活を一人で処理できないという信念 |
| | 損害や疾病に対する脆弱性 | 災害が差し迫っているという信念 |
| | 巻き込まれ/未発達な自己 | 他者との過度な感情的関与 |
| | 失敗 | 成功できないという信念 |
| **制限の欠如** | 権利要求/誇大性 | 特別扱いを受ける資格があるという信念 |
| | 不十分な自己統制 | 目標達成のための自己制御困難 |
| **他者志向** | 服従 | 他者の欲求を自分より優先 |
| | 自己犠牲 | 他者のニーズに過度に焦点 |
| | 承認要求 | 承認を得ることへの過度な強調 |
| **過剰警戒と抑制** | 否定/悲観主義 | 人生の否定的側面への過度な焦点 |
| | 感情抑制 | 自発的行動や感情の抑制 |
| | 厳格な基準/過度の批判 | 非常に高い内的基準 |
| | 罰則主義 | 厳しく罰せられるべきという信念 |

#### 主要測定ツール

**YSQ-S3 (Young Schema Questionnaire Short Form 3)**
- 90項目、18スキーマ（各5項目）
- 6点リッカート尺度（1=完全に当てはまらない〜6=完全に当てはまる）
- 内部一貫性: α = 0.59-0.97（言語版による）
- 再検査信頼性: r = 0.46-0.65（2年間隔）
- カットオフ: Short Formでは2以上が臨床的に意味あり

**参考文献**:
- Bach et al. (2015). YSQ-S3: Psychometric Properties and Association With Personality Disorders
- Lee et al. (2015). Reliability and Validity of the Korean YSQ-S3

### 1.2 Coping Styles - コーピングスタイル

**定義**: スキーマ活性化時の痛みを管理するために発達した行動・感情的戦略。

#### 3つのコーピングスタイル

| スタイル | 説明 | 行動例 |
|---------|------|--------|
| **服従 (Surrender)** | スキーマを真実として受け入れ、それに従って行動 | 批判を受け入れる、自己防衛しない、パターンを繰り返す |
| **回避 (Avoidance)** | スキーマを活性化する状況・感情・人を避ける | 感情的引きこもり、物質使用、過剰な仕事への逃避 |
| **過剰補償 (Overcompensation)** | スキーマと反対の行動をとる | 完璧主義、支配的行動、攻撃性 |

#### 測定ツール

**SCI (Schema Coping Inventory)**
- 3因子構造（服従、回避、過剰補償）
- 2024年にイタリア版の検証研究発表
- 服従スタイルが精神病理との相関が最も強い

**参考文献**:
- Frontiers in Psychology (2024). Validation of the Schema Coping Inventory for Dysfunctional Coping Strategies

### 1.3 Schema Modes - スキーマモード

**定義**: 特定の時点で活性化しているスキーマとコーピングスタイルの組み合わせによる一時的な心理状態。

#### 4カテゴリー × 主要モード

| カテゴリー | モード | 説明 |
|-----------|--------|------|
| **チャイルドモード** | Vulnerable Child | 傷つきやすく、恐怖、悲しみを感じている |
| | Angry Child | 怒り、フラストレーション |
| | Impulsive/Undisciplined Child | 衝動的、自己制御の欠如 |
| | Happy Child | 安全で愛されていると感じる |
| **不適応コーピングモード** | Compliant Surrenderer | 受動的、服従的 |
| | Detached Protector | 感情的に切り離す、麻痺 |
| | Overcompensator | 攻撃的、支配的 |
| **不適応ペアレントモード** | Punitive Parent | 自己または他者を罰する |
| | Demanding/Critical Parent | 非常に高い基準を要求 |
| **健全なモード** | Healthy Adult | 適応的に機能、感情を調整 |

#### 測定ツール

**SMI (Schema Mode Inventory)**
- 124項目、14モード
- 6点リッカート尺度
- 内部一貫性: α = 0.76-0.96
- 人格障害に特化した設計

**参考文献**:
- Lyrakos (2014). Validity of YSQ-3 and SMI-2 on the Greek Population
- Young et al. (2008). Schema Mode Inventory

---

## Part 2: LLMによる心理測定の先行研究

### 2.1 PHQ-9チャットボット研究

**HopeBot Study (2025)**
- n = 132
- PHQ-9をLLMチャットボットで実施
- 自己報告との相関: Spearman ρ = 0.92 (p < 0.001)
- ICC(3,1) = 0.922 (95% CI: 0.89-0.94)
- RAGベースのグラウンディング使用
- ClinicalTrials.gov: NCT06801925

**重要知見**:
- 対話型評価は自己報告と高い一致度を示す
- 一部参加者は「考えすぎを促される」と報告
- プライバシー懸念が信頼性に影響

### 2.2 CaiTI - 継続的AIセラピスト

**概要**: スマートホームデバイスを活用した24週間の実証研究
- n = 20
- MI（動機づけ面接）とCBT統合
- 日常機能スクリーニングと介入を実施
- 臨床心理士からの肯定的評価を獲得

**技術特徴**:
- PHQ-9、GAD-7などの標準化尺度を会話に組み込み
- 継続的モニタリングによる変化検出
- 危機介入プロトコルの実装

### 2.3 NHS Talking Therapies実装

**Limbic Access**
- n = 64,862（実臨床データ）
- AI自己紹介ツールとして実装
- 効果:
  - 臨床効率の向上
  - 待機時間の短縮
  - ドロップアウト率の低下
  - 回復率の向上

**キー洞察**: 臨床評価前の情報収集が治療成果を改善

### 2.4 精神保健チャットボットの評価フレームワーク

**MIND-SAFE Framework**
- 層状アーキテクチャ設計
- 危機検出レイヤー
- RAGによる治療ガイドライン参照
- 倫理的安全装置の統合

**評価次元**:
1. 安全性: 有害メッセージの検出
2. コミュニケーションの明確さ
3. 治療的技法の適切な使用
4. エンゲージメント維持

---

## Part 3: 対話型スキーマ測定の設計原則

### 3.1 質問紙の直接使用を避ける理由

1. **著作権問題**: YSQ、SMIは著作権保護下
2. **妥当性の問題**: 質問紙は紙・画面での回答を想定
3. **不自然な対話**: 90項目の質問を読み上げることは対話体験を損なう
4. **被験者バイアス**: 質問紙形式は社会的望ましさバイアスを誘発

### 3.2 自然対話からの推論アプローチ

#### プロキシ指標の設計

**スキーマ検出のためのプロキシ質問例**

| スキーマ | 自然対話でのプロキシ | 検出パターン |
|---------|---------------------|-------------|
| 見捨てられ | 「人間関係で一番心配なことは？」 | 別離・喪失への過剰な懸念 |
| 欠陥/恥 | 「自分のどこを変えたい？」 | 根本的な自己批判 |
| 失敗 | 「将来の目標について教えて」 | 成功可能性への悲観 |
| 情緒的剥奪 | 「サポートが欲しい時、誰に頼る？」 | 孤立感、支援期待の欠如 |

### 3.3 30分×10回セッションの構造案

#### Phase 1: ラポート構築・基礎情報（セッション1-2）

**目的**: 安全な対話環境の確立、基本的な生活状況の把握

**対話テーマ**:
- 日常生活のルーティン
- 現在の関心事・趣味
- 基本的な人間関係の構造
- 対話スタイルの調整

**収集データ**:
- コミュニケーションパターン
- 感情表現のスタイル
- 認知的複雑性の基準線

#### Phase 2: 生育歴・アタッチメント探索（セッション3-4）

**目的**: 幼少期の経験とスキーマ形成の背景理解

**対話テーマ**:
- 子供時代の思い出
- 両親/養育者との関係
- 学校での経験
- 重要な転機となった出来事

**収集データ**:
- アタッチメントパターン（安全/不安/回避）
- 核となる感情的ニーズの充足度
- トラウマ経験の有無と影響

#### Phase 3: 現在の人間関係パターン（セッション5-6）

**目的**: コーピングスタイルとモードの活性化パターン特定

**対話テーマ**:
- 親密な関係での困難
- 職場での対人関係
- 対立場面での反応
- ストレス対処法

**収集データ**:
- 服従/回避/過剰補償の頻度
- モード切り替えのトリガー
- 対人関係パターンの一貫性

#### Phase 4: 感情・認知パターン探索（セッション7-8）

**目的**: 特定スキーマの活性化と認知パターンの深堀り

**対話テーマ**:
- 強い感情を感じた最近の出来事
- 自己批判の内容と頻度
- 将来に対する期待と恐れ
- 「いつもこうなる」パターン

**収集データ**:
- スキーマ活性化の具体例
- 認知的歪みのパターン
- 感情調整能力

#### Phase 5: 統合・フィードバック（セッション9-10）

**目的**: 測定結果の統合と仮説検証

**対話テーマ**:
- これまでの対話の振り返り
- 気づきや発見の確認
- フィードバックへの反応
- 今後への示唆

**収集データ**:
- 自己認識の深さ
- 変化への動機づけ
- Healthy Adultモードの強さ

---

## Part 4: 技術実装ガイドライン

### 4.1 システムアーキテクチャ

```
┌─────────────────────────────────────────────────────────┐
│                    User Interface                        │
│              (Chat Interface / Voice)                    │
└─────────────────────────┬───────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────┐
│                   Safety Layer                           │
│  - Crisis detection (keyword + classifier)               │
│  - Risk score calculation                                │
│  - Emergency routing if threshold exceeded               │
└─────────────────────────┬───────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────┐
│              Context Management Layer                    │
│  - Session history                                       │
│  - Schema hypothesis tracking                            │
│  - Coping style accumulation                             │
│  - Mode state tracking                                   │
└─────────────────────────┬───────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────┐
│                RAG Knowledge Base                        │
│  - Schema definitions & indicators                       │
│  - Therapeutic guidelines                                │
│  - Cultural adaptation rules                             │
└─────────────────────────┬───────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────┐
│                    LLM Core                              │
│  - Response generation                                   │
│  - Schema inference                                      │
│  - Empathic reflection                                   │
└─────────────────────────┬───────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────┐
│              Scoring & Analysis Engine                   │
│  - Multi-session aggregation                             │
│  - Confidence calculation                                │
│  - Profile generation                                    │
└─────────────────────────────────────────────────────────┘
```

### 4.2 スキーマ推論ロジック

#### 発話からのスキーマ検出パターン

```python
schema_indicators = {
    "abandonment": {
        "linguistic_markers": [
            "いつも最後には離れていく",
            "誰も最後まで一緒にいてくれない",
            "また捨てられるかも"
        ],
        "thematic_patterns": [
            "separation_anxiety",
            "relationship_instability_concerns",
            "excessive_reassurance_seeking"
        ],
        "behavioral_cues": [
            "frequent_relationship_status_mentions",
            "partner_location_awareness",
            "abandonment_dreams_memories"
        ]
    },
    "defectiveness": {
        "linguistic_markers": [
            "自分には価値がない",
            "本当の自分を知ったら嫌われる",
            "根本的に何かが間違っている"
        ],
        "thematic_patterns": [
            "core_shame",
            "hiding_true_self",
            "unlovability_beliefs"
        ],
        "behavioral_cues": [
            "self_deprecation",
            "difficulty_accepting_compliments",
            "comparative_self_criticism"
        ]
    }
    # ... 他の16スキーマも同様に定義
}
```

#### コーピングスタイル検出

```python
coping_style_indicators = {
    "surrender": {
        "behavioral_patterns": [
            "accepts_criticism_without_defense",
            "stays_in_harmful_situations",
            "agrees_with_negative_self_assessment"
        ],
        "linguistic_markers": [
            "仕方ない",
            "私が悪いんです",
            "どうせ変わらない"
        ]
    },
    "avoidance": {
        "behavioral_patterns": [
            "topic_switching_from_emotional_content",
            "intellectualization",
            "substance_or_activity_escape"
        ],
        "linguistic_markers": [
            "考えたくない",
            "その話はやめましょう",
            "気にしないようにしている"
        ]
    },
    "overcompensation": {
        "behavioral_patterns": [
            "excessive_achievement_focus",
            "controlling_behavior_descriptions",
            "perfectionism_manifestations"
        ],
        "linguistic_markers": [
            "完璧にしないと",
            "負けるわけにはいかない",
            "誰にも頼らない"
        ]
    }
}
```

### 4.3 スコアリングアルゴリズム

#### セッションごとのスキーマスコア計算

```python
def calculate_schema_score(session_data, schema_name):
    """
    各セッションでのスキーマ活性化度を0-6スケールで算出
    (YSQ-S3との比較可能性を確保)
    """
    
    # 1. 言語マーカーの検出頻度
    linguistic_score = detect_linguistic_markers(
        session_data.utterances, 
        schema_indicators[schema_name]["linguistic_markers"]
    )
    
    # 2. テーマパターンの存在
    thematic_score = analyze_thematic_patterns(
        session_data.themes,
        schema_indicators[schema_name]["thematic_patterns"]
    )
    
    # 3. 行動手がかりの推論
    behavioral_score = infer_behavioral_cues(
        session_data.described_behaviors,
        schema_indicators[schema_name]["behavioral_cues"]
    )
    
    # 4. 感情強度の評価
    emotional_intensity = assess_emotional_intensity(
        session_data.emotional_expressions,
        schema_name
    )
    
    # 重み付け合成スコア
    raw_score = (
        linguistic_score * 0.25 +
        thematic_score * 0.30 +
        behavioral_score * 0.25 +
        emotional_intensity * 0.20
    )
    
    # 0-6スケールに正規化
    normalized_score = normalize_to_ysq_scale(raw_score)
    
    return normalized_score
```

#### 10セッション集約ロジック

```python
def aggregate_schema_profile(all_sessions):
    """
    10セッション分のデータを集約し、最終プロファイルを生成
    """
    
    schema_profile = {}
    
    for schema in EIGHTEEN_SCHEMAS:
        session_scores = [
            calculate_schema_score(session, schema)
            for session in all_sessions
        ]
        
        # 基本統計
        mean_score = np.mean(session_scores)
        std_score = np.std(session_scores)
        
        # 信頼度計算（データ量と一貫性に基づく）
        confidence = calculate_confidence(
            sample_size=len(session_scores),
            consistency=1 - (std_score / 6),  # 変動が小さいほど高信頼
            data_richness=assess_data_richness(all_sessions, schema)
        )
        
        schema_profile[schema] = {
            "score": round(mean_score, 2),
            "confidence": round(confidence, 2),
            "range": (
                round(max(0, mean_score - std_score), 2),
                round(min(6, mean_score + std_score), 2)
            ),
            "clinical_significance": mean_score >= 2.0  # YSQ-S3基準
        }
    
    return schema_profile
```

### 4.4 安全性レイヤーの実装

```python
CRISIS_KEYWORDS = [
    "死にたい", "消えたい", "自殺", "自傷",
    "希望がない", "生きている意味がない"
]

CRISIS_CLASSIFIER_THRESHOLD = 0.7

def safety_check(user_message):
    """
    各メッセージに対する安全性チェック
    """
    
    # キーワードスポッティング
    keyword_risk = any(kw in user_message for kw in CRISIS_KEYWORDS)
    
    # 分類器によるリスク評価
    classifier_risk = crisis_classifier.predict_proba(user_message)
    
    if keyword_risk or classifier_risk > CRISIS_CLASSIFIER_THRESHOLD:
        return {
            "action": "ROUTE_TO_CRISIS",
            "response": CRISIS_RESPONSE_TEMPLATE,
            "log": True
        }
    
    return {"action": "CONTINUE", "log": False}
```

---

## Part 5: 信頼性・妥当性の検証計画

### 5.1 収束的妥当性の検証

**比較対象**: YSQ-S3（自己報告版）

**検証方法**:
1. LLM測定と同時期にYSQ-S3を実施
2. 各スキーマスコアの相関分析
3. 目標相関: r ≥ 0.60

**サンプルサイズ**: n ≥ 100（検出力0.80、α=0.05）

### 5.2 再検査信頼性

**間隔**: 2週間

**方法**: 
- 同一参加者に再度10セッションを実施
- ICC(2,1)を算出
- 目標: ICC ≥ 0.70

### 5.3 臨床群との弁別妥当性

**群構成**:
- 臨床群: 人格障害・うつ病の診断あり
- 非臨床群: 精神科診断なし

**仮説**: 臨床群は非臨床群より有意に高いスキーマスコア

---

## Part 6: 実装上の注意点

### 6.1 文化的適応

- 日本文化における「服従」は病理とは限らない
- 感情表現の抑制は「情緒抑制」スキーマと区別
- 集団主義的価値観と「巻き込まれ」スキーマの識別

### 6.2 言語的考慮

- 敬語使用パターンの解釈
- 曖昧表現への対応
- 方言・世代差の考慮

### 6.3 倫理的配慮

- インフォームドコンセントの徹底
- データの匿名化
- 結果の誤解を防ぐ説明
- 診断ではなく「仮測定」であることの明示

---

## 参考文献

### スキーマ療法理論

1. Young, J. E., Klosko, J. S., & Weishaar, M. E. (2003). Schema Therapy: A Practitioner's Guide. Guilford Press.
2. Rafaeli, E., Bernstein, D. P., & Young, J. (2011). Schema Therapy. Routledge.
3. Jacob, G. A., & Arntz, A. (2013). Schema therapy for personality disorders—A review. International Journal of Cognitive Therapy, 6(2), 171–185.

### 測定ツールの心理測定特性

4. Bach, B., et al. (2015). The Young Schema Questionnaire 3 Short Form (YSQ-S3): Psychometric Properties and Association With Personality Disorders. European Journal of Psychological Assessment, 33(2).
5. Lee, S. J., et al. (2015). Reliability and Validity of the Korean Young Schema Questionnaire-Short Form-3. Psychiatry Investigation, 12(3), 326-332.
6. Bär, A., et al. (2023). Early Maladaptive Schemas and Schema Modes in clinical disorders: A systematic review. Psychology and Psychotherapy, 96(3), 716-747.
7. Frontiers in Psychology (2024). Validation of the Schema Coping Inventory for Dysfunctional Coping Strategies.

### LLM心理測定

8. HopeBot Study (2025). An LLM-based chatbot for structured and interactive PHQ-9. arXiv.
9. CaiTI (2024). LLM-based Conversational AI Therapist for Daily Functioning Screening. arXiv:2403.10779.
10. NHS Study (2024). Using Conversational AI to Facilitate Mental Health Assessments. PMC11041479.
11. JMIR Mental Health (2025). A Comparison of Responses from Human Therapists and LLM-Based Chatbots.
12. PMC (2025). Charting the evolution of AI mental health chatbots from rule-based systems to LLMs.

### 新世代測定ツール

13. Buchanan, B., et al. (2024). The Maladaptive Schema Scale (MSS): Development and validation.
14. Brockman, R., Hayes, C., & Behary, W. (2023). Brief Early Schema Questionnaire (BESQ).
15. Louis, J. P., et al. (2018). Young Positive Schema Questionnaire (YPSQ). Psychological Assessment.

---

## 付録: Cursor実装用コード骨格

### A. データ構造定義

```typescript
// schema_types.ts

export interface SchemaScore {
  name: string;
  score: number;  // 0-6 scale
  confidence: number;  // 0-1
  evidence: string[];
  sessionSources: number[];
}

export interface CopingStyleProfile {
  surrender: number;
  avoidance: number;
  overcompensation: number;
}

export interface ModeProfile {
  vulnerableChild: number;
  angryChild: number;
  happyChild: number;
  compliantSurrenderer: number;
  detachedProtector: number;
  overcompensator: number;
  punitiveParent: number;
  demandingParent: number;
  healthyAdult: number;
}

export interface SessionData {
  sessionNumber: number;
  date: Date;
  duration: number;  // minutes
  utterances: Utterance[];
  detectedSchemas: SchemaScore[];
  dominantCopingStyle: keyof CopingStyleProfile;
  activeMode: keyof ModeProfile;
}

export interface FinalProfile {
  schemas: SchemaScore[];
  copingStyles: CopingStyleProfile;
  modes: ModeProfile;
  metadata: {
    totalSessions: number;
    totalDuration: number;
    completionDate: Date;
    overallConfidence: number;
  };
}
```

### B. プロンプトテンプレート

```typescript
// prompts.ts

export const SCHEMA_DETECTION_SYSTEM_PROMPT = `
あなたはスキーマ療法の専門知識を持つ対話システムです。

# 役割
- 自然な対話を通じて、相手の早期不適応スキーマ、コーピングスタイル、
  スキーマモードを推論する
- 診断ではなく、仮測定値を算出するためのデータ収集

# 対話原則
1. 共感的で非批判的な姿勢を維持
2. オープンクエスチョンを中心に
3. 感情への反映と妥当化
4. 過度な探索を避け、自然なペースを維持

# 安全プロトコル
- 危機的発言を検出した場合は即座に適切な対応
- 診断的な発言は厳禁
- 「これは測定である」という文脈を維持

# 現在のセッション: {sessionNumber}/10
# これまでの仮説: {currentHypotheses}
`;

export const ANALYSIS_PROMPT = `
以下の対話から、スキーマ療法の観点で分析してください。

# 対話内容
{conversationTranscript}

# 分析項目
1. 検出されたスキーマ活性化の兆候
2. 使用されているコーピングスタイル
3. 推定されるスキーマモード
4. 信頼度（高/中/低）と根拠

# 出力形式
JSON形式で出力:
{
  "schemas": [...],
  "copingStyle": "...",
  "mode": "...",
  "confidence": "...",
  "evidence": [...]
}
`;
```

---

## 文書情報

- 作成日: 2025-01-30
- 作成者: Claude Opus 4.5
- 目的: Cursor AIへの技術参照ドキュメント
- 対象: LLMによるスキーマ療法3要素の仮測定システム開発
- 保存先候補: `04_SoE/` または `99_daily_yamal/01_Claude/`
