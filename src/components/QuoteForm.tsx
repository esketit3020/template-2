"use client";

/**
 * Conversion checklist item 9: "Inline/short quote form (name, phone, suburb,
 * service, brief description — no more)."
 *
 * Exactly those five fields. Design SOP §2: people contacting a tradie are often
 * under time pressure, and every extra field costs completions. The client also
 * specifically wanted to beat a competitor whose form is a single field
 * (onboarding §5) — being short is not the same as being useless, so we ask for
 * the four things needed to actually book an inspection and nothing else.
 *
 * Spam protection (build checklist §4): honeypot + submit-timing check, always on.
 * reCAPTCHA is layered in when the client supplies keys — see .env.example.
 */

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { business } from "@/lib/business";
import { services } from "@/lib/services";
import { primarySuburbs } from "@/lib/areas";
import { AlertIcon, ArrowRightIcon, CheckIcon, PhoneIcon } from "./Icons";

type FieldErrors = Partial<Record<"name" | "phone" | "suburb" | "service" | "message", string>>;

/** Mirrors the server-side rules in app/api/quote/route.ts. */
function validate(data: {
  name: string;
  phone: string;
  suburb: string;
  service: string;
  message: string;
}): FieldErrors {
  const errors: FieldErrors = {};

  if (data.name.trim().length < 2) errors.name = "Please tell us your name.";

  // AU formats: 04xx xxx xxx, (0x) xxxx xxxx, 1300/1800, +61...
  const digits = data.phone.replace(/[\s()+-]/g, "");
  if (!digits) {
    errors.phone = "We need a phone number to arrange the inspection.";
  } else if (!/^(0\d{9}|61\d{9}|1[38]00\d{6}|13\d{4})$/.test(digits)) {
    errors.phone = "That does not look like an Australian phone number.";
  }

  if (data.suburb.trim().length < 2) errors.suburb = "Which suburb is the roof in?";
  if (!data.service) errors.service = "Pick the closest match — we will sort out the detail.";
  if (data.message.trim().length > 1200) errors.message = "Please keep this under 1200 characters.";

  return errors;
}

export function QuoteForm({
  /** Preselect a service — used on service pages. */
  defaultService = "",
  compact = false,
  className = "",
}: {
  defaultService?: string;
  compact?: boolean;
  className?: string;
}) {
  const router = useRouter();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  // Submit-timing check: bots fill and submit in well under 3 seconds.
  const mountedAt = useRef(Date.now());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);

    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      suburb: String(fd.get("suburb") ?? ""),
      service: String(fd.get("service") ?? ""),
      message: String(fd.get("message") ?? ""),
      // Honeypot — hidden from humans, irresistible to bots.
      website: String(fd.get("website") ?? ""),
      elapsedMs: Date.now() - mountedAt.current,
    };

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // Move focus to the first problem so screen readers and keyboard users land on it.
      const first = Object.keys(found)[0];
      document.getElementById(`qf-${first}`)?.focus();
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as
          | { fieldErrors?: FieldErrors; error?: string }
          | null;
        if (body?.fieldErrors) setErrors(body.fieldErrors);
        setFormError(
          body?.error ??
            `Something went wrong sending that. Please ring us on ${business.phone.office.display} and we will take the details over the phone.`,
        );
        setSubmitting(false);
        return;
      }

      router.push("/quote-received");
    } catch {
      setFormError(
        `We could not reach the server — you may be offline. Please ring ${business.phone.office.display} and we will sort it out.`,
      );
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className={className}>
      {formError && (
        <p
          role="alert"
          className="mb-5 flex items-start gap-2.5 rounded-md border-l-4 border-urgent-600 bg-urgent-600/5 p-4 text-[0.9375rem] text-urgent-700"
        >
          <AlertIcon className="mt-0.5 h-5 w-5 shrink-0" />
          <span>{formError}</span>
        </p>
      )}

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <Field
          id="qf-name"
          name="name"
          label="Your name"
          autoComplete="name"
          error={errors.name}
          required
        />
        <Field
          id="qf-phone"
          name="phone"
          label="Phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="0412 345 678"
          error={errors.phone}
          required
        />
        <Field
          id="qf-suburb"
          name="suburb"
          label="Suburb"
          autoComplete="address-level2"
          list="qf-suburbs"
          placeholder="e.g. Camp Hill"
          error={errors.suburb}
          required
        />
        <datalist id="qf-suburbs">
          {primarySuburbs.map((s) => (
            <option key={s.name} value={s.name} />
          ))}
        </datalist>

        <div>
          <Label htmlFor="qf-service" required>
            What do you need?
          </Label>
          <select
            id="qf-service"
            name="service"
            defaultValue={defaultService}
            required
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "qf-service-error" : undefined}
            className={`mt-1.5 w-full rounded-md border-2 bg-white px-3.5 py-2.5 text-[1rem] text-ink-900 transition-colors focus:border-ember-500 focus:outline-none ${
              errors.service ? "border-urgent-600" : "border-ink-200"
            }`}
          >
            <option value="">Choose the closest match…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="not-sure">Not sure — please advise</option>
          </select>
          <FieldError id="qf-service-error" message={errors.service} />
        </div>
      </div>

      <div className="mt-4">
        <Label htmlFor="qf-message">What is going on with the roof?</Label>
        <textarea
          id="qf-message"
          name="message"
          rows={compact ? 3 : 4}
          maxLength={1200}
          placeholder="A line or two is plenty — e.g. 'cracked ridge caps and faded tile coating', or 'roof is about 30 years old and has never been done'."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "qf-message-error" : "qf-message-hint"}
          className={`mt-1.5 w-full resize-y rounded-md border-2 bg-white px-3.5 py-2.5 text-[1rem] text-ink-900 transition-colors focus:border-ember-500 focus:outline-none ${
            errors.message ? "border-urgent-600" : "border-ink-200"
          }`}
        />
        <FieldError id="qf-message-error" message={errors.message} />
        {!errors.message && (
          <p id="qf-message-hint" className="mt-1.5 text-[0.8125rem] text-ink-500">
            Optional — but it helps us send the right person with the right gear.
          </p>
        )}
      </div>

      {/* Honeypot. Positioned off-screen rather than display:none, which some bots detect. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="qf-website">Website (leave blank)</label>
        <input id="qf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" disabled={submitting} className="btn btn-primary mt-6 w-full text-lg">
        {submitting ? (
          "Sending…"
        ) : (
          <>
            Request my free inspection
            <ArrowRightIcon className="h-5 w-5" />
          </>
        )}
      </button>

      <ul className="mt-5 grid gap-2 text-[0.8125rem] text-ink-600 sm:grid-cols-3">
        {["Free inspection & photo report", "Fixed price within 48 hours", "No obligation, no sales visit"].map(
          (item) => (
            <li key={item} className="flex items-start gap-1.5">
              <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ember-500" />
              {item}
            </li>
          ),
        )}
      </ul>

      <p className="mt-4 text-[0.8125rem] leading-relaxed text-ink-500">
        We will only use your details to respond to this enquiry — see our{" "}
        <a href="/privacy-policy" className="underline underline-offset-2 hover:text-ink-700">
          privacy policy
        </a>
        . In a hurry? Ring{" "}
        <a
          href={business.phone.office.href}
          className="inline-flex items-center gap-1 font-semibold text-ink-900 underline underline-offset-2"
        >
          <PhoneIcon className="h-3.5 w-3.5" />
          {business.phone.office.display}
        </a>
        .
      </p>
    </form>
  );
}

/* ── Field primitives ───────────────────────────────────────────────────── */

function Label({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="font-display text-[1.0625rem] font-semibold text-ink-900">
      {children}
      {required && (
        <span className="ml-1 text-ember-600" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-[0.8125rem] font-medium text-urgent-600">
      {message}
    </p>
  );
}

function Field({
  id,
  name,
  label,
  error,
  required,
  type = "text",
  ...rest
}: {
  id: string;
  name: string;
  label: string;
  error?: string;
  required?: boolean;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`mt-1.5 w-full rounded-md border-2 bg-white px-3.5 py-2.5 text-[1rem] text-ink-900 transition-colors placeholder:text-ink-400 focus:border-ember-500 focus:outline-none ${
          error ? "border-urgent-600" : "border-ink-200"
        }`}
        {...rest}
      />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}
