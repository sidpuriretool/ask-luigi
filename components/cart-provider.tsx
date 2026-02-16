"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { headphones, type Headphone } from "@/data/headphones";

type CartItem = {
  headphone: Headphone;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addToCart: (headphoneId: number) => void;
  removeFromCart: (headphoneId: number) => void;
  updateQuantity: (headphoneId: number, quantity: number) => void;
  clearCart: () => void;
};

const STORAGE_KEY = "ask-luigi-cart-v1";

const CartContext = createContext<CartContextValue | null>(null);

export function sanitizeCartItems(raw: unknown): CartItem[] {
  if (!Array.isArray(raw)) return [];

  return raw
    .map((entry) => {
      const headphoneId = Number((entry as { headphoneId?: unknown }).headphoneId);
      const quantity = Number((entry as { quantity?: unknown }).quantity);

      if (!Number.isFinite(headphoneId) || !Number.isFinite(quantity)) {
        return null;
      }

      const headphone = headphones.find((item) => item.id === headphoneId);
      if (!headphone) return null;

      return {
        headphone,
        quantity: Math.max(1, Math.floor(quantity)),
      };
    })
    .filter((item): item is CartItem => item !== null);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) return;
      const parsed = JSON.parse(stored);
      setItems(sanitizeCartItems(parsed));
    } catch {
      setItems([]);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const serialized = items.map((item) => ({
      headphoneId: item.headphone.id,
      quantity: item.quantity,
    }));

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(serialized));
  }, [items]);

  const addToCart = useCallback((headphoneId: number) => {
    const selected = headphones.find((item) => item.id === headphoneId);
    if (!selected) return;

    setItems((prev) => {
      const existing = prev.find((item) => item.headphone.id === headphoneId);
      if (!existing) {
        return [...prev, { headphone: selected, quantity: 1 }];
      }

      return prev.map((item) =>
        item.headphone.id === headphoneId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });
  }, []);

  const removeFromCart = useCallback((headphoneId: number) => {
    setItems((prev) => prev.filter((item) => item.headphone.id !== headphoneId));
  }, []);

  const updateQuantity = useCallback((headphoneId: number, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.headphone.id !== headphoneId));
      return;
    }

    const nextQuantity = Math.max(1, Math.floor(quantity));
    setItems((prev) =>
      prev.map((item) =>
        item.headphone.id === headphoneId
          ? { ...item, quantity: nextQuantity }
          : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce(
      (sum, item) => sum + item.headphone.price * item.quantity,
      0
    );

    return {
      items,
      itemCount,
      subtotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    };
  }, [items, addToCart, removeFromCart, updateQuantity, clearCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider.");
  }
  return context;
}

export type { CartItem };
