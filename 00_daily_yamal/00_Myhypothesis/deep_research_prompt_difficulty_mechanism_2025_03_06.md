# Deep Research指示プロンプト
# 障害の困難性の発生メカニズムと診断名の不一致に関するエビデンス調査
# 作成日: 2025-03-06
# 作成者: Yuji Yamauchi (Puu) + Claude Opus 4.6
# 用途: Gemini Deep Research / GPT Deep Research 等への投入用

---

## 研究背景

障害福祉（就労支援）の実務現場において10年以上の観察から、以下の仮説が構築された。精神障害・精神遅滞に分類される当事者の「困難性（difficulty）」は、診断名から想定される単一の病因ではなく、複数の発生メカニズムが複雑に絡み合って表出している。しかし現行の制度は、帰納法的に観察された表出行動から診断名を付与し、診断名に紐づいた支援メニュー（多くの場合薬物療法）を適用するという一本道になっており、発生メカニズムの違いに応じた介入の分岐が制度的に組み込まれていない。

この仮説群に対して、支持・反証・関連する査読付き論文（peer-reviewed articles）やシステマティックレビュー、メタ分析を調査してほしい。

---

## 困難性の発生メカニズム4分類（調査対象外の④を除く3分類）

調査にあたり、以下の分類を前提とする：

- **①先天的器質的困難性**: 遺伝的・生物学的基盤に由来する困難性（例：神経発達特性、知的能力の偏り）
- **②ACEs等の環境による困難性**: 逆境的小児期体験（Adverse Childhood Experiences）など、環境側から直接生じた困難性
- **③器質×環境の相互作用による困難性**: 軽微な先天的器質的特性が、環境刺激の主観的インパクトを増幅させ、客観的には問題のない環境下でもACEs相当の困難性が蓄積されるメカニズム
- ④処方薬の副作用による医原性困難性（今回は調査対象に含めるが主軸ではない）

---

## 調査領域A: 表出された困難性と診断名の不一致

### 調査すべき問い

1. 精神科診断（ICD-10/11、DSM-5）において、同一の表出行動（behavioral presentation）が複数の異なる診断名に該当しうることを示す研究はあるか
2. 精神障害の診断が、病因（etiology）ではなく症候群（syndrome）の記述に基づいていることの限界を指摘する研究はあるか
3. 同一の診断名を持つ患者群の中で、発生メカニズム（先天的器質性 vs 環境要因 vs 相互作用）が異なることを示した研究はあるか
4. 特に発達障害（ASD、ADHD）、知的障害、うつ病、双極性障害、統合失調症において、診断カテゴリの妥当性（diagnostic validity）に疑問を呈する研究はあるか
5. RDoC（Research Domain Criteria）など、診断名に代わるメカニズムベースの分類アプローチに関する研究動向

### 検索キーワード候補

- diagnostic heterogeneity mental disorders
- behavioral phenotype vs etiology psychiatric diagnosis
- transdiagnostic approach mental health
- RDoC Research Domain Criteria
- diagnostic validity DSM-5 critique
- equifinality multifinality psychopathology
- same phenotype different etiology developmental disorders

---

## 調査領域B: 器質×環境の相互作用メカニズム（③の検証）

### 調査すべき問い

1. 軽微な神経発達特性（subthreshold neurodevelopmental traits）が、環境刺激の主観的体験を増幅させることを示す研究はあるか
2. 感覚処理特性（sensory processing differences）が、養育環境からのストレスの主観的インパクトを変調させることを示す研究はあるか
3. 「goodness of fit」モデル（Thomas & Chess）の現代的展開として、子どもの器質と養育環境の適合性が発達的アウトカムを予測することを示す研究はあるか
4. 客観的に「十分な」養育環境でありながら、子どもの器質的特性により主観的にはACEs相当の体験が蓄積されうることを示す研究はあるか
5. 差次感受性モデル（Differential Susceptibility Theory, Belsky）やOrchid-Dandelion仮説（Boyce）との関連で、器質的に感受性が高い子どもにおける環境との相互作用の研究
6. 能力プロファイルの凸凹（discrepancy between cognitive domains）が、社会適応における困難性を生成するメカニズムを検討した研究はあるか
7. 愛情やケアの「伝達チャネル」（言語的 vs 身体的 vs 構造的）と受け手の「受信特性」の不一致（mismatch）に関する研究はあるか
8. ③の困難性が、家族・教育・福祉の適切な機能によって予防可能であることを示す介入研究はあるか

### 検索キーワード候補

- differential susceptibility theory ACEs
- orchid dandelion hypothesis environmental sensitivity
- biological sensitivity to context
- sensory processing sensitivity adverse childhood experiences
- goodness of fit temperament parenting outcomes
- subjective experience ACEs objective environment
- cognitive discrepancy profile social adaptation
- neurodevelopmental traits subthreshold environmental interaction
- gene-environment interaction (GxE) mental health
- vantage sensitivity positive environment
- mismatch theory developmental psychopathology
- communication channel caregiver-child attachment sensory

---

## 調査領域C: 誤帰属と医原性悪化ループ

### 調査すべき問い

1. 環境要因（②）や相互作用要因（③）による困難性が、先天的器質性（①）に誤帰属されるメカニズムを検討した研究はあるか
2. 精神科における多剤処方（polypharmacy）が、元の困難性を悪化させるか、新たな困難性を生成することを示す研究はあるか（特に小児・発達障害領域）
3. 薬物療法の副作用が新たな精神症状を生み、それがさらに追加の診断・処方に繋がる増幅ループ（iatrogenic cascade / prescribing cascade）に関する研究はあるか
4. 精神科診断における情報源バイアス（informant bias）——特に児童・障害者の診断において、本人報告よりも家族・支援者の報告が優先されることの問題を指摘する研究はあるか
5. 上記の情報源バイアスが、特にACEs環境下にある家族からの報告において、子どもの困難性の誤帰属を助長することを示す研究はあるか
6. トラウマインフォームドケア（Trauma-Informed Care）の文脈で、トラウマ由来の症状が発達障害や精神障害に誤診されるケースを検討した研究はあるか

### 検索キーワード候補

- diagnostic overshadowing intellectual disability
- misattribution trauma symptoms developmental disorder
- prescribing cascade psychiatric medication
- polypharmacy intellectual disability mental health
- iatrogenic harm psychiatric treatment
- informant bias child psychiatric assessment
- parent report vs self-report disability diagnosis
- trauma-informed care misdiagnosis
- diagnostic substitution developmental trauma
- adverse childhood experiences misdiagnosis ADHD ASD
- medication overuse developmental disabilities

---

## 調査領域D: 日本固有の構造的問題

### 調査すべき問い

1. 日本の精神医療・障害福祉において、「標準」からの逸脱（高い方向も含む）が矯正対象となる文化的傾向を分析した研究はあるか
2. 日本におけるギフテッド（高IQ）の子どもが、行動上の問題（反抗挑発症等）として誤診される傾向に関する研究はあるか
3. 日本の発達障害診断において、保護者の申告に過度に依存する構造を指摘する研究はあるか
4. 日本の精神科における多剤処方の実態と、国際比較による特異性を示す研究はあるか
5. 日本の障害福祉制度において、診断名ベースの支援配分がもたらす限界を分析した研究はあるか
6. 日本における母子手帳の保管率と、発達歴の記録消失が後の支援に与える影響に関する研究はあるか

### 検索キーワード候補

- Japan psychiatric polypharmacy international comparison
- 日本 発達障害 誤診 過剰診断
- gifted children misdiagnosis Japan
- Japan cultural conformity deviation pathologized
- 日本 精神医療 多剤処方 実態調査
- maternal child health handbook Japan record keeping
- 母子健康手帳 保管率 発達記録
- Japan disability welfare system diagnosis-based limitations
- 日本 障害福祉 診断名 支援制度 限界
- informant bias developmental assessment Japan

---

## 調査上の注意事項

1. **査読付き論文（peer-reviewed）を最優先**で収集すること。システマティックレビュー、メタ分析があれば特に優先する
2. **日本語文献と英語文献の両方**を対象とする。日本固有の制度的問題（領域D）については日本語文献が重要
3. 各論文について、以下を明記すること：
   - 著者、年、ジャーナル名
   - 研究デザイン（RCT、コホート、横断研究、レビュー等）
   - 主要な知見（findings）と本調査との関連性
   - 限界点（limitations）
4. 直接的に仮説を支持する論文がない場合、**隣接領域からの間接的エビデンス**も含めてよい。ただしその場合、「直接的エビデンス」と「間接的・推論的エビデンス」を明確に区別すること
5. 仮説に反するエビデンス（counter-evidence）がある場合も必ず報告すること
6. 特に**③の器質×環境の相互作用メカニズム**が学術的にどの程度体系化されているかの空白地帯（research gap）の特定を重視する
7. 調査領域間の横断的関連（例：Bの差次感受性がCの誤帰属をどう助長するか）があれば指摘すること

---

## 期待する出力形式

各調査領域（A〜D）ごとに：
1. **エビデンスが見つかった主張**：論文の引用とともに記述
2. **部分的にエビデンスがある主張**：関連研究はあるが直接的検証はない場合
3. **エビデンスが見つからなかった主張（research gap）**：学術的空白として記述
4. **反証エビデンス**：仮説に反する知見がある場合
5. **領域横断的な知見**：複数の調査領域に跨る発見

---

## 本調査の目的

この調査は、障害福祉就労支援の実務者が10年以上の現場観察から構築した仮説を、学術的エビデンスと突き合わせることで：
- 既に学術的裏付けがある部分を特定し、研究計画の理論的基盤を強化する
- 学術的空白地帯（research gap）を特定し、独自研究の貢献可能性を明確にする
- 仮説の修正が必要な部分を早期に発見する

ことを目的とする。将来的には修士・博士課程での研究テーマとして発展させる予定であり、この調査はその予備的文献レビューとして位置づけられる。
