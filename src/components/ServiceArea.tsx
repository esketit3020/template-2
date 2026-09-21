/**
 * Design SOP §4 — Section 9: Service area.
 * "Suburb list and/or map graphic."
 *
 * Design SOP §2 ("Localised proof of coverage") and build checklist §3 both insist
 * on suburb-level rather than city-level content. All 20 primary suburbs are listed;
 * six link to their own page.
 */

import Link from "next/link";
import { primarySuburbs, secondaryRegions, travelNote } from "@/lib/areas";
import { business } from "@/lib/business";
import { ArrowRightIcon, MapPinIcon } from "./Icons";
import { AreaMap } from "./AreaMap";

export function ServiceArea() {
  return (
    <section id="service-area" className="section bg-cream-dark">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="eyebrow">Service area</p>
            <h2 className="h-section mt-3">
              We actually work in your street.
            </h2>
            <p className="lede mt-4">
              Our depot is in Woolloongabba, making local roofing inspections easy to arrange
              across the southside and mean it. These are the {primarySuburbs.length} suburbs we are
              on roofs in most weeks.
            </p>

            <h3 className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink-500">
              Primary service area
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {primarySuburbs.map((s) =>
                s.slug ? (
                  <li key={s.name}>
                    <Link
                      href={`/service-areas/${s.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink-900 bg-ink-900 px-3.5 py-1.5 text-[0.875rem] font-medium text-white transition-colors hover:border-ember-500 hover:bg-ember-500"
                    >
                      <MapPinIcon className="h-3.5 w-3.5" />
                      {s.name}
                    </Link>
                  </li>
                ) : (
                  <li
                    key={s.name}
                    className="rounded-full border border-ink-300 bg-white px-3.5 py-1.5 text-[0.875rem] text-ink-700"
                  >
                    {s.name} <span className="text-ink-400">{s.postcode}</span>
                  </li>
                ),
              )}
            </ul>
            <p className="mt-3 text-[0.8125rem] text-ink-500">
              Dark chips have their own page with local detail on the housing stock we see there.
            </p>

            <h3 className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink-500">
              Extended area
            </h3>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {secondaryRegions.map((r) => (
                <li key={r.name} className="text-[0.9375rem]">
                  <strong className="font-semibold text-ink-900">{r.name}</strong>
                  <span className="block text-ink-600">{r.detail}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 rounded-md border-l-4 border-ember-500 bg-white p-4 text-[0.9375rem] text-ink-700">
              {travelNote}
            </p>

            <Link href="/service-areas" className="btn btn-dark mt-7">
              See all service areas
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>

          <div>
            <AreaMap className="w-full rounded-lg border border-ink-200 bg-white shadow-plate" />
            <p className="mt-4 text-[0.8125rem] text-ink-500">
              Indicative coverage map. Our depot: {business.address.oneLine}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
