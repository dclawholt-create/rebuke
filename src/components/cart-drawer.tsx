"use client";

import { useCart } from "@/components/cart-provider";

export function CartDrawer() {
  const { items, subtotal, count, isOpen, toggleCart, closeCart, removeItem } = useCart();
  const shipping = items.length > 0 ? 8 : 0;
  const total = subtotal + shipping;

  return (
    <>
      <button
        onClick={toggleCart}
        className="fixed bottom-6 right-6 z-50 rounded-full border border-white/12 bg-black/70 px-5 py-3 text-sm text-white shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl transition hover:border-[color:var(--accent)]"
      >
        Cart · {count}
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={closeCart}>
          <aside
            className="absolute right-0 top-0 h-full w-full max-w-md border-l border-white/10 bg-[#090807]/95 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-white/42">Cart</div>
                <div className="mt-2 text-2xl font-semibold text-white">Your mock order</div>
              </div>
              <button onClick={closeCart} className="text-sm text-white/58 transition hover:text-white">
                Close
              </button>
            </div>

            <div className="mt-8 space-y-4">
              {items.length === 0 ? (
                <div className="rounded-2xl border border-white/8 bg-white/4 p-5 text-white/58">Your cart is empty.</div>
              ) : null}

              {items.map((item) => (
                <div key={item.slug} className="rounded-2xl border border-white/8 bg-white/4 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-medium text-white">{item.name}</div>
                      <div className="mt-1 text-sm text-white/48">{item.quantity} × {item.size} · {item.roast}</div>
                    </div>
                    <button onClick={() => removeItem(item.slug)} className="text-xs uppercase tracking-[0.2em] text-white/40 transition hover:text-white">
                      Remove
                    </button>
                  </div>
                  <div className="mt-4 text-sm text-white/72">{item.price}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3 border-t border-white/8 pt-6 text-sm text-white/58">
              <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Estimated shipping</span><span>${shipping.toFixed(2)}</span></div>
              <div className="flex justify-between text-base font-medium text-white"><span>Total</span><span>${total.toFixed(2)}</span></div>
            </div>

            <button className="mt-8 w-full rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-medium text-black transition hover:bg-[color:var(--accent-strong)]">
              Mock checkout
            </button>
          </aside>
        </div>
      ) : null}
    </>
  );
}
