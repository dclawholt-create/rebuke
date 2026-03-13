const navItems = ["Story", "Coffee", "Wholesale", "Ministry", "Contact"];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <div>
          <div className="text-xs uppercase tracking-[0.35em] text-white/55">I Am Church</div>
          <div className="text-lg font-semibold tracking-[0.18em] text-white">REBUKE COFFEE</div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-white/72 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-[color:var(--line)] bg-white/8 px-5 py-2 text-sm text-white transition hover:border-[color:var(--accent)] hover:bg-white/12"
        >
          Start a wholesale account
        </a>
      </div>
    </header>
  );
}
