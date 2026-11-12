export const site = {
  name: "Image to Layers",
  domain: "www.image-layers.com",
  url: "https://www.image-layers.com",
  tagline: "Turn flat images into editable layers",
  description:
    "Image to Layers separates any flat image into editable, transparent layers with AI, rebuilds the background hidden behind each element, and exports PNG, ZIP or a layered PSD.",
  email: "hello@image-layers.com",
  launchYear: 2026,
};

export type NavGroup = {
  label: string;
  links: { label: string; href: string; hint?: string }[];
};

export const nav: NavGroup[] = [
  {
    label: "Layers",
    links: [
      { label: "Image to layers", href: "/image-to-layers", hint: "Any flat image" },
      { label: "Image to PSD", href: "/image-to-psd", hint: "Layered export" },
      { label: "Layer separator", href: "/image-layer-separator", hint: "Tool alias" },
      { label: "Extract layers", href: "/extract-layers-from-image", hint: "From one file" },
      { label: "AI layer splitter", href: "/ai-layer-splitter-no-sign-in", hint: "No sign-in to preview" },
    ],
  },
  {
    label: "Use cases",
    links: [
      { label: "E-commerce product images", href: "/product-image-to-layers", hint: "Main image, props" },
      { label: "Covers & posters", href: "/cover-to-layers", hint: "Book, album, poster" },
      { label: "Live2D characters", href: "/live2d-character-to-layers", hint: "Rig-ready parts" },
      { label: "YouTube thumbnails", href: "/youtube-thumbnail-to-layers", hint: "Text & subject" },
    ],
  },
  {
    label: "Layer levels",
    links: [
      { label: "How layer levels work", href: "/layer-levels", hint: "L1 to L4" },
      { label: "Core — 2 to 4 layers", href: "/layer-levels/core" },
      { label: "Standard — 4 to 6 layers", href: "/layer-levels/standard" },
      { label: "Detailed — 6 to 9 layers", href: "/layer-levels/detailed" },
      { label: "Character parts", href: "/layer-levels/character-parts" },
    ],
  },
  {
    label: "Compare",
    links: [
      { label: "Layers vs background removal", href: "/compare/remove-bg-vs-image-to-layers" },
      { label: "Canva Magic Layers alternative", href: "/compare/canva-magic-layers-alternative" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Examples", href: "/showcase" },
    ],
  },
];

// Silo structure: the footer carries only hub-level pages. Long-tail pages are
// linked from their own workflow hub (see `childPages` in lib/content), so each
// child page inherits context from one parent instead of 41 sitewide links.
export const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Image to layers", href: "/image-to-layers" },
      { label: "Image to PSD", href: "/image-to-psd" },
      { label: "Layer separator", href: "/image-layer-separator" },
      { label: "Extract layers", href: "/extract-layers-from-image" },
      { label: "Layer levels", href: "/layer-levels" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Workflows",
    links: [
      { label: "E-commerce product images", href: "/product-image-to-layers" },
      { label: "Covers and posters", href: "/cover-to-layers" },
      { label: "Live2D characters", href: "/live2d-character-to-layers" },
      { label: "YouTube thumbnails", href: "/youtube-thumbnail-to-layers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Examples", href: "/showcase" },
      { label: "How many layers?", href: "/guides/how-many-layers" },
      { label: "Live2D layer naming", href: "/guides/live2d-layer-naming" },
      { label: "Layers vs background removal", href: "/compare/remove-bg-vs-image-to-layers" },
      { label: "Canva Magic Layers alternative", href: "/compare/canva-magic-layers-alternative" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "AI transparency", href: "/ai-transparency" },
      { label: "Security", href: "/security" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export const navJa: NavGroup[] = [
  {
    label: "レイヤー分解",
    links: [
      { label: "画像をレイヤーに", href: "/ja/image-to-layers", hint: "どんな画像でも" },
      { label: "画像を PSD に", href: "/ja/image-to-psd", hint: "レイヤーを保って書き出し" },
      {
        label: "パーツ分解ツール",
        href: "/ja/character-to-layers/character-parts-extractor",
        hint: "イラストから個別に抽出",
      },
    ],
  },
  {
    label: "用途",
    links: [
      { label: "商品画像", href: "/ja/product-image-to-layers", hint: "EC のメイン画像" },
      { label: "表紙・ポスター", href: "/ja/cover-to-layers", hint: "文字と図版を分ける" },
      { label: "キャラクター・Live2D", href: "/ja/character-to-layers", hint: "リグ用パーツ" },
      { label: "YouTube サムネイル", href: "/ja/youtube-thumbnail-to-layers", hint: "文字だけ差し替え" },
    ],
  },
];

export const footerColumnsJa = [
  {
    title: "プロダクト",
    links: [
      { label: "画像をレイヤーに", href: "/ja/image-to-layers" },
      { label: "画像を PSD に", href: "/ja/image-to-psd" },
      { label: "料金とクレジット", href: "/ja/pricing" },
    ],
  },
  {
    title: "用途",
    links: [
      { label: "商品画像", href: "/ja/product-image-to-layers" },
      { label: "表紙・ポスター", href: "/ja/cover-to-layers" },
      { label: "キャラクター", href: "/ja/character-to-layers" },
      { label: "YouTube サムネイル", href: "/ja/youtube-thumbnail-to-layers" },
    ],
  },
  {
    title: "キャラクター",
    links: [
      { label: "パーツ分解ツール", href: "/ja/character-to-layers/character-parts-extractor" },
      { label: "Live2D パーツ分け", href: "/ja/character-to-layers/live2d" },
    ],
  },
  {
    title: "運営",
    links: [
      { label: "会社情報", href: "/about" },
      { label: "AI の扱い", href: "/ai-transparency" },
      { label: "プライバシー", href: "/privacy" },
      { label: "利用規約", href: "/terms" },
    ],
  },
];

export function navFor(locale: "en" | "ja") {
  return locale === "ja" ? navJa : nav;
}

export function footerFor(locale: "en" | "ja") {
  return locale === "ja" ? footerColumnsJa : footerColumns;
}
