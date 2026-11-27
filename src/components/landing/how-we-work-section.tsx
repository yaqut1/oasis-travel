import { MotionSection } from "@/components/landing/motion-section";
import { PageWrap } from "@/components/ui/page-wrap";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    n: "01",
    title: "Tell us your plans",
    text: "WhatsApp, call or the form — dates, travelers, preferences.",
  },
  {
    n: "02",
    title: "Get a written quote",
    text: "A written summary of what's included before you confirm.",
  },
  {
    n: "03",
    title: "Confirm & pay directly",
    text: "Bank transfer or in person at our office — never online.",
  },
  {
    n: "04",
    title: "Travel with support",
    text: "Tickets issued, visas arranged, WhatsApp reachable throughout.",
  },
] as const;

export function HowWeWorkSection() {
  return (
    <MotionSection id="how">
      <PageWrap>
        <SectionHeading
          label="Transparent process"
          title="How we work — four clear steps."
        />

        <div className="border-hair grid border-t min-[680px]:grid-cols-2 min-[960px]:grid-cols-4">
          {steps.map((step) => (
            <div key={step.n} className="border-hair border-b py-8 pr-0 min-[960px]:pr-6">
              <span className="text-gold font-sans text-[0.95rem] tracking-[0.1em]">
                {step.n}
              </span>
              <h3 className="text-ink mt-3 text-[1.15rem] font-medium">{step.title}</h3>
              <p className="text-muted mt-1 text-[0.9rem]">{step.text}</p>
            </div>
          ))}
        </div>
      </PageWrap>
    </MotionSection>
  );
}