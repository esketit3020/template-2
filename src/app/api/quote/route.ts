/**
 * Quote form endpoint.
 *
 * Build checklist §4: "All forms tested end-to-end and submitting correctly" /
 * "Form submissions routed to correct inbox/CRM".
 *
 * ── OPEN ITEM ────────────────────────────────────────────────────────────────
 * Delivery is NOT wired yet. The client had not confirmed whether leads go to the
 * office inbox or into ServiceM8 (design doc open item 2). Until they do, this
 * route validates, screens for spam, and logs the lead server-side so nothing is
 * silently dropped in staging.
 *
 * TO GO LIVE: set RESEND_API_KEY + QUOTE_INBOX in .env and uncomment the
 * `deliver()` call. Do not launch without this — see 03-website-build-checklist.md.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { NextResponse } from "next/server";
import { business } from "@/lib/business";
import { serviceSlugs, getService } from "@/lib/services";

type Payload = {
  name?: unknown;
  phone?: unknown;
  suburb?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown;
  elapsedMs?: unknown;
};

type FieldErrors = Record<string, string>;

const str = (v: unknown, max = 2000) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  const name = str(body.name, 120);
  const phone = str(body.phone, 40);
  const suburb = str(body.suburb, 120);
  const service = str(body.service, 60);
  const message = str(body.message, 1200);
  const honeypot = str(body.website, 200);
  const elapsedMs = typeof body.elapsedMs === "number" ? body.elapsedMs : 0;

  // ── Spam screening (build checklist §4) ──
  // Both checks return 200 so bots get no signal about what tripped them.
  if (honeypot) {
    console.warn("[quote] honeypot tripped — discarded");
    return NextResponse.json({ ok: true });
  }
  if (elapsedMs > 0 && elapsedMs < 2500) {
    console.warn(`[quote] submitted in ${elapsedMs}ms — discarded as automated`);
    return NextResponse.json({ ok: true });
  }

  // ── Validation. Mirrors the client-side rules in QuoteForm.tsx. ──
  const fieldErrors: FieldErrors = {};

  if (name.length < 2) fieldErrors.name = "Please tell us your name.";

  const digits = phone.replace(/[\s()+-]/g, "");
  if (!digits) {
    fieldErrors.phone = "We need a phone number to arrange the inspection.";
  } else if (!/^(0\d{9}|61\d{9}|1[38]00\d{6}|13\d{4})$/.test(digits)) {
    fieldErrors.phone = "That does not look like an Australian phone number.";
  }

  if (suburb.length < 2) fieldErrors.suburb = "Which suburb is the roof in?";

  if (!service) {
    fieldErrors.service = "Pick the closest match — we will sort out the detail.";
  } else if (service !== "not-sure" && !serviceSlugs.includes(service)) {
    fieldErrors.service = "That service was not recognised.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      { error: "Please check the highlighted fields.", fieldErrors },
      { status: 422 },
    );
  }

  const lead = {
    receivedAt: new Date().toISOString(),
    name,
    phone,
    suburb,
    service: service === "not-sure" ? "Not sure — please advise" : getService(service)?.name ?? service,
    message: message || "(none supplied)",
  };

  // Until delivery is wired, log so staging leads are recoverable from the host logs.
  console.info("[quote] new lead", JSON.stringify(lead));

  const configured = Boolean(process.env.RESEND_API_KEY && process.env.QUOTE_INBOX);
  if (!configured) {
    console.warn(
      "[quote] RESEND_API_KEY / QUOTE_INBOX not set — lead logged only, not emailed. " +
        "This must be configured before launch (build checklist §4).",
    );
  } else {
    await deliver(lead);
  }

  return NextResponse.json({ ok: true });
}

/**
 * Emails the lead to the client's inbox. Kept in this file so there is one obvious
 * place to swap in a CRM webhook (ServiceM8) instead.
 */
async function deliver(lead: {
  receivedAt: string;
  name: string;
  phone: string;
  suburb: string;
  service: string;
  message: string;
}) {
  const lines = [
    `Name:    ${lead.name}`,
    `Phone:   ${lead.phone}`,
    `Suburb:  ${lead.suburb}`,
    `Service: ${lead.service}`,
    "",
    "Message:",
    lead.message,
    "",
    `Received: ${new Date(lead.receivedAt).toLocaleString("en-AU", { timeZone: "Australia/Brisbane" })} (Brisbane)`,
    `Via: ${business.domain}`,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${business.name} Website <website@${business.domain.replace(/^www\./, "")}>`,
        to: [process.env.QUOTE_INBOX],
        reply_to: business.email,
        subject: `New quote request — ${lead.name}, ${lead.suburb} (${lead.service})`,
        text: lines,
      }),
    });

    if (!res.ok) {
      // Log loudly but still return success to the visitor — the lead is in the logs,
      // and telling someone their enquiry failed when we have their details is worse.
      console.error("[quote] delivery failed", res.status, await res.text().catch(() => ""));
    }
  } catch (err) {
    console.error("[quote] delivery threw", err);
  }
}
