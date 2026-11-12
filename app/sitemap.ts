import type { MetadataRoute } from "next";
import { allPages, jaPages, localesFor } from "@/lib/content";
import { localeHref, locales, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

const priorityByCluster: Record<string, number> = {
  core: 0.85,
  level: 0.7,
  ecommerce: 0.8,
  cover: 0.8,
  live2d: 0.8,
  youtube: 0.8,
  compare: 0.6,
  guide: 0.5,
  legal: 0.3,
};

/** Absolute hreflang map, or undefined when the page exists in one locale only. */
function alternatesFor(slug: string) {
  const available = localesFor(slug);
  if (available.length < 2) return undefined;
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    if (available.includes(locale)) languages[locale] = `${site.url}${localeHref(locale, slug)}`;
  }
  languages["x-default"] = `${site.url}${localeHref("en", slug)}`;
  return { languages };
}

function entry(
  slug: string,
  locale: Locale,
  lastModified: string,
  priority: number,
  changeFrequency: "weekly" | "monthly",
): MetadataRoute.Sitemap[number] {
  const alternates = alternatesFor(slug);
  return {
    url: slug ? `${site.url}${localeHref(locale, slug)}` : `${site.url}${localeHref(locale)}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
    ...(alternates ? { alternates } : {}),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = "2026-11-12";

  const entries: MetadataRoute.Sitemap = [
    entry("", "en", updated, 1, "weekly"),
    entry("pricing", "en", updated, 0.9, "monthly"),
    entry("", "ja", updated, 0.95, "weekly"),
    entry("pricing", "ja", updated, 0.9, "monthly"),
  ];

  for (const page of allPages) {
    entries.push(
      entry(
        page.slug,
        "en",
        page.updated,
        priorityByCluster[page.cluster] ?? 0.5,
        "monthly",
      ),
    );
  }

  for (const page of jaPages) {
    // Japanese pages carry a slightly lower priority than their English source
    // while the cluster is new; they still get their own hreflang pair.
    const base = priorityByCluster[page.cluster] ?? 0.5;
    entries.push(entry(page.slug, "ja", page.updated, Math.max(0.4, base - 0.05), "monthly"));
  }

  // Guard: never emit two entries for the same URL.
  const seen = new Set<string>();
  return entries.filter((item) => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });
}
