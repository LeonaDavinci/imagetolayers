import type { Metadata } from "next";
import Link from "next/link";
import LayerWorkbench from "@/components/layer-workbench";
import { demoAssets, levelMeta } from "@/lib/content/layers";

export const metadata: Metadata = {
  title: "Layer studio",
  description: "Upload an image, choose a layer level, review the stack and export.",
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  const exportFormats = [
    { name: "Transparent PNG", note: "One file per layer, source resolution" },
    { name: "ZIP stack", note: "Whole stack with depth order and names" },
    { name: "Layered PSD", note: "Opens in Photoshop, Affinity, Photopea, GIMP" },
  ];

  return (
    <div className="container-wide py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="chip">
            <span className="chip-dot" />
            Preview build · simulated processing
          </span>
          <h1 className="mt-4 text-[30px] leading-tight tracking-tight sm:text-[38px]">Layer studio</h1>
          <p className="mt-2 max-w-[60ch] text-[14px] leading-relaxed text-[#98a2b3]">
            Drop an image, pick a level, and review the stack. Your file stays in the browser in this
            preview — nothing is uploaded, and the layer results shown come from the sample asset.
          </p>
        </div>
        <Link href="/layer-levels" className="btn btn-ghost btn-sm">
          Which level do I need?
        </Link>
      </div>

      <div className="mt-8">
        <LayerWorkbench demo="ecommerce" />
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass p-5">
          <p className="text-[11.5px] uppercase tracking-[0.12em] text-[#6b7482]">Levels and cost</p>
          <div className="mt-4 space-y-2">
            {(Object.keys(levelMeta) as (keyof typeof levelMeta)[]).map((key) => {
              const meta = levelMeta[key];
              return (
                <div
                  key={key}
                  className="flex items-center justify-between gap-3 rounded-xl border px-3 py-2.5"
                  style={{ borderColor: "var(--line)" }}
                >
                  <div className="min-w-0">
                    <p className="text-[13px] font-medium text-[#eef2f7]">
                      {key} · {meta.label}
                      <span className="ml-2 text-[11px] font-normal text-[#a99bff]">{meta.range}</span>
                    </p>
                    <p className="mt-0.5 truncate text-[11.5px] text-[#8b94a3]">{meta.blurb}</p>
                  </div>
                  <span className="shrink-0 rounded-full border px-2 py-0.5 text-[11px] text-[#b7c0cd]" style={{ borderColor: "var(--line)" }}>
                    {meta.credits} cr
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass p-5">
            <p className="text-[11.5px] uppercase tracking-[0.12em] text-[#6b7482]">Export formats</p>
            <ul className="mt-3 space-y-2.5">
              {exportFormats.map((format) => (
                <li key={format.name}>
                  <p className="text-[13px] font-medium text-[#eef2f7]">{format.name}</p>
                  <p className="text-[11.5px] text-[#8b94a3]">{format.note}</p>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[11px] text-[#6b7482]">
              Exports are disabled in this preview build.
            </p>
          </div>

          <div className="glass p-5">
            <p className="text-[11.5px] uppercase tracking-[0.12em] text-[#6b7482]">Sample assets</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {(["ecommerce", "cover", "live2d", "youtube"] as const).map((key) => {
                const asset = demoAssets[key];
                return (
                  <div key={key} className="overflow-hidden rounded-lg border" style={{ borderColor: "var(--line)" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={asset.src} alt={asset.label} className="h-[72px] w-full object-cover" loading="lazy" />
                    <p className="px-2 py-1 text-[10.5px] text-[#8b94a3]">
                      {asset.level} · {asset.layers.length} layers
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
