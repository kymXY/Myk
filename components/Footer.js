const COLUMNS = [
  {
    title: "Ang Tindahan",
    links: ["Buong Buto", "Giniling na Kape", "3-in-1 Sachets", "Cold Brew", "Pour-Over Bags"]
  },
  {
    title: "Tungkol Sa Amin",
    links: ["Aming Kwento", "Aming mga Prinsipyo", "Blog", "Sustainability"]
  },
  {
    title: "Suporta",
    links: ["Makipag-ugnayan", "Shipping at Delivery", "Subscription FAQs", "Return Policy"]
  }
];

export default function Footer() {
  return (
    <footer className="bg-ink-soft">
      <div className="jeepney-stripe" />
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <span className="font-display text-2xl font-semibold text-cream">
              Myk&apos;s <span className="text-marigold">Coffee</span>
            </span>
            <p className="mt-4 max-w-sm font-body text-sm text-cream/60">
              Kapeng Barako mula Lipa, Batangas &mdash; inihaw ng pamilya,
              ipinadala sa buong Pilipinas mula pa noong 1985.
            </p>
            <div className="mt-6 flex gap-4">
              <SocialIcon type="instagram" />
              <SocialIcon type="facebook" />
              <SocialIcon type="tiktok" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="font-mono text-xs uppercase tracking-widest2 text-marigold">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-body text-sm text-cream/60 transition hover:text-cream"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 sm:flex-row">
          <p className="font-body text-xs text-cream/45">
            &copy; {new Date().getFullYear()} Myk&apos;s Coffee. Gawang Pinoy,
            para sa Pinoy.
          </p>
          <div className="flex gap-3 font-mono text-[11px] uppercase tracking-wide text-cream/40">
            <span>GCash</span>
            <span>&middot;</span>
            <span>Maya</span>
            <span>&middot;</span>
            <span>Bank Transfer</span>
            <span>&middot;</span>
            <span>COD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ type }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8
  };
  return (
    <a
      href="#"
      aria-label={type}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition hover:border-marigold hover:text-marigold"
    >
      {type === "instagram" && (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
        </svg>
      )}
      {type === "facebook" && (
        <svg {...common}>
          <path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h2.5l.5-4H13V7a1 1 0 0 1 1-1h2z" />
        </svg>
      )}
      {type === "tiktok" && (
        <svg {...common}>
          <path d="M14 3v10.5a3.5 3.5 0 1 1-3-3.46" />
          <path d="M14 3c.5 2.5 2 4 4.5 4.3" />
        </svg>
      )}
    </a>
  );
}
