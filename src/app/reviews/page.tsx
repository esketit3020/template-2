import type { Metadata } from "next";
import { business } from "@/lib/business";
import { reviewsByRecency } from "@/lib/reviews";
import { PageHeader, QuoteCta } from "@/components/Blocks";
import { ReviewCard } from "@/components/Reviews";
import { StarIcon, ArrowRightIcon } from "@/components/Icons";
import { breadcrumbSchema, reviewsPageSchema, jsonLdProps } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Customer Reviews | 4.9★ from 187 Reviews | Ironbark Roofing",
  description:
    "Read genuine, verified customer reviews for Ironbark Roofing Co. 4.9-star rating from 187 Google reviews across Coorparoo, Camp Hill, Carindale, and the Brisbane southside.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Reviews", path: "/reviews" },
  ];

  return (
    <>
      <script {...jsonLdProps(breadcrumbSchema(breadcrumbs))} />
      <script {...jsonLdProps(reviewsPageSchema())} />

      <PageHeader
        eyebrow="Customer Reviews"
        title="What Brisbane southside homeowners actually say."
        intro={`Rated ${business.reviews.rating} ★ across ${business.reviews.count} verified Google reviews. Specific feedback naming the suburb, the job, and the real experience — including honest four-star feedback.`}
        breadcrumbs={breadcrumbs}
      >
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={business.reviews.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-white/20 bg-white/10 p-3 text-white backdrop-blur hover:border-white/40"
          >
            <span className="font-display text-3xl font-bold">{business.reviews.rating}</span>
            <span className="text-xs">
              <span className="flex gap-0.5 text-amber-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5" />
                ))}
              </span>
              <span className="mt-0.5 block text-ink-300">
                from {business.reviews.count} Google Reviews
              </span>
            </span>
          </a>

          <a
            href={business.reviews.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost-light text-sm"
          >
            Leave a Google Review
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </PageHeader>

      <section className="section bg-cream">
        <div className="shell">
          <div className="max-w-2xl">
            <h2 className="h-section text-ink-900">Recent Verified Reviews</h2>
            <p className="lede mt-2 text-ink-600">
              Filtered by recency. Every review is from a verified property owner in our primary service area.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviewsByRecency.map((review) => (
              <ReviewCard key={`${review.author}-${review.date}`} review={review} />
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-ink-200 bg-white p-6 sm:p-8 text-center max-w-2xl mx-auto">
            <h3 className="h-card text-ink-900">Had work done by Ironbark?</h3>
            <p className="mt-2 text-sm text-ink-600">
              We appreciate all feedback from our clients. Reviews help other southside homeowners make informed decisions.
            </p>
            <div className="mt-5">
              <a
                href={business.reviews.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Write a Review on Google
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <QuoteCta
        heading="Experience the Ironbark standard for yourself"
        intro="Free on-site roof inspection, comprehensive drone photography report, and a fixed-price written quote inside 48 hours."
      />
    </>
  );
}
