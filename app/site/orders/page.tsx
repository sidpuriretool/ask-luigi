"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { headphones } from "@/data/headphones";

type OrderItem = {
  headphoneId: number;
  quantity: number;
};

type Order = {
  id: number;
  email: string;
  name: string;
  address: string;
  items: OrderItem[];
  subtotal: number;
  created_at: string;
};

export default function OrdersPage() {
  const router = useRouter();
  const { status } = useSession();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/site/login?returnUrl=/site/orders");
      return;
    }

    if (status === "authenticated") {
      async function fetchOrders() {
        try {
          const res = await fetch("/api/orders");
          const data = await res.json();
          if (!res.ok) {
            if (res.status === 401) {
              router.replace("/site/login?returnUrl=/site/orders");
              return;
            }
            setError(data.error ?? "Failed to load orders");
            return;
          }
          setOrders(data.orders ?? []);
        } catch (err) {
          setError(err instanceof Error ? err.message : "Failed to load orders");
        } finally {
          setLoading(false);
        }
      }
      fetchOrders();
    }
  }, [status, router]);

  const getHeadphoneById = (id: number) => {
    return headphones.find((h) => h.id === id);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f8f4] text-slate-900">
      <SiteHeader />

      <main className="mx-auto w-full max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-950">Your Orders</h1>
        <p className="mt-2 text-sm text-slate-600">View your order history.</p>

        {loading ? (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 text-center">
            <p className="text-lg font-medium text-slate-900">Loading orders...</p>
          </div>
        ) : error ? (
          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
            <p className="text-lg font-medium text-red-900">Error loading orders</p>
            <p className="mt-2 text-sm text-red-700">{error}</p>
          </div>
        ) : orders.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 text-center">
            <p className="text-lg font-medium text-slate-900">No orders yet.</p>
            <p className="mt-2 text-sm text-slate-600">You haven't placed any orders yet.</p>
            <Link
              href="/site"
              className="mt-5 inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Browse headphones
            </Link>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            {orders.map((order) => (
              <article
                key={order.id}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <h2 className="text-lg font-semibold text-slate-950">
                        Order #{order.id}
                      </h2>
                      <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                        Completed
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-slate-600">
                      {formatDate(order.created_at)}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Total
                    </p>
                    <p className="text-2xl font-semibold text-slate-950">
                      ${order.subtotal}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-6 border-t border-slate-200 pt-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Customer
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-900">{order.name}</p>
                    <p className="text-sm text-slate-600">{order.email}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Shipping address
                    </p>
                    <p className="mt-2 text-sm text-slate-700">{order.address}</p>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Items
                  </p>
                  <ul className="mt-4 space-y-3">
                    {order.items.map((item, idx) => {
                      const headphone = getHeadphoneById(item.headphoneId);
                      if (!headphone) {
                        return (
                          <li
                            key={idx}
                            className="flex items-center justify-between text-sm text-slate-500"
                          >
                            <span>Unknown product (ID: {item.headphoneId})</span>
                            <span>× {item.quantity}</span>
                          </li>
                        );
                      }
                      return (
                        <li
                          key={idx}
                          className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-3"
                        >
                          <div className="h-16 w-20 rounded-lg border border-slate-200 bg-white p-2">
                            <img
                              src={headphone.imageUrl}
                              alt={`${headphone.brand} ${headphone.name}`}
                              className="h-full w-full object-contain"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-slate-900">
                              {headphone.name}
                            </p>
                            <p className="text-xs text-slate-600">{headphone.brand}</p>
                            <p className="mt-1 text-xs text-slate-700">
                              ${headphone.price} × {item.quantity}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold text-slate-900">
                              ${headphone.price * item.quantity}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
