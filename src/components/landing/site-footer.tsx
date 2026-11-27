import Link from "next/link";
import { AgencyLogo } from "@/components/agency-logo";
import { PageWrap } from "@/components/ui/page-wrap";
import { SITE, whatsAppUrl } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-hair border-t py-12 pb-8">
      <PageWrap>
        <div className="grid gap-8 min-[960px]:grid-cols-[2fr_1fr_1fr_1.3fr]">
          <div>
            <AgencyLogo size="footer" />
            <p className="text-muted mt-4 max-w-[34ch] text-[0.85rem]">
              Licensed travel &amp; ticketing agency for Dubai trips and Umrah
              journeys. Quotes by WhatsApp, phone or form — never online payment.
            </p>
          </div>

          <div>
            <h4 className="text-ink mb-3.5 font-sans text-base font-medium">
              Services
            </h4>
            <ul className="grid gap-2 text-[0.85rem]">
              <li>
                <Link href="#services" className="text-muted hover:text-navy">
                  Dubai flight tickets
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted hover:text-navy">
                  Dubai visa assistance
                </Link>
              </li>
              <li>
                <Link href="#dubai" className="text-muted hover:text-navy">
                  Hotels &amp; transfers
                </Link>
              </li>
              <li>
                <Link href="#umrah" className="text-muted hover:text-navy">
                  Umrah packages
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted hover:text-navy">
                  Group travel
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-ink mb-3.5 font-sans text-base font-medium">
              Company
            </h4>
            <ul className="grid gap-2 text-[0.85rem]">
              <li>
                <Link href="#how" className="text-muted hover:text-navy">
                  How we work
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="text-muted hover:text-navy">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-muted hover:text-navy">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted hover:text-navy">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-ink mb-3.5 font-sans text-base font-medium">
              Contact
            </h4>
            <ul className="text-muted grid gap-2 text-[0.85rem]">
              <li>
                <Link href={`tel:${SITE.phoneDial}`} className="hover:text-navy">
                  {SITE.phoneDisplay}
                </Link>
              </li>
              <li>
                <Link
                  href={whatsAppUrl("Hello!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-navy"
                >
                  WhatsApp chat
                </Link>
              </li>
              <li>
                <Link href={`mailto:${SITE.email}`} className="hover:text-navy">
                  {SITE.email}
                </Link>
              </li>
              <li>{SITE.address}</li>
              <li>License {SITE.license}</li>
            </ul>
          </div>
        </div>

        <div className="border-hair text-muted mt-10 grid gap-3 border-t pt-5 text-[0.76rem]">
          <p>
            <strong className="text-ink">Disclaimer:</strong> Visa applications are
            submitted in coordination with official channels of the UAE and Saudi
            Arabia. Final approval, timing and any rejection are decided exclusively
            by the respective immigration authorities. {SITE.agencyName} does not
            guarantee visa outcomes and does not process online payments on this
            website.
          </p>
          <p>
            © 2026 {SITE.agencyName} ·{" "}
            <Link href="/privacy" className="hover:text-navy">
              Privacy
            </Link>{" "}
            ·{" "}
            <Link href="/terms" className="hover:text-navy">
              Terms
            </Link>
          </p>
        </div>
      </PageWrap>
    </footer>
  );
}