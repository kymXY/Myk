export default function GiftSection() {
  return (
    <section className="bg-jeepney">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 py-16 text-center sm:px-8 lg:flex-row lg:justify-between lg:text-left">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest2 text-cream/70">
            E-Gift Card
          </span>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-cream sm:text-4xl">
            Regalo na may lasa ng pagmamahal.
          </h2>
          <p className="mt-3 max-w-lg font-body text-cream/75">
            Padalhan ng Myk&apos;s Coffee gift card ang paborito mong tao
            &mdash; instant, pwedeng gamitin kahit saan sa site, walang expiry.
          </p>
        </div>
        <a
          href="#"
          className="shrink-0 rounded-full bg-cream px-8 py-3.5 font-body text-sm font-bold uppercase tracking-wide text-jeepney transition hover:bg-marigold"
        >
          Bumili ng Gift Card
        </a>
      </div>
    </section>
  );
}
