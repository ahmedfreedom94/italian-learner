import { useState } from "react";

type Props = {
  word: string;
  emoji: string;
  size?: number;
};

function wordToSlug(word: string): string {
  return word
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[àáâä]/g, "a")
    .replace(/[èéêë]/g, "e")
    .replace(/[ìíîï]/g, "i")
    .replace(/[òóôö]/g, "o")
    .replace(/[ùúûü]/g, "u")
    .replace(/[^a-z0-9_]/g, "");
}

export default function VocabImage({ word, emoji, size = 72 }: Props) {
  const [failed, setFailed] = useState(false);
  const slug = wordToSlug(word);

  if (!failed) {
    return (
      <img
        src={`/vocab-images/${slug}.png`}
        alt={word}
        onError={() => setFailed(true)}
        style={{
          width: size,
          height: size,
          objectFit: "contain",
          filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.12))",
        }}
      />
    );
  }

  return (
    <span
      style={{
        fontSize: size * 0.78,
        lineHeight: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
      }}
    >
      {emoji}
    </span>
  );
}
