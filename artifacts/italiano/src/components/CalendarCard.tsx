type CalendarCardProps = {
  word: string;
  categoryId: string;
  large?: boolean;
};

const MONTHS_CONFIG: Record<string, { num: string; abbr: string; color: string }> = {
  GENNAIO:   { num: "01", abbr: "GEN", color: "#2196F3" },
  FEBBRAIO:  { num: "02", abbr: "FEB", color: "#00BCD4" },
  MARZO:     { num: "03", abbr: "MAR", color: "#4CAF50" },
  APRILE:    { num: "04", abbr: "APR", color: "#8BC34A" },
  MAGGIO:    { num: "05", abbr: "MAG", color: "#CDDC39" },
  GIUGNO:    { num: "06", abbr: "GIU", color: "#FFC107" },
  LUGLIO:    { num: "07", abbr: "LUG", color: "#FF9800" },
  AGOSTO:    { num: "08", abbr: "AGO", color: "#F44336" },
  SETTEMBRE: { num: "09", abbr: "SET", color: "#E91E63" },
  OTTOBRE:   { num: "10", abbr: "OTT", color: "#FF5722" },
  NOVEMBRE:  { num: "11", abbr: "NOV", color: "#607D8B" },
  DICEMBRE:  { num: "12", abbr: "DIC", color: "#3F51B5" },
};

const DAYS_CONFIG: Record<string, { abbr: string; color: string }> = {
  LUNEDI:    { abbr: "LUN", color: "#9C27B0" },
  MARTEDI:   { abbr: "MAR", color: "#7B1FA2" },
  MERCOLEDI: { abbr: "MER", color: "#2196F3" },
  GIOVEDI:   { abbr: "GIO", color: "#4CAF50" },
  VENERDI:   { abbr: "VEN", color: "#FFC107" },
  SABATO:    { abbr: "SAB", color: "#FF9800" },
  DOMENICA:  { abbr: "DOM", color: "#F44336" },
};

export function isCalendarWord(word: string, categoryId: string): boolean {
  if (categoryId === "mesi-stagioni") return word in MONTHS_CONFIG;
  if (categoryId === "giorni-settimana") return word in DAYS_CONFIG;
  return false;
}

export default function CalendarCard({ word, categoryId, large = false }: CalendarCardProps) {
  const isMonth = categoryId === "mesi-stagioni";
  const config = isMonth ? MONTHS_CONFIG[word] : DAYS_CONFIG[word];
  if (!config) return null;

  const color = config.color;
  const abbr = config.abbr;
  const num = isMonth ? (config as { num: string; abbr: string; color: string }).num : null;
  const isLight = ["#CDDC39", "#FFC107"].includes(color);
  const textColor = isLight ? "#555" : "#fff";

  const W = large ? 130 : 68;
  const H = large ? 148 : 78;
  const ringR = large ? 7 : 4;
  const ringTop = large ? 3 : 2;
  const headerH = large ? 44 : 26;
  const numSize = large ? 14 : 9;
  const abbrHeaderSize = large ? 22 : 13;
  const abbrBodySize = large ? 30 : 17;
  const bodyY = large ? 100 : 55;

  return (
    <div style={{ position: "relative", width: W, height: H + ringR * 2 }}>
      {/* Rings */}
      {[W * 0.28, W * 0.72].map((cx, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: 0,
            left: cx - ringR,
            width: ringR * 2,
            height: ringR * 2,
            borderRadius: "50%",
            background: "#999",
            border: `${large ? 2 : 1.5}px solid white`,
            boxShadow: "0 1px 3px rgba(0,0,0,0.25)",
            zIndex: 10,
          }}
        />
      ))}

      {/* Card body */}
      <div
        style={{
          position: "absolute",
          top: ringR,
          left: 0,
          width: W,
          height: H,
          borderRadius: large ? 14 : 8,
          overflow: "hidden",
          background: "white",
          boxShadow: large
            ? "0 4px 16px rgba(0,0,0,0.15)"
            : "0 2px 8px rgba(0,0,0,0.15)",
          border: "1px solid #e0e0e0",
        }}
      >
        {/* Colored header */}
        <div
          style={{
            background: color,
            height: headerH,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2px 4px",
          }}
        >
          {isMonth && num && (
            <span style={{ color: textColor, fontWeight: 800, fontSize: numSize, lineHeight: 1.2 }}>
              {num}
            </span>
          )}
          {!isMonth && (
            <span style={{ color: textColor, fontWeight: 900, fontSize: abbrHeaderSize, lineHeight: 1, letterSpacing: 0.5 }}>
              {abbr}
            </span>
          )}
        </div>

        {/* Body */}
        {isMonth ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: H - headerH,
            }}
          >
            <span style={{ color: "#555", fontWeight: 900, fontSize: abbrBodySize, letterSpacing: 1 }}>
              {abbr}
            </span>
          </div>
        ) : (
          /* Calendar grid dots for days */
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: H - headerH,
              gap: large ? 5 : 3,
            }}
          >
            {[0, 1, 2].map((row) => (
              <div key={row} style={{ display: "flex", gap: large ? 4 : 2.5 }}>
                {[0, 1, 2, 3, 4].map((col) => (
                  <div
                    key={col}
                    style={{
                      width: large ? 8 : 5,
                      height: large ? 8 : 5,
                      borderRadius: 2,
                      background:
                        (row === 0 && col < 2) ||
                        (row === 1 && col === 2) ||
                        (row === 2 && col === 4)
                          ? color
                          : "#e0e0e0",
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
