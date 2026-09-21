import type { Project } from "@/lib/projects";
import { servicePhotos } from "@/lib/demoPhotos";
import { RoofPlate } from "./RoofPlate";

/** Show verified client photography when supplied; otherwise clearly labelled demo photography or line art. */
export function ProjectPreviewMedia({ project: p }: { project: Project }) {
  if (p.photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={p.photo.after} alt={p.photo.alt} loading="lazy" decoding="async"
        width={640} height={360} className="h-full w-full object-cover" />
    );
  }
  const demo = servicePhotos[p.serviceSlug];
  return (
    <>
      {demo && (
        <div className="photo-only gallery-example-photo relative h-full w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={demo.src}
            alt={`Illustrative photo of ${demo.alt.toLowerCase()}. Not the named project.`}
            loading="lazy" decoding="async" width={640} height={360}
            className="h-full w-full object-cover" />
          <span className="absolute bottom-2 left-2 rounded bg-ink-950/90 px-2.5 py-1 text-xs text-white">
            Example photo · not this job
          </span>
        </div>
      )}
      <div className="illustration-only gallery-illustration h-full w-full">
        <RoofPlate hue={p.plate.hue} profile={p.plate.profile}
          label={`${p.serviceName} in ${p.suburb}`} className="h-full w-full" />
      </div>
    </>
  );
}
