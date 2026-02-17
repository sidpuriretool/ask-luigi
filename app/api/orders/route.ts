import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getDb } from "@/lib/db";

type OrderItem = {
  headphoneId: number;
  quantity: number;
};

type OrderRow = {
  id: number;
  email: string;
  name: string;
  address: string;
  items_json: string;
  subtotal: number;
  created_at: string;
};

function isValidItems(items: unknown): items is OrderItem[] {
  if (!Array.isArray(items) || items.length === 0) return false;
  return items.every(
    (item) =>
      typeof item === "object" &&
      item !== null &&
      typeof (item as { headphoneId?: unknown }).headphoneId === "number" &&
      Number.isFinite((item as { headphoneId: number }).headphoneId) &&
      typeof (item as { quantity?: unknown }).quantity === "number" &&
      Number.isInteger((item as { quantity: number }).quantity) &&
      (item as { quantity: number }).quantity > 0,
  );
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 },
      );
    }

    const db = getDb();
    const orders = db
      .prepare(
        `SELECT id, email, name, address, items_json, subtotal, created_at
         FROM orders
         WHERE email = ?
         ORDER BY created_at DESC`,
      )
      .all(session.user.email);

    return NextResponse.json({
      orders: (orders as OrderRow[]).map((order) => ({
        ...order,
        items: JSON.parse(order.items_json),
      })),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch orders";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const address =
      typeof body?.address === "string" ? body.address.trim() : "";
    const subtotal = Number(body?.subtotal);
    const items = body?.items;

    if (!name || !email || !address) {
      return NextResponse.json(
        { error: "name, email, and address are required" },
        { status: 400 },
      );
    }

    if (!isValidItems(items)) {
      return NextResponse.json(
        { error: "items must be a non-empty array" },
        { status: 400 },
      );
    }

    if (!Number.isFinite(subtotal) || subtotal <= 0) {
      return NextResponse.json(
        { error: "subtotal must be a positive number" },
        { status: 400 },
      );
    }

    const db = getDb();
    const insert = db.prepare(
      `INSERT INTO orders (email, name, address, items_json, subtotal)
       VALUES (?, ?, ?, ?, ?)`,
    );

    const result = insert.run(
      email,
      name,
      address,
      JSON.stringify(items),
      subtotal,
    );

    return NextResponse.json({
      id: result.lastInsertRowid,
      ok: true,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to place order";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
