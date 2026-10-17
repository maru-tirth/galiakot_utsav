/**
 * Media gallery.
 *
 * Images marked `placeholder: false` are AUTHENTIC Galiakot Sanskrutik
 * Utsav Mandal photographs, taken from the mandal's own festival films
 * (Beyond Thought Films). They show our own murti, pathak and devotees.
 *
 * Images marked `placeholder: true` are licensed stand-ins used only where
 * no mandal footage exists yet (Navratri and Visarjan). Replace them with
 * the mandal's own photographs — see ASSETS.md.
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

const g = (id, src, w, h, category, caption, alt, placeholder = false) => ({
  id,
  src,
  width: w,
  height: h,
  category,
  caption,
  alt,
  placeholder,
});

export const galleryItems = [
  // ---------- Darshan (authentic) ----------
  g("darshan-idol", "/images/darshan-idol.jpg", 1920, 1080, "darshan",
    "Chembur Cha Aadidev",
    "Close view of the mandal's Ganpati murti, crowned in gold and framed by lotus garlands"),
  g("darshan-wide", "/images/darshan-wide.jpg", 1920, 1080, "darshan",
    "The murti on its float",
    "The mandal's murti carried on its float through the streets of Chembur in daylight"),
  g("idol-detail-01", "/images/idol-detail-01.jpg", 1920, 1080, "darshan",
    "Crown and lotus",
    "The murti's golden crown and lotus-framed shoulders"),
  g("idol-detail-02", "/images/idol-detail-02.jpg", 1920, 1080, "darshan",
    "Draped in red and gold",
    "The murti draped in a red and gold shela during the procession"),
  g("idol-detail-03", "/images/idol-detail-03.jpg", 1920, 1080, "darshan",
    "Adorned before the procession",
    "The murti adorned with jewels before the Aagman procession begins"),
  g("heritage-detail", "/images/heritage-detail.jpg", 1920, 1080, "darshan",
    "The trishul tilak",
    "Detail of the murti's painted eye and trishul tilak"),

  // ---------- Aagman (authentic) ----------
  g("aagman-01", "/images/aagman-01.jpg", 1920, 1080, "aagman",
    "Aagman Sohala, by night",
    "The mandal's murti on its float, illuminated at night during the Aagman Sohala"),
  g("aagman-05", "/images/aagman-05.jpg", 1920, 1080, "aagman",
    "Beneath the saffron flag",
    "The murti beneath a saffron flag as the night procession passes"),
  g("aagman-02", "/images/aagman-02.jpg", 1920, 1080, "aagman",
    "Petals over the procession",
    "Flower petals and confetti thrown over the Aagman procession"),
  g("aagman-04", "/images/aagman-04.jpg", 1920, 1080, "aagman",
    "The dhol-tasha pathak",
    "The dhol-tasha pathak playing during the Aagman Sohala"),
  g("aagman-06", "/images/aagman-06.jpg", 1920, 1080, "aagman",
    "Tasha raised",
    "Tasha cymbals raised above the procession at night"),
  g("dhol-01", "/images/dhol-01.jpg", 1920, 1080, "aagman",
    "The dhol",
    "Close view of the dhol being played during the procession"),
  g("aagman-03", "/images/aagman-03.jpg", 1920, 1080, "aagman",
    "Volunteers of the mandal",
    "Mandal volunteers accompanying the procession through the street"),
  g("heritage-main", "/images/heritage-main.jpg", 1920, 1080, "aagman",
    "Through Chembur",
    "The Aagman procession moving beneath the Chembur flyover"),
  g("pathak-bw-01", "/images/pathak-bw-01.jpg", 1920, 1080, "aagman",
    "Before it begins",
    "Members of the pathak gathered before the procession begins"),
  g("pathak-bw-02", "/images/pathak-bw-02.jpg", 1920, 1080, "aagman",
    "The pathak assembles",
    "The pathak assembled at the start of the Aagman Sohala"),
  g("decor-01", "/images/decor-01.jpg", 1920, 1080, "aagman",
    "The mandap at night",
    "The mandal's decorated mandap illuminated at night"),

  // ---------- Sthapana Puja (authentic) ----------
  g("puja-01", "/images/puja-01.jpg", 1920, 1080, "puja",
    "Sthapana",
    "The murti installed for the Sthapana Puja"),
  g("puja-02", "/images/puja-02.jpg", 1920, 1080, "puja",
    "An offering",
    "A devotee making an offering at the feet of the murti"),
  g("puja-03", "/images/puja-03.jpg", 1920, 1080, "puja",
    "The aarti",
    "A young devotee performing the aarti before the murti"),
  g("puja-05", "/images/puja-05.jpg", 1920, 1080, "puja",
    "The painted eye",
    "Close detail of the murti's painted eye during the puja"),
  g("puja-06", "/images/puja-06.jpg", 1920, 1080, "puja",
    "Mahaprasad",
    "Mahaprasad offered to devotees during the puja"),

  // ---------- Community (authentic) ----------
  g("puja-04", "/images/puja-04.jpg", 1920, 1080, "community",
    "Folded hands",
    "Devotees with folded hands during the aarti"),
  g("community-01", "/images/community-01.jpg", 1920, 1080, "community",
    "The community gathers",
    "The gathered community of Chembur during the Sthapana Puja"),
  g("community-02", "/images/community-02.jpg", 1920, 1080, "community",
    "At prayer",
    "Devotees of the mandal at prayer"),
  g("community-03", "/images/community-03.jpg", 1920, 1080, "community",
    "The next generation",
    "A child watching the mandal's procession pass"),
  g("crowd-01", "/images/crowd-01.jpg", 1920, 1080, "community",
    "The street celebrates",
    "Devotees celebrating in the street as the procession passes"),
  g("crowd-02", "/images/crowd-02.jpg", 1920, 1080, "community",
    "Hands raised",
    "Devotees with raised hands during the Aagman celebration"),

  // ---------- Placeholders: no mandal footage yet ----------
  g("visarjan-01", "/images/visarjan-01.jpg", 1280, 918, "visarjan",
    "Visarjan",
    "An immersion procession entering the sea during Ganpati Visarjan", true),
  g("navratri-01", "/images/navratri-01.jpg", 1920, 1080, "navratri",
    "The Garba circle",
    "Dancers moving in a wide Garba circle on a decorated festival ground", true),
  g("navratri-02", "/images/navratri-02.jpg", 1920, 1280, "navratri",
    "Dancing Garba",
    "Devotees dancing Garba under strings of festival lights", true),
  g("navratri-03", "/images/navratri-03.jpg", 1920, 1280, "navratri",
    "A gathering of thousands",
    "A large crowd gathered for Navratri Garba at night", true),
  g("navratri-04", "/images/navratri-04.jpg", 1920, 3008, "navratri",
    "Traditional dress",
    "A line of dancers in traditional red Garba dress", true),
  g("navratri-05", "/images/navratri-05.jpg", 1920, 1280, "navratri",
    "The ground, decorated",
    "A Navratri ground decorated with canopies of hanging lights at dusk", true),
  g("navratri-06", "/images/navratri-06.jpg", 1024, 582, "navratri",
    "Mirror-work",
    "Close view of traditional mirror-work Garba attire", true),
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
