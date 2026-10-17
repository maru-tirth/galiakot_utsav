import { site } from "@/data/site";
import PageHero from "@/components/layout/PageHero";
import ContactSection from "@/components/home/ContactSection";
import SocialStrip from "@/components/home/SocialStrip";

export const metadata = {
  title: "Contact",
  description: `Contact ${site.name} in Chembur, Mumbai — venue, enquiries and official social channels.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact the mandal"
        lede="For darshan enquiries, volunteering, or to help us complete the mandal's official records."
        image="/images/decor-01.jpg"
        imageAlt=""
      />
      <ContactSection />
      <SocialStrip />
    </>
  );
}
