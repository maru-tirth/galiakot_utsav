# Content review — the supplied "Corporate Identity" document

A content document was supplied covering governance, the festive calendar, civic contributions and the media directory. It appears to have been drafted with an AI assistant rather than written by the committee, so its claims have been triaged before publication.

**Rule applied:** descriptive claims about what the mandal *does* are low-risk and have been published. Claims about **legal status, public-safety measures, welfare delivery and operational statistics** are not published until the committee confirms them in its own words — a false claim in any of those four areas is a liability, not a typo.

---

## ✅ Published

| Content | Where it now appears |
|---|---|
| Official email `gkutsav.1958@gmail.com` | Contact section + Contact page (was "awaiting") |
| Venue named as **Galiakot Estate, Chembur** | Contact hint |
| "Chembur Cha Aadidev" = *the Primordial Deity of Chembur* | `site.taglineMeaning` |
| Aagman Sohala — Dhol-Tasha, banners, crowd coordination | Ganesh chapter |
| **Prana Pratishtha** on day one; **Maha Prasad** | Sthapana Puja card |
| **Maha Aarti**, morning and evening, across ten days | Darshan card |
| **Visarjan Yatra** — procession through neighbourhood roads | Visarjan card |
| Mata Ki Chowki as devotional singing and classical music | Navratri events |
| **Dussehra** ceremonies | Navratri events (new) |
| **Holika Dahan**, **Sunderkand Path & Bhajans** | New "Through the year" block, Community section |
| Channel purposes (IG = reels/updates, FB = archive, YT = coverage) | Social section + footer |

## ⏳ Published in the "awaiting confirmation" state

The four historical eras are in the timeline but render dimmed, labelled *Awaiting official confirmation*. Specific operational phrasing from the draft ("regularized neighborhood collection metrics", "unified digital payment integration") was **not** carried over.

| Era | Shown as |
|---|---|
| 1958–1970 | Foundation |
| 1971–1995 | Consolidation |
| 1996–2015 | Scaling the Utsav |
| 2016– | Reaching further |

**To publish these properly:** set `confirmed: true` on each entry in `src/data/timeline.js`.

---

## ⛔ Held back — needs the committee's own confirmation

### 1. Legal and regulatory status
> *"non-profit neighborhood cultural association and community trust… operates under the regulatory purview of the Office of the Charity Commissioner of Maharashtra, complying with standard reporting protocols."*

A public registration claim. If the trust is not in fact registered, or is registered differently, this is a misrepresentation on an official website. **Needs:** the registration number and registered entity name, exactly as they appear on the certificate.

### 2. Public-safety assurances
> *"CCTV Surveillance… Structural Auditing… Dedicated Entry/Exit Paths… rigorous engineering checks."*

These are safety promises made to devotees deciding whether to bring family and elderly relatives. Publishing them when they are not fully in place transfers real risk onto visitors and onto the mandal. **Needs:** explicit confirmation from whoever runs crowd management.

### 3. Welfare and health activities
> *"blood donation camps and basic health check-ups… assisting local authorities… during civic disruptions or heavy monsoon flooding."*

The Social Activities page is built and waiting for exactly this. But the original brief was explicit that charitable work must not be claimed without evidence. **Needs:** which camps, roughly when, and ideally a photograph.

### 4. Operational statistics and capabilities
> *"multi-camera live streams… unified digital payment integration… online tracking… serving hot meals to thousands of visitors… drone recordings."*

- **Live streams** — the Darshan panel explicitly states no stream is running. We confirmed only three YouTube videos exist, none of them live. **Do not** set `darshanStatus.status = "live"` without an actual running stream.
- **"Unified digital payment integration"** — no payment flow, UPI ID, QR code or bank detail has been created, and none will be without the committee's verified official process. See `CONTENT.md`.
- **"Thousands of visitors"** — an attendance figure; publishable only if the mandal stands behind the number.

### 5. Immersion point
> *"designated immersion points (such as Girgaon Chowpatty or local water reservoirs)"*

The draft itself hedges with "such as". The Visarjan card therefore says "the immersion point" without naming one. **Needs:** the actual immersion point used.

### 6. YouTube channel
The draft refers to a "Galiakot Sanskrutik Utsav Mandal Channel". No such channel was found — the three films are on **Beyond Thought Films**. If the mandal has its own channel, send the URL and the YouTube link will point there instead.

---

## Still outstanding regardless

- Street address and map pin for Galiakot Estate
- Official telephone number
- Committee / office-bearer names → `/committee`
- Official donation process → `/donations`
- Mandal logo, favicon, archival photographs
- Mandal's own Navratri and Visarjan photographs (see `ASSETS.md`)
