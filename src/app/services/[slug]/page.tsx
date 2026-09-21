import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, serviceSlugs, getService } from "@/lib/services";
import { business, siteUrl } from "@/lib/business";
import { projectsForService } from "@/lib/projects";
import { reviewsForService } from "@/lib/reviews";
import { faqsForService } from "@/lib/faqs";
import { serviceSchema, breadcrumbSchema, faqSchema, jsonLdProps } from "@/lib/schema";
import { PageHeader, QuoteCta } from "@/components/Blocks";
import { QuoteForm } from "@/components/QuoteForm";
import { ProjectPreviewMedia } from "@/components/ProjectPreviewMedia";
import { ReviewCard } from "@/components/Reviews";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  AlertIcon,
  CheckIcon,
  ClockIcon,
  PhoneIcon,
  ShieldIcon,
  StarIcon,
  MapPinIcon,
} from "@/components/Icons";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.metaTitle} | ${business.name}`,
      description: service.metaDescription,
      url: `${siteUrl}/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.shortName, path: `/services/${service.slug}` },
  ];

  const serviceProjects = projectsForService(service.slug);
  const serviceReviews = reviewsForService(service.slug);
  const serviceFaqs = faqsForService(service.slug);

  const jsonLdService = serviceSchema(service.slug);

  return (
    <>
      {jsonLdService && <script {...jsonLdProps(jsonLdService)} />}
      <script {...jsonLdProps(breadcrumbSchema(breadcrumbs))} />
      {serviceFaqs.length > 0 && <script {...jsonLdProps(faqSchema(serviceFaqs))} />}

      <PageHeader
        eyebrow="Roofing Service"
        title={service.name}
        intro={service.teaser}
        breadcrumbs={breadcrumbs}
      >
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
          <span className="chip bg-white/10 text-white font-semibold text-base px-4 py-1.5 border border-white/20">
            Custom written quote after inspection
          </span>
          <span className="chip bg-white/10 text-ink-200">
            <ShieldIcon className="h-4 w-4 text-ember-400" />
            {service.warrantyYears}-year workmanship warranty
          </span>
          <span className="chip bg-white/10 text-ink-200">
            <ClockIcon className="h-4 w-4 text-ember-400" />
            Typical duration: {service.duration}
          </span>
        </div>
      </PageHeader>

      {/* Main Content Area */}
      <section className="section bg-cream">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            {/* Left Content Column */}
            <div>
              <div className="rounded-xl border border-ink-100 bg-white p-6 sm:p-8 shadow-plate">
                <h2 className="h-section text-ink-900">How we approach {service.shortName}</h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-700">{service.intro}</p>
                {/* Scope and quoting process */}
                <div className="mt-8 rounded-lg border-l-4 border-ember-500 bg-cream p-5">
                  <h3 className="font-display text-base font-bold uppercase tracking-wider text-ink-900">
                    Clear scope, tailored quote
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-700">
                    Every roof is different. We inspect its condition, access and the work required, explain your options in plain English, and give you an itemised written quote.
                  </p>
                  <p className="mt-2 text-xs text-ink-500">
                    Your inspection includes a photo condition report and a written quotation valid for 30 days.
                  </p>
                </div>

                {/* Inclusions */}
                <div className="mt-10">
                  <h3 className="font-display text-xl font-bold text-ink-900">
                    What is included in our {service.shortName}
                  </h3>
                  <p className="mt-1 text-sm text-ink-500">
                    Completed by employed Ironbark tradespeople — never subcontracted out.
                  </p>
                  <ul className="mt-5 space-y-3">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[0.9375rem] text-ink-800">
                        <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-ember-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Signs you need this */}
                <div className="mt-10 border-t border-ink-100 pt-8">
                  <h3 className="font-display text-xl font-bold text-ink-900">
                    You probably need this if:
                  </h3>
                  <p className="mt-1 text-sm text-ink-500">
                    Common symptoms we observe on southside inspections:
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {service.signs.map((sign) => (
                      <li key={sign} className="flex items-start gap-3 text-[0.9375rem] text-ink-700">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-ember-500" />
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Trust & Guarantee */}
                <div className="mt-10 rounded-lg bg-ink-900 p-6 text-white">
                  <div className="flex items-center gap-3">
                    <ShieldIcon className="h-7 w-7 text-ember-400" />
                    <div>
                      <h4 className="font-display text-lg font-bold">
                        {service.warrantyYears}-Year Workmanship Warranty
                      </h4>
                      <p className="text-xs text-ink-300">
                        Issued in writing upon project completion and final walk-through
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-200">
                    Because our crews are fully employed staff rather than subbies, we can stand behind our work for {service.warrantyYears} years. If our workmanship fails, we return and fix it without dispute.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Quote Card */}
            <aside aria-label="Book inspection or quote" className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-xl border border-ink-200 bg-white p-6 sm:p-8 shadow-lift">
                <h3 className="h-card text-ink-900">Book a Free Inspection</h3>
                <p className="mt-1.5 text-sm text-ink-600">
                  Fixed-price written quote inside 48 hours. The drone condition report is yours to keep.
                </p>

                <QuoteForm
                  compact
                  defaultService={service.slug}
                  className="mt-6"
                />

                <div className="mt-6 border-t border-ink-100 pt-5">
                  <p className="font-display text-xs font-semibold uppercase tracking-wider text-ink-500">
                    Prefer to speak with our office?
                  </p>
                  <a
                    href={business.phone.office.href}
                    className="mt-2 flex items-center gap-2 font-display text-2xl font-bold text-ink-900 hover:text-ember-600"
                  >
                    <PhoneIcon className="h-5 w-5 text-ember-500" />
                    {business.phone.office.display}
                  </a>
                  <p className="mt-1 text-xs text-ink-500">
                    Mon–Fri 6:30am–5pm · Answered by Dave or Nina
                  </p>
                </div>
              </div>
            </aside>
          </div>

          {/* Service Projects (if available) */}
          {serviceProjects.length > 0 && (
            <div className="mt-16 border-t border-ink-200 pt-12">
              <div className="max-w-2xl">
                <p className="eyebrow">Case Studies</p>
                <h2 className="h-section mt-2">
                  Recent {service.shortName} projects on the southside
                </h2>
                <p className="lede mt-3">
                  Real jobs, named suburbs, and the details that made them successful.
                </p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {serviceProjects.map((p) => (
                  <article key={p.slug} className="card card-hover overflow-hidden">
                    <div className="aspect-[16/9] bg-ink-100">
                      <ProjectPreviewMedia project={p} />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2">
                        <span className="chip bg-ember-100 text-ember-700">{p.suburb}</span>
                        <span className="text-xs text-ink-500">{p.completed}</span>
                      </div>
                      <h3 className="h-card mt-2 text-ink-900">{p.title}</h3>
                      <p className="mt-2 text-sm text-ink-600">{p.summary}</p>
                      <div className="mt-4 border-t border-ink-100 pt-3 text-xs text-ink-500 flex justify-between">
                        <span>Completed {p.completed}</span>
                        <span>Duration: <strong>{p.duration}</strong></span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Service Reviews (if available) */}
          {serviceReviews.length > 0 && (
            <div className="mt-16 border-t border-ink-200 pt-12">
              <div className="max-w-2xl">
                <p className="eyebrow">Customer Feedback</p>
                <h2 className="h-section mt-2">
                  What customers say about our {service.shortName}
                </h2>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {serviceReviews.map((rev) => (
                  <ReviewCard key={`${rev.author}-${rev.date}`} review={rev} />
                ))}
              </div>
            </div>
          )}

          {/* Service FAQs (if available) */}
          {serviceFaqs.length > 0 && (
            <div className="mt-16 border-t border-ink-200 pt-12">
              <FaqAccordion
                items={serviceFaqs}
                heading={`Frequently asked questions: ${service.shortName}`}
                intro="Questions about scope, materials, suitability and how we work."
                showCta={false}
              />
            </div>
          )}
        </div>
      </section>

      <QuoteCta
        defaultService={service.slug}
        heading={`Request a quote for ${service.shortName}`}
        intro="Tell us your suburb and contact details. We'll arrange an inspection, take comprehensive photos, and provide an itemised written quote within 48 hours."
      />
    </>
  );
}
