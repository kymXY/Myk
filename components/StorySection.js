import Counter from "@/components/Counter";

export default function StorySection() {
  return (
    <section id="kwento" className="relative overflow-hidden bg-manila text-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="group order-2 flex items-center justify-center lg:order-1">
          <div className="transition-transform duration-700 group-hover:scale-105">
            <MountainScene />
          </div>
        </div>

        <div className="order-1 flex flex-col justify-center lg:order-2">
          <span className="font-mono text-xs uppercase tracking-widest2 text-jeepney">
            Simula 1985
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Ginawa sa init ng Batangas, hindi sa laboratoryo.
          </h2>
          <div className="mt-6 space-y-4 font-body text-ink/75">
            <p>
              Nagsimula si Mang Myk bilang mangangalakal ng barako sa palengke
              ng Lipa noong 1985 &mdash; isang sako sa balikat, alas-tres ng
              umaga na paglalakad papunta sa bayan. Apat na dekada makalipas,
              pamilya pa rin namin ang nag-aani, nag-iihaw, at nagbabalot ng
              bawat batch.
            </p>
            <p>
              Walang pinaikling proseso. Ang barako ay barako &mdash; matapang,
              may lasa ng lupa, at hindi para sa mahihinang loob. Ito ang kape
              na ininom ng mga magsasaka bago pumunta sa bukid, at ang parehong
              kape na dala namin ngayon sa mesa mo.
            </p>
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-ink/10 pt-6">
            {[
              [40, "+", "taon ng pag-iihaw"],
              [1200, "", "magsasaka partners"],
              [100, "%", "sourced sa Batangas"]
            ].map(([num, suffix, label]) => (
              <div key={label}>
                <dt className="font-display text-2xl font-semibold text-jeepney sm:text-3xl">
                  <Counter value={num} suffix={suffix} />
                </dt>
                <dd className="mt-1 font-body text-xs text-ink/60">{label}</dd>
              </div>
            ))}
          </dl>

          <a
            href="#saan-kami"
            className="mt-9 inline-flex w-fit items-center gap-2 font-body text-sm font-bold uppercase tracking-wide text-jeepney"
          >
            Basahin ang buong kwento <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function MountainScene() {
  return (
    <svg viewBox="0 0 420 340" className="w-full max-w-md" aria-hidden="true">
      <circle cx="330" cy="70" r="46" fill="#F0A63A" opacity="0.9" />
      <path d="M0 260L110 120l70 70 60-90 180 160z" fill="#3D5C3F" />
      <path d="M0 300L140 170l90 90 70-100 120 140z" fill="#215252" />
      <path d="M0 340h420v-20L300 250l-70 40-90-70L0 300z" fill="#1B1108" opacity="0.08" />
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 7 }).map((_, col) => (
          <ellipse
            key={`${row}-${col}`}
            cx={40 + col * 52 + (row % 2 === 0 ? 20 : 0)}
            cy={210 + row * 20}
            rx="16"
            ry="7"
            fill="#8F1F15"
            opacity="0.18"
          />
        ))
      )}
    </svg>
  );
}
