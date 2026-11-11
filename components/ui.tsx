import Link from "next/link";
import { demoAssets } from "@/lib/content/layers";
import type { DemoKey } from "@/lib/content/types";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-[11.5px] text-[#6b7482]">
        <li>
          <Link href="/" className="hover:text-[#c3cad6]">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.path} className="flex items-center gap-1.5">
            <span aria-hidden="true">/</span>
            <Link href={item.path} className="hover:text-[#c3cad6]">
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
    <div className="mb-6">
      {kicker ? <p className="kicker mb-2">{kicker}</p> : null}
      <Tag className="max-w-[30ch] text-[26px] leading-tight sm:text-[30px]">{title}</Tag>
      {lead ? <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-[#98a2b3]">{lead}</p> : null}
    </div>
  );
}

export function CtaBand({
  heading,
  body,
  primary = { label: "Start free", href: "/app" },
  secondary,
}: {
  heading: string;
  body: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border p-8 sm:p-10" style={{ borderColor: "var(--line-strong)", background: "linear-gradient(140deg, rgba(139,124,255,0.16), rgba(45,212,191,0.08) 55%, rgba(255,255,255,0.03))" }}>
      <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
      <div className="relative">
        <h2 className="max-w-[22ch] text-[26px] leading-tight sm:text-[32px]">{heading}</h2>
        <p className="mt-3 max-w-[56ch] text-[14.5px] leading-relaxed text-[#b7c0cd]">{body}</p>
        <div className="mt-6 flex flex-wrap gap-3">
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

export function DemoStrip({ active }: { active?: DemoKey }) {
  const keys: DemoKey[] = ["ecommerce", "cover", "live2d", "youtube"];
  const meta: Record<DemoKey, { title: string; href: string }> = {
    ecommerce: { title: "E-commerce product images", href: "/product-image-to-layers" },
    cover: { title: "Covers and posters", href: "/cover-to-layers" },
    live2d: { title: "Live2D characters", href: "/live2d-character-to-layers" },
    youtube: { title: "YouTube thumbnails", href: "/youtube-thumbnail-to-layers" },
  };
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {keys.map((key) => {
        const asset = demoAssets[key];
        const isActive = active === key;
        return (
          <Link
            key={key}
            href={meta[key].href}
            className="card-link group overflow-hidden rounded-2xl border"
            style={{
              borderColor: isActive ? "rgba(139,124,255,0.6)" : "var(--line)",
              background: "rgba(255,255,255,0.025)",
            }}
          >
            <div className="relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset.src}
                alt={`${asset.label} example with ${asset.layers.length} separated layers`}
                width={asset.width}
                height={asset.height}
                loading="lazy"
                className="h-[150px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute left-2 top-2 rounded-full border border-white/15 bg-black/55 px-2 py-0.5 text-[10px] text-white/85 backdrop-blur">
                {asset.level} · {asset.layers.length} layers
              </span>
            </div>
            <div className="flex items-center justify-between px-3 py-2.5">
              <span className="text-[12.5px] font-medium text-[#eef2f7]">{meta[key].title}</span>
              <span className="text-[11px] text-[#6b7482] transition group-hover:text-[#a99bff]">Open →</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export function StatRow({ items }: { items: { value: string; label: string }[] }) {
  return (
    <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-2xl border px-4 py-3" style={{ borderColor: "var(--line)" }}>
          <dt className="text-[11px] uppercase tracking-[0.1em] text-[#6b7482]">{item.label}</dt>
          <dd className="mt-1 text-[19px] font-medium tracking-tight text-[#eef2f7]">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl border-l-2 px-4 py-3 text-[13.5px] leading-relaxed text-[#b7c0cd]"
      style={{ borderColor: "rgba(45,212,191,0.6)", background: "rgba(45,212,191,0.06)" }}
    >
      {children}
    </div>
  );
}

export function RelatedGrid({
  items,
}: {
  items: { slug: string; title: string; eyebrow: string; demo: DemoKey }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => {
        const asset = demoAssets[item.demo];
        return (
          <Link
            key={item.slug}
            href={`/${item.slug}`}
            className="card-link group flex flex-col overflow-hidden rounded-2xl border"
            style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.025)" }}
          >
            <div className="relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset.src}
                alt={`${item.title} preview`}
                loading="lazy"
                className="h-[96px] w-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
              />
            </div>
            <div className="flex flex-1 flex-col p-3">
              <span className="text-[10px] uppercase tracking-[0.1em] text-[#6b7482]">
                {item.eyebrow.split("·")[0].trim()}
              </span>
              <span className="mt-1 line-clamp-2 text-[13px] font-medium leading-snug text-[#eef2f7]">
                {item.title}
              </span>
              <span className="mt-auto pt-2 text-[11px] text-[#a99bff] opacity-70 transition group-hover:opacity-100">
                Open →
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
