"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeHref, localeMeta, type Locale } from "@/lib/i18n";
import { otherLocale, uiCopy } from "@/lib/ui-copy";

/**
 * Language switch that keeps the visitor on the same page when a translation
 * exists. `paired` is the list of slugs available in both locales — a slug that
 * exists only in Japanese falls back to the other locale's home instead of
 * linking to a 404.
 */
export default function LangSwitch({
  locale,
  paired = [],
  className = "",
}: {
  locale: Locale;
  paired?: string[];
  className?: string;
}) {
  const pathname = usePathname() || "/";
  const target = otherLocale(locale);
  const t = uiCopy(locale);

  const prefix = localeMeta[locale].prefix;
  const stripped = prefix && pathname.startsWith(prefix) ? pathname.slice(prefix.length) : pathname;
  const slug = stripped.replace(/^\/+|\/+$/g, "");
  const href = slug && paired.includes(slug) ? localeHref(target, slug) : localeHref(target);

  return (
    <Link
      href={href}
      hrefLang={target}
      lang={target}
      aria-label={t.header.otherLocaleAria}
      className={className || "text-[13px] text-[#46536a] transition hover:text-[#101828]"}
    >
      {t.header.otherLocale}
    </Link>
  );
}
