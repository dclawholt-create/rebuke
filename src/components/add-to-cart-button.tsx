"use client";

import { useState } from "react";
import { useCart } from "@/components/cart-provider";
import type { Product } from "@/lib/site";

export function AddToCartButton({ product, fullWidth = false }: { product: Product; fullWidth?: boolean }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
  }

  return (
    <button
      onClick={handleClick}
      className={`rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-medium text-black transition hover:bg-[color:var(--accent-strong)] ${fullWidth ? "w-full" : ""}`}
    >
      {added ? "Added" : "Add to cart"}
    </button>
  );
}
