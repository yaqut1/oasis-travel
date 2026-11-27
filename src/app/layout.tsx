import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { IMAGES, SITE } from "@/lib/site-config";
import { faqJsonLd, travelAgencyJsonLd } from "@/lib/structured-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `Dubai Flights, Visas, Hotels & Umrah Packages | ${SITE.agencyName}`,
  description:
    "Your trusted partner for Dubai flight tickets, visa assistance, hotels, transfers, holiday packages and Umrah journeys. Free quotes on WhatsApp — no online payment.",
  metadataBase: new URL(SITE.siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Your Trusted Partner for Dubai Travel and Umrah Journeys",
    description:
      "Dubai flights, visas, hotels, transfers, packages & Umrah. Free quote on WhatsApp.",
    images: [IMAGES.hero],
    url: SITE.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Trusted Partner for Dubai Travel and Umrah Journeys",
    description:
      "Dubai flights, visas, hotels, transfers, packages & Umrah. Free quote on WhatsApp.",
    images: [IMAGES.hero],
  },
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://image.qwenlm.ai" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(travelAgencyJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="text-ink min-h-svh bg-white font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}