import type { Metadata } from "next";
import { business } from "@/lib/business";
import { PageHeader } from "@/components/Blocks";
import { breadcrumbSchema, jsonLdProps } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Terms & Conditions | Ironbark Roofing Co.",
  description:
    "Standard terms of trade, written quote conditions, 25-year workmanship warranty terms, and QBCC contract compliance for Ironbark Roofing Co. Pty Ltd (QBCC 15234876).",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Terms & Conditions", path: "/terms" },
  ];

  return (
    <>
      <script {...jsonLdProps(breadcrumbSchema(breadcrumbs))} />

      <PageHeader
        eyebrow="Legal &amp; Contracts"
        title="Terms &amp; Conditions"
        intro={`The terms and conditions governing quotes, building agreements, workmanship warranties, and site works conducted by ${business.legalName} (QBCC Licence 15234876).`}
        breadcrumbs={breadcrumbs}
      />

      <section className="section bg-cream">
        <div className="shell max-w-4xl">
          <div className="rounded-xl border border-ink-100 bg-white p-8 sm:p-12 shadow-plate prose-body text-ink-800">
            <h2 className="h-card text-ink-900">1. Regulatory Framework &amp; Licensing</h2>
            <p>
              All building and roofing works conducted by <strong>{business.legalName}</strong> (trading as {business.name}, ABN {business.abn}) are governed by the <em>Queensland Building and Construction Commission Act 1991 (Qld)</em> and the relevant Australian Standards (including AS 1562 for metal roofing and AS 2050 for roof tiling).
            </p>
            <p className="mt-2">
              Ironbark Roofing Co. holds QBCC Licence No. {business.licence.number} in the classes of{" "}
              <strong>{business.licence.classes}</strong>. We carry current $20,000,000 public liability insurance with {business.insurance.insurer} and maintain active WorkCover Queensland coverage for all workers.
            </p>

            <h2 className="h-card text-ink-900 mt-8">2. Inspections, Drone Reports &amp; Quotes</h2>
            <p>
              On-site roof inspections and accompanying drone and photographic condition reports are provided free of charge for residential and commercial properties within our primary service area (up to 40km from our Woolloongabba depot). For properties located beyond 40km, any applicable travel fee is communicated and agreed prior to scheduling.
            </p>
            <p className="mt-2">
              All written quotations remain valid for a period of thirty (30) days from the date of issue. Prices quoted are fixed for the exact scope of works detailed in the written quotation.
            </p>

            <h2 className="h-card text-ink-900 mt-8">3. Hidden Defects &amp; Variations</h2>
            <p>
              Roof structures occasionally conceal pre-existing internal defects that cannot be identified by non-destructive visual or drone inspection (for example, structural batten rot beneath existing cement tiles, termite damage, or uninsulated deteriorated wiring).
            </p>
            <p className="mt-2">
              If unexpected concealed defects are discovered upon removing existing roofing or capping, our tradespeople will immediately stop, photograph the defect, explain the required rectification to the homeowner, and present a written variation. No additional work or variation will ever be commenced or invoiced without your prior written consent.
            </p>

            <h2 className="h-card text-ink-900 mt-8">4. Workmanship Warranties</h2>
            <p>
              We issue written workmanship warranties upon project completion and final walk-through:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-ink-700">
              <li>
                <strong>25-Year Workmanship Warranty:</strong> Applies to full roof restorations (complete re-bedding, flexible pointing, and membrane recoat) and complete roof replacements / re-roofs.
              </li>
              <li>
                <strong>10-Year Workmanship Warranty:</strong> Applies to targeted leak repairs, gutter and downpipe installations, and roof painting/sealing applications.
              </li>
            </ul>
            <p className="mt-3 text-xs text-ink-600">
              Our workmanship warranty guarantees that works executed by Ironbark will remain watertight and free of defects in trade installation. The warranty does not cover damage caused by subsequent catastrophic weather events (e.g. cyclonic wind or direct lightning strikes), normal building settlement beyond structural tolerances, or unauthorised third-party modifications (such as unapproved solar installations that penetrate flashings).
            </p>

            <h2 className="h-card text-ink-900 mt-8">5. Manufacturer Material Warranties</h2>
            <p>
              {business.warranty.materialNote} Dulux AcraTex membrane coatings carry manufacturer performance warranties when applied by an accredited applicator in accordance with manufacturer technical specifications.
            </p>

            <h2 className="h-card text-ink-900 mt-8">6. Site Access, Safety &amp; Care</h2>
            <p>
              The homeowner agrees to provide clear vehicular access and perimeter access around the property for scaffold erection, ladders, and waste removal.
            </p>
            <p className="mt-2">
              Ironbark tradespeople adhere strictly to Workplace Health and Safety Queensland (WHSQ) regulations and Working at Heights standards (RIIWHS204E). We commit to daily site tidying, protective drop sheets for perimeter gardens, and thorough magnetic sweeping for loose fasteners at the end of every working day.
            </p>

            <h2 className="h-card text-ink-900 mt-8">7. Payments &amp; Progress Claims</h2>
            <p>
              Deposits and progress claim structures strictly follow QBCC consumer contract guidelines. We do not demand unlawful upfront deposits. Final invoice payment is due upon job completion and satisfactory walk-through.
            </p>

            <h2 className="h-card text-ink-900 mt-8">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the State of Queensland, Australia. Any dispute arising out of or in connection with roofing services shall be subject to the jurisdiction of Queensland courts and the Queensland Civil and Administrative Tribunal (QCAT).
            </p>

            <p className="mt-8 text-xs text-ink-500">
              Last updated: September 2026. For questions regarding contract terms, contact {business.email}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
