import { SITE } from "@/lib/site-config";

export const travelAgencyJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: SITE.agencyName,
  url: SITE.siteUrl,
  telephone: SITE.phoneDial,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "[Office Street Address]",
    addressLocality: "[City]",
    addressCountry: "[Country]",
  },
  sameAs: [whatsAppSameAs()],
};

function whatsAppSameAs() {
  return `https://wa.me/${SITE.whatsapp}`;
}

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I get a free quote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tap any 'Request a Free Quote on WhatsApp' button, call us, or send the form. We reply personally with trip details.",
      },
    },
    {
      "@type": "Question",
      name: "Do you take online payments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. There is no online booking or card payment on this site. You confirm only after receiving a clear quote.",
      },
    },
    {
      "@type": "Question",
      name: "Is visa approval guaranteed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Approval, timing and rejection are decided solely by the official immigration authorities of the UAE or Saudi Arabia.",
      },
    },
  ],
};