import type { PageContent } from "./types";

export const levelPages: PageContent[] = [
  {
    slug: "layer-levels",
    cluster: "level",
    title: "Image to Layers — Layer Levels L1 to L4 Explained",
    description:
      "Image to Layers — four levels, four grouping targets: Core, Standard, Detailed and Character parts. Choose the level that matches your editing, not the maximum.",
    h1: "Image to Layers: L1 to L4 layer levels, and how deep to split",
    eyebrow: "Levels · L1 to L4",
    intro: [
      "More layers are not better layers. Past the number of genuine editing decisions in an image, extra layers fill up with duplicates, fragments and background residue that nobody wants to edit.",
      "Levels turn that judgement into an explicit choice: four targets, each matched to a type of work rather than to an arbitrary count.",
    ],
    demo: "ecommerce",
    level: "L2",
    sections: [
      {
        id: "four",
        heading: "The four levels",
        body: [
          "Each level changes what the model groups, not just how many pieces it returns. L1 asks for a minimal viable structure; L2 asks for a commercial scene; L3 asks for a layout with type and graphics; L4 asks for anatomy.",
        ],
        table: {
          head: ["Level", "Layers", "Target", "Credits per run"],
          rows: [
            ["L1 Core", "2–4", "Subject, background, one extra", "30"],
            ["L2 Standard", "4–6", "Product scene, cover, podcast art", "45"],
            ["L3 Detailed", "6–9", "Thumbnails, posters, ad creative", "60"],
            ["L4 Character parts", "9+", "Live2D, Spine, rigging prep", "90"],
          ],
        },
      },
      {
        id: "choose",
        heading: "How to choose in ten seconds",
        body: [
          "Ask one question: **what will I change?** Count the answers. One thing to move, plus a background that has to survive the move, is L1. A product plus three props plus a backdrop is L2. If the list includes text regions or graphic devices, it is L3. If the list is anatomy, it is L4.",
          "The count you get from that question is almost always the right level. The count you get from counting visible objects is almost always too high.",
        ],
        bullets: [
          { title: "One asset to reuse", text: "L1 — extract it and keep the plate." },
          { title: "New composition, same product", text: "L2 — product, props, surface, backdrop." },
          { title: "Copy or layout change", text: "L3 — text and graphic regions must be separate." },
          { title: "Rigging or animation", text: "L4 — anatomy is the unit, not the object." },
        ],
      },
      {
        id: "over-split",
        heading: "What over-splitting actually looks like",
        body: [
          "Run a five-group product scene at ten layers and you do not get ten useful assets. You get the bottle twice, a translucent sheet of backdrop attached to a prop, a layer containing half a leaf and half a wall, and three fragments too small to name.",
          "The output still reports ten layers, which is why layer count is a poor quality proxy. What matters is whether each layer corresponds to a decision you would actually make.",
        ],
        note: "If two returned layers would always be edited together, they should have been one layer. If one returned layer contains two elements you need to move separately, split that layer again instead of re-running everything.",
      },
      {
        id: "progressive",
        heading: "The progressive workflow",
        body: [
          "The reliable pattern is a stable first pass plus targeted second passes. Separate at the level the scene supports, review the stack, then re-split only the layers that still mix two editing decisions.",
          "This is cheaper and produces better results than asking for maximum detail up front — a five-layer first pass that gets two targeted re-splits beats a ten-layer first pass almost every time.",
        ],
        steps: [
          { title: "First pass at the natural level", text: "Usually L2 for scenes, L3 for layouts, L4 for characters." },
          { title: "Review the stack", text: "Look for layers that combine two unrelated edit decisions." },
          { title: "Re-split selectively", text: "Only the mixed layers, not the whole image." },
          { title: "Export the final set", text: "The finished asset count can exceed the first-pass level." },
        ],
      },
    ],
    faq: [
      {
        q: "Does a higher level cost more?",
        a: "Yes — 30, 45, 60 and 90 credits per run for L1 through L4. That pricing exists to discourage over-asking, not to upsell: the cheapest run is the one you do not have to repeat.",
      },
      {
        q: "Can I change the level after a run?",
        a: "You can re-run at a different level, but a targeted re-split of one mixed layer is usually cheaper and cleaner than reprocessing the whole image.",
      },
      {
        q: "What if I do not know which level to pick?",
        a: "Start at L2 for photographs and product scenes, L3 for anything with legible type, and L4 only for characters intended for rigging. The recommendation shown in the tool follows the image type you selected.",
      },
      {
        q: "Does the level change the model?",
        a: "It changes the grouping target and the depth of separation. Character parts uses a different workflow optimised for anatomy; the other three share the scene model at different grouping granularities.",
      },
      {
        q: "Can a final project have more layers than the level I chose?",
        a: "Yes. A five-layer first pass with two targeted re-splits can end up with nine assets. What matters is that every additional split corresponds to a real editing need.",
      },
    ],
    related: ["layer-levels/core", "layer-levels/standard", "layer-levels/detailed", "layer-levels/character-parts"],
    updated: "2026-11-11",
  },

  {
    slug: "layer-levels/core",
    cluster: "level",
    title: "Image to Layers — L1 Core: 2 to 4 Layers, Fast Reuse",
    description:
      "Image to Layers — L1 Core returns two to four layers: the subject, a reconstructed background, and at most one extra group. The cheapest, most predictable level.",
    h1: "Image to Layers: L1 Core, two to four layers",
    eyebrow: "Level L1 · 30 credits",
    intro: [
      "Core is the level for people who already know what they want to change. It returns the minimum viable structure: the subject on transparency, a background rebuilt behind it, and one extra group only if the image genuinely has one.",
      "That is enough for most extraction, overlay and compositing work — and it is the level least likely to produce something you have to clean up.",
    ],
    demo: "ecommerce",
    level: "L1",
    tool: true,
    sections: [
      {
        id: "what",
        heading: "What you get",
        body: [
          "A subject layer with a clean alpha edge, a full-bleed reconstructed background, and — when the image has an obvious second object — one more group. Nothing else. No text regions, no per-prop separation, no depth fragmentation.",
        ],
        bullets: [
          { title: "Subject", text: "The dominant object, person or product." },
          { title: "Background", text: "Full-bleed, with occluded areas estimated." },
          { title: "Optional extra", text: "A second prominent object, if one clearly exists." },
        ],
      },
      {
        id: "when",
        heading: "When Core is the right call",
        body: [
          "Core is right when the destination is a composite rather than an edit: an overlay on a video, a product on a marketplace canvas, a person dropped into a presentation. In all of those cases you need the subject and nothing else, and the base plate is a bonus.",
          "It is also the right level for a first look at an unfamiliar image. If the result suggests more structure than you expected, re-run or re-split with that knowledge.",
        ],
        table: {
          head: ["Task", "Core enough?"],
          rows: [
            ["Product on white", "Yes"],
            ["Person in a slide deck", "Yes"],
            ["New background behind a subject", "Yes"],
            ["Moving two props independently", "No — use L2"],
            ["Changing headline copy", "No — use L3"],
          ],
        },
      },
      {
        id: "limits",
        heading: "Where Core stops being enough",
        body: [
          "The moment you need two objects to move independently, Core is the wrong level and L2 is cheaper than fixing a merged layer afterwards. The same applies to any image with legible text you might want to remove.",
        ],
        note: "If you find yourself masking inside a Core output, the level was wrong — not the separation.",
      },
    ],
    faq: [
      {
        q: "How many layers does Core return?",
        a: "Two to four: subject, reconstructed background, and up to two extra groups when the image clearly contains them.",
      },
      {
        q: "Is Core just background removal?",
        a: "No. A remover discards the scene; Core returns a reconstructed background layer, which is what lets the subject move without leaving a hole.",
      },
      {
        q: "Can I upgrade a Core output later?",
        a: "You can re-run at L2, or split the subject layer if it contains a second object you now need separately.",
      },
      {
        q: "What does Core cost?",
        a: "30 credits per run — the lowest of the four levels.",
      },
      {
        q: "Does Core handle text?",
        a: "It leaves text fused into whichever layer it sits on. If text removal is a requirement, use L3.",
      },
    ],
    related: ["layer-levels", "layer-levels/standard", "image-to-layers", "extract-layers-from-image"],
    updated: "2026-11-11",
  },

  {
    slug: "layer-levels/standard",
    cluster: "level",
    title: "Image to Layers — L2 Standard: 4 to 6 Layers",
    description:
      "Image to Layers — L2 Standard returns four to six layers: hero subject, props, surface and shadow group, and a rebuilt backdrop. The default for commercial scenes.",
    h1: "Image to Layers: L2 Standard, four to six layers",
    eyebrow: "Level L2 · 45 credits",
    intro: [
      "Standard is the working default. It matches the anatomy of a commercial photograph — one hero object, a few props, a surface, a backdrop — and stops there.",
      "It is also the level that survives a category page: consistent, predictable, and cheap enough to run across a catalogue.",
    ],
    demo: "ecommerce",
    level: "L2",
    tool: true,
    sections: [
      {
        id: "what",
        heading: "What you get",
        body: [
          "A hero subject, individual supporting props, a surface and shadow group, and a full-bleed reconstructed backdrop. In practice that means you can rebuild the entire composition without touching the original photograph again.",
        ],
        bullets: [
          { title: "Hero subject", text: "Product, person or character, clean alpha edge." },
          { title: "Supporting props", text: "Each independent, each deletable." },
          { title: "Surface and shadows", text: "Grouped so the scene stays grounded after a move." },
          { title: "Reconstructed backdrop", text: "Complete behind the subject, not holed." },
        ],
      },
      {
        id: "why-default",
        heading: "Why it is the default for e-commerce",
        body: [
          "Product photography has a stable structure, and stability is what a catalogue needs. Locking L2 across a set produces a consistent stack shape per SKU, which makes downstream templates possible.",
          "It is also the level where the model's grouping is most reliable. Fewer groups means fewer ambiguous boundaries, and ambiguous boundaries are where separation fails.",
        ],
        table: {
          head: ["Use case", "L2 fit"],
          rows: [
            ["Marketplace main image", "Ideal"],
            ["Lifestyle secondary image", "Ideal"],
            ["Book or podcast cover without type changes", "Good"],
            ["Bundle with four products", "Too shallow — use L3"],
            ["Thumbnail with a headline", "Too shallow — use L3"],
          ],
        },
      },
      {
        id: "review",
        heading: "Reviewing an L2 output",
        body: [
          "Hide everything except the backdrop. If the scene still reads as a plausible photograph, the reconstruction worked. If the area behind the product looks smeared or repetitive, that region needs real photography or a designed replacement.",
          "Then check the props: each should be independently movable without dragging a strip of the surface with it. A prop that carries residue needs one targeted re-split.",
        ],
      },
    ],
    faq: [
      {
        q: "How many layers does Standard return?",
        a: "Four to six, depending on how many distinct props the scene contains.",
      },
      {
        q: "Is Standard enough for a book cover?",
        a: "Only if you are not changing the type. Once text needs to move or change, L3 is required.",
      },
      {
        q: "Can I run a whole catalogue at L2?",
        a: "That is the intended pattern. Lock the level across the set so every SKU produces the same stack shape.",
      },
      {
        q: "What does Standard cost?",
        a: "45 credits per run.",
      },
      {
        q: "What if my scene has more props than Standard returns?",
        a: "Name the props explicitly, or move to L3. If two props are fused in one layer, split that layer rather than re-running the whole image.",
      },
    ],
    related: ["layer-levels", "layer-levels/detailed", "product-image-to-layers", "image-to-psd"],
    updated: "2026-11-11",
  },

  {
    slug: "layer-levels/detailed",
    cluster: "level",
    title: "Image to Layers — L3 Detailed: 6 to 9 Layers",
    description:
      "Image to Layers — L3 Detailed isolates text regions, graphic devices and depth groups on top of the scene structure. Built for thumbnails, posters and ad creative.",
    h1: "Image to Layers: L3 Detailed, six to nine layers",
    eyebrow: "Level L3 · 60 credits",
    intro: [
      "Detailed is the level for layouts rather than photographs. It separates the scene and then goes further, isolating the type blocks and graphic devices that a redesign actually needs to touch.",
      "If your next edit involves words or arrows, this is the level.",
    ],
    demo: "youtube",
    level: "L3",
    tool: true,
    sections: [
      {
        id: "what",
        heading: "What you get",
        body: [
          "Everything L2 returns, plus isolated text regions and separate graphic devices: arrows, circles, frames, stickers, highlight shapes. Depth groups that would otherwise merge — foreground glow, a distant panel — also come apart.",
        ],
        bullets: [
          { title: "Text regions", text: "Each legible block isolated with a measured footprint." },
          { title: "Graphic devices", text: "Arrows, badges, frames, stickers." },
          { title: "Depth groups", text: "Foreground effects separated from the mid-ground." },
          { title: "Scene structure", text: "Subject, props and reconstructed backdrop, as at L2." },
        ],
      },
      {
        id: "text-boundary",
        heading: "What a text region is, exactly",
        body: [
          "A text region is a raster layer containing the glyph-shaped pixels, with the background behind them estimated. It is not live text and it cannot be retyped — but it can be hidden, moved, deleted or replaced.",
          "That covers the majority of real redesign work, which is: remove the old words, put new words in the same place, keep everything else identical.",
        ],
        note: "Record the bounding box and x-height before hiding a text region. Those two numbers are what let a replacement fill the same optical space.",
      },
      {
        id: "when",
        heading: "When Detailed is worth the extra credits",
        body: [
          "Use L3 when the copy, the layout or the graphic devices might change. Skip it when the job is a product swap on an unchanged background — L2 does that for 15 fewer credits and with fewer boundaries to review.",
        ],
        table: {
          head: ["Job", "Level"],
          rows: [
            ["Replace a thumbnail headline", "L3"],
            ["Re-title a poster for a new date", "L3"],
            ["Localise an ad", "L3"],
            ["Swap a product background", "L2"],
            ["Extract a single object", "L1"],
          ],
        },
      },
    ],
    faq: [
      {
        q: "How many layers does Detailed return?",
        a: "Six to nine, depending on how many distinct text blocks and graphic devices the layout contains.",
      },
      {
        q: "Can I edit the text characters?",
        a: "No. Text regions are raster. You replace the region with new type rather than editing the original glyphs.",
      },
      {
        q: "What does Detailed cost?",
        a: "60 credits per run.",
      },
      {
        q: "Will every text block be separated?",
        a: "Visually distinct blocks usually are. Tiny or tightly tracked copy may merge into a neighbouring region — naming the block improves the split.",
      },
      {
        q: "Does L3 help with glow and effects?",
        a: "Yes. Foreground light effects separate more often at L3 than at L2, though soft additive glow remains the hardest element to assign.",
      },
    ],
    related: ["layer-levels", "layer-levels/standard", "layer-levels/character-parts", "youtube-thumbnail-to-layers"],
    updated: "2026-11-11",
  },

  {
    slug: "layer-levels/character-parts",
    cluster: "level",
    title: "Image to Layers — L4 Character Parts for Rigging",
    description:
      "Image to Layers — L4 Character parts targets anatomy: hair sections, face, eyes, mouth, clothing, limbs and accessories, with rebuilt areas behind overlaps.",
    h1: "Image to Layers: L4 Character parts, anatomy as the unit",
    eyebrow: "Level L4 · 90 credits",
    intro: [
      "Character parts is the only level that deliberately returns more layers than the image's natural group count, because a rig does not want objects — it wants deformable parts.",
      "The output is the input to a Live2D or Spine session: named, ordered, transparent PNGs plus a PSD master.",
    ],
    demo: "live2d",
    level: "L4",
    tool: true,
    sections: [
      {
        id: "what",
        heading: "What you get",
        body: [
          "Hair split into front, side and back where the design allows; a face plane; eyes; mouth where it is drawn distinctly; clothing as separate garments; limbs and shoes; and accessories isolated even when they overlap the body.",
        ],
        bullets: [
          { title: "Hair sections", text: "Front bangs, side locks, back mass, ahoge." },
          { title: "Face parts", text: "Face plane, eyes, brows, mouth, blush." },
          { title: "Garments", text: "Coat, top, shorts, stockings — one per deformable group." },
          { title: "Accessories", text: "Horns, ears, ribbons, tail, weapons." },
        ],
      },
      {
        id: "trade",
        heading: "The trade-off you are accepting",
        body: [
          "At this level, quality per boundary drops. Thin hair strands may end up on the face layer, a ribbon may merge with a collar, and very small parts may fragment.",
          "That is expected. Rigging work always includes an edge pass; the value here is that the edge pass happens on a named, ordered stack instead of on a flattened illustration.",
        ],
        note: "Budget one manual cleanup pass on hair and small accessories. If you need zero cleanup, you are describing a hand-cut job, not a model output.",
      },
      {
        id: "naming",
        heading: "Name the parts, then name the layers",
        body: [
          "Naming in the instruction field changes the output more at L4 than anywhere else. “Split hair, face, eyes, jacket, shorts, legs, boots, tail” gives the model a target list; an empty field lets it guess which boundaries are anatomical.",
          "After export, rename to your rigging convention — group first, side last, depth in the stack. Our [naming guide](/guides/live2d-layer-naming) has the pattern.",
        ],
      },
    ],
    faq: [
      {
        q: "How many layers should I expect?",
        a: "Nine or more. A simple character lands around ten; a detailed design with multiple hair sections, layered clothing and accessories can reach twenty.",
      },
      {
        q: "Is this level only for anime characters?",
        a: "It is optimised for illustrated characters. Photographic portraits also work but return fewer anatomical parts, since photographic detail rarely has clean boundaries between face, hair and clothing.",
      },
      {
        q: "What does Character parts cost?",
        a: "90 credits per run — the highest level, because it produces the most boundaries.",
      },
      {
        q: "Will hidden anatomy be complete enough to rig?",
        a: "For moderate deformation, usually. For large rotations you should expect to paint the hidden regions yourself.",
      },
      {
        q: "Can I use the output directly in Cubism?",
        a: "Yes. Transparent PNGs import directly; the PSD master is for future edits. Meshing and weighting still happen in Cubism.",
      },
    ],
    related: ["layer-levels", "live2d-character-to-layers", "guides/live2d-layer-naming", "layer-levels/detailed"],
    updated: "2026-11-11",
  },
];
