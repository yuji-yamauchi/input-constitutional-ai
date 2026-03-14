import { useState } from "react";

// ============================================================
// SoE Profile Converter — Multi-LLM Assessment → RPG可視化
// ============================================================
// Input: LLM Assessment YAML (Big Five, MBTI, HPI, Employment)
// Output: SoE Profile (Core Stats, Skills, Traits, Environment)
// Design: 本人主権型 × 粒度思考 × ICF × Capability Approach
// ============================================================

// --- Level Normalization ---
const LEVEL_MAP = {
  "非常に高": 90, "極めて高": 90,
  "高": 80, "やや高": 65,
  "中程度": 50, "中": 50,
  "やや低": 35, "低": 20, "非常に低": 10,
};
const parseLevel = (v) => {
  if (typeof v === "number") return v;
  if (typeof v === "string") {
    for (const [k, n] of Object.entries(LEVEL_MAP)) {
      if (v.includes(k)) return n;
    }
  }
  return 50;
};

// --- Normalize Assessment YAML → Common Schema ---
const normalize = (raw) => {
  const bf = raw.big_five || {};
  const getBF = (trait) => {
    const t = bf[trait];
    if (!t) return { value: 50, notes: "" };
    if (typeof t === "string") return { value: parseLevel(t), notes: bf.notes || "" };
    return { value: parseLevel(t.rating || t.level || t), notes: t.notes || "" };
  };

  const hpi = raw.hpi_proxy || {};
  const getHPI = (trait) => {
    const t = hpi[trait];
    if (!t) return { value: 50, notes: "" };
    if (typeof t === "string") return { value: parseLevel(t), notes: "" };
    return { value: parseLevel(t.rating || t.level || t), notes: t.notes || "" };
  };

  const mbti = raw.mbti || {};
  const emp = raw.employment_considerations_ja || {};

  return {
    meta: raw.meta || {},
    bigFive: {
      openness: getBF("openness"),
      conscientiousness: getBF("conscientiousness"),
      extraversion: getBF("extraversion"),
      agreeableness: getBF("agreeableness"),
      neuroticism: getBF("neuroticism"),
    },
    hpi: {
      adjustment: getHPI("adjustment"),
      ambition: getHPI("ambition"),
      sociability: getHPI("sociability"),
      interpersonal_sensitivity: getHPI("interpersonal_sensitivity"),
      prudence: getHPI("prudence"),
      inquisitive: getHPI("inquisitive"),
      learning_approach: getHPI("learning_approach"),
    },
    mbti: {
      type: mbti.estimated_type || "N/A",
      confidence: mbti.confidence_level || mbti.confidence || "N/A",
      notes: mbti.notes || "",
    },
    employment: {
      strengths: Array.isArray(emp.strengths) ? emp.strengths : [],
      challenges: emp.challenges || emp.accommodations || [],
      optimal_roles: emp.optimal_roles || emp.recommended_work_environments || [],
    },
    japaneseProficiency: raw.japanese_proficiency || {},
    additionalObservations: raw.additional_observations || null,
  };
};

// --- Map normalized assessment → SoE Profile Data ---
const toSoEProfile = (norm, personName, source) => {
  const bf = norm.bigFive;
  const hpi = norm.hpi;

  // Core Stats mapping (Big Five + HPI → RPG Stats)
  const stats = {
    STR: {
      value: Math.round((hpi.ambition.value * 0.6 + bf.conscientiousness.value * 0.4)),
      label: "実行力",
      desc: `Ambition(${hpi.ambition.value}) × Conscientiousness(${bf.conscientiousness.value})`,
      sources: ["HPI:Ambition", "BF:Conscientiousness"],
    },
    INT: {
      value: Math.round((bf.openness.value * 0.5 + hpi.inquisitive.value * 0.3 + hpi.learning_approach.value * 0.2)),
      label: "分析力",
      desc: `Openness(${bf.openness.value}) × Inquisitive(${hpi.inquisitive.value})`,
      sources: ["BF:Openness", "HPI:Inquisitive", "HPI:Learning"],
    },
    MEN: {
      value: Math.round((100 - bf.neuroticism.value) * 0.5 + hpi.adjustment.value * 0.5),
      label: "精神耐久",
      desc: `Neuroticism反転(${100 - bf.neuroticism.value}) × Adjustment(${hpi.adjustment.value})`,
      sources: ["BF:Neuroticism(inv)", "HPI:Adjustment"],
    },
    DEX: {
      value: Math.round((hpi.prudence.value * 0.5 + bf.conscientiousness.value * 0.3 + hpi.interpersonal_sensitivity.value * 0.2)),
      label: "器用さ",
      desc: `Prudence(${hpi.prudence.value}) × Conscientiousness(${bf.conscientiousness.value})`,
      sources: ["HPI:Prudence", "BF:Conscientiousness", "HPI:InterpersonalSensitivity"],
    },
    VIT: {
      value: Math.round((hpi.adjustment.value * 0.4 + bf.conscientiousness.value * 0.4 + (100 - bf.neuroticism.value) * 0.2)),
      label: "持続力",
      desc: `Adjustment(${hpi.adjustment.value}) × Conscientiousness(${bf.conscientiousness.value})`,
      sources: ["HPI:Adjustment", "BF:Conscientiousness", "BF:Neuroticism(inv)"],
    },
    CHR: {
      value: Math.round((bf.extraversion.value * 0.4 + bf.agreeableness.value * 0.3 + hpi.sociability.value * 0.3)),
      label: "対人力",
      desc: `Extraversion(${bf.extraversion.value}) × Agreeableness(${bf.agreeableness.value})`,
      sources: ["BF:Extraversion", "BF:Agreeableness", "HPI:Sociability"],
    },
  };

  // Auto-generate Skills from top traits
  const allTraitScores = [
    { name: "探究者", score: hpi.inquisitive.value, rarity: "UR", desc: "未知の構造を発見し体系化する", mechanism: `Inquisitive(${hpi.inquisitive.value}) + Learning(${hpi.learning_approach.value})の連動`, buff: "知的刺激のある環境で覚醒", debuff: "反復作業で急速に消耗" },
    { name: "構造化思考", score: bf.openness.value, rarity: "SR", desc: "複雑な情報を枠組みに変換する", mechanism: `Openness(${bf.openness.value}) + Conscientiousness(${bf.conscientiousness.value})の相乗`, buff: "抽象概念を扱う場面で最大発揮", debuff: "具体的手順の説明で停滞" },
    { name: "対人共鳴", score: Math.round((bf.agreeableness.value + hpi.interpersonal_sensitivity.value) / 2), rarity: "SR", desc: "他者の構造的状況を理解する", mechanism: `Agreeableness(${bf.agreeableness.value}) + InterpersonalSensitivity(${hpi.interpersonal_sensitivity.value})`, buff: "1対1の信頼関係で深い理解を示す", debuff: "大集団で情報過多に" },
    { name: "推進力", score: hpi.ambition.value, rarity: "SR", desc: "目標に向かって長期的に前進する", mechanism: `Ambition(${hpi.ambition.value}) + Adjustment(${hpi.adjustment.value})の基盤`, buff: "価値観と一致する目標で覚醒", debuff: "意味を感じない業務で急減" },
  ];
  allTraitScores.sort((a, b) => b.score - a.score);
  const topSkill = allTraitScores[0];
  const secondSkill = allTraitScores[1];

  const skills = {
    ur: { name: topSkill.name, rarity: "UR", description: topSkill.desc, mechanism: topSkill.mechanism, context_buff: topSkill.buff, context_debuff: topSkill.debuff },
    sr: { name: secondSkill.name, rarity: "SR", description: secondSkill.desc, mechanism: secondSkill.mechanism, context_buff: secondSkill.buff, context_debuff: secondSkill.debuff },
  };

  // Traits from Big Five (dual-nature view)
  const traits = [
    { name: "開放性", icon_buff: "\u2728", icon_debuff: "\u{1F300}", buff: bf.openness.notes || "新しい概念への探究心が強い", debuff: "拡散的になり収束が遅れることがある", grainLevel: "macro", value: bf.openness.value },
    { name: "誠実性", icon_buff: "\u{1F4CB}", icon_debuff: "\u26A1", buff: bf.conscientiousness.notes || "計画・構造化能力が高い", debuff: "柔軟性が犠牲になることがある", grainLevel: "meso", value: bf.conscientiousness.value },
    { name: "外向性", icon_buff: "\u{1F5E3}\uFE0F", icon_debuff: "\u{1F50B}", buff: bf.extraversion.notes || "対話を通じてエネルギーを得る", debuff: "静寂を必要とする時間も重要", grainLevel: "meso", value: bf.extraversion.value },
    { name: "協調性", icon_buff: "\u{1F91D}", icon_debuff: "\u2694\uFE0F", buff: bf.agreeableness.notes || "他者への配慮と共感性", debuff: "論理的整合性と調和のバランス", grainLevel: "micro", value: bf.agreeableness.value },
    { name: "情動性", icon_buff: "\u{1F525}", icon_debuff: "\u{1F4A7}", buff: bf.neuroticism.notes || "感受性の高さが洞察を生む", debuff: "ストレス環境での消耗が大きい", grainLevel: "micro", value: bf.neuroticism.value },
  ];

  // Employment → Environment (ICF-based)
  const emp = norm.employment;
  const environment = {
    facilitators: emp.strengths.map((s) => typeof s === "string" ? s : s.title || s.description || JSON.stringify(s)).slice(0, 6),
    barriers: (emp.challenges || []).map((c) => typeof c === "string" ? c : c.title || c.description || JSON.stringify(c)).slice(0, 6),
  };

  // Calculate level from average stats
  const avgStat = Math.round(Object.values(stats).reduce((s, v) => s + v.value, 0) / 6);
  const level = Math.round(avgStat * 0.5 + 10);

  return {
    name: personName,
    title: norm.mbti.type || "Unknown",
    level,
    source,
    generatedFrom: `${norm.meta.assessor || norm.meta.generator || source} Assessment`,
    lastUpdated: norm.meta.date || "N/A",
    stats,
    skills,
    traits,
    environment,
    mbti: norm.mbti,
    bigFive: norm.bigFive,
    hpi: norm.hpi,
  };
};

// ============================================================
// Raw Assessment Data (embedded from 4 LLM outputs)
// ============================================================

const RAW_GEMINI_MENTEE = {
  meta: { date: "2026-02-10", generator: "Gemini (AI Partner)", disclaimer: "非公式な推定および観察記録" },
  japanese_proficiency: { estimated_level: "ネイティブ / N1以上 (極めて高度)" },
  big_five: {
    openness: { level: "高", notes: "知的好奇心が非常に強く、既存の枠組みにとらわれない発想" },
    conscientiousness: { level: "中程度", notes: "完璧主義的な傾向があり、予定通りに進まない場合にストレス" },
    extraversion: { level: "やや低", notes: "基本的には内省的で思考の世界に重きを置く" },
    agreeableness: { level: "やや低", notes: "論理的整合性を重視、批判的思考力が高い" },
    neuroticism: { level: "高", notes: "不安を感じやすく、些細な刺激に敏感に反応する傾向" },
  },
  mbti: { estimated_type: "INTP (論理学者型)", confidence_level: "中", notes: "内向的思考（Ti）が主機能。発想が拡散的（Ne）" },
  hpi_proxy: {
    adjustment: { level: "低", notes: "ストレス耐性が低下、環境調整が不可欠" },
    ambition: { level: "中程度", notes: "知的能力を活かした役割としての成功を望む" },
    sociability: { level: "やや低", notes: "知的な議論が必要な場面では高いコミュ力を発揮" },
    interpersonal_sensitivity: { level: "やや低", notes: "認知的共感が優位" },
    prudence: { level: "中程度", notes: "納得感がないと苦痛を感じる" },
    inquisitive: { level: "高", notes: "物事の「なぜ」を追求する探究心が極めて高い" },
    learning_approach: { level: "高", notes: "マニュアルより体系的な理解を好む" },
  },
  employment_considerations_ja: {
    strengths: ["高い言語化能力と論理的思考力", "複雑な情報の分析と構造化", "興味を持った対象への深い集中力と探究心", "プレゼンテーション能力"],
    challenges: ["マルチタスクや同時並行処理", "曖昧な指示や「空気を読む」ことが求められる環境", "聴覚過敏や環境刺激による疲労", "急な予定変更やイレギュラー対応へのストレス"],
    accommodations: ["業務指示は文書で可視化", "シングルタスクに集中できる静かな環境", "判断基準の明確化", "柔軟な休憩や勤務時間"],
  },
};

const RAW_CLAUDE_PUU = {
  meta: { date: "2026-02-05", assessor: "Claude Opus 4.5", disclaimer: "非公式の観察的評価" },
  japanese_proficiency: { estimated_level: "母語話者（ネイティブ）", academic_writing: "博士課程レベル" },
  big_five: {
    openness: { rating: "高", notes: "知的好奇心が極めて高く、異領域を自在に横断。トランスナラティブ概念の発見に見られる概念創造能力" },
    conscientiousness: { rating: "やや高", notes: "YAML形式での記録管理、GitHub活用。衝動的な知的探究が計画を上書きすることがある" },
    extraversion: { rating: "中程度", notes: "対話においてはエネルギッシュ。社交的場面と内省的作業の両方からエネルギーを得る" },
    agreeableness: { rating: "やや高", notes: "10年以上の当事者支援の共感性。知的議論では妥協せず自身の見解を明確に主張" },
    neuroticism: { rating: "中程度", notes: "健康課題を「パンカー」としてアイデンティティに統合。過剰興奮性（OE）特性あり" },
  },
  mbti: { estimated_type: "ENTP", confidence: "中", notes: "対話を通じてアイデアを発展。INTPとの境界線上" },
  hpi_proxy: {
    adjustment: { rating: "中程度", notes: "複数の健康課題を抱えながらも活動維持。深夜作業の自己管理課題あり" },
    ambition: { rating: "高", notes: "52歳で博士課程挑戦、国際的研究者との協働構想" },
    sociability: { rating: "中程度", notes: "深い一対一の対話を好む。LLMとの対話に多くの時間" },
    interpersonal_sensitivity: { rating: "高", notes: "当事者の内面への高い感受性。過剰興奮性の情動的側面" },
    prudence: { rating: "やや低", notes: "知的衝動性が高く、計画より発見を優先" },
    inquisitive: { rating: "高", notes: "異領域を自在に横断する知的好奇心。火文化として記録・継承にコミットメント" },
    learning_approach: { rating: "高", notes: "粒度認知による断片の統合学習。複数LLMを使い分けた先進的ツール活用" },
  },
  employment_considerations_ja: {
    strengths: [
      { title: "抽象概念の構造化能力", description: "SoE、Input Constitutional AI等の独自概念設計" },
      { title: "領域横断的な知識統合", description: "π型またはcomb型の知識構造" },
      { title: "当事者視点の維持", description: "10年以上の就労支援現場経験" },
      { title: "先進的技術ツールの活用", description: "複数LLMの目的別使い分け" },
      { title: "レジリエンス", description: "逆境を成長機会に変換する力" },
    ],
    challenges: [
      { title: "従来型の組織構造との適合", description: "高い自律性と知的自由を求める" },
      { title: "知的衝動性の管理", description: "興味の赴くままに深掘り。ADHD特性" },
      { title: "健康管理との両立", description: "脳出血の既往歴、突発性難聴、ADHD" },
    ],
    recommended_work_environments: ["研究機関", "スタートアップ", "福祉イノベーション", "コンサルティング", "独立研究者"],
  },
  additional_observations: {
    fire_culture_practitioner: { description: "記録されなかった問いは燃え尽きたものと見なされる", implication: "知識管理の高い能力" },
    transnarrative_embodiment: { description: "「不適合」を物語として紡ぎ研究リソースとして活用", implication: "困難を資源に変換" },
    cross_llm_orchestration: { description: "Gemini、Claude、ChatGPTを使い分けた協働", implication: "AI時代の先進的実践者" },
    poetic_compression: { description: "哲学的議論を俳句に圧縮する能力", implication: "抽象と具象を往還する表現" },
  },
};

const RAW_GPT_PUU = {
  meta: { date: "2026-03-13", generator: "ChatGPT (AI対話分析)", disclaimer: "非公式な観察メモ" },
  japanese_proficiency: { estimated_level: "ネイティブ / 研究・政策議論レベル（N1以上）" },
  big_five: {
    openness: { level: "高", notes: "理論構築・概念発明・異分野統合への関心が極めて強い" },
    conscientiousness: { level: "やや高", notes: "長期プロジェクトを継続する能力。ADHD特性による集中の波あり" },
    extraversion: { level: "中程度", notes: "知的議論や社会制度の話題では非常に活発" },
    agreeableness: { level: "やや低", notes: "調和よりも真理性・論理整合性を優先" },
    neuroticism: { level: "やや高", notes: "社会問題・倫理問題に対する感受性が強い" },
  },
  mbti: { estimated_type: "ENTP", confidence_level: "高", notes: "概念発明型思考。システム構造の再設計志向" },
  hpi_proxy: {
    adjustment: { level: "中程度", notes: "ストレス耐性は状況依存。価値観一致時に高パフォーマンス" },
    ambition: { level: "高", notes: "社会構造を変えるプロジェクト志向" },
    sociability: { level: "中程度", notes: "目的志向のコミュニケーションを好む" },
    interpersonal_sensitivity: { level: "中程度", notes: "感情共感よりも構造理解型共感" },
    prudence: { level: "やや低", notes: "既存ルールよりも合理性・構造改善を優先" },
    inquisitive: { level: "非常に高", notes: "理論的好奇心が極めて強い" },
    learning_approach: { level: "高", notes: "体系理解志向。構造・原理の理解を重視" },
  },
  employment_considerations_ja: {
    strengths: ["制度設計・社会システム分析能力", "概念構築能力（フレームワーク開発）", "複雑な問題の構造化", "学際的統合思考（福祉・法・AI・社会理論）", "長期ビジョンを持つプロジェクト推進"],
    challenges: ["単純反復作業へのモチベーション低下", "官僚的手続き中心の環境", "短期成果のみを求められる組織文化", "知的自由度の低い業務"],
    optimal_roles: ["研究者", "政策設計", "社会制度イノベーション", "シンクタンク", "AI倫理・福祉制度設計"],
  },
};

const RAW_GPT_MENTEE = {
  meta: { version: "1.0", generated_at: "2026-02-16", description: "AIとの対話に基づく非公式な自己分析データ" },
  japanese_proficiency: { estimated_level: "N1相当 / ネイティブレベル" },
  big_five: {
    openness: { level: "高", notes: "新しい概念や複雑な構造、抽象的な議論に対して非常にオープンで好奇心が強い" },
    conscientiousness: { level: "やや高", notes: "情報の整理や構造化を好み、目的意識を持って対話を進める" },
    extraversion: { level: "中程度", notes: "対話自体はスムーズだが、内省的で深い思考を好む" },
    agreeableness: { level: "やや高", notes: "協力的で丁寧なコミュニケーション、相手への配慮も感じられる" },
    neuroticism: { level: "低", notes: "情緒が安定しており、論理的かつ冷静に物事を捉える" },
  },
  mbti: { estimated_type: "INTJ (建築家) または INTP (論理学者)", confidence_level: "中", notes: "論理的かつ直感的。構造化を好むJ的だが、知的好奇心の広さはP的" },
  hpi_proxy: {
    adjustment: { level: "高", notes: "プレッシャー下でも冷静さを保ち、論理的に対処" },
    ambition: { level: "やや高", notes: "自己改善や効率的な情報収集に対して意欲的" },
    sociability: { level: "中程度", notes: "量より質、目的を持った交流を重視" },
    interpersonal_sensitivity: { level: "中程度", notes: "意図を汲み取る力は高いが客観性を保つ" },
    prudence: { level: "やや高", notes: "細部への注意、データの正確性、秩序を重んじる" },
    inquisitive: { level: "高", notes: "知的好奇心が旺盛。複雑な問題の解決を楽しむ" },
    learning_approach: { level: "高", notes: "新しい情報への適応が早い" },
  },
  employment_considerations_ja: {
    strengths: ["複雑な情報の構造化および要約能力", "高い論理的思考力と客観的な視点", "言語化能力の高さ"],
    accommodations: ["明確な目的や構造がある環境で最大パフォーマンス", "知的な刺激や改善の余地がある業務が適している"],
  },
};

// ============================================================
// Build all profiles
// ============================================================
const ALL_PROFILES = [
  { id: "puu_claude", label: "Puu (Claude Opus 4.5)", person: "Puu", raw: RAW_CLAUDE_PUU, source: "Claude Opus 4.5" },
  { id: "puu_gpt", label: "Puu (ChatGPT)", person: "Puu", raw: RAW_GPT_PUU, source: "ChatGPT" },
  { id: "mentee_gemini", label: "Mentee (Gemini)", person: "Mentee N-shi", raw: RAW_GEMINI_MENTEE, source: "Gemini" },
  { id: "mentee_gpt", label: "Mentee (GPT)", person: "Mentee N-shi", raw: RAW_GPT_MENTEE, source: "GPT" },
];

const PROFILES = ALL_PROFILES.map((p) => ({
  ...p,
  normalized: normalize(p.raw),
  profile: toSoEProfile(normalize(p.raw), p.person, p.source),
}));

// ============================================================
// Color System
// ============================================================
const C = {
  bg: "#0c0f1a", card: "#131829", cardLight: "#1a2035",
  accent: "#f0c040", accentDim: "#a08020",
  blue: "#4a90d9", green: "#50c878", red: "#e05555",
  purple: "#9b6dff", cyan: "#40d0d0", pink: "#e080a0",
  text: "#e8e8f0", textDim: "#8890a8", textMuted: "#555a70",
  border: "#1e2440", srColor: "#d4af37", urColor: "#ff6ec7",
  orange: "#ff8c42",
};

// ============================================================
// Components
// ============================================================

const StatHexagon = ({ stats }) => {
  const entries = Object.entries(stats);
  const cx = 120, cy = 120, r = 85;
  const getPoint = (i, val) => {
    const angle = (Math.PI * 2 * i) / entries.length - Math.PI / 2;
    const dist = (val / 100) * r;
    return [cx + dist * Math.cos(angle), cy + dist * Math.sin(angle)];
  };
  const bgPts = entries.map((_, i) => getPoint(i, 100).join(",")).join(" ");
  const midPts = entries.map((_, i) => getPoint(i, 50).join(",")).join(" ");
  const dataPts = entries.map(([, s], i) => getPoint(i, s.value).join(",")).join(" ");

  return (
    <svg viewBox="0 0 240 240" style={{ width: "100%", maxWidth: "280px" }}>
      <polygon points={bgPts} fill={C.border} stroke={C.textMuted} strokeWidth="0.5" />
      <polygon points={midPts} fill="none" stroke={C.textMuted} strokeWidth="0.3" strokeDasharray="3,3" />
      {entries.map((_, i) => {
        const [x, y] = getPoint(i, 100);
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke={C.textMuted} strokeWidth="0.3" />;
      })}
      <polygon points={dataPts} fill={`${C.accent}25`} stroke={C.accent} strokeWidth="2" />
      {entries.map(([key, s], i) => {
        const [x, y] = getPoint(i, 115);
        return (
          <text key={key} x={x} y={y} textAnchor="middle" dominantBaseline="middle"
            fill={C.text} fontSize="10" fontWeight="700">
            {s.label}
          </text>
        );
      })}
      {entries.map(([, s], i) => {
        const [x, y] = getPoint(i, s.value);
        return <circle key={i} cx={x} cy={y} r="3" fill={C.accent} />;
      })}
    </svg>
  );
};

// Overlay radar for comparison
const CompareRadar = ({ profiles }) => {
  const colors = [C.accent, C.cyan, C.green, C.pink];
  const statKeys = ["STR", "INT", "MEN", "DEX", "VIT", "CHR"];
  const labels = { STR: "実行力", INT: "分析力", MEN: "精神耐久", DEX: "器用さ", VIT: "持続力", CHR: "対人力" };
  const cx = 140, cy = 140, r = 100;

  const getPoint = (i, val) => {
    const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
    const dist = (val / 100) * r;
    return [cx + dist * Math.cos(angle), cy + dist * Math.sin(angle)];
  };

  const bgPts = statKeys.map((_, i) => getPoint(i, 100).join(",")).join(" ");
  const midPts = statKeys.map((_, i) => getPoint(i, 50).join(",")).join(" ");

  return (
    <div>
      <svg viewBox="0 0 280 280" style={{ width: "100%", maxWidth: "360px", margin: "0 auto", display: "block" }}>
        <polygon points={bgPts} fill={C.border} stroke={C.textMuted} strokeWidth="0.5" />
        <polygon points={midPts} fill="none" stroke={C.textMuted} strokeWidth="0.3" strokeDasharray="3,3" />
        {statKeys.map((_, i) => {
          const [x, y] = getPoint(i, 100);
          return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke={C.textMuted} strokeWidth="0.3" />;
        })}
        {profiles.map((prof, pi) => {
          const pts = statKeys.map((k, i) => getPoint(i, prof.profile.stats[k].value).join(",")).join(" ");
          return (
            <polygon key={pi} points={pts} fill={`${colors[pi]}15`}
              stroke={colors[pi]} strokeWidth="2" strokeDasharray={pi > 0 ? "4,3" : "none"} />
          );
        })}
        {statKeys.map((k, i) => {
          const [x, y] = getPoint(i, 118);
          return (
            <text key={k} x={x} y={y} textAnchor="middle" dominantBaseline="middle"
              fill={C.text} fontSize="11" fontWeight="700">
              {labels[k]}
            </text>
          );
        })}
      </svg>
      <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "12px", flexWrap: "wrap" }}>
        {profiles.map((prof, pi) => (
          <div key={pi} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: C.textDim }}>
            <div style={{ width: "14px", height: "3px", background: colors[pi], borderRadius: "2px" }} />
            {prof.label}
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillCard = ({ skill }) => {
  const isUR = skill.rarity === "UR";
  const color = isUR ? C.urColor : C.srColor;
  return (
    <div style={{ background: `linear-gradient(135deg, ${color}10, ${C.card})`, border: `1px solid ${color}40`, borderRadius: "14px", padding: "18px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, right: 0, background: color, color: "#000", padding: "3px 14px", borderRadius: "0 14px 0 10px", fontSize: "11px", fontWeight: "900", letterSpacing: "1px" }}>{skill.rarity}</div>
      <div style={{ fontSize: "18px", fontWeight: "800", color, marginBottom: "6px" }}>{skill.name}</div>
      <div style={{ fontSize: "13px", color: C.text, marginBottom: "10px", lineHeight: "1.5" }}>{skill.description}</div>
      <div style={{ fontSize: "11px", color: C.textDim, marginBottom: "8px", lineHeight: "1.6" }}>{skill.mechanism}</div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <div style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "6px", background: `${C.green}15`, color: C.green, border: `1px solid ${C.green}30` }}>{skill.context_buff}</div>
        <div style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "6px", background: `${C.red}15`, color: C.red, border: `1px solid ${C.red}30` }}>{skill.context_debuff}</div>
      </div>
    </div>
  );
};

const TraitRow = ({ trait, expanded, onToggle }) => {
  const barColor = trait.value >= 70 ? C.green : trait.value >= 50 ? C.accent : trait.value >= 35 ? C.orange : C.red;
  return (
    <div>
      <div onClick={onToggle} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px", borderRadius: "10px", cursor: "pointer", background: expanded ? C.cardLight : "transparent", transition: "background 0.2s" }}>
        <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: `${C.purple}15`, border: `1px solid ${C.purple}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>
          {trait.icon_buff}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontWeight: "700", color: C.text, fontSize: "14px" }}>{trait.name}</span>
            <span style={{ fontSize: "14px", fontWeight: "800", color: barColor }}>{trait.value}</span>
          </div>
          <div style={{ height: "3px", background: C.border, borderRadius: "2px", marginTop: "4px", overflow: "hidden" }}>
            <div style={{ width: `${trait.value}%`, height: "100%", background: barColor, borderRadius: "2px", transition: "width 0.5s" }} />
          </div>
          <div style={{ fontSize: "10px", color: C.textMuted, marginTop: "2px" }}>grain: {trait.grainLevel}</div>
        </div>
      </div>
      {expanded && (
        <div style={{ padding: "0 14px 12px 62px", display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ fontSize: "12px", padding: "8px 12px", borderRadius: "8px", background: `${C.green}08`, borderLeft: `3px solid ${C.green}`, color: C.textDim, lineHeight: "1.5" }}>
            <span style={{ color: C.green, fontWeight: "700", fontSize: "10px" }}>BUFF</span><br />{trait.buff}
          </div>
          <div style={{ fontSize: "12px", padding: "8px 12px", borderRadius: "8px", background: `${C.red}08`, borderLeft: `3px solid ${C.red}`, color: C.textDim, lineHeight: "1.5" }}>
            <span style={{ color: C.red, fontWeight: "700", fontSize: "10px" }}>DEBUFF</span><br />{trait.debuff}
          </div>
        </div>
      )}
    </div>
  );
};

const EnvironmentPanel = ({ env }) => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
    <div style={{ background: `${C.green}06`, border: `1px solid ${C.green}20`, borderRadius: "12px", padding: "16px" }}>
      <div style={{ fontSize: "12px", fontWeight: "700", color: C.green, marginBottom: "10px" }}>Facilitators</div>
      {env.facilitators.map((f, i) => (
        <div key={i} style={{ fontSize: "12px", color: C.textDim, padding: "5px 0", borderBottom: i < env.facilitators.length - 1 ? `1px solid ${C.border}` : "none" }}>{f}</div>
      ))}
    </div>
    <div style={{ background: `${C.red}06`, border: `1px solid ${C.red}20`, borderRadius: "12px", padding: "16px" }}>
      <div style={{ fontSize: "12px", fontWeight: "700", color: C.red, marginBottom: "10px" }}>Barriers</div>
      {env.barriers.map((b, i) => (
        <div key={i} style={{ fontSize: "12px", color: C.textDim, padding: "5px 0", borderBottom: i < env.barriers.length - 1 ? `1px solid ${C.border}` : "none" }}>{b}</div>
      ))}
    </div>
  </div>
);

// Cross-LLM Comparison Table
const CompareTable = ({ profiles }) => {
  const bfKeys = ["openness", "conscientiousness", "extraversion", "agreeableness", "neuroticism"];
  const bfLabels = { openness: "開放性", conscientiousness: "誠実性", extraversion: "外向性", agreeableness: "協調性", neuroticism: "情動性" };
  const hpiKeys = ["adjustment", "ambition", "sociability", "interpersonal_sensitivity", "prudence", "inquisitive", "learning_approach"];
  const hpiLabels = { adjustment: "適応", ambition: "野心", sociability: "社交", interpersonal_sensitivity: "感受性", prudence: "慎重さ", inquisitive: "探究", learning_approach: "学習" };

  const cellStyle = (val) => ({
    padding: "6px 8px", fontSize: "12px", textAlign: "center", fontWeight: "700",
    color: val >= 70 ? C.green : val >= 50 ? C.accent : val >= 35 ? C.orange : C.red,
  });

  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
        <thead>
          <tr style={{ borderBottom: `1px solid ${C.border}` }}>
            <th style={{ padding: "8px", textAlign: "left", color: C.textDim, fontWeight: "600" }}>Trait</th>
            {profiles.map((p) => (
              <th key={p.id} style={{ padding: "8px", textAlign: "center", color: C.textDim, fontWeight: "600", fontSize: "10px" }}>{p.source}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr><td colSpan={profiles.length + 1} style={{ padding: "8px 8px 4px", color: C.purple, fontWeight: "700", fontSize: "11px" }}>Big Five</td></tr>
          {bfKeys.map((k) => (
            <tr key={k} style={{ borderBottom: `1px solid ${C.border}30` }}>
              <td style={{ padding: "6px 8px", color: C.text, fontSize: "12px" }}>{bfLabels[k]}</td>
              {profiles.map((p) => (
                <td key={p.id} style={cellStyle(p.normalized.bigFive[k].value)}>{p.normalized.bigFive[k].value}</td>
              ))}
            </tr>
          ))}
          <tr><td colSpan={profiles.length + 1} style={{ padding: "12px 8px 4px", color: C.cyan, fontWeight: "700", fontSize: "11px" }}>HPI Proxy</td></tr>
          {hpiKeys.map((k) => (
            <tr key={k} style={{ borderBottom: `1px solid ${C.border}30` }}>
              <td style={{ padding: "6px 8px", color: C.text, fontSize: "12px" }}>{hpiLabels[k]}</td>
              {profiles.map((p) => (
                <td key={p.id} style={cellStyle(p.normalized.hpi[k].value)}>{p.normalized.hpi[k].value}</td>
              ))}
            </tr>
          ))}
          <tr><td colSpan={profiles.length + 1} style={{ padding: "12px 8px 4px", color: C.pink, fontWeight: "700", fontSize: "11px" }}>MBTI</td></tr>
          <tr style={{ borderBottom: `1px solid ${C.border}30` }}>
            <td style={{ padding: "6px 8px", color: C.text, fontSize: "12px" }}>Type</td>
            {profiles.map((p) => (
              <td key={p.id} style={{ padding: "6px 8px", textAlign: "center", color: C.text, fontWeight: "700", fontSize: "12px" }}>{p.normalized.mbti.type}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Mapping Transparency Panel
const MappingPanel = ({ profile }) => {
  const statKeys = Object.entries(profile.stats);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <div style={{ fontSize: "12px", color: C.textDim, padding: "8px 14px", lineHeight: "1.6" }}>
        <span style={{ color: C.accent, fontWeight: "700" }}>Mapping Transparency:</span>{" "}
        Big Five と HPI の値を加重平均でRPGステータスに変換しています。計算式の完全な開示により、本人主権型の検証が可能です。
      </div>
      {statKeys.map(([key, s]) => (
        <div key={key} style={{ padding: "10px 14px", background: C.card, borderRadius: "10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
            <span style={{ fontWeight: "700", color: C.accent, fontSize: "13px" }}>{key} ({s.label})</span>
            <span style={{ fontWeight: "800", color: C.accent, fontSize: "16px" }}>{s.value}</span>
          </div>
          <div style={{ fontSize: "11px", color: C.textDim, lineHeight: "1.5" }}>{s.desc}</div>
          <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", marginTop: "6px" }}>
            {s.sources.map((src, i) => (
              <span key={i} style={{ fontSize: "9px", padding: "2px 6px", borderRadius: "4px", background: `${C.blue}15`, color: C.blue, border: `1px solid ${C.blue}30` }}>{src}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// ============================================================
// Main Application
// ============================================================
export default function SoEProfileConverter() {
  const [selectedId, setSelectedId] = useState("puu_claude");
  const [activeTab, setActiveTab] = useState("status");
  const [expandedTrait, setExpandedTrait] = useState(null);
  const [viewMode, setViewMode] = useState("single"); // "single" | "compare"

  const currentEntry = PROFILES.find((p) => p.id === selectedId);
  const p = currentEntry.profile;

  // Group profiles by person for comparison
  const puuProfiles = PROFILES.filter((p) => p.person === "Puu");
  const menteeProfiles = PROFILES.filter((p) => p.person === "Mentee N-shi");

  const tabs = [
    { id: "status", label: "Status" },
    { id: "skills", label: "Skills" },
    { id: "traits", label: "Traits" },
    { id: "environment", label: "Environment" },
    { id: "mapping", label: "Mapping" },
  ];

  return (
    <div style={{
      background: C.bg, color: C.text, minHeight: "100vh",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: "20px", maxWidth: "680px", margin: "0 auto",
    }}>
      {/* Title Bar */}
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <div style={{ fontSize: "10px", color: C.accent, fontWeight: "700", letterSpacing: "3px" }}>SoE PROFILE CONVERTER</div>
        <div style={{ fontSize: "11px", color: C.textMuted, marginTop: "4px" }}>Multi-LLM Assessment YAML to RPG Visualization</div>
      </div>

      {/* View Mode Toggle */}
      <div style={{ display: "flex", gap: "6px", marginBottom: "14px", justifyContent: "center" }}>
        {[{ id: "single", label: "Single Profile" }, { id: "compare", label: "Cross-LLM Compare" }].map((m) => (
          <button key={m.id} onClick={() => setViewMode(m.id)} style={{
            padding: "6px 16px", borderRadius: "8px", border: `1px solid ${viewMode === m.id ? C.accent : C.border}`,
            background: viewMode === m.id ? `${C.accent}15` : "transparent",
            color: viewMode === m.id ? C.accent : C.textDim,
            cursor: "pointer", fontSize: "12px", fontWeight: "600",
          }}>{m.label}</button>
        ))}
      </div>

      {/* =================== Compare View =================== */}
      {viewMode === "compare" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Puu comparison */}
          <div style={{ background: C.card, borderRadius: "16px", padding: "20px" }}>
            <div style={{ fontSize: "14px", fontWeight: "700", color: C.accent, marginBottom: "14px" }}>
              Puu Cross-LLM Comparison
            </div>
            <CompareRadar profiles={puuProfiles} />
          </div>

          {/* Mentee comparison */}
          <div style={{ background: C.card, borderRadius: "16px", padding: "20px" }}>
            <div style={{ fontSize: "14px", fontWeight: "700", color: C.cyan, marginBottom: "14px" }}>
              Mentee Cross-LLM Comparison
            </div>
            <CompareRadar profiles={menteeProfiles} />
          </div>

          {/* Full table */}
          <div style={{ background: C.card, borderRadius: "16px", padding: "16px" }}>
            <div style={{ fontSize: "14px", fontWeight: "700", color: C.text, marginBottom: "14px" }}>
              All Assessments Detail
            </div>
            <CompareTable profiles={PROFILES} />
          </div>

          {/* SoE Gauge Note */}
          <div style={{ padding: "14px", borderRadius: "12px", background: `${C.purple}08`, border: `1px solid ${C.purple}20`, fontSize: "11px", color: C.textDim, lineHeight: "1.6" }}>
            <span style={{ color: C.purple, fontWeight: "700" }}>SoE Gauge Note:</span>{" "}
            同一人物に対するLLM間の評価差異は、LLMが「測定装置（gauge）」として持つ固有のバイアスを反映しています。
            この差異自体がメタデータであり、どのLLMが「正しい」かではなく、複数の観測結果の重ね合わせとして解釈すべきものです。
            これはInput Constitutional AIの原理的立場と一致します。
          </div>
        </div>
      )}

      {/* =================== Single Profile View =================== */}
      {viewMode === "single" && (
        <>
          {/* Profile Selector */}
          <div style={{ display: "flex", gap: "4px", marginBottom: "14px", flexWrap: "wrap", justifyContent: "center" }}>
            {PROFILES.map((prof) => (
              <button key={prof.id} onClick={() => { setSelectedId(prof.id); setActiveTab("status"); setExpandedTrait(null); }}
                style={{
                  padding: "6px 12px", borderRadius: "8px",
                  border: `1px solid ${selectedId === prof.id ? C.accent : C.border}`,
                  background: selectedId === prof.id ? `${C.accent}15` : C.card,
                  color: selectedId === prof.id ? C.accent : C.textDim,
                  cursor: "pointer", fontSize: "11px", fontWeight: "600",
                }}>
                {prof.label}
              </button>
            ))}
          </div>

          {/* Header */}
          <div style={{ background: `linear-gradient(135deg, ${C.card}, ${C.cardLight})`, borderRadius: "20px", padding: "24px", border: `1px solid ${C.border}`, marginBottom: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
              <div>
                <div style={{ fontSize: "10px", color: C.accent, fontWeight: "700", letterSpacing: "2px", marginBottom: "4px" }}>SoE PROFILE</div>
                <div style={{ fontSize: "26px", fontWeight: "900", color: C.text, letterSpacing: "-0.5px" }}>{p.name}</div>
                <div style={{ fontSize: "13px", color: C.accent, fontWeight: "600", marginTop: "2px" }}>
                  {p.title} / Lv.{p.level}
                </div>
              </div>
              <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: `linear-gradient(135deg, ${C.purple}40, ${C.blue}40)`, border: `3px solid ${C.accent}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px" }}>
                {p.name === "Puu" ? "\u{1F9D9}" : "\u{1F9D1}\u200D\u{1F4BB}"}
              </div>
            </div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <div style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "20px", background: `${C.cyan}15`, color: C.cyan, border: `1px solid ${C.cyan}30` }}>
                MBTI: {p.mbti.type}
              </div>
              <div style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "20px", background: `${C.purple}15`, color: C.purple, border: `1px solid ${C.purple}30` }}>
                Source: {p.source}
              </div>
            </div>
            <div style={{ marginTop: "14px", fontSize: "10px", color: C.textMuted, display: "flex", justifyContent: "space-between" }}>
              <span>Generated from: {p.generatedFrom}</span>
              <span>Date: {p.lastUpdated}</span>
            </div>
          </div>

          {/* Data Ownership */}
          <div style={{ padding: "10px 16px", borderRadius: "10px", marginBottom: "16px", background: `${C.accent}08`, border: `1px solid ${C.accent}20`, fontSize: "11px", color: C.accent, textAlign: "center", fontWeight: "600" }}>
            \u{1F512} このプロファイルデータの所有者はあなた自身です
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: "3px", marginBottom: "20px", background: C.card, borderRadius: "12px", padding: "3px", overflowX: "auto" }}>
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
                padding: "8px 14px", borderRadius: "9px", border: "none", cursor: "pointer", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap",
                background: activeTab === tab.id ? C.accent : "transparent",
                color: activeTab === tab.id ? "#000" : C.textDim, transition: "all 0.2s",
              }}>{tab.label}</button>
            ))}
          </div>

          {/* Status Tab */}
          {activeTab === "status" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ background: C.card, borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ fontSize: "14px", fontWeight: "700", color: C.text, marginBottom: "12px" }}>Core Stats</div>
                <StatHexagon stats={p.stats} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {Object.entries(p.stats).map(([key, s]) => (
                  <div key={key} style={{ background: C.card, borderRadius: "10px", padding: "12px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "700", color: C.text }}>{key}</span>
                      <span style={{ fontSize: "16px", fontWeight: "800", color: C.accent }}>{s.value}</span>
                    </div>
                    <div style={{ fontSize: "10px", color: C.textDim, lineHeight: "1.4" }}>{s.desc}</div>
                    <div style={{ height: "3px", background: C.border, borderRadius: "2px", marginTop: "6px", overflow: "hidden" }}>
                      <div style={{ width: `${s.value}%`, height: "100%", background: s.value >= 60 ? C.green : s.value >= 40 ? C.accent : C.red, borderRadius: "2px" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === "skills" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <SkillCard skill={p.skills.ur} />
              <SkillCard skill={p.skills.sr} />
              <div style={{ padding: "14px", borderRadius: "12px", background: `${C.purple}08`, border: `1px solid ${C.purple}20`, fontSize: "11px", color: C.textDim, lineHeight: "1.6" }}>
                <span style={{ color: C.purple, fontWeight: "700" }}>SoE Note:</span>{" "}
                スキルはBig Five + HPIの上位スコアから自動生成されています。
                固定的な能力ではなく、環境との相互作用で発揮度が変わります。
              </div>
            </div>
          )}

          {/* Traits Tab */}
          {activeTab === "traits" && (
            <div style={{ background: C.card, borderRadius: "16px", padding: "12px", display: "flex", flexDirection: "column", gap: "2px" }}>
              <div style={{ fontSize: "11px", color: C.textDim, padding: "8px 14px", marginBottom: "4px", lineHeight: "1.6" }}>
                Big Five特性の数値化。各特性はバフとデバフの両面を持ちます。
              </div>
              {p.traits.map((t, i) => (
                <TraitRow key={i} trait={t} expanded={expandedTrait === i}
                  onToggle={() => setExpandedTrait(expandedTrait === i ? null : i)} />
              ))}
            </div>
          )}

          {/* Environment Tab */}
          {activeTab === "environment" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <EnvironmentPanel env={p.environment} />
              <div style={{ padding: "14px", borderRadius: "12px", background: `${C.blue}08`, border: `1px solid ${C.blue}20`, fontSize: "11px", color: C.textDim, lineHeight: "1.6" }}>
                <span style={{ color: C.blue, fontWeight: "700" }}>ICF連携:</span>{" "}
                環境因子はICF（国際生活機能分類）の枠組みに基づいて、LLMのemployment_considerationsから自動分類されています。
                促進因子(strengths)と阻害因子(challenges)の可視化により、ケイパビリティ・アプローチの実践的実装が可能です。
              </div>
            </div>
          )}

          {/* Mapping Tab */}
          {activeTab === "mapping" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <MappingPanel profile={p} />
              <div style={{ padding: "14px", borderRadius: "12px", background: `${C.green}08`, border: `1px solid ${C.green}20`, fontSize: "11px", color: C.textDim, lineHeight: "1.6" }}>
                <span style={{ color: C.green, fontWeight: "700" }}>Input Constitutional AI:</span>{" "}
                変換ロジックの完全公開は、本人主権型アセスメントの核心です。
                「何がどう変換されたか」を当事者が検証できることが、SoEの設計原理です。
                ブラックボックスな評価は、それ自体が構造的搾取の温床となります。
              </div>
            </div>
          )}
        </>
      )}

      {/* Footer */}
      <div style={{ marginTop: "24px", padding: "16px", textAlign: "center", fontSize: "10px", color: C.textMuted, borderTop: `1px solid ${C.border}` }}>
        SoE Profile Converter v0.1 — Service of Empowerment<br />
        Multi-LLM Assessment YAML to RPG Profile Pipeline<br />
        Grain-Based Cognition + ICF + Capability Approach + Input Constitutional AI<br />
        Designed by Puu (Yuji Yamauchi) — Built with Claude Opus 4.6
      </div>
    </div>
  );
}
