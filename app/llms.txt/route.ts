import { allPages, jaPages } from "@/lib/content";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const pillars = allPages.filter((page) => ["ecommerce", "cover", "live2d", "youtube"].includes(page.cluster));
  const core = allPages.filter((page) => page.cluster === "core");
  const levels = allPages.filter((page) => page.cluster === "level");
  const guides = allPages.filter((page) => page.cluster === "guide");

  const body = `# ${site.name}

> ${site.description}

${site.name} separates a flat image into editable layers: subject, props, text regions, graphics and a
reconstructed background. Four layer levels (L1 Core 2–4, L2 Standard 4–6, L3 Detailed 6–9,
L4 Character parts 9+) map to four workflows: e-commerce product images, covers and posters,
Live2D characters, and YouTube thumbnails.

Important: reconstructed background areas are AI estimates, not recovered pixels. Flattened text
cannot be restored as editable characters. This build is a preview — separation is simulated.

## Core tools

${core.map((page) => `- ${page.h1}: ${site.url}/${page.slug}`).join("\n")}

## Workflow pillars

${pillars.map((page) => `- ${page.h1}: ${site.url}/${page.slug}`).join("\n")}

## Layer levels

${levels.map((page) => `- ${page.h1}: ${site.url}/${page.slug}`).join("\n")}

## Guides

${guides.map((page) => `- ${page.h1}: ${site.url}/${page.slug}`).join("\n")}

## Pricing

- Free trial: 20 one-time credits
- Creator: $10/month billed yearly at $120, 12,000 credits per year
- Studio: $30/month billed yearly at $360, 36,000 credits per year, API access
- ${site.url}/pricing

## 日本語ページ（Japanese）

${jaPages.map((page) => `- ${page.h1}: ${site.url}/ja/${page.slug}`).join("\n")}
- 料金: ${site.url}/ja/pricing

## Policies

- AI transparency: ${site.url}/ai-transparency
- Security: ${site.url}/security
- Privacy: ${site.url}/privacy
- Terms: ${site.url}/terms

## Contact

${site.email}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
