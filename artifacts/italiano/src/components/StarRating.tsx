import { Star } from "lucide-react";

export function StarRating() {
  return (
    <div className="flex items-center justify-center gap-1 mt-1">
      {[1, 2, 3].map((star) => (
        <Star
          key={star}
          className="w-4 h-4 text-slate-200 fill-zinc-100"
          strokeWidth={2}
        />
      ))}
    </div>
  );
}
