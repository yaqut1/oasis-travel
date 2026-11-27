"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  GhostButton,
  WhatsAppButtonWithIcon,
} from "@/components/ui/buttons";
import { PageWrap } from "@/components/ui/page-wrap";
import { SectionLabel } from "@/components/ui/section-label";
import { IconClock, IconPin, IconShield } from "@/components/icons";
import { IMAGES, SITE } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[88svh] items-end overflow-hidden text-white"
    >
      <div className="absolute inset-0 -z-20" aria-hidden>
        <Image
          src={IMAGES.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-b from-[rgba(8,22,35,0.55)] via-[rgba(8,22,35,0.25)] via-40% to-[rgba(8,22,35,0.78)]"
      />

      <PageWrap className="py-[clamp(5rem,12vw,8rem)]">
        <SectionLabel variant="gold">Licensed travel &amp; ticketing agency</SectionLabel>

        <motion.h1
          id="hero-title"
          className="mt-4 max-w-[15ch] text-[clamp(2.4rem,6.4vw,4.6rem)] leading-[1.05] font-light tracking-tight text-white"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Your Trusted Partner for{" "}
          <em className="text-hero-em not-italic">Dubai Travel</em> and{" "}
          <em className="text-hero-em not-italic">Umrah Journeys</em>
        </motion.h1>

        <motion.p
          className="mt-5 max-w-[46ch] text-[1.05rem] text-white/85"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Flights, visas, hotels, transfers, complete holiday packages and guided
          Umrah — planned personally on WhatsApp. No online payment on this site.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <WhatsAppButtonWithIcon
            message="Hello! I would like a free quote for Dubai / Umrah travel."
            variant="light"
          >
            Request a Free Quote on WhatsApp
          </WhatsAppButtonWithIcon>
          <GhostButton href={`tel:${SITE.phoneDial}`} light>
            Call the Office
          </GhostButton>
        </motion.div>

        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/22 pt-5 text-[0.82rem] text-white/80">
          <li className="inline-flex items-center gap-2">
            <IconShield className="text-hero-em" />
            <span>
              License <strong className="font-semibold text-white">{SITE.license}</strong>
            </span>
          </li>
          <li className="inline-flex items-center gap-2">
            <IconPin className="text-hero-em" />
            <span>{SITE.addressShort}</span>
          </li>
          <li className="inline-flex items-center gap-2">
            <IconClock className="text-hero-em" />
            <span>Replies in {SITE.replyTime}</span>
          </li>
        </ul>
      </PageWrap>
    </section>
  );
}