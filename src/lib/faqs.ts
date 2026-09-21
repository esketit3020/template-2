/**
 * Onboarding §4: "FAQs (pull from real customer questions if possible)".
 * Design SOP §4 row 11 asks for 5–8; the client supplied 8 from their office inbox.
 *
 * These also feed FAQPage JSON-LD (lib/schema.ts) — build checklist §2.
 */

export type Faq = {
  q: string;
  a: string;
  /** Optional service slug so service pages can show only their own questions. */
  serviceSlug?: string;
};

export const faqs: Faq[] = [
  {
    q: "How much does a roof restoration cost in Brisbane?",
    a: "Every roof is different. We inspect the tile or metal condition, access, pitch and work required, then provide an itemised written quote tailored to your roof. A restoration may include cleaning, re-bedding, re-pointing, replacing broken tiles and recoating where appropriate. Book a free inspection to find out what your roof actually needs.",
    serviceSlug: "roof-restoration",
  },
  {
    q: "How long will my roof actually last after a restoration?",
    a: "On a tile roof that was structurally sound to begin with, expect 15 to 20 years before it needs doing again, and we back our workmanship for 25 years in writing. The honest caveat: a restoration renews the bedding, pointing and coating — it does not renew the tiles or the battens underneath. If your tiles are delaminating or the timbers have gone, a restoration is money spent on a roof that is finished, and we will tell you that at the inspection rather than take the job.",
  },
  {
    q: "Do I actually need to replace my roof, or can it be restored?",
    a: "In our experience most Brisbane roofs quoted for replacement can be restored. The genuine reasons to replace are tiles crumbling or delaminating underfoot, rotten or borer-affected battens, leaks in several unrelated parts of the house, or a restoration quote climbing past roughly half the cost of a re-roof. We are happy to lose the bigger job — we would rather do your restoration now and your replacement in fifteen years than sell you the wrong one today.",
  },
  {
    q: "Are you licensed and insured, and how do I check?",
    a: "Ironbark Roofing Co. holds QBCC Licence 15234876 for Roof Tiling and Roof Plumbing, we carry $20 million in public liability through CGU, and WorkCover Queensland cover is current for every crew member. Do not take our word for any of that — search the licence number on the QBCC's public register at my.qbcc.qld.gov.au and it will show the licence, its classes and its standing. We would encourage you to run that check on every roofer who quotes you.",
  },
  {
    q: "Do you use subcontractors?",
    a: "No. Every person who goes up on your roof is employed by Ironbark, trained by us, covered by our insurance and our WorkCover. That is not a marketing line — it is the reason we can offer a 25-year workmanship warranty. A warranty is only worth what the business behind it is worth, and we are not in a position to guarantee work done by a subbie who may not be trading in five years.",
  },
  {
    q: "Do you charge for quotes, and is the price fixed?",
    a: "Inspections and quotes are free within our primary service area, and that includes the drone and photo condition report — it is yours to keep whether or not you use us. Beyond 40km of Woolloongabba a travel fee may apply, and we will tell you that on the phone before booking, not afterwards. Quotes are fixed-price and itemised. If we find something genuinely hidden once we are on the roof — rotten battens under tile is the usual one — we stop, photograph it, and get your written approval before any variation. You will not get a surprise on the final invoice.",
  },
];

export function faqsForService(slug: string): Faq[] {
  return faqs.filter((f) => f.serviceSlug === slug);
}
