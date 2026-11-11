import type { Metadata } from "next";
import Link from "next/link";
import LayerWorkbench from "@/components/layer-workbench";
import JsonLd from "@/components/json-ld";
import { CtaBand, DemoStrip, SectionHeading } from "@/components/ui";
import { demoAssets, levelMeta } from "@/lib/content/layers";
import { buildMetadata, faqSchema, softwareSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Turn flat images into editable layers",
  description:
    "AI layer separation for product images, covers, Live2D characters and YouTube thumbnails. Reconstruct hidden background, pick a layer level, export PNG, ZIP or PSD.",
});

const homeFaq = [
  {
    q: "What does Image Layers actually do?",
    a: "It separates a flat image into editable layers — subject, props, text regions, graphics and a reconstructed background — then exports them as transparent PNGs, a ZIP stack or a layered PSD.",
  },
  {
    q: "What is a layer level?",
    a: "A grouping target, not a slider. L1 Core returns 2–4 layers, L2 Standard 4–6, L3 Detailed 6–9, and L4 Character parts targets anatomy for rigging. Each is built for a different kind of editing decision.",
  },
  {
    q: "How is this different from background removal?",
    a: "A background remover discards the scene and returns one cutout. Layer separation reconstructs the background as its own layer, so moving the subject does not leave a hole behind.",
  },
  {
    q: "Can it recover what was hidden behind an object?",
    a: "It reconstructs a plausible continuation — an estimate based on surrounding texture and lighting. Those pixels were never captured, so they are generated rather than recovered.",
  },
  {
    q: "Can I edit the text in an image?",
    a: "Not as live text. At L3 the text region is isolated so you can remove, move or replace it, and set new copy in the same measured footprint.",
  },
  {
    q: "What can I export?",
    a: "Individual transparent PNGs, a ZIP containing the full stack with depth order, or a layered PSD that opens with named layers in Photoshop, Affinity, Photopea or GIMP.",
  },
  {
    q: "Is this build functional?",
    a: "It is a preview. The interface, level system and export structure are real; separation is simulated and the layer results shown are sample stacks.",
  },
];

const pillars = [
  {
    slug: "/product-image-to-layers",
    meta: "/demo/ecommerce.webp",
    level: "L2",
    title: "E-commerce product images",
    body: "Separate a product from its props and backdrop, then rebuild the main image for every marketplace without reshooting.",
  },
  {
    slug: "/cover-to-layers",
    meta: "/demo/cover.webp",
    level: "L3",
    title: "Covers and posters",
    body: "Reopen a finished cover: artwork stays, type regions come apart, the field stretches to a new trim size.",
  },
  {
    slug: "/live2d-character-to-layers",
    meta: "/demo/live2d.webp",
    level: "L4",
    title: "Live2D characters",
    body: "Hair, face, eyes, clothing and accessories as separate PNGs with depth order — rigging starts at the mesh.",
  },
  {
    slug: "/youtube-thumbnail-to-layers",
    meta: "/demo/youtube.webp",
    level: "L3",
    title: "YouTube thumbnails",
    body: "Keep the face that performs, replace the headline, and test one variable at a time instead of everything.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          softwareSchema({
            name: "Image Layers",
            description:
              "AI layer separation for product images, covers, Live2D characters and YouTube thumbnails.",
            slug: "",
            credits: 45,
          }),
          faqSchema(homeFaq),
        ]}
      />

      <section className="relative overflow-hidden pt-16 pb-10 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
        <div className="container-wide relative">
          <div className="mx-auto max-w-[760px] text-center">
            <span className="chip mx-auto">
              <span className="chip-dot" />
              Preview build · separation is simulated
            </span>
            <h1 className="mt-5 text-[38px] leading-[1.05] tracking-tight sm:text-[58px]">
              Turn a flat image into <span className="grad-text">editable layers</span>
            </h1>
            <p className="mx-auto mt-5 max-w-[600px] text-[15.5px] leading-relaxed text-[#a7b0bf]">
              Separate the subject, props, text regions and background — then rebuild what was hidden
              behind them. Built for product photography, covers, Live2D characters and thumbnails.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link href="/app" className="btn btn-primary">
                Separate an image
              </Link>
              <Link href="/showcase" className="btn btn-ghost">
                See real examples
              </Link>
            </div>
            <p className="mt-4 text-[12px] text-[#6b7482]">
              Free trial credits · no card · JPG, PNG, WebP up to 10 MB
            </p>
          </div>

          <div className="mt-12">
            <LayerWorkbench demo="ecommerce" />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11.5px] text-[#6b7482]">
            <span>Alpha-clean edges</span>
            <span aria-hidden="true">·</span>
            <span>Occlusion reconstruction</span>
            <span aria-hidden="true">·</span>
            <span>PSD, ZIP and PNG export</span>
            <span aria-hidden="true">·</span>
            <span>Files not used for training</span>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <SectionHeading
              kicker="Four workflows"
              title="One tool, four ideas of a good layer"
              lead="A product photo, a book cover, a rig-ready character and a thumbnail do not want the same stack. Each workflow sets a default level for its own reason."
            />
            <Link href="/layer-levels" className="btn btn-ghost btn-sm mb-6">
              How levels work
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <Link
                key={pillar.slug}
                href={pillar.slug}
                className="card-link group overflow-hidden rounded-2xl border"
                style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.025)" }}
              >
                <div className="grid grid-cols-1 sm:min-h-[158px] sm:grid-cols-[152px_1fr]">
                  <div className="relative h-[150px] overflow-hidden sm:h-full sm:min-h-[158px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={pillar.meta}
                      alt={`${pillar.title} example`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-2 top-2 rounded-full border border-white/15 bg-black/60 px-2 py-0.5 text-[10px] text-white/85 backdrop-blur">
                      {pillar.level}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-[15px] font-medium text-[#eef2f7]">{pillar.title}</h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#8b94a3]">{pillar.body}</p>
                    <span className="mt-3 inline-block text-[11.5px] text-[#a99bff] opacity-0 transition group-hover:opacity-100">
                      Open workflow →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-wide">
          <SectionHeading
            kicker="Layer levels"
            title="Choose depth before you choose detail"
            lead="More layers are not better layers. Past the number of real editing decisions, extra layers fill with duplicates and fragments."
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {(Object.keys(levelMeta) as (keyof typeof levelMeta)[]).map((key) => {
              const meta = levelMeta[key];
              const href =
                key === "L1"
                  ? "/layer-levels/core"
                  : key === "L2"
                    ? "/layer-levels/standard"
                    : key === "L3"
                      ? "/layer-levels/detailed"
                      : "/layer-levels/character-parts";
              return (
                <Link
                  key={key}
                  href={href}
                  className="card-link rounded-2xl border p-4"
                  style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.025)" }}
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-[11px] uppercase tracking-[0.12em] text-[#6b7482]">{key}</span>
                    <span className="text-[11px] text-[#8b94a3]">{meta.credits} cr</span>
                  </div>
                  <h3 className="mt-1.5 text-[16px] font-medium text-[#eef2f7]">{meta.label}</h3>
                  <p className="mt-0.5 text-[11.5px] text-[#a99bff]">{meta.range}</p>
                  <p className="mt-2 text-[12px] leading-relaxed text-[#8b94a3]">{meta.blurb}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-wide grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              kicker="The difference"
              title="A cutout removes the scene. Layers keep it."
              lead="Background removers return one subject on transparency. Move it and a silhouette-shaped hole appears where it used to be — because the scene no longer exists."
            />
            <ul className="space-y-4">
              {[
                {
                  t: "Reconstructed, not discarded",
                  d: "The base layer continues behind the subject, so a repositioned product still sits in a coherent room.",
                },
                {
                  t: "Every element independent",
                  d: "Props, surfaces, text regions and graphic devices arrive as separate layers with depth order.",
                },
                {
                  t: "Exportable, not locked in",
                  d: "PNG, ZIP and layered PSD that open in Photoshop, Affinity, Photopea, Cubism or Spine.",
                },
              ].map((item, i) => (
                <li key={item.t} className="flex gap-3">
                  <span className="step-num mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="block text-[14.5px] font-medium text-[#eef2f7]">{item.t}</span>
                    <span className="mt-0.5 block text-[13px] leading-relaxed text-[#8b94a3]">{item.d}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/compare/remove-bg-vs-image-to-layers" className="btn btn-ghost btn-sm">
                Compare the two workflows
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border" style={{ borderColor: "var(--line)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={demoAssets.ecommerce.src}
                alt="Product photo separated into seven editable layers"
                className="w-full"
                width={demoAssets.ecommerce.width}
                height={demoAssets.ecommerce.height}
                loading="lazy"
              />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {demoAssets.ecommerce.layers.slice(0, 4).map((layer) => (
                <div
                  key={layer.n}
                  className="flex items-center gap-2 rounded-xl border px-2.5 py-2"
                  style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.02)" }}
                >
                  <span className="text-[10px] tabular-nums text-[#6b7482]">
                    {String(layer.n).padStart(2, "0")}
                  </span>
                  <span className="truncate text-[11.5px] text-[#c3cad6]">{layer.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-wide">
          <SectionHeading
            kicker="Examples"
            title="Four images, four failure points"
            lead="Each example breaks in a place worth knowing about before you run your own image."
          />
          <DemoStrip />
          <div className="mt-4">
            <Link href="/showcase" className="text-[12.5px] text-[#a99bff] hover:underline">
              Read the breakdown for each example →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-wide">
          <SectionHeading
            kicker="Workflow"
            title="Upload to export in four steps"
            lead="No project setup, no template. One image in, a stack out."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Upload", d: "JPG, PNG or WebP up to 10 MB. The sample loads instantly if you want to try the flow." },
              { t: "Pick a level", d: "L1 to L4, with a recommendation based on the workflow you came from." },
              { t: "Review the stack", d: "Toggle layers, check the reconstructed area, split anything that still mixes two decisions." },
              { t: "Export", d: "Transparent PNGs, a ZIP with depth order, or a layered PSD." },
            ].map((step, i) => (
              <div
                key={step.t}
                className="rounded-2xl border p-4"
                style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.022)" }}
              >
                <span className="step-num">{i + 1}</span>
                <h3 className="mt-3 text-[14.5px] font-medium text-[#eef2f7]">{step.t}</h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#8b94a3]">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-wide">
          <SectionHeading
            kicker="Pricing"
            title="Credits, not seats"
            lead="One balance across every workflow. Failed runs are credited back; completed runs are not."
          />
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {[
              { name: "Starter trial", price: "$0", note: "20 one-time credits", features: ["7-day file retention", "L1 and L2 levels", "PNG and ZIP export"], cta: "Start free" },
              { name: "Creator", price: "$10", note: "per month, billed yearly at $120", features: ["12,000 credits / year", "All four levels", "PSD export", "30-day retention", "Commercial use"], cta: "Choose Creator", featured: true },
              { name: "Studio", price: "$30", note: "per month, billed yearly at $360", features: ["36,000 credits / year", "Priority processing", "Team seats", "One-year retention", "API access"], cta: "Choose Studio" },
            ].map((plan) => (
              <div
                key={plan.name}
                className="relative rounded-2xl border p-5"
                style={{
                  borderColor: plan.featured ? "rgba(139,124,255,0.65)" : "var(--line)",
                  background: plan.featured
                    ? "linear-gradient(160deg, rgba(139,124,255,0.13), rgba(45,212,191,0.05))"
                    : "rgba(255,255,255,0.022)",
                }}
              >
                {plan.featured ? (
                  <span className="absolute right-4 top-4 rounded-full bg-[#8b7cff] px-2 py-0.5 text-[10px] font-medium text-[#0a0b10]">
                    Most popular
                  </span>
                ) : null}
                <p className="text-[12px] uppercase tracking-[0.12em] text-[#6b7482]">{plan.name}</p>
                <p className="mt-2 text-[30px] font-medium tracking-tight text-[#f4f6f8]">
                  {plan.price}
                  <span className="ml-1 text-[12px] font-normal text-[#8b94a3]">
                    {plan.price === "$0" ? "" : "/mo"}
                  </span>
                </p>
                <p className="mt-0.5 text-[11.5px] text-[#6b7482]">{plan.note}</p>
                <ul className="mt-4 space-y-1.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[12.5px] text-[#b7c0cd]">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#2dd4bf]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/pricing" className={`btn mt-5 w-full ${plan.featured ? "btn-primary" : "btn-ghost"}`}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-narrow">
          <SectionHeading kicker="FAQ" title="Questions worth answering before you upload" />
          <div className="space-y-2">
            {homeFaq.map((item) => (
              <details key={item.q} className="faq">
                <summary>{item.q}</summary>
                <div className="faq-body">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 pt-4">
        <div className="container-wide">
          <CtaBand
            heading="Separate your first image in two minutes"
            body="The sample loads without an account. Upload your own file when you are ready, and keep the layers when the composition changes."
            primary={{ label: "Open the layer studio", href: "/app" }}
            secondary={{ label: "See the examples", href: "/showcase" }}
          />
        </div>
      </section>
    </>
  );
}
