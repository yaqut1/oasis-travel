import Image from "next/image";
import { MotionSection } from "@/components/landing/motion-section";
import { PageWrap } from "@/components/ui/page-wrap";
import { SectionLabel } from "@/components/ui/section-label";
import { IconInfo } from "@/components/icons";
import { WhatsAppButton } from "@/components/ui/buttons";

type PackageRow = {
  title: string;
  subtitle: string;
};

export function JourneySection({
  id,
  reverse = false,
  label,
  labelVariant = "teal",
  title,
  description,
  image,
  imageAlt,
  wide = false,
  packages,
  whatsAppMessage,
  note,
}: {
  id: string;
  reverse?: boolean;
  label: string;
  labelVariant?: "teal" | "gold";
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  wide?: boolean;
  packages: PackageRow[];
  whatsAppMessage: string;
  note: string;
}) {
  const media = (
    <div
      className={`relative overflow-hidden rounded-[14px] ${
        wide ? "aspect-16/11" : "aspect-4/5"
      }`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 960px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );

  const copy = (
    <div>
      <SectionLabel variant={labelVariant}>{label}</SectionLabel>
      <h2 className="text-ink mt-4 text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.12] font-medium tracking-tight">
        {title}
      </h2>
      <p className="text-muted mt-4 max-w-[48ch]">{description}</p>

      <div className="border-hair mt-7 border-t">
        {packages.map((pkg) => (
          <div
            key={pkg.title}
            className="border-hair border-b py-4"
          >
            <b className="text-navy text-[0.95rem] font-semibold">{pkg.title}</b>
            <small className="text-muted mt-0.5 block text-[0.8rem]">
              {pkg.subtitle}
            </small>
          </div>
        ))}
      </div>

      <WhatsAppButton message={whatsAppMessage} className="mt-6">
        Request a Free Quote on WhatsApp
      </WhatsAppButton>

      <p className="text-muted mt-5 flex items-start gap-2.5 text-[0.8rem]">
        <IconInfo className="text-gold mt-0.5 shrink-0" />
        <span>{note}</span>
      </p>
    </div>
  );

  return (
    <MotionSection id={id}>
      <PageWrap className="grid items-center gap-8 min-[960px]:grid-cols-2 min-[960px]:gap-16">
        {reverse ? (
          <>
            {copy}
            {media}
          </>
        ) : (
          <>
            {media}
            {copy}
          </>
        )}
      </PageWrap>
    </MotionSection>
  );
}