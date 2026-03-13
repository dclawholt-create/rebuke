import type { Product } from "@/lib/site";

export function ProductVisual({ product }: { product: Product }) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${product.palette} p-8`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_32%)]" />
      <div className="relative mx-auto flex h-[22rem] max-w-[18rem] items-center justify-center">
        <div className="absolute h-64 w-64 rounded-full bg-black/25 blur-3xl" />
        <div className="relative w-[13rem] rounded-[2.2rem] border border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.06))] px-6 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.38)] backdrop-blur-sm">
          <div className="text-[10px] uppercase tracking-[0.32em] text-white/58">Rebuke Coffee</div>
          <div className="mt-10 text-3xl font-semibold tracking-[-0.05em] text-white">{product.name}</div>
          <div className="mt-3 text-sm uppercase tracking-[0.22em] text-white/56">{product.subtitle}</div>
          <div className="mt-10 border-t border-white/14 pt-4 text-xs uppercase tracking-[0.24em] text-white/62">
            {product.size} · {product.roast}
          </div>
        </div>
      </div>
    </div>
  );
}
