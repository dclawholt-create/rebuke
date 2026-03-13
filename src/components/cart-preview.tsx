"use client";

import { useCart } from "@/components/cart-provider";

export function CartPreview() {
  const { items, subtotal, toggleCart } = useCart();
  const shipping = items.length > 0 ? 8 : 0;
  const total = subtotal + shipping;

  return (
    <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-white/42">Live mock cart</div>
          <div className="mt-2 text-2xl font-semibold text-white">A premium checkout story</div>
        </div>
        <div className="rounded-full border border-[color:var(--accent)]/50 px-3 py-1 text-xs uppercase tracking-[0.24em] text-[color:var(--accent)]">
          Interactive
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {items.slice(0, 3).map((item) => (
          <div key={item.slug} className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/4 px-4 py-4">
            <div>
              <div className="text-sm font-medium text-white">{item.name}</div>
              <div className="mt-1 text-sm text-white/48">{item.quantity} × {item.size}</div>
            </div>
            <div className="text-sm text-white/78">{item.price}</div>
          </div>
        ))}
        {items.length === 0 ? <div className="rounded-2xl border border-white/8 bg-white/4 px-4 py-4 text-sm text-white/58">Add products to start the mock order.</div> : null}
      </div>

      <div className="mt-8 space-y-3 border-t border-white/8 pt-6 text-sm text-white/58">
        <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
        <div className="flex justify-between"><span>Estimated shipping</span><span>${shipping.toFixed(2)}</span></div>
        <div className="flex justify-between text-base font-medium text-white"><span>Total</span><span>${total.toFixed(2)}</span></div>
      </div>

      <button onClick={toggleCart} className="mt-8 w-full rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-medium text-black transition hover:bg-[color:var(--accent-strong)]">
        Open cart
      </button>
    </div>
  );
}
