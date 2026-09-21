"use client";

import { useEffect, useState } from "react";

/**
 * Template preview only. Remove this component from layout.tsx when delivering
 * the selected style to a client. All three styles share the same pages, SEO
 * metadata, quote form, and business data.
 */
type Style = "trade" | "coastal" | "architectural";
const styles: { value: Style; label: string; description: string }[] = [
  { value: "trade", label: "Trade Bold", description: "Charcoal + burnt orange" },
  { value: "coastal", label: "Coastal Clean", description: "Navy + ocean blue" },
  { value: "architectural", label: "Architectural", description: "Forest + warm stone" },
];

export function StyleSwitcher() {
  const [active, setActive] = useState<Style>("trade");
  const [media, setMedia] = useState<"photos" | "illustrations">("photos");

  useEffect(() => {
    const saved = window.localStorage.getItem("roof-template-style");
    const initial: Style = styles.some((s) => s.value === saved) ? saved as Style : "trade";
    setActive(initial);
    document.documentElement.dataset.siteStyle = initial;
    const savedMedia = window.localStorage.getItem("roof-template-media");
    const initialMedia = savedMedia === "illustrations" ? "illustrations" : "photos";
    setMedia(initialMedia);
    document.documentElement.dataset.siteMedia = initialMedia;
  }, []);

  function selectStyle(style: Style) {
    setActive(style);
    document.documentElement.dataset.siteStyle = style;
    window.localStorage.setItem("roof-template-style", style);
  }

  function selectMedia(mode: "photos" | "illustrations") {
    setMedia(mode);
    document.documentElement.dataset.siteMedia = mode;
    window.localStorage.setItem("roof-template-media", mode);
  }

  return (
    <aside aria-label="Website style previews" className="template-preview-bar">
      <div className="shell flex flex-wrap items-center justify-between gap-3 py-2.5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="template-preview-label">HORIZON DIGITAL · TEMPLATE 2</span>
          <span className="text-xs opacity-80">Choose a design and image treatment for the whole site</span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
        <div role="group" aria-label="Choose site imagery" className="flex gap-1.5 border-r border-white/25 pr-3">
          {(["photos", "illustrations"] as const).map((mode) => (
            <button
              type="button"
              key={mode}
              onClick={() => selectMedia(mode)}
              aria-pressed={media === mode}
              className={"template-style-choice " + (media === mode ? "is-active" : "")}
            >
              {mode === "photos" ? "Real photos" : "Illustrations"}
            </button>
          ))}
        </div>
        <div role="group" aria-label="Choose site style" className="flex flex-wrap gap-1.5">
          {styles.map((style) => (
            <button
              type="button"
              key={style.value}
              onClick={() => selectStyle(style.value)}
              aria-pressed={active === style.value}
              title={style.description}
              className={"template-style-choice " + (active === style.value ? "is-active" : "")}
            >
              {style.label}
            </button>
          ))}
        </div>
        </div>
      </div>
    </aside>
  );
}
