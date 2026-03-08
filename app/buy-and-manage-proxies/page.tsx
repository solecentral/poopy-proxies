const DISCORD_HREF = "https://discord.gg/CKVagmChkd";

const PLANS = [
  {
    name: "Starter",
    gb: 5,
    price: 30,
    discounted: 15,
    tag: "Perfect for getting started",
    popular: false,
  },
  {
    name: "Popular",
    gb: 25,
    price: 125,
    discounted: 62.5,
    tag: "Most popular for drop days",
    popular: true,
  },
  {
    name: "Pro",
    gb: 100,
    price: 450,
    discounted: 225,
    tag: "Power users & serious botters",
    popular: false,
  },
];

const STEPS = [
  {
    num: "01",
    title: "Join the Discord Server",
    desc: "Click any Buy Now button to join our Discord community.",
  },
  {
    num: "02",
    title: "Open a Support Ticket",
    desc: "Head to #open-a-ticket and create a new ticket with your order details.",
  },
  {
    num: "03",
    title: "Get Your Proxies Instantly",
    desc: "After payment confirmation, you'll receive your proxies right away.",
  },
];

const FAQS = [
  {
    q: "Does my bandwidth expire?",
    a: "No, it never expires. Use it whenever you need it.",
  },
  {
    q: "How fast do I get my proxies?",
    a: "Instantly after payment confirmation.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Crypto, PayPal, and more — ask in Discord.",
  },
  {
    q: "Can I use these with my bot?",
    a: "Yes — works with Artemis ACO, NSB, WWSC, Syndicate, TSB, and more.",
  },
];

export default function BuyAndManageProxies() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      {/* ── Back Button ── */}
      <div className="mx-auto max-w-6xl px-6 pt-6">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
        >
          &larr; Back to Home
        </a>
      </div>

      {/* ── Promo Banner ── */}
      <div className="mx-auto mt-4 max-w-6xl px-6">
        <div className="rounded-xl bg-green-600 px-6 py-4 text-center">
          <p className="text-lg font-bold sm:text-xl">
            Use Code <span className="rounded bg-white/20 px-2 py-0.5 font-mono">RESI50</span> for
            50% off your first order
          </p>
        </div>
      </div>

      {/* ── Pricing Cards ── */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-20">
        <h1 className="mb-2 text-center text-3xl font-bold sm:text-4xl">
          Buy Proxies
        </h1>
        <p className="mx-auto mb-12 max-w-md text-center text-zinc-400">
          Bandwidth never expires. Use it on your schedule.
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
              <h3 className="mt-1 text-lg font-semibold">
                {plan.name} {plan.popular && "⭐"}
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-sm text-zinc-500 line-through">
                  ${plan.price}
                </span>
                <span className="text-4xl font-bold text-accent">
                  ${plan.discounted % 1 === 0 ? plan.discounted : plan.discounted.toFixed(2)}
                </span>
              </div>
              <p className="mt-1 mb-2 text-xs text-green-400 font-medium">
                with RESI50
              </p>
              <p className="mb-6 text-sm text-zinc-500">
                {plan.gb} GB &middot; ${(plan.discounted / plan.gb).toFixed(2)}/GB
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
                href={DISCORD_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className={`block rounded-lg py-3 text-center font-semibold transition-opacity hover:opacity-90 ${
                  plan.popular
                    ? "bg-accent text-white"
                    : "border border-[#2A2A2A] text-zinc-300 hover:border-zinc-500 hover:text-white"
                }`}
              >
                Buy Now
              </a>
              <p className="mt-2 text-center text-xs text-zinc-500">
                You will be directed to our Discord to complete your purchase
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How to Purchase ── */}
      <section className="border-y border-[#2A2A2A] bg-[#1A1A1A]/50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="mb-12 text-center text-3xl font-bold">
            How to Purchase
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="rounded-xl border border-[#2A2A2A] bg-[#0F0F0F] p-6"
              >
                <div className="mb-3 text-sm font-bold text-accent">
                  {step.num}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-zinc-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div
              key={faq.q}
              className="rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] p-6"
            >
              <h3 className="mb-2 font-semibold">{faq.q}</h3>
              <p className="text-sm text-zinc-400">{faq.a}</p>
            </div>
          ))}
        </div>
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
