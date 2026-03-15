type Props = { word: string };

const APPLIANCE_IMAGES: Record<string, string> = {
  LAVATRICE: "/appliances/lavatrice.png",
  FRIGORIFERO: "/appliances/frigorifero.png",
  "FERRO DA STIRO": "/appliances/ferro.png",
  VENTILATORE: "/appliances/ventilatore.png",
  SCOPA: "/appliances/scopa.png",
  LAMPADINA: "/appliances/lampadina.png",
  "PRESA ELETTRICA": "/appliances/presa.png",
  TERMOMETRO: "/appliances/termometro.png",
  RADIO: "/appliances/radio.png",
  STAMPANTE: "/appliances/stampante.png",
  BATTERIA: "/appliances/batteria.png",
  MAGNETE: "/appliances/magnete.png",
};

export function isApplianceWord(word: string): boolean {
  return word in APPLIANCE_IMAGES;
}

export default function ApplianceCard({ word }: Props) {
  const src = APPLIANCE_IMAGES[word];
  if (!src) return null;
  return (
    <img
      src={src}
      alt={word}
      style={{
        width: "72px",
        height: "72px",
        objectFit: "contain",
        filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.15))",
      }}
    />
  );
}
