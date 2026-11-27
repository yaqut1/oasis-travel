import Image from "next/image";
import { MotionSection } from "@/components/landing/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageWrap } from "@/components/ui/page-wrap";
import { SectionLabel } from "@/components/ui/section-label";
import { WhatsAppTextLink } from "@/components/ui/buttons";
import { IMAGES } from "@/lib/site-config";

const services = [
  {
    image: IMAGES.flights,
    alt: "Airplane wing above the clouds",
    label: "Flights",
    title: "Dubai Flight Tickets",
    description:
      "Economy to business, all major airlines, group bookings and stopover options.",
    message: "Hello! I'd like a quote for Dubai flight tickets.",
  },
  {
    image: IMAGES.visa,
    alt: "Dubai visa application form and passport on a desk",
    label: "Visas",
    title: "Dubai Visa Assistance",
    description: "Tourist, transit & family visas with a clear document checklist.",
    message: "Hello! I need help with a Dubai visa.",
  },
  {
    image: IMAGES.umrah,
    alt: "The Kaaba at Masjid al-Haram in Makkah",
    label: "Spiritual",
    title: "Umrah Packages",
    description:
      "Flights + visa + hotels near the Haram, with first‑timer guidance.",
    message: "Hello! I'd like a quote for an Umrah package.",
  },
  {
    image: IMAGES.group,
    alt: "Group of travelers on a Dubai desert safari",
    label: "Groups",
    title: "Group & Family Travel",
    description: "Families, communities & corporate groups, coordinated end‑to‑end.",
    message: "Hello! I'd like to plan group or family travel.",
  },
] as const;

export function ServicesSection() {
  return (
    <MotionSection id="services">
      <PageWrap>
        <SectionHeading
          label="What we do"
          title="Everything handled by one trusted team."
          description="Four core services, each quoted personally on WhatsApp — no self‑serve checkout, no surprises."
        />

        <div className="grid gap-6 min-[680px]:grid-cols-2 min-[960px]:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="group bg-white">
              <div className="relative aspect-4/3 overflow-hidden rounded-[14px]">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 960px) 50vw, 25vw"
                  className="object-cover transition-transform duration-600 group-hover:scale-[1.04]"
                />
              </div>
              <div className="px-0.5 pt-5">
                <SectionLabel>{service.label}</SectionLabel>
                <h3 className="text-ink mt-2 text-[1.15rem] font-medium">
                  {service.title}
                </h3>
                <p className="text-muted mt-1 mb-3.5 text-[0.92rem]">
                  {service.description}
                </p>
                <WhatsAppTextLink message={service.message}>
                  Request a Free Quote on WhatsApp
                </WhatsAppTextLink>
              </div>
            </article>
          ))}
        </div>
      </PageWrap>
    </MotionSection>
  );
}