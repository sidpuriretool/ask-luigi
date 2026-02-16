import { Headphone } from "@/data/headphones";

export function HeadphoneCard({ headphone }: { headphone: Headphone }) {
  return (
    <div className="bg-white/80 rounded-2xl shadow-sm border border-amber-100 p-6 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-200/60 transition dark:bg-slate-900/80 dark:border-slate-800 dark:hover:border-amber-300/60 dark:hover:shadow-amber-500/10">
      <div className="relative">
        <div className="absolute top-0 left-0 bg-amber-400 text-amber-950 text-xs font-bold px-2 py-1 rounded dark:bg-amber-300 dark:text-amber-950">
          #{headphone.pickNumber}
        </div>
        <div className="w-full h-48 bg-amber-50 rounded-xl mb-4 flex items-center justify-center border border-amber-100 dark:bg-slate-950 dark:border-slate-800">
          <span className="text-amber-700/60 text-sm dark:text-amber-200/60">
            Image
          </span>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {headphone.name}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {headphone.brand}
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            ${headphone.price}
          </span>
          {headphone.originalPrice && (
            <span className="text-sm text-slate-400 line-through dark:text-slate-500">
              ${headphone.originalPrice}
            </span>
          )}
        </div>
        <p className="text-sm text-slate-600 line-clamp-2 dark:text-slate-300">
          {headphone.description}
        </p>
        <div className="flex items-center gap-1">
          <span className="text-amber-500 dark:text-amber-300">★</span>
          <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
            {headphone.rating}
          </span>
        </div>
      </div>
    </div>
  );
}
