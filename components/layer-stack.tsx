import { demoAssets } from "@/lib/content/layers";
import { demoLabel, kindLabel, layerText } from "@/lib/content/layers-ja";
import type { DemoKey } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n";
import { uiCopy } from "@/lib/ui-copy";

/** The sample stack beside the canvas: thumbnail, name, kind and depth order. */
export default function LayerStack({
  demo,
  locale = "en",
  className = "glass p-4",
}: {
  demo: DemoKey;
  locale?: Locale;
  className?: string;
}) {
  const asset = demoAssets[demo];
  const t = uiCopy(locale);
  const label = demoLabel(demo, asset.label, locale);

  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <p className="text-[11.5px] uppercase tracking-[0.12em] text-[#6b7280]">{t.stack.title}</p>
        <span className="text-[10.5px] text-[#6b7280]">
          {asset.level} · {t.stack.layers(asset.layers.length)}
        </span>
      </div>
      <ul className="mt-3 space-y-0.5">
        {asset.layers.map((layer) => {
          const text = layerText(demo, layer.n, locale);
          const name = text?.name ?? layer.name;
          return (
            <li
              key={layer.n}
              className="flex items-center gap-2.5 rounded-[8px] px-1 py-1 text-[12px] text-[#3f4c60] transition hover:bg-white/80"
            >
              <span className="w-4 shrink-0 text-[10px] tabular-nums text-[#6b7280]">
                {String(layer.n).padStart(2, "0")}
              </span>
              <span
                className="relative h-12 w-12 shrink-0 overflow-hidden rounded-[7px] border bg-[#f6f7f9]"
                style={{ borderColor: "var(--line)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/layers/${demo}/${layer.n}.webp`}
                  alt={t.stack.thumbAlt(name, label)}
                  width={48}
                  height={48}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[12.5px] font-medium leading-tight">{name}</span>
                <span className="mt-1 flex items-center gap-1.5 text-[10px] text-[#6b7280]">
                  <span className="shrink-0">{kindLabel(layer.kind, locale)}</span>
                  <span className="hidden shrink-0 text-[#c2cad4] sm:inline">·</span>
                  <span className="hidden truncate sm:inline">
                    {text?.note ?? layer.note ?? t.stack.separated}
                  </span>
                </span>
              </span>
              <span
                className="ml-auto shrink-0 rounded-[4px] border px-1.5 py-0.5 text-[9.5px] tabular-nums text-[#6b7280]"
                style={{ borderColor: "var(--line)" }}
              >
                z {String(layer.z).padStart(2, "0")}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-3 text-[11px] leading-relaxed text-[#6b7280]">{t.stack.note}</p>
    </div>
  );
}
