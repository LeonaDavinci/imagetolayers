import type { Metadata } from "next";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import { languageAlternates, localeHref, localeMeta, locales as allLocales } from "@/lib/i18n";

const OG_FALLBACK = "/brand/og.png";

/** Social alt text: strip the brand prefix so we never emit "Brand — Brand — …". */
function socialAlt(title: string) {
  const brand = site.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const stripped = title
    .replace(new RegExp(`^${brand}\\s*[:—–-]*\\s*`, "i"), "")
    .trim();
  return stripped && stripped.toLowerCase() !== site.name.toLowerCase()
    ? `${site.name} — ${stripped}`
    : site.name;
}

export function buildMetadata(opts: {
  title: string;
  description: string;
  slug?: string;
  image?: string;
  locale?: Locale;
  /** Locales that actually have this page. Drives hreflang and og:locale. */
  available?: Locale[];
}): Metadata {
  const locale = opts.locale ?? "en";
  const path = localeHref(locale, opts.slug ?? "");
  const slug = (opts.slug ?? "").replace(/^\/|\/$/g, "");
  const url = `${site.url}${path === "/" ? "" : path}`;
  const leadsWithKeyword = opts.title.toLowerCase().startsWith(site.name.toLowerCase());
  // Japanese titles lead with the query rather than the brand, so treat any
  // title that already mentions the product as branded and leave it alone.
  const hasBrand = opts.title.toLowerCase().includes(site.name.toLowerCase());
  const branded = `${opts.title} | ${site.name}`;
  const titleValue = leadsWithKeyword || hasBrand || branded.length > 70 ? opts.title : branded;
  // Every page must ship a 1200×630 card so social crawlers never crop a vertical demo image.
  const image = opts.image ?? OG_FALLBACK;
  const translated = (opts.available ?? allLocales).filter((l) => l !== locale);
  const alternates = translated.length ? languageAlternates(slug, opts.available ?? allLocales) : undefined;
  return {
    title: { absolute: titleValue },
    description: opts.description,
    alternates: {
      canonical: path,
      ...(alternates ? { languages: alternates } : {}),
    },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: site.name,
      type: "website",
      locale: localeMeta[locale].ogLocale,
      ...(translated.length
        ? { alternateLocale: translated.map((l) => localeMeta[l].ogLocale) }
        : {}),
      images: [{ url: image, width: 1200, height: 630, alt: socialAlt(opts.title) }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [{ url: image, alt: socialAlt(opts.title) }],
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/brand/logo-mark-512.png`,
    description: site.description,
    email: site.email,
  };
}

export function websiteSchema(locale: Locale = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: `${site.url}${localeHref(locale)}`,
    inLanguage: localeMeta[locale].htmlLang,
  };
}

export function softwareSchema(opts: {
  name: string;
  description: string;
  slug: string;
  credits: number;
  locale?: Locale;
}) {
  const locale = opts.locale ?? "en";
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: opts.name,
    description: opts.description,
    url: `${site.url}${localeHref(locale, opts.slug)}`,
    applicationCategory: "DesignApplication",
    operatingSystem: "Web",
    inLanguage: localeMeta[locale].htmlLang,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: `${opts.credits} credits per run, free trial credits included`,
    },
    featureList: [
      "Semantic layer separation",
      "Background reconstruction behind overlapping objects",
      "Layered PSD export",
      "Transparent PNG and ZIP export",
      "Adjustable layer levels",
    ],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function howToSchema(opts: {
  name: string;
  description: string;
  steps: { title: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    totalTime: "PT2M",
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.text,
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  slug: string;
  updated: string;
  locale?: Locale;
}) {
  const locale = opts.locale ?? "en";
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    dateModified: opts.updated,
    datePublished: opts.updated,
    url: `${site.url}${localeHref(locale, opts.slug)}`,
    inLanguage: localeMeta[locale].htmlLang,
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };
}
