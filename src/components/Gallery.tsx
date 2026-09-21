"use client";

/**
 * Design SOP §4 — Section 7: Recent projects / gallery.
 * "Real job photography, ideally filterable by service type."
 *
 * The filter is client-side because it is instant and the dataset is 8 items — no
 * value in a round trip. Photography is the open item; see RoofPlate.tsx.
 */

import { useState } from "react";
import Link from "next/link";
import { projects, projectFilters } from "@/lib/projects";
import { RoofPlate } from "./RoofPlate";
import { servicePhotos } from "@/lib/demoPhotos";
import { ArrowRightIcon, ClockIcon, MapPinIcon } from "./Icons";

export function Gallery({
  limit,
  heading = "Recent jobs on the southside",
  showFilters = true,
}: {
  limit?: number;
  heading?: string;
  showFilters?: boolean;
}) {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.serviceSlug === filter);
  const shown = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section id="projects" className="section">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Recent projects</p>
            <h2 className="h-section mt-3">{heading}</h2>
            <p className="lede mt-4">
              Example job descriptions with licensed preview photography (not photos of the named jobs). Replace these with real client projects before publishing. Value bands
              rather than exact prices — every roof is different, and we would rather quote yours
              than have you compare it to someone else&rsquo;s.
            </p>
          </div>
          {limit && (
            <Link href="/projects" className="btn btn-outline shrink-0">
              All projects
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          )}
        </div>

        {showFilters && (
          <div className="mt-8" role="group" aria-label="Filter projects by service">
            <div className="flex flex-wrap gap-2">
              <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
                All ({projects.length})
              </FilterChip>
              {projectFilters.map((f) => (
                <FilterChip
                  key={f.slug}
                  active={filter === f.slug}
                  onClick={() => setFilter(f.slug)}
                >
                  {f.name}
                </FilterChip>
              ))}
            </div>
          </div>
        )}

        <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <li key={p.slug}>
              <article className="card card-hover flex h-full flex-col overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden bg-ink-100">
                  {p.photo ? (
                    // Real photography, once the booked shoot is delivered.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.photo.after}
                      alt={p.photo.alt}
                      loading="lazy"
                      decoding="async"
                      width={640}
                      height={360}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <>
                      {servicePhotos[p.serviceSlug] && (
                        <div className="photo-only gallery-example-photo relative h-full w-full">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={servicePhotos[p.serviceSlug].src}
                            alt={`Illustrative photography: ${servicePhotos[p.serviceSlug].alt}. Not the named job.`}
                            loading="lazy" decoding="async" width={640} height={360}
                            className="h-full w-full object-cover" />
                          <span className="absolute bottom-2 left-2 rounded bg-ink-950/90 px-2.5 py-1 text-xs text-white">Example photo · not this job</span>
                        </div>
                      )}
                      <div className="illustration-only gallery-illustration h-full w-full">
                        <RoofPlate hue={p.plate.hue} profile={p.plate.profile}
                          label={`${p.serviceName} in ${p.suburb}`} className="h-full w-full" />
                      </div>
                    </>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="chip bg-ember-100 text-ember-700">{p.serviceName}</span>
                    <span className="inline-flex items-center gap-1 text-[0.8125rem] text-ink-500">
                      <MapPinIcon className="h-3.5 w-3.5" />
                      {p.suburb}
                    </span>
                  </div>

                  <h3 className="h-card mt-3 text-ink-900">{p.title}</h3>
                  <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-ink-600">
                    {p.summary}
                  </p>

                  <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-ink-100 pt-4 text-[0.8125rem]">
                    <div>
                      <dt className="text-ink-500">Value band</dt>
                      <dd className="mt-0.5 font-semibold text-ink-900">{p.valueBand}</dd>
                    </div>
                    <div>
                      <dt className="text-ink-500">On site</dt>
                      <dd className="mt-0.5 inline-flex items-center gap-1 font-semibold text-ink-900">
                        <ClockIcon className="h-3.5 w-3.5 text-ink-400" />
                        {p.duration}
                      </dd>
                    </div>
                  </dl>

                  <details className="group mt-4">
                    <summary className="cursor-pointer list-none font-display text-[0.9375rem] font-semibold text-ember-600 hover:text-ember-700">
                      <span className="group-open:hidden">What made this one tricky →</span>
                      <span className="hidden group-open:inline">Close</span>
                    </summary>
                    <p className="mt-2.5 border-l-2 border-ember-300 pl-3.5 text-[0.9375rem] leading-relaxed text-ink-600">
                      {p.detail}
                    </p>
                  </details>

                  <p className="mt-4 text-xs text-ink-400">Completed {p.completed}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {shown.length === 0 && (
          <p className="mt-8 rounded-lg border border-dashed border-ink-300 p-8 text-center text-ink-600">
            No projects in the gallery for that service yet.{" "}
            <Link href="/contact" className="font-semibold text-ember-600 underline">
              Ask us about it
            </Link>{" "}
            — we have almost certainly done one.
          </p>
        )}
      </div>
    </section>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border-2 px-4 py-2 font-display text-[0.9375rem] font-semibold transition-colors ${
        active
          ? "border-ink-900 bg-ink-900 text-white"
          : "border-ink-200 bg-white text-ink-700 hover:border-ink-400"
      }`}
    >
      {children}
    </button>
  );
}
