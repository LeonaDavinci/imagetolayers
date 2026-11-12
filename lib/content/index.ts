import { corePages } from "./core";
import { aliasPages } from "./aliases";
import { levelPages } from "./levels";
import { ecommercePages } from "./ecommerce";
import { coverPages } from "./covers";
import { live2dPages } from "./live2d";
import { youtubePages } from "./youtube";
import { comparePages } from "./compare";
import { guidePages } from "./guides";
import { legalPages } from "./legal";
import { jaPages } from "./ja";
import type { PageContent } from "./types";
import type { Locale } from "@/lib/i18n";
import { localeHref } from "@/lib/i18n";

export const allPages: PageContent[] = [
  ...corePages,
  ...aliasPages,
  ...levelPages,
  ...ecommercePages,
  ...coverPages,
  ...live2dPages,
  ...youtubePages,
  ...comparePages,
  ...guidePages,
  ...legalPages,
];

export { jaPages };

export function slugToLabel(slug: string): string {
  const last = slug.split("/").pop() ?? slug;
  const words = last.replace(/-/g, " ");
  return words.charAt(0).toUpperCase() + words.slice(1);
}

export function clusterPages(cluster: PageContent["cluster"]) {
  return allPages.filter((page) => page.cluster === cluster);
}

/**
 * One locale's page set plus the lookups that need to be locale-aware: every
 * path this returns is already prefixed, so a Japanese page never emits a link
 * into the English tree by accident.
 */
export type Collection = {
  locale: Locale;
  pages: PageContent[];
  getPage(slug: string): PageContent | undefined;
  breadcrumbItems(slug: string): { name: string; path: string }[];
  relatedPages(slugs: string[]): {
    slug: string;
    href: string;
    title: string;
    eyebrow: string;
    demo: PageContent["demo"];
  }[];
  childPages(slug: string): PageContent[];
};

export function createCollection(pages: PageContent[], locale: Locale): Collection {
  const index = new Map(pages.map((page) => [page.slug, page]));

  return {
    locale,
    pages,
    getPage: (slug) => index.get(slug),
    breadcrumbItems(slug) {
      const parts = slug.split("/").filter(Boolean);
      const items: { name: string; path: string }[] = [];
      let path = "";
      parts.forEach((part, i) => {
        path += `/${part}`;
        const full = parts.slice(0, i + 1).join("/");
        const page = index.get(full);
        // Only emit crumb levels that resolve to a real page: a crumb pointing
        // at a missing hub would send crawlers and users to a 404.
        if (!page) return;
        const name = page.eyebrow.split("·")[0].trim() || slugToLabel(part);
        items.push({ name, path: localeHref(locale, path) });
      });
      return items;
    },
    relatedPages(slugs) {
      return slugs
        .map((slug) => index.get(slug))
        .filter((page): page is PageContent => Boolean(page))
        .map((page) => ({
          slug: page.slug,
          href: localeHref(locale, page.slug),
          title: page.h1,
          eyebrow: page.eyebrow,
          demo: page.demo,
        }));
    },
    childPages(slug) {
      const prefix = `${slug}/`;
      return pages
        .filter((page) => page.slug.startsWith(prefix) && !page.slug.slice(prefix.length).includes("/"))
        .sort((a, b) => a.slug.localeCompare(b.slug));
    },
  };
}

export const en = createCollection(allPages, "en");
export const ja = createCollection(jaPages, "ja");

const collections: Record<Locale, Collection> = { en, ja };

export function collectionFor(locale: Locale) {
  return collections[locale];
}

// English defaults, so the existing English pages and components keep working.
export const getPage = en.getPage;
export const breadcrumbItems = en.breadcrumbItems;
export const relatedPages = en.relatedPages;
export const childPages = en.childPages;

/** Locales that actually have this slug — used to emit honest hreflang links. */
export function localesFor(slug: string): Locale[] {
  return (Object.keys(collections) as Locale[]).filter((locale) =>
    collections[locale].getPage(slug),
  );
}

/** Slugs translated into more than one locale — used by the language switcher. */
export const pairedSlugs: string[] = jaPages
  .filter((page) => allPages.some((other) => other.slug === page.slug))
  .map((page) => page.slug);

export function allPagesWithLocale(): { page: PageContent; locale: Locale }[] {
  return [
    ...allPages.map((page) => ({ page, locale: "en" as Locale })),
    ...jaPages.map((page) => ({ page, locale: "ja" as Locale })),
  ];
}

export type { PageContent };
