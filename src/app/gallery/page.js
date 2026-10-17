import Image from "next/image";
import { Play } from "lucide-react";
import { site } from "@/data/site";
import { galleryVideos } from "@/data/gallery";
import PageHero from "@/components/layout/PageHero";
import MediaGallery from "@/components/gallery/MediaGallery";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Gallery",
  description: `Photographs and films from the Ganesh Utsav and Navratri celebrations of ${site.name}, Chembur.`,
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Photo & Video"
        title="Gallery"
        lede="Moments from our Aagman Sohala, Sthapana Puja, Darshan and the devotees of Chembur."
        image="/images/crowd-01.jpg"
        imageAlt=""
      />

      <section className="surface-light py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <MediaGallery />
        </div>
      </section>

      <section className="on-dark surface-dark py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <SectionHeading
            as="h2"
            eyebrow="Festival Films"
            title="Watch the Utsav"
            lede="Films of our celebrations, produced by Beyond Thought Films."
            align="center"
            divider
          />

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryVideos.map((video, i) => (
              <li key={video.id}>
                <Reveal delay={i * 80}>
                  <a
                    href={video.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-sm border border-gold/20 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={video.poster}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-void/40 transition-colors duration-300 group-hover:bg-void/25"
                      />
                      <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/60 bg-maroon/70 text-gold backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                        <Play size={22} aria-hidden="true" fill="currentColor" />
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg font-semibold text-ivory">
                        {video.title}
                      </h3>
                      <p className="mt-1 text-xs text-ivory/50">
                        {video.credit} · Watch on YouTube
                      </p>
                    </div>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
