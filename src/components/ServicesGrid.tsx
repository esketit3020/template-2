/**
 * Design SOP §4 — Section 4: Services overview.
 * "4–8 service tiles/icons linking to dedicated service pages, not paragraphs."
 *
 * Design SOP §2 is explicit that a single generic Services page underperforms, so
 * every tile links to its own page (build checklist §2: internal linking + SEO siloing).
 */

import Link from "next/link";
import { services } from "@/lib/services";
import { servicePhotos } from "@/lib/demoPhotos";
import { ServiceIcon, ArrowRightIcon } from "./Icons";

export function ServicesGrid({
  heading = "What we do",
  intro = "Seven services, each with its own page — explore what is involved, then request a quote tailored to your roof.",
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
                className="card card-hover group flex h-full flex-col overflow-hidden"
              >
                {servicePhotos[s.slug] && (
                  <div className="photo-only relative aspect-[16/10] overflow-hidden bg-ink-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={servicePhotos[s.slug].src} alt={servicePhotos[s.slug].alt}
                      loading="lazy" decoding="async" width={600} height={375}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <span className="absolute bottom-2 left-2 rounded bg-ink-950/85 px-2 py-1 text-xs text-white">Illustrative photo</span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                <span className="flex items-start justify-between gap-3">
                  <ServiceIcon
                    name={s.icon}
                    className="h-10 w-10 shrink-0 text-ember-500 transition-transform group-hover:scale-110"
                  />
                </span>

                <h3 className="h-card mt-4 text-ink-900">{s.shortName}</h3>
                <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-ink-600">
                  {s.teaser}
                </p>

                <span className="mt-5 flex items-center justify-between border-t border-ink-100 pt-4">
                  <span className="font-display text-[0.9375rem] font-semibold text-ink-700">Explore service</span>
                  <ArrowRightIcon className="h-5 w-5 text-ember-500 transition-transform group-hover:translate-x-1" />
                </span>
                </div>
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
