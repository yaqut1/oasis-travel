import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site-config";

const LOGO_WIDTH = 1024;
const LOGO_HEIGHT = 552;

export function AgencyLogo({
  className = "",
  size = "header",
}: {
  className?: string;
  size?: "header" | "footer";
}) {
  const heightClass = size === "footer" ? "h-14 md:h-16" : "h-10 sm:h-11";

  return (
    <Link
      href="#top"
      className={`inline-flex shrink-0 rounded-md focus-visible:ring-gold focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none ${className}`.trim()}
    >
      <Image
        src="/oasis-travel-logo.png"
        alt={`${SITE.agencyName} — Your gateway to the world`}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority={size === "header"}
        className={`${heightClass} w-auto max-w-[min(220px,48vw)] object-contain object-left`}
      />
    </Link>
  );
}