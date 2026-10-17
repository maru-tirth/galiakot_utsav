# Image assets

All images live in `public/images/`. To replace one, **drop a new file in with the same filename** — nothing else needs to change. Then update the `alt` text in `src/data/gallery.js` so it describes the new photograph.

---

## 1. Authentic mandal photography (29 files)

These are frame stills from the mandal's **own** festival films. They show our murti, our pathak, our devotees, our street.

| Source film | YouTube |
|---|---|
| *Chembur Cha Adidev — Aagman Sohala 2023* | `JtxXbPl2ulE` |
| *Aagman Sohala 2022* | `nIDjI3UXUs4` |
| *Sthapana Puja & Mahaprasad* | `ANe0YONWPJk` |

All three films are **produced by Beyond Thought Films**. The site credits them visibly in the hero caption, the film cards, the lightbox and the footer.

> **Action for the committee:** confirm with Beyond Thought Films that the mandal may use stills from these films on its official website, or replace them with the mandal's own photographs. Until that is confirmed, treat them as provisional.

| File | Shows |
|---|---|
| `hero-idol.jpg` | **The hero.** Our murti lit against the night sky during Aagman |
| `darshan-idol.jpg` | Close view of the murti's face, gold crown, lotus garlands |
| `darshan-wide.jpg` | The murti on its float in daylight |
| `heritage-main.jpg` | The procession beneath the Chembur flyover |
| `heritage-detail.jpg` | The painted eye and trishul tilak |
| `aagman-01.jpg` … `aagman-06.jpg` | Aagman: night float, petals, volunteers, dhol-tasha pathak, saffron flag, tasha |
| `dhol-01.jpg` | Close view of the dhol |
| `crowd-01.jpg`, `crowd-02.jpg` | Devotees celebrating in the street |
| `puja-01.jpg` … `puja-06.jpg` | Sthapana Puja: installation, offering, aarti, eye detail, Mahaprasad |
| `community-01.jpg` … `community-03.jpg` | The gathered community; a child watching the procession |
| `decor-01.jpg` | The decorated mandap at night |
| `idol-detail-01.jpg` … `idol-detail-03.jpg` | Crown and lotus, red-and-gold shela, jewels before the procession |
| `pathak-bw-01.jpg`, `pathak-bw-02.jpg` | The pathak before the procession (black and white) |

A machine-readable record of every file, its source film and its alt text is in **`asset-sources.json`**.

**Recommended upgrade:** ask the mandal's photographer for the original high-resolution stills, especially for `hero-idol.jpg`. The current hero is 1240×1050 — adequate, but a native photograph would be sharper on large screens.

---

## 2. Placeholder photography (7 files) — replace these

No mandal footage exists yet for Navratri or Visarjan, so these are **licensed stand-ins from Wikimedia Commons** (CC BY-SA 4.0 / CC BY 2.0). They are visibly labelled "Placeholder" in the gallery, on the Visarjan card, and under the Navratri image grid.

| File | Needed instead | Suggested crop |
|---|---|---|
| `navratri-01.jpg` | Our Garba circle in full flow | 16:9 landscape |
| `navratri-02.jpg` | Devotees dancing Garba under the lights | 3:2 landscape |
| `navratri-03.jpg` | The full Navratri ground / crowd | 3:2 landscape |
| `navratri-04.jpg` | Dancers in traditional dress | portrait |
| `navratri-05.jpg` | Our decorated Navratri ground at dusk | 3:2 landscape |
| `navratri-06.jpg` | Chaniya choli / mirror-work detail | 16:9 landscape |
| `visarjan-01.jpg` | Our Visarjan procession | 3:2 landscape |

Once replaced, set `placeholder: false` on that entry in `src/data/gallery.js` and remove `placeholderImage: true` from the Visarjan card in `src/data/festivals.js`. The "Placeholder" badges then disappear automatically.

---

## 3. Still needed from the mandal

- **The emblem in vector form (SVG/AI/EPS).** The supplied raster has been keyed
  to transparency as `public/images/logo.png` (512px) — good to ~96px on screen,
  but a vector would sharpen the fine Devanagari linework and print cleanly.
- **Archival photographs** from the mandal's earlier decades, for the History page.
- **An Open Graph share image** (1200×630) if you want something other than the hero.
- **The credit for the mandal's song** (`public/audio/chembur_cha_adidev.mp3`) —
  composer, singer, and confirmation that the mandal holds the right to publish
  it. Set `credit` on `mandalSong` in `src/data/site.js` once supplied; the
  player is built to show it.

---

## Image guidelines

- Longest edge **≥ 1600px**, JPEG quality ~85.
- Next.js generates responsive sizes automatically — upload the largest version you have.
- Every image needs descriptive `alt` text in `src/data/gallery.js`. Describe what is happening, not just "Ganpati".
- Never publish a photograph of another mandal's murti as ours.
