import { SectionLabel } from "@/components/ui/section-label";

export function SectionHeading({
  label,
  labelVariant = "teal",
  title,
  description,
  align = "left",
  className = "",
}: {
  label: string;
  labelVariant?: "teal" | "gold";
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const alignClass =
    align === "center" ? "mx-auto text-center" : "max-w-[52ch]";

  return (
    <div
      className={`mb-[clamp(2.2rem,5vw,3.4rem)] ${alignClass} ${className}`.trim()}
    >
      <SectionLabel variant={labelVariant}>{label}</SectionLabel>
      <h2 className="mt-0 text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.12] font-medium tracking-tight text-ink">
        {title}
      </h2>
      {description ? (
        <p className="mt-[0.9rem] text-muted">{description}</p>
      ) : null}
    </div>
  );
}