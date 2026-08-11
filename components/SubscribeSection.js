"use client";

import { useState } from "react";

const PLANS = [
  { id: "weekly", label: "Lingguhan", note: "Para sa mga totoong barako drinker" },
  { id: "biweekly", label: "Every 2 Linggo", note: "Ang pinaka-paborito", featured: true },
  { id: "monthly", label: "Buwanan", note: "Sakto lang, walang sobra" }
];

export default function SubscribeSection() {
  const [plan, setPlan] = useState("biweekly");

  return (
    <section id="subscribe" className="bg-banig-teal">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-28">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest2 text-marigold">
            Subscribe &amp; Save
          </span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl">
            Bigyan mo ng regular na kape ang sarili mo.
          </h2>
          <p className="mt-5 max-w-md font-body text-cream/75">
            Sumali sa Team Barako. I-customize ang schedule ng delivery mo,
            i-pause o palitan anumang oras &mdash; at makatipid ng 15% sa
            bawat sako, walang commitment na kailangan.
          </p>

          <ul className="mt-7 space-y-3 font-body text-sm text-cream/80">
            {[
              "Libreng delivery kahit saan sa Pilipinas",
              "I-skip o i-cancel anumang oras, walang tanong",
              "Unang dibdib ng bagong batch, subscribers muna"
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#shop"
            className="mt-8 inline-block rounded-full bg-marigold px-8 py-3.5 font-body text-sm font-bold uppercase tracking-wide text-ink transition-all duration-200 hover:bg-marigold-light hover:scale-105 active:scale-95"
          >
            Simulan ang Subscription
          </a>
        </div>

        <div className="rounded-3xl border border-cream/10 bg-ink/40 p-6 sm:p-8">
          <p className="mb-5 font-mono text-xs uppercase tracking-widest2 text-cream/60">
            Piliin ang dalas ng delivery
          </p>
          <div className="space-y-3">
            {PLANS.map((p) => (
              <button
                key={p.id}
                onClick={() => setPlan(p.id)}
                className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all duration-200 active:scale-[0.98] ${
                  plan === p.id
                    ? "border-marigold bg-marigold/10"
                    : "border-cream/15 hover:border-cream/30 hover:bg-cream/5"
                }`}
              >
                <span>
                  <span className="block font-body text-base font-semibold text-cream">
                    {p.label}
                    {p.featured && (
                      <span className="ml-2 rounded-full bg-jeepney px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-cream">
                        Paborito
                      </span>
                    )}
                  </span>
                  <span className="mt-0.5 block font-body text-xs text-cream/55">{p.note}</span>
                </span>
                <span
                  className={`h-5 w-5 shrink-0 rounded-full border-2 transition-all duration-200 ${
                    plan === p.id ? "border-marigold bg-marigold" : "border-cream/30"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-cream/10 pt-6">
            <span className="font-body text-sm text-cream/60">Simula sa</span>
            <span className="font-display text-2xl font-semibold text-marigold">
              ₱389<span className="font-body text-sm text-cream/60"> / sako</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#F0A63A" opacity="0.15" />
      <path
        d="M7 12.5l3 3 7-7"
        stroke="#F0A63A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
