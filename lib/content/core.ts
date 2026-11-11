import type { PageContent } from "./types";

export const corePages: PageContent[] = [
  {
    slug: "image-to-layers",
    cluster: "core",
    title: "Image to Layers — Separate a Flat Image into Editable Layers",
    description:
      "Image to Layers — upload a JPG, PNG or WebP and get editable layers back: subject, props, text regions and a rebuilt background. Pick L1–L4, export PNG or PSD.",
    h1: "Image to Layers: turn one flat image into editable layers",
    eyebrow: "Image to layers",
    intro: [
      "A finished image is a dead end. Everything you might want to move, resize, restyle or delete is fused into one rectangle of pixels, and the file you were handed has no memory of how it was built.",
      "Image to Layers puts that structure back. Upload a flat JPG, PNG or WebP and the model separates the visible elements into independent layers — then estimates what was hidden behind each one, so the background you get back is complete rather than full of holes.",
    ],
    demo: "ecommerce",
    tool: true,
    sections: [
      {
        id: "what-you-get",
        heading: "What comes back, layer by layer",
        lead: "Not a transparent cutout with a missing centre — a stack you can keep editing.",
        body: [
          "A background remover returns one subject on transparency and throws the rest away. Layer separation returns a **stack**: the product, the props around it, the surface it sits on, any legible text or graphic marks, and a base layer holding the reconstructed scene.",
          "The difference matters the moment you need a second version. With a cutout, moving the product leaves a silhouette-shaped hole where it used to be. With layers, the base plate already contains a plausible continuation of the wall, table or gradient that was behind the product, so the hole never appears.",
        ],
        bullets: [
          { title: "Semantic groups, not colour regions", text: "Objects are grouped the way a designer would group them — the bottle is one layer, not eleven colour bands." },
          { title: "Alpha edges worth using", text: "Masks are cleaned at the boundary so glass, hair and thin props do not carry a grey fringe." },
          { title: "Depth order preserved", text: "Each layer keeps a z-index, which is what makes parallax and rigging work without manual sorting." },
          { title: "One background, rebuilt", text: "The base layer is generated where content was occluded, and flagged as an estimate rather than original pixels." },
        ],
      },
      {
        id: "depth",
        heading: "Pick a split depth before you pick a tool",
        lead: "The most common mistake is asking for more layers than the image can support.",
        body: [
          "Every image has a natural number of independently editable groups. A logo has two or three. A studio product shot usually has five or six. A crowded thumbnail can carry eight before the model starts inventing duplicates.",
          "Image to Layers exposes that choice directly as four levels, from **L1 Core** (2–4 layers) up to **L4 Character parts** (hair, face, eyes, clothing, limbs). Each level is a different target rather than a different slider, and the credit cost scales with the work involved.",
        ],
        bullets: [
          { title: "L1 Core · 2–4 layers", text: "Subject, background, and the one element you actually need to move. Fastest, cheapest, hardest to get wrong." },
          { title: "L2 Standard · 4–6 layers", text: "The default for product photos and covers: main subject, supporting props, backdrop." },
          { title: "L3 Detailed · 6–9 layers", text: "Text regions, arrows, stickers and depth planes for thumbnails and busy layouts." },
          { title: "L4 Character parts · 9+ layers", text: "Rig-oriented anatomy split for Live2D and Spine preparation." },
        ],
        note: "If the first pass leaves two elements fused in one layer, split that layer again instead of re-running the whole image at a higher level. See [how many layers you actually need](/guides/how-many-layers).",
      },
      {
        id: "steps",
        heading: "Upload to export in four steps",
        steps: [
          { title: "Upload the source", text: "JPG, PNG or WebP up to 10 MB. One image per run, no account needed for the layer preview." },
          { title: "Choose a level", text: "Leave the recommendation on if you are unsure — it is set from the image type you selected." },
          { title: "Review the stack", text: "Toggle layers on the canvas, check the reconstructed surface, and split any layer that still mixes two editing decisions." },
          { title: "Export", text: "Download individual transparent PNGs, a ZIP of the full stack, or a layered PSD that opens with names and order intact." },
        ],
      },
      {
        id: "uses",
        heading: "What people do with the result",
        body: [
          "The output is a working file, not a preview. That is why the same separation serves four very different jobs: a marketplace seller rebuilding a main image for a seasonal campaign, a designer localising a book cover without the original layout file, a VTuber preparing a character for rigging, and a creator testing a second thumbnail against a first one.",
        ],
        bullets: [
          { title: "Rebuild without reshooting", text: "New background, new props, same product — see [product images to layers](/product-image-to-layers)." },
          { title: "Re-typeset a cover", text: "Keep the artwork, replace the words, export a print-ready file — see [covers to layers](/cover-to-layers)." },
          { title: "Rig a character", text: "Get part-level separation before opening Cubism or Spine — see [Live2D character layers](/live2d-character-to-layers)." },
          { title: "Test a thumbnail", text: "Change the headline area and keep the face that already performs — see [YouTube thumbnails](/youtube-thumbnail-to-layers)." },
        ],
      },
      {
        id: "limits",
        heading: "Where the output stops and you take over",
        body: [
          "Rebuilt background is an **estimate**. The model infers what was probably behind the bottle; it cannot recover pixels the camera never captured. For most commercial compositions this reads correctly at a glance, but a client who knows the original set will notice.",
          "Flattened text stays flattened. Glyph-shaped pixels come back as a text region layer, not as editable characters in your brand font. If you need the words editable, retype them — the separation simply tells you exactly where they were and how much space they occupied.",
        ],
        bullets: [
          { title: "Heavy blur and motion smear", text: "Edges are ambiguous, so masks get softer and props may merge." },
          { title: "Very fine detail", text: "Single hairs, gauze, chain links and mesh often need a manual pass." },
          { title: "Objects with no depth cue", text: "Flat graphics touching each other may stay grouped unless you name them explicitly." },
        ],
      },
      {
        id: "versus",
        heading: "Separation is not a fancier background remover",
        body: [
          "If all you need is a transparent PNG of one subject, a background remover is faster and cheaper. Separation earns its cost when the scene has parts you want to keep, when the background has to survive the subject moving, or when the file has to go into an animation or rigging pipeline.",
          "We wrote a straight comparison of the two workflows, including what each one costs per usable asset: [background removal vs editable layers](/compare/remove-bg-vs-image-to-layers).",
        ],
      },
    ],
    faq: [
      {
        q: "How many layers will I get from one image?",
        a: "It depends on the level you choose and on how many independent groups the image actually contains. L1 returns 2–4, L2 returns 4–6, L3 returns 6–9, and L4 targets part-level anatomy for characters. Requesting more layers than the composition supports produces duplicates and fragments rather than useful assets.",
      },
      {
        q: "Can it recover the background hidden behind my product?",
        a: "It reconstructs it as an estimate. The model fills in what was plausibly behind the subject so the background layer is complete when the subject moves. Those pixels are generated, not recovered originals, and should be reviewed before print or high-resolution delivery.",
      },
      {
        q: "Can I edit the text after separation?",
        a: "Not as live text. Once words are flattened into pixels the original font, spacing and metadata are gone. Separation isolates the text region so you can delete it, move it, or place new type in the same space.",
      },
      {
        q: "What file formats can I upload?",
        a: "JPG, PNG and WebP up to 10 MB per image. Transparency in the source PNG is preserved, but a fully transparent area is treated as background rather than as a separate layer.",
      },
      {
        q: "What do I actually download?",
        a: "Three options from the same run: individual transparent PNGs, a ZIP containing the whole stack with depth order, or a layered PSD with editable layer names and groups.",
      },
      {
        q: "Are my uploads used for training?",
        a: "No. Files are processed for the job you started, delivered over signed URLs, and can be deleted from your workspace at any time. Retention windows are listed in the pricing table and in our [AI transparency note](/ai-transparency).",
      },
      {
        q: "Does it work on AI-generated images?",
        a: "Yes, and they are often easier because edges are clean and lighting is simple. Images with baked-in glow, bokeh or heavy stylistic texture are harder because the boundary between subject and background is genuinely ambiguous.",
      },
    ],
    related: [
      "image-to-psd",
      "layer-levels",
      "compare/remove-bg-vs-image-to-layers",
      "product-image-to-layers",
    ],
    updated: "2026-11-11",
  },

  {
    slug: "image-to-psd",
    cluster: "core",
    title: "Image to Layers — Image to PSD, Layered File Export",
    description:
      "Image to Layers — convert a flat JPG, PNG or WebP into a layered PSD with named, ordered layers. No rebuild or manual masking: open it in Photoshop and edit.",
    h1: "Image to Layers: convert a flat image into a layered PSD",
    eyebrow: "Image to PSD",
    intro: [
      "Changing the file extension does not make an image editable. A PSD with one layer is just a JPEG wearing a Photoshop badge — which is exactly what most online converters hand you.",
      "This page is about the other thing: a PSD whose layer panel shows the product, the props, the text region and the reconstructed background as separate, named entries, in the right stacking order, with transparency preserved.",
    ],
    demo: "cover",
    tool: true,
    sections: [
      {
        id: "what-is-inside",
        heading: "What is actually inside the PSD",
        body: [
          "The export writes a standard Photoshop document with raster layers at the source resolution. Each layer carries the name the model assigned during separation (`Serum bottle`, `Stone pedestal`, `Backdrop`, and so on) plus its stack position, so opening the file does not start with fifteen layers called *Layer 1*.",
          "Alpha channels are preserved on every cutout, which means blend modes, masks and smart filters behave the way you expect once the file is in Photoshop, Affinity Photo, Photopea or GIMP.",
        ],
        table: {
          head: ["Layer", "Type", "What it gives you"],
          rows: [
            ["Subject", "Cutout raster", "Product, person or character with clean alpha edges"],
            ["Supporting props", "Cutout raster", "Individual objects that can be moved or deleted independently"],
            ["Text & graphics", "Cutout raster", "Rendered glyphs and marks, isolated as regions"],
            ["Reconstructed base", "Full-bleed raster", "The scene with occluded areas filled in"],
          ],
        },
      },
      {
        id: "why-not-converter",
        heading: "Why a format converter is not enough",
        body: [
          "A JPG to PSD converter wraps your single flattened image in a PSD container. You can open it, but every edit still affects the entire picture: nudging the product drags its shadow and the wall behind it along with it.",
          "A layered conversion is a different operation. The image is decomposed first, then written out as a stack. That is why this takes seconds rather than milliseconds, and why the result supports the edits you actually bought Photoshop for.",
        ],
        bullets: [
          { title: "Reposition without residue", text: "Move the subject and the background underneath is already complete." },
          { title: "Per-layer colour work", text: "Adjust the product without shifting the backdrop's white balance." },
          { title: "Cleaner retouching", text: "Work on one element at a time instead of masking against a flat composite." },
          { title: "Handoff-ready", text: "Named layers survive a handoff to another designer or an offshore retoucher." },
        ],
      },
      {
        id: "resolution",
        heading: "Resolution, colour and export settings",
        body: [
          "Layers are exported at the resolution of the uploaded file, capped by the plan limit. For marketplace main images that is usually enough; for print you should upload the largest source you have rather than upscaling afterwards, because reconstruction quality drops on interpolated pixels.",
          "Documents are written in sRGB with 8-bit channels. If your print pipeline needs Adobe RGB or 16-bit, convert after opening — the layer structure is unaffected by a document colour-space change.",
        ],
        note: "Need a very large canvas? Upload the full-resolution original instead of a compressed preview; reconstruction detail depends on it. See [how layer levels affect output](/layer-levels).",
      },
      {
        id: "steps",
        heading: "The conversion, step by step",
        steps: [
          { title: "Upload the flattened file", text: "JPG, PNG or WebP. Multi-page PDFs and layered TIFFs are not supported in this preview." },
          { title: "Set the layer level", text: "L2 for product scenes, L3 when the file contains text and graphic marks, L4 only for characters." },
          { title: "Review before export", text: "Check that no layer still mixes two unrelated objects; split further if it does." },
          { title: "Download the PSD", text: "Open it and confirm the layer panel matches what you previewed. Keep the ZIP of PNGs as a backup asset library." },
        ],
      },
      {
        id: "quality-checks",
        heading: "Three checks worth doing before you deliver",
        body: [
          "Toggle every layer off except the base. If the reconstructed background reads as a plausible continuation, the file is safe to send. If it looks smeared, the original occlusion was too large for a clean estimate and the layer should be replaced with real photography or a designed backdrop.",
          "Then zoom to 200% on the subject edge. Fringing on glass and hair is the usual weak point; a one-pixel matte cleanup on those layers is faster than re-running the job.",
        ],
        bullets: [
          { title: "Base layer sanity check", text: "Hide everything else — does the scene still make sense?" },
          { title: "Edge pass at 200%", text: "Look for grey halos on translucent materials before you blend." },
          { title: "Naming pass", text: "Rename layers to the client's component names so the file survives review cycles." },
        ],
      },
    ],
    faq: [
      {
        q: "Is the PSD really layered or just renamed?",
        a: "Really layered. Separation happens before export, and the PSD is written with one raster layer per detected element plus a reconstructed base layer, each with its own alpha channel and stack order.",
      },
      {
        q: "Which apps can open the exported PSD?",
        a: "Photoshop, Affinity Photo, Photopea, GIMP, Krita and most editors that read standard PSD layer data. We do not use smart objects, adjustment layers or proprietary features, so compatibility stays broad.",
      },
      {
        q: "Will layer names and groups be preserved?",
        a: "Names are preserved. Groups are flattened into a single ordered stack in this preview; a grouped export with semantic folders is on the roadmap.",
      },
      {
        q: "Can I convert a PNG with transparency?",
        a: "Yes, though fully transparent regions are treated as background rather than as an extra layer. The alpha you upload is preserved on the elements that remain.",
      },
      {
        q: "Does converting to PSD change the image quality?",
        a: "Layers are written at source resolution without recompression of the composite. Reconstruction of occluded areas is generated content, so treat those specific regions — not the whole file — as estimated.",
      },
      {
        q: "How large can the source image be?",
        a: "Up to 10 MB per upload in the preview build. Larger originals are supported on paid plans; the practical limit is the long edge of the source, not the file size alone.",
      },
    ],
    related: ["image-to-layers", "extract-layers-from-image", "layer-levels", "cover-to-layers"],
    updated: "2026-11-11",
  },

  {
    slug: "image-layer-separator",
    cluster: "core",
    title: "Image to Layers — AI Layer Separator, Not Another Mask",
    description:
      "Image to Layers — an AI layer separator that returns real layers, not masks. Split subjects, objects, text regions and backgrounds, keep depth order, export PSD.",
    h1: "Image to Layers: an AI layer separator that returns layers, not masks",
    eyebrow: "Layer separator",
    intro: [
      "Most tools that call themselves layer separators return masks. A mask tells you where an object is; a layer gives you the object on its own, in the right stacking order, with the space behind it filled in.",
      "The distinction decides whether the output can go straight into a design file or needs another hour of retouching before it is usable.",
    ],
    demo: "youtube",
    tool: true,
    sections: [
      {
        id: "mask-vs-layer",
        heading: "Mask, cutout, layer — three different outputs",
        body: [
          "A **mask** is a selection. Useful inside an editor that already has your source file, useless on its own. A **cutout** is one object on transparency — better, but it discards the scene. A **layer stack** keeps every element plus a rebuilt base, so editing one part does not damage the others.",
          "When you are evaluating separators, ask what happens to the area behind the subject. If the answer is 'it becomes transparent', you are looking at a cutout tool with a bigger vocabulary.",
        ],
        table: {
          head: ["Output", "What survives", "Typical use"],
          rows: [
            ["Mask", "Position only", "Inside an editor that has the original file"],
            ["Cutout", "One subject, alpha edges", "Stickers, overlays, single-product listings"],
            ["Layer stack", "Every element + rebuilt base", "Redesigns, animation, rigging, localisation"],
          ],
        },
      },
      {
        id: "how-to-judge",
        heading: "How to judge a separator in ten minutes",
        body: [
          "Upload something awkward rather than something flattering. A product photo on a plain sweep will look good on almost any model; the useful test cases are glass, hair, a hand overlapping a prop, and text sitting on a busy background.",
          "Then check three things: does the stack order match the picture, does the base layer hold up when everything else is hidden, and do two elements that should be separate actually arrive as separate layers.",
        ],
        bullets: [
          { title: "Test with occlusion", text: "Overlap two objects on purpose. The hidden region is where models differ most." },
          { title: "Test with translucency", text: "Glass and smoke expose fringe artefacts faster than any other material." },
          { title: "Test with type", text: "Text on texture shows whether regions are found semantically or by contrast." },
          { title: "Check the count", text: "If the tool returns exactly the number you asked for every time, it is padding the stack." },
        ],
      },
      {
        id: "levels",
        heading: "Separator settings that actually change the result",
        body: [
          "Layer count is the only control that reliably changes output structure, and it is easy to overuse. Asking for ten layers on a five-group scene produces duplicates and background fragments — the model fills the quota instead of finding new meaning.",
          "Naming a target element is the second lever. Naming *the price tag* or *the left shoe* focuses the split on that object and its immediate occluders, which is often what you need when a full decomposition is overkill.",
        ],
        note: "Start at the level that matches the scene, then split only the layers that still mix two editing decisions. More detail on [layer levels](/layer-levels).",
      },
      {
        id: "batch",
        heading: "Working with more than one image",
        body: [
          "Marketplace sellers rarely have a single image problem. A catalogue of forty SKUs needs consistent output more than it needs maximum detail, so lock one level — usually L2 — and apply it across the set. Consistency is what makes a category page look designed rather than assembled.",
          "For volume work, keep the naming convention identical between runs so the exported ZIPs can be merged without renaming files by hand.",
        ],
      },
    ],
    faq: [
      {
        q: "What makes this different from a standard background remover?",
        a: "A remover produces one cutout and discards the scene. This separator returns each detected element as its own layer plus a reconstructed background, so the parts can be recombined instead of just placed on a new backdrop.",
      },
      {
        q: "Can it separate text from an image?",
        a: "It isolates the text region as a layer, which lets you remove, move or replace it. It does not convert pixels back into editable characters.",
      },
      {
        q: "How accurate are the edges?",
        a: "Clean on hard materials and most product photography. Thin hair, mesh, chain and veil need a manual matte pass; that is a limitation of single-image decomposition generally, not of one model.",
      },
      {
        q: "Does it preserve layer order?",
        a: "Yes. Every layer carries a z-index, and exports keep the order so parallax, compositing and rigging behave correctly without manual sorting.",
      },
      {
        q: "Can I separate just one object instead of everything?",
        a: "Yes. Name the object in the optional instruction field and the split focuses on it and whatever overlaps it.",
      },
      {
        q: "What formats do you accept and return?",
        a: "Input JPG, PNG or WebP up to 10 MB. Output transparent PNGs, a ZIP stack, or a layered PSD at source resolution.",
      },
    ],
    related: ["image-to-layers", "extract-layers-from-image", "compare/remove-bg-vs-image-to-layers", "layer-levels"],
    updated: "2026-11-11",
  },

  {
    slug: "extract-layers-from-image",
    cluster: "core",
    title: "Image to Layers — Extract Editable Parts From One File",
    description:
      "Image to Layers — extract editable parts from a flattened image: name the object you need, get it back with a rebuilt background, then export PNG, ZIP or PSD.",
    h1: "Image to Layers: extract the parts you need from a flattened image",
    eyebrow: "Extract layers",
    intro: [
      "Sometimes you do not want the whole decomposition. You want the bottle. Or the logo. Or the one prop that took a retoucher three hours and is now trapped inside a flattened export.",
      "Extraction is the narrow version of layer separation: point at what matters, get that back as a clean asset, and ignore the rest of the scene.",
    ],
    demo: "ecommerce",
    tool: true,
    sections: [
      {
        id: "targeted",
        heading: "Targeted extraction beats full decomposition",
        body: [
          "A full split of a busy image can return eight layers where only one is useful. Each extra layer costs review time and adds a new place for the model to make a mistake.",
          "Targeted extraction asks for one thing and its immediate occluders. The output is smaller, cleaner, and faster to check — which is why it is the default for asset libraries where you are harvesting one element at a time.",
        ],
        bullets: [
          { title: "Name the object", text: "“the pump bottle”, “the left shoe”, “the price tag” — concrete nouns work better than categories." },
          { title: "Expect its neighbours", text: "Objects touching your target usually come along so the extracted edge is complete." },
          { title: "Keep the base", text: "You still get the reconstructed background, which is what makes the extraction reusable." },
        ],
      },
      {
        id: "use-cases",
        heading: "When extraction is the right tool",
        body: [
          "Harvesting a product from a campaign image to reuse in a marketplace listing. Pulling a character out of a group illustration. Recovering a logo from a PDF-rendered screenshot. Taking a prop out of a scene you cannot reshoot.",
          "In each case the source is finished, the original project file is gone, and re-creating the element by hand would cost more than extracting it.",
        ],
        table: {
          head: ["Situation", "Extract", "Full split"],
          rows: [
            ["One reusable asset from a finished ad", "Yes", "Overkill"],
            ["Rebuilding a whole composition", "Partial", "Yes"],
            ["Character ready for rigging", "No", "Yes, at L4"],
            ["Catalogue-wide consistency", "No", "Yes, at a locked level"],
          ],
        },
      },
      {
        id: "edges",
        heading: "Getting a clean edge on the first try",
        body: [
          "Resolution matters more than settings. Extraction on a 600px preview and then upscaling produces soft, haloed edges that are obvious on a white marketplace background. Upload the largest source available.",
          "Second: if the object has a soft shadow you want to keep, ask for the shadow explicitly. Shadows are the element most often lost, and a product floating without one reads as pasted even when the mask is perfect.",
        ],
        note: "If the edge still looks wrong, the source probably has motion blur or depth-of-field falloff — see [how layer separation works](/how-it-works) for what the model can and cannot resolve.",
      },
      {
        id: "after",
        heading: "What to do with the extracted asset",
        steps: [
          { title: "Check the alpha", text: "Place it on white and on black. Fringing that is invisible on one is obvious on the other." },
          { title: "Keep the base plate", text: "Even if you only wanted the subject, the reconstructed background is a free clean plate." },
          { title: "Store with metadata", text: "Keep the level and credit count with the file so a later re-run matches the original output." },
        ],
      },
    ],
    faq: [
      {
        q: "Can I extract more than one object in a single run?",
        a: "Yes. Name several objects, or leave the instruction empty and choose a level — the model then decides which groups are worth separating.",
      },
      {
        q: "How is extraction priced?",
        a: "By level, like a full separation: L1 costs 30 credits, L2 45, L3 60 and L4 90 per run. A targeted run still produces the reconstructed base, so you are not paying extra for it.",
      },
      {
        q: "Will the extracted object keep its shadow?",
        a: "Only if you ask for the shadow or choose a level that includes lighting groups. Otherwise the shadow stays with the background layer, which is often what you want for a clean asset.",
      },
      {
        q: "Can I extract a logo or watermark?",
        a: "Yes, and it is a common use — pulling a logo out of a flattened layout so it can be reused or removed. Vector reconstruction is a separate workflow; extraction returns raster pixels.",
      },
      {
        q: "What happens to the rest of the image?",
        a: "It stays in the job record and in the base layer. You can download the full ZIP later without re-running the separation.",
      },
    ],
    related: ["image-to-layers", "image-layer-separator", "image-to-psd", "how-it-works"],
    updated: "2026-11-11",
  },

  {
    slug: "how-it-works",
    cluster: "core",
    title: "Image to Layers — How Layer Separation Actually Works",
    description:
      "Image to Layers — how elements are detected, how hidden areas are reconstructed, what L1–L4 means, and which limits are physics rather than bugs.",
    h1: "Image to Layers: how layer separation works, and where it stops",
    eyebrow: "How it works",
    intro: [
      "Layer separation is not a filter. It is a reconstruction problem: the model has to decide what the image is made of, then invent the parts the camera could not see.",
      "Being precise about that second half is the difference between a tool you trust and one that quietly ruins a client deliverable. So here is the whole pipeline, including the parts that are estimates.",
    ],
    demo: "live2d",
    sections: [
      {
        id: "pipeline",
        heading: "The four stages of a run",
        steps: [
          { title: "Structure reading", text: "The image is encoded and segmented into candidate regions — surfaces, objects, text-like marks, and depth planes." },
          { title: "Semantic grouping", text: "Regions are merged into meaningful groups: a bottle and its cap become one layer, not two." },
          { title: "Occlusion estimation", text: "For each layer, the model predicts what continues behind the elements in front of it, then paints that continuation into the base." },
          { title: "Alpha matting and packing", text: "Edges are refined against the local background, then the stack is written with names, z-order and alpha channels." },
        ],
      },
      {
        id: "estimate",
        heading: "Reconstruction is inference, not recovery",
        body: [
          "There is no hidden original underneath your flattened JPEG. When a bottle covers a wall, the wall's pixels in that region do not exist anywhere — they were never captured. What the model produces is a **plausible continuation** based on the surrounding texture, lighting and perspective.",
          "For most commercial work that is enough: a soft plaster wall, a gradient sweep or a blurred interior are easy to continue convincingly. A patterned tile floor with a strict perspective grid is not, and neither is handwriting that passes behind an object.",
        ],
        note: "Treat reconstructed regions the way you treat generative fill: review them at 100%, and replace them with real photography when the composition is the deliverable rather than the asset.",
      },
      {
        id: "levels",
        heading: "Why levels exist instead of a slider",
        body: [
          "A single “more layers” slider invites people to over-ask. Decomposition quality is not monotonic in layer count: past the number of genuine groups, extra layers are filled with duplicates, partial masks and background fragments.",
          "Levels encode the trade-off as intent. L1 asks for the minimum viable structure, L2 for a commercial scene, L3 for layouts with text and graphics, L4 for anatomy. The model changes its grouping target, not just its output count.",
        ],
        table: {
          head: ["Level", "Target groups", "Credits", "Typical failure if pushed too far"],
          rows: [
            ["L1 Core", "2–4", "30", "Props merge with the subject"],
            ["L2 Standard", "4–6", "45", "Small props stay attached to the backdrop"],
            ["L3 Detailed", "6–9", "60", "Duplicate fragments of the same object"],
            ["L4 Character parts", "9+", "90", "Hair and clothing split into unusable slivers"],
          ],
        },
      },
      {
        id: "limits",
        heading: "The limits that are physics, not bugs",
        body: [
          "Four failure modes are structural and no amount of prompting fixes them. Knowing them in advance saves a re-run.",
        ],
        bullets: [
          { title: "Total occlusion", text: "If an object is completely hidden, there is nothing to detect. It cannot be separated." },
          { title: "Lost text metadata", text: "Flattened glyphs cannot be restored as characters, kerning or font." },
          { title: "Ambiguous ownership", text: "Reflections and cast shadows belong to both the object and the surface — different levels assign them differently." },
          { title: "Extreme blur", text: "When the subject is out of focus, its boundary is a gradient, so any mask is a guess." },
        ],
      },
      {
        id: "privacy",
        heading: "What happens to your files",
        body: [
          "Uploads are processed for the job you start, delivered through signed URLs, and deleted on the schedule of your plan. Files are not added to a training set. You can delete a job and its outputs from the workspace at any time.",
          "If your organisation needs a processing agreement or a regional data commitment before trial, tell us before uploading client material — details are on the [security page](/security).",
        ],
      },
    ],
    faq: [
      {
        q: "Does the model store my images to improve itself?",
        a: "No. Uploads are used to complete the job you started and are not added to training data. Deletion is available from the workspace and follows the retention window of your plan.",
      },
      {
        q: "Why does the background look painted in places?",
        a: "Those are reconstructed regions. The model estimated what continued behind an object, and large occlusions leave more room for that estimate to drift from the original scene.",
      },
      {
        q: "Can it separate two overlapping people?",
        a: "Partially. The front figure separates cleanly; the rear figure is reconstructed where it was occluded, which works for backgrounds but not for identity-accurate recovery.",
      },
      {
        q: "Is the output deterministic?",
        a: "Not bit-for-bit. Two runs on the same file can differ slightly in edge treatment and in how ambiguous elements are grouped, so review each run rather than assuming identical output.",
      },
      {
        q: "What resolution do you process at?",
        a: "Native source resolution up to the plan cap. Upscaling before upload does not add real detail and tends to produce softer masks.",
      },
    ],
    related: ["image-to-layers", "layer-levels", "security", "image-to-psd"],
    updated: "2026-11-11",
  },

  {
    slug: "showcase",
    cluster: "core",
    title: "Image to Layers — Four Worked Layer Stacks",
    description:
      "Image to Layers — four real separations with the layer stack, the level used and the rebuilt background: skincare set, editorial cover, anime character, thumbnail.",
    h1: "Image to Layers: four images, four layer stacks",
    eyebrow: "Examples",
    intro: [
      "Every example below was separated at the level shown, and each one fails in a different place — which is more useful than a gallery of best cases.",
      "Hover any numbered box to inspect the layer, or open the workflow behind it.",
    ],
    demo: "ecommerce",
    sections: [
      {
        id: "skincare",
        heading: "Skincare set · L2 · 7 layers",
        body: [
          "A studio product scene with a bottle, a bowl, a folded towel, a stone riser, a leaf and a plaster wall. The interesting part is the leaf: it sits behind the bottle at the top and in front of it at the bottom, so the depth ordering has to be resolved per pixel rather than per object.",
          "The reconstructed wall is convincing because plaster is a low-frequency texture. The cast shadows were kept as their own group so the composition still works when the bottle moves. See the [e-commerce workflow](/product-image-to-layers).",
        ],
      },
      {
        id: "cover",
        heading: "Editorial cover · L3 · 6 layers",
        body: [
          "A graphic cover is a different problem: the elements are flat, adjacent and deliberately overlapping. There is no depth cue to help, so grouping depends on colour and edge continuity.",
          "The torn-paper strip crossing the ochre disc is the hard case — it is both a texture and a boundary. At L3 it comes back as its own layer, which is what lets the disc be recoloured without touching the tear. See [covers to layers](/cover-to-layers).",
        ],
      },
      {
        id: "character",
        heading: "Anime character · L4 · 10 layers",
        body: [
          "Characters are the one case where anatomy beats semantics. Hair, face, eyes, ribbon, uniform, skirt, socks and shoes are separate editing decisions in any rigging pipeline, so the level pushes past the scene's natural group count on purpose.",
          "Thin twin-tail strands are the weak point: a few pixels of hair stay attached to the face layer and need a manual cleanup before the mesh is built. See [Live2D character layers](/live2d-character-to-layers).",
        ],
      },
      {
        id: "thumbnail",
        heading: "YouTube thumbnail · L3 · 6 layers",
        body: [
          "Thumbnails are typographic compositions pretending to be photographs. The headline, the arrow and the presenter are all competing for attention, and each needs independent control for an A/B test.",
          "The wordmark comes back as a text region, not as live type — see it isolated and you can see exactly how much space a replacement headline has. See [thumbnail workflows](/youtube-thumbnail-to-layers).",
        ],
      },
      {
        id: "what-to-look-for",
        heading: "What to look for in any example",
        body: [
          "Ignore the subject. Everybody's subject looks good. Look instead at the base layer with everything else hidden, at the boundary where two objects overlap, and at whether the number of layers corresponds to the number of editing decisions you would actually make.",
        ],
      },
    ],
    faq: [
      {
        q: "Are these real model outputs or illustrations?",
        a: "The source images are sample assets included with this preview and the layer metadata reflects how the stack is structured. The interactive canvas is a static demonstration in this build.",
      },
      {
        q: "Why do some examples use different levels?",
        a: "Because the right level follows the editing decisions, not the image size. A cover with type needs L3, a character needs L4, and a product scene is usually fine at L2.",
      },
      {
        q: "Can I try these exact images?",
        a: "Yes — the layer studio loads a sample by default, so you can run the simulated flow without uploading anything.",
      },
    ],
    related: ["image-to-layers", "product-image-to-layers", "live2d-character-to-layers", "layer-levels"],
    updated: "2026-11-11",
  },
];
