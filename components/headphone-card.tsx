import Link from "next/link";
import { Headphone } from "@/data/headphones";

export function HeadphoneCard({
  headphone,
  featured = false,
}: {
  headphone: Headphone;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/site/product/${headphone.id}`}
      className={`block rounded-2xl border bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(15,23,42,0.12)] ${
        featured ? "border-emerald-300 ring-1 ring-emerald-100" : "border-slate-200"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Pick #{headphone.pickNumber}
        </div>
        {featured && (
          <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            Best Overall
          </div>
        )}
      </div>

      <div className="mt-5 overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
        <img
          src={headphone.imageUrl}
          alt={`${headphone.brand} ${headphone.name}`}
          className="h-48 w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="mt-5 space-y-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{headphone.name}</h3>
          <p className="text-sm text-slate-500">{headphone.brand}</p>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-semibold text-slate-900">${headphone.price}</span>
          {headphone.originalPrice && (
            <span className="text-sm text-slate-400 line-through">
              ${headphone.originalPrice}
            </span>
          )}
        </div>

        <p className="text-sm text-slate-600 line-clamp-2">{headphone.description}</p>

        <div className="flex items-center gap-2 text-sm text-slate-600">
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700">
            {headphone.rating}/5
          </span>
          <span className="text-slate-400">Editors&apos; score</span>
        </div>
      </div>
    </Link>
  );
}
