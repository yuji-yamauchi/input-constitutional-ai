# **規範的基盤としての基本的人権および障害者権利法制：Constitutional AIとSoEフレームワークに向けた一次情報と構造分析**

人工知能（AI）システムが社会の基幹インフラとして定着し、個人の意思決定や社会参加に深く関与する時代において、AIの振る舞いを人間の倫理や法規範と合致させる「アライメント（Alignment）」は最も切実な技術的・社会的課題となっている。特に、特定企業の恣意的なガイドラインや市場原理のバイアスを排し、普遍的で客観的な基準をAIの基盤的ルール（Constitution）として組み込む「Constitutional AI」のアプローチにおいては、国際人権法および国内の基本的人権に関する法体系が、最も強力かつ正統性のある規範的基盤（Normative Foundation）を提供する。

同時に、テクノロジーを通じて個人の能力を拡張し、社会参加を自律的に促進する「SoE（Service of Empowerment）フレームワーク」を設計する上では、AIを単なる効率化のツールとしてではなく、「権利の主体」としての個人をエンパワーする能動的なエージェントとして再定義する必要がある。このパラダイムシフトを実現するためには、二次的な解釈や翻訳者のバイアスが介在しない「一次情報（Primary Sources）」、すなわち条約の原文、憲法、法律、政府ガイドラインに直接アクセスし、その法理と哲学的背景をシステム設計の要件へと昇華させることが不可欠である。本報告書は、Constitutional AIおよびSoEフレームワークの設計において参照すべき国際条約、国連文書、日本国憲法、国内法、および政府ガイドラインの一次情報を網羅的に抽出し、それらが形成する規範的構造と技術実装への含意を深く分析する。

## **国際人権基準の規範的枠組みと基本文書（カテゴリーA）**

第二次世界大戦後、国際社会は普遍的な人権の保護を目的として一連の宣言と条約を採択し、堅牢な国際人権法体系を構築してきた。国連人権高等弁務官事務所（OHCHR）は、国際人権法の中核をなす9つの主要な国際人権条約（Core International Human Rights Instruments）を特定しており、各条約にはその履行状況を監視するための独立した専門家委員会（Monitoring Bodies）が設置されている 1。

| 採択年 | 条約名（略称） | 監視機関（委員会） | 対象領域 |
| :---- | :---- | :---- | :---- |
| 1965年 | 人種差別撤廃条約（ICERD） | CERD | 人種差別の撤廃と平等の促進 |
| 1966年 | 市民的および政治的権利に関する国際規約（ICCPR） | CCPR | 自由権、表現の自由、プライバシー権 |
| 1966年 | 経済的、社会的および文化的権利に関する国際規約（ICESCR） | CESCR | 社会権、労働、教育、健康の権利 |
| 1979年 | 女性差別撤廃条約（CEDAW） | CEDAW | 性別に基づく差別の撤廃 |
| 1984年 | 拷問等禁止条約（CAT） | CAT | 非人道的な取り扱いの禁止 |
| 1989年 | 子どもの権利条約（CRC） | CRC | 児童の最善の利益と保護 |
| 1990年 | 移住労働者権利条約（ICMW） | CMW | 移住労働者とその家族の権利保護 |
| 2006年 | 強制失踪からの保護に関する条約（CPED） | CED | 国家による不当な拘束・失踪の禁止 |
| 2006年 | 障害者権利条約（CRPD） | CRPD | 障害者の完全かつ平等な社会参加 |

これらの条約は、AIシステムが学習データのバイアスによって特定の属性を持つ個人を差別したり、不当に排除したりすることを防ぐための「禁止事項（Negative Obligations）」と、AIを通じて人権の享受を促進する「積極的義務（Positive Obligations）」の両方を導き出すための基準となる。

### **世界人権宣言と国際人権章典**

1948年10月10日に国連総会で採択された「世界人権宣言（UDHR）」は、人類史上初めて普遍的に保護されるべき基本的人権を明文化した画期的なマイルストーンである 2。UDHRの前文では、人類社会のすべての構成員の固有の尊厳と平等で譲ることのできない権利を承認することが、世界における自由、正義および平和の基礎であることが宣言されている 2。UDHRはその後、70以上の人権条約の採択にインスピレーションを与え、今日の世界的な人権保護の基礎を築いた 2。

このUDHRの理念に法的拘束力を持たせるため、1966年に「市民的および政治的権利に関する国際規約（ICCPR：B規約）」および「経済的、社会的および文化的権利に関する国際規約（ICESCR：A規約）」が採択された 3。これら3つの文書は総称して「国際人権章典（International Bill of Human Rights）」と呼ばれ、すべての加盟国が尊重すべき中核的な規範を形成している 3。ICCPRは、拷問からの自由、表現の自由、プライバシーの権利など、国家からの不当な干渉を排除する自由権を規定している 4。一方、ICESCRは、労働の権利、教育の権利、適切な生活水準を享受する権利など、国家に対して積極的な作為を求める社会権を規定している 4。

AIの文脈において、ICCPRの精神は「AIによる不当な監視やプロファイリングからの保護（プライバシーと自己決定権）」に直結し、ICESCRの精神は「AIを活用した教育アクセスの保障や労働環境の改善（エンパワーメント）」に直結する。特に、国連社会権規約委員会（CESCR）が発行する一般的意見は、ICESCRの規定を現代の文脈で解釈するものであり、例えば2020年の一般的意見第25号（科学と経済的、社会的および文化的権利）や、2017年の一般的意見第24号（ビジネス活動の文脈における国家の義務）は、テクノロジー企業やAI開発者が果たすべき人権上の責任を明確化する重要な一次情報である 6。

### **女性差別撤廃条約（CEDAW）と子どもの権利条約（CRC）**

女性差別撤廃条約（CEDAW）は、政治的、経済的、社会的、文化的、市民的などいかなる分野においても、性別に基づく区別、排除または制限を禁止している 1。AIアルゴリズムにおけるジェンダーバイアス（採用AIにおける女性の不当なスコア低下や、画像生成AIにおけるジェンダー役割の固定化など）の排除は、CEDAWが要請する実質的平等の原則に基づくものである。

また、子どもの権利条約（CRC）は、児童の「最善の利益（Best interests of the child）」を第一次的に考慮することを規定している 1。CRC委員会の一般的意見、特に2021年に採択された一般的意見第25号（デジタル環境に関連する子どもの権利）は、SoEフレームワークが子ども向けのエデュテック（EdTech）AIやソーシャルプラットフォームを設計する際の直接的な規範となる 8。デジタル環境において子どもを搾取的なターゲティング広告から保護し、同時に教育的リソースへのアクセスを最大化する設計が求められる。

### **障害者権利条約（CRPD）のパラダイムシフト**

SoEフレームワークの設計において最も強力かつ直接的な規範的根拠となるのが、2006年に採択された障害者権利条約（CRPD）である 1。CRPDは、障害を個人の医学的な欠陥とみなす「医学モデル（Medical Model）」や、保護の対象としてのみ扱う「慈善モデル（Charity Model）」から、障害者を完全な権利の主体として認識し、社会側の障壁（社会的障壁）を取り除く責任を問う「人権モデル（Human Rights Model）/社会モデル（Social Model）」へのパラダイムシフトを法的に定着させた条約である 9。

CRPD委員会が発行する「一般的意見（General Comments）」は、条約の規定に対する権威ある解釈を提供する 10。SoEの設計において特に重要なのが以下の2つの一般的意見である。

**1\. 一般的意見第6号（第5条：平等と無差別）** 2018年に採択された一般的意見第6号において、委員会は、締約国の法律や政策がいまだに慈善モデルや医学モデルに基づくアプローチをとっていることに強い懸念を表明した 9。同意見では、障害に基づく差別を構成する既存の法律、規則、慣習、および慣行を変更または廃止する義務が締約国にあることが明記されている 11。特に、法的能力（Legal Capacity）の権利を侵害する「成年後見制度（Guardianship laws）」などのルールが差別の典型例として挙げられている 11。

この解釈は、AIエージェントの設計思想に決定的な影響を与える。AIがユーザーの意思決定を支援または代行する場合、一般的意見第6号の理念に従えば、AIはユーザーを「判断能力のない保護対象」として扱い、安全のために意思決定を先回りして奪う（パターナリズム）のではなく、ユーザー自身の「法的能力」と「自己決定権」を最大限に拡張・サポートする「意思決定支援（Supported Decision-Making）」のツールとして機能しなければならない。AIは、ユーザーが自律的に選択を行うための認知的足場（Cognitive Scaffolding）を提供する存在でなければならない。

**2\. 一般的意見第4号（第24条：インクルーシブ教育への権利）** 2016年に採択された一般的意見第4号は、障害のある人が一般の教育システムから排除されない権利を包括的に保障するものである 10。同意見では、インクルーシブ教育システムの構築におけるプロセスと結果の両方が、条約第3条の一般原則に準拠しなければならないと規定している 12。また、実際の障害の有無にかかわらず、障害があると「認識されている（perceived disabilities）」すべての人に適用される点が極めて重要である 12。

これは、教育分野におけるAIシステムが、学習者をその特性に基づいて別個の「特別支援用プラットフォーム」に隔離・分離（Segregation）するのではなく、メインストリームのAIシステム自体が多様な認知特性、感覚特性、身体特性に柔軟に適応する「ユニバーサルデザイン（Universal Design）」を組み込むべきであることを要請している。パーソナライズされたAIチューターは、誰もが同じデジタル環境の中で自身のペースで学べるインクルーシブな空間を創出する技術的基盤となる。

### **ILOの中核的労働基準とAIサプライチェーンの倫理**

SoEフレームワークが対象とするエンパワーメントの重要な領域に「就労」がある。この領域における規範は、国際労働機関（ILO）の条約によって形成されている。AIの開発・運用エコシステム全体において、労働者の権利を保護することは、技術の正統性を担保する上で不可欠である。

特に、1930年の「強制労働条約（第29号）」および1957年の「強制労働の廃止に関する条約（第105号）」は、最も広く批准されている中核的労働基準である 13。ILOの推計によれば、今日でも世界で2,500万人の男女および子どもが強制労働の被害に遭っており、そこから生み出される違法な利益は年間1,500億ドルに上る 13。

強制労働は、「処罰の脅威の下に強要され、自らが任意に申し出たものではないすべての労働またはサービス」と定義される 13。これには、借金による束縛（Debt bondage）や人身取引（Trafficking in persons）を通じた搾取が含まれる 13。第105号条約では、政治的見解の表明に対する制裁、経済発展のための動員、労働規律の手段、ストライキ参加への制裁、または人種・社会的・国民的・宗教的差別を目的とした強制労働を明示的に禁止している 15。

AI産業の文脈においては、大規模言語モデルの強化学習（RLHF）やデータセットの構築に必要なデータアノテーション（Data annotation）、およびコンテンツモデレーション（Content moderation）に従事するグローバル・サウスの労働者が、低賃金、トラウマを誘発する有害なコンテンツへの反復的な曝露、実質的な搾取環境に置かれている事例が国際的に指摘されている（いわゆる「ゴーストワーク」問題）。Constitutional AIのバリューチェーン全体において、ILO第29号および第105号が定める強制労働の排除基準をクリアし、労働者の尊厳を保障することが、真のエンパワーメント・サービスの前提条件である。

さらに、ILO「障害者の職業リハビリテーション及び雇用に関する条約（第159号）」は、障害者が適当な職業を得て、それを継続し、かつその職業において昇進することができるようにするための国家的政策を求めている。AIを活用したジョブマッチングやスキル開発プラットフォームは、この第159号条約の理念を技術的に実装し、労働市場におけるインクルージョンを加速させる手段として設計されなければならない。

## **日本国憲法および国内法制の構造的要請（カテゴリーB）**

国際人権条約の理念は、日本国憲法を頂点とし、それに連なる各種の国内法制において具体化されている。これらの法令は、日本国内でAIシステムを社会実装する際の厳格な法的制約（Legal constraints）であると同時に、SoEが実現すべき価値の青写真である。e-Gov法令検索を通じてアクセス可能なこれらの一次情報は、アルゴリズムの挙動を検証するための客観的指標を提供する。

### **憲法上の基本的人権とAIの憲法**

日本国憲法は、第11条において「国民は、すべての基本的人権の享有を妨げられない」と宣言し、基本的人権を「侵すことのできない永久の権利」として保障している。

SoEフレームワークの設計哲学において最も中核となるのが、第13条の「個人の尊重（すべての国民は、個人として尊重される）」である。第13条は、生命、自由及び幸福追求に対する国民の権利について、公共の福祉に反しない限り、立法その他の国政の上で最大の尊重を必要とすると定めている。この規定は、現代の法解釈においてプライバシー権や自己決定権の根拠とされている。AIシステムがユーザーの行動データを過度に収集・分析し、ユーザーの自律的な選択を無意識のうちに操作するようなアーキテクチャ（ダークパターンや過剰なナッジ）は、この「個人の尊重」の理念に真っ向から対立する。AIは個人の自律性を奪うのではなく、増幅するものでなければならない。

また、第25条は「すべて国民は、健康で文化的な最低限度の生活を営む権利を有する（生存権）」と規定し、第26条は「すべて国民は、法律の定めるところにより、その能力に応じて、ひとしく教育を受ける権利を有する」と規定している。AIを活用した福祉・医療サービスのマッチングや、前述のインクルーシブ教育を支える個別最適化学習システムは、国家が保障すべきこれらの生存権・教育権を、テクノロジーの力でより高度かつ効率的に実現するためのインフラとして機能する。

### **教育と障害福祉の基盤法制**

教育分野においては、教育基本法および学校教育法が基盤となる。教育基本法は、教育の機会均等と個人の能力の伸長を謳っており、学校教育法は、特別支援教育を含む具体的な学校制度の運用を定めている。SoEフレームワークに基づく教育AIは、これらの法が求める「個性を生かした教育」を、教員の負担を軽減しつつスケーラブルに提供するソリューションとなる。

障害福祉・就労の分野では、障害者基本法を頂点とし、障害者の日常生活及び社会生活を総合的に支援するための法律（障害者総合支援法）、および障害者雇用促進法が構造化されている。障害者総合支援法は、居宅介護、就労移行支援、就労継続支援など、障害者の地域生活を支える多岐にわたるサービスを規定している。AI技術は、これらのサービスへのアクセスを最適化し、膨大な福祉制度の中から個人のニーズに合致した支援計画を提案するナビゲーションシステムとして応用可能である。発達障害者支援法および精神保健福祉法も、近年急増する発達障害や精神障害に特化した支援体制を定めており、AIが学習すべき特性理解の法的基準を提供する。

### **民法（準委任契約）とエージェントAIの法的責任**

Constitutional AIの応用において、AIがユーザーの代理人（エージェント）として自律的にタスクを遂行する「エージェント型AI」が台頭している。このAIエージェントの法的な位置づけを考察する上で、民法の「委任（第643条〜）」および「準委任（第656条）」の規定が極めて重要な示唆を与える。

民法第643条は、当事者の一方が法律行為をすることを相手方に委託し、相手方がこれを承諾することによって効力を生ずる委任契約を定めている。第656条の準委任は、事実行為の委託についてこれを準用する。AIエージェントがユーザーに代わって情報を収集し、予定を調整し、サービスを予約する行為は、法理的には準委任契約の構造に酷似している。

準委任において受任者は、「善管注意義務（善良な管理者の注意義務、第644条）」を負う。すなわち、AIエージェントはプラットフォーマーの利益（広告収益や自社サービスの優遇）を優先するのではなく、委託者であるユーザー自身の最善の利益（Best interests）のために、高度な忠実義務をもって機能しなければならない。SoEフレームワークにおけるAIは、ユーザーに対するデジタルの「受任者」として設計され、利益相反を排除した善管注意義務をアルゴリズムレベルで実装する必要がある。個人情報保護法もまた、この過程で扱われる機微なデータ（障害情報、医療情報など）の厳格な管理を義務付けている。

### **障害者差別解消法の改正と「合理的配慮」の法的義務化**

AI開発者やサービス提供者（民間事業者）にとって、近年の法改正の中で最も決定的な影響を持つのが「障害者差別解消法（障害を理由とする差別の解消の推進に関する法律）」である。2024年（令和6年）4月1日に施行された改正法により、これまで民間事業者に対しては「努力義務」であった「合理的配慮の提供（Provision of Reasonable Accommodation）」が「法的義務」へと引き上げられた 16。

| 主体 | 不当な差別的取扱いの禁止 | 合理的配慮の提供 | 環境の整備 |
| :---- | :---- | :---- | :---- |
| 行政機関等 | 法的義務（第7条第1項） | 法的義務（第7条第2項） | 努力義務（第5条） |
| 民間事業者 | 法的義務（第8条第1項） | **法的義務（第8条第2項）※2024年4月〜** | 努力義務（第5条） |

障害者差別解消法に基づく内閣府のガイドラインでは、合理的配慮とは、事務・事業の目的・内容・機能に照らし、「必要とされる範囲で本来の業務に付随するもの」であり、「障害のない人との比較において同等の機会の提供を受けるためのもの」であると定義されている 17。ただし、その提供に伴う負担が「過重（Undue burden）」である場合は、提供の義務は生じない 18。

内閣府のポータルサイトでは、合理的配慮の具体例として以下が挙げられている 16：

* 意思を伝え合うために絵や写真のカードやタブレット端末などを使う。  
* 段差がある場合に、スロープなどを使って補助する。  
* 障害者から「自筆が難しいので代筆してほしい」と伝えられたとき、代筆に問題がない書類の場合は、障害者の意思を十分に確認しながら代筆する。

この法改正は、AI技術に対する巨大な社会的需要を生み出す。LLM（大規模言語モデル）を用いた高精度な音声認識・テキスト要約機能、視線入力との連携、認知特性に合わせたUIの動的変更機能は、前述の「タブレット端末や代筆によるコミュニケーション支援」を技術的にスケールさせるものである。2024年4月以降、民間事業者は障害のあるユーザーからの合理的配慮の申し出に対して法的に応じる義務があり、AI技術を活用したSoEフレームワークは、企業がこの法的義務（Compliance）を低コストかつ高品質に果たすための不可欠なインフラストラクチャとして位置づけられる。AIは負担を「過重」なものから「容易」なものへと変換するゲームチェンジャーとなる。

## **政府ガイドラインと行政的履行の現状（カテゴリーC）**

法規範が実社会でどのように解釈され、実装されているかを測定するためには、政府統計、省庁の告示、および行政の運用基準を参照する必要がある。これらはAIが学習すべき「現状のコンテキスト」を提供する。

### **就労支援とサービス管理責任者の役割**

厚生労働省が定める「就労移行支援・就労継続支援に関する運営基準」は、障害者が一般就労を目指す、あるいは福祉的就労を行う際の事業所の設置基準や人員配置、支援内容を厳密に定めている。この支援の中心を担うのが、「サービス管理責任者（サビ管）」である。サビ管は、個々の利用者の特性、希望、課題をアセスメントし、「個別支援計画」を作成・進行管理する専門職である。

SoEフレームワークは、このサビ管の業務を代替するのではなく、エンパワーメントを支援するツールとして設計されるべきである。複雑な行政手続き、利用者の日々の感情の変化、体調の波などの非構造化データをAIが分析・可視化することで、サビ管はより高度な対人コミュニケーションと心理的サポート（ヒューマンタッチ）にリソースを集中させることが可能になる。文部科学省が発出する「特別支援教育関連通知」に基づく個別の教育支援計画においても、同様のAIによる支援フレームワークが適用できる。

### **障害者雇用の動向と精神障害者の急増（データ分析）**

社会のインクルーシビティの実態を最も客観的に示すのが雇用統計である。厚生労働省が公表した「令和5年（2023年）障害者雇用状況の集計結果」は、現在の日本の障害者雇用の構造的な変化を如実に示している 20。

企業における障害者の実雇用数は、20年連続で過去最高を更新し、総計で642,178人に達した 20。その内訳と推移は以下の通りである。

| 障害種別 | 令和5年（2023年）実雇用数 | 構成比 | 前年比増加率 | 平成25年（2013年）実雇用数からの推移 |
| :---- | :---- | :---- | :---- | :---- |
| 身体障害者 | 360,157人 | 56.1% | \+0.7% | 303,798人（微増・安定傾向） |
| 知的障害者 | 151,722.5人 | 23.6% | \+3.6% | 82,930人（約1.8倍増） |
| 精神障害者 | 130,298人 | 20.3% | **\+18.7%** | 22,218人（**約5.8倍増**） |

特筆すべきは、精神障害者の雇用数が前年比で+18.7%という急激な伸びを示している点である 20。10年前（平成25年）の精神障害者の雇用実数がわずか約2万人であったことと比較すると、その増加は爆発的とも言える 20。

この統計データは、今後の就労支援および職場の合理的配慮において、車椅子用のスロープや点字といった「物理的なバリアフリー」だけでなく、「精神的・認知的・感覚的なバリアフリー」の需要が急激に高まっていることを明確に示している。SoEフレームワークとしてのAIは、発達障害や精神障害を持つ労働者のタスク管理支援（優先順位付けの可視化）、対人コミュニケーションの仲介（例えば、上司からの曖昧な指示を具体的に分解・変換する機能）、感覚過敏への配慮（UIの視覚的刺激の調整）、ストレス兆候の早期検知とアラートといった、認知面・心理面でのエンパワーメントに焦点を当てる必要性をデータが裏付けている。内閣府が発行する「障害者白書」の最新版でも、こうした多様化するニーズへの対応が重要な政策課題として論じられている。

## **CRPD国際的審査と市民社会のフィードバックメカニズム（カテゴリーD）**

国際人権条約は、批准して完了するものではなく、「国家報告体制（State Reporting System）」を通じた継続的なモニタリングが行われる。CRPD委員会は、締約国（日本政府）から提出された統合報告書（States parties reports）を審査し、ジュネーブでの対面審査（建設的対話）を経て、「総括所見（Concluding Observations）」として懸念事項や勧告を文書で提示する 21。日本は2022年に初めてこの審査を受け、総括所見において、分離教育（特別支援学級・学校）の是正や、精神科病院への強制入院制度の見直しなど、本質的な人権課題に対する強い改善勧告を受けた。

この国連の審査プロセスにおいて極めて重要な役割を果たすのが、DPI日本会議などの障害当事者団体をはじめとするNGOネットワークが独自に提出する「市民社会レポート（パラレルレポート / シャドーレポート）」である。一般的意見第7号（第4条3項および第33条3項に関する）でも強調されているように、条約の実施と監視における「障害者およびその代表団体の積極的な参加」は、CRPDの根幹をなす原則「私たちのことを、私たち抜きに決めないで（Nothing About Us Without Us）」の制度的体現である 10。政府の報告書が法整備の成果を強調する傾向にあるのに対し、市民社会レポートは当事者の生活実態に基づくギャップ（未解決の差別や障壁）を赤裸々に提示し、委員会の審査の質を担保する。

### **RLHFと参加型AI設計へのインプリケーション**

この「政府（枠組みの提供者）と市民社会（当事者からのフィードバック）」の構造的な緊張関係と対話のプロセスは、Constitutional AIの設計において近年主流となっているアライメント手法「RLHF（Reinforcement Learning from Human Feedback：人間のフィードバックからの強化学習）」と深い類似性を持つ。

AIの憲法（プロンプトや報酬モデル）を設計し、安全性を調整する際、巨大テック企業（政府に相当）のエンジニアや一部の有識者だけで決定を下すことは、マイノリティの現実的なニーズを不可視化する危険性を孕んでいる。マイノリティ当事者（市民社会に相当）をデータのラベリングプロセスや報酬関数の評価に体系的に巻き込み、彼らのフィードバックをアルゴリズムに反映させる「参加型AI設計（Participatory AI Design）」のメカニズムを構築することが不可欠である。国連の審査システムが市民社会の声を組み込むことで機能するように、SoEフレームワークもまた、多様なユーザーとの継続的なインタラクションを通じてモデルを更新する適応的なフィードバックループを実装しなければならない。

## ---

**規範的基盤の一次情報リポジトリ（URLマトリクス）**

上記の分析の基盤となる、Constitutional AI研究およびSoEフレームワーク設計のための「一次情報（Primary Sources）」URLを以下の表に集約する。研究者や査読者が、二次的な解説サイトを経由せず、直接法規範の原文にアクセスできるリンク集として整備している。

※注記：

* 国連文書はOHCHR（国連人権高等弁務官事務所）およびILOの公式データベースを優先した。  
* 国内法については、法令検索の標準インフラである「e-Gov法令検索」を公式ソースとしている。法改正等によりダイレクトリンクの永続性が変動する可能性があるため、基点URLを記載している。  
* 日本語訳については、日本の外務省（MOFA）等が提供する公定訳を想定しているが、サーバー制限等で直接アクセスが困難な場合（エラー22等）は「外務省HPにて検索推奨」等と注記した。

| カテゴリー | 文書名 | 発行機関 | URL（原文等アクセス先） | URL（日本語訳等） | 最終確認推奨 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **A-1** | 世界人権宣言（UDHR, 1948） | UN / OHCHR | [https://www.un.org/en/about-us/universal-declaration-of-human-rights](https://www.un.org/en/about-us/universal-declaration-of-human-rights) | [https://www.ohchr.org/en/human-rights/universal-declaration/translations/japanese](https://www.ohchr.org/en/human-rights/universal-declaration/translations/japanese) | 要確認 |
| **A-2** | 市民的および政治的権利に関する国際規約（ICCPR） | OHCHR | [https://www.ohchr.org/en/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights](https://www.ohchr.org/en/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights) | [https://www.mofa.go.jp/mofaj/gaiko/jinken/index.html](https://www.mofa.go.jp/mofaj/gaiko/jinken/index.html) (外務省検索) | 要追加調査 |
| **A-3** | 経済的、社会的および文化的権利に関する国際規約（ICESCR） | OHCHR | [https://www.ohchr.org/en/instruments-mechanisms/instruments/international-covenant-economic-social-and-cultural-rights](https://www.ohchr.org/en/instruments-mechanisms/instruments/international-covenant-economic-social-and-cultural-rights) | [https://www.mofa.go.jp/mofaj/gaiko/jinken/index.html](https://www.mofa.go.jp/mofaj/gaiko/jinken/index.html) (外務省検索) | 要追加調査 |
| **A-4** | 障害者権利条約（CRPD, 2006）本文 | OHCHR | [https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-rights-persons-disabilities](https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-rights-persons-disabilities) | [https://www.mofa.go.jp/mofaj/gaiko/jinken/index.html](https://www.mofa.go.jp/mofaj/gaiko/jinken/index.html) (外務省検索) | 要追加調査 |
| **A-4** | CRPD 一般的意見（General Comments）一覧ページ | OHCHR | [https://www.ohchr.org/en/treaty-bodies/crpd/general-comments](https://www.ohchr.org/en/treaty-bodies/crpd/general-comments) | 該当なし（NGO等の翻訳参照） | 要確認 |
| **A-4** | CRPD 一般的意見第4号（インクルーシブ教育） | OHCHR | [https://www.ohchr.org/Documents/HRBodies/CRPD/GC/RighttoEducation/CRPD-C-GC-4.doc](https://www.ohchr.org/Documents/HRBodies/CRPD/GC/RighttoEducation/CRPD-C-GC-4.doc) (Word) | 該当なし | 要確認 |
| **A-4** | CRPD 一般的意見第6号（平等・無差別） | OHCHR | [https://docs.un.org/en/crpd/c/gc/6](https://docs.un.org/en/crpd/c/gc/6) | 該当なし | 要確認 |
| **A-5** | 女性差別撤廃条約（CEDAW） | OHCHR | [https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-elimination-all-forms-discrimination-against-women](https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-elimination-all-forms-discrimination-against-women) | [https://www.mofa.go.jp/mofaj/gaiko/jinken/index.html](https://www.mofa.go.jp/mofaj/gaiko/jinken/index.html) (外務省検索) | 要追加調査 |
| **A-6** | 子どもの権利条約（CRC） | OHCHR | [https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-rights-child](https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-rights-child) | [https://www.mofa.go.jp/mofaj/gaiko/jinken/index.html](https://www.mofa.go.jp/mofaj/gaiko/jinken/index.html) (外務省検索) | 要追加調査 |
| **A-7** | ILO強制労働条約（第29号） | ILO | [https://treaties.un.org/pages/showDetails.aspx?objid=08000002801611d8](https://treaties.un.org/pages/showDetails.aspx?objid=08000002801611d8) | [https://www.ilo.org/tokyo/](https://www.ilo.org/tokyo/) (ILO駐日事務所検索) | 要追加調査 |
| **A-7** | ILO強制労働廃止条約（第105号） | ILO | [https://hrlibrary.umn.edu/instree/n2ilo105.htm](https://hrlibrary.umn.edu/instree/n2ilo105.htm) | [https://www.ilo.org/tokyo/](https://www.ilo.org/tokyo/) (ILO駐日事務所検索) | 要追加調査 |
| **A-8** | ILO障害者の職業リハビリテーション及び雇用に関する条約（第159号） | ILO | [https://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100\_INSTRUMENT\_ID:312304](https://www.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_INSTRUMENT_ID:312304) | [https://www.ilo.org/tokyo/](https://www.ilo.org/tokyo/) (ILO駐日事務所検索) | 要追加調査 |
| **A-9** | 国連社会権規約委員会（CESCR） 一般的意見一覧 | OHCHR | [https://www.ohchr.org/en/treaty-bodies/cescr/general-comments](https://www.ohchr.org/en/treaty-bodies/cescr/general-comments) | 該当なし | 要確認 |
| **B-1** | 日本国憲法（第11, 13, 25, 26条等） | e-Gov | [https://elaws.e-gov.go.jp/document?lawid=321CONSTITUTION](https://elaws.e-gov.go.jp/document?lawid=321CONSTITUTION) | 該当なし（原文が日本語） | 要確認 |
| **B-2** | 教育基本法 | e-Gov | [https://elaws.e-gov.go.jp/](https://elaws.e-gov.go.jp/) (法令検索にて「教育基本法」を特定) | 該当なし | 要追加調査 |
| **B-3** | 学校教育法 | e-Gov | [https://elaws.e-gov.go.jp/](https://elaws.e-gov.go.jp/) (法令検索にて「学校教育法」を特定) | 該当なし | 要追加調査 |
| **B-4** | 障害者基本法 | e-Gov | [https://elaws.e-gov.go.jp/](https://elaws.e-gov.go.jp/) (法令検索にて「障害者基本法」を特定) | 該当なし | 要追加調査 |
| **B-5** | 障害者の日常生活及び社会生活を総合的に支援するための法律 | e-Gov | [https://elaws.e-gov.go.jp/](https://elaws.e-gov.go.jp/) (法令検索にて特定) | 該当なし | 要追加調査 |
| **B-6** | 障害者雇用促進法 | e-Gov | [https://elaws.e-gov.go.jp/](https://elaws.e-gov.go.jp/) (法令検索にて特定) | 該当なし | 要追加調査 |
| **B-7** | 障害者差別解消法（2024年4月改正後） | e-Gov | [https://elaws.e-gov.go.jp/](https://elaws.e-gov.go.jp/) (法令検索にて特定) | 該当なし | 要追加調査 |
| **B-8** | 発達障害者支援法 | e-Gov | [https://elaws.e-gov.go.jp/](https://elaws.e-gov.go.jp/) (法令検索にて特定) | 該当なし | 要追加調査 |
| **B-9** | 精神保健福祉法 | e-Gov | [https://elaws.e-gov.go.jp/](https://elaws.e-gov.go.jp/) (法令検索にて特定) | 該当なし | 要追加調査 |
| **B-10** | 個人情報保護法 | e-Gov | [https://elaws.e-gov.go.jp/](https://elaws.e-gov.go.jp/) (法令検索にて特定) | 該当なし | 要追加調査 |
| **B-11** | 労働基準法 | e-Gov | [https://elaws.e-gov.go.jp/](https://elaws.e-gov.go.jp/) (法令検索にて特定) | 該当なし | 要追加調査 |
| **B-12** | 民法（準委任契約関連：第643条〜656条） | e-Gov | [https://elaws.e-gov.go.jp/](https://elaws.e-gov.go.jp/) (法令検索にて特定) | 該当なし | 要追加調査 |
| **B-13** | 社会福祉法 | e-Gov | [https://elaws.e-gov.go.jp/](https://elaws.e-gov.go.jp/) (法令検索にて特定) | 該当なし | 要追加調査 |
| **C-1** | 就労移行支援・就労継続支援に関する運営基準 | 厚生労働省 | [https://www.mhlw.go.jp/](https://www.mhlw.go.jp/) (厚労省HP法令・通知検索にて特定) | 該当なし | 要追加調査 |
| **C-2** | サービス管理責任者（サビ管）関連通知・告示 | 厚生労働省 | [https://www.mhlw.go.jp/](https://www.mhlw.go.jp/) (厚労省HP法令・通知検索にて特定) | 該当なし | 要追加調査 |
| **C-3** | 特別支援教育関連通知 | 文部科学省 | [https://www.mext.go.jp/](https://www.mext.go.jp/) (文科省HPにて特定) | 該当なし | 要追加調査 |
| **C-4** | 障害者白書（最新版） | 内閣府 | [https://www8.cao.go.jp/shougai/whitepaper/index-w.html](https://www8.cao.go.jp/shougai/whitepaper/index-w.html) (最新版PDF) | 該当なし | 要追加調査 |
| **C-5** | 障害者差別解消法に基づく合理的配慮の提供に関するガイドライン | 内閣府 | [https://www8.cao.go.jp/shougai/suishin/pdf/gouriteki\_hairyo2/print.pdf](https://www8.cao.go.jp/shougai/suishin/pdf/gouriteki_hairyo2/print.pdf) (PDF) | 該当なし | 要確認 |
| **C-6** | 障害者雇用状況の集計結果（令和5年版） | 厚生労働省 | [https://www.mhlw.go.jp/content/11704000/001180701.pdf](https://www.mhlw.go.jp/content/11704000/001180701.pdf) (PDF) | 該当なし | 要確認 |
| **D-1** | 日本政府の初回・第2・3回統合報告書（国連提出） | 外務省/OHCHR | [https://www.mofa.go.jp/mofaj/gaiko/jinken/shougai\_k.html](https://www.mofa.go.jp/mofaj/gaiko/jinken/shougai_k.html) (外務省検索) | 該当なし | 要追加調査 |
| **D-2** | 障害者権利委員会による日本への総括所見 | OHCHR | [https://www.ohchr.org/en/treaty-bodies/crpd](https://www.ohchr.org/en/treaty-bodies/crpd) | [https://www.mofa.go.jp/mofaj/gaiko/jinken/shougai\_k.html](https://www.mofa.go.jp/mofaj/gaiko/jinken/shougai_k.html) (要検索) | 要追加調査 |
| **D-3** | 障害者権利条約市民社会レポート | 各種NGO等 | 要追加調査（DPI日本会議等の公式ウェブサイトを参照） | 該当なし | 要追加調査 |

## **結論：規範的基盤から技術的エンパワーメントの実現へ**

本報告書で網羅的に抽出し、構造的に分析した国際人権条約、国内法令、および政府の統計データ・ガイドラインは、システム開発における単なる法的な遵守事項（Compliance Checklist）や免責のための要件にとどまるものではない。これらは、AIシステムが人間の尊厳をどのようにモデル化し、権利主体としての個人をいかに支援すべきかを規定する「高度なアーキテクチャ要件（Architectural Requirements）」である。

UDHRに端を発し、CRPDの一般的意見第6号に至る国際人権法の進化の歴史は、一貫して「人間を客体（管理、保護、哀れみの対象）から主体（自己決定権を持つ権利の行使者）へと引き上げる」プロセスであった 2。日本国内においても、2024年4月の障害者差別解消法改正による民間事業者への合理的配慮の完全義務化 17 や、雇用市場における精神障害者の急激な増加（前年比+18.7%） 20 が示すように、社会システムのインクルーシビティに対する法的・実体的な要求はかつてなく高まっている。

Constitutional AIおよびSoEフレームワークの設計者は、整理されたこれらの一次情報を基礎資料として参照し、AIのプロンプトエンジニアリングや報酬関数の設計段階から「人権モデル」の概念を直接的にハードコーディングする必要がある。「過重な負担」の免責条項 18 に安易に依存するのではなく、AIの持つ限界費用ゼロに近い情報処理能力と認知支援能力を最大限に活用し、あらゆるユーザーの特性に対する「合理的配慮の自動的かつ個別最適な生成」を目指すことこそが、真のエンパワーメントサービスの完成を意味する。法規範はもはやテクノロジーに対する単なる制約ではなく、テクノロジーによってその崇高な理念が社会の隅々にまで完全に実装される時代へと移行しつつあるのである。

#### **引用文献**

1. The Core International Human Rights Instruments and their monitoring bodies \- OHCHR.org, 3月 6, 2026にアクセス、 [https://www.ohchr.org/en/core-international-human-rights-instruments-and-their-monitoring-bodies](https://www.ohchr.org/en/core-international-human-rights-instruments-and-their-monitoring-bodies)  
2. Universal Declaration of Human Rights \- the United Nations, 3月 6, 2026にアクセス、 [https://www.un.org/en/about-us/universal-declaration-of-human-rights](https://www.un.org/en/about-us/universal-declaration-of-human-rights)  
3. International Human Rights Law | OHCHR, 3月 6, 2026にアクセス、 [https://www.ohchr.org/en/instruments-and-mechanisms/international-human-rights-law](https://www.ohchr.org/en/instruments-and-mechanisms/international-human-rights-law)  
4. International Bill of Human Rights | OHCHR, 3月 6, 2026にアクセス、 [https://www.ohchr.org/en/what-are-human-rights/international-bill-human-rights](https://www.ohchr.org/en/what-are-human-rights/international-bill-human-rights)  
5. International human rights instruments \- Wikipedia, 3月 6, 2026にアクセス、 [https://en.wikipedia.org/wiki/International\_human\_rights\_instruments](https://en.wikipedia.org/wiki/International_human_rights_instruments)  
6. General comments | OHCHR, 3月 6, 2026にアクセス、 [https://www.ohchr.org/en/treaty-bodies/cescr/general-comments](https://www.ohchr.org/en/treaty-bodies/cescr/general-comments)  
7. General comment No. 24 (2017) on State obligations under the International Covenant on Economic, Social and Cultural Rights in the context of business activities | Refworld, 3月 6, 2026にアクセス、 [https://www.refworld.org/legal/general/cescr/2017/en/122356](https://www.refworld.org/legal/general/cescr/2017/en/122356)  
8. General comments | OHCHR, 3月 6, 2026にアクセス、 [https://www.ohchr.org/en/treaty-bodies/crc/general-comments](https://www.ohchr.org/en/treaty-bodies/crc/general-comments)  
9. General comment No.6 on equality and non-discrimination | OHCHR, 3月 6, 2026にアクセス、 [https://www.ohchr.org/en/documents/general-comments-and-recommendations/general-comment-no6-equality-and-non-discrimination](https://www.ohchr.org/en/documents/general-comments-and-recommendations/general-comment-no6-equality-and-non-discrimination)  
10. General comments | OHCHR, 3月 6, 2026にアクセス、 [https://www.ohchr.org/en/treaty-bodies/crpd/general-comments](https://www.ohchr.org/en/treaty-bodies/crpd/general-comments)  
11. CRPD/C/GC/6 \- the United Nations, 3月 6, 2026にアクセス、 [https://docs.un.org/en/crpd/c/gc/6](https://docs.un.org/en/crpd/c/gc/6)  
12. General Comment No. 4 (Right to Inclusive Education) \- OHCHR.org, 3月 6, 2026にアクセス、 [https://www.ohchr.org/Documents/HRBodies/CRPD/GC/RighttoEducation/CRPD-C-GC-4.doc](https://www.ohchr.org/Documents/HRBodies/CRPD/GC/RighttoEducation/CRPD-C-GC-4.doc)  
13. Protocol to the Forced Labour Convention, 3月 6, 2026にアクセス、 [https://www.ilo.org/media/419561/download](https://www.ilo.org/media/419561/download)  
14. ILO Conventions Nos. 29 and 105 \- International Labour Organization, 3月 6, 2026にアクセス、 [https://www.ilo.org/media/288721/download](https://www.ilo.org/media/288721/download)  
15. Abolition of Forced Labour Convention (ILO No. 105), 320 U.N.T.S. 291, entered into force Jan. 17, 1959\. \- University of Minnesota Human Rights Library, 3月 6, 2026にアクセス、 [https://hrlibrary.umn.edu/instree/n2ilo105.htm](https://hrlibrary.umn.edu/instree/n2ilo105.htm)  
16. 合理的配慮の提供 | 障害者の差別解消に向けた理解促進ポータルサイト, 3月 6, 2026にアクセス、 [https://shougaisha-sabetukaishou.go.jp/goritekihairyo/](https://shougaisha-sabetukaishou.go.jp/goritekihairyo/)  
17. 事業者による障害のある人への「合理的配慮の提供」が義務化 \- 政府広報オンライン, 3月 6, 2026にアクセス、 [https://www.gov-online.go.jp/article/202402/entry-5611.html](https://www.gov-online.go.jp/article/202402/entry-5611.html)  
18. 障害者を含めた包摂的社会 実現・合理的配慮について \- 経済産業省, 3月 6, 2026にアクセス、 [https://www.meti.go.jp/policy/economy/jinzai/shougai/002\_siryo.pdf](https://www.meti.go.jp/policy/economy/jinzai/shougai/002_siryo.pdf)  
19. 障害者差別解消法, 3月 6, 2026にアクセス、 [https://shougaisha-sabetukaishou.go.jp/kyoseisyakai/syogaisyasabetukaisyoho/](https://shougaisha-sabetukaishou.go.jp/kyoseisyakai/syogaisyasabetukaisyoho/)  
20. 「令和5年障害者雇用状況の集計結果」について | ミルマガジン, 3月 6, 2026にアクセス、 [https://mbit.co.jp/mag/column/107093](https://mbit.co.jp/mag/column/107093)  
21. Committee on the Rights of Persons with Disabilities \- OHCHR.org, 3月 6, 2026にアクセス、 [https://www.ohchr.org/en/treaty-bodies/crpd](https://www.ohchr.org/en/treaty-bodies/crpd)  
22. 1月 1, 1970にアクセス、 [https://www.mofa.go.jp/mofaj/gaiko/jinken/index.html](https://www.mofa.go.jp/mofaj/gaiko/jinken/index.html)  
23. 1月 1, 1970にアクセス、 [https://www.mofa.go.jp/mofaj/gaiko/jinken/shougai\_k.html](https://www.mofa.go.jp/mofaj/gaiko/jinken/shougai_k.html)