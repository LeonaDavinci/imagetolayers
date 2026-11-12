"use client";

import { demoAssets, type LayerHotspot } from "@/lib/content/layers";
import { demoLabel, layerText } from "@/lib/content/layers-ja";
import type { DemoKey } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n";
import { uiCopy } from "@/lib/ui-copy";

type Props = {
  demo: DemoKey;
  locale?: Locale;
  active?: number;
  onActive?: (n: number) => void;
  className?: string;
};

export default function LayerCanvas({ demo, locale = "en", active, onActive, className }: Props) {
  const asset = demoAssets[demo];
  const t = uiCopy(locale);
  const label = demoLabel(demo, asset.label, locale);
  const inner = typeof active === "number" ? active : -1;

  return (
    <div className={className}>
      <div
        className="relative w-full overflow-hidden rounded-[12px] border"
        style={{ borderColor: "var(--line)", background: "#f6f7f9" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset.src}
          alt={t.canvas.alt(label, asset.layers.length)}
          width={asset.width}
          height={asset.height}
          className="block h-auto w-full select-none"
          draggable={false}
        />
        {asset.layers
          .filter((l) => !l.full)
          .map((l: LayerHotspot) => (
            <button
              key={l.n}
              type="button"
              className="hotspot"
              data-active={inner === l.n}
              style={{ left: `${l.bbox.x}%`, top: `${l.bbox.y}%`, width: `${l.bbox.w}%`, height: `${l.bbox.h}%` }}
              onMouseEnter={() => onActive?.(l.n)}
              onFocus={() => onActive?.(l.n)}
              onClick={() => onActive?.(l.n)}
              aria-label={t.canvas.hotspot(l.n, layerText(demo, l.n, locale)?.name ?? l.name)}
            >
              <span className="hotspot-tag">{String(l.n).padStart(2, "0")}</span>
            </button>
          ))}
        <div className="pointer-events-none absolute bottom-2 left-2 flex items-center gap-1.5 rounded-[6px] border border-[#e5e8ec] bg-white/95 px-2 py-0.5 text-[10.5px] text-[#344054]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
          {t.canvas.overlay(asset.size, asset.layers.length, asset.level)}
        </div>
      </div>
    </div>
  );
}
