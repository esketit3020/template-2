import type { Metadata } from "next";
import { business } from "@/lib/business";
import { PageHeader } from "@/components/Blocks";
import { QuoteForm } from "@/components/QuoteForm";
import {
  PhoneIcon,
  AlertIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  BadgeIcon,
  ShieldIcon,
  CheckIcon,
} from "@/components/Icons";
import { breadcrumbSchema, jsonLdProps } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us & Free Quote Request | Ironbark Roofing Brisbane",
  description:
    "Request a free roof inspection and fixed-price quote within 48 hours from Ironbark Roofing Co. Woolloongabba depot, office phone (07) 3856 4120 QBCC 15234876.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <script {...jsonLdProps(breadcrumbSchema(breadcrumbs))} />

      <PageHeader
        eyebrow="Contact Us"
        title="Get a free inspection and fixed-price quote in 48 hours."
        intro="Five simple fields. Nina or Dave will call you back to confirm a time that suits your schedule. The drone condition report is yours to keep whether you choose us or not."
        breadcrumbs={breadcrumbs}
      />

      <section className="section bg-cream">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* Left Column: Form */}
            <div>
              <div className="rounded-xl border border-ink-200 bg-white p-6 sm:p-10 shadow-lift">
                <h2 className="h-card text-ink-900">Request Your Free Inspection</h2>
                <p className="mt-1.5 text-sm text-ink-600">
                  No sales pitch. Just an experienced roofer, a drone report, and an itemised price.
                </p>

                <QuoteForm className="mt-8" />
              </div>
            </div>

            {/* Right Column: Complete NAP & Contact Details */}
            <div className="space-y-6">

              {/* Office & Depot Details */}
              <div className="rounded-xl border border-ink-200 bg-white p-6 sm:p-8 shadow-plate">
                <h3 className="font-display text-xl font-bold text-ink-900">
                  Office &amp; Depot Details
                </h3>

                <dl className="mt-6 space-y-4 text-sm text-ink-700">
                  <div className="flex items-start gap-3">
                    <PhoneIcon className="mt-1 h-5 w-5 shrink-0 text-ember-500" />
                    <div>
                      <dt className="font-semibold text-ink-900">Office Phone</dt>
                      <dd>
                        <a
                          href={business.phone.office.href}
                          className="font-display text-lg font-bold text-ink-900 hover:text-ember-600"
                        >
                          {business.phone.office.display}
                        </a>
                      </dd>
                      <dd className="text-xs text-ink-500">
                        National toll-free:{" "}
                        <a href={business.phone.national.href} className="underline">
                          {business.phone.national.display}
                        </a>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-ink-100 pt-4">
                    <MailIcon className="mt-1 h-5 w-5 shrink-0 text-ember-500" />
                    <div>
                      <dt className="font-semibold text-ink-900">Email Address</dt>
                      <dd>
                        <a
                          href={`mailto:${business.email}`}
                          className="text-ember-600 hover:underline"
                        >
                          {business.email}
                        </a>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-ink-100 pt-4">
                    <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-ember-500" />
                    <div>
                      <dt className="font-semibold text-ink-900">Depot Address</dt>
                      <dd className="mt-0.5">{business.address.oneLine}</dd>
                      <dd className="mt-2">
                        <a
                          href="https://maps.google.com/?q=Unit+7,+24+Balaclava+Street,+Woolloongabba+QLD+4102"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-ember-600 underline"
                        >
                          Get directions on Google Maps →
                        </a>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-ink-100 pt-4">
                    <ClockIcon className="mt-1 h-5 w-5 shrink-0 text-ember-500" />
                    <div>
                      <dt className="font-semibold text-ink-900">Operating Hours</dt>
                      <dd className="mt-1 space-y-1 text-xs text-ink-600">
                        {business.hours.display.map((h) => (
                          <div key={h.days} className="flex justify-between gap-4">
                            <span>{h.days}:</span>
                            <span className="font-medium text-ink-900">{h.time}</span>
                          </div>
                        ))}
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              {/* Licensing verification box */}
              <div className="rounded-xl border border-ink-200 bg-white p-6 text-sm text-ink-700 shadow-plate">
                <div className="flex items-center gap-2">
                  <BadgeIcon className="h-5 w-5 text-ember-500" />
                  <h4 className="font-display text-base font-bold text-ink-900">
                    Licensing &amp; Legal Verification
                  </h4>
                </div>
                <ul className="mt-3 space-y-2 text-xs">
                  <li>
                    <strong>QBCC Licence:</strong> {business.licence.number} ({business.licence.classes})
                  </li>
                  <li>
                    <strong>ABN:</strong> {business.abn} (Ironbark Roofing Co. Pty Ltd)
                  </li>
                  <li>
                    <strong>Insurance:</strong> {business.insurance.publicLiability} Public Liability (CGU) + WorkCover
                  </li>
                </ul>
                <div className="mt-4 border-t border-ink-100 pt-3">
                  <a
                    href={business.licence.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-ember-600 underline"
                  >
                    Verify our QBCC licence on my.qbcc.qld.gov.au →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
