import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 text-center">
      <div className="text-8xl mb-4">🙈</div>
      <h1 className="text-3xl font-display font-bold text-slate-800 mb-2">Ops!</h1>
      <p className="text-slate-600 mb-8 font-medium">
        La pagina che stai cercando non esiste.
      </p>
      <Link href="/" className="bg-primary text-white px-8 py-4 rounded-2xl font-bold font-display text-lg card-pop inline-block transition-transform hover:scale-105 active:scale-95">
        Torna alla Home
      </Link>
    </div>
  );
}
