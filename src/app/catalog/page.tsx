import Link from "next/link";
import { CartPreview } from "@/components/cart-preview";
import { CatalogGrid } from "@/components/catalog-grid";
import { Header } from "@/components/header";
import { collections, featuredProducts } from "@/lib/site";

export default function CatalogPage() {
  return (
    <main>
      <Header />
      <section className="px-6 pb-20 pt-16 lg:px-10 lg:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/45">Full catalog</div>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
                A mock storefront with enough range to feel like a real coffee brand.
              </h1>
            </div>
            <Link
              href="/"
              className="rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm text-white transition hover:border-[color:var(--accent)] hover:bg-white/10"
            >
              Back home
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {collections.map((collection) => (
              <div key={collection.name} className="rounded-[2rem] border border-white/10 bg-white/4 p-6">
                <div className="text-lg font-semibold text-white">{collection.name}</div>
                <p className="mt-3 text-sm leading-7 text-white/58">{collection.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <CatalogGrid products={featuredProducts} />
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/4 p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-white/42">Mock merchandising notes</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">How I’d position the launch</h2>
              <div className="mt-6 space-y-4 text-base leading-8 text-white/64">
                <p>Lead with Rebuke Roast, Upper Room Blend, and Watch & Pray Decaf as the core set.</p>
                <p>Use Loaves & Fishes Espresso to signal quality to churches serious about their café identity.</p>
                <p>Keep Coram Deo Cold Brew as a limited seasonal drop so the brand has freshness and event energy.</p>
              </div>
            </div>
            <CartPreview />
          </div>
        </div>
      </section>
    </main>
  );
}
