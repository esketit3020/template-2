import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";
import { CheckIcon, PhoneIcon, AlertIcon, ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Inspection Request Received | Ironbark Roofing Co.",
  description: "Thank you for requesting a free roof inspection with Ironbark Roofing Co. We will be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function QuoteReceivedPage() {
  return (
    <section className="section bg-cream min-h-[70vh] flex items-center">
      <div className="shell py-8 max-w-3xl mx-auto">
        <div className="rounded-2xl border border-ink-200 bg-white p-8 sm:p-12 shadow-lift text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <CheckIcon className="h-10 w-10" />
          </div>

          <p className="eyebrow mt-6 text-ember-600">Request Confirmed</p>
          <h1 className="h-section mt-2 text-ink-900">
            We have received your inspection request.
          </h1>
          <p className="lede mt-3 text-ink-600">
            Thank you for reaching out to Ironbark Roofing Co. Nina in our office has logged your details.
          </p>

          <div className="mt-10 border-t border-ink-100 pt-8 text-left">
            <h2 className="font-display text-xl font-bold text-ink-900 text-center">
              What happens next?
            </h2>

            <ol className="mt-6 space-y-5 max-w-xl mx-auto">
              <li className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink-900 font-display text-base font-bold text-white">
                  1
                </span>
                <div>
                  <strong className="block font-semibold text-ink-900">
                    We phone you to book a time
                  </strong>
                  <p className="mt-1 text-xs text-ink-600 leading-relaxed">
                    Nina will phone you within 1 business day (usually within 2 hours during office hours) to confirm a convenient inspection time.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink-900 font-display text-base font-bold text-white">
                  2
                </span>
                <div>
                  <strong className="block font-semibold text-ink-900">
                    Free on-site drone &amp; roof inspection
                  </strong>
                  <p className="mt-1 text-xs text-ink-600 leading-relaxed">
                    Dave or a senior tradesperson inspects your roof, checks tiles/metal, flashings, gutters, and flies the condition drone.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink-900 font-display text-base font-bold text-white">
                  3
                </span>
                <div>
                  <strong className="block font-semibold text-ink-900">
                    Itemised fixed price within 48 hours
                  </strong>
                  <p className="mt-1 text-xs text-ink-600 leading-relaxed">
                    You receive your fixed-price written quotation and the high-resolution photo report. It is yours to keep, completely obligation-free.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="btn btn-primary">
              Return to Homepage
            </Link>
            <Link href="/projects" className="btn btn-outline">
              Browse Recent Projects
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
