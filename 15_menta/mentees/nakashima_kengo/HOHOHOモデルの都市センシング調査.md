# **人間主体のナラティブ型都市センシング研究調査：パラダイムの移行、プラットフォームの実態、およびHOHOHOモデルの独自性評価**

## **1\. 研究分野のサマリー (Research Field Summary)**

現代のスマートシティおよび都市情報学の領域において、都市環境をいかにセンシングし、そのデータを都市計画やインフラ維持管理に統合するかというアプローチは、歴史的な転換点にある。これまで欧米の都市計画を主導してきたのは、Google Street Viewに代表される車載カメラ型の画像収集システムや、OpenStreetMap（OSM）のような静的かつ客観的なトポロジー（位相幾何学）データ、あるいは街角に固定されたIoTセンサーネットワークなどの「機械主体・トップダウン型」のデータ収集パラダイムであった1。これらのシステムは、交通量、大気汚染度のマクロな数値、インフラの物理的な幾何学的構造をマッピングする上では極めて強力であるが、その本質的な限界として、市民がその空間をどのように「体験」し、どのような「感情」を抱き、どのような微細な「摩擦（不快感や危険性）」を感じているかという定性的・主観的なレイヤーを捕捉することができない1。

過去10年間の欧米の研究潮流において、この限界を克服するための認識論的シフトが起きている。それが「人間主体の都市センシング（Human-centric urban sensing）」と呼ばれる領域の台頭である1。この領域は、物理的なハードウェアとしての都市は、そこを歩行し生活する市民の動的な体験やナラティブ（物語・語り）と結びついて初めて完全に理解されるという前提に立っている4。このパラダイムは、市民を都市計画の受動的な対象者から、能動的かつ移動可能な「センサーノード」へと再配置するものである4。

欧米の学術界および実務界において、この研究領域は主に3つの相互に関連するドメインとして体系化されている。第一に「参加型センシング（Participatory sensing）」であり、これは市民が自らのモバイルデバイス等を用いて意識的に特定の都市データを収集し、クラウドや自治体に提供する枠組みを指す10。第二に「市民センシング（Citizen sensing）」であり、コミュニティが環境センサーなどを自ら構築・展開し、局所的な環境問題や政治的課題に対するアクションを起こすためのアドボカシー（政策提言）ツールとして機能する9。そして第三が、最も現代的な概念である「ヒューマンセンシング（Human sensing）」である。これは、都市の空間形態と相互作用する際に人間の身体や精神が生み出す生体データ、感情データ、そしてナラティブデータを直接的に収集・分析するアプローチである5。

Google Street Viewや従来のIoTセンサーとは明確に異なるこの「人間主体の都市センシング」の潮流は、特に「歩行（Walking）」という身体的行為を重視する点に特徴がある。車載システムが捉える「車両の視点」は、歩行者にとっての微細な段差、狭い生活道路の危険性、あるいは夜間の心理的恐怖感といった、ミクロな環境要因を不可避的に見落とす3。これに対し、歩行体験や「子どもの目線」に立脚したデータ収集は、車両では検知不可能な空間の摩擦や、生活者固有の不快感を抽出するための極めて重要なメカニズムとして欧米の研究で認識されつつある3。歩行者中心のアプローチは、都市の気候変動レジリエンスの向上、公衆衛生の改善、そしてインフラの公平な配分を確保するための基盤として位置づけられている17。

さらに、人工知能（AI）および自然言語処理（NLP）技術の急速な進展により、これまでスケーラビリティの観点から都市データへの統合が困難であった定性的な市民のナラティブ（不満、物語、感情表現）が、定量的な都市データとして活用可能になっている2。現代の高度なアルゴリズムは、非構造化データである市民の語りの巨大なコーパスを解析し、根本的な感情（センチメント）を検出し、それを地理空間上にマッピングすることで、物理的な都市空間の上に「感情的情報レイヤー（Emotional information layer）」を構築することが可能である9。

このような学術的・技術的背景の中、日本において構築された「HOHOHO（ホホホ）モデル」は、インフラ維持管理および自治体の意思決定支援のための極めて構造的かつ実践的なフレームワークとして注目される。HOHOHOモデルは、市民の歩行データ、子どもの目線による視覚的証拠（写真）、および「現場の違和感」という定性的なナラティブを活用してインフラの異常を検出する3。そして決定的な特徴として、AIを用いてこれらの異常を自治体の特定予算枠内に収まる「修繕ポートフォリオ」へとトリアージし、最終的に地方政府の訴訟リスクや賠償責任を軽減する「リスク・ライアビリティマネジメントツール」として機能する点にある3。本報告書の目的は、HOHOHOモデルのこれらの中核的要素——市民参加型の歩行データ収集、感情・ナラティブの統合、およびAI主導の都市リスク管理——が、欧米の査読付き論文や実在するプロダクトにおいてどのような形で存在しているか、あるいはどのような研究的空白が存在するかを網羅的に調査し、その独自性を評価することである。

## **2\. 代表的論文および研究潮流 (Representative Papers)**

市民の体験、感情、ナラティブを都市データ分析に組み込む研究は、欧米の学術文献において確固たる分野として確立しており、日々拡張を続けている。研究者たちは、市民を単なる「データポイント」として扱う従来の手法から脱却し、主観的な人間の体験が都市の形態や政策決定に直接的な影響を与える「共同生産（Co-production）」のモデルへと移行しようと試みている。

### **感情的マッピングと生体センシング（Emotional Mapping and Biosensing）**

査読付き論文の大きなコーパスを形成しているのが「感情的マッピング（Emotional mapping）」に関する研究である。これは、都市の物理的な特徴が人間にどのような生理学的・心理学的反応を引き起こすかを探求するものである。都市計画への感情データの統合可能性を調査した画期的な研究では、GPSロケーションデータと連動した皮膚電気活動（Galvanic Skin Response: GSR）デバイスを使用し、都市部の歩行ルートを移動する歩行者のストレスレベルを測定した9。この手法により、研究者は生理学的な覚醒度を定量化し、特定の都市デザインの特徴（例：交通密度の高さ、緑地の欠如、歩道の劣化状態など）と、歩行者の感情的ストレスの「ピーク」との間に明確な相関関係があることを特定した9。この方法論の最大の意義は、市民が自らの身体を通じて連続的な「感情の情報レイヤー」を生成し、従来は定性的なアンケート等に頼るしかなかった主観的な不快感を、地理情報システム（GIS）などの伝統的な都市計画ツールと互換性のある客観的な定量データセットに変換できる点にある9。

さらに、これらの研究において「歩行」という行為は単なる移動手段ではなく、データ収集の中核的メカニズムとして機能している。歩行は、車による移動ではバイパスされてしまう微細な環境刺激（ミクロ環境）に個人を直接的に曝露させる。ポルトガルのリスボンで実施された研究では、繁華街での歩行中および歩行後に、参加者自身に自らの生体データ（バイオデータ）を提示し、それについて内省させるという手法をとった14。このデータへの曝露は「有界干渉（Bounded interference）」と呼ばれる現象を生み出し、参加者から空間体験に関する非常に深く詳細な「ナラティブな反省（Narrative reflections）」を引き出した14。この研究は、生体センシングという客観的技術と、ナラティブの生成という主観的アプローチを組み合わせることで、単一の手法を用いるよりもはるかに深いレベルで「都市のストレス」や体験のニュアンスを解明できることを実証している14。

### **市民科学における感情的次元とリスク管理（The Affective Dimension and Citizen Science）**

個人の生理学的ストレスの測定を超えて、欧米の研究は、気候変動への適応やインフラのレジリエンス（回復力）に関する市民参加の「感情的次元（Affective dimension）」に焦点を当て始めている。JPI ClimateおよびERA4CS（European Research Area for Climate Services）の資金提供を受けた「Citizen Sensing – Urban Climate Resilience through Participatory Risk Management Systems（市民センシング：参加型リスク管理システムを通じた都市の気候レジリエンス）」プロジェクトは、感情的・情動的な行動を促進することが、リスク管理における市民参加をいかに強力に支援するかを示している17。この研究は、気候変動適応に向けた都市の取り組みにおいて市民の参加率が低い原因は、トップダウンで与えられる客観的データが市民にとって「感情的な共鳴」を欠いているためであると指摘する。市民を局所的な環境データの収集プロセス（歩行や観察）に直接巻き込むことで、コミュニティはその緩和プロセスに対する「ナラティブ」と「感情的な愛着」を育み、結果として具体的なアクション（行動的成果）を推進する原動力となる17。

同様に、欧州連合（EU）のHorizon 2020プログラムによる資金提供を受けた大規模な学際的プロジェクト「eMOTIONAL Cities」は、ナラティブと感覚に基づくアーバニズムの制度化を象徴している18。このプロジェクトは、都市計画、神経科学、データサイエンスを統合し、都市空間が精神的・肉体的な健康に与える影響を、市民の「感覚」を通じてマッピングすることを目的としている19。リスボン、コペンハーゲン、ロンドンなどの都市でフィールド調査を実施し、都市デザインが認知機能やウェルビーイングに及ぼす影響に関する堅牢な証拠を構築しようとしている19。この取り組みは環境センサーやバイオセンサーに大きく依存しているものの、「人間の感覚器官を通じて都市をマッピングし、公共政策の意思決定に反映させる」という根底にある哲学は、HOHOHOモデルのナラティブ主導のアプローチと深く共鳴している。

### **ナラティブ・アーバニズムと自発的地理情報（Narrative Urbanism and VGI）**

空間の進化や都市の形態を読み解くための理論的・実践的フレームワークとして、「ナラティブ・アーバニズム（Narrative Urbanism）」という概念も学術的な牽引力を得ている。ナラティブ・アーバニズムは、都市を単なる物理的構造物の集合ではなく、一連の出来事や人間の記憶、語りによって構造化された「ナラティブの場（Narrative field）」として捉える25。

実践的なレベルでは、この理論は「自発的地理情報（Volunteered Geographic Information: VGI）」の方法論と結びつき、局所的な感情や体験を捕捉するために利用されている。例えば、ブラジルのクリチバ市における都市モビリティの文脈で行われた共同マッピングの研究では、感情データを表現するためのグラフィックシンボルとして「絵文字（Emojis）」を活用する手法が成功を収めた28。参加者は異なる交通手段を用いた際の体験（ナラティブ）を説明し、それらの語りは絵文字を用いてポジティブ、ネガティブ、またはニュートラルな感情として分類され、特定の地理空間座標にマッピングされた。この研究は、市民中心の視点から感情をマッピングすることが、空間的な不快感を生み出す特定の環境変数を特定し、都市計画の意思決定を支援するための有効な手段であることを検証した29。

これらの学術的パラダイムは、HOHOHOモデルの基盤となる前提——すなわち、歩行者の主観的、感情的、ナラティブな体験が都市管理にとって計り知れない価値を持つという考え方——が、欧米の実証的・定性的な研究によって強力に裏付けられていることを示している。しかしながら、学術界は感情データやナラティブの「価値」を証明することには長けている一方で、そのデータを自治体の経済的合理性（予算配分）や法的リスク管理のプロセスにどのように変換し実装するかという点については探求が遅れており、このギャップこそがHOHOHOモデルが明確にターゲットとしている領域である。

## **3\. 存在するプロダクト・サービス (Existing Products)**

学術研究が人間主体の都市センシングの理論的基盤を提供する一方で、商業セクターおよびシビックテック（Civic Technology）セクターの実態を分析することで、これらの概念が現実社会でどのように実装・運用されているかが明らかになる。欧米の既存プロダクトを調査すると、単純な苦情集約アプリから、高度なAI主導の市民フィードバック統合ツールに至るまで、多様な参加型センシングのプラットフォームが存在することがわかる。

### **シビックレポーティング・プラットフォーム：市民センシングのベースライン**

欧米における参加型都市センシングの最も普遍的な実装形態は、英国の「FixMyStreet」や米国の「SeeClickFix」に代表されるシビックレポーティング（市民通報）アプリケーションである2。これらのプラットフォームは、市民がスマートフォンのカメラとGPSを利用して、道路の陥没（ポットホール）、街灯の故障、落書きといった緊急性のない公共インフラの課題を自治体に直接通報できる権限を与えるものである。

これらのアプリは市民データの生成ツールとしては大きな成功を収めているが、ナラティブ・アーバニズムやHOHOHOモデルとは根本的に異なるパラダイムで運用されている。FixMyStreetやSeeClickFixは、市民と行政の関係性を「都市機能の崩壊を通知する」という狭義のトランザクショナル（取引的）な関係として構成している33。そこにあるのは、連続的な歩行体験のデータや空間に対する包括的な不快感のナラティブではなく、断続的で孤立した「苦情」の集積である。さらに、これらのプラットフォームは、高度な自動トリアージ（優先順位付け）機能を提供せずに、膨大なデータ量で地方自治体を圧倒してしまうという構造的欠陥を抱えている。ミルウォーキー市などの自治体CIO（最高情報責任者）が指摘するように、バックエンドの作業指示管理システム（CRM等）とのシームレスな統合や、行政の対応能力に応じたトリアージが欠如している場合、市民参加は戦略的資産ではなく、単なる「行政的負担」と化してしまうリスクがある31。

### **受動的クラウドソーシングとアルゴリズムのバイアスの罠：StreetBumpの事例**

能動的な市民通報から一歩進み、継続的かつ受動的な都市センシングを実現しようとした初期の試みが、米国ボストン市で開発された「StreetBump」アプリケーションである。StreetBumpは、市民が運転中にスマートフォンをダッシュボードに置くことで、内蔵された加速度センサーとモーション検出器が自動的に道路のポットホール（穴）による衝撃を検知し、その地理空間データを自治体の中央サーバーに送信するシステムであった34。

StreetBumpの「継続的なデータ収集」という概念はHOHOHOモデルと類似しているが、その社会実装は技術設計における決定的な教訓をもたらした。アプリケーションの運用開始後、データ分析によって深刻な「サンプルバイアス（偏り）」が明らかになったのである。ポットホールの修繕チームが、富裕層や若年層が多く住む地域に不釣り合いに多く派遣されるという事態が発生した36。これは、スマートフォンの普及率や、こうしたアプリを利用する傾向が、低所得者層や高齢者層で著しく低かったことに起因する36。StreetBumpの事例は、人口動態や空間的なコントロールを意図的に行わずに、車両ベースの受動的なクラウドソーシングに依存することの危険性を浮き彫りにした。無秩序な車両データに依存するアプローチとは対照的に、特定の通学路や歴史的にインフラ投資が放置されてきた地域において「歩行」という意図的なデータ収集を配置するモデル（HOHOHOモデルなど）は、このような地理的不平等を積極的に緩和する機能を持つ。

### **歩行者中心および主観的歩行体験プラットフォーム**

車載データの限界とバイアスを認識し、歩行者の体験に明示的に焦点を当てたプラットフォームも複数登場している。Walk21が開発し、SPARKプロジェクトなどで利用されている「Walkability App（ウォーカビリティ・アプリ）」は、市民が自らの主観的な歩行体験や環境に対する評価を地図上に直接入力できるツールである38。このアプリは、安全性、快適性、景観などの多様な環境的特徴を区別し、性別や年齢によるフィルタリングを通じて主観的評価を空間的に集約することを可能にする38。また、欧州宇宙機関（ESA）の支援を受けるWalkability as a Service（WaaS）プラットフォームは、歩行可能性データを統合した包括的なマイクロモビリティ・エコシステムを構築し、公共空間におけるシェアリングデバイスの乱立問題を解決するとともに、都市管理の向上を目指している40。これらのプラットフォームは、歩行者体験の定性的なデータを収集することの商業的有用性を証明しているが、その主な機能はあくまで「都市計画のための支援ツール」であり、インフラの物理的維持管理や自治体の法的賠償責任のマネジメントツールとして設計されているわけではない。

### **市民フィードバック統合におけるAIとNLPの活用**

非構造化された膨大な市民データ（苦情、要望、SNSの投稿など）を処理するために、新世代のシビックテック・スタートアップはAIおよび自然言語処理（NLP）を積極的に導入している。CitizenLabやZencityといったプラットフォームは、AIを利用して複数のチャネルから寄せられる数千人の住民からの意見を集約し、部門別やセンチメント（感情の極性）別に自動分類する機能を提供している20。例えば、Rannlabが構築するCivicTech AIプラットフォームは、NLPを利用して電気、水道、衛生などの公共サービスに関する市民からの苦情の「コンテキスト（文脈）」を理解し、適切な部門に自動でルーティングすることで、政府の説明責任の追跡と市民の感情の正確な測定を可能にしている20。

これらのAI統合は、定性的なナラティブを「実行可能なインテリジェンス」へと変換する上で極めて重要である。しかしながら、欧米における現在のAIの実装は、主に「世論の測定（Sentiment analysis）」や「政策形成のための市民対話」に重点が置かれている41。物理的なインフラの欠陥に対する自動トリアージや、予算制約に基づいた修繕シミュレーションの実行など、直接的な「オペレーション管理システム」として機能している例は依然として希少である。

## **4\. 最も近似する既存モデル (Closest Existing Models)**

HOHOHOモデルの新規性と独自性を正確に評価するためには、その構成要素（歩行者視点、ナラティブデータ、AIトリアージ、および自治体のライアビリティ管理）を、欧米の研究や産業界に存在する最も近似したモデルと体系的に比較する必要がある。以下の表は、各アプローチの構造的な違いを比較したものである。

| コア機能 / 評価軸 | HOHOHOモデル (日本) | シビック通報アプリ (例: FixMyStreet, SeeClickFix) | 自動クラウドソーシング (例: StreetBump) | AI市民フィードバック基盤 (例: CitizenLab, Zencity) | 人間中心型デジタルツイン (H-DT) |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **主なデータ収集者** | 意図を持った歩行者（専用ウォーカー） | 一般市民（スマホ保有者） | 一般市民（スマホを車載した運転手） | 一般市民（SNS、アンケート、専用アプリ） | 産業オペレーター、歩行者、都市居住者 |
| **主要な視点** | 歩行者視点 / 子どもの目線（ミクロ空間） | 可変（歩行者または車両） | 車両視点（マクロ空間） | マクロ空間 / 政策的視点 | 俯瞰的視点 / マルチスケール |
| **データの種類** | 写真、違和感や恐怖の構造化されたナラティブ | 写真、短いテキストによる状況説明 | 加速度センサーデータ等の定量指標 | 非構造化テキスト、NLPによる感情分析 | センサーデータ、インシデントのナラティブ統合 |
| **AIの活用方法** | A/B/Cの自動トリアージ、**予算連動型修繕シミュレーション** | なし / 基本的な部門ルーティングのみ | 単純な閾値検知（穴の深さ等） | NLPによるトピックのクラスタリングと感情分析 | 予測モデリング、危険パターンの特定 |
| **提供する価値** | 自治体のリスク・法的賠償責任（ライアビリティ）のヘッジ | 公共空間の維持管理、市民エンゲージメントの向上 | 修繕チームの効率的な派遣 | コミュニティの合意形成、政策立案の支援 | 安全文化の醸成、運用効率の最適化 |
| **ビジネスモデル** | B2B2G（保険会社やコンサルタントとの連携） | B2G（自治体向けのSaaSサブスクリプション） | B2G（ボストン市主導のイニシアチブ） | B2G（自治体向けのSaaSサブスクリプション） | B2B / 組織内のクローズドな運用 |

### **人間中心型デジタルツイン（Human-Centered Digital Twin: H-DT）**

理論的およびアーキテクチャの観点から、欧米の文献においてHOHOHOモデルの思想に最も近いのが「人間中心型デジタルツイン（H-DT）」の概念である。従来のデジタルツインは、物理的なインフラストラクチャを仮想空間に複製した静的な「機械的エージェント」として機能していた。しかし、最新の研究では、人間の認知プロセス、生理学的データ、および現場でのインシデントに関する「ナラティブな報告」をデジタルツインに統合するアプローチが提唱されている42。

研究によれば、ニアミスや局所的な危険性に関する「ナラティブな説明」と、機械が読み取り可能な構造化された知識との間のギャップを埋めることで、デジタルツインは単なる監視ツールから、柔軟で人間主導の「動的な学習環境」へと進化する42。これらのシステムでは、AIによる補助レポートモジュールが人間の経験の重要なポイントを抽出し、断片的な観察結果（違和感）を統合された知識へと変換し、長期的な安全文化の醸成や意思決定を促進する42。現在、このH-DTフレームワークは主に製鉄所や建設現場などの産業プロセスにおいて適用されているが、人間のナラティブを「システム全体のリスク管理のための不可欠なセンサー入力」として利用するという方法論は、HOHOHOモデルの都市インフラ管理へのアプローチと完全に軌を一にするものである。

### **エンタープライズ資産・賠償責任管理システム（Asset and Liability Management）**

商業的および行政実務的な観点から見ると、HOHOHOモデルの「ライアビリティ（法的賠償責任）管理」という側面は、欧米の地方政府が採用しているエンタープライズ資産管理システムと強くリンクしている。米国や英国の自治体は現在、インフラの経年劣化、特に歩道の維持管理と歩行者の安全性に関する法的賠償責任の増大という深刻な圧力に直面している46。例えば、米国アイオワ州の判例（2023年のCity of Des Moines caseなど）では、歩道の維持管理に関する法的責任が、隣接する不動産所有者から自治体へと直接的に移行する決定が下され、自治体は市民の安全をプロアクティブに確保する義務を負うことになった46。

これらの莫大な賠償責任リスクを管理するために、欧米の政府は高度な資産管理ソフトウェアやリスク緩和フレームワークを導入している49。ベストプラクティスとしては、事後的な対応から脱却し、インフラ資産のデータ（偶発債務を含む）を予算配分や金融市場などの資金調達メカニズムに直接結びつける高度な戦略へ移行することが推奨されている49。しかし、欧米におけるこれらのシステムは、伝統的に高額なトップダウン型のエンジニアリング調査や、車載LiDARデータに基づくアルゴリズムモデルに依存している。HOHOHOモデルのように、人間が生成した歩行者スケールのナラティブデータを、自治体の法的証拠および賠償責任軽減フレームワークに直接流し込むというアプローチは、シビックテック（市民参加）とエンタープライズリスク管理（防衛的行政手法）の二つを融合させたものであり、欧米のプラットフォームにおいても稀有な構造である。

## **5\. 研究におけるギャップ (Gaps in Research)**

人間主体の都市センシング、シビックテクノロジー、および自治体行政の交差点を分析すると、欧米のプラットフォームや研究実装において、依然として解決されていないいくつかの決定的なギャップ（空白地帯）が存在することが明らかになる。これらのギャップは、収集された市民データがどのように行政プロセスで消費されるかにおける体系的な非効率性を示している。

### **シビックレポーティングにおける「ライアビリティ（賠償責任）のパラドックス」**

現在のシビックテック市場における最も深刻なギャップは、「ライアビリティのパラドックス」と呼ぶべき現象である。FixMyStreetやSeeClickFixなどのプラットフォームは、インフラの欠陥に関する市民からのレポートの「量」を最大化するように設計されている2。しかし、「厳格責任（Strict Liability）」の法原則——事業体（この場合は自治体）がインフラの欠陥を認識していながら適切な対応を怠った場合、損害に対する責任を負うという原則——の下では、局所的な苦情を無限に生成し蓄積するシステムは、実のところ自治体の「法的露出（訴訟リスク）」を増大させてしまう3。

市民がアプリ経由でひび割れた歩道を通報した瞬間、自治体は公式に「その危険性を通知された」ことになる。もし後日、その場所で歩行者が転倒して負傷した場合、アプリ上に残されたデジタルの通報履歴は、自治体の過失を証明する決定的な証拠として機能してしまう。欧米のシビックテックプラットフォームの多くは、データをそのまま自治体のダッシュボードに投下する「Data as a Service（DaaS）」として機能しており、行政官の直面する法的ジレンマを考慮していない。単なる「苦情の生成」から「法的証拠の生成」——具体的には、自治体が限られた予算の制約内で合理的に行動し、効果的に修繕の優先順位付けを行っていることを証明することで賠償責任をヘッジするデータ——への移行に焦点を当てた研究やプロダクト開発は、欧米においても明確な空白となっている3。

### **定性的なナラティブと「経済的合理性」の断絶**

第二のギャップは、定性的なデータの応用に関するものである。eMOTIONAL Citiesのような学術プロジェクトは、都市のストレスや空間の質を理解する上で、生理学的データやナラティブデータが価値を持つことを立証することには成功している18。しかし、この定性的な洞察と、ハードな「経済的計画（予算編成）」との間には依然として深い断絶がある。実際の都市計画やインフラ管理は、依然として定量的な指標（交通量、ひび割れの幅など）に支配されており、感情的マッピングは運用レベルのインフラ維持管理ではなく、開発の初期段階における「コミュニティ・コンサルテーション（意見聴取）」のプロセスに追いやられることが多い13。

Arnsteinの「市民参加の梯子（Ladder of Citizen Participation）」を用いた参加型計画の批判的分析でも指摘されているように、市民から感情データを収集するだけで、そのデータが実際の予算配分や意思決定をどう動かすかに対する権限（Citizen power）を与えないシステムは、単なる「トケーニズム（形式主義）」に陥る9。現在、CitizenLabのようなプラットフォームに搭載されているNLPツールは、市民の感情の極性を合成することはできても、その感情的な不満を、自治体の財政能力と連動した「具体的なリスク削減ポートフォリオ（実行可能な財務モデル）」に自動変換することはできない41。不快感のナラティブを財務的な最適解に直結させるフレームワークの研究は不足している。

### **アルゴリズムによるトリアージと「中立性の幻想（倫理的・法的説明責任）」**

政府サービスへのAI導入が加速する一方で、物理的なインフラに対する倫理的で透明性の高いトリアージ・アルゴリズムの開発にもギャップが認識されている52。英国政府のAI規制に関する白書では、公共サービスに関するAIトリアージシステムが誤った判断を下した場合の「不明確な法的責任（Unclear liability）」のリスクが明確に強調されている53。インフラ維持管理の文脈において、もしAIが重大な危険を孕むポットホールを「低優先度（経過観察）」と分類し、その結果として死亡事故が発生した場合、誰が責任を負うのかという説明責任の所在が曖昧になる。現在のスマートシティに関する文献は、警察の予測的取り締まり（Predictive policing）や福祉サービスにおける自動意思決定の倫理に大きく偏っており、市民のクラウドソーシングされたナラティブに基づく「物理的インフラのAIトリアージ」に関する倫理的および法的フレームワークを探求する文献は非常に少ない36。

## **6\. HOHOHOモデルの独自性と潜在的価値 (Potential Originality of HOHOHO)**

欧米の学術文献の膨大なコーパスや、商業的なシビックテクノロジーの現状と照らし合わせると、HOHOHOモデルは極めて高いレベルの独自性（Originality）を有していると評価できる。参加型歩行データ、ナラティブ・フィードバック、AI分析、資産管理といったモデルの個々の構成要素は欧米にも独立して存在しているが、これらを一つのアーキテクチャに統合し、「行政の防衛的合理性」という明確な目的のために構造化した点は、新しい都市センシングのパラダイムを提示している。指定された評価基準（Metrics）に基づき、その独自性を以下に総括する。

### **1\. 歩行者視点と「違和感のミクロな構造化」**

HOHOHOモデルが採用する、意図的な歩行と「子どもの目線」によるデータ収集を通じた「現場の違和感の構造化」という認識論的アプローチは、支配的な自動センシングのパラダイムとは根本的に異なる3。欧米のプラットフォームは、StreetBumpのように車両による受動的・アルゴリズム的検出（マクロな網羅性）を志向するか35、Walk21のように事後的な主観的アンケート調査に依存している38。しかしHOHOHOは、車載センサーが物理的にアクセスできない通学路などのミクロな空間的リスクを暴き出すために、人間のエージェント（歩行者）を意図的かつ戦略的に配置する3。さらに、生の感情や身体的な不快感を、単なる「いいね・悪いね」ではなく、「他者の責任と恐怖の言語化（Verbalized responsibility and fear）」という構造化されたデータに変換することで、人間の主観的体験と土木工学の客観的要請との間のギャップを埋めている。これは、ヒューマンセンシングを単なる「ムードトラッキングの形式主義」9から、「実行可能な市民インテリジェンス」へと引き上げるものである。

### **2\. 「Judgment as a Service (JaaS)」と予算連動型シミュレーション**

HOHOHOモデルの最も際立った独自性は、欧米のシビックアプリを悩ませている「データダンプ（Data Dump）」現象からの完全な脱却にある3。HOHOHOは、未整理の欠陥レポートを行政官に大量に浴びせるのではなく、生成AIなどを活用して自動トリアージを実行し、異常を明確なアクションレベル（A: 緊急対応、B: 計画的修繕、C: 経過観察）に分類する3。

さらに決定的なのは、「予算連動型シミュレーション」の統合である。ユーザー（自治体担当者）が具体的な財政的制約（例えば「予算1000万円」）を入力すると、AIがその制約内でリスク削減効果を最大化する「修繕ポートフォリオ」を計算し提示する機能は、データを単なる「記述的分析（Descriptive analytics）」から、経済的合理性を伴った「処方的インテリジェンス（Prescriptive intelligence）」へと跳躍させるものである3。この機能は、欧米のシビックテックにおける最大のギャップを直接的に解決し、定性的なフィールドデータを数学的に最適化された財務戦略へと変換する。

### **3\. B2B2Gの経済的合理性とライアビリティ・ヘッジ**

HOHOHOモデルの商業的アーキテクチャは、欧米の市民通報プラットフォームにはほとんど見られない、自治体の行政心理と法的賠償責任に対する深い理解に基づいている。SeeClickFixのようなアプリは、市民の利他主義と行政の透明性（アカウンタビリティ）というモデルで運営されている30。対照的に、HOHOHOは、国家賠償法（無過失責任など）に基づく訴訟を恐れる行政官の「心理的負担（Psychological burden）」を明確なターゲットとしている3。提供するデータを単なる市民の苦情のリストとしてではなく、合理的判断の「客観的証拠（Objective evidence）」および「義務と責任を軽減するためのデバイス」としてフレームアップすることで、同プラットフォームは強力な「リスクヘッジ・ツール」として機能する3。

加えて、自治体に直接ソフトウェアを販売する（B2G）のではなく、既に政府との関係を構築している建設コンサルタントや保険会社と提携する「B2B2G（Business-to-Business-to-Government）」戦略は、参加型の都市データを収益化する上で極めて独自のアプローチである3。欧米において、保険会社はリスクモデリングのためにマクロレベルの衛星データやIoTデータを活用しているが49、超局所的（ハイパーローカル）なナラティブ主導の歩行者データを、保険料の計算やPFI（民間資金等活用事業）契約に統合するという実装は、未開拓のフロンティアであると言える3。

### **総括**

HOHOHOモデルの「歩行者のナラティブ・感情データをAIでトリアージし、自治体の法的リスクをヘッジする予算連動型ツールとして活用する」という構造が、そのままの形で欧米の査読付き論文や実在のプロダクトとして存在するかという問いに対し、結論として「完全に一致する単一のモデルは存在しない」と言える。

欧米の学術界は、人間のナラティブや感情データが都市空間の真の姿を理解するために不可欠であるという前提（人間主体の都市センシング）を強力に実証している。また、商業セクターは参加型センシングやAIによるフィードバック分析を実装している。しかし、欧米のモデルは、「市民エンゲージメントと苦情集約（結果として自治体の訴訟リスクを高める）」の方向か、あるいは「トップダウンのセンサー主導型資産管理（人間の歩行体験を無視する）」の方向へと二極化する傾向がある。

HOHOHOモデルは、この二項対立を統合する。歩行者の「現場の違和感」という主観的かつ定性的な体験を、法的リスク管理のための客観的・定量的な「AIトリアージ証拠」へと変換することで、同モデルはスマートシティのパラダイムを単なる「データ収集」から「Judgment as a Service（判断のサービス化）」へと進化させている。インフラの老朽化、深刻な予算制約、そして公共インフラの賠償責任という課題に世界中の自治体が直面する中、人間主体のセンシングを経済的合理性およびリスク緩和（ライアビリティ・ヘッジ）と統合するこのアプローチは、都市情報学およびシビックテックの領域において、極めて新規性が高く、スケーラブルであり、社会的意義の大きい進化形であると評価できる。

#### **引用文献**

1. INTERNATIONAL CONFERENCE ON SUSTAINABLE GLOBALIZATION January 07-10, 2023 Kochi, India, 3月 11, 2026にアクセス、 [https://icsg.world/static/mainsite/pdf/ICSG%202023%20Proceedings.pdf](https://icsg.world/static/mainsite/pdf/ICSG%202023%20Proceedings.pdf)  
2. A Comparative Study of Online Scenario Planning Approaches \- DSpace@MIT, 3月 11, 2026にアクセス、 [https://dspace.mit.edu/bitstream/handle/1721.1/68444/769007259-MIT.pdf?sequence=2](https://dspace.mit.edu/bitstream/handle/1721.1/68444/769007259-MIT.pdf?sequence=2)  
3. HOHOHO－P  
4. A Citizen-Sensing System for Measuring Urban Environmental Quality: A Case Study Carried out in Taiwan \- MDPI, 3月 11, 2026にアクセス、 [https://www.mdpi.com/2076-3417/12/24/12691](https://www.mdpi.com/2076-3417/12/24/12691)  
5. A User-Centered Model for Usable Security and Privacy | Request PDF \- ResearchGate, 3月 11, 2026にアクセス、 [https://www.researchgate.net/publication/317171608\_A\_User-Centered\_Model\_for\_Usable\_Security\_and\_Privacy](https://www.researchgate.net/publication/317171608_A_User-Centered_Model_for_Usable_Security_and_Privacy)  
6. (PDF) Review of the theory, principles, and design requirements of human-centric Internet of Things (IoT) \- ResearchGate, 3月 11, 2026にアクセス、 [https://www.researchgate.net/publication/368281868\_Review\_of\_the\_theory\_principles\_and\_design\_requirements\_of\_human-centric\_Internet\_of\_Things\_IoT](https://www.researchgate.net/publication/368281868_Review_of_the_theory_principles_and_design_requirements_of_human-centric_Internet_of_Things_IoT)  
7. Sensing and Storying the Urban Landscape \- Publicera, 3月 11, 2026にアクセス、 [https://publicera.kb.se/arv/article/download/51394/50729/160829](https://publicera.kb.se/arv/article/download/51394/50729/160829)  
8. A Citizen-Sensing System for Measuring Urban Environmental Quality: A Case Study Carried out in Taiwan \- ResearchGate, 3月 11, 2026にアクセス、 [https://www.researchgate.net/publication/366194348\_A\_Citizen-Sensing\_System\_for\_Measuring\_Urban\_Environmental\_Quality\_A\_Case\_Study\_Carried\_out\_in\_Taiwan](https://www.researchgate.net/publication/366194348_A_Citizen-Sensing_System_for_Measuring_Urban_Environmental_Quality_A_Case_Study_Carried_out_in_Taiwan)  
9. Engaging the Senses: The Potential of Emotional Data for ... \- MDPI, 3月 11, 2026にアクセス、 [https://www.mdpi.com/2413-8851/2/4/98](https://www.mdpi.com/2413-8851/2/4/98)  
10. Participatory Risk Management in the Smart City | Request PDF \- ResearchGate, 3月 11, 2026にアクセス、 [https://www.researchgate.net/publication/365120767\_Participatory\_Risk\_Management\_in\_the\_Smart\_City](https://www.researchgate.net/publication/365120767_Participatory_Risk_Management_in_the_Smart_City)  
11. A Conceptual Framework for Integrating IoT and Blockchain for Smart and Sustainable Urban Development \- MDPI, 3月 11, 2026にアクセス、 [https://www.mdpi.com/2624-6511/8/6/209](https://www.mdpi.com/2624-6511/8/6/209)  
12. Citizen science and social innovation as citizen empowerment tools to address urban health challenges: The case of the urban health citizen laboratory in Barcelona, Spain \- PMC, 3月 11, 2026にアクセス、 [https://pmc.ncbi.nlm.nih.gov/articles/PMC10936789/](https://pmc.ncbi.nlm.nih.gov/articles/PMC10936789/)  
13. Engaging the Senses: The Potential of Emotional Data for Participation in Urban Planning, 3月 11, 2026にアクセス、 [https://www.researchgate.net/publication/327803442\_Engaging\_the\_Senses\_The\_Potential\_of\_Emotional\_Data\_for\_Participation\_in\_Urban\_Planning](https://www.researchgate.net/publication/327803442_Engaging_the_Senses_The_Potential_of_Emotional_Data_for_Participation_in_Urban_Planning)  
14. Communicating the Urban Experience through Biosensing: A ..., 3月 11, 2026にアクセス、 [https://www.tandfonline.com/doi/full/10.1080/00330124.2023.2194365](https://www.tandfonline.com/doi/full/10.1080/00330124.2023.2194365)  
15. A Survey of Enabling Technologies for Smart Communities \- MDPI, 3月 11, 2026にアクセス、 [https://www.mdpi.com/2624-6511/4/1/4](https://www.mdpi.com/2624-6511/4/1/4)  
16. Cream of the crop – Sustainable Mobility takes centre stage at Intertraffic Amsterdam 2026, 3月 11, 2026にアクセス、 [https://www.intertraffic.com/news/sustainability/sustainable-mobility-intertraffic-amsterdam-2026](https://www.intertraffic.com/news/sustainability/sustainable-mobility-intertraffic-amsterdam-2026)  
17. Exploring the affective dimension in citizen science to support urban ..., 3月 11, 2026にアクセス、 [https://www.tandfonline.com/doi/full/10.1080/09640568.2023.2271162](https://www.tandfonline.com/doi/full/10.1080/09640568.2023.2271162)  
18. Brain Talks Podcast \- Brain Innovation Days, 3月 11, 2026にアクセス、 [https://www.braininnovationdays.eu/brain-talks-podcast/](https://www.braininnovationdays.eu/brain-talks-podcast/)  
19. eMOTIONAL Cities: Homepage, 3月 11, 2026にアクセス、 [https://emotionalcities-h2020.eu/](https://emotionalcities-h2020.eu/)  
20. CivicTech AI: Empowering Citizens To Raise Issues And Shape Governance, 3月 11, 2026にアクセス、 [https://rannlab.com/civictech-ai-citizen-feedback-rannlab/](https://rannlab.com/civictech-ai-citizen-feedback-rannlab/)  
21. Natural Language Processing Examples in Government Data | Deloitte Insights, 3月 11, 2026にアクセス、 [https://www.deloitte.com/us/en/insights/topics/emerging-technologies/natural-language-processing-examples-in-government-data.html](https://www.deloitte.com/us/en/insights/topics/emerging-technologies/natural-language-processing-examples-in-government-data.html)  
22. Engaging the Senses: The Potential of Emotional Data for ... \- PEARL, 3月 11, 2026にアクセス、 [https://pearl.plymouth.ac.uk/cgi/viewcontent.cgi?article=1203\&context=ada-research](https://pearl.plymouth.ac.uk/cgi/viewcontent.cgi?article=1203&context=ada-research)  
23. Urban Emotion Sensing Beyond 'Affective Capture': Advancing Critical Interdisciplinary Methods \- MDPI, 3月 11, 2026にアクセス、 [https://www.mdpi.com/1660-4601/17/23/9003](https://www.mdpi.com/1660-4601/17/23/9003)  
24. Exploring the affective dimension in citizen science to support urban climate adaptation: a conceptual framework \- Taylor & Francis, 3月 11, 2026にアクセス、 [https://www.tandfonline.com/doi/abs/10.1080/09640568.2023.2271162](https://www.tandfonline.com/doi/abs/10.1080/09640568.2023.2271162)  
25. Charting Literary Urban Studies; Texts as Models of and for the City \- DuEPublico, 3月 11, 2026にアクセス、 [https://duepublico2.uni-due.de/servlets/MCRFileNodeServlet/duepublico\_derivate\_00075677/Gurr\_Charting\_Literary\_Urban\_Studies.pdf](https://duepublico2.uni-due.de/servlets/MCRFileNodeServlet/duepublico_derivate_00075677/Gurr_Charting_Literary_Urban_Studies.pdf)  
26. Explication of Urban Park Narratives: From Land to the La Villette \- MDPI, 3月 11, 2026にアクセス、 [https://www.mdpi.com/2073-445X/14/12/2391](https://www.mdpi.com/2073-445X/14/12/2391)  
27. Urban Memory and Morphological Evolution in Nagpur: A Narrative Approach to Reading Spatial Evolution in an Indian City \- ResearchGate, 3月 11, 2026にアクセス、 [https://www.researchgate.net/publication/396555651\_Urban\_Memory\_and\_Morphological\_Evolution\_in\_Nagpur\_A\_Narrative\_Approach\_to\_Reading\_Spatial\_Evolution\_in\_an\_Indian\_City](https://www.researchgate.net/publication/396555651_Urban_Memory_and_Morphological_Evolution_in_Nagpur_A_Narrative_Approach_to_Reading_Spatial_Evolution_in_an_Indian_City)  
28. collaborative emotional mapping as a tool for urban mobility planning \- SciELO, 3月 11, 2026にアクセス、 [https://www.scielo.br/j/bcg/a/VWZ6CmPQcRRkTmcjpY5jyzM/?lang=en](https://www.scielo.br/j/bcg/a/VWZ6CmPQcRRkTmcjpY5jyzM/?lang=en)  
29. COLLABORATIVE EMOTIONAL MAPPING AS A TOOL FOR URBAN MOBILITY PLANNING, 3月 11, 2026にアクセス、 [https://www.redalyc.org/journal/3939/393968851008/html/](https://www.redalyc.org/journal/3939/393968851008/html/)  
30. DEVELOPING A CIVIC TECH AND ELECTION FACT-CHECKING \- AU Media Fellowship, 3月 11, 2026にアクセス、 [https://aumf.au.int/assets/bg/DevelopingaCivicTechandElection\_TOOLKIT\_FINAL.pdf](https://aumf.au.int/assets/bg/DevelopingaCivicTechandElection_TOOLKIT_FINAL.pdf)  
31. Not Everyone Loves SeeClickFix \- GovTech, 3月 11, 2026にアクセス、 [https://www.govtech.com/dc/articles/not-everyone-loves-seeclickfix.html](https://www.govtech.com/dc/articles/not-everyone-loves-seeclickfix.html)  
32. 4\. Empowering individuals \- Pew Research Center, 3月 11, 2026にアクセス、 [https://www.pewresearch.org/internet/2022/02/07/4-empowering-individuals/](https://www.pewresearch.org/internet/2022/02/07/4-empowering-individuals/)  
33. (PDF) Breakdown in the Smart City: Exploring Workarounds with Urban-sensing Practices and Technologies \- ResearchGate, 3月 11, 2026にアクセス、 [https://www.researchgate.net/publication/333397777\_Breakdown\_in\_the\_Smart\_City\_Exploring\_Workarounds\_with\_Urban-sensing\_Practices\_and\_Technologies](https://www.researchgate.net/publication/333397777_Breakdown_in_the_Smart_City_Exploring_Workarounds_with_Urban-sensing_Practices_and_Technologies)  
34. A Catalog of Civic Data Use Cases | Data-Smart City Solutions, 3月 11, 2026にアクセス、 [https://datasmart.hks.harvard.edu/how-can-data-and-analytics-be-used-to-enhance-city-operations-723](https://datasmart.hks.harvard.edu/how-can-data-and-analytics-be-used-to-enhance-city-operations-723)  
35. Bots, Bias and Big Data: Artificial Intelligence, Algorithmic Bias and Disparate Impact Liability in Hiring Practices \- ScholarWorks@UARK, 3月 11, 2026にアクセス、 [https://scholarworks.uark.edu/cgi/viewcontent.cgi?article=1052\&context=alr](https://scholarworks.uark.edu/cgi/viewcontent.cgi?article=1052&context=alr)  
36. The Digital Faces of Oppression and Domination \- ACM FAccT, 3月 11, 2026にアクセス、 [https://facctconference.org/static/papers24/facct24-49.pdf](https://facctconference.org/static/papers24/facct24-49.pdf)  
37. The Commercialization of Decision-Making: Towards a Regulatory Framework to Address Machine Bias over the Internet \- Hoover Institution, 3月 11, 2026にアクセス、 [https://www.hoover.org/research/commercialization-decision-making-towards-regulatory-framework-address-machine-bias-over](https://www.hoover.org/research/commercialization-decision-making-towards-regulatory-framework-address-machine-bias-over)  
38. Pan-European Master Plan on Walking \- Walk21, 3月 11, 2026にアクセス、 [https://walk21.com/wp-content/uploads/2024/11/Pan\_European\_Master\_Plan\_Walking\_adopted.pdf](https://walk21.com/wp-content/uploads/2024/11/Pan_European_Master_Plan_Walking_adopted.pdf)  
39. Rate this sidewalk: How community mapping turns walks into actionable data \- CityTalk, 3月 11, 2026にアクセス、 [https://talkofthecities.iclei.org/rate-this-sidewalk-how-community-mapping-turns-walks-into-actionable-data/](https://talkofthecities.iclei.org/rate-this-sidewalk-how-community-mapping-turns-walks-into-actionable-data/)  
40. WaaS | ESA Space Solutions, 3月 11, 2026にアクセス、 [https://business.esa.int/projects/waas](https://business.esa.int/projects/waas)  
41. How two tech startups are boosting public engagement in community planning \- StateScoop, 3月 11, 2026にアクセス、 [https://statescoop.com/tech-start-ups-local-governments-public-participation-digital/](https://statescoop.com/tech-start-ups-local-governments-public-participation-digital/)  
42. in-the-loop digital twin for industrial safety and process understanding: integrating visual, 3月 11, 2026にアクセス、 [https://hammer.purdue.edu/ndownloader/files/60508616](https://hammer.purdue.edu/ndownloader/files/60508616)  
43. Human Digital Twin, the Development and Impact on Design \- ResearchGate, 3月 11, 2026にアクセス、 [https://www.researchgate.net/publication/373423922\_Human\_Digital\_Twin\_the\_Development\_and\_Impact\_on\_Design](https://www.researchgate.net/publication/373423922_Human_Digital_Twin_the_Development_and_Impact_on_Design)  
44. (PDF) Humans As Sensors in Urban Digital Twins \- ResearchGate, 3月 11, 2026にアクセス、 [https://www.researchgate.net/publication/378355824\_Humans\_As\_Sensors\_in\_Urban\_Digital\_Twins](https://www.researchgate.net/publication/378355824_Humans_As_Sensors_in_Urban_Digital_Twins)  
45. NUTC-Progress-Report\_2020-2023 by tcinfo \- Issuu, 3月 11, 2026にアクセス、 [https://issuu.com/tcinfo/docs/nutc-progress-report-20-23](https://issuu.com/tcinfo/docs/nutc-progress-report-20-23)  
46. Agenda \- Notice of Meeting Polk City | City Council Public members can also provide comments\* directly to support@polkcityia.gov, 3月 11, 2026にアクセス、 [https://www.polkcityia.gov/sites/g/files/vyhlif5571/f/agendas/1\_cc\_agenda\_december\_8\_2025\_full\_packet\_0.pdf](https://www.polkcityia.gov/sites/g/files/vyhlif5571/f/agendas/1_cc_agenda_december_8_2025_full_packet_0.pdf)  
47. Midyear \- Claims Journal and Trend Report \- NFP, 3月 11, 2026にアクセス、 [https://www.nfp.com/media/433huimv/2023-midyear-claims-journal-and-trend-report.pdf](https://www.nfp.com/media/433huimv/2023-midyear-claims-journal-and-trend-report.pdf)  
48. Agenda \- Notice of Meeting Polk City | City Council ... \- Polk City, IA |, 3月 11, 2026にアクセス、 [https://www.polkcityia.gov/sites/g/files/vyhlif5571/f/agendas/1\_cc\_agenda\_january\_26\_2026\_full\_packet\_0.pdf](https://www.polkcityia.gov/sites/g/files/vyhlif5571/f/agendas/1_cc_agenda_january_26_2026_full_packet_0.pdf)  
49. Boosting Financial Resilience to Disaster Shocks:, 3月 11, 2026にアクセス、 [https://www.financialprotectionforum.org/sites/default/files/WB%20report\_Boosting%20Financial%20Resilience%20to%20Disaster%20Shock%20Final.pdf](https://www.financialprotectionforum.org/sites/default/files/WB%20report_Boosting%20Financial%20Resilience%20to%20Disaster%20Shock%20Final.pdf)  
50. Advancing a Performance Management Tool for Service Delivery in Local Government, 3月 11, 2026にアクセス、 [https://www.mdpi.com/2076-3387/13/2/31](https://www.mdpi.com/2076-3387/13/2/31)  
51. Mitigation of Political & Regulatory Risk in Infrastructure Projects \- World Economic Forum, 3月 11, 2026にアクセス、 [https://www3.weforum.org/docs/WEF\_Risk\_Mitigation\_Report.pdf](https://www3.weforum.org/docs/WEF_Risk_Mitigation_Report.pdf)  
52. AI-Driven Healthcare Entrepreneurship: Transforming Clinical Practice Through Innovation, Access, and Affordability. \- F1000Research, 3月 11, 2026にアクセス、 [https://f1000research.com/articles/14-921](https://f1000research.com/articles/14-921)  
53. A pro-innovation approach to AI regulation \- GOV.UK, 3月 11, 2026にアクセス、 [https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach/white-paper](https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach/white-paper)  
54. Contextual Evaluation of Risk Identification Techniques for Construction Projects: Comparative Insights and a Decision-Support Model \- MDPI, 3月 11, 2026にアクセス、 [https://www.mdpi.com/2075-5309/15/20/3806](https://www.mdpi.com/2075-5309/15/20/3806)