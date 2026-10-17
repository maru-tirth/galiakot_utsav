# Editing the website content

Every piece of text, date and link on this site lives in **`src/data/`**. You should never need to open a component to change wording.

| What you want to change | File |
|---|---|
| Mandal name, tagline, description, social links, films | `src/data/site.js` |
| The scrolling notice strip at the top | `src/data/announcements.js` |
| Darshan status and timings | `src/data/announcements.js` |
| Menu items (header + footer) | `src/data/navigation.js` |
| Legacy timeline milestones | `src/data/timeline.js` |
| Ganesh Utsav cards, Navratri events, community activities | `src/data/festivals.js` |
| Gallery photos, captions, alt text, videos | `src/data/gallery.js` |
| Address, phone, email, map | `src/data/contact.js` |

---

## What has been confirmed, and what has not

The site deliberately distinguishes between the two. Nothing has been invented.

### Confirmed — published as fact

Taken from the mandal's own Instagram profile (`@gk_utsav1958`) and its own 2023 Aagman announcement poster:

- Established **1958**
- Ganesh Utsav identity: **Chembur Cha Aadidev** / चेंबुरचा आदिदेव
- **The oldest Navratri Utsav in Chembur**
- Marathi name: **गलियाकोट सांस्कृतिक उत्सव मंडळ**
- Aagman Sohala 2023: **Sunday 17 September 2023, 6:30 PM**, procession commenced from **Golf Club** — shown on the Darshan panel as a *record of a past celebration*, never as an upcoming event.

### Not confirmed — shown as "awaiting confirmation"

These render as visible, deliberately-styled empty states rather than being guessed or hidden:

| Item | Where it appears | File to edit |
|---|---|---|
| Venue address | Contact section + Contact page | `contact.js` → `contactDetails[0].value` |
| Map pin | Contact section | `contact.js` → `mapEmbed.enabled = true` + `src` |
| Phone number | Contact | `contact.js` |
| Email address | Contact | `contact.js` |
| Upcoming festival dates | Announcement strip, Darshan panel | `announcements.js` |
| Darshan timings | Darshan panel | `announcements.js` → `darshanStatus` |
| Navratri dates and timings | Navratri section | `festivals.js` → `navratriEvents[].schedule` |
| Milestones after 1958 | Timeline | `timeline.js` → set `confirmed: true` |
| Social / charitable initiatives | Community + Social Activities | `festivals.js` → `communityActivities` |

---

## Common tasks

**Announce this year's Utsav dates**

```js
// src/data/announcements.js
export const darshanStatus = {
  status: "scheduled",
  headline: "Darshan timings — Ganesh Utsav 2027",
  detail: "…",
  dates: "27 August – 6 September",
  timings: [{ label: "Mukh Darshan", value: "6:00 AM – 11:00 PM" }],
  venue: "…",
};
```

**Add a confirmed milestone**

```js
// src/data/timeline.js
{ year: "1975", title: "…", body: "…", confirmed: true }
```

Set `confirmed: true` and the entry moves from the dimmed "awaiting" style to the full gold style.

**Turn the map on** — set `mapEmbed.enabled = true` in `contact.js` and paste the Google Maps embed `src`. Only do this once the exact venue is confirmed.

---

## Deliberately not built

Two pages are routed in the plan but **not shipped**, because shipping them empty would be worse than not having them:

- **`/committee`** — needs real office-bearer names and roles.
- **`/donations`** — needs the mandal's official, verified donation process. **No UPI ID, bank account, QR code or payment integration has been created or guessed.** Supply the official process and this page can be built properly.

Neither appears in the navigation. Add them to `src/data/navigation.js` when they exist.

---

## Before going live

1. Set the real domain in `src/data/site.js` → `site.url`.
2. Remove `robots: { index: false, follow: false }` from `src/app/layout.js` so search engines can index the site.
3. Replace the placeholder logo and favicon (see `ASSETS.md`).
4. Replace the 7 placeholder Navratri/Visarjan images (see `ASSETS.md`).
5. Confirm image rights with Beyond Thought Films (see `ASSETS.md`).
6. Fill in the venue, phone and email in `contact.js`.
