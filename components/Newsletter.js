"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section className="grain-overlay relative bg-banig-green">
      <div className="relative z-10 mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:py-24">
        <span className="font-mono text-xs uppercase tracking-widest2 text-cream/70">
          Sumali sa Team Barako
        </span>
        <h2 className="mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl">
          Manatiling updated sa bagong batch at promo.
        </h2>
        <p className="mx-auto mt-4 max-w-md font-body text-cream/75">
          I-drop lang ang email mo. Kukuha ka ng 10% off sa unang order,
          walang spam, pangako.
        </p>

        {submitted ? (
          <p className="mt-8 font-body text-sm font-semibold text-marigold">
            Salamat! Sino pa nga pala ang una sa 10% off code sa inbox mo.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="juan@email.com"
              className="w-full rounded-full border border-cream/25 bg-ink/30 px-5 py-3.5 font-body text-sm text-cream placeholder:text-cream/40 focus:border-marigold focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-marigold px-7 py-3.5 font-body text-sm font-bold uppercase tracking-wide text-ink transition-all duration-200 hover:scale-105 hover:bg-marigold-light active:scale-95"
            >
              Sumali
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
