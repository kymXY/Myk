const CATEGORIES = [
  {
    name: "Buong Buto (Barako Beans)",
    tag: "Best seller",
    price: "₱420",
    from: "#8F1F15",
    to: "#C22A1D",
    icon: "beans"
  },
  {
    name: "Giniling na Kape",
    tag: "Para sa moka pot",
    price: "₱380",
    from: "#3D5C3F",
    to: "#215252",
    icon: "grind"
  },
  {
    name: "3-in-1 Sachets",
    tag: "Kape ng bawat umaga",
    price: "₱165",
    from: "#C77E1E",
    to: "#F0A63A",
    icon: "sachet"
  },
  {
    name: "Cold Brew Bote",
    tag: "Panlaban sa init",
    price: "₱135",
    from: "#215252",
    to: "#1B1108",
    icon: "bottle"
  },
  {
    name: "Pour-Over Bags",
    tag: "Sachet, tapos ihalo lang",
    price: "₱310",
    from: "#8F1F15",
    to: "#F0A63A",
    icon: "pour"
  },
  {
    name: "Bundle: Tara, Kape Tayo",
    tag: "Regalo-ready",
    price: "₱899",
    from: "#3D5C3F",
    to: "#C22A1D",
    icon: "bundle"
  }
];

export default function ShopGrid() {
  return (
    <section id="shop" className="bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest2 text-marigold">
              Ang Tindahan
            </span>
            <h2 className="mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl">
              Pili ka ng lasa mo.
            </h2>
          </div>
          <p className="max-w-sm font-body text-sm text-cream/60">
            Bawat sako, sariwang inihaw sa Lipa at ipinadala diretso sa bahay
            mo &mdash; wala nang middleman, wala nang sobrang taas ng presyo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="group relative overflow-hidden rounded-3xl border border-cream/10 p-6 transition hover:border-marigold/50 sm:p-7"
              style={{
                background: `linear-gradient(150deg, ${cat.from}, ${cat.to})`
              }}
            >
              <div className="absolute right-4 top-4 opacity-90">
                <CategoryIcon type={cat.icon} />
              </div>
              <span className="inline-block rounded-full bg-ink/30 px-3 py-1 font-mono text-[10px] uppercase tracking-widest2 text-cream/90">
                {cat.tag}
              </span>
              <h3 className="mt-16 font-display text-2xl font-semibold text-cream sm:mt-20">
                {cat.name}
              </h3>
              <div className="mt-6 flex items-center justify-between">
                <span className="font-mono text-lg text-cream">{cat.price}</span>
                <span className="font-body text-sm font-semibold text-cream/80 transition group-hover:translate-x-1">
                  Tingnan &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryIcon({ type }) {
  const common = { width: 34, height: 34, viewBox: "0 0 34 34", fill: "none", "aria-hidden": true };
  switch (type) {
    case "beans":
      return (
        <svg {...common}>
          <ellipse cx="17" cy="17" rx="10" ry="14" fill="#F7E9C6" opacity="0.85" transform="rotate(20 17 17)" />
          <path d="M17 5c0 9 0 15 0 24" stroke="#8F1F15" strokeWidth="2" transform="rotate(20 17 17)" />
        </svg>
      );
    case "grind":
      return (
        <svg {...common}>
          <circle cx="17" cy="17" r="3" fill="#F7E9C6" />
          <circle cx="9" cy="10" r="2" fill="#F7E9C6" opacity="0.8" />
          <circle cx="25" cy="11" r="2.4" fill="#F7E9C6" opacity="0.8" />
          <circle cx="24" cy="24" r="2" fill="#F7E9C6" opacity="0.8" />
          <circle cx="10" cy="25" r="2.6" fill="#F7E9C6" opacity="0.8" />
          <circle cx="17" cy="26" r="1.6" fill="#F7E9C6" opacity="0.7" />
        </svg>
      );
    case "sachet":
      return (
        <svg {...common}>
          <path d="M9 8h16l-2 20a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2z" fill="#F7E9C6" opacity="0.85" />
          <path d="M9 8l2-3h12l2 3" stroke="#F7E9C6" strokeWidth="2" fill="none" />
        </svg>
      );
    case "bottle":
      return (
        <svg {...common}>
          <rect x="12" y="6" width="10" height="6" rx="1.5" fill="#F7E9C6" opacity="0.85" />
          <path d="M12 12l-2 4v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V16l-2-4z" fill="#F7E9C6" opacity="0.85" />
        </svg>
      );
    case "pour":
      return (
        <svg {...common}>
          <path d="M8 9h18l-5 10v7a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-7z" fill="#F7E9C6" opacity="0.85" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <rect x="6" y="10" width="22" height="16" rx="3" fill="#F7E9C6" opacity="0.85" />
          <path d="M6 16h22" stroke="#8F1F15" strokeWidth="1.6" />
        </svg>
      );
  }
}
