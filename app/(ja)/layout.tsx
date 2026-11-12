import type { Metadata, Viewport } from "next";
import "../globals.css";
import RootShell from "@/components/root-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Image to Layers — 画像をレイヤーに分解するAIツール",
    template: "%s",
  },
  description:
    "Image to Layers は、1枚の画像を編集可能な透過レイヤーにAIで分解し、隠れていた背景を再構成して、PNG・ZIP・レイヤー付きPSDで書き出すツールです。",
  applicationName: site.name,
  keywords: [
    "画像 レイヤー 分解",
    "画像をレイヤーに",
    "レイヤー分離",
    "パーツ分解",
    "画像 透過 PNG",
    "画像 PSD 変換",
    "Live2D パーツ分け",
    "サムネイル 文字 変更",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/ja", languages: { en: "/", ja: "/ja", "x-default": "/" } },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Image to Layers — 画像をレイヤーに分解するAIツール",
    description:
      "1枚の画像を編集可能な透過レイヤーに分解し、隠れた背景を再構成。PNG・ZIP・レイヤー付きPSDで書き出せます。",
    url: `${site.url}/ja`,
    locale: "ja_JP",
    alternateLocale: ["en_US"],
    images: [{ url: "/brand/og.png", width: 1200, height: 630, alt: "Image to Layers — 画像をレイヤーに分解" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Image to Layers — 画像をレイヤーに分解するAIツール",
    description:
      "1枚の画像を編集可能な透過レイヤーに分解し、隠れた背景を再構成。PNG・ZIP・レイヤー付きPSDで書き出せます。",
    images: ["/brand/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48 64x64", type: "image/x-icon" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function JaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootShell locale="ja">{children}</RootShell>;
}
