# Image assets

All images live in `public/images/`. To replace one, **drop a new file in with the same filename** — nothing else needs to change. Then update the `alt` text in `src/data/gallery.js` so it describes the new photograph.

Every photograph on the site is the mandal's own, from **Ganesh Utsav 2026** and **Navratri 2026**. No stock or licensed third-party imagery remains anywhere on the site.

---

## 1. Where the photographs came from

They were taken from the mandal's shared Drive folder:

| Folder | Contents |
|---|---|
| *Ganpati Agman 2026* (root) | 40 photographs, 98 clips |
| *Day 1 – Day 11 (Ganesh Utsav 2026)* | 66 photographs, 64 clips |
| *Navratri 2026 (from day 5)* | 1 photograph, 51 clips |

Two kinds of still are in use, and `asset-sources.json` records which is which for every file, down to the original filename and Drive file id:

- **15 photographs** — the HEIC/JPEG originals, converted to JPEG.
- **22 video frames** — real frames pulled from the mandal's own clips. These carry most of the Navratri coverage, because the Navratri folder is almost entirely video. They are genuine moments, but a still camera would resolve them better.

> **Worth knowing:** these photographs show recognisable members of the community, including children. That is normal for a mandal's own website, but the committee should be comfortable publishing them before the site goes live.

## 2. What each file shows

| File | Shows |
|---|---|
| `hero-idol.jpg` | **The hero.** Our 2026 murti, garlanded, with the mandal's name board |
| `darshan-idol.jpg` | The murti's face — painted eyes, trishul tilak, the Om |
| `darshan-wide.jpg` | The mandap, draped red and white, the murti on its dais |
| `idol-detail-01/02/03.jpg` | The Om in the palm; the damru; crown and trunk |
| `heritage-main.jpg` | The lane at night as the Aagman approaches |
| `heritage-detail.jpg` | The murti garlanded in marigold beside the name board |
| `aagman-01.jpg` … `aagman-06.jpg` | The Aagman: the lit float, the lane, sparklers, a flare |
| `dhol-01.jpg`, `pathak-bw-02.jpg` | The dhol-tasha pathak beside the murti |
| `crowd-01.jpg`, `crowd-02.jpg` | Volunteers celebrating; three young volunteers |
| `puja-01.jpg` … `puja-06.jpg` | The aarti, folded hands, darshan, and the Mahaprasad kitchen |
| `pathak-bw-01.jpg` | The puja being performed (black and white) |
| `community-01.jpg` … `community-04.jpg` | The volunteers, the neighbourhood, the elders of the mandal |
| `decor-01.jpg` | The draped canopy of the mandap |
| `navratri-01.jpg` … `navratri-06.jpg` | Garba in the lane, dandiya, the stage, the lit street |
| `visarjan-01.jpg` | **Standing in** — see below |

## 3. The one gap: Visarjan

The Drive folder contains no photography of the Visarjan itself. `visarjan-01.jpg` is therefore an authentic 2026 procession photograph standing in for it, and is still labelled "Placeholder" on the Visarjan card and in the gallery — the label now means *"real mandal photograph, wrong event"*, not *"stock image"*.

When Visarjan photographs arrive, drop one in as `visarjan-01.jpg`, set `placeholder: false` in `src/data/gallery.js`, and remove `placeholderImage: true` from the Visarjan card in `src/data/festivals.js`. The badge disappears on its own.

---

## 4. Video (`public/video/`)

Nine clips from the mandal's own 2026 footage are served from this site — no
YouTube, no Drive embed, nothing that breaks if the Drive folder's sharing
changes. They appear on the Gallery page under **Moments from 2026**.

The originals are iPhone `.MOV` (HEVC), which most browsers will not play and
which run to tens of megabytes each — 288 MB for these nine. Each was
transcoded to H.264 MP4 at long edge 1080, with `faststart` so playback begins
before the file has finished arriving: **26 MB for all nine**, between 6 and 40
seconds each. Posters are a real frame taken one second in, so no card opens on
a black lead-in.

Nothing downloads until someone presses play — the players carry
`preload="none"`, verified in the browser. Starting one clip pauses any other.

`asset-sources.json` records every clip's original filename, Drive file id,
duration and weight alongside the photographs.

To add or replace a clip, drop an MP4 and a matching `.jpg` poster into
`public/video/` and add an entry to `mandalClips` in `src/data/gallery.js`.
Keep clips short — every megabyte here is paid for by someone on mobile data.

The three longer **Beyond Thought Films** productions remain as YouTube links
in the section below the clips. They are the mandal's own festival films, and
are credited on screen.

---

## 5. Still needed from the mandal

- **The emblem in vector form (SVG/AI/EPS).** The supplied raster has been keyed
  to transparency as `public/images/logo.png` (512px) — good to ~96px on screen,
  but a vector would sharpen the fine Devanagari linework and print cleanly.
- **Photographs of the Visarjan** — the only part of the Utsav with no
  photography of its own (see section 3).
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
