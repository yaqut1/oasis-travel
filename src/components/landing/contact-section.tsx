import Link from "next/link";
import { MotionSection } from "@/components/landing/motion-section";
import { LeadForm } from "@/components/landing/lead-form";
import { IconPhone, IconPin, IconShield } from "@/components/icons";
import { PageWrap } from "@/components/ui/page-wrap";
import { SectionLabel } from "@/components/ui/section-label";
import { SITE } from "@/lib/site-config";

export function ContactSection() {
  return (
    <MotionSection id="contact" className="bg-bg-soft">
      <PageWrap className="grid items-center gap-8 min-[960px]:grid-cols-[1.05fr_0.95fr] min-[960px]:gap-16">
        <div className="grid gap-6">
          <div>
            <SectionLabel>Start your journey</SectionLabel>
            <h2 className="text-ink mt-4 text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.12] font-medium tracking-tight">
              Send an enquiry — we reply personally.
            </h2>
            <p className="text-muted mt-4">
              Fill the short form and your details open directly in WhatsApp, ready
              to send. Prefer to talk? Call or visit us.
            </p>
          </div>

          <div className="flex gap-3.5">
            <IconPhone className="text-gold mt-0.5 shrink-0" />
            <div>
              <b className="text-navy block text-[0.92rem]">Phone</b>
              <p className="text-muted text-[0.88rem]">
                <Link href={`tel:${SITE.phoneDial}`} className="text-teal font-medium">
                  {SITE.phoneDisplay}
                </Link>
              </p>
            </div>
          </div>

          <div className="flex gap-3.5">
            <IconPin className="text-gold mt-0.5 shrink-0" />
            <div>
              <b className="text-navy block text-[0.92rem]">Office</b>
              <p className="text-muted text-[0.88rem]">{SITE.address}</p>
            </div>
          </div>

          <div className="flex gap-3.5">
            <IconShield className="text-gold mt-0.5 shrink-0" />
            <div>
              <b className="text-navy block text-[0.92rem]">License</b>
              <p className="text-muted text-[0.88rem]">
                Agency License {SITE.license}
              </p>
            </div>
          </div>
        </div>

        <LeadForm />
      </PageWrap>
    </MotionSection>
  );
}