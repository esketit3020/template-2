import type { Metadata } from "next";
import { PageHeader, QuoteCta } from "@/components/Blocks";
import { Gallery } from "@/components/Gallery";
import { breadcrumbSchema, jsonLdProps } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Recent Roofing Projects Brisbane Southside | Project Gallery",
  description:
    "Explore recent roof restorations, tile-to-Colorbond conversions, and leak repairs completed across Camp Hill, Bulimba, Carindale, and the Brisbane southside. Honest value bands and details.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ];

  return (
    <>
      <script {...jsonLdProps(breadcrumbSchema(breadcrumbs))} />

      <PageHeader
        eyebrow="Recent Work"
        title="Recent roofing projects on the Brisbane southside."
        intro="Browse real jobs with named suburbs, duration on site, and value bands. Filter by service to see projects relevant to your property."
        breadcrumbs={breadcrumbs}
      />

      {/* Full Gallery with client-side interactive filter chips */}
      <Gallery heading="All Completed Projects" showFilters={true} />

      {/* Photography transparency note */}
      <section className="border-t border-ink-200 bg-cream py-10">
        <div className="shell">
          <div className="rounded-lg border border-ink-200 bg-white p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="font-display text-lg font-bold text-ink-900">
              A note about our project photography
            </h3>
            <p className="mt-2 text-sm text-ink-700 leading-relaxed">
              We have hundreds of photos on file, but almost all were taken with phones on site for insurance reports and trade assessments rather than a public website. We refuse to use generic stock photos of overseas roofs (per our trade standard).
            </p>
            <p className="mt-2 text-sm text-ink-700 leading-relaxed">
              Until our scheduled professional photography shoot on live jobs in Camp Hill and Bulimba is completed, we have rendered clear architectural line-art plates for each project. As soon as high-resolution photography is processed, real job photos will appear here.
            </p>
          </div>
        </div>
      </section>

      <QuoteCta
        heading="Have a similar roofing project in mind?"
        intro="Book a free on-site inspection. Dave or one of our senior tradespeople will inspect the roof, fly the drone, and provide an itemised fixed-price quote within 48 hours."
      />
    </>
  );
}
