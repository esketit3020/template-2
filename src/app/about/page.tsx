import type { Metadata } from "next";
import Link from "next/link";
import { business, yearsTrading } from "@/lib/business";
import { PageHeader, QuoteCta, TrustStrip } from "@/components/Blocks";
import {
  ShieldIcon,
  CheckIcon,
  BadgeIcon,
  UsersIcon,
  ArrowRightIcon,
  StarIcon,
  PhoneIcon,
} from "@/components/Icons";
import { breadcrumbSchema, jsonLdProps } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Ironbark Roofing Co. | Family-Run Brisbane Roofers Since 2009",
  description:
    "Founded by Dave Whitlock in 2009 to offer straightforward local roofing. Seventeen years later, still family-run, employing every crew member on our books. QBCC 15234876, 25-year workmanship warranty.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <script {...jsonLdProps(breadcrumbSchema(breadcrumbs))} />

      <PageHeader
        eyebrow="Our Story"
        title="Seventeen years on Brisbane roofs, and we still employ every crew member."
        intro={business.foundingStory}
        breadcrumbs={breadcrumbs}
      >
        <TrustStrip className="mt-8 text-ink-300" />
      </PageHeader>

      {/* The Story & Philosophy */}
      <section className="section bg-cream">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="prose-body">
              <h2 className="h-section text-ink-900">
                Started with one ute and a simple promise: do the job properly.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-800">
                Dave Whitlock spent years working on Brisbane roofs before starting his own local business. He wanted customers to know who was turning up, what the work involved and exactly what it would cost.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-ink-700">
                Dave started Ironbark Roofing Co. in 2009 with one ute and a second-hand trailer, built on a simple operating standard: <strong>do the job once, do it properly, employ your own tradespeople, and put your name to a warranty that actually protects the homeowner</strong>.
              </p>
              <p className="mt-4 text-[1rem] leading-relaxed text-ink-700">
                {yearsTrading()} years later, Ironbark is still very much a family-run trade business. Dave&rsquo;s daughter Nina manages the office and client communication. Dave still climbs up and inspects the vast majority of jobs himself. And every roofer on site is an employed Ironbark team member — not an anonymous subcontractor.
              </p>

              {/* Differentiator Highlights */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-ink-100 bg-white p-5 shadow-plate">
                  <span className="font-display text-2xl font-bold text-ember-500">0 Subbies</span>
                  <h3 className="h-card mt-1 text-ink-900">Employed Crews Only</h3>
                  <p className="mt-2 text-xs text-ink-600 leading-relaxed">
                    Every roofer on your property is on our payroll, covered by our WorkCover, and trained to our standard.
                  </p>
                </div>
                <div className="rounded-lg border border-ink-100 bg-white p-5 shadow-plate">
                  <span className="font-display text-2xl font-bold text-ember-500">25-Yr Cover</span>
                  <h3 className="h-card mt-1 text-ink-900">Written Workmanship</h3>
                  <p className="mt-2 text-xs text-ink-600 leading-relaxed">
                    Full restorations and re-roofs carry a 25-year workmanship warranty in writing — not a verbal handshake.
                  </p>
                </div>
              </div>
            </div>

            {/* Residential vs Commercial */}
            <div>
              <div className="rounded-xl border border-ink-200 bg-white p-6 sm:p-8 shadow-lift">
                <p className="eyebrow">Our Work</p>
                <h3 className="h-card mt-2 text-ink-900">80% Residential / 20% Commercial</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  We balance domestic craft with commercial discipline:
                </p>

                <div className="mt-6 space-y-5">
                  <div className="rounded-lg bg-cream p-4">
                    <h4 className="font-display text-base font-bold text-ink-900">
                      Residential Roofing (80%)
                    </h4>
                    <p className="mt-1.5 text-xs text-ink-600 leading-relaxed">
                      Character Queenslanders in Coorparoo and Camp Hill, post-war tile in Holland Park, and modern tile-to-Colorbond conversions across the southside. We protect gardens, paths, and driveways every single day on site.
                    </p>
                  </div>

                  <div className="rounded-lg bg-cream p-4">
                    <h4 className="font-display text-base font-bold text-ink-900">
                      Commercial &amp; Strata (20%)
                    </h4>
                    <p className="mt-1.5 text-xs text-ink-600 leading-relaxed">
                      Childcare centres, schools, body corporate complexes, and small industrial warehouses where works must be staged safely without halting trade. Full SWMS and compliance paperwork delivered upfront.
                    </p>
                  </div>
                </div>

                <div className="mt-8 border-t border-ink-100 pt-5">
                  <a
                    href={business.reviews.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-ink-200 p-3 hover:border-ember-400"
                  >
                    <span className="font-display text-3xl font-bold text-ink-900">
                      {business.reviews.rating}
                    </span>
                    <span className="text-xs text-ink-600">
                      <strong className="block text-ink-900">
                        {business.reviews.count} Google Reviews
                      </strong>
                      Rated 4.9 out of 5 stars by Brisbane homeowners
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="section bg-white border-y border-ink-100">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="eyebrow">The People Behind Ironbark</p>
            <h2 className="h-section mt-3 text-ink-900">Meet the Team</h2>
            <p className="lede mt-3">
              The people who quote your job, manage your paperwork, and get on your roof.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {business.team.map((member) => (
              <article
                key={member.name}
                className="card flex flex-col justify-between p-6 shadow-plate"
              >
                <div>
                  <div className="h-16 w-16 rounded-full bg-ink-900 text-white flex items-center justify-center font-display text-2xl font-bold">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="h-card mt-4 text-ink-900">{member.name}</h3>
                  <p className="text-xs font-semibold text-ember-600">{member.role}</p>
                  {"licence" in member && member.licence && (
                    <p className="mt-1 text-[0.75rem] font-medium text-ink-500">{member.licence}</p>
                  )}
                  <p className="mt-3 text-xs leading-relaxed text-ink-600">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Licences, Insurance & Accreditations Matrix */}
      <section className="section bg-cream">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="eyebrow">Licences &amp; Credentials</p>
            <h2 className="h-section mt-3 text-ink-900">
              Fully Licensed, Insured &amp; Accredited
            </h2>
            <p className="lede mt-3">
              Never take a roofer&rsquo;s word for their licensing. We encourage all clients to check our credentials directly with the QBCC.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {business.accreditations.map((acc) => (
              <div key={acc.name} className="card p-6 shadow-plate">
                <BadgeIcon className="h-8 w-8 text-ember-500" />
                <h3 className="font-display text-lg font-bold text-ink-900 mt-3">{acc.name}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-600">{acc.detail}</p>
              </div>
            ))}
            <div className="card p-6 shadow-plate">
              <ShieldIcon className="h-8 w-8 text-ember-500" />
              <h3 className="font-display text-lg font-bold text-ink-900 mt-3">
                {business.insurance.publicLiability} Public Liability
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-ink-600">
                Insured through {business.insurance.insurer}. WorkCover Queensland active for all employees.
              </p>
            </div>
            <div className="card p-6 shadow-plate">
              <UsersIcon className="h-8 w-8 text-ember-500" />
              <h3 className="font-display text-lg font-bold text-ink-900 mt-3">
                QBCC Licence Registry
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-ink-600">
                Licence 15234876. Verify on the Queensland government public register:
              </p>
              <a
                href={business.licence.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ember-600 underline"
              >
                Check QBCC Register →
              </a>
            </div>
          </div>
        </div>
      </section>

      <QuoteCta
        heading="Work with Brisbane's trusted family roofing team"
        intro="Free on-site inspection, drone condition report, and an itemised fixed-price quote inside 48 hours."
      />
    </>
  );
}
