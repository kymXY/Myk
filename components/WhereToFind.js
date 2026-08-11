const REGIONS = [
  {
    name: "Luzon",
    detail: "Same-day delivery sa Metro Manila, 1-3 araw sa ibang probinsya."
  },
  {
    name: "Visayas",
    detail: "2-4 araw ang delivery via sea cargo at courier partners."
  },
  {
    name: "Mindanao",
    detail: "3-5 araw ang delivery, may cash-on-delivery sa mga major city."
  }
];

export default function WhereToFind() {
  return (
    <section id="saan-kami" className="bg-ink py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 text-center">
          <span className="font-mono text-xs uppercase tracking-widest2 text-marigold">
            Nationwide na Delivery
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl font-semibold text-cream sm:text-5xl">
            Saan man sa 7,641 na isla, aabot kami.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {REGIONS.map((r) => (
            <div
              key={r.name}
              className="rounded-3xl border border-cream/10 bg-ink-soft p-7 text-center"
            >
              <h3 className="font-display text-2xl font-semibold text-marigold">{r.name}</h3>
              <p className="mt-3 font-body text-sm text-cream/65">{r.detail}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-body text-sm text-cream/50">
          Tumatanggap kami ng GCash, Maya, bank transfer, at cash on delivery
          sa mga piling lugar.
        </p>
      </div>
    </section>
  );
}
