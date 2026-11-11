import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/json-ld";
import LayerCanvas from "@/components/layer-canvas";
import LayerWorkbench from "@/components/layer-workbench";
import { RichText } from "@/components/rich-text";
import { Breadcrumbs, CtaBand, Note, RelatedGrid, SectionHeading } from "@/components/ui";
import { allPages, breadcrumbItems, getPage, relatedPages } from "@/lib/content";
import { demoAssets } from "@/lib/content/layers";
import type { PageContent, Section } from "@/lib/content/types";
import {
  articleSchema,
  breadcrumbSchema,
  buildMetadata,
  faqSchema,
  howToSchema,
  softwareSchema,
} from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return allPages.map((page) => ({ slug: page.slug.split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug.join("/"));
  if (!page) return {};
  return buildMetadata({
    title: page.title,
    description: page.description,
    slug: page.slug,
    image: demoAssets[page.demo].og,
  });
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function SectionBlock({ section, index }: { section: Section; index: number }) {
  const id = section.id ?? slugify(section.heading ?? `section-${index}`);

  return (
    <section id={id} className="scroll-mt-24 border-t pt-8" style={{ borderColor: "var(--line)" }}>
      {section.heading ? (
        <h2 className="max-w-[30ch] text-[22px] leading-tight sm:text-[25px]">{section.heading}</h2>
      ) : null}
      {section.lead ? (
        <p className="mt-2.5 max-w-[62ch] text-[14.5px] leading-relaxed text-[#526071]">{section.lead}</p>
      ) : null}

      {section.body?.length ? (
        <div className="rich mt-5">
          {section.body.map((paragraph, i) => (
            <RichText key={i} text={paragraph} id={`${id}-p${i}`} />
          ))}
        </div>
      ) : null}

      {section.bullets?.length ? (
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {section.bullets.map((bullet) => (
            <li
              key={bullet.title}
              className="rounded-xl border px-3.5 py-3"
              style={{ borderColor: "var(--line)", background: "#ffffff" }}
            >
              <span className="block text-[13.5px] font-medium text-[#101828]">{bullet.title}</span>
              <span className="mt-1 block text-[12.5px] leading-relaxed text-[#5b6879]">{bullet.text}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {section.steps?.length ? (
        <ol className="mt-5 space-y-3">
          {section.steps.map((step, i) => (
            <li key={step.title} className="flex gap-3">
              <span className="step-num mt-0.5">{i + 1}</span>
              <span>
                <span className="block text-[13.5px] font-medium text-[#101828]">{step.title}</span>
                <span className="mt-0.5 block text-[13px] leading-relaxed text-[#5b6879]">{step.text}</span>
              </span>
            </li>
          ))}
        </ol>
      ) : null}

      {section.table ? (
        <div className="scroll-x mt-5 rounded-xl border" style={{ borderColor: "var(--line)" }}>
          <table className="w-full min-w-[520px] border-collapse text-left">
            <thead>
              <tr style={{ background: "#f8fafc" }}>
                {section.table.head.map((cell) => (
                  <th
                    key={cell}
                    className="px-3.5 py-2.5 text-[11.5px] font-medium uppercase tracking-[0.08em] text-[#5b6879]"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, i) => (
                <tr key={i} style={{ borderTop: "1px solid var(--line)" }}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`px-3.5 py-2.5 text-[13px] ${j === 0 ? "font-medium text-[#101828]" : "text-[#46536a]"}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      {section.note ? (
        <div className="mt-5">
          <Note>
            <RichText text={section.note} id={`${id}-note`} />
          </Note>
        </div>
      ) : null}
    </section>
  );
}

function LayerStack({
  demo,
  className = "glass p-4",
}: {
  demo: PageContent["demo"];
  className?: string;
}) {
  const asset = demoAssets[demo];
  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <p className="text-[11.5px] uppercase tracking-[0.12em] text-[#6b7280]">Sample stack</p>
        <span className="text-[10.5px] text-[#6b7280]">
          {asset.level} · {asset.layers.length} layers
        </span>
      </div>
      <ul className="mt-3 space-y-0.5">
        {asset.layers.map((layer) => (
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
                alt={`${layer.name} extracted as its own transparent layer`}
                width={48}
                height={48}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[12.5px] font-medium leading-tight">{layer.name}</span>
              <span className="mt-1 flex items-center gap-1.5 text-[10px] text-[#6b7280]">
                <span className="shrink-0">{layer.kind}</span>
                <span className="hidden shrink-0 text-[#c2cad4] sm:inline">·</span>
                <span className="hidden truncate sm:inline">{layer.note ?? "Separated"}</span>
              </span>
            </span>
            <span
              className="ml-auto shrink-0 rounded-[4px] border px-1.5 py-0.5 text-[9.5px] tabular-nums text-[#6b7280]"
              style={{ borderColor: "var(--line)" }}
            >
              z {String(layer.z).padStart(2, "0")}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[11px] leading-relaxed text-[#6b7280]">
        Depth order preserved. Reconstructed regions are estimates, not recovered pixels.
      </p>
    </div>
  );
}

function SampleStack({ demo }: { demo: PageContent["demo"] }) {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
      <LayerCanvas demo={demo} />
      <LayerStack demo={demo} />
    </div>
  );
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const page: PageContent | undefined = getPage(slug.join("/"));
  if (!page) notFound();

  const crumbs = breadcrumbItems(page.slug);
  const related = relatedPages(page.related);
  const asset = demoAssets[page.demo];
  const isLegal = page.cluster === "legal";

  const schemas: Record<string, unknown>[] = [breadcrumbSchema([{ name: "Home", path: "/" }, ...crumbs])];
  if (page.faq.length) schemas.push(faqSchema(page.faq));
  if (page.tool) {
    schemas.push(
      softwareSchema({
        name: page.h1,
        description: page.description,
        slug: page.slug,
        credits: page.level ? { L1: 30, L2: 45, L3: 60, L4: 90 }[page.level] : 45,
      }),
    );
  }
  if (page.cluster === "guide") {
    schemas.push(articleSchema({ title: page.title, description: page.description, slug: page.slug, updated: page.updated }));
  }
  const howToSection = page.sections.find((section) => section.steps?.length);
  if (page.tool && howToSection?.steps) {
    schemas.push(
      howToSchema({
        name: page.h1,
        description: page.description,
        steps: howToSection.steps,
      }),
    );
  }

  return (
    <>
      <JsonLd data={schemas} />

      <div className="container-wide pt-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="pb-8">
        <div className={`${isLegal ? "container-narrow" : "container-wide"}`}>
          <div className="max-w-[820px]">
            <span className="chip">
              <span className="chip-dot" />
              {page.eyebrow}
            </span>
            <h1 className="mt-4 text-[32px] leading-[1.08] tracking-tight sm:text-[44px]">{page.h1}</h1>
            <div className="rich mt-5">
              {page.intro.map((paragraph, i) => (
                <RichText key={i} text={paragraph} id={`intro-${i}`} />
              ))}
            </div>
            {!isLegal ? (
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href="/app" className="btn btn-primary">
                  Open the layer studio
                </Link>
                <Link href="/layer-levels" className="btn btn-ghost">
                  Layer levels
                </Link>
                <span className="text-[11.5px] text-[#6b7280]">
                  {asset.layers.length} layers in the sample · {asset.size}
                </span>
              </div>
            ) : null}
          </div>

          {page.tool ? (
            <>
              <div className="mt-10">
                <LayerWorkbench demo={page.demo} />
              </div>
              <SampleStack demo={page.demo} />
            </>
          ) : !isLegal ? (
            <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <LayerCanvas demo={page.demo} />
              <LayerStack demo={page.demo} />
            </div>
          ) : null}
        </div>
      </section>

      <section className={isLegal ? "container-narrow pb-6" : "container-wide pb-6"}>
        <div className="space-y-10">
          {page.sections.map((section, i) => (
            <SectionBlock key={section.id ?? i} section={section} index={i} />
          ))}
        </div>
      </section>

      <section className={isLegal ? "container-narrow pt-10" : "container-wide pt-10"}>
        <SectionHeading kicker="FAQ" title={`Questions about ${page.eyebrow.split("·")[0].trim().toLowerCase()}`} />
        <div className="space-y-2">
          {page.faq.map((item) => (
            <details key={item.q} className="faq">
              <summary>{item.q}</summary>
              <div className="faq-body">{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      <section className={isLegal ? "container-narrow pt-14" : "container-wide pt-14"}>
        <SectionHeading kicker="Related" title="Next step" />
        <RelatedGrid items={related} />
      </section>

      <section className="container-wide pb-20 pt-14">
        <CtaBand
          heading="Try it on your own image"
          body="The layer studio loads a sample without an account. Upload a JPG, PNG or WebP and choose the level that matches what you need to change."
          primary={{ label: "Open the layer studio", href: "/app" }}
          secondary={{ label: "See how it works", href: "/how-it-works" }}
        />
        <p className="mt-4 text-[11px] text-[#6b7280]">Last updated {page.updated}. Preview build — processing is simulated.</p>
      </section>
    </>
  );
}
