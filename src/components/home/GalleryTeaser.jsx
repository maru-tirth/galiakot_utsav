import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import MediaGallery from "@/components/gallery/MediaGallery";

export function GalleryTeaser() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="surface-light scroll-mt-24 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            as="h2"
            tone="light"
            eyebrow="Photo & Video"
            title="The Utsav, year after year"
            lede="Moments from our Aagman Sohala, Sthapana Puja and the devotees who make the festival what it is."
            className="max-w-xl"
          />
          <Reveal delay={120}>
            <Button href="/gallery">Open full gallery</Button>
          </Reveal>
        </div>

        <Reveal delay={60} className="mt-12">
          <MediaGallery limit={8} showFilter={false} />
        </Reveal>
      </div>
    </section>
  );
}

export default GalleryTeaser;
