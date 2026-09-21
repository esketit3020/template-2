/**
 * Design SOP §4 — Section 11: FAQ accordion.
 * "5–8 real questions" — pre-handle objections, aid SEO.
 *
 * Built on native <details>/<summary>: keyboard accessible and open-by-default for
 * search crawlers and printing, with zero client JS. FAQPage JSON-LD is attached by
 * the page that renders this (build checklist §2).
 */

import Link from "next/link";
import type { Faq } from "@/lib/faqs";
import { business } from "@/lib/business";
import { ArrowRightIcon, ChevronDownIcon, PhoneIcon } from "./Icons";

export function FaqAccordion({
  items,
  heading = "Questions we get asked every week",
  intro = "Pulled straight from our office inbox — including the ones with answers you might not expect a roofer to give.",
  showCta = true,
  eyebrow = "FAQ",
}: {
  items: Faq[];
  heading?: string;
  intro?: string;
  showCta?: boolean;
  eyebrow?: string;
}) {
  return (
    <section id="faq" className="section">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="h-section mt-3">{heading}</h2>
            <p className="lede mt-4">{intro}</p>

            {showCta && (
              <div className="mt-7 rounded-lg border border-ink-200 bg-white p-5">
                <p className="text-[0.9375rem] text-ink-700">
                  Question not here? Ring Nina in the office — she has heard it before and will
                  give you a straight answer without booking anything.
                </p>
                <div className="mt-4 flex flex-col gap-2.5">
                  <a href={business.phone.office.href} className="btn btn-outline">
                    <PhoneIcon className="h-5 w-5" />
                    {business.phone.office.display}
                  </a>
                  <Link href="/contact" className="btn btn-primary">
                    Get a free quote
                    <ArrowRightIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <dl className="divide-y divide-ink-200 border-y border-ink-200">
            {items.map((f) => (
              <div key={f.q}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5">
                    <dt className="font-display text-[1.1875rem] font-semibold leading-snug text-ink-900 group-hover:text-ember-600">
                      {f.q}
                    </dt>
                    <ChevronDownIcon className="mt-1 h-5 w-5 shrink-0 text-ember-500 transition-transform group-open:rotate-180" />
                  </summary>
                  <dd className="pb-6 pr-8 text-[0.9375rem] leading-relaxed text-ink-700">
                    {f.a}
                  </dd>
                </details>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
