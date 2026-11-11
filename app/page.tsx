import type { Metadata } from "next";
import Link from "next/link";
import LayerWorkbench from "@/components/layer-workbench";
import JsonLd from "@/components/json-ld";
import { CtaBand, DemoStrip, SectionHeading, TrustRow } from "@/components/ui";
import { demoAssets, levelMeta } from "@/lib/content/layers";
import { buildMetadata, faqSchema, softwareSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Image to Layers — Turn Flat Images into Editable Layers",
  description:
    "Image to Layers separates a flat image into editable, transparent layers — product photos, covers, Live2D characters, thumbnails — and exports PNG or layered PSD.",
});

const homeFaq = [
  {
    q: "What does Image to Layers actually do?",
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
    demo: "ecommerce",
    meta: "/demo/ecommerce.webp",
    level: "L2",
    title: "E-commerce product images",
    body: "Product, props and backdrop separated, so one shoot serves every marketplace.",
    pos: "50% 50%",
  },
  {
    slug: "/cover-to-layers",
    demo: "cover",
    meta: "/demo/cover.webp",
    level: "L3",
    title: "Covers and posters",
    body: "Artwork stays, type comes apart, the field stretches to a new trim size.",
    pos: "50% 40%",
  },
  {
    slug: "/live2d-character-to-layers",
    demo: "live2d",
    meta: "/demo/live2d.webp",
    level: "L4",
    title: "Live2D characters",
    body: "Hair, face, eyes, clothing and tail as separate PNGs with depth order.",
    pos: "50% 0%",
  },
  {
    slug: "/youtube-thumbnail-to-layers",
    demo: "youtube",
    meta: "/demo/youtube.webp",
    level: "L3",
    title: "YouTube thumbnails",
    body: "Keep the face that performs, swap the headline, test one variable.",
    pos: "55% 45%",
  },
];

const facts = [
  { label: "Export", value: "Layered PSD · ZIP · PNG" },
  { label: "Input", value: "JPG, PNG, WebP · 10 MB" },
  { label: "Depth order", value: "Preserved per layer" },
  { label: "Retention", value: "Auto-deleted after 7 days" },
];

const plans = [
  {
    name: "Starter trial",
    price: "$0",
    note: "20 one-time credits",
    features: ["7-day file retention", "L1 and L2 levels", "PNG and ZIP export"],
    cta: "Start free",
  },
  {
    name: "Creator",
    price: "$10",
    note: "per month, billed yearly at $120",
    features: ["12,000 credits / year", "All four levels", "PSD export", "30-day retention", "Commercial use"],
    cta: "Choose Creator",
    featured: true,
  },
  {
    name: "Studio",
    price: "$30",
    note: "per month, billed yearly at $360",
    features: ["36,000 credits / year", "Priority processing", "Team seats", "One-year retention", "API access"],
    cta: "Choose Studio",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          softwareSchema({
            name: "Image to Layers",
            description:
              "AI layer separation for product images, covers, Live2D characters and YouTube thumbnails.",
            slug: "",
            credits: 45,
          }),
          faqSchema(homeFaq),
        ]}
      />

      <section className="pt-12 pb-10 sm:pt-16">
        <div className="container-wide">
          <div className="mx-auto max-w-[760px] text-center">
            <span className="chip">
              <span className="chip-dot" />
              Preview build · separation is simulated
            </span>
            <h1 className="mt-5 tracking-[-0.032em]">
              <span className="block text-[31px] font-semibold leading-[1.06] text-[#101828] sm:text-[44px]">
                Image to Layers
              </span>
              <span className="mt-1.5 block text-[20px] font-normal leading-[1.28] text-[#46536a] sm:mt-2 sm:text-[29px]">
                Turn a flat image into editable, transparent layers
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-[640px] text-[15.5px] leading-[1.7] text-[#46536a] sm:text-[16.5px]">
              Separate the subject, props, text and background — then rebuild what was hidden
              behind them. Pick your workflow below; each one sets its own layer level.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-2.5 sm:flex-row sm:items-center">
              <Link href="/app" className="btn btn-primary">
                Separate an image
              </Link>
              <Link href="/showcase" className="btn btn-ghost">
                See a real example
              </Link>
            </div>
            <div className="mt-5 flex justify-center">
              <TrustRow
                items={["No credit card", "20 free credits", "Files deleted after 7 days", "Not used for training"]}
              />
            </div>
          </div>

          <div className="mt-12">
            <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 className="text-[14.5px] font-semibold text-[#101828]">Start from your workflow</h2>
              <Link href="/layer-levels" className="text-[12px] text-[#1d4ed8] hover:underline">
                Each workflow sets its own layer level →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar) => (
                <Link
                  key={pillar.slug}
                  href={pillar.slug}
                  className="card-link group flex overflow-hidden rounded-[12px] border bg-white sm:flex-col"
                  style={{ borderColor: "var(--line)" }}
                >
                  <div
                    className="relative aspect-[4/3] w-[132px] shrink-0 overflow-hidden border-r sm:aspect-[4/3] sm:w-full sm:border-b sm:border-r-0"
                    style={{ borderColor: "var(--line)" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={pillar.meta}
                      alt={`${pillar.title} example`}
                      width={demoAssets[pillar.demo as keyof typeof demoAssets].width}
                      height={demoAssets[pillar.demo as keyof typeof demoAssets].height}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                      style={{ objectPosition: pillar.pos }}
                    />
                    <span
                      className="absolute left-2 top-2 rounded-[5px] border bg-white/95 px-1.5 py-0.5 text-[10px] font-medium text-[#344054]"
                      style={{ borderColor: "var(--line)" }}
                    >
                      {pillar.level}
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col p-3.5">
                    <h3 className="text-[13.5px] font-medium leading-snug text-[#101828]">{pillar.title}</h3>
                    <p className="mt-1 text-[11.5px] leading-relaxed text-[#5b6879]">{pillar.body}</p>
                    <span className="mt-auto pt-2.5 text-[11px] text-[#1d4ed8]">Open workflow →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-11 border-t pt-8" style={{ borderColor: "var(--line)" }}>
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 className="text-[14.5px] font-semibold text-[#101828]">Try a separation right here</h2>
              <span className="text-[11.5px] text-[#6b7280]">
                Sample image loads instantly · files stay in your browser
              </span>
            </div>
            <LayerWorkbench demo="ecommerce" />
          </div>

          <dl
            className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-[12px] border bg-[#e5e8ec] lg:grid-cols-4"
            style={{ borderColor: "var(--line)" }}
          >
            {facts.map((fact) => (
              <div key={fact.label} className="bg-white px-4 py-3">
                <dt className="text-[10.5px] font-medium uppercase tracking-[0.11em] text-[#6b7280]">
                  {fact.label}
                </dt>
                <dd className="mt-0.5 text-[12.5px] text-[#344054]">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-soft py-14" style={{ borderTop: "1px solid var(--line)" }}>
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
                    <span className="block text-[14.5px] font-medium text-[#101828]">{item.t}</span>
                    <span className="mt-0.5 block text-[13px] leading-relaxed text-[#5b6879]">{item.d}</span>
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
          <div>
            <div
              className="overflow-hidden rounded-[12px] border bg-white"
              style={{ borderColor: "var(--line)", boxShadow: "var(--shadow-sm)" }}
            >
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
                  className="flex items-center gap-2 rounded-[8px] border bg-white px-2.5 py-2"
                  style={{ borderColor: "var(--line)" }}
                >
                  <span className="text-[10px] tabular-nums text-[#6b7280]">
                    {String(layer.n).padStart(2, "0")}
                  </span>
                  <span className="truncate text-[11.5px] text-[#344054]">{layer.name}</span>
                </div>
              ))}
            </div>
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
                  className="card-link rounded-[12px] border bg-white p-4"
                  style={{ borderColor: "var(--line)" }}
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-[11px] font-medium uppercase tracking-[0.11em] text-[#6b7280]">
                      {key}
                    </span>
                    <span className="text-[11px] tabular-nums text-[#6b7280]">{meta.credits} cr</span>
                  </div>
                  <h3 className="mt-1.5 text-[15.5px] font-medium text-[#101828]">{meta.label}</h3>
                  <p className="mt-0.5 text-[11.5px] text-[#1d4ed8]">{meta.range}</p>
                  <p className="mt-2 text-[12px] leading-relaxed text-[#5b6879]">{meta.blurb}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="container-wide">
          <SectionHeading
            kicker="Examples"
            title="Four images, four failure points"
            lead="Each example breaks in a place worth knowing about before you run your own image."
          />
          <DemoStrip />
          <div className="mt-4">
            <Link href="/showcase" className="text-[12.5px] text-[#1d4ed8] hover:underline">
              Read the breakdown for each example →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-soft py-14">
        <div className="container-wide">
          <SectionHeading
            kicker="Workflow"
            title="Upload to export in four steps"
            lead="No project setup, no template. One image in, a stack out."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Upload",
                d: "JPG, PNG or WebP up to 10 MB. The sample loads instantly if you want to try the flow.",
              },
              { t: "Pick a level", d: "L1 to L4, with a recommendation based on the workflow you came from." },
              {
                t: "Review the stack",
                d: "Toggle layers, check the reconstructed area, split anything that still mixes two decisions.",
              },
              { t: "Export", d: "Transparent PNGs, a ZIP with depth order, or a layered PSD." },
            ].map((step, i) => (
              <div key={step.t} className="rounded-[12px] border bg-white p-4" style={{ borderColor: "var(--line)" }}>
                <span className="step-num">{i + 1}</span>
                <h3 className="mt-3 text-[14.5px] font-medium text-[#101828]">{step.t}</h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[#5b6879]">{step.d}</p>
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
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="relative rounded-[14px] border bg-white p-5"
                style={{
                  borderColor: plan.featured ? "#2563EB" : "var(--line)",
                  boxShadow: plan.featured ? "0 0 0 1px #2563EB, var(--shadow-md)" : "var(--shadow-xs)",
                }}
              >
                {plan.featured ? (
                  <span className="absolute right-4 top-4 rounded-[5px] bg-[#EFF4FF] px-2 py-0.5 text-[10.5px] font-medium text-[#1d4ed8]">
                    Most popular
                  </span>
                ) : null}
                <p className="text-[12px] font-medium uppercase tracking-[0.11em] text-[#6b7280]">{plan.name}</p>
                <p className="mt-2 flex items-baseline gap-1 text-[30px] font-semibold tracking-[-0.03em] text-[#101828]">
                  {plan.price}
                  <span className="text-[12px] font-normal text-[#6b7280]">{plan.price === "$0" ? "" : "/mo"}</span>
                </p>
                <p className="mt-0.5 text-[11.5px] text-[#6b7280]">{plan.note}</p>
                <ul className="mt-4 space-y-1.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[12.5px] text-[#3f4c60]">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                        className="mt-[3px] shrink-0"
                      >
                        <path
                          d="M2.5 7.4L5.4 10.2L11.5 4"
                          stroke="#2563EB"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
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
          <p className="mt-4 text-[11.5px] text-[#6b7280]">
            Prices in USD. Cancel anytime. Failed separations are refunded automatically.
          </p>
        </div>
      </section>

      <section className="py-14" style={{ borderTop: "1px solid var(--line)" }}>
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

      <section className="pb-20 pt-2">
        <div className="container-wide">
          <CtaBand
            heading="Separate your first image in two minutes"
            body="The sample loads without an account. Upload your own file when you are ready, and keep the layers when the composition changes."
            primary={{ label: "Open the layer studio", href: "/app" }}
            secondary={{ label: "See the examples", href: "/showcase" }}
            footnote="No credit card required · 20 free credits on signup · files auto-deleted after 7 days"
          />
        </div>
      </section>
    </>
  );
}
