import Link from "next/link";
import { demoAssets } from "@/lib/content/layers";
import { demoLabel } from "@/lib/content/layers-ja";
import type { DemoKey } from "@/lib/content/types";
import { localeHref, type Locale } from "@/lib/i18n";
import { uiCopy } from "@/lib/ui-copy";

function Check() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M2.5 7.4L5.4 10.2L11.5 4" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TrustRow({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-[#5b6879]">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-1.5">
          <Check />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Breadcrumbs({
  items,
  locale = "en",
}: {
  items: { name: string; path: string }[];
  locale?: Locale;
}) {
  const t = uiCopy(locale);
  return (
    <nav aria-label={t.breadcrumbs.aria} className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-[12px] text-[#6b7280]">
        <li>
          <Link href={localeHref(locale)} className="hover:text-[#101828]">
            {t.breadcrumbs.home}
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.path} className="flex items-center gap-1.5">
            <span aria-hidden="true" className="text-[#c2cad4]">
              /
            </span>
            <Link href={item.path} className="hover:text-[#101828]">
              {item.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function SectionHeading({
  kicker,
  title,
  lead,
  as = "h2",
}: {
  kicker?: string;
  title: string;
  lead?: string;
  as?: "h2" | "h3";
}) {
  const Tag = as;
  return (
    <div className="mb-7">
      {kicker ? <p className="kicker mb-2.5">{kicker}</p> : null}
      <Tag className="max-w-[30ch] text-[25px] leading-[1.2] tracking-[-0.022em] sm:text-[29px]">{title}</Tag>
      {lead ? <p className="mt-3 max-w-[64ch] text-[15px] leading-[1.65] text-[#526071]">{lead}</p> : null}
    </div>
  );
}

export function CtaBand({
  heading,
  body,
  primary = { label: "Start free", href: "/app" },
  secondary,
  footnote,
}: {
  heading: string;
  body: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  footnote?: string;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-[18px] border bg-white p-8 sm:p-10"
      style={{ borderColor: "var(--line)", boxShadow: "var(--shadow-sm)" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h2 className="max-w-[26ch] text-[24px] leading-[1.2] tracking-[-0.022em] sm:text-[28px]">{heading}</h2>
          <p className="mt-3 max-w-[56ch] text-[14.5px] leading-relaxed text-[#526071]">{body}</p>
          {footnote ? <p className="mt-4 text-[12px] text-[#6b7280]">{footnote}</p> : null}
        </div>
        <div className="flex flex-col gap-2.5 sm:flex-row lg:flex-col lg:items-stretch">
          <Link href={primary.href} className="btn btn-primary">
            {primary.label}
          </Link>
          {secondary ? (
            <Link href={secondary.href} className="btn btn-ghost">
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function DemoStrip({ active, locale = "en" }: { active?: DemoKey; locale?: Locale }) {
  const keys: DemoKey[] = ["ecommerce", "cover", "live2d", "youtube"];
  const t = uiCopy(locale);
  const heroSlug: Record<DemoKey, string> = {
    ecommerce: "product-image-to-layers",
    cover: "cover-to-layers",
    live2d: locale === "ja" ? "character-to-layers" : "live2d-character-to-layers",
    youtube: "youtube-thumbnail-to-layers",
  };
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {keys.map((key) => {
        const asset = demoAssets[key];
        const isActive = active === key;
        return (
          <Link
            key={key}
            href={localeHref(locale, heroSlug[key])}
            className="card-link group overflow-hidden rounded-[12px] border bg-white"
            style={{ borderColor: isActive ? "#A9C6FA" : "var(--line)" }}
          >
            <div className="relative overflow-hidden border-b" style={{ borderColor: "var(--line)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset.src}
                alt={t.demoStrip.alt(demoLabel(key, asset.label, locale), asset.layers.length)}
                width={asset.width}
                height={asset.height}
                loading="lazy"
                className="h-[150px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              />
              <span
                className="absolute left-2 top-2 rounded-[5px] border bg-white/95 px-1.5 py-0.5 text-[10px] font-medium text-[#344054]"
                style={{ borderColor: "var(--line)" }}
              >
                {asset.level} · {t.demoStrip.layers(asset.layers.length)}
              </span>
            </div>
            <div className="flex items-center justify-between px-3 py-2.5">
              <span className="text-[12.5px] font-medium text-[#101828]">{t.demoStrip.titles[key]}</span>
              <span className="text-[11px] text-[#6b7280] transition group-hover:text-[#1d4ed8]">{t.demoStrip.open}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export function StatRow({ items }: { items: { value: string; label: string }[] }) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[12px] border bg-[#e5e8ec] sm:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="bg-white px-4 py-3.5">
          <dd className="text-[20px] font-semibold tracking-[-0.02em] text-[#101828]">{item.value}</dd>
          <dt className="mt-0.5 text-[11.5px] uppercase tracking-[0.1em] text-[#6b7280]">{item.label}</dt>
        </div>
      ))}
    </dl>
  );
}

export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-[10px] border-l-2 px-4 py-3 text-[13.5px] leading-relaxed text-[#3f4c60]"
      style={{ borderColor: "#2563EB", background: "#f6f9ff" }}
    >
      {children}
    </div>
  );
}

export function RelatedGrid({
  items,
  locale = "en",
}: {
  items: { slug: string; href: string; title: string; eyebrow: string; demo: DemoKey }[];
  locale?: Locale;
}) {
  const t = uiCopy(locale);
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => {
        const asset = demoAssets[item.demo];
        return (
          <Link
            key={item.slug}
            href={item.href}
            className="card-link group flex flex-col overflow-hidden rounded-[12px] border bg-white"
            style={{ borderColor: "var(--line)" }}
          >
            <div className="relative overflow-hidden border-b" style={{ borderColor: "var(--line)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset.src}
                alt={t.related.alt(demoLabel(item.demo, asset.label, locale))}
                width={asset.width}
                height={asset.height}
                loading="lazy"
                className="h-[96px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col p-3">
              <span className="text-[10px] uppercase tracking-[0.1em] text-[#6b7280]">
                {item.eyebrow.split("·")[0].trim()}
              </span>
              <span className="mt-1 line-clamp-2 text-[13px] font-medium leading-snug text-[#101828]">
                {item.title}
              </span>
              <span className="mt-auto pt-2 text-[11px] text-[#1d4ed8]">{t.related.open}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
