import { describe, expect, it } from "vitest";
import { sanitizeCartItems } from "@/components/cart-provider";
import { headphones } from "@/data/headphones";

describe("sanitizeCartItems", () => {
  it("returns empty array for non-array input", () => {
    expect(sanitizeCartItems(null)).toEqual([]);
    expect(sanitizeCartItems(undefined)).toEqual([]);
    expect(sanitizeCartItems("")).toEqual([]);
    expect(sanitizeCartItems({})).toEqual([]);
  });

  it("returns empty array for invalid entry shape", () => {
    expect(sanitizeCartItems([{}])).toEqual([]);
    expect(sanitizeCartItems([{ headphoneId: "x", quantity: 1 }])).toEqual([]);
  });

  it("filters out entries with unknown headphoneId", () => {
    const result = sanitizeCartItems([
      { headphoneId: 99999, quantity: 1 },
    ]);
    expect(result).toEqual([]);
  });

  it("returns valid CartItems for valid input", () => {
    const firstId = headphones[0].id;
    const result = sanitizeCartItems([
      { headphoneId: firstId, quantity: 2 },
    ]);
    expect(result).toHaveLength(1);
    expect(result[0].headphone.id).toBe(firstId);
    expect(result[0].headphone.name).toBe(headphones[0].name);
    expect(result[0].quantity).toBe(2);
  });

  it("clamps quantity to at least 1 and floors to integer", () => {
    const firstId = headphones[0].id;
    const result = sanitizeCartItems([
      { headphoneId: firstId, quantity: 0.7 },
    ]);
    expect(result).toHaveLength(1);
    expect(result[0].quantity).toBe(1);
  });
});
