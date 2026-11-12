import type { PageContent } from "./types";

// Long-tail alias pages for the core head term. Each one answers a different
// question a searcher brings with them — conversion mechanics, browser-only
// access, colour editability, and the no-sign-in path — so they do not compete
// with /image-to-layers on the same intent.
export const aliasPages: PageContent[] = [
  {
    slug: "image-to-layers/convert",
    cluster: "core",
    title: "Image to Layers Convert — JPG, PNG, WebP Into a Layer Stack",
    description:
      "Image to Layers convert takes one flat JPG, PNG or WebP and returns transparent layers as PNG, a ZIP or a layered PSD. See what the conversion keeps.",
    h1: "Image to Layers convert: one file in, an editable stack out",
    eyebrow: "Convert · format in and out",
    intro: [
      "Most people looking for an image to layers convert are not asking for a file-format change. They already have a JPG or a PNG; what they want is the *structure* the file lost the moment it was flattened — the subject on its own, the props beside it, the words, and a background that survives being uncovered.",
      "So the conversion here is not a transcoder. The input format only decides what detail the model can work with, and the output format only decides how much of the stack you take with you. Everything in between is the separation.",
    ],
    demo: "ecommerce",
    level: "L2",
    tool: true,
    sections: [
      {
        id: "in-out",
        heading: "What you put in, what comes out",
        lead: "Formats are the least interesting part of the job, but they decide the ceiling.",
        body: [
          "On the way in, the source file sets the resolution budget. A 4000 px product photo gives masks with clean edges at print size; a 640 px thumbnail gives masks that look fine on screen and fall apart the moment someone scales them up. Alpha in the source is respected but not required — a flat JPEG with a white studio background is the normal case, not the exception.",
          "On the way out, you choose how much of the stack travels with you: **individual PNGs** for one-off edits, a **ZIP** for handoff without any app, or a **layered PSD** when the person receiving it needs to keep editing names, masks and blend modes in Photoshop, Affinity or Photopea.",
        ],
        table: {
          head: ["Source", "What it gives you", "Watch out for"],
          rows: [
            ["JPEG", "Best case for photos and product shots", "No alpha, so any existing cutout is baked into the background"],
            ["PNG with alpha", "Existing transparency is kept per layer", "Soft drop shadows can double up when masks overlap"],
            ["WebP", "Same handling as PNG at smaller size", "Some editors open the exported PSD but not the WebP you fed in"],
            ["Screenshot or UI capture", "Text and icons separate cleanly at L3", "Anti-aliased 1 px lines resist hard masks"],
          ],
        },
      },
      {
        id: "preserved",
        heading: "What the conversion preserves, and what it cannot",
        body: [
          "A layer stack is a reconstruction, not a recovery. The parts that were visible come back as real pixels. The parts that were hidden behind something else come back as an estimate — plausible, correctly coloured, and clearly flagged in the export as reconstructed.",
          "That single distinction explains almost every complaint about converted layers. The bottle is authentic. The wall behind the bottle is a guess that happens to look right.",
        ],
        bullets: [
          { title: "Kept", text: "Visible pixels, per-layer alpha, depth order, and the original colour values of everything the camera captured." },
          { title: "Estimated", text: "Anything occluded: the table under the product, the wall behind the title block, the far side of a folded sleeve." },
          { title: "Lost", text: "Live text. Words come back as a text-shaped region, not as characters in your brand font." },
          { title: "Never invented", text: "Off-frame content. If the shot cropped the model's arm, no conversion brings it back." },
        ],
      },
      {
        id: "steps",
        heading: "The conversion in four steps",
        steps: [
          { title: "Drop the file", text: "JPG, PNG or WebP up to 10 MB. The sample loads instantly if you just want to see the shape of the output." },
          { title: "Pick the depth", text: "L1 for subject plus background, L2 for a product scene, L3 once text and props matter, L4 for character rigs." },
          { title: "Check the uncovered areas", text: "Hide the subject and inspect the base layer. That is where a bad conversion shows itself, not in the subject." },
          { title: "Choose the output", text: "PNG per layer, ZIP for the stack, or PSD if the next person needs names and masks intact." },
        ],
      },
      {
        id: "wrong-tool",
        heading: "When you should not convert",
        body: [
          "If the file already has layers, open it — re-separating a PSD throws away the real masks and replaces them with estimates. If the artwork is a vector logo, convert the source SVG instead; rasterising it to separate it is working backwards. And if the only thing you need is the subject on transparency, a plain background remover is faster and cheaper than a full stack.",
          "The conversion earns its cost when more than one element has to be edited independently — which is exactly the moment a cutout stops being enough.",
        ],
        note: "Not sure how deep to split? [How many layers you actually need](/guides/how-many-layers) works through the decision in about three minutes.",
      },
    ],
    faq: [
      {
        q: "Does the input format change the quality of the layers?",
        a: "Indirectly. Compression artefacts in a heavily saved JPEG blur the boundary between subject and background, so masks come back slightly softer. A clean PNG of the same scene converts better at the same resolution.",
      },
      {
        q: "Can I convert several images at once?",
        a: "One image per run in this preview. Batch upload and grouped PSD export are on the roadmap for the paid tier, not available today.",
      },
      {
        q: "Is a converted PSD the same as the original layered file?",
        a: "No. It has the same shape — named layers, masks, order — but the hidden regions are reconstructions. Treat it as a working file you can edit, not as an archive of the original design.",
      },
      {
        q: "What happens to my file after the conversion?",
        a: "Uploads are processed to produce the stack and are not used to train models. See [security](/security) for retention details.",
      },
    ],
    related: ["image-to-layers", "image-to-layers/online", "image-to-psd", "image-to-layers/editable-rgb"],
    updated: "2026-11-12",
  },
  {
    slug: "image-to-layers/online",
    cluster: "core",
    title: "Image to Layers Online — Browser Splitting, No Install",
    description:
      "Image to Layers online runs entirely in the browser: upload a JPG, PNG or WebP, choose a level, and download PNGs, a ZIP or a PSD. Nothing to install.",
    h1: "Image to Layers online: separate a photo without installing anything",
    eyebrow: "Online · runs in the browser",
    intro: [
      "Searching for an image to layers tool online usually means one of two things: you are on a machine you do not administer, or you do not want another 2 GB desktop application for a job you will run twice this month.",
      "Both are reasonable. The studio runs in the browser with no plugin, no download and no queue behind a render node — open a tab, drop a file, get a stack back.",
    ],
    demo: "cover",
    level: "L2",
    tool: true,
    sections: [
      {
        id: "how",
        heading: "What actually happens in the tab",
        lead: "The browser is the client, not the model.",
        body: [
          "The page uploads your file over HTTPS, the separation runs on a GPU worker, and the resulting stack comes back as a job you can inspect layer by layer. Nothing is installed locally, which is why the same link works on a Chromebook, a locked-down work laptop, an iPad and a phone.",
          "That also means your device never has to hold the model. The trade-off is honest: a browser tool needs a connection, and a very large file takes longer to upload than it takes to process.",
        ],
        bullets: [
          { title: "No install, no plugin", text: "No WebAssembly download, no extension, no admin rights. A current Chrome, Safari, Firefox or Edge is enough." },
          { title: "Same stack on any device", text: "The layer list, canvas toggles and export options are identical on desktop and mobile — the layout adapts, the output does not." },
          { title: "Exports are local", text: "PNGs, the ZIP and the PSD download straight to your device; there is no cloud library you have to clean up later." },
          { title: "Session-scoped", text: "Close the tab and the working stack is gone. That is a privacy feature until the moment you forget to export." },
        ],
      },
      {
        id: "browser-vs-app",
        heading: "Browser tool or desktop app",
        body: [
          "Desktop separation tools win on two things: very large files that would be painful to upload, and batch jobs where you want to queue fifty images and walk away. If that is your week, use one.",
          "For everything else the browser is the shorter path — and the one that works on the machine you are actually sitting at.",
        ],
        table: {
          head: ["", "Online studio", "Desktop app"],
          rows: [
            ["Setup", "None", "Download, licence, updates"],
            ["Works on a locked-down machine", "Yes", "Usually blocked"],
            ["Very large source files", "Upload-bound", "Local, faster"],
            ["Batch of 50 images", "One at a time today", "Queued"],
            ["Phone or tablet", "Yes", "Rarely"],
          ],
        },
      },
      {
        id: "limits",
        heading: "Practical limits worth knowing",
        body: [
          "Uploads are capped at 10 MB per image in this build. That covers a full-resolution product photo and most cover artwork, but not a 60 MP camera raw exported at maximum quality — downscale to about 4000 px on the long edge and the masks will still hold up at print size.",
          "Mobile browsers can run the studio, but the canvas toggles are fiddly at 390 px. Reviewing and exporting on a phone works; judging a fine hair edge does not.",
        ],
      },
      {
        id: "privacy",
        heading: "Where your file goes",
        body: [
          "Files are uploaded to process the job, held for the session, and not used as training data. If the image is under NDA or contains a face you do not have rights to, read [security](/security) before uploading rather than after.",
        ],
        note: "Comparing options? [Layers versus background removal](/compare/remove-bg-vs-image-to-layers) explains why a browser cutout tool is not the same job.",
      },
    ],
    faq: [
      {
        q: "Do I need an account to use it online?",
        a: "No for the preview. You can open the studio, load a sample or your own file, and see the stack without signing in. An account is what meters credits and unlocks higher levels.",
      },
      {
        q: "Does it work on a phone?",
        a: "Yes, in any current mobile browser. Uploading from the camera roll works; fine mask review is better on a larger screen.",
      },
      {
        q: "Why is my upload failing?",
        a: "Almost always size. The cap is 10 MB per image — resize the long edge to about 4000 px and try again.",
      },
      {
        q: "Is the online version slower than a desktop app?",
        a: "Processing time is comparable. What differs is transfer time: a 9 MB upload on a slow connection can take longer than the separation itself.",
      },
    ],
    related: ["image-to-layers", "image-to-layers/convert", "ai-layer-splitter-no-sign-in", "extract-layers-from-image"],
    updated: "2026-11-12",
  },
  {
    slug: "image-to-layers/editable-rgb",
    cluster: "core",
    title: "Image to Layers — Turn Any Image Into Editable RGB Layers",
    description:
      "Image to Layers turns a flattened image into editable RGB layers with real alpha, so colour, opacity and blend modes stay adjustable after the split.",
    h1: "Image to Layers: turn any image into editable RGB layers",
    eyebrow: "Editable RGB · colour stays adjustable",
    intro: [
      "An image that has been flattened is RGB data with the decisions baked in: the red of the label, the exact drop shadow, the opacity of the overlay. You can paint over them, but you cannot go back and change your mind.",
      "Editable RGB layers give you that back. Each element arrives as its own 8-bit sRGB layer with a real alpha channel, so after the split you can still recolour one object, fade one overlay, or swap a blend mode without repainting a single pixel.",
    ],
    demo: "ecommerce",
    level: "L2",
    tool: true,
    sections: [
      {
        id: "what-means",
        heading: "What “editable RGB” actually means here",
        body: [
          "Three properties have to hold for a layer to be genuinely editable, and most cutout tools only deliver the first.",
        ],
        bullets: [
          { title: "Separate colour", text: "The pixels of one element sit in one layer, unchanged — no white matte, no clipped highlights, no colour shift from recompression." },
          { title: "Real alpha", text: "Transparency is an actual channel, not a white background pretending to be empty space. Semi-transparent glass stays semi-transparent." },
          { title: "Neutral blending", text: "Layers arrive in Normal at 100 % opacity, so any multiply, screen or overlay you add later behaves the way you expect." },
        ],
      },
      {
        id: "print",
        heading: "RGB for screens, and what happens when print is the target",
        body: [
          "Everything here is sRGB. That is the correct working space for the web, for marketplaces, and for anything that will end up inside a video or a slide.",
          "Print is the exception. A press wants CMYK, and the conversion from sRGB to CMYK shifts saturated colours — especially deep blues and bright oranges. Split in RGB, assemble the layout, then convert the finished file in a colour-managed app with the printer's profile. Converting each layer to CMYK *before* compositing makes the shift happen once per layer instead of once per image, and the errors stack.",
        ],
        note: "If the destination is a press-ready PDF, keep the reconstructed background on its own layer so the printer can drop it in one action.",
      },
      {
        id: "edit",
        heading: "Edits that only work because the layers are separate",
        body: [
          "The test of a good split is what you can do in thirty seconds that would otherwise be an afternoon.",
        ],
        bullets: [
          { title: "Recolour one object", text: "A hue/saturation adjustment clipped to the label layer changes the label and nothing else — no masks to paint, no spill onto the product." },
          { title: "Refade an overlay", text: "The scrim over a thumbnail comes back as its own layer, so opacity is a slider instead of a repaint." },
          { title: "Swap a background honestly", text: "The base layer already holds the scene behind the subject, so a new backdrop composites over a complete image, not over a hole." },
          { title: "Match a new prop's light", text: "Keeping the shadow as a separate layer lets you reuse it under a replacement object, which reads as one photograph." },
        ],
      },
      {
        id: "not-recovered",
        heading: "What editable RGB does not give you",
        body: [
          "It does not rebuild live type. Words return as a text-shaped region at the right size and position; if you need to change them, retype — the region tells you exactly how much room you have.",
          "It does not recover clipped highlights or crushed shadows. If the original JPEG blew out the label's white, the layer is white. Separation can find structure; it cannot find data that was never recorded.",
        ],
      },
    ],
    faq: [
      {
        q: "Is the export 8-bit or 16-bit?",
        a: "8-bit sRGB per channel for PNG, ZIP and PSD. That matches what the source JPG or PNG already holds, so nothing is lost by the split.",
      },
      {
        q: "Can I convert the layers to CMYK myself?",
        a: "Yes, in any colour-managed editor. Do it after compositing rather than per layer, or the per-layer conversions will drift apart.",
      },
      {
        q: "Does the split change the colours?",
        a: "No. Colour values are carried through unchanged; the only edits are mask edges and the reconstructed regions behind occluded areas.",
      },
      {
        q: "Do blend modes survive into the PSD?",
        a: "Layers export in Normal at full opacity so the file is a neutral starting point. Any blend mode you add afterwards is yours.",
      },
    ],
    related: ["image-to-layers", "image-to-layers/convert", "image-to-psd", "layer-levels"],
    updated: "2026-11-12",
  },
  {
    slug: "ai-layer-splitter-no-sign-in",
    cluster: "core",
    title: "Image to Layers — AI Layer Splitter With No Sign-In",
    description:
      "Image to Layers is an AI layer splitter with no sign-in: open the studio, split a sample or your own image, and only create an account to save exports.",
    h1: "Image to Layers: an AI layer splitter with no sign-in",
    eyebrow: "No sign-in · try before an account",
    intro: [
      "A sign-up wall before you have seen the output is a bad trade. You spend an email address and a password to find out whether the tool handles your kind of image, and most of the time the answer arrives three screens too late.",
      "Here the order is reversed. The studio opens without an account, the sample is already loaded, and your own file can go through the full separation before anything asks who you are.",
    ],
    demo: "live2d",
    level: "L4",
    tool: true,
    sections: [
      {
        id: "without-account",
        heading: "What works with no account",
        body: [
          "Everything up to the point where you take the file away. That is a deliberate line: judging the quality of a split needs the whole stack on screen, and metering credits against a preview would make the preview useless.",
        ],
        bullets: [
          { title: "Open the studio", text: "No interstitial, no email capture, no cookie wall in front of the canvas." },
          { title: "Load the sample", text: "A four-scene sample with a full layer stack, so you can see how depth order and reconstructed regions behave before uploading anything." },
          { title: "Split your own image", text: "JPG, PNG or WebP up to 10 MB, at any level. The result is inspectable layer by layer." },
          { title: "Inspect every layer", text: "Toggle visibility, hide the subject to check the rebuilt background, and split a layer that still mixes two editing decisions." },
        ],
      },
      {
        id: "why-signin",
        heading: "What the sign-in is actually for",
        body: [
          "Not gatekeeping — accounting. Every separation consumes GPU time and bills as credits, and credits need somewhere to live. An account is the ledger.",
          "Signing in also makes a job resumable: the stack is tied to you rather than to a tab, so a refresh does not throw away four minutes of work.",
        ],
        bullets: [
          { title: "Credits", text: "Paid runs are metered at 30 credits for L1 up to 90 for L4, and the balance has to belong to someone." },
          { title: "Exports", text: "PNG, ZIP and PSD downloads are attached to the account that owns the run." },
          { title: "History", text: "Past runs stay available instead of disappearing when the browser session ends." },
        ],
      },
      {
        id: "privacy",
        heading: "No account does not mean no privacy",
        body: [
          "You can run a separation without an account, and the file is still handled the same way: used to produce the stack, held for the session, never used as training data. Read [security](/security) for the retention window and [AI transparency](/ai-transparency) for what the model does and does not do.",
        ],
      },
      {
        id: "compare",
        heading: "How this differs from a free cutout site",
        body: [
          "Free background removers are genuinely free, and if all you need is a subject on transparency they are the right tool. What they return is one layer and a discarded scene.",
          "A layer splitter returns the scene. That is the whole difference, and it is why the output is worth an account when the job needs a second version.",
        ],
        note: "[Layers versus background removal](/compare/remove-bg-vs-image-to-layers) puts the two outputs side by side.",
      },
    ],
    faq: [
      {
        q: "Can I export without creating an account?",
        a: "Not in this build. Inspection is open, downloads are metered, and metering requires an account. The sample stack is fully visible so you can judge quality first.",
      },
      {
        q: "What do you collect at sign-up?",
        a: "An email address and a password, nothing else. No card is required to start, and see [privacy](/privacy) for the full list.",
      },
      {
        q: "Is the layer splitter really AI, or edge detection?",
        a: "It is a segmentation model that groups regions semantically — a bottle is one layer rather than eleven colour bands. [AI transparency](/ai-transparency) explains the pipeline.",
      },
      {
        q: "Does signing in change the output quality?",
        a: "No. The same model runs before and after sign-in; an account only meters credits and stores history.",
      },
    ],
    related: ["image-to-layers", "image-layer-separator", "image-to-layers/online", "compare/remove-bg-vs-image-to-layers"],
    updated: "2026-11-12",
  },
  {
    slug: "image-to-layers/free",
    cluster: "core",
    title: "Image to Layers Free — What You Can Split Without Paying",
    description:
      "Image to Layers free covers the whole preview: split a sample or your own image, inspect every layer, and only spend credits when you take the stack away.",
    h1: "Image to Layers free: what you can do without paying",
    eyebrow: "Free · where the line sits",
    intro: [
      "“Free” means something different on every tool page. On some it means five images a day. On others it means the tool is free and your downloads come back watermarked, or resized to something unusable.",
      "Here it means one specific thing: **looking is free, taking is metered**. The separation, the layer list, the reconstructed background and every toggle on the canvas cost nothing. Credits start when you export the stack — and the number depends on the level you chose, not on how many times you looked.",
    ],
    demo: "ecommerce",
    level: "L1",
    tool: true,
    sections: [
      {
        id: "line",
        heading: "Where the free line actually sits",
        lead: "A split is only worth judging with every layer visible — so none of that is gated.",
        body: [
          "Layer separation is not something you can evaluate from a thumbnail. You have to hide the subject and look at the reconstructed base, zoom into the hair edge, check whether the label survived as its own layer. Every one of those actions is free, unmetered and un-watermarked, because a preview that hides the flaws is not a preview.",
        ],
        bullets: [
          { title: "Open without an account", text: "The studio loads with a four-scene sample already separated. No email capture in front of the canvas." },
          { title: "Split your own file", text: "JPG, PNG or WebP up to 10 MB at any level L1–L4, and inspect the result layer by layer." },
          { title: "No watermark, no downscale", text: "What you see is the mask the model produced, not a blurred teaser of it." },
          { title: "Credit only on export", text: "PNG, ZIP and PSD downloads are the metered step — 30 credits at L1 up to 90 at L4." },
        ],
      },
      {
        id: "why",
        heading: "Why the export is the part that costs",
        body: [
          "Separation runs on a GPU worker, and GPU time is the one cost that does not disappear at scale. There are only three ways to make unlimited exports free: put ads around them, watermark them, or monetise the files themselves. The first is annoying, the second defeats the purpose, and the third is unacceptable for a product photo you have not launched yet.",
          "Metering the export keeps the incentives straight. You can try a dozen images, decide the tool is wrong for your case, and pay nothing — which is the outcome a free tier should actually optimise for.",
        ],
      },
      {
        id: "table",
        heading: "Free versus metered",
        table: {
          head: ["Action", "Cost", "Notes"],
          rows: [
            ["Open the studio, load the sample", "Free", "No account required"],
            ["Run a separation on your own image", "Free to inspect", "Any level, up to 10 MB"],
            ["Toggle layers, check edges", "Free", "The whole point of a preview"],
            ["Export PNG / ZIP / PSD", "30–90 credits", "Set by level, not by file count"],
            ["Re-run at a higher level", "30–90 credits", "Cheaper than a reshoot, still metered"],
          ],
        },
      },
      {
        id: "stay-free",
        heading: "Keeping it free in practice",
        body: [
          "Most wasted credits come from running the same image three times at three levels. That is avoidable once you know what each level is for.",
        ],
        bullets: [
          { title: "Start at the level the image implies", text: "A product shot is L2. Asking for L4 on a bottle produces duplicated layers, not more detail." },
          { title: "Split a fused layer instead of re-running", text: "If two elements come back merged, [split that one layer](/image-to-layers/split-image-into-layers) rather than paying for the whole image again." },
          { title: "Export once, in the richest format", text: "A layered PSD contains every PNG you would have downloaded separately — take it once and slice it locally." },
          { title: "Reuse the stack", text: "One separation serves the main image, the ad variants and the thumbnail crop. That is the entire argument for layers over cutouts." },
        ],
        note: "Credit packs and the free allowance are listed on [pricing](/pricing). No card is needed to start.",
      },
    ],
    faq: [
      {
        q: "Is image to layers free?",
        a: "The separation and inspection are free; exporting the stack costs credits. You can open the studio, split a sample or your own image at any level, and judge the result without signing in or paying.",
      },
      {
        q: "How many free images do I get?",
        a: "There is no cap on inspecting. A new account starts with enough credits for a few L1 runs, and packs are only needed once you are exporting regularly.",
      },
      {
        q: "Do free exports carry a watermark?",
        a: "No. The site is not monetised through branding on your files — exports are clean at every tier, including the sample runs.",
      },
      {
        q: "Is the free version lower quality?",
        a: "No. The same model runs at every price point; what changes is the level you ask for. L1 is cheaper because it finds fewer layers, not because it tries less hard.",
      },
    ],
    related: ["image-to-layers", "image-to-psd", "image-to-layers/online", "ai-layer-splitter-no-sign-in"],
    updated: "2026-11-12",
  },
  {
    slug: "image-to-layers/split-image-into-layers",
    cluster: "core",
    title: "Image to Layers — Split an Image Into More Layers",
    description:
      "Image to Layers splits a flat image into separate layers, then splits those layers again when two elements come back fused. Depth is a decision, not a slider.",
    h1: "Image to Layers: split an image into layers, then split again",
    eyebrow: "Split · one layer at a time",
    intro: [
      "“Split image into layers” sounds like a single action, and the first pass is. The model groups what it can recognise and returns a stack: subject, props, text regions, background.",
      "The second pass is the one that decides whether the file is actually useful. You look at the stack, find the two elements that should not be sharing a layer, and split that one — without paying to separate the whole image again.",
    ],
    demo: "ecommerce",
    level: "L3",
    tool: true,
    sections: [
      {
        id: "two-passes",
        heading: "Separate once, split where it matters",
        lead: "The first pass is the model's opinion. The second is yours.",
        body: [
          "A full separation is deliberately conservative. Fusing the bottle and its label into one layer produces an output that looks right in a gallery and is useless the moment you need to change the label. Splitting that layer is a five-second decision made with the image in front of you, and it is the difference between a demo and a working file.",
          "That is also why the levels exist as targets rather than a single slider: L2 is the model's opinion about a product scene, L3 is the opinion you would have if you were going to change the text, L4 is the opinion of somebody who has to rig it.",
        ],
      },
      {
        id: "how",
        heading: "How to split a layer that came back fused",
        steps: [
          { title: "Find the seam", text: "Hide everything except the fused layer. If the two elements touch along a hard edge, the split will be clean; along a soft shadow, it will not." },
          { title: "Crop to that layer only", text: "A tight crop gives the model the whole pixel budget for the two elements instead of spreading it across the scene, and it makes the masks sharper." },
          { title: "Re-run at one level deeper", text: "A fused L2 pair usually separates cleanly at L3. Going straight to L4 on a product shot tends to invent parts that were never there." },
          { title: "Composite back", text: "Drop the new sub-layers into the original stack at the same depth position. Names and order stay intact, so the PSD still opens the way the recipient expects." },
        ],
      },
      {
        id: "over-splitting",
        heading: "Over-splitting looks like progress and is not",
        body: [
          "Every extra layer is a mask that can be wrong, a file that has to be named, and a decision the next person has to understand. A 40-layer stack from a two-object photo is not thorough; it is a model hedging.",
          "The practical ceiling is the number of independent editing decisions you would genuinely make. If two layers would always be moved, hidden or recoloured together, they should be one layer.",
        ],
        note: "Working out your number? [How many layers you actually need](/guides/how-many-layers) walks through it in about three minutes.",
      },
      {
        id: "resists",
        heading: "What splits cleanly, and what resists",
        table: {
          head: ["Element", "Splits cleanly", "Why"],
          rows: [
            ["Text blocks, logos, arrows", "Yes", "High contrast, hard edges, unambiguous regions"],
            ["Product and packaging label", "Usually", "Separates once the label is large enough to be its own region"],
            ["Semi-transparent glass", "Partly", "Alpha blends with whatever was behind it"],
            ["Thin hair strands", "Partly", "A few pixels usually stay on the face layer"],
            ["Soft or cast shadows", "Rarely", "A shadow is a gradient, not an object boundary"],
            ["Motion blur", "No", "The blur mixes two objects into shared pixels"],
          ],
        },
      },
    ],
    faq: [
      {
        q: "Can I split one layer into two without redoing the whole image?",
        a: "Yes. Crop to the fused layer, run that crop at one level deeper, and composite the result back into the stack. It costs one small run instead of a full re-separation.",
      },
      {
        q: "Does splitting again reduce image quality?",
        a: "Only by one export round trip. Work in PNG or PSD rather than JPEG between passes and there is no visible loss.",
      },
      {
        q: "Can I split a PNG that already has transparency?",
        a: "Yes. Existing alpha is respected per layer, so an asset that was cut out previously keeps its edge instead of being re-guessed.",
      },
      {
        q: "How many layers is too many?",
        a: "When two layers would always be edited together, they are one layer. Beyond that, count editing decisions rather than objects — the numbers usually land between three and nine.",
      },
    ],
    related: ["image-to-layers", "extract-layers-from-image", "guides/how-many-layers", "image-to-layers/convert"],
    updated: "2026-11-12",
  },
  {
    slug: "image-to-layers/photo-to-parallax-layers",
    cluster: "core",
    title: "Image to Layers — Photo to Parallax Depth Layers",
    description:
      "Image to Layers turns one photo into depth-ordered layers for 2.5D parallax: foreground, subject, midground, and a background plate a camera can move through.",
    h1: "Image to Layers: photo to parallax layers for 2.5D",
    eyebrow: "Parallax · depth over semantics",
    intro: [
      "A still photo can be made to move. Not by animating the image, but by cutting it into depth planes and pushing a virtual camera between them — the technique behind most of the “living photo” clips that look like they were shot on a slider.",
      "The cut is the easy half. The hard half is what a moving camera reveals: every occluded region needs pixels that the original photograph never contained, and that is the part most parallax tutorials skip.",
    ],
    demo: "live2d",
    level: "L3",
    tool: true,
    sections: [
      {
        id: "depth-vs-semantics",
        heading: "Depth order is not the same as meaning",
        lead: "A semantic split asks what things are. A depth split asks how far away they are.",
        body: [
          "For editing, you want semantics: the bottle, the label, the wall. For parallax you want distance, and distance ignores meaning completely — a poster and the wall it hangs on belong to the same plane, even though they are different objects.",
          "So the same image gets two different stacks depending on the job. If you separate for parallax with an editing mindset, you end up with twelve planes that all move at the same speed and a camera move that reads as flat.",
        ],
        bullets: [
          { title: "Foreground", text: "Anything closer than the subject — a corner of a table, a blurred leaf, the edge of a door frame. Small moves here read as large ones." },
          { title: "Subject", text: "The one thing the shot is about. Moves least in screen space so the eye keeps a reference point." },
          { title: "Midground", text: "Props, surfaces, secondary objects. This is where the parallax actually becomes visible." },
          { title: "Background plate", text: "The furthest plane, extended beyond the frame edges so the camera never runs off the plate." },
        ],
      },
      {
        id: "planes",
        heading: "How many planes a photo can honestly support",
        body: [
          "More planes is not more depth. The eye reads depth from occlusion, relative scale and focus falloff — cut more planes than the photo has depth cues and each one looks like cardboard.",
        ],
        table: {
          head: ["Shot type", "Planes that work", "The trap"],
          rows: [
            ["Studio product on a sweep", "3", "The sweep is one plane; splitting it breaks the illusion"],
            ["Portrait with shallow depth of field", "4", "The background is already blurred — do not sharpen it by cutting"],
            ["Full-body character or dress", "5–6", "Arms and hems cross planes, so expect manual seam work"],
            ["Interior or street scene", "5", "Too many planes turns into a diorama"],
            ["Landscape", "4", "Sky and horizon must stay one plate or the seam shows"],
          ],
        },
      },
      {
        id: "gaps",
        heading: "Filling the gaps the camera will expose",
        body: [
          "Separation reconstructs what was behind the subject — enough to survive a still composite, not necessarily enough to survive a camera move. Push the camera left and the edge of the reconstructed region becomes visible as a smear or a repeated texture.",
          "Fix it before you animate: export the stack, open the background plate in an editor, and extend the reconstructed area outward with clone or content-aware fill. Thirty seconds of painting prevents the one artefact that gives 2.5D away.",
        ],
        bullets: [
          { title: "Extend, do not re-separate", text: "The plate is already plausible in the middle; it only needs more area at the edges." },
          { title: "Keep the extension on its own layer", text: "Paint into a duplicate of the plate so you can dial it back if the seams show." },
          { title: "Match grain last", text: "Add noise to the painted area at the end, at the same scale as the photograph, or the fill reads as digital." },
        ],
      },
      {
        id: "camera",
        heading: "A camera move that survives the cut",
        steps: [
          { title: "Move less than feels right", text: "A 3–5 % lateral drift with a slow ease reads as depth. A fast pan reads as a slideshow with layers." },
          { title: "Animate one axis", text: "Left-to-right or in-to-out. Combining a pan with a tilt exposes seams in two directions at once." },
          { title: "Keep the subject near-static", text: "Let the background move against a steady subject; the contrast is the effect." },
          { title: "Ease both ends", text: "Linear motion makes even a good stack look like a template. Ease in and out over at least a second." },
        ],
        note: "A character dress is a special case: for a real 2.5D *model* you need a mesh and a rig, not just planes — see [Live2D character layers](/live2d-character-to-layers).",
      },
    ],
    faq: [
      {
        q: "Can I convert a dress photo into a 2.5D model?",
        a: "You can turn it into a depth-ordered layer stack that supports a convincing camera move. A rigged 2.5D model with bendable cloth is a mesh job and needs a different pipeline.",
      },
      {
        q: "How many depth layers should I use?",
        a: "Three for a studio shot, four or five for a portrait or interior, five or six for a full-body character. More planes than the photo has depth cues look like cut cardboard.",
      },
      {
        q: "Does it work on a video frame?",
        a: "Per frame, yes. Temporal consistency — the same seam staying in the same place across 200 frames — is a separate problem this does not solve.",
      },
      {
        q: "Do I need After Effects?",
        a: "No. Exports are PNGs with alpha, so any compositor that can offset layers over time works — Blender, Cavalry, Fusion, or a keyframed slide in a video editor.",
      },
    ],
    related: ["image-to-layers", "layer-levels/detailed", "live2d-character-to-layers", "showcase"],
    updated: "2026-11-12",
  },
];
