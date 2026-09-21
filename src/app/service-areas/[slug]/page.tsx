import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { suburbPages, getSuburb } from "@/lib/areas";
import { business, siteUrl, yearsTrading } from "@/lib/business";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { reviews } from "@/lib/reviews";
import { suburbServiceSchema, breadcrumbSchema, jsonLdProps } from "@/lib/schema";
import { PageHeader, QuoteCta } from "@/components/Blocks";
import { QuoteForm } from "@/components/QuoteForm";
import { ProjectPreviewMedia } from "@/components/ProjectPreviewMedia";
import { ReviewCard } from "@/components/Reviews";
import {
  MapPinIcon,
  ShieldIcon,
  CheckIcon,
  PhoneIcon,
  ArrowRightIcon,
  AlertIcon,
  ClockIcon,
} from "@/components/Icons";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return suburbPages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const suburb = getSuburb(slug);
  if (!suburb) return {};

  return {
    title: `Roofing ${suburb.name} QLD | Restorations & Repairs | Ironbark Roofing`,
    description: `QBCC-licensed roof restorations, leak repairs, and Colorbond re-roofing in ${suburb.name} (${suburb.postcode}). ${suburb.jobsCompleted}+ local roofs completed. 25-year workmanship warranty. Free drone inspection.`,
    alternates: { canonical: `/service-areas/${suburb.slug}` },
    openGraph: {
      title: `Roofing ${suburb.name} | Ironbark Roofing Co.`,
      description: `Trusted roof restorations and repairs in ${suburb.name}. Employed tradespeople, QBCC licence 15234876, 25-year warranty.`,
      url: `${siteUrl}/service-areas/${suburb.slug}`,
      type: "website",
    },
  };
}

export default async function SuburbDetailPage({ params }: Props) {
  const { slug } = await params;
  const suburb = getSuburb(slug);

  if (!suburb) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: suburb.name, path: `/service-areas/${suburb.slug}` },
  ];

  const suburbProjects = projects.filter((p) => p.suburb.toLowerCase() === suburb.name.toLowerCase());
  const suburbReviews = reviews.filter((r) => r.suburb.toLowerCase().includes(suburb.name.toLowerCase()));

  return (
    <>
      <script {...jsonLdProps(suburbServiceSchema(suburb.name))} />
      <script {...jsonLdProps(breadcrumbSchema(breadcrumbs))} />

      <PageHeader
        eyebrow={`Local Roofers · ${suburb.postcode}`}
        title={`Roofing ${suburb.name} — Restorations, Repairs & Re-Roofing`}
        intro={suburb.localNote}
        breadcrumbs={breadcrumbs}
      >
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
          <span className="chip bg-ember-500/20 text-ember-300 font-semibold px-4 py-1.5 border border-ember-500/40">
            <MapPinIcon className="h-4 w-4" />
            {suburb.jobsCompleted}+ roofs completed in {suburb.name}
          </span>
          <span className="chip bg-white/10 text-ink-200">
            <ClockIcon className="h-4 w-4 text-ember-400" />
            Free on-site inspection
          </span>
          <span className="chip bg-white/10 text-ink-200">
            <ShieldIcon className="h-4 w-4 text-ember-400" />
            25-year workmanship warranty
          </span>
        </div>
      </PageHeader>

      <section className="section bg-cream">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            {/* Left Column: Local Suburb Details */}
            <div>
              {/* Local Housing Context */}
              <div className="rounded-xl border border-ink-100 bg-white p-6 sm:p-8 shadow-plate">
                <h2 className="h-section text-ink-900">
                  Roofing in {suburb.name}: Housing Stock &amp; Local Conditions
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-700">
                  {suburb.housingNote}
                </p>

                <div className="mt-8 border-t border-ink-100 pt-6">
                  <h3 className="font-display text-xl font-bold text-ink-900">
                    Why {suburb.name} homeowners choose Ironbark
                  </h3>
                  <ul className="mt-4 space-y-3.5">
                    {[
                      `Direct proximity: Our Woolloongabba depot is minutes from ${suburb.name}, making local inspections easy to arrange.`,
                      `100% employed tradespeople: The team working on your ${suburb.name} home are Ironbark staff, not outsourced subbies.`,
                      "Free drone inspection: We fly our high-resolution drone across all elevations so you see your ridge caps, valleys, and flashings clearly.",
                      `25-year workmanship warranty: Full restorations and re-roofs in ${suburb.name} receive our comprehensive written guarantee.`,
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[0.9375rem] text-ink-700">
                        <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-ember-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Services offered in this suburb */}
              <div className="mt-12">
                <h3 className="h-section text-ink-900">
                  Roofing Services Available in {suburb.name}
                </h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {services.slice(0, 6).map((s) => (
                    <div
                      key={s.slug}
                      className="rounded-lg border border-ink-100 bg-white p-5 flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="font-display text-lg font-bold text-ink-900">{s.name}</h4>
                        <p className="mt-1.5 text-xs text-ink-600 leading-relaxed">{s.teaser}</p>
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-ink-100 pt-3">
                        <span className="text-xs font-semibold text-ink-900">
                          {s.fromPrice ? `from ${s.fromPrice}` : "Quoted per job"}
                        </span>
                        <Link
                          href={`/services/${s.slug}`}
                          className="text-xs font-semibold text-ember-600 hover:text-ember-700 inline-flex items-center gap-1"
                        >
                          Details
                          <ArrowRightIcon className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suburb Projects if any */}
              {suburbProjects.length > 0 && (
                <div className="mt-12">
                  <h3 className="h-section text-ink-900">
                    Recent {suburb.name} Roofing Projects
                  </h3>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    {suburbProjects.map((p) => (
                      <article key={p.slug} className="card card-hover overflow-hidden">
                        <div className="aspect-[16/9] bg-ink-100">
                          <ProjectPreviewMedia project={p} />
                        </div>
                        <div className="p-5">
                          <span className="chip bg-ember-100 text-ember-700 text-xs">
                            {p.serviceName}
                          </span>
                          <h4 className="h-card mt-2 text-ink-900">{p.title}</h4>
                          <p className="mt-2 text-xs text-ink-600">{p.summary}</p>
                          <p className="mt-3 border-t border-ink-100 pt-3 text-xs text-ink-500">
                            <strong>Value band:</strong> {p.valueBand}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {/* Suburb Reviews if any */}
              {suburbReviews.length > 0 && (
                <div className="mt-12">
                  <h3 className="h-section text-ink-900">
                    Verified Reviews from {suburb.name}
                  </h3>
                  <div className="mt-6 grid gap-6">
                    {suburbReviews.map((rev) => (
                      <ReviewCard key={`${rev.author}-${rev.date}`} review={rev} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Quote Form */}
            <aside aria-label={`Request quote for ${suburb.name}`} className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-xl border border-ink-200 bg-white p-6 sm:p-8 shadow-lift">
                <h3 className="h-card text-ink-900">
                  Request a Free Inspection in {suburb.name}
                </h3>
                <p className="mt-1.5 text-sm text-ink-600">
                  We inspect your roof, provide drone photography, and issue a fixed-price quote within 48 hours.
                </p>

                <QuoteForm
                  compact
                  className="mt-6"
                />

                <div className="mt-6 border-t border-ink-100 pt-5">
                  <p className="font-display text-xs font-semibold uppercase tracking-wider text-ink-500">
                    Thinking about your roof?
                  </p>
                  <a
                    href={business.phone.office.href}
                    className="mt-2 flex items-center gap-2 font-display text-xl font-bold text-urgent-600 hover:text-urgent-700"
                  >
                    <AlertIcon className="h-5 w-5" />
                    {business.phone.office.display}
                  </a>
                  <p className="mt-1 text-xs text-ink-500">
                    Call the office to arrange an inspection in {suburb.name}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <QuoteCta
        heading={`Book your free ${suburb.name} roof inspection`}
        intro={`We have restored and repaired more than ${suburb.jobsCompleted} roofs across ${suburb.name}. Contact us today for honest advice and an upfront, fixed-price quote.`}
      />
    </>
  );
}
