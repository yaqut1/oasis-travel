import Link from "next/link";
import { MotionSection } from "@/components/landing/motion-section";
import { PageWrap } from "@/components/ui/page-wrap";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconPlus } from "@/components/icons";
import { SITE } from "@/lib/site-config";

const faqs = [
  {
    question: "How do I get a free quote?",
    answer: (
      <>
        Tap any “Request a Free Quote on WhatsApp” button, call{" "}
        <Link href={`tel:${SITE.phoneDial}`} className="text-teal font-medium">
          {SITE.phoneDisplay}
        </Link>
        , or send the form. We reply personally with full trip details during office
        hours.
      </>
    ),
    defaultOpen: true,
  },
  {
    question: "Do you take online bookings or card payments?",
    answer:
      "No. There is no checkout on this website. After you approve a quote, payment is made directly to the agency by bank transfer or in person at our office.",
  },
  {
    question: "Is visa approval guaranteed?",
    answer:
      "No agency can guarantee a visa. Approval, rejection and timing are decided solely by the official immigration authorities of the UAE or Saudi Arabia. We advise honestly before you pay.",
  },
  {
    question: "What documents do I need for Umrah?",
    answer:
      "A valid passport (usually 6+ months), photos, required vaccination records and confirmed bookings. We send a full checklist for your nationality with your quote.",
  },
  {
    question: "Can you handle group and family bookings?",
    answer:
      "Yes — families, friends, corporate and community Umrah groups, with coordinated seats, rooms, transfers and a dedicated WhatsApp group.",
  },
] as const;

export function FaqSection() {
  return (
    <MotionSection id="faq">
      <PageWrap>
        <SectionHeading
          label="Answers"
          title="Frequently asked questions."
          align="center"
        />

        <div className="mx-auto max-w-[760px]">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-hair border-b"
              open={"defaultOpen" in faq && faq.defaultOpen}
            >
              <summary className="text-navy flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-medium [&::-webkit-details-marker]:hidden">
                {faq.question}
                <IconPlus className="text-gold shrink-0 transition-transform group-open:rotate-45" />
              </summary>
              <div className="text-muted max-w-[62ch] pb-5 text-[0.92rem]">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </PageWrap>
    </MotionSection>
  );
}