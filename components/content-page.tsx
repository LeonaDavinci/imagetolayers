import Link from "next/link";
import JsonLd from "@/components/json-ld";
import LayerCanvas from "@/components/layer-canvas";
import LayerStack from "@/components/layer-stack";
import LayerWorkbench from "@/components/layer-workbench";
import { RichText } from "@/components/rich-text";
import { Breadcrumbs, CtaBand, Note, RelatedGrid, SectionHeading } from "@/components/ui";
import { collectionFor } from "@/lib/content";
import { demoAssets } from "@/lib/content/layers";
import type { PageContent, Section } from "@/lib/content/types";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  howToSchema,
  softwareSchema,
} from "@/lib/seo";
import { localeHref, type Locale } from "@/lib/i18n";
import { uiCopy } from "@/lib/ui-copy";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function SectionBlock({ section, index }: { section: Section; index: number }) {
  // Japanese headings slugify to an empty string, so fall back to the index.
  const id = section.id ?? slugify(section.heading ?? "") ?? "";
  const anchor = id || `section-${index}`;

  return (
    <section id={anchor} className="scroll-mt-24 border-t pt-8" style={{ borderColor: "var(--line)" }}>
      {section.heading ? (
        <h2 className="max-w-[30ch] text-[22px] leading-tight sm:text-[25px]">{section.heading}</h2>
      ) : null}
      {section.lead ? (
        <p className="mt-2.5 max-w-[62ch] text-[14.5px] leading-relaxed text-[#526071]">{section.lead}</p>
      ) : null}

      {section.body?.length ? (
        <div className="rich mt-5">
          {section.body.map((paragraph, i) => (
            <RichText key={i} text={paragraph} id={`${anchor}-p${i}`} />
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
            <RichText text={section.note} id={`${anchor}-note`} />
          </Note>
        </div>
      ) : null}
    </section>
  );
}

function SampleStack({ demo, locale }: { demo: PageContent["demo"]; locale: Locale }) {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
      <LayerCanvas demo={demo} locale={locale} />
      <LayerStack demo={demo} locale={locale} />
    </div>
  );
}

/** Drops the shared "Image to Layers" prefix so a list of siblings reads cleanly. */
function untitled(h1: string) {
  const rest = h1.replace(/^image to layers\s*[:—–-]?\s*/i, "");
  return rest.charAt(0).toUpperCase() + rest.slice(1);
}

function HubLinks({ items, locale }: { items: PageContent[]; locale: Locale }) {
  return (
    <div
      className="grid grid-cols-1 gap-px overflow-hidden rounded-[12px] border [&>*:last-child:nth-child(odd)]:sm:col-span-2 sm:grid-cols-2"
      style={{ borderColor: "var(--line)", background: "var(--line)" }}
    >
      {items.map((child) => (
        <Link
          key={child.slug}
          href={localeHref(locale, child.slug)}
          className="group flex flex-col bg-white p-4 transition hover:bg-[#f7f9fc] sm:p-5"
        >
          <span className="text-[10px] uppercase tracking-[0.12em] text-[#6b7280]">{child.eyebrow}</span>
          <span className="mt-1.5 text-[13.5px] font-medium leading-snug text-[#101828] transition group-hover:text-[#1d4ed8]">
            {locale === "ja" ? child.h1 : untitled(child.h1)}
          </span>
          <span className="mt-1.5 text-[12.5px] leading-relaxed text-[#5b6879]">{child.description}</span>
        </Link>
      ))}
    </div>
  );
}

/**
 * Body shared by /[...slug] and /ja/[...slug]. The page content differs per
 * locale, the composition does not — so there is one component and two thin
 * route files, and the two trees cannot drift apart.
 */
export default function ContentPageView({ page, locale }: { page: PageContent; locale: Locale }) {
  const t = uiCopy(locale);
  const collection = collectionFor(locale);
  const crumbs = collection.breadcrumbItems(page.slug);
  const related = collection.relatedPages(page.related);
  const asset = demoAssets[page.demo];
  const isLegal = page.cluster === "legal";
  const children = collection.childPages(page.slug);
  const area = page.eyebrow.split("·")[0].trim().toLowerCase();
  // Japanese has no standalone levels page; the level table lives on the tool page.
  const levelsHref =
    locale === "ja"
      ? `${localeHref(locale, "image-to-layers")}#levels`
      : localeHref(locale, "layer-levels");

  const schemas: Record<string, unknown>[] = [
    breadcrumbSchema([{ name: t.breadcrumbs.home, path: localeHref(locale) }, ...crumbs]),
  ];
  if (page.faq.length) schemas.push(faqSchema(page.faq));
  if (page.tool) {
    schemas.push(
      softwareSchema({
        name: page.h1,
        description: page.description,
        slug: page.slug,
        credits: page.level ? { L1: 30, L2: 45, L3: 60, L4: 90 }[page.level] : 45,
        locale,
      }),
    );
  }
  if (page.cluster === "guide") {
    schemas.push(
      articleSchema({
        title: page.title,
        description: page.description,
        slug: page.slug,
        updated: page.updated,
        locale,
      }),
    );
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
        <Breadcrumbs items={crumbs} locale={locale} />
      </div>

      <section className="pb-8">
        <div className={`${isLegal ? "container-narrow" : "container-wide"}`}>
          <div className="max-w-[820px]">
            <span className="chip">
              <span className="chip-dot" />
              {page.eyebrow}
            </span>
            <h1
              className={`mt-4 tracking-tight ${
                locale === "ja"
                  ? "text-[27px] leading-[1.3] sm:text-[35px]"
                  : "text-[32px] leading-[1.08] sm:text-[44px]"
              }`}
            >
              {page.h1}
            </h1>
            <div className="rich mt-5">
              {page.intro.map((paragraph, i) => (
                <RichText key={i} text={paragraph} id={`intro-${i}`} />
              ))}
            </div>
            {!isLegal ? (
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link href={localeHref(locale, "app")} className="btn btn-primary">
                  {t.page.openStudio}
                </Link>
                <Link href={levelsHref} className="btn btn-ghost">
                  {t.page.layerLevels}
                </Link>
                <span className="text-[11.5px] text-[#6b7280]">
                  {t.page.sampleMeta(asset.layers.length, asset.size)}
                </span>
              </div>
            ) : null}
          </div>

          {page.tool ? (
            <>
              <div className="mt-10">
                <LayerWorkbench demo={page.demo} locale={locale} />
              </div>
              <SampleStack demo={page.demo} locale={locale} />
            </>
          ) : !isLegal ? (
            <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <LayerCanvas demo={page.demo} locale={locale} />
              <LayerStack demo={page.demo} locale={locale} />
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

      {children.length ? (
        <section className={isLegal ? "container-narrow pt-12" : "container-wide pt-12"}>
          <SectionHeading kicker={t.hub.kicker} title={t.hub.title(area)} lead={t.hub.lead} />
          <HubLinks items={children} locale={locale} />
        </section>
      ) : null}

      <section className={isLegal ? "container-narrow pt-10" : "container-wide pt-10"}>
        <SectionHeading kicker={t.page.faqKicker} title={t.page.faqTitle(area)} />
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
        <SectionHeading kicker={t.page.relatedKicker} title={t.page.relatedTitle} />
        <RelatedGrid items={related} locale={locale} />
      </section>

      <section className="container-wide pb-20 pt-14">
        <CtaBand
          heading={t.page.ctaHeading}
          body={t.page.ctaBody}
          primary={{ label: t.page.ctaPrimary, href: localeHref(locale, "app") }}
          secondary={{
            label: t.page.ctaSecondary,
            href: localeHref(locale, locale === "ja" ? "image-to-layers" : "how-it-works"),
          }}
        />
        <p className="mt-4 text-[11px] text-[#6b7280]">{t.page.updated(page.updated)}</p>
      </section>
    </>
  );
}
