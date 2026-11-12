export type Locale = "en" | "ja";

export const locales: Locale[] = ["en", "ja"];
export const defaultLocale: Locale = "en";

/**
 * English is served from the root so every existing URL keeps working; other
 * locales live under a prefix. Adding a locale means adding an entry here plus
 * a route group — nothing else needs to know the URL shape.
 */
export const localeMeta: Record<
  Locale,
  {
    htmlLang: string;
    label: string;
    short: string;
    ogLocale: string;
    ogAlternate: string;
    prefix: string;
  }
> = {
  en: {
    htmlLang: "en",
    label: "English",
    short: "EN",
    ogLocale: "en_US",
    ogAlternate: "ja_JP",
    prefix: "",
  },
  ja: {
    htmlLang: "ja",
    label: "日本語",
    short: "JA",
    ogLocale: "ja_JP",
    ogAlternate: "en_US",
    prefix: "/ja",
  },
};

export function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

/** Locale-aware path for a slug that is shared across translations. */
export function localeHref(locale: Locale, slug = ""): string {
  const clean = slug.replace(/^\/+|\/+$/g, "");
  const prefix = localeMeta[locale].prefix;
  if (!clean) return prefix || "/";
  return `${prefix}/${clean}`;
}

/**
 * hreflang map for one slug. `available` is the set of locales that actually
 * have this page — emitting an alternate for a page that 404s is worse than
 * emitting none, so callers pass exactly what exists.
 */
export function languageAlternates(slug: string, available: Locale[]) {
  const out: Record<string, string> = {};
  for (const locale of locales) {
    if (available.includes(locale)) out[locale] = localeHref(locale, slug);
  }
  out["x-default"] = localeHref(defaultLocale, slug);
  return out;
}
