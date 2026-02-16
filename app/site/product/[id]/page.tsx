import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { headphones } from "@/data/headphones";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: idParam } = await params;
  const id = Number(idParam);
  const headphone = headphones.find((item) => item.id === id);

  if (!headphone) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f8f8f4] text-slate-900">
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl px-4 py-10">
        <Link
          href="/site"
          className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
        >
          ← Back to all picks
        </Link>

        <section className="mt-6 grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 md:grid-cols-[1fr_1.1fr] md:p-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <img
              src={headphone.imageUrl}
              alt={`${headphone.brand} ${headphone.name}`}
              className="h-full max-h-[420px] w-full object-contain"
            />
          </div>

          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Pick #{headphone.pickNumber} • {headphone.brand}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
              {headphone.name}
            </h1>
            <p className="text-lg text-slate-700">{headphone.description}</p>

            <div className="flex items-end gap-3">
              <span className="text-4xl font-semibold text-slate-950">
                ${headphone.price}
              </span>
              {headphone.originalPrice && (
                <span className="text-lg text-slate-400 line-through">
                  ${headphone.originalPrice}
                </span>
              )}
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Overview
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {headphone.longDescription}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Why we picked it
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {headphone.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-3">
              <AddToCartButton headphoneId={headphone.id} />
              <Link
                href="/site/cart"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900"
              >
                View cart
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
