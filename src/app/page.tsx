import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { CatalogGrid } from "@/components/catalog-grid";
import { Header } from "@/components/header";
import { NewsletterForm } from "@/components/newsletter-form";
import { featuredProducts } from "@/lib/site";

const heroBackgroundImage =
  "https://images.unsplash.com/photo-1631115609227-827c0147150e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const editorialCoffeeImage =
  "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const proofPoints = [
  { label: "Who it serves", value: "Church hospitality ministries" },
  { label: "Who operates it", value: "I AM Church" },
  { label: "Why it matters", value: "Every order supports ministry" },
];

const operatingPoints = [
  {
    title: "Serve other churches well",
    copy:
      "Offer churches a coffee brand they can actually use in lobbies, welcome spaces, staff rooms, and ministry events.",
  },
  {
    title: "Keep the offer simple",
    copy:
      "Lead with a focused product line and clear wholesale story instead of making buyers sort through too many messages.",
  },
  {
    title: "Support I AM Church ministry",
    copy:
      "Rebuke is operated by I AM Church, so the business itself becomes a practical way to fund and strengthen the ministry.",
  },
];

const rolloutSteps = [
  {
    number: "01",
    title: "Offer coffee churches already need",
    copy: "Start with a flagship roast, a balanced house blend, and one cafe-tier option built for hospitality ministries.",
  },
  {
    number: "02",
    title: "Market to church hospitality teams",
    copy: "Position Rebuke as a wholesale coffee partner for churches serving guests, members, volunteers, and ministry events.",
  },
  {
    number: "03",
    title: "Let every order carry ministry impact",
    copy: "Use the launch list to build partner interest while making it clear that purchases help support the work of I AM Church.",
  },
];

export default function Home() {
  return (
    <main>
      <Header />

      <section className="relative overflow-hidden px-6 pb-20 pt-8 lg:px-10 lg:pb-24 lg:pt-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-28"
          style={{ backgroundImage: `url(${heroBackgroundImage})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,6,5,0.78),rgba(7,6,5,0.92)_38%,rgba(7,6,5,0.98))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(211,163,107,0.14),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.08),transparent_18%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-white/62">
              Operated by I AM Church for church hospitality, wholesale, and ministry support
            </div>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              Coffee for church hospitality, built to support I AM Church ministry.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
              Rebuke Coffee is operated by <span className="text-white">I AM Church</span> and offered to other
              churches that buy coffee for hospitality ministries. The goal is simple: serve churches with a premium
              coffee brand while generating support for our church&apos;s ministry work.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#coffee"
                className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-medium text-black transition hover:bg-[color:var(--accent-strong)]"
              >
                View featured coffees
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm text-white transition hover:border-[color:var(--accent)] hover:bg-white/10"
              >
                Get church partner updates
              </a>
            </div>

            <div className="mt-12 grid gap-5 border-y border-white/10 py-6 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div key={point.label}>
                  <div className="text-sm font-medium text-white">{point.value}</div>
                  <div className="mt-2 text-sm leading-6 text-white/46">{point.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 blur-3xl" style={{ background: "var(--gold-glow)" }} />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div
                className="relative min-h-[36rem] overflow-hidden rounded-[1.6rem] border border-white/10 bg-cover bg-center"
                style={{ backgroundImage: `url(${editorialCoffeeImage})` }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,6,5,0.12),rgba(8,6,5,0.82))]" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="text-[11px] uppercase tracking-[0.32em] text-white/62">Flagship concept</div>
                  <div className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.05em] text-white">
                    Premium enough for church hospitality. Purposeful enough to support ministry.
                  </div>
                  <div className="mt-8 grid gap-3 border-t border-white/10 pt-5 text-sm text-white/68 sm:grid-cols-3">
                    <div>Operated by I AM Church</div>
                    <div>Sold to other churches</div>
                    <div>Built for hospitality teams</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-6 backdrop-blur-sm lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/42">Why this direction works</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                A church-operated coffee brand with a clearer purpose.
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {operatingPoints.map((point) => (
                <div key={point.title} className="border-l border-white/10 pl-5 first:border-l-0 first:pl-0">
                  <h3 className="text-base font-medium text-white">{point.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/56">{point.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-white/42">How it rolls out</div>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Make it obvious who runs it, who it serves, and why it exists.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/62 sm:text-lg">
              Rebuke Coffee should read as a practical extension of I AM Church: a premium coffee business that serves
              other churches and helps fund ministry through every bag sold.
            </p>
          </div>

          <div className="space-y-5">
            {rolloutSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition hover:border-[color:var(--accent)]/35"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-white/38">{step.number}</div>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">{step.title}</h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-white/58">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="coffee" className="px-6 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/42">Featured coffees</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                Coffees other churches can confidently serve.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/58 sm:text-lg">
              Start with a focused lineup built for welcome centers, staff rooms, Sunday hospitality, and ministry
              events. Keep the buying decision easy for church teams.
            </p>
          </div>

          <div className="mt-12">
            <CatalogGrid products={featuredProducts.slice(0, 3)} />
          </div>

          <div className="mt-10">
            <Link
              href="/catalog"
              className="inline-flex rounded-full border border-white/12 px-5 py-3 text-sm text-white transition hover:border-[color:var(--accent)] hover:bg-white/6"
            >
              Browse the full catalog
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-24 pt-10 lg:px-10 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8 backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-white/42">Launch list</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Connect with churches interested in wholesale coffee.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              Capture interest from pastors, administrators, and hospitality leaders who want to buy coffee for their
              churches while supporting the ministry of I AM Church.
            </p>
            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <BrandLogo className="h-12 w-56" imageClassName="object-left" sizes="224px" />
              <div className="mt-4 text-sm leading-7 text-white/50">
                Operated by I AM Church
                <br />
                Wholesale coffee for church hospitality ministries
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-black/24 p-6 sm:p-8">
            <div className="mb-6 text-sm uppercase tracking-[0.28em] text-white/42">Church partner updates</div>
            <NewsletterForm />
            <div className="mt-8 border-t border-white/8 pt-6 text-sm leading-7 text-white/50">
              This form is intended for churches interested in buying coffee for hospitality and ministry use. Once the
              environment values are set and the SQL is applied, it becomes the live inquiry layer for church partners.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
