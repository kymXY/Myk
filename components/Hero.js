export default function Hero() {
  return (
    <section id="top" className="grain-overlay relative overflow-hidden bg-ink">
      {/* ambient background rays */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[140vw] w-[140vw] -translate-x-1/2 -translate-y-1/2 opacity-90 sm:h-[90vw] sm:w-[90vw]"
        aria-hidden="true"
      >
        <div className="animate-spin-slow h-full w-full">
          <SunburstSVG />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-5 pb-20 pt-16 text-center sm:px-8 sm:pt-24 lg:pb-28">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-marigold/40 bg-marigold/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest2 text-marigold">
          Mula Lipa, Batangas &middot; Since 1985
        </span>

        <h1 className="max-w-4xl font-display text-[13vw] font-semibold leading-[0.95] tracking-tight text-cream sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          Kapeng Barako,
          <br />
          <span className="italic text-marigold">Gising na Gising</span>
        </h1>

        <p className="mt-6 max-w-xl font-body text-base text-cream/75 sm:text-lg">
          Tunay na barako mula sa matataas na bundok ng Batangas &mdash;
          inasnan ng lupang Pilipino, ginising ng maalab na pag-ihaw. Walang
          pampalasa, walang paligoy-ligoy. Kape talaga.
        </p>

        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#shop"
            className="rounded-full bg-marigold px-8 py-3.5 font-body text-sm font-bold uppercase tracking-wide text-ink transition-all duration-200 hover:bg-marigold-light hover:scale-105 active:scale-95"
          >
            Mamili Ngayon
          </a>
          <a
            href="#subscribe"
            className="rounded-full border border-cream/30 px-8 py-3.5 font-body text-sm font-bold uppercase tracking-wide text-cream transition-all duration-200 hover:border-marigold hover:scale-105 hover:text-marigold active:scale-95"
          >
            Mag-subscribe, Makatipid 15%
          </a>
        </div>

        <div className="relative mt-14 sm:mt-16">
          <CupIllustration />
        </div>
      </div>
    </section>
  );
}

function SunburstSVG() {
  const rays = Array.from({ length: 32 });
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
      <g transform="translate(200,200)">
        {rays.map((_, i) => {
          const angle = (360 / rays.length) * i;
          const long = i % 2 === 0;
          return (
            <rect
              key={i}
              x={-3}
              y={long ? -198 : -178}
              width={6}
              height={long ? 90 : 60}
              fill={i % 4 === 0 ? "#C22A1D" : "#F0A63A"}
              opacity={0.16}
              transform={`rotate(${angle})`}
            />
          );
        })}
        <circle r="120" fill="none" stroke="#F0A63A" strokeOpacity="0.15" strokeWidth="1.5" />
        <circle r="150" fill="none" stroke="#C22A1D" strokeOpacity="0.12" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

function CupIllustration() {
  return (
    <div className="relative h-56 w-56 sm:h-64 sm:w-64">
      {/* steam */}
      <div className="absolute -top-6 left-1/2 flex -translate-x-1/2 gap-4">
        <span className="animate-steam block h-14 w-2 rounded-full bg-cream/40 [animation-delay:0s]" />
        <span className="animate-steam block h-16 w-2 rounded-full bg-cream/40 [animation-delay:.9s]" />
        <span className="animate-steam block h-14 w-2 rounded-full bg-cream/40 [animation-delay:1.8s]" />
      </div>

      <svg viewBox="0 0 220 200" className="relative z-10 h-full w-full">
        <ellipse cx="95" cy="176" rx="78" ry="10" fill="#000" opacity="0.25" />
        <path
          d="M28 60h134l-10 88a26 26 0 0 1-26 24H64a26 26 0 0 1-26-24z"
          fill="#F7E9C6"
        />
        <path d="M28 60h134l-3 24H31z" fill="#F0A63A" />
        <ellipse cx="95" cy="60" rx="67" ry="12" fill="#3C2716" />
        <ellipse cx="95" cy="58" rx="60" ry="9" fill="#1B1108" />
        <path
          d="M162 74c18-4 34 8 34 24s-16 30-36 26"
          fill="none"
          stroke="#F7E9C6"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <text
          x="95"
          y="120"
          textAnchor="middle"
          fontFamily="var(--font-space-mono)"
          fontSize="13"
          fill="#8F1F15"
          fontWeight="700"
        >
          MYK&apos;S
        </text>
      </svg>
    </div>
  );
}
