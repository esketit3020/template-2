import Link from "next/link";
import { business } from "@/lib/business";
import { ArrowRightIcon, PhoneIcon, AlertIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="section bg-cream min-h-[70vh] flex items-center">
      <div className="shell py-12 max-w-2xl mx-auto text-center">
        <div className="rounded-2xl border border-ink-200 bg-white p-8 sm:p-12 shadow-lift">
          <p className="font-display text-5xl font-bold text-ember-500">404</p>
          <h1 className="h-section mt-2 text-ink-900">Page Not Found</h1>
          <p className="lede mt-3 text-ink-600">
            The page you are looking for might have moved, been renamed, or is temporarily unavailable.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/" className="btn btn-primary">
              Return Home
            </Link>
            <Link href="/services" className="btn btn-outline">
              Browse Services
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn btn-dark">
              Get a Free Quote
            </Link>
          </div>

          <div className="mt-10 border-t border-ink-100 pt-6 text-sm text-ink-600">
            <p>
              Looking for our office? Ring us directly on{" "}
              <a href={business.phone.office.href} className="font-bold text-ink-900 underline">
                {business.phone.office.display}
              </a>
              .
            </p>
            <p className="mt-2 text-xs text-urgent-700 font-medium flex items-center justify-center gap-1.5">
              <AlertIcon className="h-4 w-4 shrink-0" />
              Active roof leak? Call the 24/7 storm line:{" "}
              <a href={business.phone.emergency.href} className="underline font-bold">
                {business.phone.emergency.display}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
