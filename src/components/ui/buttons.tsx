import Link from "next/link";
import type { ReactNode } from "react";
import { IconArrowRight, IconWhatsApp } from "@/components/icons";
import { whatsAppUrl } from "@/lib/site-config";

const base =
  "inline-flex items-center gap-[0.55rem] cursor-pointer rounded-full border border-transparent px-6 py-[0.9rem] text-[0.95rem] font-semibold transition-colors duration-200";

export function WhatsAppButton({
  message,
  children,
  variant = "navy",
  className = "",
}: {
  message: string;
  children: ReactNode;
  variant?: "navy" | "light";
  className?: string;
}) {
  const styles =
    variant === "light"
      ? "bg-white text-navy hover:bg-[#f6ead0]"
      : "bg-navy text-white hover:bg-teal";

  return (
    <Link
      href={whatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}

export function WhatsAppButtonWithIcon({
  message,
  children,
  variant = "navy",
  iconSize = 17,
  className = "",
}: {
  message: string;
  children: ReactNode;
  variant?: "navy" | "light";
  iconSize?: number;
  className?: string;
}) {
  return (
    <WhatsAppButton message={message} variant={variant} className={className}>
      <IconWhatsApp size={iconSize} />
      {children}
    </WhatsAppButton>
  );
}

export function GhostButton({
  href,
  children,
  className = "",
  light = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  const styles = light
    ? "border-white/50 text-white hover:border-transparent hover:bg-white/10"
    : "border-hair text-ink hover:border-ink bg-transparent";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`.trim()}>
      {children}
    </Link>
  );
}

export function WhatsAppTextLink({
  message,
  children,
  className = "",
}: {
  message: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={whatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-[0.4rem] text-[0.9rem] font-semibold text-teal transition-colors hover:text-gold ${className}`.trim()}
    >
      {children}
      <IconArrowRight className="transition-transform group-hover:translate-x-[3px]" />
    </Link>
  );
}
