import { corePages } from "./core";
import { levelPages } from "./levels";
import { ecommercePages } from "./ecommerce";
import { coverPages } from "./covers";
import { live2dPages } from "./live2d";
import { youtubePages } from "./youtube";
import { comparePages } from "./compare";
import { guidePages } from "./guides";
import { legalPages } from "./legal";
import type { PageContent } from "./types";

export const allPages: PageContent[] = [
  ...corePages,
  ...levelPages,
  ...ecommercePages,
  ...coverPages,
  ...live2dPages,
  ...youtubePages,
  ...comparePages,
  ...guidePages,
  ...legalPages,
];

const index = new Map(allPages.map((page) => [page.slug, page]));

export function getPage(slug: string): PageContent | undefined {
  return index.get(slug);
}

export function slugToLabel(slug: string): string {
  const last = slug.split("/").pop() ?? slug;
  const words = last.replace(/-/g, " ");
  return words.charAt(0).toUpperCase() + words.slice(1);
}

export function breadcrumbItems(slug: string): { name: string; path: string }[] {
  const parts = slug.split("/").filter(Boolean);
  const items: { name: string; path: string }[] = [];
  let path = "";
  parts.forEach((part, i) => {
    path += `/${part}`;
    const full = parts.slice(0, i + 1).join("/");
    const page = index.get(full);
    items.push({ name: page ? page.eyebrow.split("·")[0].trim() : slugToLabel(part), path });
  });
  return items;
}

export function relatedPages(slugs: string[]) {
  return slugs
    .map((slug) => index.get(slug))
    .filter((page): page is PageContent => Boolean(page))
    .map((page) => ({
      slug: page.slug,
      title: page.h1,
      eyebrow: page.eyebrow,
      demo: page.demo,
    }));
}

export function clusterPages(cluster: PageContent["cluster"]) {
  return allPages.filter((page) => page.cluster === cluster);
}

export type { PageContent };
