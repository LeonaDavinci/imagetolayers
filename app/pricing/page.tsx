import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/json-ld";
import { CtaBand, SectionHeading } from "@/components/ui";
import { levelMeta } from "@/lib/content/layers";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Image to Layers — Pricing and Credits",
  description:
    "Image to Layers pricing in credits: 20 free to start, Creator at $10/month with 12,000 credits a year, Studio at $30/month with API access and team seats.",
  slug: "pricing",
});

const plans = [
  {
    name: "Starter trial",
    price: "$0",
    unit: "one-time",
    credits: "20 credits",
    blurb: "Enough to run two L2 separations or one L3 and see how the output behaves on your images.",
    features: [
      "20 one-time credits",
      "L1 Core and L2 Standard levels",
      "PNG and ZIP export",
      "7-day file retention",
      "No card required",
    ],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Creator",
    price: "$10",
    unit: "per month, billed yearly at $120",
    credits: "12,000 credits / year",
    blurb: "For designers and sellers who separate a few images a week and need PSD export.",
    features: [
      "12,000 credits per year",
      "All four levels including character parts",
      "Layered PSD export",
      "30-day file retention",
      "Commercial use",
      "Priority email support",
    ],
    cta: "Choose Creator",
    featured: true,
  },
  {
    name: "Studio",
    price: "$30",
    unit: "per month, billed yearly at $360",
    credits: "36,000 credits / year",
    blurb: "For teams with a catalogue, a rigging pipeline or a client roster that needs API access.",
    features: [
      "36,000 credits per year",
      "Everything in Creator",
      "Team seats and shared credit pool",
      "API access",
      "One-year file retention",
      "Processing agreement available",
    ],
    cta: "Choose Studio",
    featured: false,
  },
];

const pricingFaq = [
  {
    q: "How many credits does one image cost?",
    a: "L1 Core is 30 credits, L2 Standard 45, L3 Detailed 60 and L4 Character parts 90. The level sets the cost, and the level is visible before you run.",
  },
  {
    q: "Do credits expire?",
    a: "Annual credits are allocated for the billing year. Unused credits do not roll into the next year, and monthly add-ons are available if a project runs long.",
  },
  {
    q: "What happens if a run fails?",
    a: "Failed runs — where no output is produced — are credited back automatically. Completed runs that produced a stack are not refunded, but we review disputes individually.",
  },
  {
    q: "Can I use the output commercially?",
    a: "Yes on paid plans, including client work. You must hold the rights to the source image; separation does not grant rights to third-party material.",
  },
  {
    q: "Is there a monthly option?",
    a: "Creator and Studio are billed yearly at the prices shown. A monthly option exists at a higher effective rate; ask us if you need it for a short project.",
  },
  {
    q: "Do you offer a team plan with shared credits?",
    a: "Yes — Studio includes team seats and one shared credit pool, so a catalogue job does not have to sit under one person's account.",
  },
  {
    q: "What is the refund policy?",
    a: "Unused subscription time can be refunded within 14 days of purchase. Credits already consumed are not refundable.",
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Image to Layers",
            description: "AI image layer separation with layered PSD export.",
            brand: { "@type": "Brand", name: site.name },
            offers: plans.map((plan) => ({
              "@type": "Offer",
              name: plan.name,
              price: plan.price.replace("$", ""),
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: `${site.url}/pricing`,
            })),
          },
          faqSchema(pricingFaq),
        ]}
      />

      <section className="pt-14 pb-10">
        <div className="container-wide max-w-[860px] text-center">
          <span className="chip mx-auto">
            <span className="chip-dot" />
            Credits, not seats
          </span>
          <h1 className="mt-5 text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[40px]">
            Image to Layers: pay per layer depth, not per user
          </h1>
          <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-relaxed text-[#46536a]">
            One credit balance covers every workflow. A product photo at L2 and a character at L4 draw
            from the same pool, and failed runs are credited back automatically.
          </p>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-wide grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col rounded-[14px] border p-6"
              style={{
                borderColor: plan.featured ? "#2563EB" : "var(--line)",
                background: "#ffffff",
                boxShadow: plan.featured ? "0 0 0 1px #2563EB, var(--shadow-md)" : "var(--shadow-xs)",
              }}
            >
              {plan.featured ? (
                <span className="absolute right-5 top-5 rounded-[5px] bg-[#EFF4FF] px-2 py-0.5 text-[10.5px] font-medium text-[#1d4ed8]">
                  Most popular
                </span>
              ) : null}
              <p className="text-[12px] uppercase tracking-[0.12em] text-[#6b7280]">{plan.name}</p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-[32px] font-semibold tracking-[-0.035em] text-[#101828]">{plan.price}</span>
                <span className="text-[12px] text-[#6b7280]">{plan.unit.startsWith("one-time") ? "one-time" : "per month"}</span>
              </div>
              <p className="mt-1 text-[11.5px] text-[#6b7280]">
                {plan.unit.startsWith("one-time") ? "No card required" : plan.unit.replace("per month, ", "")}
              </p>
              <p className="mt-2.5 text-[13px] font-medium text-[#1d4ed8]">{plan.credits}</p>
              <p className="mt-2 text-[12.5px] leading-relaxed text-[#5b6879]">{plan.blurb}</p>
              <ul className="mt-5 flex-1 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-[13px] text-[#3f4c60]">
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="mt-[4px] shrink-0">
                      <path d="M2.5 7.4L5.4 10.2L11.5 4" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/app" className={`btn mt-6 w-full ${plan.featured ? "btn-primary" : "btn-ghost"}`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-14">
        <div className="container-wide">
          <SectionHeading
            kicker="Cost per run"
            title="What a separation costs in credits"
            lead="The level determines the cost, and the level is your choice — pick the shallowest one that supports the edits you actually need."
          />
          <div className="scroll-x rounded-[12px] border" style={{ borderColor: "var(--line)" }}>
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  {["Level", "Layers", "Credits", "Best for"].map((head) => (
                    <th key={head} className="px-4 py-3 text-[11.5px] uppercase tracking-[0.08em] text-[#5b6879]">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(Object.keys(levelMeta) as (keyof typeof levelMeta)[]).map((key) => {
                  const meta = levelMeta[key];
                  return (
                    <tr key={key} style={{ borderTop: "1px solid var(--line)" }}>
                      <td className="px-4 py-3 text-[13px] font-medium text-[#101828]">
                        {key} {meta.label}
                      </td>
                      <td className="px-4 py-3 text-[13px] text-[#46536a]">{meta.range}</td>
                      <td className="px-4 py-3 text-[13px] tabular-nums text-[#46536a]">{meta.credits}</td>
                      <td className="px-4 py-3 text-[13px] text-[#5b6879]">{meta.blurb}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[11.5px] text-[#6b7280]">
            A 12,000-credit Creator plan covers roughly 265 L2 runs or 133 L4 character runs.
          </p>
        </div>
      </section>

      <section className="pb-14">
        <div className="container-narrow">
          <SectionHeading kicker="FAQ" title="Pricing questions" />
          <div className="space-y-2">
            {pricingFaq.map((item) => (
              <details key={item.q} className="faq">
                <summary>{item.q}</summary>
                <div className="faq-body">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-wide">
          <CtaBand
            heading="Start with 20 free credits"
            body="Two L2 runs is enough to judge the output on your own images. No card, no subscription, no sales call."
            primary={{ label: "Open the layer studio", href: "/app" }}
            secondary={{ label: "Compare levels", href: "/layer-levels" }}
          />
        </div>
      </section>
    </>
  );
}
