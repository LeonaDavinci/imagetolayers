import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPageView from "@/components/content-page";
import { ja, jaPages, localesFor } from "@/lib/content";
import { demoAssets } from "@/lib/content/layers";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return jaPages.map((page) => ({ slug: page.slug.split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = ja.getPage(slug.join("/"));
  if (!page) return {};
  return buildMetadata({
    title: page.title,
    description: page.description,
    slug: page.slug,
    image: demoAssets[page.demo].og,
    locale: "ja",
    available: localesFor(page.slug),
  });
}

export default async function JaContentPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const page = ja.getPage(slug.join("/"));
  if (!page) notFound();

  return <ContentPageView page={page} locale="ja" />;
}
