import { Headphone } from "@/data/headphones";

export function HeadphoneCard({ headphone }: { headphone: Headphone }) {
  return (
    <div className="group rounded-3xl border border-black/10 bg-white p-6 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.45)] transition hover:-translate-y-1 hover:shadow-[0_30px_70px_-45px_rgba(0,0,0,0.55)]">
      <div className="relative">
        <div className="absolute top-0 left-0 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-zinc-500">
          <span className="h-[1px] w-6 bg-red-600" />
          Pick {headphone.pickNumber}
        </div>
        <div className="w-full h-48 rounded-2xl mb-5 flex items-center justify-center border border-black/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_rgba(226,226,226,0.6))]">
          <span className="text-zinc-400 text-sm">Product silhouette</span>
        </div>
      </div>
      <div className="space-y-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            {headphone.brand}
          </p>
          <h3 className="text-lg font-semibold text-zinc-950 mt-1">
            {headphone.name}
          </h3>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-semibold text-zinc-950">
            ${headphone.price}
          </span>
          {headphone.originalPrice && (
            <span className="text-sm text-zinc-400 line-through">
              ${headphone.originalPrice}
            </span>
          )}
        </div>
        <p className="text-sm text-zinc-600 line-clamp-2">
          {headphone.description}
        </p>
        <div className="flex items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-1 text-sm text-zinc-700">
            <span className="text-red-600">●</span>
            Rated {headphone.rating}
          </div>
          <button className="rounded-full border border-black/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-700 transition group-hover:border-red-600/40 group-hover:text-zinc-900">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
