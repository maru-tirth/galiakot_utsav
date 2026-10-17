# Galiakot Sanskrutik Utsav Mandal

Official website for **Galiakot Sanskrutik Utsav Mandal**, Chembur, Mumbai — established 1958, home of *Chembur Cha Aadidev* and the oldest Navratri Utsav in Chembur.

Design system: **Galiakot Heritage — Devotion Through Generations**.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (all routes prerender to static HTML)
npm start       # serve the production build
npm run lint
```

Requires Node 20+. Built with **Next.js 16** (App Router, JavaScript/JSX), **React 19**, **Tailwind CSS v4**.

## Editing content

**All text, dates and links live in `src/data/`.** See **[CONTENT.md](./CONTENT.md)**.
**All images live in `public/images/`.** See **[ASSETS.md](./ASSETS.md)**.

## Structure

```
src/
  app/                  routes — /, /history, /ganesh-utsav, /navratri,
                        /gallery, /social-activities, /contact
  components/
    layout/             SiteHeader, MobileNav, AnnouncementBar, SiteFooter,
                        ScrollProgress, PageHero
    home/               Hero, PetalField, Heritage, Timeline, GaneshChapter,
                        Navratri, Community, GalleryTeaser, SocialStrip,
                        ContactSection
    gallery/            MediaGallery, Lightbox
    ui/                 Button, Reveal, SectionHeading, Ornament, Logo,
                        AwaitingNote, SocialIcons
  data/                 ← all editable content
  lib/                  cn()
  app/globals.css       design tokens (@theme), surfaces, motion
```

## Design system

Tokens are defined once in `src/app/globals.css` under `@theme`, then used as Tailwind utilities (`bg-maroon`, `text-gold`, …).

| Token | Hex | Role |
|---|---|---|
| `void` | `#1A080C` | deepest cinematic ground |
| `maroon` | `#310E14` | primary dark surface |
| `crimson` | `#7E151C` | dark-section accent |
| `vermilion` | `#A51F24` | **primary call to action only** |
| `saffron` | `#E6A23C` | Navratri key |
| `gold` | `#D6AE58` | ornament, rules, small caps, focus rings |
| `ivory` | `#FFF8EC` | readable content surface |
| `charcoal` | `#211B1B` | body text on ivory |

Type: **Cormorant Garamond** (display) · **Inter** (body/UI) · **Mukta** (Devanagari). Self-hosted via `next/font` — no third-party request.

The page alternates ivory editorial bands against deep-maroon cinematic bands. Ornament (toran, lotus divider, mandala rosette, temple arch) is hand-authored SVG in `ui/Ornament.jsx`, used at most twice per viewport and **never over the murti**.

## Motion

Three tiers, chosen at runtime:

- **Static** — `prefers-reduced-motion`, or no canvas. Full content, zero motion. Handled entirely in CSS, so it needs no JavaScript branch.
- **Enhanced** — scroll reveals (IntersectionObserver), hover transitions, scroll progress.
- **Immersive** — plus the ambient marigold `PetalField` (Canvas 2D, ≤42 petals, DPR capped at 1.75, pauses when offscreen or when the tab is hidden).

**No 3D engine and no animation library ships in the hero's critical path.** The hero is photograph + CSS + typography so it paints fast on a mid-range Android during the festival. A React Three Fiber temple-arch environment is the planned next enhancement, to be lazy-loaded after LCP on capable desktops only.

No 3D model of the murti will ever be fabricated — the murti is always authentic photography.

## Accessibility

Targets WCAG 2.2 AA. Semantic landmarks, one `h1` per page, skip link, gold focus-visible rings on both grounds, 44px primary touch targets, focus-trapped drawer and lightbox (Escape + arrows + swipe, focus restored on close), descriptive alt text, full reduced-motion support.

## Verification performed

Run against the production build with Playwright driving Chrome:

- ✅ Production build succeeds; **all 8 routes prerender to static HTML**
- ✅ ESLint clean (`--max-warnings=0`)
- ✅ **Zero horizontal overflow** at 320 / 390 / 768 / 1440 / 1600 px across all 7 pages
- ✅ **No console errors and no page errors** on any route
- ✅ Exactly one `<h1>` per page
- ✅ Mobile drawer opens, traps focus, closes on Escape
- ✅ Lightbox opens, arrow-key navigation works, closes on Escape
- ✅ Gallery filter works (35 items → 6 for Navratri)

Not yet done: Lighthouse scores and real-device testing. No performance score is claimed because none has been measured.

## Before going live

See the checklist at the end of [CONTENT.md](./CONTENT.md). In short: set the real domain, remove the `noindex` flag, replace the placeholder logo/favicon and the 7 placeholder Navratri/Visarjan images, confirm film-still rights, and fill in the venue and contact details.
