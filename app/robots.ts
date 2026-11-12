import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // /app and /ja/app both carry a noindex meta too. Blocking them here as well
  // is belt-and-braces, but it has to cover both locales — otherwise the
  // English studio is blocked while the Japanese one stays crawlable.
  const privatePaths = ["/app", "/ja/app", "/api/", "/results/", "/sign-in", "/sign-up", "/dashboard/"];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: privatePaths },
      {
        userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-Web", "PerplexityBot", "Google-Extended"],
        allow: "/",
        disallow: ["/app", "/ja/app", "/api/"],
      },
      { userAgent: "CCBot", disallow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
