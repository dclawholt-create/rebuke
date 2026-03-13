import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { Header } from "@/components/header";
import { ProductVisual } from "@/components/product-visual";
import { featuredProducts, getProductBySlug } from "@/lib/site";

export function generateStaticParams() {
  return featuredProducts.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <Header />
      <section className="px-6 pb-20 pt-16 lg:px-10 lg:pt-20">
        <div className="mx-auto max-w-7xl">
          <Link href="/catalog" className="text-sm text-white/55 transition hover:text-white">
            ← Back to catalog
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <ProductVisual product={product} />

            <div className="rounded-[2rem] border border-white/10 bg-white/4 p-8 backdrop-blur-xl">
              {product.badge ? (
                <div className="inline-flex rounded-full border border-[color:var(--accent)]/40 px-3 py-1 text-xs uppercase tracking-[0.24em] text-[color:var(--accent)]">
                  {product.badge}
                </div>
              ) : null}
              <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">{product.name}</h1>
              <p className="mt-5 text-lg leading-8 text-white/68">{product.longDescription}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {product.notes.map((note) => (
                  <span key={note} className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/74">
                    {note}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/15 p-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-white/48">Roast</div>
                  <div className="mt-2 text-lg text-white">{product.roast}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/15 p-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-white/48">Size</div>
                  <div className="mt-2 text-lg text-white">{product.size}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/15 p-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-white/48">Price</div>
                  <div className="mt-2 text-lg text-white">{product.price}</div>
                </div>
              </div>
              <div className="mt-8 rounded-[1.5rem] border border-white/8 bg-black/20 p-5">
                <div className="text-xs uppercase tracking-[0.22em] text-white/42">Best ministry fit</div>
                <p className="mt-3 text-base leading-7 text-white/68">{product.ministryUse}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <AddToCartButton product={product} />
                <Link
                  href="/#contact"
                  className="rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm text-white transition hover:border-[color:var(--accent)] hover:bg-white/10"
                >
                  Ask about wholesale
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
