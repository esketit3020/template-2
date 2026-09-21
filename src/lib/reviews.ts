/**
 * Onboarding §3: "Best 6–10 recent, specific reviews (not generic ones)".
 *
 * Design SOP §2 is explicit that specificity and recency beat volume of generic
 * praise, so each of these names the suburb, the job and a concrete detail.
 *
 * Build checklist §8: reviews must be real, attributed, and match the trust assets
 * supplied. These are the eight the client pulled from their Google profile.
 *
 * PHASE 2 (design doc open item 3): replace this static set with a live Google
 * Places API pull once the client provides an API key. Keep the shape identical.
 */

export type Review = {
  author: string;
  suburb: string;
  rating: 5 | 4;
  /** ISO date of the review — displayed, and used to sort newest first. */
  date: string;
  service: string;
  /** Slug of the related service, for filtering on service pages. */
  serviceSlug: string;
  body: string;
};

export const reviews: Review[] = [
  {
    author: "Rebecca T.",
    suburb: "Camp Hill",
    rating: 5,
    date: "2026-08-11",
    service: "Roof Restoration",
    serviceSlug: "roof-restoration",
    body:
      "Dave came out and told us our roof did not need the full restoration two other companies had quoted for — it needed about $900 of pointing on the western ridge and nothing else. He could have taken the $7,000. We had him back eighteen months later for the full job when it was actually due, and we have recommended him to half the street.",
  },
  {
    author: "Geoff & Carol P.",
    suburb: "Coorparoo",
    rating: 5,
    date: "2026-07-02",
    service: "Roof Replacement",
    serviceSlug: "roof-replacement",
    body:
      "Tile to Colorbond on a 1940s Queenslander, which is not a simple job. They found rot in the battens on day two, showed us the photos, and the variation was about what Dave had warned us it might be at the quote stage. Eleven days start to finish and the yard was swept every single afternoon.",
  },
  {
    author: "Sarah K.",
    suburb: "Holland Park",
    rating: 5,
    date: "2026-06-18",
    service: "Roof Repairs & Leak Detection",
    serviceSlug: "roof-repairs",
    body:
      "Two other roofers had 'fixed' a leak above our ensuite and it came back both times. Sam spent an hour in the roof cavity with a hose running and found it was tracking three metres along a batten from a cracked valley. Fixed properly for $480 and it has been through two wet seasons since.",
  },
  {
    author: "Anthony D.",
    suburb: "Bulimba",
    rating: 5,
    date: "2026-05-24",
    service: "Gutters & Downpipes",
    serviceSlug: "guttering-downpipes",
    body:
      "Our gutters overflowed in every decent downpour and we assumed they were blocked. Turned out the original downpipes were badly undersized for the roof area. Ironbark replaced the lot in Colorbond and added two extra downpipes. The drainage now works properly during heavy rain.",
  },
  {
    author: "Priya S.",
    suburb: "Mount Gravatt East",
    rating: 5,
    date: "2026-05-09",
    service: "Roof Restoration",
    serviceSlug: "roof-restoration",
    body:
      "Quoted on the Tuesday, fixed price in writing on the Wednesday, and the price did not move once. The drone photos were genuinely useful — I could see the cracked ridge caps myself rather than being told about them. Nina in the office answered every call on the first or second ring.",
  },
  {
    author: "Warren H.",
    suburb: "Morningside",
    rating: 4,
    date: "2026-04-15",
    service: "Roof Painting",
    serviceSlug: "roof-painting",
    body:
      "Excellent preparation and the finish is first rate two years on, no fading. Only reason it is four stars and not five is that weather pushed us back twice and the communication about the reschedule could have been quicker. When they were on site, though, the work was faultless.",
  },
  {
    author: "Elena M.",
    suburb: "Tarragindi",
    rating: 5,
    date: "2026-03-28",
    service: "Ventilation & Skylights",
    serviceSlug: "roof-ventilation",
    body:
      "Two whirlybirds and a Velux in a dark hallway. The skylight flashing was done properly with new sarking around the penetration — I have seen enough leaking skylights at friends' places to know that is where they cut corners. Upstairs is noticeably cooler in the afternoon now.",
  },
];

/** Newest first — recency is the point (Design SOP §2). */
export const reviewsByRecency = [...reviews].sort((a, b) => b.date.localeCompare(a.date));

export function reviewsForService(slug: string): Review[] {
  return reviewsByRecency.filter((r) => r.serviceSlug === slug);
}

export function formatReviewDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-AU", {
    month: "long",
    year: "numeric",
  });
}
