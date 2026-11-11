"use client";

import { useState } from "react";
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
        className="relative w-full overflow-hidden rounded-2xl border"
        style={{ borderColor: "var(--line)", background: "#0a0d12" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset.src}
          alt={`${asset.label} separated into ${asset.layers.length} editable layers`}
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
        <div className="pointer-events-none absolute bottom-2 left-2 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 text-[10.5px] text-white/80 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-[#5eead4]" />
          {asset.size} · {asset.layers.length} layers · {asset.level}
        </div>
      </div>
    </div>
  );
}
