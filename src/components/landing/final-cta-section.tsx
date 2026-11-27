import Image from "next/image";
import { WhatsAppButtonWithIcon } from "@/components/ui/buttons";
import { PageWrap } from "@/components/ui/page-wrap";
import { IMAGES } from "@/lib/site-config";

export function FinalCtaSection() {
  return (
    <section className="relative isolate overflow-hidden py-[clamp(4rem,9vw,7rem)] text-center text-white">
      <div className="absolute inset-0 -z-20" aria-hidden>
        <Image
          src={IMAGES.cta}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-b from-[rgba(8,22,35,0.7)] to-[rgba(8,22,35,0.8)]"
      />

      <PageWrap>
        <h2 className="mx-auto max-w-[20ch] text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.12] font-light tracking-tight text-white">
          Ready when you are — day or night.
        </h2>
        <p className="mx-auto mt-4 mb-8 max-w-[44ch] text-white/82">
          One message is all it takes. Tell us your destination and dates, and
          we&apos;ll send a clear, honest quote.
        </p>
        <WhatsAppButtonWithIcon
          message="Hello! I would like a free quote for Dubai / Umrah travel."
          variant="light"
        >
          Request a Free Quote on WhatsApp
        </WhatsAppButtonWithIcon>
      </PageWrap>
    </section>
  );
}