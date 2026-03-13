import Link from "next/link";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { ProductVisual } from "@/components/product-visual";
import type { Product } from "@/lib/site";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group rounded-[2rem] border border-white/10 bg-white/4 p-7 backdrop-blur-md transition hover:border-[color:var(--accent)]/40 hover:bg-white/6">
      <ProductVisual product={product} />

      <p className="mt-6 text-base leading-7 text-white/64">{product.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {product.notes.map((note) => (
          <span key={note} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/62">
            {note}
          </span>
        ))}
      </div>

      <div className="mt-8 flex items-end justify-between gap-4">
        <div>
          <div className="text-3xl font-semibold text-white">{product.price}</div>
          <div className="mt-1 text-sm text-white/45">Mock product pricing</div>
        </div>
        <Link
          href={`/catalog/${product.slug}`}
          className="rounded-full border border-white/12 px-4 py-2 text-sm text-white/84 transition hover:border-[color:var(--accent)] hover:text-white"
        >
          View product
        </Link>
      </div>

      <div className="mt-4">
        <AddToCartButton product={product} fullWidth />
      </div>
    </article>
  );
}
