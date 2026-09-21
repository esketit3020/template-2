/**
 * Design SOP §4 — Section 3: Trust bar.
 * "Licence/insurance, years in business, guarantee length, review badge —
 *  icon row, no scrolling required."
 *
 * Sits directly under the hero so the credibility scan happens without scrolling,
 * per Design SOP §2 ("Trust signals up top, not buried").
 */

import { business, yearsTrading } from "@/lib/business";
import { BadgeIcon, ClockIcon, ShieldIcon, StarIcon, UsersIcon } from "./Icons";

const items = [
  {
    Icon: BadgeIcon,
    label: `${business.licence.body} Licence ${business.licence.number}`,
    detail: business.licence.classes,
    href: business.licence.verifyUrl,
    external: true,
  },
  {
    Icon: ClockIcon,
    label: `${yearsTrading()} years trading`,
    detail: `Family-run since ${business.foundedYear}`,
  },
  {
    Icon: ShieldIcon,
    label: `${business.warranty.restoration}-year warranty`,
    detail: "Workmanship, in writing",
  },
  {
    Icon: UsersIcon,
    label: `${business.insurance.publicLiability} insured`,
    detail: "Public liability + WorkCover",
  },
  {
    Icon: StarIcon,
    label: `${business.reviews.rating} from ${business.reviews.count} reviews`,
    detail: "Verified Google reviews",
    href: business.reviews.profileUrl,
    external: true,
  },
];

export function TrustBar() {
  return (
    <section aria-label="Licensing, insurance and credentials" className="border-b border-ink-200 bg-white">
      <div className="shell">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-5 py-7 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
          {items.map(({ Icon, label, detail, href, external }) => {
            const inner = (
              <>
                <Icon className="h-7 w-7 shrink-0 text-ember-500" />
                <span className="min-w-0">
                  <span className="block font-display text-[1.0625rem] font-bold leading-tight text-ink-900">
                    {label}
                  </span>
                  <span className="block text-[0.8125rem] leading-snug text-ink-500">{detail}</span>
                </span>
              </>
            );

            return (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-start gap-3 rounded transition-colors hover:text-ember-600"
                  >
                    {inner}
                  </a>
                ) : (
                  <span className="flex items-start gap-3">{inner}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
