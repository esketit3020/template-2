/**
 * Design SOP §4 — Section 12: Footer.
 * "ABN, licence number(s), address, phone, service links, socials, privacy/terms."
 *
 * Conversion checklist item 4 and build checklist §3: the QBCC licence number and
 * ABN must appear here on every page. Everything reads from lib/business.ts so
 * there is one place to verify against the client's source documents.
 */

import Link from "next/link";
import { business, yearsTrading } from "@/lib/business";
import { services } from "@/lib/services";
import { suburbPages, primarySuburbs } from "@/lib/areas";
import { Logo } from "./Logo";
import { MailIcon, MapPinIcon, PhoneIcon, StarIcon } from "./Icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="hatch">
        <div className="shell py-14">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
            {/* ── NAP block. Must stay identical to the Google Business Profile. ── */}
            <div>
              <Logo variant="light" />
              <p className="mt-4 max-w-xs text-[0.9375rem] leading-relaxed">
                {business.tagline} Family-run and QBCC-licensed since {business.foundedYear} —{" "}
                {yearsTrading()} years on Brisbane southside roofs.
              </p>

              <address className="mt-5 space-y-2.5 text-[0.9375rem] not-italic">
                <a
                  href={business.phone.office.href}
                  className="flex items-start gap-2.5 hover:text-white"
                >
                  <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-ember-400" />
                  <span>
                    <strong className="font-semibold text-white">
                      {business.phone.office.display}
                    </strong>
                    <span className="block text-[0.8125rem] text-ink-400">
                      Office · Mon–Fri 6:30am–5pm
                    </span>
                  </span>
                </a>
                <a href={`mailto:${business.email}`} className="flex items-start gap-2.5 hover:text-white">
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-ember-400" />
                  <span>{business.email}</span>
                </a>
                <span className="flex items-start gap-2.5">
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-ember-400" />
                  <span>
                    {business.address.street}
                    <br />
                    {business.address.suburb} {business.address.state} {business.address.postcode}
                  </span>
                </span>
              </address>
            </div>

            {/* ── Service links (build checklist §2: internal linking) ── */}
            <nav aria-label="Services">
              <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">
                Services
              </h2>
              <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="hover:text-white">
                      {s.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ── Service areas ── */}
            <nav aria-label="Service areas">
              <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">
                Service Areas
              </h2>
              <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
                {suburbPages.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/service-areas/${s.slug}`} className="hover:text-white">
                      Roofing {s.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/service-areas" className="font-semibold text-ember-400 hover:text-white">
                    All {primarySuburbs.length}+ suburbs →
                  </Link>
                </li>
              </ul>
            </nav>

            {/* ── Company + reviews ── */}
            <div>
              <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">
                Company
              </h2>
              <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Ironbark
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-white">
                    Recent Projects
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="hover:text-white">
                    Customer Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact &amp; Free Quote
                  </Link>
                </li>
              </ul>

              <a
                href={business.reviews.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-3 rounded-md border border-ink-800 bg-ink-900 p-3 transition-colors hover:border-ember-500"
              >
                <span className="flex flex-col items-center leading-none">
                  <span className="font-display text-2xl font-bold text-white">
                    {business.reviews.rating}
                  </span>
                  <span className="flex gap-px pt-1" aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <StarIcon key={i} className="h-2.5 w-2.5 text-amber-400" />
                    ))}
                  </span>
                </span>
                <span className="text-[0.8125rem] leading-snug">
                  <strong className="block font-semibold text-white">
                    {business.reviews.count} Google reviews
                  </strong>
                  Read them on our profile
                </span>
              </a>

              <div className="mt-4 flex gap-3">
                <a
                  href={business.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-800 hover:border-ember-500 hover:text-white"
                  aria-label="Ironbark Roofing on Facebook"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M13.5 22v-8h2.8l.4-3.2h-3.2V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2C16.4 4.1 15.4 4 14.3 4c-2.4 0-4 1.5-4 4.2v2.6H7.5V14h2.8v8z" />
                  </svg>
                </a>
                <a
                  href={business.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-800 hover:border-ember-500 hover:text-white"
                  aria-label="Ironbark Roofing on Instagram"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.2c-2.7 0-3 0-4.1.06-1 .05-1.8.24-2.4.5a4 4 0 0 0-1.5 1 4 4 0 0 0-1 1.5c-.26.6-.45 1.3-.5 2.4C2.4 9 2.4 9.3 2.4 12s0 3 .06 4.1c.05 1 .24 1.8.5 2.4a4 4 0 0 0 1 1.5 4 4 0 0 0 1.5 1c.6.26 1.3.45 2.4.5 1.1.05 1.4.06 4.1.06s3 0 4.1-.06c1-.05 1.8-.24 2.4-.5a4.3 4.3 0 0 0 2.5-2.5c.26-.6.45-1.3.5-2.4.05-1.1.06-1.4.06-4.1s0-3-.06-4.1c-.05-1-.24-1.8-.5-2.4a4 4 0 0 0-1-1.5 4 4 0 0 0-1.5-1c-.6-.26-1.3-.45-2.4-.5C15 2.2 14.7 2.2 12 2.2zm0 1.8c2.7 0 2.9 0 4 .05.8.04 1.2.17 1.5.29.4.15.6.33.9.6.27.28.45.5.6.9.12.3.25.7.29 1.5.05 1.1.05 1.3.05 4s0 2.9-.05 4c-.04.8-.17 1.2-.29 1.5-.15.4-.33.6-.6.9-.28.27-.5.45-.9.6-.3.12-.7.25-1.5.29-1.1.05-1.3.05-4 .05s-2.9 0-4-.05c-.8-.04-1.2-.17-1.5-.29a2.4 2.4 0 0 1-.9-.6 2.4 2.4 0 0 1-.6-.9c-.12-.3-.25-.7-.29-1.5C4.2 14.9 4.2 14.7 4.2 12s0-2.9.05-4c.04-.8.17-1.2.29-1.5.15-.4.33-.6.6-.9.28-.27.5-.45.9-.6.3-.12.7-.25 1.5-.29C8.65 4.05 8.85 4 12 4zm0 3.1a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8zm0 8a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm6.2-8.2a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Compliance strip. Licence + ABN, every page (checklist item 4). ── */}
      <div className="border-t border-ink-800">
        <div className="shell py-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.8125rem]">
            <a
              href={business.licence.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline decoration-ink-600 decoration-1 underline-offset-2 hover:decoration-ember-400"
            >
              {business.licence.body} Licence {business.licence.number}
            </a>
            <span className="text-ink-500">({business.licence.classes})</span>
            <span aria-hidden="true" className="text-ink-700">
              ·
            </span>
            <span>
              ABN <strong className="font-semibold text-white">{business.abn}</strong>
            </span>
            <span aria-hidden="true" className="text-ink-700">
              ·
            </span>
            <span>{business.insurance.publicLiability} public liability</span>
            <span aria-hidden="true" className="text-ink-700">
              ·
            </span>
            <span>WorkCover Qld current</span>
          </div>

          <p className="mt-3 max-w-4xl text-xs leading-relaxed text-ink-500">
            Verify our licence on the {business.licence.bodyFull} public register at{" "}
            <a
              href={business.licence.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-ink-300"
            >
              my.qbcc.qld.gov.au
            </a>
            . We recommend you do this for every roofer who quotes you. Colorbond® and BlueScope
            are registered trademarks of BlueScope Steel Limited.
          </p>

          <div className="mt-5 flex flex-col justify-between gap-3 border-t border-ink-800 pt-5 text-xs text-ink-500 sm:flex-row">
            <p>
              © {year} {business.legalName}. All rights reserved.
            </p>
            <nav aria-label="Legal" className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-ink-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-ink-300">
                Terms &amp; Conditions
              </Link>
              <Link href="/sitemap.xml" className="hover:text-ink-300">
                Sitemap
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
