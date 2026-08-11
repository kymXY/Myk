# Myk's Coffee

A Next.js (App Router) storefront for **Myk's Coffee** — a Filipino-style
reimagining of the Ueshima Coffee Company homepage, built around Kapeng
Barako from Lipa, Batangas. Tailwind CSS, no external image dependencies
(all graphics are inline SVG), ready to deploy on Vercel or Netlify.

## Stack

- Next.js 14 (App Router, JavaScript)
- Tailwind CSS
- next/font (Fraunces, Plus Jakarta Sans, Space Mono — self-hosted at build time)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.js        # fonts, <head> metadata
  page.js           # assembles all homepage sections
  globals.css        # Tailwind + custom utilities (marquee, jeepney stripe, grain, sunburst spin)
components/
  Header.js          # announcement marquee + nav + mobile menu
  Hero.js             # sunburst signature graphic + cup illustration
  SubscribeSection.js # subscription plan picker
  ShopGrid.js         # product category tiles
  GiftSection.js
  StorySection.js     # brand story + stats
  WhereToFind.js       # nationwide delivery by island group
  Newsletter.js
  Footer.js
```

## Editing content

- Copy is written in Taglish and lives directly inside each component —
  search for the text you want to change and edit it in place.
- Colors and fonts are defined once in `tailwind.config.js` under
  `theme.extend.colors` / `fontFamily` (`ink`, `manila`, `marigold`,
  `jeepney`, `banig`, `cream`).
- Swap in real product photography by replacing the SVG illustrations in
  `Hero.js` / `ShopGrid.js` with `next/image`, or drop files into `public/`.

## Deploy

### Vercel (recommended)

1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset auto-detects as **Next.js** — no config needed.
4. Deploy. Vercel builds with `next build` automatically.

Or via CLI:

```bash
npm i -g vercel
vercel
```

### Netlify

This repo already includes a `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

1. Push the project to a git repo.
2. In Netlify: **Add new site → Import an existing project**, pick the repo.
3. Build command and publish directory are picked up from `netlify.toml`
   automatically. Netlify installs the `@netlify/plugin-nextjs` plugin on
   first deploy — no extra setup needed.

Or via CLI:

```bash
npm i -g netlify-cli
netlify deploy --build
```

## Notes

- All storefront actions (cart, checkout, "Mamili Ngayon" links) are UI
  placeholders — wire them up to your commerce backend of choice (Shopify,
  Medusa, a custom API, etc.) when you're ready to sell.
- The store-locator section intentionally lists island groups instead of
  named retail partners — swap in real partner logos once you have
  agreements in place.
