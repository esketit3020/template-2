import type { Metadata } from "next";
import { business } from "@/lib/business";
import { PageHeader } from "@/components/Blocks";
import { breadcrumbSchema, jsonLdProps } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy | Ironbark Roofing Co.",
  description:
    "Privacy policy for Ironbark Roofing Co. Pty Ltd (ABN 48 621 305 774). How we handle customer details, quote submissions, and comply with the Australian Privacy Principles.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  return (
    <>
      <script {...jsonLdProps(breadcrumbSchema(breadcrumbs))} />

      <PageHeader
        eyebrow="Legal &amp; Compliance"
        title="Privacy Policy"
        intro={`This policy outlines how ${business.legalName} (ABN ${business.abn}) collects, uses, and protects your personal information in compliance with the Australian Privacy Principles (APPs) set out in the Privacy Act 1988 (Cth).`}
        breadcrumbs={breadcrumbs}
      />

      <section className="section bg-cream">
        <div className="shell max-w-4xl">
          <div className="rounded-xl border border-ink-100 bg-white p-8 sm:p-12 shadow-plate prose-body text-ink-800">
            <h2 className="h-card text-ink-900">1. Who We Are</h2>
            <p>
              In this Privacy Policy, &ldquo;we&rdquo;, &ldquo;us&rdquo;, and &ldquo;our&rdquo; refers to{" "}
              <strong>{business.legalName}</strong> (trading as {business.name}), ABN {business.abn},
              holding QBCC Licence No. {business.licence.number}. Our registered operational depot is located at{" "}
              {business.address.oneLine}.
            </p>

            <h2 className="h-card text-ink-900 mt-8">2. Personal Information We Collect</h2>
            <p>
              To provide roofing inspections, quotes, restorations, and repair services, we may collect the following information:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-ink-700">
              <li>Your name and contact details (telephone number, email address).</li>
              <li>Your property address and roof location.</li>
              <li>Details regarding your roof condition, leak history, and specific requirements.</li>
              <li>Photographic and drone imagery of your roof, gutters, and site surrounds.</li>
            </ul>

            <h2 className="h-card text-ink-900 mt-8">3. How We Collect Information</h2>
            <p>
              We collect information directly from you when you:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-ink-700">
              <li>Complete the inspection quote request form on our website.</li>
              <li>Call our office or 1300 number.</li>
              <li>Engage with our tradespeople during an on-site roof inspection.</li>
              <li>Communicate with our office team via email or messaging.</li>
            </ul>

            <h2 className="h-card text-ink-900 mt-8">4. Purpose of Collection &amp; Use</h2>
            <p>
              We collect and use your personal information solely for genuine business purposes, including:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-ink-700">
              <li>Arranging and conducting on-site roof inspections and drone condition reports.</li>
              <li>Preparing and sending itemised, fixed-price written quotations.</li>
              <li>Scheduling and executing roofing work, repairs, and material deliveries.</li>
              <li>Issuing written 10-year and 25-year workmanship warranty certificates.</li>
              <li>Communicating with your insurer or loss adjuster if you have authorized us to assist with your claim.</li>
              <li>Meeting legal, taxation, and statutory requirements under Queensland building legislation (QBCC).</li>
            </ul>
            <p className="mt-3">
              <strong>We never sell, rent, or trade customer contact information to third-party marketing companies.</strong>
            </p>

            <h2 className="h-card text-ink-900 mt-8">5. Website Analytics &amp; Cookies</h2>
            <p>
              Our website may use privacy-compliant analytics (such as Google Analytics 4) to track aggregated, non-personally identifiable website metrics (such as page visits, browser types, and general geographic location). These insights help us improve user experience and monitor site reliability. You can disable cookies through your web browser settings at any time without affecting site accessibility.
            </p>

            <h2 className="h-card text-ink-900 mt-8">6. Security &amp; Storage</h2>
            <p>
              We store customer details on secure, password-protected systems. Only authorised Ironbark staff members (such as our management and office team) have access to your personal information. When paper records or old condition reports are no longer legally required to be retained for warranty verification, they are securely destroyed.
            </p>

            <h2 className="h-card text-ink-900 mt-8">7. Access, Correction &amp; Inquiries</h2>
            <p>
              Under the Australian Privacy Principles, you have the right to request access to personal information we hold about you and to request corrections if any detail is inaccurate or outdated.
            </p>
            <p className="mt-3">
              For any questions regarding this Privacy Policy or how your information is handled, please contact our Office Manager:
            </p>
            <div className="mt-4 rounded-lg bg-cream p-4 text-sm text-ink-900">
              <p><strong>Contact:</strong> Nina Whitlock (Office Manager)</p>
              <p><strong>Email:</strong> <a href={`mailto:${business.email}`} className="text-ember-600 underline">{business.email}</a></p>
              <p><strong>Phone:</strong> {business.phone.office.display}</p>
              <p><strong>Postal Address:</strong> {business.address.oneLine}</p>
            </div>

            <p className="mt-8 text-xs text-ink-500">
              Last updated: September 2026. Reviewed annually for regulatory compliance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
