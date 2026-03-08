const CTA_HREF = "mailto:proxies@poopyproxies.com";

function Button({
  children,
  className = "",
  ...props
}: React.ComponentProps<"a">) {
  return (
    <a
      href={CTA_HREF}
      className={`inline-block rounded-lg bg-accent px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] p-6">
      {children}
    </div>
  );
}

const STEPS = [
  { emoji: "📋", title: "Choose your plan", desc: "Pick the tier that fits your setup." },
  { emoji: "⚡", title: "Get your proxies instantly", desc: "Credentials delivered to your inbox in minutes." },
  { emoji: "🏆", title: "Start copping", desc: "Run your bots with confidence on drop day." },
];

const FEATURES = [
  { emoji: "🏠", title: "Residential IPs", desc: "Real home IPs from real ISPs — not datacenter junk." },
  { emoji: "🎯", title: "Drop-Ready", desc: "Optimized for Nike, Supreme, Shopify, and more." },
  { emoji: "📬", title: "Instant Delivery", desc: "Proxies in your inbox within minutes of purchase." },
  { emoji: "🔄", title: "Always Fresh", desc: "IPs rotate automatically so you never get stale." },
];

const PLANS = [
  {
    name: "Starter",
    price: 99,
    features: ["10 GB bandwidth", "100 IPs", "Email support"],
    popular: false,
  },
  {
    name: "Pro",
    price: 249,
    features: ["50 GB bandwidth", "500 IPs", "Priority support"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 499,
    features: ["Unlimited bandwidth", "Dedicated IPs", "Slack support"],
    popular: false,
  },
];

const FAQS = [
  {
    q: "Are these real residential IPs?",
    a: "Yes. Every IP comes from a real residential ISP — no datacenter or shared proxies.",
  },
  {
    q: "What sites do these work on?",
    a: "Nike SNKRS, Shopify (including Supreme, Kith, Bodega), Footsites, Walmart, Target, and more.",
  },
  {
    q: "How do I get my proxies?",
    a: "After checkout you'll receive your proxy list via email within minutes. Just paste them into your bot.",
  },
  {
    q: "Can I upgrade or downgrade?",
    a: "Absolutely. Email us anytime and we'll adjust your plan — prorated, no hassle.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      {/* Nav */}
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <span className="text-lg font-bold tracking-tight">
          💩 Poopy Proxies
        </span>
        <Button className="px-4 py-2 text-sm">Get Started</Button>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-24 pb-20 text-center">
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          The proxy service botters{" "}
          <span className="text-accent">actually trust.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
          Residential proxies built for drops. Fast, reliable, and yes — the
          name is real.
        </p>
        <div className="mt-10">
          <Button className="px-8 py-4 text-lg">Get Started</Button>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">How it works</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <Card key={i}>
              <div className="mb-3 text-3xl">{step.emoji}</div>
              <p className="mb-1 text-sm font-medium text-zinc-500">
                Step {i + 1}
              </p>
              <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-zinc-400">{step.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Why botters choose us
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <Card key={i}>
              <div className="mb-3 text-3xl">{f.emoji}</div>
              <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
              <p className="text-sm text-zinc-400">{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">Pricing</h2>
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
                  ⭐ POPULAR
                </span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-zinc-500">/mo</span>
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="text-accent">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Button className="w-full text-center">Get Started</Button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">FAQ</h2>
        <div className="space-y-6">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] p-6"
            >
              <h3 className="mb-2 font-semibold">{faq.q}</h3>
              <p className="text-sm text-zinc-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2A2A2A] py-8 text-center text-sm text-zinc-500">
        <p>
          Poopy Proxies &copy; 2026 &middot;{" "}
          <a
            href="mailto:proxies@poopyproxies.com"
            className="text-zinc-400 transition-colors hover:text-white"
          >
            proxies@poopyproxies.com
          </a>
        </p>
      </footer>
    </div>
  );
}
