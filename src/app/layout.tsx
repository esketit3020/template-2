import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

import { business, siteUrl } from "@/lib/business";
import { Header } from "@/components/Header";
import { StyleSwitcher } from "@/components/StyleSwitcher";
import { Footer } from "@/components/Footer";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { Analytics } from "@/components/Analytics";
import { jsonLdProps, organisationSchema, websiteSchema } from "@/lib/schema";

/**
 * Self-hosted via next/font — no external font request, no layout shift.
 * Build checklist §6 (Core Web Vitals). Onboarding §5 brand type.
 */
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Roofing Brisbane Southside | Restorations & Repairs | Ironbark Roofing",
    // Build checklist §2: unique title on every page, consistent brand suffix.
    template: "%s | Ironbark Roofing Co.",
  },
  description:
    "QBCC-licensed Brisbane southside roofers since 2009. Roof restorations from $4,800, repairs, re-roofing and Colorbond metal roofing. 4.9★ from 187 reviews. 25-year workmanship warranty.",
  applicationName: business.name,
  authors: [{ name: business.name }],
  generator: "Next.js",
  keywords: [
    "roofing Brisbane southside",
    "roof restoration Brisbane",
    "roof repairs Coorparoo",
    "Colorbond roofing Brisbane",
    "roof replacement Camp Hill",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: business.name,
    title: "Roofing Brisbane Southside | Ironbark Roofing Co.",
    description:
      "Family-run, QBCC-licensed roofers on the Brisbane southside since 2009. Free inspection, fixed price in 48 hours, 25-year workmanship warranty.",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: true, address: true },
  other: {
    // Surfaced for humans reading source, and harmless to crawlers.
    "business:abn": business.abn,
    "business:licence": `${business.licence.body} ${business.licence.number}`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14202b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" data-site-media="photos" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <head>
        {/* Site-wide LocalBusiness + WebSite schema (build checklist §2). */}
        <script {...jsonLdProps(organisationSchema())} />
        <script {...jsonLdProps(websiteSchema())} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <StyleSwitcher />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCtaBar />
        <Analytics />
      </body>
    </html>
  );
}
