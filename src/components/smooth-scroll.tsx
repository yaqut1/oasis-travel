"use client";

import { useAnimationFrame } from "framer-motion";
import { ReactLenis, type LenisRef } from "lenis/react";
import { useCallback, useRef, type ReactNode } from "react";

const lenisOptions = {
  autoRaf: false,
  anchors: true,
};

export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  const onFrame = useCallback((time: number) => {
    lenisRef.current?.lenis?.raf(time);
  }, []);

  useAnimationFrame(onFrame);

  return (
    <ReactLenis root options={lenisOptions} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
