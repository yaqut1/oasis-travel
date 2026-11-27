import { MotionSection } from "@/components/landing/motion-section";
import { PageWrap } from "@/components/ui/page-wrap";
import { SectionHeading } from "@/components/ui/section-heading";

const reviews = [
  {
    quote:
      "“[CLIENT QUOTE — e.g. 'They handled our family's Dubai visa and hotel in two days, exactly as promised.']”",
    initials: "[PH]",
    name: "[Client Name]",
    detail: "Dubai holiday · [Month Year]",
  },
  {
    quote:
      "“[CLIENT QUOTE — e.g. 'Our first Umrah felt scary until they explained every step. Walking distance to the Haram.']”",
    initials: "[PH]",
    name: "[Client Name]",
    detail: "Umrah package · [Month Year]",
  },
  {
    quote:
      "“[CLIENT QUOTE — e.g. 'Group of 22 — flights, rooms and transfers all coordinated on one WhatsApp thread.']”",
    initials: "[PH]",
    name: "[Client Name]",
    detail: "Group travel · [Month Year]",
  },
] as const;

export function TestimonialsSection() {
  return (
    <MotionSection id="reviews" className="bg-bg-soft">
      <PageWrap>
        <SectionHeading
          label="Trusted by travelers"
          title="What our clients say."
        />

        <div className="grid gap-6 min-[680px]:grid-cols-2 min-[960px]:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name + review.detail}
              className="border-hair flex flex-col gap-4 rounded-[14px] border bg-white p-7"
            >
              <div className="text-gold text-[0.85rem] tracking-[2px]" aria-label="5 out of 5">
                ★★★★★
              </div>
              <p className="text-ink font-sans text-[1.08rem] leading-normal font-light">
                {review.quote}
              </p>
              <div className="mt-auto flex items-center gap-3">
                <span
                  aria-hidden
                  className="bg-navy grid h-11 w-11 place-items-center rounded-full text-[0.8rem] font-semibold text-white"
                >
                  {review.initials}
                </span>
                <div>
                  <b className="text-navy block text-[0.88rem]">{review.name}</b>
                  <small className="text-muted text-[0.75rem]">{review.detail}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </PageWrap>
    </MotionSection>
  );
}