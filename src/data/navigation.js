/**
 * Primary navigation.
 *
 * `/committee` and `/donations` are intentionally absent: they ship only
 * once the mandal supplies real office-bearer details and its official,
 * verified donation process. An empty page is worse than no page.
 */

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Our History", href: "/history" },
  { label: "Ganesh Utsav", href: "/ganesh-utsav" },
  { label: "Navratri", href: "/navratri" },
  { label: "Gallery", href: "/gallery" },
  { label: "Social Activities", href: "/social-activities" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = [
  {
    heading: "The Mandal",
    links: [
      { label: "Our History", href: "/history" },
      { label: "Social Activities", href: "/social-activities" },
      { label: "Contact & Location", href: "/contact" },
    ],
  },
  {
    heading: "Festivals",
    links: [
      { label: "Ganesh Utsav", href: "/ganesh-utsav" },
      { label: "Ganpati Darshan", href: "/ganesh-utsav#darshan" },
      { label: "Aagman Sohala", href: "/ganesh-utsav#aagman" },
      { label: "Navratri Utsav", href: "/navratri" },
    ],
  },
  {
    heading: "Media",
    links: [
      { label: "Photo Gallery", href: "/gallery" },
      { label: "Festival Films", href: "/gallery?type=video" },
    ],
  },
];
