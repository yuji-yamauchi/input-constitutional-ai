import { useState } from "react";

// ============================================================
// SoE Profile Prototype — 本人主権型アセスメント可視化
// ============================================================
// Design Philosophy:
//   - Grain-Based Cognition: micro → meso → macro の三層表示
//   - SoE gauge: 特性を「文脈依存」として表示（バフ/デバフ両面）
//   - RPGメタファー: ゲーム言語による自己理解の促進
//   - 本人主権: このデータの所有者は当事者
// ============================================================

// --- Demo Data (LLM対話から抽出されるイメージ) ---
const DEMO_PROFILE = {
  name: "サンプル太郎",
  title: "探索者",
  level: 28,
  age: 35,
  diagnosis: ["ADHD（不注意優勢）", "ASD傾向"],
  medication: "ストラテラ 40mg",
  motto: "ゆっくりだけど、ちゃんと前に進んでる",
  generatedFrom: "LLM対話セッション（全12回）",
  lastUpdated: "2026-03-13",

  // Core Stats (radar chart data)
  stats: {
    STR: { value: 45, label: "実行力", desc: "始めるのは得意。継続は環境次第" },
    INT: { value: 72, label: "分析力", desc: "パターン認識が強い。情報過多で固まることも" },
    MEN: { value: 38, label: "精神耐久", desc: "回復は早いが、予想外の変化に弱い" },
    DEX: { value: 55, label: "器用さ", desc: "手先は器用。マルチタスクは苦手" },
    VIT: { value: 42, label: "持続力", desc: "過集中→燃え尽きサイクルあり" },
    CHR: { value: 68, label: "対人力", desc: "1対1は得意。集団の中では消耗する" },
  },

  // Skills (SoE grain-based extraction)
  skills: {
    sr: {
      name: "パターンリーダー",
      rarity: "SR",
      description: "日常の中から繰り返し構造を見つけ出す",
      mechanism: "観察力＋分析力の連動。小さな変化に気づく力が高い",
      context_buff: "静かな環境・十分な睡眠時に最大発揮",
      context_debuff: "騒がしい環境では過負荷になりやすい",
    },
    ur: {
      name: "共感アンテナ",
      rarity: "UR",
      description: "他者の感情状態を言語化されなくても感知する",
      mechanism: "ASD特性の感覚過敏が対人場面でプラスに作用",
      context_buff: "少人数・信頼関係がある場面で強力",
      context_debuff: "大人数の場面では情報過多で疲弊",
    },
  },

  // Traits (buff/debuff dual nature)
  traits: [
    {
      name: "過集中",
      icon_buff: "&#9889;",
      icon_debuff: "&#128164;",
      buff: "興味ある領域で驚異的な集中力を発揮",
      debuff: "興味対象が切り替わると前のタスクを放置",
      grainLevel: "micro",
    },
    {
      name: "新奇追求",
      icon_buff: "&#10024;",
      icon_debuff: "&#128256;",
      buff: "未知の分野を恐れず探索し接続できる",
      debuff: "「面白い」に引きずられて優先順位が崩れる",
      grainLevel: "meso",
    },
    {
      name: "感覚過敏",
      icon_buff: "&#128065;",
      icon_debuff: "&#128563;",
      buff: "微細な環境変化・他者の感情変化を察知",
      debuff: "刺激が多い環境で消耗が激しい",
      grainLevel: "micro",
    },
    {
      name: "抽象化思考",
      icon_buff: "&#127756;",
      icon_debuff: "&#128566;",
      buff: "複雑な構造を一段上から整理できる",
      debuff: "具体的な手順の説明が苦手",
      grainLevel: "macro",
    },
    {
      name: "衝動性",
      icon_buff: "&#128640;",
      icon_debuff: "&#128165;",
      buff: "決断が早く行動開始までのラグが短い",
      debuff: "後先考えずに動いて後悔するパターン",
      grainLevel: "micro",
    },
  ],

  // Career / Experience grains
  experienceGrains: [
    { domain: "接客", years: 3, grain: "対面コミュニケーションの基礎" },
    { domain: "事務", years: 2, grain: "定型業務の構造理解" },
    { domain: "デザイン（独学）", years: 1.5, grain: "視覚的表現力" },
    { domain: "就労移行通所", years: 1, grain: "自己特性の言語化" },
  ],

  // Environment factors (ICF-based)
  environment: {
    facilitators: [
      "静かな作業環境",
      "タスクの視覚化（リスト・付箋）",
      "1対1のコミュニケーション",
      "十分な睡眠（7時間以上）",
      "興味と業務の接続",
    ],
    barriers: [
      "突発的なスケジュール変更",
      "騒がしいオープンオフィス",
      "マルチタスク要求",
      "長時間の会議",
      "曖昧な指示",
    ],
  },

  // Empowerment trajectory
  trajectory: [
    { month: "2025-04", score: 25, event: "通所開始" },
    { month: "2025-06", score: 35, event: "自己特性の言語化ができた" },
    { month: "2025-08", score: 30, event: "対人トラブルで一時低下" },
    { month: "2025-10", score: 48, event: "環境調整が奏功" },
    { month: "2025-12", score: 55, event: "実習先で評価を得る" },
    { month: "2026-02", score: 62, event: "就職活動を自主的に開始" },
  ],
};

// --- Color System ---
const C = {
  bg: "#0c0f1a",
  card: "#131829",
  cardLight: "#1a2035",
  accent: "#f0c040",
  accentDim: "#a08020",
  blue: "#4a90d9",
  green: "#50c878",
  red: "#e05555",
  purple: "#9b6dff",
  cyan: "#40d0d0",
  pink: "#e080a0",
  text: "#e8e8f0",
  textDim: "#8890a8",
  textMuted: "#555a70",
  border: "#1e2440",
  srColor: "#d4af37",
  urColor: "#ff6ec7",
};

// --- Stat Hexagon (simplified radar) ---
const StatHexagon = ({ stats }) => {
  const entries = Object.entries(stats);
  const cx = 120, cy = 120, r = 85;

  const getPoint = (i, val) => {
    const angle = (Math.PI * 2 * i) / entries.length - Math.PI / 2;
    const dist = (val / 100) * r;
    return [cx + dist * Math.cos(angle), cy + dist * Math.sin(angle)];
  };

  const bgPoints = entries.map((_, i) => getPoint(i, 100).join(",")).join(" ");
  const midPoints = entries.map((_, i) => getPoint(i, 50).join(",")).join(" ");
  const dataPoints = entries.map(([, s], i) => getPoint(i, s.value).join(",")).join(" ");

  return (
    <svg viewBox="0 0 240 240" style={{ width: "100%", maxWidth: "280px" }}>
      <polygon points={bgPoints} fill={C.border} stroke={C.textMuted} strokeWidth="0.5" />
      <polygon points={midPoints} fill="none" stroke={C.textMuted} strokeWidth="0.3" strokeDasharray="3,3" />
      {entries.map((_, i) => {
        const [x, y] = getPoint(i, 100);
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke={C.textMuted} strokeWidth="0.3" />;
      })}
      <polygon points={dataPoints} fill={`${C.accent}25`} stroke={C.accent} strokeWidth="2" />
      {entries.map(([key, s], i) => {
        const [x, y] = getPoint(i, 115);
        return (
          <text key={key} x={x} y={y} textAnchor="middle" dominantBaseline="middle"
            fill={C.text} fontSize="11" fontWeight="700">
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

// --- Empowerment Chart ---
const EmpowermentChart = ({ data }) => {
  const maxScore = 100;
  const w = 500, h = 180, pad = 40;
  const chartW = w - pad * 2;
  const chartH = h - pad * 2;
  const step = chartW / (data.length - 1);

  const points = data.map((d, i) => ({
    x: pad + i * step,
    y: pad + chartH - (d.score / maxScore) * chartH,
    ...d,
  }));

  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
  const areaD = pathD + ` L${points[points.length - 1].x},${pad + chartH} L${points[0].x},${pad + chartH} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%" }}>
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.green} stopOpacity="0.3" />
          <stop offset="100%" stopColor={C.green} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      {[0, 25, 50, 75, 100].map((v) => {
        const y = pad + chartH - (v / maxScore) * chartH;
        return (
          <g key={v}>
            <line x1={pad} y1={y} x2={w - pad} y2={y} stroke={C.border} strokeWidth="0.5" />
            <text x={pad - 6} y={y} textAnchor="end" dominantBaseline="middle" fill={C.textMuted} fontSize="9">
              {v}
            </text>
          </g>
        );
      })}
      <path d={areaD} fill="url(#areaGrad)" />
      <path d={pathD} fill="none" stroke={C.green} strokeWidth="2.5" strokeLinecap="round" />
      {points.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="4" fill={C.bg} stroke={C.green} strokeWidth="2" />
          <text x={p.x} y={pad + chartH + 14} textAnchor="middle" fill={C.textDim} fontSize="8">
            {p.month.slice(5)}月
          </text>
        </g>
      ))}
    </svg>
  );
};

// --- Skill Card ---
const SkillCard = ({ skill }) => {
  const isUR = skill.rarity === "UR";
  const color = isUR ? C.urColor : C.srColor;

  return (
    <div style={{
      background: `linear-gradient(135deg, ${color}10, ${C.card})`,
      border: `1px solid ${color}40`,
      borderRadius: "14px",
      padding: "18px",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: 0, right: 0,
        background: color, color: "#000",
        padding: "3px 14px", borderRadius: "0 14px 0 10px",
        fontSize: "11px", fontWeight: "900", letterSpacing: "1px",
      }}>
        {skill.rarity}
      </div>
      <div style={{ fontSize: "18px", fontWeight: "800", color, marginBottom: "6px" }}>
        {skill.name}
      </div>
      <div style={{ fontSize: "13px", color: C.text, marginBottom: "10px", lineHeight: "1.5" }}>
        {skill.description}
      </div>
      <div style={{ fontSize: "11px", color: C.textDim, marginBottom: "8px", lineHeight: "1.6" }}>
        {skill.mechanism}
      </div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <div style={{
          fontSize: "11px", padding: "4px 10px", borderRadius: "6px",
          background: `${C.green}15`, color: C.green, border: `1px solid ${C.green}30`,
        }}>
          &#9650; {skill.context_buff}
        </div>
        <div style={{
          fontSize: "11px", padding: "4px 10px", borderRadius: "6px",
          background: `${C.red}15`, color: C.red, border: `1px solid ${C.red}30`,
        }}>
          &#9660; {skill.context_debuff}
        </div>
      </div>
    </div>
  );
};

// --- Trait Row ---
const TraitRow = ({ trait, expanded, onToggle }) => (
  <div>
    <div onClick={onToggle} style={{
      display: "flex", alignItems: "center", gap: "12px",
      padding: "12px 14px", borderRadius: "10px", cursor: "pointer",
      background: expanded ? C.cardLight : "transparent",
      transition: "background 0.2s",
    }}>
      <div style={{
        width: "36px", height: "36px", borderRadius: "8px",
        background: `${C.purple}15`, border: `1px solid ${C.purple}30`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "18px",
      }}>
        <span dangerouslySetInnerHTML={{ __html: trait.icon_buff }} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: "700", color: C.text, fontSize: "14px" }}>{trait.name}</div>
        <div style={{ fontSize: "10px", color: C.textMuted, marginTop: "2px" }}>
          grain: {trait.grainLevel}
        </div>
      </div>
      <div style={{
        fontSize: "10px", color: C.textDim,
        transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.2s",
      }}>
        &#9660;
      </div>
    </div>
    {expanded && (
      <div style={{ padding: "0 14px 12px 62px", display: "flex", flexDirection: "column", gap: "6px" }}>
        <div style={{
          fontSize: "12px", padding: "8px 12px", borderRadius: "8px",
          background: `${C.green}08`, borderLeft: `3px solid ${C.green}`,
          color: C.textDim, lineHeight: "1.5",
        }}>
          <span style={{ color: C.green, fontWeight: "700", fontSize: "10px" }}>BUFF</span>
          <br />{trait.buff}
        </div>
        <div style={{
          fontSize: "12px", padding: "8px 12px", borderRadius: "8px",
          background: `${C.red}08`, borderLeft: `3px solid ${C.red}`,
          color: C.textDim, lineHeight: "1.5",
        }}>
          <span style={{ color: C.red, fontWeight: "700", fontSize: "10px" }}>DEBUFF</span>
          <br />{trait.debuff}
        </div>
      </div>
    )}
  </div>
);

// --- Environment Panel ---
const EnvironmentPanel = ({ env }) => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
    <div style={{
      background: `${C.green}06`, border: `1px solid ${C.green}20`,
      borderRadius: "12px", padding: "16px",
    }}>
      <div style={{ fontSize: "12px", fontWeight: "700", color: C.green, marginBottom: "10px" }}>
        Facilitators（促進因子）
      </div>
      {env.facilitators.map((f, i) => (
        <div key={i} style={{
          fontSize: "12px", color: C.textDim, padding: "5px 0",
          borderBottom: i < env.facilitators.length - 1 ? `1px solid ${C.border}` : "none",
        }}>
          {f}
        </div>
      ))}
    </div>
    <div style={{
      background: `${C.red}06`, border: `1px solid ${C.red}20`,
      borderRadius: "12px", padding: "16px",
    }}>
      <div style={{ fontSize: "12px", fontWeight: "700", color: C.red, marginBottom: "10px" }}>
        Barriers（阻害因子）
      </div>
      {env.barriers.map((b, i) => (
        <div key={i} style={{
          fontSize: "12px", color: C.textDim, padding: "5px 0",
          borderBottom: i < env.barriers.length - 1 ? `1px solid ${C.border}` : "none",
        }}>
          {b}
        </div>
      ))}
    </div>
  </div>
);

// --- Main Component ---
export default function SoEProfile() {
  const [activeTab, setActiveTab] = useState("status");
  const [expandedTrait, setExpandedTrait] = useState(null);
  const p = DEMO_PROFILE;

  const tabs = [
    { id: "status", label: "Status" },
    { id: "skills", label: "Skills" },
    { id: "traits", label: "Traits" },
    { id: "environment", label: "Environment" },
    { id: "trajectory", label: "Trajectory" },
  ];

  return (
    <div style={{
      background: C.bg, color: C.text, minHeight: "100vh",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: "20px", maxWidth: "640px", margin: "0 auto",
    }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${C.card}, ${C.cardLight})`,
        borderRadius: "20px", padding: "24px",
        border: `1px solid ${C.border}`,
        marginBottom: "20px",
      }}>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-start", marginBottom: "16px",
        }}>
          <div>
            <div style={{ fontSize: "10px", color: C.accent, fontWeight: "700", letterSpacing: "2px", marginBottom: "4px" }}>
              SoE PROFILE
            </div>
            <div style={{ fontSize: "26px", fontWeight: "900", color: C.text, letterSpacing: "-0.5px" }}>
              {p.name}
            </div>
            <div style={{ fontSize: "13px", color: C.accent, fontWeight: "600", marginTop: "2px" }}>
              {p.title} ・ Lv.{p.level}
            </div>
          </div>
          <div style={{
            width: "64px", height: "64px", borderRadius: "50%",
            background: `linear-gradient(135deg, ${C.purple}40, ${C.blue}40)`,
            border: `3px solid ${C.accent}40`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "28px",
          }}>
            &#129497;
          </div>
        </div>

        <div style={{ fontSize: "13px", color: C.textDim, fontStyle: "italic", marginBottom: "14px", lineHeight: "1.5" }}>
          "{p.motto}"
        </div>

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {p.diagnosis.map((d, i) => (
            <div key={i} style={{
              fontSize: "11px", padding: "4px 10px", borderRadius: "20px",
              background: `${C.cyan}15`, color: C.cyan, border: `1px solid ${C.cyan}30`,
            }}>
              {d}
            </div>
          ))}
          <div style={{
            fontSize: "11px", padding: "4px 10px", borderRadius: "20px",
            background: `${C.textMuted}15`, color: C.textDim,
            border: `1px solid ${C.textMuted}30`,
          }}>
            {p.medication}
          </div>
        </div>

        <div style={{
          marginTop: "14px", fontSize: "10px", color: C.textMuted,
          display: "flex", justifyContent: "space-between",
        }}>
          <span>Generated from: {p.generatedFrom}</span>
          <span>Updated: {p.lastUpdated}</span>
        </div>
      </div>

      {/* Data Ownership Notice */}
      <div style={{
        padding: "10px 16px", borderRadius: "10px", marginBottom: "16px",
        background: `${C.accent}08`, border: `1px solid ${C.accent}20`,
        fontSize: "11px", color: C.accent, textAlign: "center",
        fontWeight: "600",
      }}>
        &#128274; このプロファイルデータの所有者はあなた自身です
      </div>

      {/* Tabs */}
      <div style={{
        display: "flex", gap: "3px", marginBottom: "20px",
        background: C.card, borderRadius: "12px", padding: "3px",
        overflowX: "auto",
      }}>
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
            padding: "8px 14px", borderRadius: "9px", border: "none",
            cursor: "pointer", fontSize: "12px", fontWeight: "600",
            whiteSpace: "nowrap",
            background: activeTab === tab.id ? C.accent : "transparent",
            color: activeTab === tab.id ? "#000" : C.textDim,
            transition: "all 0.2s",
          }}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Status Tab */}
      {activeTab === "status" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{
            background: C.card, borderRadius: "16px", padding: "20px",
            display: "flex", flexDirection: "column", alignItems: "center",
          }}>
            <div style={{ fontSize: "14px", fontWeight: "700", color: C.text, marginBottom: "12px" }}>
              Core Stats
            </div>
            <StatHexagon stats={p.stats} />
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px",
          }}>
            {Object.entries(p.stats).map(([key, s]) => (
              <div key={key} style={{
                background: C.card, borderRadius: "10px", padding: "12px",
              }}>
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "center", marginBottom: "4px",
                }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", color: C.text }}>
                    {key}
                  </span>
                  <span style={{ fontSize: "16px", fontWeight: "800", color: C.accent }}>
                    {s.value}
                  </span>
                </div>
                <div style={{ fontSize: "10px", color: C.textDim, lineHeight: "1.4" }}>
                  {s.desc}
                </div>
                <div style={{
                  height: "3px", background: C.border, borderRadius: "2px",
                  marginTop: "6px", overflow: "hidden",
                }}>
                  <div style={{
                    width: `${s.value}%`, height: "100%",
                    background: s.value >= 60 ? C.green : s.value >= 40 ? C.accent : C.red,
                    borderRadius: "2px",
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* Experience Grains */}
          <div style={{ background: C.card, borderRadius: "16px", padding: "20px" }}>
            <div style={{ fontSize: "14px", fontWeight: "700", color: C.text, marginBottom: "12px" }}>
              Experience Grains
            </div>
            {p.experienceGrains.map((e, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: "12px",
                padding: "8px 0",
                borderBottom: i < p.experienceGrains.length - 1 ? `1px solid ${C.border}` : "none",
              }}>
                <div style={{
                  width: "36px", textAlign: "right",
                  fontSize: "14px", fontWeight: "800", color: C.accent,
                }}>
                  {e.years}y
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "13px", fontWeight: "600", color: C.text }}>
                    {e.domain}
                  </div>
                  <div style={{ fontSize: "11px", color: C.textDim }}>{e.grain}</div>
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

          <div style={{
            padding: "14px", borderRadius: "12px",
            background: `${C.purple}08`, border: `1px solid ${C.purple}20`,
            fontSize: "11px", color: C.textDim, lineHeight: "1.6",
          }}>
            <span style={{ color: C.purple, fontWeight: "700" }}>SoE Note:</span>{" "}
            スキルは固定的な能力ではなく、環境（ICF環境因子）との相互作用で
            発揮度が変わります。バフ/デバフ条件は支援計画の環境調整に活用できます。
          </div>
        </div>
      )}

      {/* Traits Tab */}
      {activeTab === "traits" && (
        <div style={{
          background: C.card, borderRadius: "16px", padding: "12px",
          display: "flex", flexDirection: "column", gap: "2px",
        }}>
          <div style={{
            fontSize: "11px", color: C.textDim, padding: "8px 14px",
            marginBottom: "4px", lineHeight: "1.6",
          }}>
            各特性は<span style={{ color: C.green }}>バフ</span>と
            <span style={{ color: C.red }}>デバフ</span>の両面を持ちます。
            タップして詳細を確認してください。
          </div>
          {p.traits.map((t, i) => (
            <TraitRow
              key={i}
              trait={t}
              expanded={expandedTrait === i}
              onToggle={() => setExpandedTrait(expandedTrait === i ? null : i)}
            />
          ))}
        </div>
      )}

      {/* Environment Tab */}
      {activeTab === "environment" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <EnvironmentPanel env={p.environment} />
          <div style={{
            padding: "14px", borderRadius: "12px",
            background: `${C.blue}08`, border: `1px solid ${C.blue}20`,
            fontSize: "11px", color: C.textDim, lineHeight: "1.6",
          }}>
            <span style={{ color: C.blue, fontWeight: "700" }}>ICF連携:</span>{" "}
            環境因子はICF（国際生活機能分類）の枠組みに基づいて分類されています。
            促進因子を最大化し、阻害因子を最小化する環境調整が
            ケイパビリティ・アプローチの実践的実装です。
          </div>
        </div>
      )}

      {/* Trajectory Tab */}
      {activeTab === "trajectory" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ background: C.card, borderRadius: "16px", padding: "20px" }}>
            <div style={{ fontSize: "14px", fontWeight: "700", color: C.text, marginBottom: "14px" }}>
              Empowerment Trajectory
            </div>
            <EmpowermentChart data={p.trajectory} />
          </div>

          <div style={{ background: C.card, borderRadius: "16px", padding: "16px" }}>
            <div style={{ fontSize: "13px", fontWeight: "700", color: C.text, marginBottom: "10px" }}>
              Key Events
            </div>
            {p.trajectory.map((t, i) => (
              <div key={i} style={{
                display: "flex", gap: "12px", padding: "8px 0",
                borderBottom: i < p.trajectory.length - 1 ? `1px solid ${C.border}` : "none",
              }}>
                <div style={{
                  minWidth: "44px", fontSize: "11px", color: C.textMuted, paddingTop: "2px",
                }}>
                  {t.month.slice(5)}月
                </div>
                <div style={{
                  width: "32px", fontSize: "14px", fontWeight: "800",
                  color: t.score >= 50 ? C.green : t.score >= 30 ? C.accent : C.red,
                }}>
                  {t.score}
                </div>
                <div style={{ fontSize: "12px", color: C.textDim, flex: 1 }}>
                  {t.event}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            padding: "14px", borderRadius: "12px",
            background: `${C.green}08`, border: `1px solid ${C.green}20`,
            fontSize: "11px", color: C.textDim, lineHeight: "1.6",
          }}>
            <span style={{ color: C.green, fontWeight: "700" }}>SoE Gauge:</span>{" "}
            エンパワメント指数は直線的な上昇を期待するものではありません。
            低下も含めた軌跡全体が、本人の成長プロセスの記録です。
            一時的な低下は環境との相互作用の結果であり、個人の「失敗」ではありません。
          </div>
        </div>
      )}

      {/* Footer */}
      <div style={{
        marginTop: "24px", padding: "16px",
        textAlign: "center", fontSize: "10px", color: C.textMuted,
        borderTop: `1px solid ${C.border}`,
      }}>
        SoE Profile v0.1 Prototype — Service of Empowerment<br />
        Grain-Based Cognition + ICF Environment Factors + Capability Approach<br />
        Designed by Puu (Yuji Yamauchi) — Built with Claude Opus 4.6
      </div>
    </div>
  );
}