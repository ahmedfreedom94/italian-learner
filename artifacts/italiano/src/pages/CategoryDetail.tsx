import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ChevronLeft, Volume2 } from "lucide-react";
import { categories } from "@/data/vocabulary";
import { speakItalian } from "@/lib/speech";
import CalendarCard, { isCalendarWord } from "@/components/CalendarCard";
import SeasonCard, { isSeasonWord } from "@/components/SeasonCard";
import ApplianceCard, { isApplianceWord } from "@/components/ApplianceCard";
import VocabImage from "@/components/VocabImage";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

function WordCard({
  emoji,
  word,
  categoryId,
  cols = 3,
}: {
  emoji: string;
  word: string;
  categoryId: string;
  cols?: 2 | 3;
}) {
  const useCalendar = isCalendarWord(word, categoryId);
  const useSeason = isSeasonWord(word);
  const useAppliance = categoryId === "elettrodomestici" && isApplianceWord(word);
  const large = cols === 2;

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-2xl p-3 flex flex-col items-center justify-between card-pop border border-slate-50"
    >
      <div
        className="flex items-center justify-center my-2 w-full"
        style={{ minHeight: large ? "130px" : "60px" }}
      >
        {useCalendar ? (
          <CalendarCard word={word} categoryId={categoryId} large={large} />
        ) : useSeason ? (
          <div className="w-full px-2" style={{ maxWidth: large ? "160px" : "72px" }}>
            <SeasonCard word={word} />
          </div>
        ) : useAppliance ? (
          <ApplianceCard word={word} />
        ) : /^\d[\d\s]*$/.test(emoji) ? (
          <span
            className="font-bold text-slate-700 leading-none text-center break-all"
            style={{
              fontSize:
                emoji.replace(/\s/g, "").length <= 3
                  ? "2.4rem"
                  : emoji.replace(/\s/g, "").length <= 5
                  ? "1.6rem"
                  : "1.1rem",
            }}
          >
            {emoji}
          </span>
        ) : (
          <VocabImage word={word} emoji={emoji} size={large ? 80 : 72} />
        )}
      </div>

      <div className="w-full flex flex-col items-center mt-auto">
        <span
          className="font-display font-bold text-[11px] sm:text-sm text-slate-700 uppercase text-center mb-2 line-clamp-2 w-full"
          title={word}
        >
          {word}
        </span>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => speakItalian(word)}
          className="w-full bg-secondary text-white p-2 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
          aria-label={`Pronuncia ${word}`}
        >
          <Volume2 className="w-5 h-5" strokeWidth={2.5} />
        </motion.button>
      </div>
    </motion.div>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 px-1 my-2">
      <div className="flex-1 h-px bg-slate-200" />
      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</span>
      <div className="flex-1 h-px bg-slate-200" />
    </div>
  );
}

export default function CategoryDetail() {
  const { id } = useParams();
  const category = categories.find((c) => c.id === id);

  if (!category) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center h-full p-6 text-center">
        <h2 className="text-2xl font-display text-slate-700 mb-4">Categoria non trovata!</h2>
        <Link href="/" className="bg-primary text-white px-6 py-3 rounded-xl font-bold card-pop inline-block">
          Torna alla Home
        </Link>
      </div>
    );
  }

  const isMesi = category.id === "mesi-stagioni";
  const isGiorni = category.id === "giorni-settimana";
  const isCalendarCat = isMesi || isGiorni;

  const calendarWords = isCalendarCat ? category.words.filter((w) => isCalendarWord(w.word, category.id)) : [];
  const seasonWords = isMesi ? category.words.filter((w) => isSeasonWord(w.word)) : [];
  const otherWords = isCalendarCat
    ? category.words.filter((w) => !isCalendarWord(w.word, category.id) && !isSeasonWord(w.word))
    : category.words;

  return (
    <div className="flex flex-col min-h-full pb-8">
      {/* Header */}
      <header className="pt-8 pb-6 px-4 flex items-center gap-4 relative z-10">
        <Link href="/" className="block outline-none">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center card-pop text-slate-600"
          >
            <ChevronLeft className="w-7 h-7" strokeWidth={3} />
          </motion.button>
        </Link>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 bg-white rounded-2xl py-3 px-4 shadow-sm border border-white flex items-center gap-3"
        >
          <span className="text-2xl">{category.emoji}</span>
          <h1 className="text-xl font-display font-bold text-slate-800 tracking-wide mt-1">
            {category.name}
          </h1>
        </motion.div>
      </header>

      <main className="flex-1 px-4 space-y-4">
        {/* Calendar section – 2 columns */}
        {calendarWords.length > 0 && (
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-2 gap-4">
            {calendarWords.map((word, i) => (
              <WordCard key={i} emoji={word.emoji} word={word.word} categoryId={category.id} cols={2} />
            ))}
          </motion.div>
        )}

        {/* Seasons section – 2 columns with illustrated SVG cards */}
        {seasonWords.length > 0 && (
          <>
            <SectionDivider label="Stagioni" />
            <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-2 gap-4">
              {seasonWords.map((word, i) => (
                <WordCard key={i} emoji={word.emoji} word={word.word} categoryId={category.id} cols={2} />
              ))}
            </motion.div>
          </>
        )}

        {/* Divider before other words */}
        {isCalendarCat && otherWords.length > 0 && (
          <SectionDivider label={isGiorni ? "Altro" : "Altro"} />
        )}

        {/* Remaining words – 3 columns */}
        {otherWords.length > 0 && (
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-3 gap-3 sm:gap-4">
            {otherWords.map((word, i) => (
              <WordCard key={i} emoji={word.emoji} word={word.word} categoryId={category.id} cols={3} />
            ))}
          </motion.div>
        )}
      </main>
    </div>
  );
}
