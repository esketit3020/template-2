/**
 * Design SOP §4 — Section 5: Why choose us.
 * "3–4 short value props (not generic — tie to real differentiators)."
 *
 * These four are verbatim the differentiators the client gave on the onboarding
 * form (§1), which is the point — the SOP explicitly warns against generic props.
 */

import Link from "next/link";
import { business } from "@/lib/business";
import { ArrowRightIcon, DroneIcon } from "./Icons";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section relative overflow-hidden bg-ink-900 text-white">
      <div className="hatch absolute inset-0" aria-hidden="true" />
      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="eyebrow text-ember-300">Why Ironbark</p>
            <h2 className="h-section mt-3 text-white">
              Four things most roofers won&rsquo;t put in writing.
            </h2>
            <p className="lede mt-4 text-ink-300">
              Every roofer who quotes you will say they do quality work. These are the four claims
              we are willing to be held to — and each one is on your written quote, not just on
              this page.
            </p>

            <div className="mt-8 rounded-lg border border-ink-700 bg-ink-950/50 p-5">
              <DroneIcon className="h-8 w-8 text-ember-400" />
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-200">
                <strong className="font-semibold text-white">You keep the photo report.</strong>{" "}
                Every inspection includes drone and close-up imagery of your ridge caps, valleys
                and flashings. It is yours whether you use us or not — take it to another roofer if
                you want a second opinion on the same evidence.
              </p>
            </div>

            <Link href="/about" className="btn btn-ghost-light mt-8">
              More about the business
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2">
            {business.differentiators.map((d) => (
              <li
                key={d.title}
                className="rounded-lg border border-ink-700 bg-ink-800/60 p-6 transition-colors hover:border-ember-500"
              >
                <span className="font-display text-3xl font-bold text-ember-400">{d.stat}</span>
                <h3 className="h-card mt-2 text-white">{d.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-300">{d.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
