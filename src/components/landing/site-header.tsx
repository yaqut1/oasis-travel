"use client";

import Link from "next/link";
import { useState } from "react";
import { IconMenu } from "@/components/icons";
import { AgencyLogo } from "@/components/agency-logo";
import { GhostButton, WhatsAppButtonWithIcon } from "@/components/ui/buttons";
import { PageWrap } from "@/components/ui/page-wrap";
import { NAV_LINKS, NAV_LINKS_MOBILE, SITE } from "@/lib/site-config";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="border-hair sticky top-0 z-100 border-b bg-white/85 backdrop-blur-md">
      <PageWrap className="flex min-h-[76px] items-center gap-4">
        <AgencyLogo />

        <nav
          className="hidden flex-1 items-center justify-center gap-7 min-[960px]:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted hover:text-navy text-[0.9rem] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3.5 min-[960px]:ml-0">
          <a
            href={`tel:${SITE.phoneDial}`}
            className="text-navy hidden text-[0.85rem] font-semibold min-[680px]:inline"
          >
            {SITE.phoneDisplay}
          </a>
          <WhatsAppButtonWithIcon
            message="Hello! I would like a free quote."
            className="px-[1.15rem] py-[0.65rem] text-[0.85rem]"
          >
            WhatsApp
          </WhatsAppButtonWithIcon>

          <button
            type="button"
            className="text-navy border-hair grid h-[42px] w-[42px] place-items-center rounded-[10px] border min-[960px]:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <IconMenu />
          </button>
        </div>
      </PageWrap>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`border-hair border-b bg-white lg:hidden ${menuOpen ? "block" : "hidden"}`}
      >
        {NAV_LINKS_MOBILE.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="border-hair block border-t px-5 py-[0.9rem] font-medium"
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}
        <div className="flex gap-2.5 p-5">
          <GhostButton href={`tel:${SITE.phoneDial}`} className="flex-1 justify-center">
            Call
          </GhostButton>
          <WhatsAppButtonWithIcon
            message="Hello! I would like a free quote."
            className="flex-1 justify-center px-4 py-3 text-[0.85rem]"
          >
            WhatsApp
          </WhatsAppButtonWithIcon>
        </div>
      </nav>
    </header>
  );
}