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
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-6 shadow-[0_2px_0_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)] ${
        featured ? "border-emerald-300 ring-1 ring-emerald-100" : "border-slate-200"
      }`}
    >
      <div className="pointer-events-none absolute -right-16 -top-20 h-44 w-44 rounded-full bg-emerald-100/70 blur-3xl" />
      <div className="relative z-10 flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
            Pick #{headphone.pickNumber}
          </span>
          {featured && (
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Best overall
            </span>
          )}
        </div>
        <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
          {headphone.rating}/5
        </span>
      </div>

      <div className="relative z-10 mt-6 rounded-2xl border border-slate-100 bg-gradient-to-b from-slate-50 via-white to-white p-4">
        <div className="flex h-44 items-center justify-center">
          <img
            src={headphone.imageUrl}
            alt={`${headphone.brand} ${headphone.name}`}
            className="h-40 w-full object-contain transition duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      </div>

      <div className="relative z-10 mt-5 flex flex-1 flex-col">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
            {headphone.brand}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">{headphone.name}</h3>
        </div>

        <p className="mt-3 text-sm text-slate-600 line-clamp-2">{headphone.description}</p>

        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold text-slate-900">${headphone.price}</span>
              {headphone.originalPrice && (
                <span className="text-sm text-slate-400 line-through">
                  ${headphone.originalPrice}
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500">Editors&apos; score</p>
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
            View details
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
