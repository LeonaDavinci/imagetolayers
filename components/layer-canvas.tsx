"use client";

import { demoAssets, type LayerHotspot } from "@/lib/content/layers";
import type { DemoKey } from "@/lib/content/types";

type Props = {
  demo: DemoKey;
  active?: number;
  onActive?: (n: number) => void;
  className?: string;
};

export default function LayerCanvas({ demo, active, onActive, className }: Props) {
  const asset = demoAssets[demo];
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
          alt={`${asset.label} split into ${asset.layers.length} editable layers with Image to Layers`}
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
              aria-label={`Layer ${l.n}: ${l.name}`}
            >
              <span className="hotspot-tag">{String(l.n).padStart(2, "0")}</span>
            </button>
          ))}
        <div className="pointer-events-none absolute bottom-2 left-2 flex items-center gap-1.5 rounded-[6px] border border-[#e5e8ec] bg-white/95 px-2 py-0.5 text-[10.5px] text-[#344054]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
          {asset.size} · {asset.layers.length} layers · {asset.level}
        </div>
      </div>
    </div>
  );
}
