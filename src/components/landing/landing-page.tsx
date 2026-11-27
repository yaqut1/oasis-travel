import { ContactSection } from "@/components/landing/contact-section";
import {
  DubaiJourneySection,
  UmrahJourneySection,
} from "@/components/landing/dubai-journey-section";
import { FaqSection } from "@/components/landing/faq-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { GallerySection } from "@/components/landing/gallery-section";
import { HeroSection } from "@/components/landing/hero-section";
import { HowWeWorkSection } from "@/components/landing/how-we-work-section";
import { ServicesSection } from "@/components/landing/services-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { SkipLink } from "@/components/landing/skip-link";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { TrustLine } from "@/components/landing/trust-line";
import { WhatsAppFab } from "@/components/landing/whatsapp-fab";

export function LandingPage() {
  return (
    <div className="bg-white text-ink">
      <SkipLink />
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <TrustLine />
        <ServicesSection />
        <DubaiJourneySection />
        <UmrahJourneySection />
        <HowWeWorkSection />
        <GallerySection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}