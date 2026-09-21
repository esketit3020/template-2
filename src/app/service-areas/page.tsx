import type { Metadata } from "next";
import Link from "next/link";
import { primarySuburbs, secondaryRegions, suburbPages, travelNote } from "@/lib/areas";
import { business, yearsTrading } from "@/lib/business";
import { PageHeader, QuoteCta } from "@/components/Blocks";
import { AreaMap } from "@/components/AreaMap";
import { ArrowRightIcon, MapPinIcon, ShieldIcon, CheckIcon, AlertIcon } from "@/components/Icons";
import { breadcrumbSchema, jsonLdProps } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Roofing Service Areas Brisbane Southside | Local Roofers",
  description:
    "Ironbark Roofing Co. covers 20 primary suburbs across the Brisbane southside and inner east from our Woolloongabba depot. Coorparoo, Camp Hill, Carindale, Bulimba, Holland Park & more. QBCC 15234876.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
  ];

  return (
    <>
      <script {...jsonLdProps(breadcrumbSchema(breadcrumbs))} />

      <PageHeader
        eyebrow="Service Coverage"
        title="Roofing coverage across the Brisbane southside &amp; inner east."
        intro={`Based out of our Woolloongabba depot, our employed roofing crews are on roofs across these 20 primary suburbs every week. ${yearsTrading()} years local experience, QBCC licensed, and straightforward written quotes.`}
        breadcrumbs={breadcrumbs}
      />

      <section className="section bg-cream">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              {/* Featured Suburbs */}
              <div>
                <h2 className="h-section text-ink-900">Featured Southside Suburbs</h2>
                <p className="mt-3 text-[1rem] leading-relaxed text-ink-600">
                  Select your suburb below for local housing stock context, common roofing defects
                  we encounter in the area, and jobs completed:
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {suburbPages.map((suburb) => (
                    <Link
                      key={suburb.slug}
                      href={`/service-areas/${suburb.slug}`}
                      className="card card-hover flex flex-col justify-between p-5"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-display text-xl font-bold text-ink-900">
                            {suburb.name}
                          </span>
                          <span className="chip bg-cream text-ink-600 text-xs">
                            {suburb.postcode}
                          </span>
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-ink-600">
                          {suburb.localNote}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-ink-100 pt-3 text-xs">
                        <span className="font-semibold text-ember-600">
                          {suburb.jobsCompleted}+ local roofs completed
                        </span>
                        <ArrowRightIcon className="h-4 w-4 text-ember-500" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Complete Primary Suburb List */}
              <div className="mt-12">
                <h3 className="font-display text-xl font-bold text-ink-900">
                  All 20 Primary Brisbane Southside Suburbs
                </h3>
                <p className="mt-2 text-sm text-ink-600">
                  Inspections and drone photo reports are 100% free with zero travel fee in these suburbs:
                </p>

                <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {primarySuburbs.map((s) => (
                    <li
                      key={s.name}
                      className="flex items-center gap-2 rounded-md border border-ink-100 bg-white p-2.5 text-sm font-medium text-ink-800"
                    >
                      <MapPinIcon className="h-4 w-4 shrink-0 text-ember-500" />
                      <span>{s.name}</span>
                      <span className="text-xs text-ink-400">({s.postcode})</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Extended Regions */}
              <div className="mt-12">
                <h3 className="font-display text-xl font-bold text-ink-900">
                  Extended Service Regions
                </h3>
                <p className="mt-2 text-sm text-ink-600">
                  We frequently service larger roof restorations, full replacements, and commercial jobs across surrounding regional areas:
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {secondaryRegions.map((reg) => (
                    <div key={reg.name} className="rounded-lg border border-ink-100 bg-white p-4">
                      <strong className="block font-display text-base font-bold text-ink-900">
                        {reg.name}
                      </strong>
                      <span className="mt-1 block text-xs text-ink-600">{reg.detail}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-lg border-l-4 border-ember-500 bg-white p-4">
                  <p className="text-sm text-ink-700">{travelNote}</p>
                </div>
              </div>
            </div>

            {/* Coverage Map */}
            <div>
              <div className="sticky top-28">
                <AreaMap className="w-full rounded-xl border border-ink-200 bg-white shadow-lift" />
                <div className="mt-5 rounded-lg border border-ink-200 bg-white p-5">
                  <h4 className="font-display text-base font-bold text-ink-900">
                    Depot Location &amp; Rapid Response
                  </h4>
                  <p className="mt-1.5 text-xs text-ink-600">
                    <strong>Depot:</strong> {business.address.oneLine}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-ink-600">
                    Being based directly off Old Cleveland Road and the M3 gives our crews fast access across the entire southside. Book a free on-site roof inspection to discuss your project.
                  </p>
                  <div className="mt-4 flex flex-col gap-2">
                    <a
                      href={business.phone.office.href}
                      className="btn btn-urgent text-sm py-2"
                    >
                      <AlertIcon className="h-4 w-4" />
                      Call the office: {business.phone.office.display}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteCta
        heading="Book a free roof inspection in your suburb"
        intro="Whether you are in Camp Hill, Coorparoo, or anywhere in our primary area, our drone condition reports and fixed-price written quotes are completely free."
      />
    </>
  );
}
