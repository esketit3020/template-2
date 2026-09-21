import type { Metadata } from "next";
import { faqs } from "@/lib/faqs";
import { business } from "@/lib/business";
import { PageHeader, QuoteCta } from "@/components/Blocks";
import { FaqAccordion } from "@/components/FaqAccordion";
import { breadcrumbSchema, faqSchema, jsonLdProps } from "@/lib/schema";
import { PhoneIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Costs, Warranties & Insurance | Ironbark Roofing",
  description:
    "Honest answers to the questions we get asked most: restoration costs in Brisbane, 25-year warranties, and subcontractor policies. QBCC 15234876.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <>
      <script {...jsonLdProps(breadcrumbSchema(breadcrumbs))} />
      <script {...jsonLdProps(faqSchema(faqs))} />

      <PageHeader
        eyebrow="Help & Advice"
        title="Frequently asked questions about roofing on the Brisbane southside."
        intro="Straightforward answers about pricing, restoration longevity, and how we work — sourced directly from customer enquiries to our office."
        breadcrumbs={breadcrumbs}
      />

      <div className="bg-cream">
        <FaqAccordion
          items={faqs}
          heading="The 8 questions we answer every week"
          intro="Click any question to expand the full answer. We believe upfront honesty helps homeowners make the right decision for their roof."
          showCta={true}
        />
      </div>

      {/* Office contact callout */}
      <section className="border-t border-ink-100 bg-white py-12">
        <div className="shell">
          <div className="max-w-3xl mx-auto rounded-xl border border-ink-200 bg-cream p-6 sm:p-8 text-center">
            <h3 className="h-card text-ink-900">Have a question not listed here?</h3>
            <p className="mt-2 text-sm text-ink-700 max-w-xl mx-auto">
              Nina runs our office and has heard almost every roofing question there is. Ring her
              directly for honest, pressure-free advice.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
              <a href={business.phone.office.href} className="btn btn-primary">
                <PhoneIcon className="h-4 w-4" />
                Call Nina: {business.phone.office.display}
              </a>
              <span className="text-xs text-ink-500">
                Mon–Fri 6:30am–5:00pm · Sat 7:00am–1:00pm
              </span>
            </div>
          </div>
        </div>
      </section>

      <QuoteCta
        heading="Ready to get your roof inspected?"
        intro="Book a free on-site inspection. Dave or one of our senior tradespeople will inspect the roof, fly the drone, and present an itemised report with a fixed-price quote."
      />
    </>
  );
}
