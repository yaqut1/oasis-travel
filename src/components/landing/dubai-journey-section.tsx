import { JourneySection } from "@/components/landing/journey-section";
import { IMAGES, SITE } from "@/lib/site-config";

export function DubaiJourneySection() {
  return (
    <JourneySection
      id="dubai"
      label="Dubai journeys"
      title="From quote to home, one consultant."
      description="Flights, visa, hotel, airport transfers and city experiences — arranged together so nothing gets lost between suppliers."
      image={IMAGES.dubai}
      imageAlt="Dubai skyline with Burj Khalifa at dusk"
      wide
      packages={[
        {
          title: "City Break · 4 nights",
          subtitle: "Hotel + transfers + visa assistance",
        },
        {
          title: "Family Holiday · 6 nights",
          subtitle: "Flights + apartment hotel + desert safari",
        },
        {
          title: "Stopover · 2 nights",
          subtitle: "Transit visa + airport hotel + transfer",
        },
      ]}
      whatsAppMessage="Hello! I'm interested in a Dubai holiday package."
      note="We prepare and submit your visa correctly; approval, timing and rejection are decided solely by UAE immigration authorities."
    />
  );
}

export function UmrahJourneySection() {
  return (
    <JourneySection
      id="umrah"
      reverse
      label="Umrah journeys"
      labelVariant="gold"
      title="A peaceful Umrah, without the paperwork stress."
      description="Flights, Saudi visas, hotels close to the Haram, ground transfers and clear guidance — so you can focus on your worship."
      image={IMAGES.madinah}
      imageAlt="The Green Dome and minaret of the Prophet's Mosque in Madinah"
      packages={[
        {
          title: "Economy Umrah · 10 days",
          subtitle: "Shared rooms, hotels ~1 km from Haram",
        },
        {
          title: "Standard Umrah · 14 days",
          subtitle: "Hotels within walking distance",
        },
        {
          title: "Premium · Ramadan",
          subtitle: "5★ Haram‑view hotels, private transfers",
        },
      ]}
      whatsAppMessage="Assalamu alaikum! I'd like a quote for an Umrah package."
      note={`Umrah visas are issued exclusively by Saudi immigration authorities. ${SITE.agencyName} assists with documentation but cannot guarantee approval or processing times.`}
    />
  );
}