import { site } from "@/data/site";
import PageHero from "@/components/layout/PageHero";
import Navratri from "@/components/home/Navratri";
import MediaGallery from "@/components/gallery/MediaGallery";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export const metadata = {
  title: "Navratri Utsav",
  description: `Garba, Dandiya and Mata Ki Chowki — ${site.navratriClaim}, held each year by ${site.name} in Chembur.`,
};

export default function NavratriPage() {
  return (
    <>
      <PageHero
        eyebrow="Navratri Utsav"
        title="Nine nights, nine generations"
        lede={`${site.navratriClaim} — Garba, Dandiya Raas and Mata Ki Chowki, held each year on the mandal's ground.`}
        image="/images/navratri-05.jpg"
        imageAlt=""
      />

      <Navratri />

      <section className="surface-light py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <SectionHeading
            as="h2"
            tone="light"
            eyebrow="Navratri Gallery"
            title="Garba and Dandiya"
            align="center"
            divider
          />

          <Reveal className="mt-12">
            <MediaGallery initialCategory="navratri" showFilter={false} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
