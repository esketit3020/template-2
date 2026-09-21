import Link from "next/link";
import { business } from "@/lib/business";
import { ArrowRightIcon, CheckIcon, PhoneIcon } from "./Icons";

export function NextStepBand() {
  return (
    <section aria-labelledby="next-step-heading" className="section bg-ink-900 text-white">
      <div className="shell grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="eyebrow text-ember-300">Simple, straightforward roofing</p>
          <h2 id="next-step-heading" className="h-section mt-3 text-white">
            Repairs, a restoration, or a full new roof?
          </h2>
          <p className="mt-4 max-w-2xl text-ink-200">
            We inspect what is there, explain your options in plain English, and put the scope and price in writing. No guessing from a photo or pressure to replace a roof that can be repaired.
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-200">
            {["Free on-site inspection", "Photo condition report", "Itemised written quote"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-ember-300" />{item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link href="/contact" className="btn btn-primary">
            Request a Free Quote <ArrowRightIcon className="h-5 w-5" />
          </Link>
          <a href={business.phone.office.href} className="btn btn-ghost-light">
            <PhoneIcon className="h-5 w-5" /> {business.phone.office.display}
          </a>
        </div>
      </div>
    </section>
  );
}
