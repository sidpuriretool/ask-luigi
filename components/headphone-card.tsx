import { Headphone } from "@/data/headphones";

export function HeadphoneCard({ headphone }: { headphone: Headphone }) {
  return (
    <div className="group bg-white/80 rounded-2xl border border-slate-200/80 p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
      <div className="relative mb-5">
        <div className="absolute top-3 left-3 rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-slate-500">
          Pick {headphone.pickNumber}
        </div>
        <div className="w-full h-48 rounded-xl bg-gradient-to-br from-white via-slate-50 to-[#efe9df] flex items-center justify-center border border-slate-200">
          <span className="text-slate-400 text-sm">Image</span>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
          {headphone.name}
            </h3>
            <p className="text-sm text-slate-500 mt-1">{headphone.brand}</p>
          </div>
          <span className="text-sm font-semibold text-slate-700">
            ★ {headphone.rating}
          </span>
        </div>
        <p className="text-sm text-slate-600 line-clamp-2">
          {headphone.description}
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-semibold text-slate-900">
            ${headphone.price}
          </span>
          {headphone.originalPrice && (
            <span className="text-sm text-slate-400 line-through">
              ${headphone.originalPrice}
            </span>
          )}
        </div>
        <button className="mt-2 inline-flex items-center justify-center rounded-full border border-slate-300/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-600 transition group-hover:border-slate-400 group-hover:text-slate-900">
          View details
        </button>
      </div>
    </div>
  );
}
