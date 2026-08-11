"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Mamili", href: "#shop" },
  { label: "Mag-subscribe", href: "#subscribe" },
  { label: "Kwento Namin", href: "#kwento" },
  { label: "Saan Kami", href: "#saan-kami" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      {/* Announcement marquee */}
      <div className="overflow-hidden bg-jeepney text-cream">
        <div className="marquee-track py-2 text-xs font-semibold uppercase tracking-widest2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-10 px-5">
              <span>Sign up para sa 10% off sa unang order</span>
              <span aria-hidden="true">&#9670;</span>
              <span>Libreng delivery sa orders ₱1,500 pataas</span>
              <span aria-hidden="true">&#9670;</span>
              <span>Kapeng Barako, diretso mula Lipa, Batangas</span>
              <span aria-hidden="true">&#9670;</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main header */}
      <header className="border-b border-ink-line bg-ink/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="flex items-center gap-3">
            <LogoMark />
            <span className="font-display text-xl font-semibold tracking-tight text-cream sm:text-2xl">
              Myk&apos;s <span className="text-marigold">Coffee</span>
            </span>
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative font-body text-sm font-semibold uppercase tracking-wide text-cream/80 transition-colors hover:text-marigold"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-marigold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              aria-label="Hanapin sa store"
              className="hidden text-cream/80 transition hover:text-marigold sm:block"
            >
              <SearchIcon />
            </button>
            <a
              href="#shop"
              className="group hidden items-center gap-2 rounded-full border border-cream/25 px-3 py-1.5 text-cream/90 transition-all duration-200 hover:border-marigold hover:text-marigold sm:flex"
              aria-label="Bag / Cart"
            >
              <span className="inline-block transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
                <CartIcon />
              </span>
              <span className="font-mono text-xs">0</span>
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Buksan ang menu"
              aria-expanded={open}
              className="text-cream lg:hidden"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="border-t border-ink-line bg-ink px-5 py-5 lg:hidden">
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block font-body text-base font-semibold uppercase tracking-wide text-cream/90"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
      <div className="jeepney-stripe" />
    </div>
  );
}

function LogoMark() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <circle cx="17" cy="17" r="16" stroke="#F0A63A" strokeWidth="2" />
      <path
        d="M11 15c0-1.5 1-2.5 2-3-1 2 0 2.5 1 1.5s.5-2.5-.5-3.5c2 0 3.5 1.5 3.5 3.5 0 .8-.3 1.5-.7 2.1"
        stroke="#F0A63A"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M10 16.5h14a1 1 0 0 1 1 1c0 4.7-3.6 8-8 8h-0.2c-4.4 0-8-3.3-8-8v-.4a.6.6 0 0 1 .6-.6z"
        fill="#F0A63A"
      />
      <path
        d="M24.5 18h1.3c1.2 0 2.2 1 2.2 2.2 0 1.6-1.3 2.8-2.8 2.8h-1.4"
        stroke="#F0A63A"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6h15l-1.5 9h-12z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M6 6L4.5 3H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="9.5" cy="20" r="1.4" fill="currentColor" />
      <circle cx="17.5" cy="20" r="1.4" fill="currentColor" />
    </svg>
  );
}
