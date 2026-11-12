import type { ReactNode } from "react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import JsonLd from "@/components/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import { localeMeta, type Locale } from "@/lib/i18n";
import { pairedSlugs } from "@/lib/content";
import { uiCopy } from "@/lib/ui-copy";

/**
 * Shared <html>/<body> shell. Each locale has its own root layout (route group)
 * because the `lang` attribute cannot be set from a nested layout — that is the
 * whole reason the app is split into (en) and (ja).
 */
export default function RootShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const t = uiCopy(locale);
  return (
    <html lang={localeMeta[locale].htmlLang} className="h-full">
      <body className="flex min-h-full flex-col">
        <JsonLd data={[organizationSchema(), websiteSchema(locale)]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-black"
        >
          {t.skipToContent}
        </a>
        <SiteHeader locale={locale} paired={pairedSlugs} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter locale={locale} />
      </body>
    </html>
  );
}
