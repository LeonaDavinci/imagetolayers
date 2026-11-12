import Link from "next/link";
import { CtaBand, SectionHeading } from "@/components/ui";
import { uiCopy } from "@/lib/ui-copy";
import { localeHref, type Locale } from "@/lib/i18n";

export type PricingPlan = {
  name: string;
  price: string;
  unit: string;
  credits: string;
  blurb: string;
  features: string[];
  cta: string;
  featured: boolean;
};

export type PricingCopy = {
  chip: string;
  h1: string;
  lead: string;
  mostPopular: string;
  oneTime: string;
  perMonth: string;
  noCard: string;
  tableKicker: string;
  tableTitle: string;
  tableLead: string;
  tableHead: [string, string, string, string];
  tableNote: string;
  faqKicker: string;
  faqTitle: string;
  cta: { heading: string; body: string; primary: string; secondary: { label: string; href: string } };
  faq: { q: string; a: string }[];
  plans: PricingPlan[];
};

/**
 * Pricing markup shared by both locales. Only the copy object differs, so the
 * plan cards, credit table and CTA cannot drift apart between languages.
 */
export default function PricingView({ locale, copy }: { locale: Locale; copy: PricingCopy }) {
  const t = uiCopy(locale);
  const levels = t.levels;
  const keys = ["L1", "L2", "L3", "L4"] as const;

  return (
    <>
      <section className="pt-14 pb-10">
        <div className="container-wide max-w-[860px] text-center">
          <span className="chip mx-auto">
            <span className="chip-dot" />
            {copy.chip}
          </span>
          <h1 className="mt-5 text-[30px] font-semibold leading-[1.1] tracking-[-0.03em] sm:text-[40px]">
            {copy.h1}
          </h1>
          <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-relaxed text-[#46536a]">{copy.lead}</p>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-wide grid gap-4 lg:grid-cols-3">
          {copy.plans.map((plan) => (
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
                  {copy.mostPopular}
                </span>
              ) : null}
              <p className="text-[12px] uppercase tracking-[0.12em] text-[#6b7280]">{plan.name}</p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-[32px] font-semibold tracking-[-0.035em] text-[#101828]">{plan.price}</span>
                <span className="text-[12px] text-[#6b7280]">
                  {plan.price === "$0" ? copy.oneTime : copy.perMonth}
                </span>
              </div>
              <p className="mt-1 text-[11.5px] text-[#6b7280]">
                {plan.price === "$0" ? copy.noCard : plan.unit}
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
              <Link
                href={localeHref(locale, "app")}
                className={`btn mt-6 w-full ${plan.featured ? "btn-primary" : "btn-ghost"}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-14">
        <div className="container-wide">
          <SectionHeading kicker={copy.tableKicker} title={copy.tableTitle} lead={copy.tableLead} />
          <div className="scroll-x rounded-[12px] border" style={{ borderColor: "var(--line)" }}>
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  {copy.tableHead.map((head) => (
                    <th key={head} className="px-4 py-3 text-[11.5px] uppercase tracking-[0.08em] text-[#5b6879]">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {keys.map((key) => {
                  const meta = levels[key];
                  return (
                    <tr key={key} style={{ borderTop: "1px solid var(--line)" }}>
                      <td className="px-4 py-3 text-[13px] font-medium text-[#101828]">
                        {key} {meta.short}
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
          <p className="mt-3 text-[11.5px] text-[#6b7280]">{copy.tableNote}</p>
        </div>
      </section>

      <section className="pb-14">
        <div className="container-narrow">
          <SectionHeading kicker={copy.faqKicker} title={copy.faqTitle} />
          <div className="space-y-2">
            {copy.faq.map((item) => (
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
            heading={copy.cta.heading}
            body={copy.cta.body}
            primary={{ label: copy.cta.primary, href: localeHref(locale, "app") }}
            secondary={copy.cta.secondary}
          />
        </div>
      </section>
    </>
  );
}
