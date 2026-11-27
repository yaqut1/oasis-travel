"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function MotionSection({
  id,
  children,
  className = "",
  padding = true,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  padding?: boolean;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`${padding ? "py-[clamp(4rem,9vw,7rem)]" : ""} ${className}`.trim()}
    >
      {children}
    </motion.section>
  );
}