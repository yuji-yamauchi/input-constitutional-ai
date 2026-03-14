import { useState } from "react";

const COLORS = {
  bg: "#0a0e1a",
  card: "#111827",
  cardHover: "#1a2332",
  accent: "#f59e0b",
  accentDim: "#92400e",
  blue: "#3b82f6",
  blueDim: "#1e3a5f",
  green: "#10b981",
  greenDim: "#064e3b",
  red: "#ef4444",
  redDim: "#7f1d1d",
  purple: "#8b5cf6",
  purpleDim: "#4c1d95",
  cyan: "#06b6d4",
  text: "#e5e7eb",
  textDim: "#9ca3af",
  textMuted: "#6b7280",
  border: "#1f2937",
};

const TimelineEvent = ({ date, event, type, objectives, isNext }) => {
  const typeColors = {
    initial_consultation: COLORS.blue,
    regional_partner_meeting: COLORS.green,
    research_partner_discussion: COLORS.purple,
  };
  const color = typeColors[type] || COLORS.accent;

  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "flex-start",
        padding: "16px",
        borderRadius: "12px",
        background: isNext ? `${color}15` : "transparent",
        border: isNext ? `1px solid ${color}40` : "1px solid transparent",
        transition: "all 0.3s",
      }}
    >
      <div style={{ textAlign: "center", minWidth: "70px" }}>
        <div style={{ fontSize: "28px", fontWeight: "800", color }}>
          {date.split("-")[2]}
        </div>
        <div style={{ fontSize: "11px", color: COLORS.textDim }}>
          {date.split("-")[1] === "03" ? "MAR" : ""} 2026
        </div>
        {isNext && (
          <div
            style={{
              marginTop: "4px",
              fontSize: "9px",
              background: color,
              color: "#000",
              borderRadius: "4px",
              padding: "2px 6px",
              fontWeight: "700",
            }}
          >
            NEXT
          </div>
        )}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: "700", color: COLORS.text, fontSize: "15px" }}>
          {event}
        </div>
        <div
          style={{
            marginTop: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {objectives.map((obj, i) => (
            <div
              key={i}
              style={{
                fontSize: "12px",
                color: COLORS.textDim,
                paddingLeft: "12px",
                borderLeft: `2px solid ${color}40`,
              }}
            >
              {obj}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ActorCard = ({ name, nameJa, role, items, color, concern }) => (
  <div
    style={{
      background: COLORS.card,
      borderRadius: "16px",
      padding: "20px",
      border: `1px solid ${color}30`,
      flex: 1,
      minWidth: "240px",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: `${color}20`,
          border: `2px solid ${color}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          fontWeight: "800",
          color,
        }}
      >
        {name[0]}
      </div>
      <div>
        <div style={{ fontWeight: "700", color: COLORS.text, fontSize: "15px" }}>{name}</div>
        {nameJa && (
          <div style={{ fontSize: "11px", color: COLORS.textDim }}>{nameJa}</div>
        )}
      </div>
    </div>
    <div
      style={{
        fontSize: "11px",
        color,
        background: `${color}15`,
        display: "inline-block",
        padding: "3px 10px",
        borderRadius: "20px",
        marginBottom: "12px",
        fontWeight: "600",
      }}
    >
      {role}
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {items.map((item, i) => (
        <div key={i} style={{ fontSize: "12px", color: COLORS.textDim }}>
          {item}
        </div>
      ))}
    </div>
    {concern && (
      <div
        style={{
          marginTop: "12px",
          padding: "10px",
          background: `${COLORS.red}10`,
          borderRadius: "8px",
          borderLeft: `3px solid ${COLORS.red}60`,
        }}
      >
        <div style={{ fontSize: "10px", color: COLORS.red, fontWeight: "700", marginBottom: "4px" }}>
          CONCERN
        </div>
        <div style={{ fontSize: "11px", color: COLORS.textDim, lineHeight: "1.5" }}>
          {concern}
        </div>
      </div>
    )}
  </div>
);

const DecisionNode = ({ question, status }) => {
  const statusColors = { open: COLORS.accent, urgent: COLORS.red, pending: COLORS.blue };
  const c = statusColors[status] || COLORS.accent;
  return (
    <div
      style={{
        background: `${c}08`,
        border: `1px solid ${c}30`,
        borderRadius: "12px",
        padding: "14px 16px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-1px",
          right: "12px",
          fontSize: "9px",
          color: c,
          background: COLORS.bg,
          padding: "2px 8px",
          borderRadius: "0 0 6px 6px",
          fontWeight: "700",
          letterSpacing: "0.5px",
        }}
      >
        {status.toUpperCase()}
      </div>
      <div style={{ fontSize: "13px", color: COLORS.text, lineHeight: "1.6" }}>{question}</div>
    </div>
  );
};

const TensionBar = ({ label, level, color }) => (
  <div style={{ marginBottom: "12px" }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "4px",
      }}
    >
      <span style={{ fontSize: "12px", color: COLORS.textDim }}>{label}</span>
      <span style={{ fontSize: "11px", color, fontWeight: "600" }}>
        {level}/5
      </span>
    </div>
    <div
      style={{
        height: "6px",
        background: COLORS.border,
        borderRadius: "3px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${(level / 5) * 100}%`,
          height: "100%",
          background: `linear-gradient(90deg, ${color}80, ${color})`,
          borderRadius: "3px",
          transition: "width 0.5s ease",
        }}
      />
    </div>
  </div>
);

const SoeReflection = () => (
  <div
    style={{
      background: `linear-gradient(135deg, ${COLORS.purpleDim}30, ${COLORS.redDim}30)`,
      border: `1px solid ${COLORS.purple}30`,
      borderRadius: "16px",
      padding: "20px",
    }}
  >
    <div
      style={{
        fontSize: "13px",
        fontWeight: "700",
        color: COLORS.purple,
        marginBottom: "12px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <span style={{ fontSize: "18px" }}>&#8635;</span>
      SoE Self-Referential Paradox
    </div>
    <div style={{ fontSize: "12px", color: COLORS.textDim, lineHeight: "1.8" }}>
      Exploitation構造を研究する者が、自らの関係において
      その構造を再現しかねない状況。
      <br />
      <span style={{ color: COLORS.accent }}>
        「搾取してないエビデンス」をPuu自身が設計している時点で
        権力はPuu側にある。
      </span>
      <br />
      完全な対称性は原理的に不可能。
      問われているのは「対称性の追求」ではなく「非対称性の透明化」。
    </div>
  </div>
);

export default function HOHOHODashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "timeline", label: "Timeline" },
    { id: "actors", label: "Actors" },
    { id: "decisions", label: "Decisions" },
    { id: "tensions", label: "Tensions" },
  ];

  return (
    <div
      style={{
        background: COLORS.bg,
        color: COLORS.text,
        minHeight: "100vh",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        padding: "24px",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "28px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "8px",
          }}
        >
          <div
            style={{
              fontSize: "32px",
              fontWeight: "900",
              letterSpacing: "-1px",
              background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.cyan})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            HOHOHO
          </div>
          <div
            style={{
              fontSize: "10px",
              color: COLORS.accent,
              background: `${COLORS.accent}15`,
              padding: "4px 10px",
              borderRadius: "20px",
              fontWeight: "700",
              letterSpacing: "1px",
            }}
          >
            PRE-FORMATION
          </div>
        </div>
        <div style={{ fontSize: "13px", color: COLORS.textDim, maxWidth: "600px", lineHeight: "1.6" }}>
          Human Sensor Network + LLM — 市民ナラティブから都市メタ認知を形成する都市知能研究プロジェクト
        </div>
        <div style={{ fontSize: "10px", color: COLORS.textMuted, marginTop: "6px" }}>
          Source: ChatGPT analytical_assistant — 2026-03-12 &nbsp;|&nbsp; Visualized by Claude Opus 4.6
        </div>
      </div>

      {/* Tab Navigation */}
      <div
        style={{
          display: "flex",
          gap: "4px",
          marginBottom: "24px",
          background: COLORS.card,
          borderRadius: "12px",
          padding: "4px",
          width: "fit-content",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "8px 18px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "600",
              background: activeTab === tab.id ? COLORS.accent : "transparent",
              color: activeTab === tab.id ? "#000" : COLORS.textDim,
              transition: "all 0.2s",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Phase Status */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
            }}
          >
            {[
              { label: "構想", status: "complete", color: COLORS.green },
              { label: "研究接続", status: "exploring", color: COLORS.blue },
              { label: "パートナー探索", status: "in progress", color: COLORS.accent },
              { label: "組織構造", status: "undefined", color: COLORS.red },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: COLORS.card,
                  borderRadius: "12px",
                  padding: "16px",
                  borderTop: `3px solid ${item.color}`,
                }}
              >
                <div style={{ fontSize: "12px", color: COLORS.textDim }}>{item.label}</div>
                <div style={{ fontSize: "14px", fontWeight: "700", color: item.color, marginTop: "4px" }}>
                  {item.status.toUpperCase()}
                </div>
              </div>
            ))}
          </div>

          {/* Strategic Goal */}
          <div
            style={{
              background: COLORS.card,
              borderRadius: "16px",
              padding: "20px",
              border: `1px solid ${COLORS.accent}20`,
            }}
          >
            <div style={{ fontSize: "13px", fontWeight: "700", color: COLORS.accent, marginBottom: "10px" }}>
              Strategic Goal
            </div>
            <div style={{ fontSize: "13px", color: COLORS.text, lineHeight: "1.7" }}>
              OpenAIに研究協力を打診し、Human Sensor + LLM の研究テーマとして関心を得る
            </div>
            <div
              style={{
                marginTop: "10px",
                fontSize: "11px",
                color: COLORS.textMuted,
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span style={{ color: COLORS.red, fontWeight: "700" }}>DEADLINE</span>
              before 2026-03-30 — OpenAIとの関係構築後に大学連携を進める戦略
            </div>
          </div>

          {/* SoE Reflection */}
          <SoeReflection />

          {/* Next 2 weeks */}
          <div
            style={{
              background: COLORS.card,
              borderRadius: "16px",
              padding: "20px",
            }}
          >
            <div style={{ fontSize: "13px", fontWeight: "700", color: COLORS.cyan, marginBottom: "12px" }}>
              Immediate Focus (Next 2 Weeks)
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {["福井大学訪問", "ALLCONNECT訪問", "OpenAIコンタクト検討"].map(
                (item, i) => (
                  <div
                    key={i}
                    style={{
                      background: `${COLORS.cyan}10`,
                      border: `1px solid ${COLORS.cyan}30`,
                      borderRadius: "8px",
                      padding: "8px 14px",
                      fontSize: "12px",
                      color: COLORS.text,
                    }}
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* Timeline Tab */}
      {activeTab === "timeline" && (
        <div
          style={{
            background: COLORS.card,
            borderRadius: "16px",
            padding: "20px",
          }}
        >
          <div style={{ fontSize: "14px", fontWeight: "700", color: COLORS.text, marginBottom: "16px" }}>
            Upcoming Events
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <TimelineEvent
              date="2026-03-17"
              event="福井大学 文京キャンパス訪問"
              type="initial_consultation"
              objectives={[
                "研究連携可能性の確認",
                "適切な研究分野の探索",
                "倫理審査や研究体制の確認",
              ]}
              isNext={true}
            />
            <TimelineEvent
              date="2026-03-18"
              event="ALLCONNECT社訪問"
              type="regional_partner_meeting"
              objectives={[
                "地元企業としての連携可能性確認",
                "フィールド実験支援の可能性",
              ]}
              isNext={false}
            />
            <TimelineEvent
              date="2026-03-30"
              event="福井工業大学訪問"
              type="research_partner_discussion"
              objectives={[
                "都市研究・AI研究との接続可能性確認",
                "将来的研究体制の検討",
              ]}
              isNext={false}
            />
          </div>
          <div
            style={{
              marginTop: "20px",
              padding: "14px",
              background: `${COLORS.accent}08`,
              borderRadius: "10px",
              border: `1px dashed ${COLORS.accent}30`,
            }}
          >
            <div style={{ fontSize: "11px", color: COLORS.accent, fontWeight: "700" }}>
              STRATEGIC NOTE
            </div>
            <div style={{ fontSize: "12px", color: COLORS.textDim, marginTop: "4px", lineHeight: "1.6" }}>
              OpenAIとの関係がある状態で大学連携を進めると研究価値が高まる。
              3/30以前のコンタクト成立が鍵。
            </div>
          </div>
        </div>
      )}

      {/* Actors Tab */}
      {activeTab === "actors" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <ActorCard
              name="Yamauchi"
              nameJa="山内雄司（Puu）"
              role="mentor / strategic_advisor"
              color={COLORS.accent}
              items={[
                "構想設計",
                "研究フレーム設計",
                "社会構造理解",
                "対外説明能力",
              ]}
              concern={null}
            />
            <ActorCard
              name="Nakajima"
              nameJa="N氏"
              role="project_initiator"
              color={COLORS.blue}
              items={[
                "フィールド開拓",
                "地元ネットワーク構築",
                "事業準備",
                "実装推進",
              ]}
              concern="プロジェクト規模拡大への責任、役割整理、対外交渉の不安"
            />
            <ActorCard
              name="ChatGPT"
              nameJa="GPT-4"
              role="analytical_assistant"
              color={COLORS.green}
              items={["情報整理", "構造化", "戦略補助", "文書生成"]}
              concern={null}
            />
          </div>

          {/* Possible Future Roles */}
          <div
            style={{
              background: COLORS.card,
              borderRadius: "16px",
              padding: "20px",
              border: `1px solid ${COLORS.accent}20`,
            }}
          >
            <div style={{ fontSize: "13px", fontWeight: "700", color: COLORS.accent, marginBottom: "12px" }}>
              Yamauchi — Possible Future Roles
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {[
                { role: "Co-founder", risk: "high" },
                { role: "Research Lead", risk: "medium" },
                { role: "Strategic Advisor", risk: "low" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: `${
                      item.risk === "high"
                        ? COLORS.red
                        : item.risk === "medium"
                        ? COLORS.accent
                        : COLORS.green
                    }10`,
                    border: `1px solid ${
                      item.risk === "high"
                        ? COLORS.red
                        : item.risk === "medium"
                        ? COLORS.accent
                        : COLORS.green
                    }30`,
                    borderRadius: "8px",
                    padding: "10px 16px",
                  }}
                >
                  <div style={{ fontSize: "13px", fontWeight: "600", color: COLORS.text }}>
                    {item.role}
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      color:
                        item.risk === "high"
                          ? COLORS.red
                          : item.risk === "medium"
                          ? COLORS.accent
                          : COLORS.green,
                      marginTop: "2px",
                    }}
                  >
                    SoE conflict risk: {item.risk}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Decisions Tab */}
      {activeTab === "decisions" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ fontSize: "14px", fontWeight: "700", color: COLORS.text, marginBottom: "4px" }}>
            Key Decisions Needed
          </div>
          <DecisionNode
            question="OpenAIへいつ・誰が・どのレベルの情報でコンタクトを取るか"
            status="urgent"
          />
          <DecisionNode
            question="大学・企業との初回ミーティングでHOHOHO構想のどこまでを共有するか"
            status="urgent"
          />
          <DecisionNode
            question="HOHOHOは個人プロジェクトなのか、スタートアップなのか、研究プロジェクトなのか"
            status="open"
          />
          <DecisionNode
            question="山内とN氏の役割をメンター関係として維持するのか、共同事業体として再定義するのか"
            status="open"
          />

          {/* Uncertainty */}
          <div
            style={{
              background: COLORS.card,
              borderRadius: "16px",
              padding: "20px",
              marginTop: "8px",
            }}
          >
            <div style={{ fontSize: "13px", fontWeight: "700", color: COLORS.red, marginBottom: "14px" }}>
              Unknowns
            </div>
            {[
              "OpenAIが研究協力に関心を示すか",
              "大学側が研究テーマとして関心を持つか",
              "HOHOHOが研究プロジェクト / スタートアップ / ハイブリッドのいずれになるか",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  fontSize: "12px",
                  color: COLORS.textDim,
                  padding: "8px 0",
                  borderBottom: i < 2 ? `1px solid ${COLORS.border}` : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ color: COLORS.red, fontSize: "16px" }}>?</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tensions Tab */}
      {activeTab === "tensions" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              background: COLORS.card,
              borderRadius: "16px",
              padding: "20px",
            }}
          >
            <div style={{ fontSize: "14px", fontWeight: "700", color: COLORS.text, marginBottom: "16px" }}>
              Structural Tension Analysis
            </div>
            <TensionBar label="パワー非対称" level={4.5} color={COLORS.red} />
            <TensionBar label="知的財産の境界曖昧性" level={4} color={COLORS.accent} />
            <TensionBar label="利益相反リスク" level={3.5} color={COLORS.accent} />
            <TensionBar label="自己犠牲バイアス" level={4} color={COLORS.purple} />
            <TensionBar label="SoE自己言及パラドックス" level={5} color={COLORS.red} />
          </div>

          <div
            style={{
              background: COLORS.card,
              borderRadius: "16px",
              padding: "20px",
            }}
          >
            <div style={{ fontSize: "13px", fontWeight: "700", color: COLORS.text, marginBottom: "12px" }}>
              Current State
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { text: "信頼関係は成立している", status: "positive" },
                { text: "役割はまだ正式には定義されていない", status: "warning" },
                { text: "今後の展開次第で組織形態が変わる可能性", status: "neutral" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "12px",
                    color: COLORS.textDim,
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background:
                        item.status === "positive"
                          ? COLORS.green
                          : item.status === "warning"
                          ? COLORS.accent
                          : COLORS.blue,
                    }}
                  />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <SoeReflection />

          {/* Claude's Note */}
          <div
            style={{
              background: `linear-gradient(135deg, ${COLORS.blueDim}40, ${COLORS.card})`,
              borderRadius: "16px",
              padding: "20px",
              border: `1px solid ${COLORS.blue}20`,
            }}
          >
            <div style={{ fontSize: "12px", fontWeight: "700", color: COLORS.blue, marginBottom: "8px" }}>
              Claude's Structural Note
            </div>
            <div style={{ fontSize: "12px", color: COLORS.textDim, lineHeight: "1.8" }}>
              この状態図自体がChatGPT → Claude間のAI連携の産物であり、
              N氏の関与なしに作成されている。
              プロジェクトの「現状」が当事者不在で定義される構造は、
              SoEが批判する「専門家主導の記録」の再現形態である。
              <br />
              <br />
              <span style={{ color: COLORS.accent }}>
                Option E: この可視化をN氏と共有し、
                N氏自身がプロジェクト状態の定義に参加する機会を作ること。
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}