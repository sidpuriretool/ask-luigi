import { Headphone } from "@/data/headphones";

export function HeadphoneCard({ headphone }: { headphone: Headphone }) {
  return (
    <div className="bg-slate-900/80 rounded-2xl shadow-sm border border-slate-800 p-6 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/10 transition">
      <div className="relative">
        <div className="absolute top-0 left-0 bg-cyan-500/90 text-slate-900 text-xs font-bold px-2 py-1 rounded">
          #{headphone.pickNumber}
        </div>
        <div className="w-full h-48 bg-slate-950 rounded-xl mb-4 flex items-center justify-center border border-slate-800">
          <span className="text-slate-600 text-sm">Image</span>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-slate-100">{headphone.name}</h3>
        <p className="text-sm text-slate-400">{headphone.brand}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-slate-100">
            ${headphone.price}
          </span>
          {headphone.originalPrice && (
            <span className="text-sm text-slate-500 line-through">
              ${headphone.originalPrice}
            </span>
          )}
        </div>
        <p className="text-sm text-slate-300 line-clamp-2">{headphone.description}</p>
        <div className="flex items-center gap-1">
          <span className="text-amber-400">★</span>
          <span className="text-sm font-medium text-slate-100">{headphone.rating}</span>
        </div>
      </div>
    </div>
  );
}
