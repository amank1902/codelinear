# N7 — Modern Banking Landing Page

A pixel-precise, production-quality React landing page for **N7**, a fintech platform built around core banking (CB7), digital banking (N7), open banking, and lending products. Built from Figma reference screens with a strong focus on visual craftsmanship, smooth motion, and clean component architecture.


---

## Tech Stack

| Tool                  | Role                                                  |
| --------------------- | ----------------------------------------------------- |
| **React 19** + Vite 8 | UI library + dev server / bundler                     |
| **TailwindCSS 3.4**   | Utility-first styling, custom design tokens           |
| **Framer Motion 12**  | Section fade-ups, hero animations, carousel transitions |
| **Lucide React**      | A few interface icons (chevrons, check, etc.)         |
| **Archivo** (Google Fonts) | Site-wide typeface, weights 400–800                |

No state library, no router, no CSS-in-JS — the page is a single composition rendered from `App.jsx`.

---

## Sections (top to bottom)

1. **Navbar** — Floating rounded pill, blur-on-scroll, mobile drawer.
2. **Hero** — Headline + dual CTAs, gradient `REQUEST DEMO` button, portrait photo with two floating cards (Toni Kross balance / Recent activity), trusted-by row with 6 partner logos.
3. **Solutions** — Sticky left intro, 5-item grid (Core Banking, Digital Banking, Open Banking, Loan Origination, Loan Management) each with a brand icon, body copy and `LEARN MORE` link. `NBFC` tag on the two lending products.
4. **CloudCore** — “A complete cloud-based core banking.” Side-by-side text + cropped laptop graphic that pokes off the right edge. Outlined **CB7** background watermark.
5. **ConnectedSystem** — Mirrored layout: laptop pokes off the left, 9-item feature checklist on the right in two columns.
6. **CtaBanner** (×3) — Reusable "Take the full advantage of going paper-less now." section. Two visual variants: dark plain (used twice) and dark-card-on-light (used between Marquee and DigitalBanking).
7. **Marquee** — Light-themed scrolling row: `N7 ✦ Say 👋 to the new way of banking ✦ CB7 ✦ Say …`
8. **DigitalBanking** — Light-themed section with a sticky left header, three alternating phone-mockup feature rows, subtle swirl-curve background watermark plus N7 letter watermarks in the corners.
9. **Insights** — Featured wide card (image + content) + two text cards, “Read All Insights →” link.
10. **CaseStudies** — Centered heading + carousel with side-peek dimmed slides, prev/next circular buttons, dot pagination, “View All →” link.
11. **Footer** — Giant N7 brand logo, three office locations (London / Dubai / London-India), three link columns (Solutions, N7 Banking, Our Socials) with hover-translating arrows, copyright line.

---

## Project Structure

```
src/
├── App.jsx                       Single page composition (orders all sections)
├── main.jsx                      React root
├── index.css                     Tailwind base layers + body radial bg + container-shell
│
├── assets/
│   ├── hero/                     Portrait, left card, right card SVGs
│   ├── icons/
│   │   ├── solutions/            5 solution icons (core, digital, open, …)
│   │   ├── x-pattern.svg         The X-petal tile used in Insights/CaseStudies
│   │   └── …
│   └── mockups/                  Cloud dashboards, phone screens, brand logos, N7 logo, arrow icon
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx            Floating pill nav with scroll state
│   │   └── Footer.jsx            Logo + offices + link columns + copyright
│   │
│   ├── sections/                 One file per page section
│   │   ├── Hero.jsx
│   │   ├── Solutions.jsx
│   │   ├── CloudCore.jsx
│   │   ├── ConnectedSystem.jsx
│   │   ├── CtaBanner.jsx
│   │   ├── Marquee.jsx
│   │   ├── DigitalBanking.jsx
│   │   ├── Insights.jsx
│   │   └── CaseStudies.jsx
│   │
│   ├── cards/
│   │   ├── SolutionCard.jsx
│   │   └── InsightCard.jsx       Featured + standard variants
│   │
│   └── ui/                       Reusable primitives
│       ├── Button.jsx            Primary (gradient) + secondary + ghost + link variants
│       ├── Section.jsx           Standard section wrapper (py-20/24/28)
│       ├── FadeIn.jsx            Viewport fade-up wrapper (framer-motion)
│       ├── LearnMoreLink.jsx     Cyan uppercase link + arrow (shared by 3 sections)
│       ├── CheckBullet.jsx       Solid-blue check circle + label (shared by 2 sections)
│       ├── Laptop.jsx            Reusable laptop chassis with side="left|right"
│       ├── PatternTile.jsx       X-pattern image tile
│       ├── Logo.jsx              N7 text logo (sm/md/lg)
│       └── ArrowRightIcon.jsx    SVG arrow used in all decorative links
│
└── data/
    └── content.js                All static page content (copy, lists, addresses, link sets)
```

### Architectural rules

- **`data/content.js`** is pure data — no React components imported. Solution icons are referenced as SVG `src` strings so the data layer is portable (CMS, API, JSON).
- **`ui/`** holds primitives reusable across the page. **`cards/`** holds card-shaped components specific to a section. **`sections/`** holds top-level page chunks (one per file).
- Section files compose primitives — they don't redefine button styles, link styles, etc.
- Shared style values are tokens in `tailwind.config.js` (`bg-light`, `tracking-cta`, `brand`, `brand-glow`, …) — avoid one-off inline `[#hex]` colors when a token exists.

---

## Setup & Running

### Prerequisites

- **Node 18+** (any recent LTS works)
- **npm 9+** (or your preferred package manager)

### First-time install

```bash
git clone <repo-url>
cd cod
npm install
```

### Development server

```bash
npm run dev
```

Opens at `http://localhost:5173`.

### Production build

```bash
npm run build
```

Outputs to `dist/`. Static, deployable to any host (Vercel, Netlify, S3, etc.). Current bundle size: ~115KB JS gzipped, ~6KB CSS gzipped.

### Local production preview

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Customising Content

All text, addresses, link lists, and feature bullets live in **`src/data/content.js`**. Change a heading, a feature label, a footer link — no need to touch any component.

```js
// src/data/content.js
export const trustedBy = ["SHELLS", "SmartFinder", "Zoomerr", "ArtVenue", "kontrastr", "WAVESMARATHON"];

export const solutions = [
  { title: "Core Banking CB7", icon: coreIcon, body: "…" },
  // …
];

export const insights = [ … ];
export const caseStudies = [ … ];
export const offices = [ … ];
export const footerLinks = { Solutions: [ … ], "N7 Banking": [ … ], "Our Socials": [ … ] };
```

### Swapping a graphic asset

1. Drop the new SVG/PNG into the matching folder under `src/assets/`.
2. Update its import path in the consuming file (e.g. `Hero.jsx` for the portrait, `CloudCore.jsx` for the laptop dashboard).
3. Save — Vite HMR refreshes instantly.

### Changing brand colour, fonts, or breakpoints

Open **`tailwind.config.js`** and edit the tokens:

```js
colors: {
  brand:      { DEFAULT: "#2A5BFF", hover: "#1E48E0", glow: "#00B4FD" },
  bg:         { DEFAULT: "#020616", soft: "#070B1E", card: "#0B1027", light: "#F4F7FB" },
  ink:        { DEFAULT: "#E7ECF6", muted: "#9098B0", subtle: "#5C637A" },
}
fontFamily: { sans: ["Archivo", …], display: ["Archivo", …] }
letterSpacing: { cta: "0.22em" }
```

> **Note:** After editing `tailwind.config.js`, restart the dev server (`Ctrl-C` then `npm run dev`). Tailwind reads the config only at startup; HMR alone won't pick up token changes.

---

## Conventions

- **Sections** are kept under ~140 lines. Anything past that gets split into local subcomponents in the same file.
- **Motion**: all viewport-triggered fade-ups go through `<FadeIn>` so timing and easing are uniform. One-off animations (carousel slides, hero stagger) stay inline.
- **Decorative imagery** sets `alt=""` and `aria-hidden="true"`. Brand logos and product graphics get a meaningful `alt`.
- **`tracking-cta`** (0.22em) is the standard letter-spacing for uppercase buttons and pill labels — don't hardcode `tracking-[0.22em]`.
- **Light-themed sections** (Marquee, DigitalBanking, light CtaBanner) use the `bg-bg-light` token instead of `bg-[#F4F7FB]`.

---

## Performance Notes

- Images use `loading="lazy"` by default, except the hero portrait which is `eager` for LCP.
- The marquee animation is a CSS `@keyframes marquee` translating `-50%` — no JS, no rAF loops.
- All viewport animations trigger once (`viewport={{ once: true }}`) so scrolling back up doesn't replay them.
- Phone mockup SVGs are large (~400KB each, ~280KB gzipped) but render once. If size becomes an issue, re-export from Figma with SVGO compression or use AVIF/WebP rasters.

