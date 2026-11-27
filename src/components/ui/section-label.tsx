import type { ReactNode } from "react";

export function SectionLabel({
  children,
  variant = "teal",
  className = "",
}: {
  children: ReactNode;
  variant?: "teal" | "gold";
  className?: string;
}) {
  const color =
    variant === "gold" ? "text-gold" : "text-teal";

  return (
    <span
      className={`text-[0.72rem] font-semibold tracking-[0.22em] uppercase ${color} ${className}`.trim()}
    >
      {children}
    </span>
  );
}