import type { Metadata } from "next";
import JsonLd from "@/components/json-ld";
import PricingView, { type PricingCopy } from "@/components/pricing-view";
import { breadcrumbSchema, buildMetadata, faqSchema } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Image to Layers — Pricing and Credits",
  description:
    "Image to Layers pricing in credits: 20 free to start, Creator at $10/month with 12,000 credits a year, Studio at $30/month with API access and team seats.",
  slug: "pricing",
  locale: "en",
  available: ["en", "ja"],
});

const copy: PricingCopy = {
  chip: "Credits, not seats",
  h1: "Image to Layers: pay per layer depth, not per user",
  lead: "One credit balance covers every workflow. A product photo at L2 and a character at L4 draw from the same pool, and failed runs are credited back automatically.",
  mostPopular: "Most popular",
  oneTime: "one-time",
  perMonth: "per month",
  noCard: "No card required",
  tableKicker: "Cost per run",
  tableTitle: "What a separation costs in credits",
  tableLead:
    "The level determines the cost, and the level is your choice — pick the shallowest one that supports the edits you actually need.",
  tableHead: ["Level", "Layers", "Credits", "Best for"],
  tableNote: "A 12,000-credit Creator plan covers roughly 265 L2 runs or 133 L4 character runs.",
  faqKicker: "FAQ",
  faqTitle: "Pricing questions",
  cta: {
    heading: "Start with 20 free credits",
    body: "Two L2 runs is enough to judge the output on your own images. No card, no subscription, no sales call.",
    primary: "Open the layer studio",
    secondary: { label: "Compare levels", href: "/layer-levels" },
  },
  plans: [
    {
      name: "Starter trial",
      price: "$0",
      unit: "one-time",
      credits: "20 credits",
      blurb:
        "Enough to run two L2 separations or one L3 and see how the output behaves on your images.",
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
      unit: "billed yearly at $120",
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
      unit: "billed yearly at $360",
      credits: "36,000 credits / year",
      blurb:
        "For teams with a catalogue, a rigging pipeline or a client roster that needs API access.",
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
  ],
  faq: [
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
  ],
};

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
            offers: copy.plans.map((plan) => ({
              "@type": "Offer",
              name: plan.name,
              price: plan.price.replace("$", ""),
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: `${site.url}/pricing`,
            })),
          },
          faqSchema(copy.faq),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
        ]}
      />
      <PricingView locale="en" copy={copy} />
    </>
  );
}
