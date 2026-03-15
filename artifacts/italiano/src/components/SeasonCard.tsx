type SeasonCardProps = { word: string };

export function isSeasonWord(word: string): boolean {
  return ["PRIMAVERA", "ESTATE", "AUTUNNO", "INVERNO"].includes(word);
}

function SpringSVG() {
  return (
    <svg viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="sp-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#E0F7FA" />
        </linearGradient>
        <linearGradient id="sp-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#81C784" />
          <stop offset="100%" stopColor="#388E3C" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="58" fill="url(#sp-sky)" />
      <ellipse cx="60" cy="88" rx="65" ry="36" fill="url(#sp-ground)" />
      <polygon points="18,72 32,44 46,72" fill="#78909C" opacity="0.55" />
      <polygon points="30,72 48,38 66,72" fill="#90A4AE" opacity="0.4" />
      <rect x="56" y="55" width="8" height="26" rx="3" fill="#6D4C41" />
      <ellipse cx="60" cy="48" rx="18" ry="14" fill="#A5D6A7" />
      <ellipse cx="48" cy="52" rx="10" ry="8" fill="#81C784" />
      <ellipse cx="72" cy="52" rx="10" ry="8" fill="#81C784" />
      <circle cx="54" cy="44" r="4" fill="#F48FB1" />
      <circle cx="65" cy="42" r="4" fill="#F06292" />
      <circle cx="60" cy="50" r="3.5" fill="#F48FB1" />
      <circle cx="50" cy="52" r="3" fill="#EC407A" />
      <circle cx="70" cy="50" r="3" fill="#F48FB1" />
      <ellipse cx="25" cy="26" rx="14" ry="8" fill="white" opacity="0.85" />
      <ellipse cx="36" cy="23" rx="9" ry="6" fill="white" opacity="0.85" />
      <ellipse cx="85" cy="20" rx="12" ry="7" fill="white" opacity="0.8" />
      <circle cx="94" cy="94" r="17" fill="#43A047" />
      <circle cx="94" cy="94" r="5" fill="white" />
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const px = 94 + Math.cos(rad) * 10;
        const py = 94 + Math.sin(rad) * 10;
        return <circle key={i} cx={px} cy={py} r="4" fill="white" />;
      })}
    </svg>
  );
}

function SummerSVG() {
  return (
    <svg viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="su-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#64B5F6" />
          <stop offset="100%" stopColor="#E3F2FD" />
        </linearGradient>
        <linearGradient id="su-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#66BB6A" />
          <stop offset="100%" stopColor="#2E7D32" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="58" fill="url(#su-sky)" />
      <ellipse cx="60" cy="90" rx="65" ry="34" fill="url(#su-ground)" />
      <circle cx="90" cy="28" r="16" fill="#FFD54F" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 90 + Math.cos(rad) * 18;
        const y1 = 28 + Math.sin(rad) * 18;
        const x2 = 90 + Math.cos(rad) * 26;
        const y2 = 28 + Math.sin(rad) * 26;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFB300" strokeWidth="3" strokeLinecap="round" />;
      })}
      <rect x="54" y="55" width="8" height="28" rx="3" fill="#5D4037" />
      <ellipse cx="58" cy="46" rx="16" ry="13" fill="#2E7D32" />
      <ellipse cx="48" cy="50" rx="10" ry="8" fill="#388E3C" />
      <ellipse cx="68" cy="50" rx="10" ry="8" fill="#388E3C" />
      <circle cx="54" cy="47" r="3" fill="#EF5350" />
      <circle cx="63" cy="44" r="3" fill="#EF5350" />
      <circle cx="59" cy="53" r="3" fill="#C62828" />
      <circle cx="45" cy="52" r="2.5" fill="#EF5350" />
      <ellipse cx="22" cy="30" rx="13" ry="7" fill="white" opacity="0.8" />
      <ellipse cx="32" cy="27" rx="8" ry="5" fill="white" opacity="0.8" />
      <circle cx="93" cy="93" r="17" fill="#FDD835" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const px = 93 + Math.cos(rad) * 10;
        const py = 93 + Math.sin(rad) * 10;
        return <ellipse key={i} cx={px} cy={py} rx="3" ry="5" fill="white" opacity="0.9" transform={`rotate(${angle},${px},${py})`} />;
      })}
      <circle cx="93" cy="93" r="6" fill="#FFB300" />
    </svg>
  );
}

function AutumnSVG() {
  return (
    <svg viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="au-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF8A65" />
          <stop offset="50%" stopColor="#FFB74D" />
          <stop offset="100%" stopColor="#FFF9C4" />
        </linearGradient>
        <linearGradient id="au-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF7043" />
          <stop offset="100%" stopColor="#BF360C" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="58" fill="url(#au-sky)" />
      <ellipse cx="60" cy="90" rx="65" ry="34" fill="url(#au-ground)" />
      <ellipse cx="25" cy="35" rx="15" ry="9" fill="#FFCC80" opacity="0.6" />
      <ellipse cx="85" cy="28" rx="12" ry="7" fill="#FFE0B2" opacity="0.5" />
      <rect x="55" y="52" width="10" height="30" rx="4" fill="#6D4C41" />
      <ellipse cx="60" cy="43" rx="22" ry="18" fill="#FF7043" />
      <ellipse cx="45" cy="48" rx="13" ry="10" fill="#FF8A65" />
      <ellipse cx="75" cy="48" rx="13" ry="10" fill="#FF8A65" />
      <ellipse cx="60" cy="34" rx="14" ry="10" fill="#E64A19" />
      <ellipse cx="47" cy="38" rx="8" ry="6" fill="#BF360C" opacity="0.7" />
      <ellipse cx="73" cy="38" rx="8" ry="6" fill="#BF360C" opacity="0.7" />
      <ellipse cx="42" cy="68" rx="5" ry="4" fill="#FF8A65" opacity="0.8" transform="rotate(-30,42,68)" />
      <ellipse cx="75" cy="72" rx="4" ry="3" fill="#FF7043" opacity="0.8" transform="rotate(20,75,72)" />
      <ellipse cx="30" cy="76" rx="4" ry="3" fill="#E64A19" opacity="0.7" transform="rotate(-15,30,76)" />
      <circle cx="93" cy="93" r="17" fill="#FF5722" />
      <ellipse cx="93" cy="88" rx="7" ry="9" fill="white" />
      <ellipse cx="87" cy="96" rx="7" ry="5" fill="white" opacity="0.9" transform="rotate(-30,87,96)" />
      <ellipse cx="99" cy="96" rx="7" ry="5" fill="white" opacity="0.9" transform="rotate(30,99,96)" />
    </svg>
  );
}

function WinterSVG() {
  return (
    <svg viewBox="0 0 120 120" width="100%" height="100%">
      <defs>
        <linearGradient id="wi-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1565C0" />
          <stop offset="100%" stopColor="#42A5F5" />
        </linearGradient>
        <linearGradient id="wi-snow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E3F2FD" />
          <stop offset="100%" stopColor="#BBDEFB" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="58" fill="url(#wi-sky)" />
      <polygon points="15,85 35,40 55,85" fill="#546E7A" />
      <polygon points="15,85 35,40 55,85" fill="url(#wi-snow)" opacity="0.7" />
      <polygon points="40,85 65,35 90,85" fill="#455A64" />
      <polygon points="40,85 65,35 90,85" fill="url(#wi-snow)" opacity="0.6" />
      <polygon points="60,85 80,50 100,85" fill="#37474F" />
      <polygon points="60,85 80,50 100,85" fill="url(#wi-snow)" opacity="0.65" />
      <rect x="54" y="62" width="7" height="22" fill="#5D4037" />
      <line x1="57" y1="67" x2="46" y2="60" stroke="#5D4037" strokeWidth="2.5" />
      <line x1="57" y1="72" x2="44" y2="68" stroke="#5D4037" strokeWidth="2" />
      <line x1="57" y1="67" x2="68" y2="60" stroke="#5D4037" strokeWidth="2.5" />
      <line x1="57" y1="72" x2="70" y2="68" stroke="#5D4037" strokeWidth="2" />
      {[[20,25],[85,18],[35,15],[70,30],[50,10]].map(([x,y],i) => (
        <text key={i} x={x} y={y} fontSize="8" fill="white" opacity="0.8" textAnchor="middle">✱</text>
      ))}
      <circle cx="93" cy="93" r="17" fill="#29B6F6" />
      <line x1="93" y1="78" x2="93" y2="108" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="78" y1="93" x2="108" y2="93" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="83" y1="83" x2="103" y2="103" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="103" y1="83" x2="83" y2="103" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      {[[93,81],[93,105],[80,93],[106,93],[85,85],[101,101],[101,85],[85,101]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="2" fill="white" />
      ))}
    </svg>
  );
}

export default function SeasonCard({ word }: SeasonCardProps) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "1 / 1",
        borderRadius: "50%",
        overflow: "hidden",
        boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
        border: "3px solid rgba(255,255,255,0.9)",
      }}
    >
      {word === "PRIMAVERA" && <SpringSVG />}
      {word === "ESTATE" && <SummerSVG />}
      {word === "AUTUNNO" && <AutumnSVG />}
      {word === "INVERNO" && <WinterSVG />}
    </div>
  );
}
