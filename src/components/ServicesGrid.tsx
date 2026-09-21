/**
 * Design SOP §4 — Section 4: Services overview.
 * "4–8 service tiles/icons linking to dedicated service pages, not paragraphs."
 *
 * Design SOP §2 is explicit that a single generic Services page underperforms, so
 * every tile links to its own page (build checklist §2: internal linking + SEO siloing).
 */

import Link from "next/link";
import { services } from "@/lib/services";
import { ServiceIcon, ArrowRightIcon, AlertIcon } from "./Icons";

export function ServicesGrid({
  heading = "What we do",
  intro = "Eight services, each with its own page — so you can read exactly what is included and what it costs before you ring anyone.",
  showAllLink = true,
}: {
  heading?: string;
  intro?: string;
  showAllLink?: boolean;
}) {
  return (
    <section id="services" className="section">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Services</p>
          <h2 className="h-section mt-3">{heading}</h2>
          <p className="lede mt-4">{intro}</p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="card card-hover group flex h-full flex-col p-6"
              >
                <span className="flex items-start justify-between gap-3">
                  <ServiceIcon
                    name={s.icon}
                    className="h-10 w-10 shrink-0 text-ember-500 transition-transform group-hover:scale-110"
                  />
                  {s.urgent && (
                    <span className="chip bg-urgent-600/10 text-urgent-700">
                      <AlertIcon className="h-3.5 w-3.5" />
                      24/7
                    </span>
                  )}
                </span>

                <h3 className="h-card mt-4 text-ink-900">{s.shortName}</h3>
                <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-ink-600">
                  {s.teaser}
                </p>

                <span className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4">
                  <span className="font-display text-[1.0625rem] font-bold text-ink-900">
                    {s.fromPrice ? (
                      <>
                        <span className="text-[0.75rem] font-semibold uppercase tracking-wider text-ink-500">
                          from{" "}
                        </span>
                        {s.fromPrice}
                      </>
                    ) : (
                      <span className="text-[0.9375rem] font-semibold text-ink-600">
                        Quoted per job
                      </span>
                    )}
                  </span>
                  <ArrowRightIcon className="h-5 w-5 text-ember-500 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {showAllLink && (
          <p className="mt-8 text-[0.9375rem] text-ink-600">
            Not sure which one you need?{" "}
            <Link
              href="/contact"
              className="font-semibold text-ember-600 underline decoration-ember-300 decoration-2 underline-offset-4 hover:text-ember-700"
            >
              Book the free inspection
            </Link>{" "}
            and we will tell you — including if the answer is &ldquo;nothing yet&rdquo;.
          </p>
        )}
      </div>
    </section>
  );
}
