import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { business, yearsTrading } from "@/lib/business";
import { PageHeader, QuoteCta, TrustStrip } from "@/components/Blocks";
import { ServiceIcon, ArrowRightIcon, CheckIcon, ClockIcon, ShieldIcon } from "@/components/Icons";
import { breadcrumbSchema, jsonLdProps } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Roofing Services Brisbane Southside | Restorations, Repairs & Re-Roofing",
  description:
    "Comprehensive roofing services across the Brisbane southside. Restorations, leak repairs, Colorbond metal re-roofing and gutters. QBCC 15234876.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ];

  return (
    <>
      <script {...jsonLdProps(breadcrumbSchema(breadcrumbs))} />

      <PageHeader
        eyebrow="Our Services"
        title="Roofing services on the Brisbane southside, done once and done properly."
        intro={`Seven dedicated services, all delivered by employed Ironbark tradespeople — never subbies. From leak repairs to complete tile-to-Colorbond transformations, backed by ${yearsTrading()} years of local experience.`}
        breadcrumbs={breadcrumbs}
      >
        <TrustStrip className="mt-8 text-ink-300" />
      </PageHeader>

      <section className="section bg-cream">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((s) => (
              <article
                key={s.slug}
                className="card card-hover flex flex-col justify-between overflow-hidden p-6 sm:p-8"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex items-center gap-3">
                      <ServiceIcon
                        name={s.icon}
                        className="h-10 w-10 shrink-0 text-ember-500"
                      />
                      <h2 className="h-card text-ink-900">{s.name}</h2>
                    </span>
                    <span className="chip shrink-0 bg-ink-100 text-ink-700">
                      <ShieldIcon className="h-3.5 w-3.5 text-ember-600" />
                      {s.warrantyYears}-yr warranty
                    </span>
                  </div>

                  <p className="mt-4 text-[1rem] leading-relaxed text-ink-700">
                    {s.intro}
                  </p>

                  <div className="mt-6 rounded-lg bg-cream-dark p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-display text-base font-bold text-ink-900">Request a tailored quote</span>
                      <span className="inline-flex items-center gap-1 text-xs text-ink-600">
                        <ClockIcon className="h-3.5 w-3.5 text-ink-500" />
                        {s.duration}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink-500">
                      What is included:
                    </h3>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {s.includes.slice(0, 4).map((inc) => (
                        <li key={inc} className="flex items-start gap-2 text-xs text-ink-700">
                          <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ember-500" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 border-t border-ink-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <Link
                    href={`/services/${s.slug}`}
                    className="btn btn-primary"
                  >
                    Explore this service
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                  <Link
                    href={`/contact?service=${s.slug}`}
                    className="btn btn-outline text-sm"
                  >
                    Request quote
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Commercial section */}
          <div className="mt-14 rounded-xl border border-ink-800 bg-ink-900 p-8 text-white md:p-12">
            <div className="max-w-3xl">
              <p className="eyebrow text-ember-300">Commercial &amp; Strata</p>
              <h2 className="h-section mt-3 text-white">
                Commercial roofing, childcare centres, and strata properties
              </h2>
              <p className="lede mt-4 text-ink-200">
                While 80% of our work is residential homes across the southside, 20% is commercial
                and strata projects: small commercial warehouses, primary schools, medical clinics,
                and childcare centres where keeping the building dry without disrupting operations is
                paramount.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Staged works so business operations continue safely",
                  "Strict out-of-hours or noise-restricted working schedules",
                  "Comprehensive SWMS, site hoarding, and height safety",
                  "Direct liaison with strata managers, body corporates, and owners",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[0.9375rem] text-ink-200">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-ember-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/contact?service=metal-roofing" className="btn btn-primary">
                  Request a commercial tender / quote
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <a href={business.phone.office.href} className="btn btn-ghost-light">
                  Speak to Dave Whitlock: {business.phone.office.display}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteCta
        heading="Not sure which service matches your roof's condition?"
        intro="Book a free on-site inspection. Dave or one of our senior tradespeople will inspect the roof, fly the drone, and present an itemised report showing you exactly what needs doing — and what doesn't."
      />
    </>
  );
}
