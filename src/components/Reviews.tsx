/**
 * Design SOP §4 — Section 8: Reviews / testimonials.
 * "Specific, recent, ideally with suburb mentioned; pull live from Google if possible."
 *
 * Static for launch, with GBP deep links. The live Places API pull is design doc
 * open item 3 (needs the client's API key) — lib/reviews.ts keeps the same shape
 * so swapping the source is a data-layer change only.
 */

import Link from "next/link";
import { business } from "@/lib/business";
import { reviewsByRecency, formatReviewDate, type Review } from "@/lib/reviews";
import { ArrowRightIcon, StarIcon, StarRow } from "./Icons";

export function Reviews({
  limit,
  heading = "What southside homeowners actually said",
  dark = false,
}: {
  limit?: number;
  heading?: string;
  dark?: boolean;
}) {
  const shown = limit ? reviewsByRecency.slice(0, limit) : reviewsByRecency;

  return (
    <section
      id="reviews"
      className={`section ${dark ? "bg-ink-900 text-white" : "bg-white border-y border-ink-100"}`}
    >
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className={`eyebrow ${dark ? "text-ember-300" : ""}`}>Reviews</p>
            <h2 className={`h-section mt-3 ${dark ? "text-white" : ""}`}>{heading}</h2>
            <p className={`lede mt-4 ${dark ? "text-ink-300" : ""}`}>
              Not &ldquo;great service, highly recommend&rdquo;. These name the suburb, the job and
              what actually happened — including the four-star one, which we have left up because
              the criticism in it was fair.
            </p>
          </div>

          <a
            href={business.reviews.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex shrink-0 items-center gap-3 rounded-lg border p-4 transition-colors ${
              dark
                ? "border-ink-700 bg-ink-800/60 hover:border-ember-500"
                : "border-ink-200 bg-cream hover:border-ember-400"
            }`}
          >
            <span className="flex flex-col items-center leading-none">
              <span
                className={`font-display text-4xl font-bold ${dark ? "text-white" : "text-ink-900"}`}
              >
                {business.reviews.rating}
              </span>
              <span className="flex gap-px pt-1.5" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} className="h-3 w-3 text-amber-400" />
                ))}
              </span>
            </span>
            <span className="text-sm leading-snug">
              <strong className={`block font-semibold ${dark ? "text-white" : "text-ink-900"}`}>
                {business.reviews.count} Google reviews
              </strong>
              <span className={dark ? "text-ink-400" : "text-ink-500"}>
                Read every one on our profile →
              </span>
            </span>
          </a>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((r) => (
            <li key={`${r.author}-${r.date}`}>
              <ReviewCard review={r} dark={dark} />
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          {limit && (
            <Link href="/reviews" className={`btn ${dark ? "btn-ghost-light" : "btn-outline"}`}>
              Read all reviews
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          )}
          <p className={`text-[0.8125rem] ${dark ? "text-ink-400" : "text-ink-500"}`}>
            Rating and count as at{" "}
            {new Date(`${business.reviews.asAt}T00:00:00`).toLocaleDateString("en-AU", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            . Surnames shortened at our customers&rsquo; request.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ReviewCard({ review: r, dark = false }: { review: Review; dark?: boolean }) {
  return (
    <figure
      className={`flex h-full flex-col rounded-lg border p-6 ${
        dark ? "border-ink-700 bg-ink-800/60" : "border-ink-100 bg-cream"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <StarRow rating={r.rating} />
        <span className={`chip ${dark ? "bg-ink-700 text-ink-200" : ""}`}>{r.service}</span>
      </div>

      <blockquote
        className={`mt-4 flex-1 text-[0.9375rem] leading-relaxed ${dark ? "text-ink-200" : "text-ink-700"}`}
      >
        &ldquo;{r.body}&rdquo;
      </blockquote>

      <figcaption
        className={`mt-5 border-t pt-4 text-[0.8125rem] ${dark ? "border-ink-700" : "border-ink-200"}`}
      >
        <strong className={`font-display text-base font-bold ${dark ? "text-white" : "text-ink-900"}`}>
          {r.author}
        </strong>
        <span className={`block ${dark ? "text-ink-400" : "text-ink-500"}`}>
          {r.suburb} · {formatReviewDate(r.date)} · via Google
        </span>
      </figcaption>
    </figure>
  );
}
