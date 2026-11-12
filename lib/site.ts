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
