/**
 * Design SOP §4 — Section 6: How we work.
 * "3–5 step visual process (enquiry → inspection → quote → job → follow-up)."
 * Purpose per the SOP: reduce purchase anxiety on a high-ticket, trust-dependent buy.
 *
 * Clear stages and an individual written quote help homeowners understand the work
 * before they commit.
 */

import Link from "next/link";
import { business } from "@/lib/business";
import { ArrowRightIcon, PhoneIcon } from "./Icons";

export function HowWeWork() {
  return (
    <section id="how-we-work" className="section bg-cream-dark">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow">How we work</p>
          <h2 className="h-section mt-3">
            Five steps, and you know the price before step four.
          </h2>
          <p className="lede mt-4">
            A roof is a big spend and most people only do it once or twice in their life. Here is
            exactly what happens, so there are no surprises — including the part where we tell you
            if your roof does not need the work yet.
          </p>
        </div>

        <ol className="mt-12 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-4">
          {business.process.map((step, i) => (
            <li key={step.step} className="relative">
              {/* Connector line between steps on wide screens */}
              {i < business.process.length - 1 && (
                <span
                  className="absolute left-14 top-6 hidden h-0.5 w-[calc(100%-3rem)] bg-ink-200 lg:block"
                  aria-hidden="true"
                />
              )}

              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-ink-900 font-display text-xl font-bold text-white">
                {step.step}
              </span>

              <h3 className="h-card mt-4 text-ink-900">{step.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-start gap-4 border-t border-ink-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-[0.9375rem] text-ink-600">
            Inspections are free across our primary service area, and so is the photo report.{" "}
            <span className="text-ink-500">
              Beyond 40km of Woolloongabba a travel fee may apply — we tell you on the phone, not
              afterwards.
            </span>
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn btn-primary">
              Book the free inspection
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <a href={business.phone.office.href} className="btn btn-outline">
              <PhoneIcon className="h-5 w-5" />
              {business.phone.office.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
