import type { MetadataRoute } from "next";
import { allPages } from "@/lib/content";
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

export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap = [
    {
      url: site.url,
      lastModified: new Date("2026-11-11"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}/pricing`,
      lastModified: new Date("2026-11-11"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const pages: MetadataRoute.Sitemap = allPages.map((page) => ({
    url: `${site.url}/${page.slug}`,
    lastModified: new Date(page.updated),
    changeFrequency: page.cluster === "guide" ? "monthly" : "monthly",
    priority: priorityByCluster[page.cluster] ?? 0.5,
  }));

  return [...home, ...pages];
}
