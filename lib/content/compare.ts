import type { PageContent } from "./types";

export const comparePages: PageContent[] = [
  {
    slug: "compare/remove-bg-vs-image-to-layers",
    cluster: "compare",
    title: "Background Removal vs Editable Layers — Which Output Do You Need?",
    description:
      "A transparent PNG and a layer stack solve different problems. Compare what each produces, what each costs, and how to tell which one your job actually requires.",
    h1: "Background removal or editable layers?",
    eyebrow: "Comparison",
    intro: [
      "They look similar in a marketing screenshot and behave nothing alike in production. One gives you a subject on transparency and discards the scene; the other reconstructs the scene so the subject can move.",
      "The right choice depends on a single question: will anything else in the image need to change?",
    ],
    demo: "ecommerce",
    sections: [
      {
        id: "output",
        heading: "What each one actually produces",
        body: [
          "A background remover returns one file: the subject, alpha-cut, on transparency. The scene is gone. If you later need the surface the product stood on, it no longer exists.",
          "Layer separation returns a stack: subject, props, surface and a **reconstructed** base plate. The scene survives as an editable layer, which is the entire difference.",
        ],
        table: {
          head: ["", "Background removal", "Layer separation"],
          rows: [
            ["Files returned", "One cutout", "Stack of layers + base"],
            ["Background", "Deleted", "Reconstructed as a layer"],
            ["Move the subject", "Leaves a hole", "Base plate already fills it"],
            ["Multiple objects", "One subject only", "Each object independent"],
            ["Text regions", "Fused into the cutout", "Isolated at L3"],
            ["Typical cost", "Lowest", "2–4× a cutout"],
          ],
        },
      },
      {
        id: "cost",
        heading: "Cost per usable asset, not per run",
        body: [
          "A cutout is cheaper per run and often more expensive per finished asset, because the moment the composition changes you need a new run — or an hour of manual masking.",
          "Separation costs more up front and then pays back on every reuse: a second background, a third crop, a new headline. If an asset will be reused more than twice, the maths usually favours layers.",
        ],
        bullets: [
          { title: "One-off overlay", text: "Cutout wins — you will never need the scene again." },
          { title: "Marketplace listing", text: "Cutout is often enough, layers if you also need lifestyle images." },
          { title: "Campaign with variants", text: "Layers, clearly — the props and backdrop are reused every time." },
          { title: "Rigging or animation", text: "Layers only; a cutout is unusable for deformation." },
        ],
      },
      {
        id: "decide",
        heading: "A three-question test",
        body: [
          "Answer these honestly and the choice makes itself.",
        ],
        steps: [
          { title: "Will the subject ever move?", text: "If yes, you need the reconstructed plate — that is separation." },
          { title: "Does anything else in the image matter?", text: "Props, surface, background texture. If yes, a cutout destroys them." },
          { title: "Is there legible text?", text: "If you might change it, you need L3, which no cutout tool provides." },
        ],
        note: "If all three answers are no, use a background remover. Paying for layers you will never open is not sophistication.",
      },
      {
        id: "quality",
        heading: "Edge quality is not the differentiator",
        body: [
          "People expect the layer tool to cut better edges. It does not, reliably — a dedicated remover is often slightly cleaner on hair and fur because that is the only problem it solves.",
          "The differentiator is **structure**. Judge these tools on what survives the cut, not on how pretty the cutout is at 100%.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I get a plain transparent PNG here?",
        a: "Yes. Run at L1 and use the subject layer only — you get the same output as a remover, plus a reconstructed background you can ignore.",
      },
      {
        q: "Is layer separation always better?",
        a: "No. For a single overlay asset it is slower and more expensive than a remover. It wins when the scene, the props or the text need to survive.",
      },
      {
        q: "Why does reconstruction matter for e-commerce?",
        a: "Because a product photo is reused across listings, ads and campaigns. Once the product moves, the surface and backdrop have to exist independently or the hole shows.",
      },
      {
        q: "Which is better for hair and fur?",
        a: "A dedicated background remover is often marginally cleaner on very fine detail. If hair is the only concern and the scene does not matter, use the specialist.",
      },
      {
        q: "Can I use both in one workflow?",
        a: "Yes, and many teams do: a remover for bulk cutouts, separation for the assets that will be recomposed or rigged.",
      },
    ],
    related: ["image-to-layers", "image-layer-separator", "layer-levels/core", "product-image-to-layers"],
    updated: "2026-11-11",
  },

  {
    slug: "compare/canva-magic-layers-alternative",
    cluster: "compare",
    title: "Canva Magic Layers Alternative — When You Need a Real Exportable Stack",
    description:
      "Magic Layers separates elements inside Canva. If you need layered PSD export, named layers, depth order and rig-ready parts, here is how the two approaches differ.",
    h1: "Canva Magic Layers vs a real layer export",
    eyebrow: "Comparison",
    intro: [
      "Canva's Magic Layers is genuinely useful inside Canva: it turns a flat image into movable elements you can rearrange on a design. It is not a layer export tool, and the difference shows up the moment the file leaves the editor.",
      "This page is a fair comparison, including the cases where Canva is the better answer.",
    ],
    demo: "cover",
    sections: [
      {
        id: "scope",
        heading: "Inside the editor vs outside the editor",
        body: [
          "Magic Layers exists to keep you designing in Canva. The output is a set of movable elements in a Canva design — not a PSD, not named layers on disk, and not depth-sorted for an animation pipeline.",
          "Layer separation exists to produce a file. The output is PNGs, a ZIP and a layered PSD that opens in Photoshop, Affinity, Cubism or Spine.",
        ],
        table: {
          head: ["", "Magic Layers", "Image Layers"],
          rows: [
            ["Output", "Elements inside a Canva design", "PNG, ZIP, layered PSD"],
            ["Layer names", "Generic", "Semantic, preserved"],
            ["Depth order", "Visual stacking in the editor", "z-index preserved on export"],
            ["Rigging-ready parts", "Not the target", "L4 character parts"],
            ["Leaves the app", "Rendered image only", "Full stack"],
          ],
        },
      },
      {
        id: "choose-canva",
        heading: "When Canva is the right answer",
        body: [
          "If the destination is a social post, a presentation or a Canva template, staying inside Canva is faster and avoids a round trip through a file system. The separation is a means to a layout, not a deliverable.",
          "Teams already standardised on Canva should not adopt a separate tool just to prove a point — use Magic Layers for in-app edits and keep a layer tool for the assets that have to leave.",
        ],
        bullets: [
          { title: "Social posts", text: "Compose and publish inside Canva; no file handoff needed." },
          { title: "Template editing", text: "Rearrange an existing design without exporting." },
          { title: "Non-designers", text: "Familiar interface beats a richer file format." },
        ],
      },
      {
        id: "choose-layers",
        heading: "When you need a real stack",
        body: [
          "Four situations push teams out of the editor: a client wants a PSD, an animator needs rig-ready parts, a print pipeline needs CMYK at trim size, or a marketplace needs a specific export. In each case the file matters more than the editor.",
        ],
        bullets: [
          { title: "Designer handoff", text: "Named layers in a PSD, editable in any tool." },
          { title: "Animation and rigging", text: "Part-level separation with depth order." },
          { title: "Print", text: "Full-resolution layers, converted downstream." },
          { title: "Marketplace specs", text: "Exact pixel dimensions from the stack, not a screenshot." },
        ],
        note: "Rule of thumb: if the deliverable is a link, Canva. If the deliverable is a file someone else opens, you need an exportable stack.",
      },
      {
        id: "quality",
        heading: "On output quality",
        body: [
          "Both approaches estimate the area behind an element, and both produce fragments if you ask for more elements than the image contains. Neither is magic.",
          "What differs is control: an explicit level (L1–L4), an instruction field for naming targets, and an export that keeps structure. That control matters when the result has to survive a review cycle.",
        ],
      },
    ],
    faq: [
      {
        q: "Does Magic Layers export a PSD?",
        a: "Not as of our last check — it produces movable elements inside a Canva design. If you need a PSD on disk, that is a different workflow.",
      },
      {
        q: "Is Canva cheaper?",
        a: "Canva bundles separation into a broader subscription. If you already pay for Canva and only need in-app edits, the marginal cost here is real; if you need PSD or rig-ready output, Canva is not a substitute.",
      },
      {
        q: "Can I use both?",
        a: "Yes, and it is a sensible split: Canva for in-app composition, a layer tool for files that leave the editor.",
      },
      {
        q: "Which is better for character rigging?",
        a: "This one, by a wide margin. Anatomy-level separation and depth order are requirements that in-editor element splitting does not target.",
      },
      {
        q: "Do you support Canva files directly?",
        a: "No. Export the design as a flat PNG at the highest available resolution and separate that.",
      },
    ],
    related: ["image-to-layers", "image-to-psd", "compare/remove-bg-vs-image-to-layers", "layer-levels"],
    updated: "2026-11-11",
  },
];
