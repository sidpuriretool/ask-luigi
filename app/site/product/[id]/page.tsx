import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader, ViewCartLink } from "@/components/site-header";
import { headphones } from "@/data/headphones";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: idParam } = await params;
  const id = Number(idParam);
  const headphone = headphones.find((item) => item.id === id);
  const comparisons = {
    2: {
      columns: [
        { key: "qcUltra", label: "Bose QC Ultra" },
        { key: "sony", label: "Sony WH-1000XM5" },
        { key: "airpods", label: "AirPods Max" },
      ],
      rows: [
        {
          label: "Noise cancellation rating (/10)",
          values: { qcUltra: "9.5", sony: "9.1", airpods: "9.0" },
        },
        {
          label: "Battery life (hours)",
          values: { qcUltra: "24", sony: "30", airpods: "20" },
        },
        {
          label: "Weight (grams)",
          values: { qcUltra: "250", sony: "250", airpods: "384.8" },
        },
        {
          label: "Price",
          values: { qcUltra: "$429.00", sony: "$299.99", airpods: "$549.00" },
        },
      ],
      note:
        "Noise cancellation ratings use RTINGS noise isolation scores. Prices are current as of February 16, 2026 from official stores.",
    },
    3: {
      columns: [
        { key: "airpods", label: "AirPods Max" },
        { key: "sony", label: "Sony WH-1000XM5" },
        { key: "qcUltra", label: "Bose QC Ultra" },
      ],
      rows: [
        {
          label: "Noise cancellation rating (/10)",
          values: { airpods: "9.0", sony: "9.1", qcUltra: "9.5" },
        },
        {
          label: "Battery life (hours)",
          values: { airpods: "20", sony: "30", qcUltra: "24" },
        },
        {
          label: "Weight (grams)",
          values: { airpods: "384.8", sony: "250", qcUltra: "250" },
        },
        {
          label: "Price",
          values: { airpods: "$549.00", sony: "$299.99", qcUltra: "$429.00" },
        },
      ],
      note:
        "Noise cancellation ratings use RTINGS noise isolation scores. Prices are current as of February 16, 2026 from official stores.",
    },
  } as const;
  const comparison = headphone ? comparisons[headphone.id as 2 | 3] : undefined;

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
            {comparison && (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  How it compares
                </p>
                <div className="mt-3 overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-xs uppercase tracking-[0.2em] text-slate-500">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Spec</th>
                        {comparison.columns.map((column) => (
                          <th key={column.key} className="px-4 py-3 font-semibold">
                            {column.label}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-slate-700">
                      {comparison.rows.map((row) => (
                        <tr
                          key={row.label}
                          className="border-t border-slate-200"
                        >
                          <td className="px-4 py-3 font-medium text-slate-600">
                            {row.label}
                          </td>
                          {comparison.columns.map((column) => (
                            <td key={column.key} className="px-4 py-3">
                              {row.values[column.key]}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs text-slate-500">
                  {comparison.note}
                </p>
              </div>
            )}

            <div className="flex items-center gap-3">
              <AddToCartButton headphoneId={headphone.id} />
              <ViewCartLink
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900"
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
