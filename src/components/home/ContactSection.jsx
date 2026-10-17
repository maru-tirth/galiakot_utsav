import { MapPin, Phone, Mail, AtSign } from "lucide-react";
import { contactDetails, mapEmbed } from "@/data/contact";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import AwaitingNote from "@/components/ui/AwaitingNote";
import { MandalaRosette } from "@/components/ui/Ornament";

const icons = { venue: MapPin, phone: Phone, email: Mail, social: AtSign };

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="on-dark surface-dark relative overflow-hidden scroll-mt-24 py-20 lg:py-28"
    >
      <MandalaRosette className="pointer-events-none absolute -right-32 bottom-0 h-[480px] w-[480px] text-gold/[0.05]" />

      <div className="relative mx-auto grid max-w-[1400px] gap-12 px-4 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <SectionHeading
            as="h2"
            eyebrow="Visit & Contact"
            title="Come for darshan"
            lede={`The mandal celebrates in ${site.locality}. Confirmed venue and contact details will be published here as soon as the committee supplies them.`}
          />

          <AwaitingNote className="mt-8 max-w-xl">
            We have deliberately not published an address or phone number
            that has not been verified — a wrong pin sends devotees to the
            wrong place.
          </AwaitingNote>

          <Reveal delay={150} className="mt-9">
            <Button href="/contact">Contact the mandal</Button>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <dl className="divide-y divide-gold/15 border-y border-gold/15">
            {contactDetails.map((detail) => {
              const Icon = icons[detail.id] ?? MapPin;
              return (
                <div key={detail.id} className="flex gap-4 py-5">
                  <Icon
                    size={18}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-gold/70"
                  />
                  <div className="min-w-0">
                    <dt className="eyebrow text-gold/80">{detail.label}</dt>
                    <dd className="mt-1.5">
                      {detail.value ? (
                        detail.href ? (
                          <a
                            href={detail.href}
                            target={detail.external ? "_blank" : undefined}
                            rel={
                              detail.external
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="inline-flex min-h-6 items-center text-ivory underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <span className="text-ivory">{detail.value}</span>
                        )
                      ) : (
                        <>
                          {detail.hint ? (
                            <span className="block text-ivory/70">
                              {detail.hint}
                            </span>
                          ) : null}
                          <span className="mt-1 block text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gold/45">
                            Awaiting confirmation
                          </span>
                          <span className="mt-1 block text-xs leading-relaxed text-ivory/40">
                            {detail.awaiting}
                          </span>
                        </>
                      )}
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>

          {mapEmbed.enabled && mapEmbed.src ? (
            <div className="mt-6 aspect-video overflow-hidden rounded-sm border border-gold/20">
              <iframe
                src={mapEmbed.src}
                title={`Map showing ${site.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          ) : (
            <div className="mt-6 flex aspect-video items-center justify-center rounded-sm border border-dashed border-gold/25 px-6 text-center">
              <p className="text-xs leading-relaxed text-ivory/45">
                Map will appear here once the exact venue is confirmed.
                <br />
                <span className="text-ivory/30">
                  Set <code className="text-gold/60">mapEmbed.enabled</code> in{" "}
                  <code className="text-gold/60">src/data/contact.js</code>
                </span>
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export default ContactSection;
