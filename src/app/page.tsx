import Link from "next/link";
import { CartPreview } from "@/components/cart-preview";
import { CatalogGrid } from "@/components/catalog-grid";
import { Header } from "@/components/header";
import { NewsletterForm } from "@/components/newsletter-form";
import { collections, featuredProducts, slogans, stats } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="relative overflow-hidden px-6 pb-24 pt-14 lg:px-10 lg:pb-32 lg:pt-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/60">
              Premium coffee for churches, teams, and ministry fundraising
            </div>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
              Rebuke fatigue.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
              Rebuke Coffee is a modern coffee brand from <span className="text-white">I Am Church</span> —
              crafted to help churches serve great coffee, build culture, and raise money for ministry.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#coffee"
                className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-medium text-black transition hover:bg-[color:var(--accent-strong)]"
              >
                Explore the catalog
              </a>
              <Link
                href="/catalog"
                className="rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm text-white transition hover:border-[color:var(--accent)] hover:bg-white/10"
              >
                Open full catalog
              </Link>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/8 bg-white/4 p-5 backdrop-blur-sm">
                  <div className="text-3xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-2 text-sm leading-6 text-white/55">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 blur-3xl" style={{ background: "var(--gold-glow)" }} />
            <div className="relative rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="rounded-[1.75rem] border border-white/10 bg-[#120e0b] p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/38">
                  <span>Launch slogans</span>
                  <span>Rebuke Coffee</span>
                </div>
                <div className="mt-8 space-y-4">
                  {slogans.map((slogan, index) => (
                    <div
                      key={slogan}
                      className={`rounded-2xl border px-5 py-4 text-lg tracking-[-0.03em] ${
                        index === 0
                          ? "border-[color:var(--accent)] bg-[rgba(211,163,107,0.12)] text-white"
                          : "border-white/8 bg-white/4 text-white/78"
                      }`}
                    >
                      {slogan}
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-2xl border border-white/8 bg-white/4 p-5 text-sm leading-7 text-white/60">
                  Elegant enough to feel premium. Clear enough to explain the mission.
                  Strong enough to sell to churches that care about both hospitality and ministry impact.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-white/4 p-8 backdrop-blur-xl lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-white/45">The story</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              A church brand that doesn&apos;t look like church clipart.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-white/68 sm:text-lg">
            <p>
              Rebuke Coffee is built for churches that want better hospitality, better branding, and a product people
              actually want to buy. The visual direction leans premium and minimal — more like a modern lifestyle brand
              than a typical fundraising page.
            </p>
            <p>
              The mission is simple: sell excellent coffee to churches and coffee-loving supporters, then turn that
              revenue into real ministry support for <span className="text-white">I Am Church</span>.
            </p>
            <p>
              You can mention your Baptist affiliation in the story and trust language, while keeping the brand itself
              broad enough to appeal to a wider Christian audience.
            </p>
          </div>
        </div>
      </section>

      <section id="coffee" className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/45">Catalog preview</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Mock products with enough personality to launch the brand.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
              I expanded the catalog beyond three products so the storefront feels real. The lineup mixes core blends,
              café-tier offerings, and a seasonal drop.
            </p>
          </div>

          <div className="mt-12">
            <CatalogGrid products={featuredProducts.slice(0, 6)} />
          </div>
        </div>
      </section>

      <section id="wholesale" className="px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-white/45">Wholesale + fundraising</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Sell to churches. Equip ministry. Build a serious coffee identity.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                ["Wholesale for churches", "Offer recurring supply for church cafés, hospitality teams, welcome centers, and events."],
                ["Fundraising built in", "Use product drops, branded blends, or church-specific campaigns to create new giving lanes."],
                ["Supabase-ready backend", "The app is scaffolded to support products, leads, and future order flows with Supabase."],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-7">
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-4 text-base leading-7 text-white/62">{copy}</p>
                </div>
              ))}
            </div>
          </div>

          <CartPreview />
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-xs uppercase tracking-[0.3em] text-white/45">Collections</div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {collections.map((collection) => (
              <div key={collection.name} className="rounded-[2rem] border border-white/10 bg-white/4 p-7">
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">{collection.name}</h3>
                <p className="mt-4 text-base leading-7 text-white/62">{collection.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ministry" className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[color:var(--accent)]/30 bg-[linear-gradient(180deg,rgba(211,163,107,0.16),rgba(255,255,255,0.04))] p-8 lg:p-12">
          <div className="text-xs uppercase tracking-[0.3em] text-white/45">Ministry impact</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Every bag should feel premium. Every purchase should feel purposeful.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">
            This is the part that sets the brand apart: Rebuke Coffee exists to support ministry work through I Am Church.
            The coffee is the product. The deeper story is discipleship, generosity, hospitality, and resourcing the local church.
          </p>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-white/4 p-8 backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-white/45">Contact + launch</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Build a launch list while the full storefront comes together.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/66 sm:text-lg">
              The form on the right is wired for Supabase. Once your environment variables are added and the SQL is run,
              this becomes a real lead capture flow for pastors, admins, and interested buyers.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-black/30 p-6 sm:p-8">
            <div className="mb-6 text-sm uppercase tracking-[0.28em] text-white/42">Launch updates</div>
            <NewsletterForm />
            <div className="mt-8 border-t border-white/8 pt-6 text-sm leading-7 text-white/50">
              Suggested contact email: hello@rebukecoffee.com<br />
              Suggested ministry line: Powered by I Am Church<br />
              Suggested trust note: Non-denominational church with Baptist affiliation
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
