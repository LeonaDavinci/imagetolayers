# Image to Layers

<a   href="https://www.image-layers.com" target="_blank"> image to layers converter</a>

Marketing site and preview layer studio for **image-layers.com** — AI layer separation for
e-commerce product images, covers and posters, Live2D characters, and YouTube thumbnails.

This build is a **preview**: the interface, layer-level system, routing and SEO surface are real;
separation itself is simulated and the layer results shown come from sample assets.

## Stack

- Next.js 16.2.4 (App Router, Turbopack), React 19, TypeScript
- Tailwind CSS v4 (`@theme` tokens in `app/globals.css`)
- No runtime dependencies beyond Next/React — all interactivity is local component state
- llm api : openai image 

## Structure

```
app/
  page.tsx              Home (hero, workbench, pillars, levels, pricing, FAQ)
  pricing/page.tsx      Standalone pricing page (Product + FAQ schema)
  app/page.tsx          Layer studio (noindex) — upload, level pick, simulated run
  [...slug]/page.tsx    Data-driven renderer for every marketing page
  sitemap.ts            Generated from lib/content
  robots.ts             Blocks /app, allows GPTBot/ClaudeBot/PerplexityBot, bans CCBot
  llms.txt/route.ts     Plain-text summary for AI crawlers
components/
  layer-workbench.tsx   Upload → level → progress → layer stack (client)
  layer-canvas.tsx      Sample image with interactive layer hotspots (client)
  site-header.tsx       Mega menu + mobile details menu
  ui.tsx                Breadcrumbs, section headings, CTA band, related grid, demos
lib/
  site.ts               Brand constants, navigation, footer columns
  seo.ts                Metadata builder + JSON-LD builders
  content/
    types.ts            PageContent / Section schema
    layers.ts           Sample assets, layer metadata, level definitions
    index.ts            Page registry, breadcrumbs, related lookups
    core.ts · levels.ts · ecommerce.ts · covers.ts · live2d.ts
    youtube.ts · compare.ts · guides.ts · legal.ts
```

## Adding a page

One long-tail keyword, one page. Append a `PageContent` object to the matching file in
`lib/content/`, then it is automatically:

1. statically generated at `/{slug}` (including nested slugs like `product-image-to-layers/amazon-main-image`)
2. added to `sitemap.xml` with a cluster-based priority
3. wired into breadcrumbs, the related-pages grid and the footer if you add a link there
4. given `BreadcrumbList` + `FAQPage` + `SoftwareApplication`/`HowTo`/`Article` JSON-LD

Keep `title` and `description` unique — there is no automatic differentiation, and duplicate
metadata is the fastest way to waste a pSEO build.

## Commands

```bash
npm run dev      # local dev server
npm run build    # production build (all pages prerendered)
npm start        # serve the production build
```

## Content rules

- Reconstructed background is an estimate, not recovered pixels — say so on every tool page.
- Flattened text is not editable text — say so wherever text regions are mentioned.
- Never add a page that repeats another page's content with a keyword swapped in.
