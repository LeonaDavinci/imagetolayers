import type { Locale } from "@/lib/i18n";
import { localeMeta } from "@/lib/i18n";

export type LevelKey = "L1" | "L2" | "L3" | "L4";

/**
 * Every string the shared components render. Kept as one object per locale so
 * a Japanese page cannot leak an English label through a component that was
 * written before i18n existed.
 *
 * Component code calls `uiCopy(locale)` itself — including inside client
 * components — so this object never crosses the server/client boundary.
 */
export type UiCopy = {
  skipToContent: string;
  header: {
    homeAria: string;
    navAria: string;
    openMenu: string;
    pricing: string;
    signIn: string;
    startFree: string;
    otherLocale: string;
    otherLocaleAria: string;
  };
  langSwitch: { aria: string };
  footer: {
    blurb: string;
    legal: string;
    legalLinks: { label: string; href: string }[];
    localeNote: string;
  };
  breadcrumbs: { home: string; aria: string };
  workbench: {
    studio: string;
    sample: string;
    creditsPerRun: (n: number) => string;
    exportTag: string;
    dropTitle: string;
    dropHint: string;
    chooseFile: string;
    useSample: string;
    browserOnly: string;
    remove: string;
    levelLabel: string;
    whatAreLevels: string;
    run: (n: number, done: boolean, running: boolean) => string;
    exportPsd: string;
    stages: string[];
    stackReady: string;
    outputPreview: string;
    layersCount: (n: number) => string;
    previewEmpty: string;
    downloadPng: string;
    allLayers: string;
    footnote: string;
    levelGuide: string;
    defaultNote: string;
    uploadAlt: (name: string) => string;
    toast: {
      badType: string;
      psd: string;
      png: string;
      zip: string;
    };
  };
  canvas: {
    alt: (label: string, n: number) => string;
    overlay: (size: string, n: number, level: string) => string;
    hotspot: (n: number, name: string) => string;
  };
  stack: {
    title: string;
    layers: (n: number) => string;
    note: string;
    separated: string;
    thumbAlt: (name: string, label: string) => string;
  };
  demoStrip: {
    titles: Record<"ecommerce" | "cover" | "live2d" | "youtube", string>;
    open: string;
    layers: (n: number) => string;
    alt: (label: string, n: number) => string;
  };
  related: { open: string; alt: (label: string) => string };
  hub: { kicker: string; title: (name: string) => string; lead: string };
  page: {
    faqKicker: string;
    faqTitle: (name: string) => string;
    relatedKicker: string;
    relatedTitle: string;
    ctaHeading: string;
    ctaBody: string;
    ctaPrimary: string;
    ctaSecondary: string;
    updated: (date: string) => string;
    openStudio: string;
    layerLevels: string;
    sampleMeta: (n: number, size: string) => string;
  };
  cta: { startFree: string };
  studio: {
    chip: string;
    h1: string;
    lead: string;
    levelCta: string;
    levelsHeading: string;
    exportHeading: string;
    exportNote: string;
    exportFormats: { name: string; note: string }[];
    assetsHeading: string;
    assetMeta: (level: string, n: number) => string;
    assetAlt: (label: string) => string;
  };
  levels: Record<LevelKey, { short: string; range: string; credits: number; blurb: string }>;
};

const en: UiCopy = {
  skipToContent: "Skip to content",
  header: {
    homeAria: "Image to Layers home",
    navAria: "Main",
    openMenu: "Open menu",
    pricing: "Pricing",
    signIn: "Sign in",
    startFree: "Start free",
    otherLocale: "日本語",
    otherLocaleAria: "日本語で見る",
  },
  langSwitch: { aria: "Language" },
  footer: {
    blurb:
      "AI layer separation for e-commerce images, covers, Live2D characters, and YouTube thumbnails. Separate, reconstruct, export.",
    legal: "Preview build — processing is simulated.",
    legalLinks: [
      { label: "AI transparency", href: "/ai-transparency" },
      { label: "Security", href: "/security" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
    localeNote: "",
  },
  breadcrumbs: { home: "Home", aria: "Breadcrumb" },
  workbench: {
    studio: "Layer studio",
    sample: "Sample",
    creditsPerRun: (n) => `${n} credits / run`,
    exportTag: "PNG · ZIP · PSD",
    dropTitle: "Drop an image to separate",
    dropHint: "JPG, PNG or WebP · up to 10 MB · one image per run",
    chooseFile: "Choose a file",
    useSample: "Use sample",
    browserOnly: "Preview build · files stay in your browser",
    remove: "Remove",
    levelLabel: "Layer level",
    whatAreLevels: "What are levels?",
    run: (n, done, running) =>
      running ? "Separating…" : done ? "Run again" : `Separate into layers · ${n} cr`,
    exportPsd: "Export PSD",
    stages: [
      "Reading image structure",
      "Detecting subjects and objects",
      "Estimating occlusion order",
      "Reconstructing hidden background",
      "Building alpha masks",
      "Packing layer stack",
    ],
    stackReady: "Layer stack ready",
    outputPreview: "Output preview",
    layersCount: (n) => `Layers · ${n}`,
    previewEmpty:
      "Run a separation to see the layer stack. Each row is one transparent PNG with its own alpha mask.",
    downloadPng: "Download PNG",
    allLayers: "All layers",
    footnote: "Preview build · separation is simulated, sample layers are used",
    levelGuide: "Layer level guide →",
    defaultNote: "Isolated element with rebuilt edges.",
    uploadAlt: (name) => `${name} uploaded for layer separation with Image to Layers`,
    toast: {
      badType: "That file type is not supported. Use JPG, PNG, or WebP.",
      psd: "Preview build — PSD export is disabled.",
      png: "Preview build — PNG export is disabled.",
      zip: "Preview build — ZIP export is disabled.",
    },
  },
  canvas: {
    alt: (label, n) => `${label} split into ${n} editable layers with Image to Layers`,
    overlay: (size, n, level) => `${size} · ${n} layers · ${level}`,
    hotspot: (n, name) => `Layer ${n}: ${name}`,
  },
  stack: {
    title: "Sample stack",
    layers: (n) => `${n} layers`,
    note: "Depth order preserved. Reconstructed regions are estimates, not recovered pixels.",
    separated: "Separated",
    thumbAlt: (name, label) => `${name} extracted from a ${label} image as its own transparent layer`,
  },
  demoStrip: {
    titles: {
      ecommerce: "E-commerce product images",
      cover: "Covers and posters",
      live2d: "Live2D characters",
      youtube: "YouTube thumbnails",
    },
    open: "Open →",
    layers: (n) => `${n} layers`,
    alt: (label, n) => `${label} split into ${n} editable layers with Image to Layers`,
  },
  related: { open: "Open →", alt: (label) => `${label} example — image to layers` },
  hub: {
    kicker: "In this workflow",
    title: (name) => `Every task under ${name}`,
    lead: "Same layer engine, different checklist. Pick the one that matches what you need to change.",
  },
  page: {
    faqKicker: "FAQ",
    faqTitle: (name) => `Questions about ${name}`,
    relatedKicker: "Related",
    relatedTitle: "Next step",
    ctaHeading: "Try it on your own image",
    ctaBody:
      "The layer studio loads a sample without an account. Upload a JPG, PNG or WebP and choose the level that matches what you need to change.",
    ctaPrimary: "Open the layer studio",
    ctaSecondary: "See how it works",
    updated: (date) => `Last updated ${date}. Preview build — processing is simulated.`,
    openStudio: "Open the layer studio",
    layerLevels: "Layer levels",
    sampleMeta: (n, size) => `${n} layers in the sample · ${size}`,
  },
  cta: { startFree: "Start free" },
  studio: {
    chip: "Preview build · simulated processing",
    h1: "Layer studio",
    lead:
      "Drop an image, pick a level, and review the stack. Your file stays in the browser in this preview — nothing is uploaded, and the layer results shown come from the sample asset.",
    levelCta: "Which level do I need?",
    levelsHeading: "Levels and cost",
    exportHeading: "Export formats",
    exportNote: "Exports are disabled in this preview build.",
    exportFormats: [
      { name: "Transparent PNG", note: "One file per layer, source resolution" },
      { name: "ZIP stack", note: "Whole stack with depth order and names" },
      { name: "Layered PSD", note: "Opens in Photoshop, Affinity, Photopea, GIMP" },
    ],
    assetsHeading: "Sample assets",
    assetMeta: (level, n) => `${level} · ${n} layers`,
    assetAlt: (label) => `${label} sample in the Image to Layers studio`,
  },
  levels: {
    L1: { short: "Core", range: "2–4 layers", credits: 30, blurb: "Subject, background, and the one thing you actually need to move." },
    L2: { short: "Standard", range: "4–6 layers", credits: 45, blurb: "Main product plus props plus a rebuilt background. The e-commerce default." },
    L3: { short: "Detailed", range: "6–9 layers", credits: 60, blurb: "Text regions, graphics, and depth groups for cover and thumbnail work." },
    L4: { short: "Parts", range: "9+ layers", credits: 90, blurb: "Hair, face, eyes, clothing, limbs — rig-ready parts for Live2D and Spine." },
  },
};

const ja: UiCopy = {
  skipToContent: "本文へスキップ",
  header: {
    homeAria: "Image to Layers ホーム",
    navAria: "メインメニュー",
    openMenu: "メニューを開く",
    pricing: "料金",
    signIn: "ログイン",
    startFree: "無料で試す",
    otherLocale: "English",
    otherLocaleAria: "英語版を見る",
  },
  langSwitch: { aria: "言語" },
  footer: {
    blurb:
      "商品画像・表紙・Live2D キャラクター・YouTube サムネイルのための AI レイヤー分解。分離し、背景を再構成し、書き出す。",
    legal: "プレビュー版のため、処理はシミュレーションです。",
    legalLinks: [
      { label: "AI の扱い", href: "/ai-transparency" },
      { label: "セキュリティ", href: "/security" },
      { label: "プライバシー", href: "/privacy" },
      { label: "利用規約", href: "/terms" },
    ],
    localeNote: "英語版のページです",
  },
  breadcrumbs: { home: "ホーム", aria: "パンくずリスト" },
  workbench: {
    studio: "レイヤースタジオ",
    sample: "サンプル",
    creditsPerRun: (n) => `${n} クレジット / 1回`,
    exportTag: "PNG · ZIP · PSD",
    dropTitle: "画像をドロップして分解",
    dropHint: "JPG・PNG・WebP／10MB まで／1回につき1枚",
    chooseFile: "ファイルを選ぶ",
    useSample: "サンプルを使う",
    browserOnly: "プレビュー版 · ファイルはブラウザ内に留まります",
    remove: "削除",
    levelLabel: "レイヤーレベル",
    whatAreLevels: "レベルとは",
    run: (n, done, running) =>
      running ? "分解しています…" : done ? "もう一度実行" : `レイヤーに分解 · ${n} cr`,
    exportPsd: "PSD を書き出す",
    stages: [
      "画像の構造を解析",
      "被写体とオブジェクトを検出",
      "前後関係を推定",
      "隠れた背景を再構成",
      "アルファマスクを生成",
      "レイヤー構成を書き出し",
    ],
    stackReady: "レイヤー構成ができました",
    outputPreview: "出力プレビュー",
    layersCount: (n) => `レイヤー · ${n}`,
    previewEmpty:
      "実行するとレイヤー構成が表示されます。各行がアルファマスク付きの透過 PNG 1枚に対応します。",
    downloadPng: "PNG をダウンロード",
    allLayers: "全レイヤー",
    footnote: "プレビュー版 · 分解はシミュレーションで、サンプルのレイヤーを表示します",
    levelGuide: "レイヤーレベルのガイド →",
    defaultNote: "輪郭を再構築した単独パーツ。",
    uploadAlt: (name) => `${name} を Image to Layers でレイヤー分解するためにアップロード`,
    toast: {
      badType: "この形式には対応していません。JPG・PNG・WebP をお使いください。",
      psd: "プレビュー版のため、PSD の書き出しは無効です。",
      png: "プレビュー版のため、PNG の書き出しは無効です。",
      zip: "プレビュー版のため、ZIP の書き出しは無効です。",
    },
  },
  canvas: {
    alt: (label, n) => `${label} を ${n} 個の編集可能なレイヤーに分解（Image to Layers）`,
    overlay: (size, n, level) => `${size} · ${n} レイヤー · ${level}`,
    hotspot: (n, name) => `レイヤー ${n}：${name}`,
  },
  stack: {
    title: "レイヤー構成の例",
    layers: (n) => `${n} レイヤー`,
    note: "奥行き順は保持されます。再構成された領域は推定で、元の画素ではありません。",
    separated: "分離済み",
    thumbAlt: (name, label) => `${label} から「${name}」を透過レイヤーとして抽出`,
  },
  demoStrip: {
    titles: {
      ecommerce: "商品画像",
      cover: "表紙・ポスター",
      live2d: "Live2D キャラクター",
      youtube: "YouTube サムネイル",
    },
    open: "開く →",
    layers: (n) => `${n} レイヤー`,
    alt: (label, n) => `${label} を ${n} 個の編集可能なレイヤーに分解（Image to Layers）`,
  },
  related: { open: "開く →", alt: (label) => `${label} の作例 — 画像をレイヤーに` },
  hub: {
    kicker: "このワークフロー内",
    title: (name) => `「${name}」のすべての作業`,
    lead: "同じレイヤーエンジン、違うチェックリスト。変更したい内容に合うものを選んでください。",
  },
  page: {
    faqKicker: "よくある質問",
    faqTitle: (name) => `「${name}」についてよくある質問`,
    relatedKicker: "関連ページ",
    relatedTitle: "次のステップ",
    ctaHeading: "自分の画像で試す",
    ctaBody:
      "アカウントなしでサンプルが読み込まれます。JPG・PNG・WebP をアップロードし、変更したい内容に合ったレベルを選んでください。",
    ctaPrimary: "レイヤースタジオを開く",
    ctaSecondary: "仕組みを見る",
    updated: (date) => `最終更新 ${date}。プレビュー版のため処理はシミュレーションです。`,
    openStudio: "レイヤースタジオを開く",
    layerLevels: "レイヤーレベル",
    sampleMeta: (n, size) => `サンプルは ${n} レイヤー · ${size}`,
  },
  cta: { startFree: "無料で試す" },
  studio: {
    chip: "プレビュー版 · 処理はシミュレーション",
    h1: "レイヤースタジオ",
    lead:
      "画像をドロップしてレベルを選ぶと、レイヤー構成を確認できます。プレビュー版ではファイルはブラウザ内に留まり、何もアップロードされません。表示されるレイヤーはサンプルのものです。",
    levelCta: "どのレベルを選べばいい？",
    levelsHeading: "レベルとクレジット",
    exportHeading: "書き出し形式",
    exportNote: "このプレビュー版では書き出しは無効です。",
    exportFormats: [
      { name: "透過PNG", note: "1レイヤー1ファイル、元の解像度" },
      { name: "ZIP（構成ごと）", note: "奥行き順と名前を含む全レイヤー" },
      { name: "レイヤー付きPSD", note: "Photoshop・Affinity・Photopea・GIMP で開けます" },
    ],
    assetsHeading: "サンプル素材",
    assetMeta: (level, n) => `${level} · ${n} レイヤー`,
    assetAlt: (label) => `${label} のサンプル（Image to Layers スタジオ）`,
  },
  levels: {
    L1: { short: "コア", range: "2〜4 レイヤー", credits: 30, blurb: "被写体と背景、そして実際に動かしたい1枚だけ。" },
    L2: { short: "標準", range: "4〜6 レイヤー", credits: 45, blurb: "商品と小物、再構成した背景。EC の標準設定。" },
    L3: { short: "詳細", range: "6〜9 レイヤー", credits: 60, blurb: "文字・図形・奥行きグループまで。表紙とサムネイル向け。" },
    L4: { short: "パーツ", range: "9 レイヤー以上", credits: 90, blurb: "髪・顔・目・服・手足。Live2D と Spine のリグ用パーツ。" },
  },
};

const copies: Record<Locale, UiCopy> = { en, ja };

export function uiCopy(locale: Locale): UiCopy {
  return copies[locale] ?? copies.en;
}

/** Name of the locale a visitor would switch *to*. */
export function otherLocale(locale: Locale): Locale {
  return locale === "ja" ? "en" : "ja";
}

export function htmlLang(locale: Locale) {
  return localeMeta[locale].htmlLang;
}
