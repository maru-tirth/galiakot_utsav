/**
 * Core organisation identity.
 *
 * Everything here is supplied by the mandal. Values marked `PLACEHOLDER`
 * must be confirmed by the committee before the site goes live.
 * See CONTENT.md for the full list of what is still outstanding.
 */

export const site = {
  name: "Galiakot Sanskrutik Utsav Mandal",
  nameMarathi: "गलियाकोट सांस्कृतिक उत्सव मंडळ",
  shortName: "Galiakot Mandal",
  initials: "GSUM",
  /**
   * The mandal's name for its Ganpati, as it appears on the official emblem.
   * `tagline` is the transliteration — kept for page titles, meta tags and
   * search, where Devanagari would not be what devotees type.
   */
  taglineDeva: "चेंबुरचा आदिदेव",
  tagline: "Chembur Cha Aadidev",
  taglineMeaning: "the Primordial Deity of Chembur",
  taglineMarathi: "श्रद्धा, परंपरा आणि एकतेचा उत्सव",
  established: 1958,
  locality: "Chembur, Mumbai, Maharashtra",
  precinct: "Galiakot Estate precinct, Chembur",

  /**
   * Confirmed from the mandal's own Instagram profile (@gk_utsav1958):
   * "Established in 1958. Ganesh Utsav - Chembur Cha Aadidev.
   *  Oldest Navratri Utsav in Chembur"
   */
  navratriClaim: "The oldest Navratri Utsav in Chembur",

  /** Short approved description used in the footer and meta tags. */
  description:
    "Galiakot Sanskrutik Utsav Mandal has brought the community of Chembur together in devotion and celebration since 1958 — through Ganesh Utsav, Navratri and the traditions that bind us across generations.",

  /** PLACEHOLDER — replace once the production domain is registered. */
  url: "https://www.galiakotmandal.org",
};

/**
 * The mandal's song, offered on the homepage.
 *
 * PLACEHOLDER: the composer / singer credit is not yet confirmed — see
 * ASSETS.md. Add it to `credit` once the committee supplies it.
 */
export const mandalSong = {
  src: "/audio/chembur_cha_adidev.mp3",
  title: "चेंबुरचा आदिदेव",
  titleLang: "mr",
  subtitle: "The mandal's song",
  credit: null,
};

export const socialLinks = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@gk_utsav1958",
    href: "https://www.instagram.com/gk_utsav1958/",
    description: "Reels, daily decoration updates and live event announcements.",
  },
  {
    id: "facebook",
    label: "Facebook",
    handle: "galiakot.1958",
    href: "https://www.facebook.com/galiakot.1958/",
    description: "Our media archive — photo collections and albums from past years.",
  },
  {
    id: "youtube",
    label: "YouTube",
    handle: "Festival films",
    href: "https://www.youtube.com/watch?v=JtxXbPl2ulE",
    description: "Video coverage of the Aagman Sohala and the Utsav.",
  },
];

/**
 * The referenced Aagman film. Credited to its maker — the mandal does not
 * own this footage, so it is linked rather than embedded as our own.
 */
export const featuredFilm = {
  title: "Chembur Cha Adidev — Aagman Sohala 2023",
  credit: "A film by Beyond Thought Films",
  youtubeId: "JtxXbPl2ulE",
  href: "https://www.youtube.com/watch?v=JtxXbPl2ulE",
};

/** The mandal's festival films, all by Beyond Thought Films. */
export const films = [
  {
    id: "JtxXbPl2ulE",
    title: "Chembur Cha Adidev — Aagman Sohala 2023",
    year: "2023",
    poster: "/images/aagman-01.jpg",
    href: "https://www.youtube.com/watch?v=JtxXbPl2ulE",
  },
  {
    id: "nIDjI3UXUs4",
    title: "Aagman Sohala 2022",
    year: "2022",
    poster: "/images/aagman-06.jpg",
    href: "https://www.youtube.com/watch?v=nIDjI3UXUs4",
  },
  {
    id: "ANe0YONWPJk",
    title: "Sthapana Puja & Mahaprasad",
    year: "Festival",
    poster: "/images/puja-01.jpg",
    href: "https://www.youtube.com/watch?v=ANe0YONWPJk",
  },
];

/**
 * Last confirmed Aagman, taken from the mandal's own 2023 announcement
 * poster. Kept as a record — it is NOT presented as an upcoming event.
 */
export const lastConfirmedAagman = {
  year: "2023",
  date: "Sunday, 17 September 2023",
  time: "6:30 PM",
  route: "Procession commenced from Golf Club",
};
