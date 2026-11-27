import Image from "next/image";
import { MotionSection } from "@/components/landing/motion-section";
import { PageWrap } from "@/components/ui/page-wrap";
import { SectionHeading } from "@/components/ui/section-heading";
import { IMAGES } from "@/lib/site-config";

const gallery = [
  { src: IMAGES.g1, alt: "Dubai skyline at night", span: "wide" as const },
  { src: IMAGES.g2, alt: "Sunset over Dubai desert dunes", span: "normal" as const },
  { src: IMAGES.g3, alt: "Hotel room with Dubai city view", span: "normal" as const },
  { src: IMAGES.g4, alt: "Private airport transfer van with luggage", span: "normal" as const },
  { src: IMAGES.g5, alt: "Hot air balloon over desert dunes", span: "normal" as const },
  { src: IMAGES.g6, alt: "Pilgrims around the Kaaba", span: "wide" as const },
];

export function GallerySection() {
  return (
    <MotionSection padding={false} className="pb-[clamp(4rem,9vw,7rem)] pt-0">
      <PageWrap>
        <SectionHeading
          label="Real moments"
          title="From our trips, not stock photos."
          description="Replace these with your own client photos — each image is listed in the IMAGES object for easy editing."
        />

        <div className="grid grid-cols-2 gap-3 min-[680px]:grid-cols-3 min-[960px]:grid-cols-6">
          {gallery.map((item, index) => {
            const wideMobile = item.span === "wide";
            const spanClass = wideMobile
              ? "col-span-2 aspect-video min-[680px]:col-span-1 min-[680px]:aspect-square min-[960px]:col-span-1"
              : "aspect-square";

            return (
              <figure
                key={item.alt}
                className={`group relative overflow-hidden rounded-[14px] ${spanClass}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 680px) 50vw, 33vw"
                  className="object-cover transition-transform duration-600 group-hover:scale-105"
                  priority={index === 0}
                />
              </figure>
            );
          })}
        </div>
      </PageWrap>
    </MotionSection>
  );
}