import type { ReactNode } from "react";

export function PageWrap({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-(--page-max-width) px-[1.2rem] ${className}`.trim()}
    >
      {children}
    </div>
  );
}