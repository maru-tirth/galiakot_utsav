import { Cormorant_Garamond, Inter, Mukta } from "next/font/google";
import "./globals.css";

import { site } from "@/data/site";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ScrollProgress from "@/components/layout/ScrollProgress";

/* Self-hosted by next/font — no third-party request, no layout shift. */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "Galiakot Sanskrutik Utsav Mandal",
    "Chembur Cha Aadidev",
    "Chembur Ganpati",
    "Ganesh Utsav Chembur",
    "Navratri Chembur",
    "Mumbai Ganeshotsav",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/images/hero-idol.jpg",
        width: 1200,
        height: 1200,
        alt: "Ganpati murti illuminated during the festival",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  // PLACEHOLDER: enable once the production domain is live.
  robots: { index: false, follow: false },
};

export const viewport = {
  themeColor: "#310E14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${mukta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory">
        <ScrollProgress />
        <AnnouncementBar />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
