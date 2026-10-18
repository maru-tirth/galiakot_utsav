/**
 * Media gallery.
 *
 * Every photograph here is the mandal's own, from Ganesh Utsav 2026 and
 * Navratri 2026. Images sourced from the mandal's video footage are marked
 * `fromFootage: true` — they are real frames of real moments, flagged only
 * so the committee knows which ones a still camera could improve on.
 *
 * `placeholder: true` now means one thing only: the photograph is authentic
 * mandal content but is standing in for an event not yet photographed.
 * See ASSETS.md.
 */

export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "darshan", label: "Ganpati Darshan" },
  { id: "aagman", label: "Aagman" },
  { id: "puja", label: "Sthapana Puja" },
  { id: "visarjan", label: "Visarjan" },
  { id: "navratri", label: "Navratri" },
  { id: "community", label: "Community" },
];

const g = (
  id,
  src,
  w,
  h,
  category,
  caption,
  alt,
  placeholder = false,
  captionLang, // "mr" where the caption is Devanagari
) => ({
  id,
  src,
  width: w,
  height: h,
  category,
  caption,
  captionLang,
  alt,
  placeholder,
});

export const galleryItems = [
  // ---------- Ganpati Darshan ----------
  g("darshan-idol", "/images/darshan-idol.jpg", 1800, 1350, "darshan",
    "चेंबुरचा आदिदेव",
    "Close view of the mandal's Ganpati murti — the painted eyes, the trishul tilak and the Om on the forehead",
    false, "mr"),
  g("darshan-wide", "/images/darshan-wide.jpg", 1800, 1350, "darshan",
    "The mandap",
    "The mandal's mandap, red and white draped and strung with lights, the murti installed on its dais"),
  g("idol-detail-03", "/images/idol-detail-03.jpg", 1350, 1800, "darshan",
    "Crown and trunk",
    "The murti's golden crown and curved trunk seen from the side"),
  g("idol-detail-01", "/images/idol-detail-01.jpg", 1800, 1350, "darshan",
    "The Om in the palm",
    "An open blue palm on the murti's backdrop, the Om painted at its centre"),
  g("idol-detail-02", "/images/idol-detail-02.jpg", 1800, 1350, "darshan",
    "The damru",
    "A hand of the murti's backdrop holding a small damru"),
  g("heritage-detail", "/images/heritage-detail.jpg", 1013, 1800, "darshan",
    "Garlanded",
    "The murti garlanded in marigold, the mandal's name board beside it"),

  // ---------- Aagman Sohala ----------
  g("aagman-01", "/images/aagman-01.jpg", 1013, 1800, "aagman",
    "Aagman Sohala, by night",
    "The mandal's murti on its float, lit against the night as the Aagman moves through the lane"),
  g("aagman-06", "/images/aagman-06.jpg", 1600, 900, "aagman",
    "Bappa comes home",
    "The murti on its float during the Aagman procession at night"),
  g("aagman-02", "/images/aagman-02.jpg", 1600, 900, "aagman",
    "Carried through the lane",
    "Volunteers accompanying the murti on its float through the neighbourhood"),
  g("aagman-05", "/images/aagman-05.jpg", 1350, 1800, "aagman",
    "Sparklers before Bappa",
    "Sparklers burning in front of the murti during the Aagman Sohala"),
  g("aagman-04", "/images/aagman-04.jpg", 1013, 1800, "aagman",
    "A flare in the lane",
    "A flare held up in the street, the lane lit red, during the procession"),
  g("dhol-01", "/images/dhol-01.jpg", 1350, 1800, "aagman",
    "Dhol-tasha",
    "The dhol-tasha pathak playing beside the murti during the Aagman"),
  g("pathak-bw-02", "/images/pathak-bw-02.jpg", 1013, 1800, "aagman",
    "The tasha",
    "A tasha raised beside the murti during the procession"),
  g("aagman-03", "/images/aagman-03.jpg", 1013, 1800, "aagman",
    "Volunteers of the mandal",
    "Mandal volunteers in their red kurtas walking the lane ahead of the float"),
  g("heritage-main", "/images/heritage-main.jpg", 1013, 1800, "aagman",
    "The lane waits",
    "The neighbourhood lane at night, lined with devotees as the procession approaches"),
  g("decor-01", "/images/decor-01.jpg", 1600, 900, "aagman",
    "The mandap canopy",
    "The draped canopy and strings of light above the mandal's mandap"),

  // ---------- Sthapana Puja & Mahaprasad ----------
  g("puja-01", "/images/puja-01.jpg", 1013, 1800, "puja",
    "The aarti",
    "The aarti thali and incense smoke rising before the murti"),
  g("pathak-bw-01", "/images/pathak-bw-01.jpg", 1012, 1800, "puja",
    "The rite",
    "Members of the mandal performing the puja before the murti"),
  g("puja-02", "/images/puja-02.jpg", 1600, 900, "puja",
    "Folded hands",
    "Devotees standing with folded hands through the aarti"),
  g("puja-05", "/images/puja-05.jpg", 1800, 1350, "puja",
    "Darshan, together",
    "A family standing before the murti in the mandap"),
  g("puja-03", "/images/puja-03.jpg", 1013, 1800, "puja",
    "Mahaprasad",
    "The Mahaprasad being cooked in the mandal's kitchen"),
  g("puja-04", "/images/puja-04.jpg", 1013, 1800, "puja",
    "Served to every devotee",
    "A thali of Mahaprasad being served"),
  g("puja-06", "/images/puja-06.jpg", 1013, 1800, "puja",
    "The mandal's kitchen",
    "Volunteers working the vessels that feed the Mahaprasad"),

  // ---------- Community ----------
  g("community-01", "/images/community-01.jpg", 1800, 1350, "community",
    "The volunteers",
    "The mandal's volunteers in their red t-shirts, gathered before the murti"),
  g("community-04", "/images/community-04.jpg", 1800, 1350, "community",
    "The whole team",
    "Mandal volunteers seated together in front of the murti"),
  g("community-02", "/images/community-02.jpg", 1800, 1350, "community",
    "The neighbourhood",
    "A gathering of the mandal's members and families under the mandap lights"),
  g("community-03", "/images/community-03.jpg", 1800, 1350, "community",
    "Elders of the mandal",
    "Senior members of the mandal standing together beside the murti"),
  g("crowd-01", "/images/crowd-01.jpg", 1013, 1800, "community",
    "The street celebrates",
    "Volunteers with their arms raised in the lane during the Aagman"),
  g("crowd-02", "/images/crowd-02.jpg", 1350, 1800, "community",
    "The next generation",
    "Three young volunteers of the mandal in front of the murti"),

  // ---------- Navratri 2026 ----------
  g("navratri-01", "/images/navratri-01.jpg", 1013, 1800, "navratri",
    "The lane, dancing",
    "The lane filled with Garba dancers, the lit stage at the far end"),
  g("navratri-04", "/images/navratri-04.jpg", 1013, 1800, "navratri",
    "Nine nights",
    "A crowd gathered under the strings of light for the Navratri Utsav"),
  g("navratri-05", "/images/navratri-05.jpg", 1013, 1800, "navratri",
    "Dandiya Raas",
    "Dandiya sticks meeting under the coloured lights of the Utsav"),
  g("navratri-02", "/images/navratri-02.jpg", 1013, 1800, "navratri",
    "Dressed for the Utsav",
    "Families in festival dress walking the decorated lane during Navratri"),
  g("navratri-06", "/images/navratri-06.jpg", 1013, 1800, "navratri",
    "The stage",
    "The decorated Navratri stage lit in blue and green"),
  g("navratri-03", "/images/navratri-03.jpg", 1013, 1800, "navratri",
    "The lane at night",
    "The lane strung end to end with lights during the Navratri Utsav"),

  // ---------- Visarjan ----------
  // Authentic 2026 procession photography, standing in until the Visarjan
  // itself is photographed. The caption claims nothing it cannot support.
  g("visarjan-01", "/images/visarjan-01.jpg", 1013, 1800, "visarjan",
    "The float, by night",
    "The mandal's float lit against the night sky during the 2026 procession",
    true),
];

/**
 * The mandal's own footage from 2026, transcoded for the web and served
 * from this site. Posters are the real opening frame of each clip.
 */
const clip = (slug, caption, occasion) => ({
  id: slug,
  src: `/video/${slug}.mp4`,
  poster: `/video/${slug}.jpg`,
  caption,
  occasion,
});

export const mandalClips = [
  clip("aagman-float", "The float arrives", "Aagman 2026"),
  clip("aagman-dhol", "Dhol-tasha", "Aagman 2026"),
  clip("aagman-flare", "A flare in the lane", "Aagman 2026"),
  clip("utsav-sparklers", "Sparklers before Bappa", "Ganesh Utsav 2026"),
  clip("utsav-aarti", "The aarti", "Ganesh Utsav 2026"),
  clip("utsav-mahaprasad", "Mahaprasad", "Ganesh Utsav 2026"),
  clip("navratri-garba", "Garba fills the lane", "Navratri 2026"),
  clip("navratri-dandiya", "Dandiya Raas", "Navratri 2026"),
  clip("navratri-crowd", "Nine nights", "Navratri 2026"),
];

export const galleryVideos = [
  {
    id: "JtxXbPl2ulE",
    title: "Chembur Cha Adidev — Aagman Sohala 2023",
    credit: "A film by Beyond Thought Films",
    category: "aagman",
    poster: "/images/aagman-01.jpg",
    href: "https://www.youtube.com/watch?v=JtxXbPl2ulE",
  },
  {
    id: "nIDjI3UXUs4",
    title: "Aagman Sohala 2022",
    credit: "A film by Beyond Thought Films",
    category: "aagman",
    poster: "/images/aagman-06.jpg",
    href: "https://www.youtube.com/watch?v=nIDjI3UXUs4",
  },
  {
    id: "ANe0YONWPJk",
    title: "Sthapana Puja & Mahaprasad",
    credit: "A film by Beyond Thought Films",
    category: "puja",
    poster: "/images/puja-01.jpg",
    href: "https://www.youtube.com/watch?v=ANe0YONWPJk",
  },
];
