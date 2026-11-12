import Link from "next/link";
import LayerWorkbench from "@/components/layer-workbench";
import { demoAssets } from "@/lib/content/layers";
import { demoLabel } from "@/lib/content/layers-ja";
import { uiCopy } from "@/lib/ui-copy";
import { localeHref, type Locale } from "@/lib/i18n";

/** The studio page body, shared by /app and /ja/app. */
export default function StudioView({ locale }: { locale: Locale }) {
  const t = uiCopy(locale);
  const keys = ["L1", "L2", "L3", "L4"] as const;

  return (
    <div className="container-wide py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="chip">
            <span className="chip-dot" />
            {t.studio.chip}
          </span>
          <h1 className="mt-4 text-[30px] leading-tight tracking-tight sm:text-[38px]">{t.studio.h1}</h1>
          <p className="mt-2 max-w-[60ch] text-[14px] leading-relaxed text-[#526071]">{t.studio.lead}</p>
        </div>
        <Link href={localeHref(locale, "image-to-layers")} className="btn btn-ghost btn-sm">
          {t.studio.levelCta}
        </Link>
      </div>

      <div className="mt-8">
        <LayerWorkbench demo="ecommerce" locale={locale} />
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass p-5">
          <p className="text-[11.5px] uppercase tracking-[0.12em] text-[#6b7280]">{t.studio.levelsHeading}</p>
          <div className="mt-4 space-y-2">
            {keys.map((key) => {
              const meta = t.levels[key];
              return (
                <div
                  key={key}
                  className="flex items-center justify-between gap-3 rounded-xl border px-3 py-2.5"
                  style={{ borderColor: "var(--line)" }}
                >
                  <div className="min-w-0">
                    <p className="text-[13px] font-medium text-[#101828]">
                      {key} · {meta.short}
                      <span className="ml-2 text-[11px] font-normal text-[#1d4ed8]">{meta.range}</span>
                    </p>
                    <p className="mt-0.5 truncate text-[11.5px] text-[#5b6879]">{meta.blurb}</p>
                  </div>
                  <span
                    className="shrink-0 rounded-full border px-2 py-0.5 text-[11px] text-[#3f4c60]"
                    style={{ borderColor: "var(--line)" }}
                  >
                    {meta.credits} cr
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass p-5">
            <p className="text-[11.5px] uppercase tracking-[0.12em] text-[#6b7280]">{t.studio.exportHeading}</p>
            <ul className="mt-3 space-y-2.5">
              {t.studio.exportFormats.map((format) => (
                <li key={format.name}>
                  <p className="text-[13px] font-medium text-[#101828]">{format.name}</p>
                  <p className="text-[11.5px] text-[#5b6879]">{format.note}</p>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[11px] text-[#6b7280]">{t.studio.exportNote}</p>
          </div>

          <div className="glass p-5">
            <p className="text-[11.5px] uppercase tracking-[0.12em] text-[#6b7280]">{t.studio.assetsHeading}</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {(["ecommerce", "cover", "live2d", "youtube"] as const).map((key) => {
                const asset = demoAssets[key];
                const label = demoLabel(key, asset.label, locale);
                return (
                  <div key={key} className="overflow-hidden rounded-lg border" style={{ borderColor: "var(--line)" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={asset.src}
                      alt={t.studio.assetAlt(label)}
                      width={asset.width}
                      height={asset.height}
                      className="h-[72px] w-full object-cover"
                      loading="lazy"
                    />
                    <p className="px-2 py-1 text-[10.5px] text-[#5b6879]">
                      {t.studio.assetMeta(asset.level, asset.layers.length)}
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
