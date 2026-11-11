import type { DemoKey } from "./types";

export type LayerHotspot = {
  n: number;
  name: string;
  kind: string;
  z: number;
  bbox: { x: number; y: number; w: number; h: number };
  note?: string;
  full?: boolean;
};

export type DemoAsset = {
  key: DemoKey;
  label: string;
  src: string;
  /** 1200×630 social card for this scene (never the raw demo image). */
  og: string;
  width: number;
  height: number;
  size: string;
  level: "L1" | "L2" | "L3" | "L4";
  credits: number;
  layers: LayerHotspot[];
};

export const demoAssets: Record<DemoKey, DemoAsset> = {
  ecommerce: {
    key: "ecommerce",
    label: "Skincare set",
    src: "/demo/ecommerce.webp",
    og: "/brand/og-ecommerce.png",
    width: 1024,
    height: 968,
    size: "1024 × 968",
    level: "L2",
    credits: 45,
    layers: [
      { n: 8, name: "Serum bottle", kind: "Product", z: 8, bbox: { x: 38, y: 21, w: 17, h: 42 }, note: "Frosted glass, black dropper cap" },
      { n: 7, name: "Stone pedestal", kind: "Prop", z: 7, bbox: { x: 28, y: 52, w: 37, h: 21 }, note: "Porous travertine riser" },
      { n: 6, name: "Ceramic bowl", kind: "Prop", z: 6, bbox: { x: 54, y: 59, w: 27, h: 24 }, note: "Matte white glaze" },
      { n: 5, name: "Waffle towel", kind: "Prop", z: 5, bbox: { x: 6, y: 56, w: 29, h: 25 }, note: "Folded woven cotton" },
      { n: 4, name: "Monstera leaf", kind: "Foliage", z: 4, bbox: { x: 52, y: 6, w: 44, h: 55 }, note: "Backlit leaf, hard edge" },
      { n: 3, name: "Cast shadows", kind: "Light", z: 3, bbox: { x: 4, y: 62, w: 92, h: 34 }, note: "Separable soft shadow group" },
      { n: 2, name: "Plaster backdrop", kind: "Background", z: 2, bbox: { x: 0, y: 0, w: 100, h: 100 }, full: true, note: "Reconstructed behind the bottle" },
    ],
  },
  cover: {
    key: "cover",
    label: "Editorial cover",
    src: "/demo/cover.webp",
    og: "/brand/og-cover.png",
    width: 1024,
    height: 1452,
    size: "1024 × 1452",
    level: "L3",
    credits: 60,
    layers: [
      { n: 6, name: "Silhouette figure", kind: "Subject", z: 6, bbox: { x: 44, y: 19, w: 28, h: 58 }, note: "Flat vector figure, raised arm" },
      { n: 5, name: "Circle field", kind: "Graphic", z: 5, bbox: { x: 6, y: 7, w: 86, h: 56 }, note: "Ochre disc with grain" },
      { n: 4, name: "Torn paper strip", kind: "Texture", z: 4, bbox: { x: 19, y: 4, w: 77, h: 29 }, note: "Ripped edge overlays the disc" },
      { n: 3, name: "Grid overlay", kind: "Graphic", z: 3, bbox: { x: 3, y: 3, w: 94, h: 92 }, note: "Repeating hairline grid" },
      { n: 2, name: "Bottom colour block", kind: "Graphic", z: 2, bbox: { x: 0, y: 72, w: 100, h: 28 }, note: "Teal base panel" },
      { n: 1, name: "Paper background", kind: "Background", z: 1, bbox: { x: 0, y: 0, w: 100, h: 100 }, full: true, note: "Reconstructed paper grain" },
    ],
  },
  live2d: {
    key: "live2d",
    label: "Rig-ready character",
    src: "/demo/live2d.webp",
    og: "/brand/og-live2d.png",
    width: 657,
    height: 1336,
    size: "657 × 1336",
    level: "L4",
    credits: 90,
    layers: [
      { n: 9, name: "Front hair", kind: "Parts", z: 9, bbox: { x: 18, y: 2, w: 53, h: 38 }, note: "Bangs, side locks, long silver strands" },
      { n: 8, name: "Horns & star clip", kind: "Parts", z: 8, bbox: { x: 24, y: 1, w: 40, h: 8 }, note: "Two curved horns plus star charm" },
      { n: 7, name: "Face", kind: "Parts", z: 7, bbox: { x: 37, y: 9, w: 20, h: 11 }, note: "Head base and skin plane" },
      { n: 6, name: "Eyes", kind: "Parts", z: 6, bbox: { x: 38, y: 12, w: 18, h: 6 }, note: "Iris, highlight, lash line" },
      { n: 5, name: "Outer coat", kind: "Parts", z: 5, bbox: { x: 2, y: 17, w: 89, h: 35 }, note: "White and teal haori, black sleeves" },
      { n: 4, name: "Top & bow belt", kind: "Parts", z: 4, bbox: { x: 32, y: 17, w: 31, h: 23 }, note: "Black crop top with yellow bow" },
      { n: 3, name: "Legs & stocking", kind: "Parts", z: 3, bbox: { x: 29, y: 48, w: 34, h: 29 }, note: "One bare leg, one thigh-high" },
      { n: 2, name: "Boots", kind: "Parts", z: 2, bbox: { x: 29, y: 76, w: 34, h: 22 }, note: "Laced high-tops, mismatched colour" },
      { n: 1, name: "Tail", kind: "Parts", z: 1, bbox: { x: 58, y: 60, w: 41, h: 29 }, note: "Thin tail with two ribbon ties" },
      { n: 0, name: "Flat white background", kind: "Background", z: 0, bbox: { x: 0, y: 0, w: 100, h: 100 }, full: true, note: "Dropped before rigging" },
    ],
  },
  youtube: {
    key: "youtube",
    label: "Thumbnail",
    src: "/demo/youtube.webp",
    og: "/brand/og-youtube.png",
    width: 1536,
    height: 968,
    size: "1536 × 968",
    level: "L3",
    credits: 60,
    layers: [
      { n: 6, name: "Headline text", kind: "Text", z: 6, bbox: { x: 3, y: 18, w: 58, h: 43 }, note: "Rendered glyphs, not live text" },
      { n: 5, name: "Presenter", kind: "Subject", z: 5, bbox: { x: 61, y: 7, w: 31, h: 89 }, note: "Cutout with hand gesture" },
      { n: 4, name: "Red arrow", kind: "Graphic", z: 4, bbox: { x: 11, y: 53, w: 47, h: 31 }, note: "Directional pointer" },
      { n: 3, name: "Yellow shape", kind: "Graphic", z: 3, bbox: { x: 88, y: 9, w: 12, h: 72 }, note: "Frame accent panel" },
      { n: 2, name: "Glow + vignette", kind: "Light", z: 2, bbox: { x: 0, y: 0, w: 100, h: 100 }, full: true, note: "Atmosphere layer" },
      { n: 1, name: "Gradient background", kind: "Background", z: 1, bbox: { x: 0, y: 0, w: 100, h: 100 }, full: true, note: "Reconstructed behind subject" },
    ],
  },
};

export const levelMeta = {
  L1: { label: "Core", range: "2–4 layers", credits: 30, blurb: "Subject, background, and the one thing you actually need to move." },
  L2: { label: "Standard", range: "4–6 layers", credits: 45, blurb: "Main product plus props plus a rebuilt background. The e-commerce default." },
  L3: { label: "Detailed", range: "6–9 layers", credits: 60, blurb: "Text regions, graphics, and depth groups for cover and thumbnail work." },
  L4: { label: "Character parts", range: "9+ layers", credits: 90, blurb: "Hair, face, eyes, clothing, limbs — rig-ready parts for Live2D and Spine." },
} as const;
