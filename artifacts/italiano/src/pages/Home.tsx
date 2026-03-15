import { Link } from "wouter";
import { motion } from "framer-motion";
import { categories } from "@/data/vocabulary";
import { StarRating } from "@/components/StarRating";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-full pb-8">
      {/* Header */}
      <header className="pt-12 pb-6 px-6 relative z-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="bg-white/80 backdrop-blur-md border border-white shadow-sm rounded-3xl p-4 text-center"
        >
          <h1 className="text-2xl font-display text-primary drop-shadow-sm leading-snug">
            تعلم اللغة الإيطالية<br />
            <span className="text-xl">learn Italian 🇮🇹</span>
          </h1>
          <p className="text-sm text-slate-500 mt-1 font-semibold">
            Tocca una categoria per iniziare!
          </p>
        </motion.div>
      </header>

      {/* Grid */}
      <main className="flex-1 px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-4 sm:gap-6"
        >
          {categories.map((cat) => (
            <Link key={cat.id} href={`/category/${cat.id}`} className="block outline-none">
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="bg-white rounded-[2rem] p-4 flex flex-col items-center justify-center card-pop cursor-pointer"
              >
                <div
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-5xl sm:text-6xl mb-3 shadow-inner ${cat.color}`}
                >
                  {cat.emoji}
                </div>
                <h2 className="font-display font-bold text-lg text-slate-800 tracking-wide text-center">
                  {cat.name}
                </h2>
                <StarRating />
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
