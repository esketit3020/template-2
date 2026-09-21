/**
 * Small shared blocks reused across the supporting pages, so every page carries the
 * same trust framing and CTA treatment without duplicating markup.
 */

import Link from "next/link";
import { business, yearsTrading } from "@/lib/business";
import { QuoteForm } from "./QuoteForm";
import { AlertIcon, ArrowRightIcon, CheckIcon, PhoneIcon, StarIcon } from "./Icons";

/** Standard interior page header with breadcrumbs. */
export function PageHeader({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  breadcrumbs?: { name: string; path: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink-800 bg-ink-900 text-white">
      <div className="hatch absolute inset-0" aria-hidden="true" />
      <div className="shell relative py-10 md:py-14">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem] text-ink-400">
              {breadcrumbs.map((b, i) => (
                <li key={b.path} className="flex items-center gap-2">
                  {i > 0 && (
                    <span aria-hidden="true" className="text-ink-600">
                      /
                    </span>
                  )}
                  {i === breadcrumbs.length - 1 ? (
                    <span aria-current="page" className="text-ink-200">
                      {b.name}
                    </span>
                  ) : (
                    <Link href={b.path} className="hover:text-white">
                      {b.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && <p className="eyebrow mt-5 text-ember-300">{eyebrow}</p>}
        <h1 className="h-section mt-3 max-w-4xl text-white">{title}</h1>
        {intro && <p className="lede mt-4 max-w-2xl text-ink-300">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

/** Compact trust strip for interior pages — the trust bar's little sibling. */
export function TrustStrip({ className = "" }: { className?: string }) {
  const items = [
    `${business.licence.body} Lic. ${business.licence.number}`,
    `${yearsTrading()} years, family-run`,
    `${business.warranty.restoration}-yr workmanship warranty`,
    `${business.insurance.publicLiability} insured`,
  ];

  return (
    <ul className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.8125rem] ${className}`}>
      <li className="flex items-center gap-1.5">
        <StarIcon className="h-3.5 w-3.5 text-amber-400" />
        <strong className="font-semibold">{business.reviews.rating}</strong>
        <span>from {business.reviews.count} Google reviews</span>
      </li>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-1.5">
          <CheckIcon className="h-3.5 w-3.5 text-ember-400" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/**
 * Closing CTA band with the short form inline.
 * Design SOP §2: multiple, situation-matched CTAs at different scroll depths.
 */
export function QuoteCta({
  heading = "Get a free inspection and a fixed price in 48 hours",
  intro = "Five fields. We will ring you back to book a time that suits, and the photo report is yours to keep whether you use us or not.",
  defaultService = "",
  id = "quote",
}: {
  heading?: string;
  intro?: string;
  defaultService?: string;
  id?: string;
}) {
  return (
    <section id={id} className="section bg-ink-900 text-white">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="eyebrow text-ember-300">Free quote</p>
            <h2 className="h-section mt-3 text-white">{heading}</h2>
            <p className="lede mt-4 text-ink-300">{intro}</p>

            <TrustStrip className="mt-7 text-ink-300" />

            <div className="mt-8 space-y-4 border-t border-ink-700 pt-7">
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink-400">
                  Rather talk to someone?
                </p>
                <a
                  href={business.phone.office.href}
                  className="mt-1.5 inline-flex items-center gap-2.5 font-display text-3xl font-bold text-white hover:text-ember-400"
                >
                  <PhoneIcon className="h-6 w-6 text-ember-400" />
                  {business.phone.office.display}
                </a>
                <p className="mt-1 text-[0.8125rem] text-ink-400">
                  Mon–Fri 6:30am–5pm · Sat 7am–1pm · Nina or Dave will answer
                </p>
              </div>

              <div className="rounded-md border border-urgent-600/50 bg-urgent-600/10 p-4">
                <p className="text-sm text-white">We can talk you through your roofing options before you book.</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-cream p-6 text-ink-900 shadow-lift md:p-8">
            <h3 className="h-card">Request your free inspection</h3>
            <p className="mt-1.5 text-[0.9375rem] text-ink-600">
              No obligation and no sales visit — just an inspection, a photo report and a price.
            </p>
            <QuoteForm defaultService={defaultService} className="mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Simple inline "next step" row used at the foot of content pages. */
export function InlineCta({
  heading,
  body,
  href = "/contact",
  label = "Get a free quote",
}: {
  heading: string;
  body: string;
  href?: string;
  label?: string;
}) {
  return (
    <div className="rounded-lg border border-ink-200 bg-white p-6 md:flex md:items-center md:justify-between md:gap-8">
      <div>
        <h3 className="h-card">{heading}</h3>
        <p className="mt-1.5 max-w-xl text-[0.9375rem] text-ink-600">{body}</p>
      </div>
      <div className="mt-5 flex shrink-0 flex-col gap-2.5 sm:flex-row md:mt-0">
        <Link href={href} className="btn btn-primary">
          {label}
          <ArrowRightIcon className="h-5 w-5" />
        </Link>
        <a href={business.phone.office.href} className="btn btn-outline">
          <PhoneIcon className="h-5 w-5" />
          <span className="whitespace-nowrap">{business.phone.office.display}</span>
        </a>
      </div>
    </div>
  );
}
