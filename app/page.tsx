const DISCORD_HREF = "https://discord.gg/CKVagmChkd";
const BUY_HREF = "/buy-and-manage-proxies";

/* ── Proxy Type Guide ── */
const PROXY_TYPES = [
  { icon: "🟦", site: "Walmart", type: "Dynamic" as const },
  { icon: "🟩", site: "Sam's Club", type: "Dynamic" as const },
  { icon: "🟪", site: "Popmart", type: "Dynamic" as const },
  { icon: "🛍️", site: "Shopify", type: "Static" as const },
  { icon: "🎴", site: "Pokémon Center", type: "Static" as const },
  { icon: "💻", site: "Best Buy", type: "Static" as const },
];

/* ── Pricing Tiers ── */
const PLANS = [
  { name: "Starter", gb: 5, price: 30, tag: "Best for beginners", popular: false },
  { name: "Popular", gb: 25, price: 125, tag: "Most popular", popular: true },
  { name: "Pro", gb: 100, price: 450, tag: "Power users", popular: false },
];

/* ── Compatible Bots ── */
const BOTS = [
  "Artemis ACO",
  "NSB",
  "WWSC",
  "Syndicate ACO",
  "TSB",
  "Viral Bricks",
  "Valor AIO",
  "ZNA",
];

/* ── Steps ── */
const STEPS = [
  { num: "01", title: "Buy Data", desc: "Choose your GB tier — bandwidth never expires." },
  { num: "02", title: "Generate Proxies", desc: "Instantly generate proxies from your dashboard." },
  { num: "03", title: "Start Copping", desc: "Plug into your bot and take Ws on drop day." },
];

/* ── Stats ── */
const STATS = [
  { value: "149+", label: "Members" },
  { value: "$6/GB", label: "Starting Price" },
  { value: "∞", label: "Bandwidth Never Expires" },
  { value: "100%", label: "Real Residential IPs" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      {/* ── Nav ── */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="text-lg font-bold tracking-tight">
          💩 Poopy Proxies
        </span>
        <div className="flex items-center gap-3">
          <a
            href={DISCORD_HREF}
            className="rounded-lg border border-[#2A2A2A] px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
          >
            Discord
          </a>
          <a
            href={BUY_HREF}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Buy Proxies
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="mx-auto max-w-3xl px-6 pt-24 pb-16 text-center">
        <div className="mb-6 inline-block rounded-full border border-[#2A2A2A] bg-[#1A1A1A] px-4 py-1.5 text-sm text-zinc-400">
          💩 Pay-per-GB &middot; No subscriptions &middot; Bandwidth never expires
        </div>
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Residential Proxies{" "}
          <span className="text-accent">Built to Cop.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
          Real IPs. Never-expiring bandwidth. Starting at $6/GB. Used by botters
          who actually want Ws.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={BUY_HREF}
            className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white transition-opacity hover:opacity-90"
          >
            Buy Proxies &rarr;
          </a>
          <a
            href={DISCORD_HREF}
            className="inline-block rounded-lg border border-[#2A2A2A] px-8 py-4 text-lg font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
          >
            Join Discord
          </a>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="border-y border-[#2A2A2A] bg-[#1A1A1A]/50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-accent">{s.value}</div>
              <div className="mt-1 text-sm text-zinc-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Proxy Type Guide ── */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="mb-2 text-center text-3xl font-bold">
          Which proxy for which site?
        </h2>
        <p className="mx-auto mb-12 max-w-lg text-center text-zinc-400">
          Different sites need different proxy types. Here&apos;s the cheat sheet.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PROXY_TYPES.map((p) => (
            <div
              key={p.site}
              className="flex items-center justify-between rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-5 py-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{p.icon}</span>
                <span className="font-medium">{p.site}</span>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  p.type === "Dynamic"
                    ? "bg-green-500/15 text-green-400"
                    : "bg-blue-500/15 text-blue-400"
                }`}
              >
                {p.type}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        {/* Discount banner */}
        <div className="mx-auto mb-10 max-w-md rounded-lg border border-accent/30 bg-accent/10 px-6 py-3 text-center">
          <span className="font-semibold text-accent">RESI50</span>
          <span className="ml-2 text-sm text-zinc-300">
            — 50% off your first order
          </span>
        </div>
        <h2 className="mb-2 text-center text-3xl font-bold">
          Pay-Per-GB Pricing
        </h2>
        <p className="mx-auto mb-12 max-w-md text-center text-zinc-400">
          Buy once, use whenever. Bandwidth never expires.
        </p>
        <div className="grid gap-8 sm:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-xl border p-6 ${
                plan.popular
                  ? "border-accent bg-[#1A1A1A]"
                  : "border-[#2A2A2A] bg-[#1A1A1A]"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-white">
                  ⭐ MOST POPULAR
                </span>
              )}
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                {plan.tag}
              </p>
              <h3 className="mt-1 text-lg font-semibold">{plan.name}</h3>
              <div className="mt-4 mb-1">
                <span className="text-4xl font-bold">${plan.price}</span>
              </div>
              <p className="mb-6 text-sm text-zinc-500">
                {plan.gb} GB &middot; ${(plan.price / plan.gb).toFixed(2)}/GB
              </p>
              <ul className="mb-8 flex-1 space-y-3 text-sm text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span> {plan.gb} GB residential bandwidth
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span> Bandwidth never expires
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span> Country & region targeting
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span> Dashboard access
                </li>
              </ul>
              <a
                href={BUY_HREF}
                className={`block rounded-lg py-3 text-center font-semibold transition-opacity hover:opacity-90 ${
                  plan.popular
                    ? "bg-accent text-white"
                    : "border border-[#2A2A2A] text-zinc-300 hover:border-zinc-500 hover:text-white"
                }`}
              >
                Buy {plan.gb} GB
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── Compatible Bots ── */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="mb-2 text-center text-3xl font-bold">
          Works with all major bots
        </h2>
        <p className="mx-auto mb-10 max-w-md text-center text-zinc-400">
          Plug and play with the bots you already use.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {BOTS.map((bot) => (
            <span
              key={bot}
              className="rounded-full border border-[#2A2A2A] bg-[#1A1A1A] px-5 py-2.5 text-sm font-medium text-zinc-300"
            >
              {bot}
            </span>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">How it works</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] p-6"
            >
              <div className="mb-3 text-sm font-bold text-accent">
                {step.num}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-zinc-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Community ── */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold">Join the 💩 squad</h2>
        <p className="mx-auto mb-4 max-w-md text-zinc-400">
          149+ members copping together. Get proxy tips, bot configs, and see
          real Ws from the community.
        </p>
        <p className="mb-8 text-sm text-zinc-500">
          Our #success channel stays busy — come see the receipts.
        </p>
        <a
          href={DISCORD_HREF}
          className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white transition-opacity hover:opacity-90"
        >
          Join Discord &rarr;
        </a>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#2A2A2A] py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-zinc-500">
            💩 Poopy Proxies &copy; 2026
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a
              href={DISCORD_HREF}
              className="text-zinc-400 transition-colors hover:text-white"
            >
              Discord
            </a>
            <a
              href="mailto:proxies@poopyproxies.com"
              className="text-zinc-400 transition-colors hover:text-white"
            >
              proxies@poopyproxies.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
