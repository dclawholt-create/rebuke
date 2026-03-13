"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";
import { featuredProducts, type Product } from "@/lib/site";

type CartItem = Product & { quantity: number };

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (slug: string) => void;
  toggleCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function parsePrice(price: string) {
  return Number(price.replace(/[^0-9.]/g, ""));
}

const starterItems: CartItem[] = [
  { ...featuredProducts[0], quantity: 1 },
  { ...featuredProducts[1], quantity: 1 },
];

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(starterItems);
  const [isOpen, setIsOpen] = useState(false);

  function addItem(product: Product) {
    setItems((current) => {
      const existing = current.find((item) => item.slug === product.slug);
      if (existing) {
        return current.map((item) =>
          item.slug === product.slug ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });
    setIsOpen(true);
  }

  function removeItem(slug: string) {
    setItems((current) => current.filter((item) => item.slug !== slug));
  }

  function toggleCart() {
    setIsOpen((open) => !open);
  }

  function closeCart() {
    setIsOpen(false);
  }

  const value = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);

    return {
      items,
      count,
      subtotal,
      isOpen,
      addItem,
      removeItem,
      toggleCart,
      closeCart,
    };
  }, [isOpen, items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
