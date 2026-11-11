import type { PageContent } from "./types";

export const youtubePages: PageContent[] = [
  {
    slug: "youtube-thumbnail-to-layers",
    cluster: "youtube",
    title: "Image to Layers — YouTube Thumbnail, Subject and Text Apart",
    description:
      "Image to Layers — separate a finished YouTube thumbnail into presenter, text regions, arrows, stickers and background layers. Re-title without rebuilding artwork.",
    h1: "Image to Layers: turn a finished thumbnail into editable layers",
    eyebrow: "YouTube · L3 default",
    intro: [
      "A thumbnail is the highest-leverage image a creator makes and the least editable. Once it is exported, the face, the headline, the arrow and the background are one flat file.",
      "Layers change the economics of a redesign: the presenter you already shot stays, the background you already graded stays, and only the parts that should change get rebuilt.",
    ],
    demo: "youtube",
    level: "L3",
    tool: true,
    sections: [
      {
        id: "anatomoy",
        heading: "What a thumbnail is made of",
        body: [
          "Thumbnails are typographic compositions pretending to be photographs: a subject with an exaggerated expression, one large headline, and a graphic device — an arrow, a circle, a highlight shape — pointing at whatever the video is about.",
          "That is four to six genuine editing decisions, which is why **L3 Detailed** is the right level rather than the maximum.",
        ],
        bullets: [
          { title: "Presenter cutout", text: "Face, hands and gesture, isolated with clean hair edges." },
          { title: "Headline region", text: "Rendered glyphs as a region — replaceable, not re-typable." },
          { title: "Graphic devices", text: "Arrows, circles, highlights, borders." },
          { title: "Background", text: "Gradient or scene, reconstructed behind the subject." },
        ],
      },
      {
        id: "rules",
        heading: "The platform rules that constrain the redesign",
        body: [
          "Thumbnails are 1280×720, under 2 MB, JPG or PNG. YouTube shows them at wildly different sizes — a large shelf tile, a mobile feed card, a sidebar suggestion at roughly 120px wide — and the 120px case is where most designs fail.",
          "Before you redesign, check the headline at sidebar size. If it is unreadable, the fix is fewer words and a bigger type block, which is only possible when the text region is its own layer.",
        ],
        note: "Design at 1280×720 and evaluate at 120×68. If the idea survives that reduction, it will survive every other placement.",
      },
      {
        id: "workflow",
        heading: "Redesign a thumbnail in four moves",
        steps: [
          { title: "Separate at L3", text: "Name the presenter and the headline block if the split merges them." },
          { title: "Keep what works", text: "The face that already performs is an asset, not something to re-shoot." },
          { title: "Replace the rest", text: "New headline, new arrow direction, new backdrop colour." },
          { title: "Check at three sizes", text: "1280, 320 and 120 pixels wide — then export under 2 MB." },
        ],
      },
      {
        id: "text",
        heading: "Rendered text is not editable text",
        body: [
          "This is the honest limitation and the one people are most often surprised by. After flattening, the words are pixels shaped like letters. No font, no kerning, no point size — nothing to edit.",
          "What you get is the region and its footprint: exactly how much space the headline occupied, where it sat, and what the background looked like underneath. New copy goes into that measured area, set in your own font.",
        ],
        table: {
          head: ["You want", "Separation gives you", "You still do"],
          rows: [
            ["Change the wording", "An empty measured region", "Set new type"],
            ["Move the headline", "An isolated text layer", "Reposition it"],
            ["Match the original font", "A pixel sample", "Identify and licence the font"],
            ["Keep the original copy", "The text layer, intact", "Nothing"],
          ],
        },
      },
      {
        id: "limits",
        heading: "Where thumbnail separation gets messy",
        body: [
          "Glow, lens flares and coloured light spill are the usual trouble. A bright rim light on the presenter's shoulder is both part of the person and part of the background, and the model has to assign it to one side.",
          "If your thumbnail depends on heavy glow, expect to soften the boundary manually — or accept that the reconstructed background carries a halo where the subject used to be.",
        ],
        bullets: [
          { title: "Rim light", text: "May attach to the subject or the backdrop; check both." },
          { title: "Drop shadows on the subject", text: "Often more convincing kept with the presenter." },
          { title: "Screenshot or UI elements", text: "Fine detail and small type get soft at mask boundaries." },
          { title: "Baked-in motion blur", text: "Blurred edges produce fuzzy masks; start from a sharp source." },
        ],
      },
    ],
    faq: [
      {
        q: "What size should the source thumbnail be?",
        a: "Upload the original 1280×720 export rather than a screenshot of the YouTube page. Screenshots add compression artefacts and platform UI that the model then has to deal with.",
      },
      {
        q: "Can I change the thumbnail text?",
        a: "You can remove the existing text region and set new copy in the same footprint. The original characters are not editable — see [changing thumbnail text](/youtube-thumbnail-to-layers/change-thumbnail-text).",
      },
      {
        q: "Will the presenter cut out cleanly?",
        a: "Usually yes, with hair edges as the cleanup point. Strong rim lighting or a busy background behind the head makes the boundary harder.",
      },
      {
        q: "Which layer level should I use?",
        a: "L3 Detailed for thumbnails with a headline and graphic devices. L2 merges the text into the backdrop, which defeats the purpose if the headline is what you are changing.",
      },
      {
        q: "Can I make several versions for testing?",
        a: "Yes — that is the main use. Build variants from the same stack and test them with YouTube's own A/B feature. See [thumbnail A/B testing](/youtube-thumbnail-to-layers/thumbnail-a-b-test).",
      },
      {
        q: "Does the export stay under YouTube's file limit?",
        a: "A 1280×720 PNG of a layered composition is typically well under 2 MB. If it is not, export as JPG at high quality; the platform re-encodes either way.",
      },
    ],
    related: [
      "youtube-thumbnail-to-layers/change-thumbnail-text",
      "youtube-thumbnail-to-layers/1280x720-thumbnail",
      "youtube-thumbnail-to-layers/thumbnail-a-b-test",
      "layer-levels/detailed",
    ],
    updated: "2026-11-11",
  },

  {
    slug: "youtube-thumbnail-to-layers/change-thumbnail-text",
    cluster: "youtube",
    title: "Image to Layers — Change Thumbnail Text, No Source File",
    description:
      "Image to Layers — remove the old headline from a finished thumbnail, keep the presenter and background, and set new copy in the same space. No source file needed.",
    h1: "Image to Layers: change the words on a finished thumbnail",
    eyebrow: "Thumbnails · text replacement",
    intro: [
      "The video is fine. The title is fine. The thumbnail has the wrong number in it, or the old episode name, or a claim marketing no longer wants to make.",
      "You cannot edit pixels back into type — but you can isolate the text region, see exactly how much space it occupied, and set new copy that fits that space.",
    ],
    demo: "youtube",
    level: "L3",
    tool: true,
    sections: [
      {
        id: "why-hard",
        heading: "Why this is hard without layers",
        body: [
          "A headline in a thumbnail usually sits over the background, sometimes over part of the presenter, and often has a stroke, shadow or glow behind it. To remove it you have to reconstruct whatever was underneath — background texture, a shoulder, a gradient.",
          "Doing that by hand is a clone-stamp session. Doing it from a separated stack means the reconstruction already happened, because the text region is its own layer with an estimated plate behind it.",
        ],
        bullets: [
          { title: "Text over background", text: "Background reconstructs cleanly when it is a gradient or soft texture." },
          { title: "Text over the subject", text: "Harder — the plate has to invent part of a shoulder or hand." },
          { title: "Text with a shadow", text: "The shadow is part of the region; removing it removes the shadow too." },
          { title: "Outlined or 3D type", text: "Treat the outline and extrusion as one region." },
        ],
      },
      {
        id: "process",
        heading: "Replacing copy in a measured space",
        steps: [
          { title: "Separate at L3", text: "The headline arrives as its own region." },
          { title: "Measure the footprint", text: "Record the bounding box and the x-height of the original." },
          { title: "Hide the old region", text: "Not delete — keep it for reference if the new copy needs a second pass." },
          { title: "Set new type", text: "Match the optical weight, not just the height; heavy sans titles read larger than their point size." },
          { title: "Check at 120px", text: "The replacement must survive the smallest placement." },
        ],
        note: "Match the original's visual weight, not its measurements. A condensed bold face and a wide bold face at the same pixel height look like different sizes.",
      },
      {
        id: "fit",
        heading: "Fitting longer copy into a fixed space",
        body: [
          "Thumbnail copy works in two to five words. If the new message needs more, the space is the constraint and the copy has to change — not the layout.",
          "Practical reductions: drop articles, use a numeral instead of a word, replace a phrase with a symbol, or move the qualifier into the video title where it is actually read.",
        ],
        table: {
          head: ["Original", "Too long", "Fits"],
          rows: [
            ["I TESTED 3 LAPTOPS", "I TESTED THREE DIFFERENT LAPTOPS", "3 LAPTOPS TESTED"],
            ["THIS CHANGED MY MIND", "THIS COMPLETELY CHANGED MY MIND", "MIND CHANGED"],
            ["$100 VS $1000", "$100 VERSUS $1000 SETUP", "$100 vs $1000"],
          ],
        },
      },
      {
        id: "alternatives",
        heading: "When to rebuild instead of replace",
        body: [
          "Replacement is right when the composition still works and only the words are stale. It is the wrong tool when the idea itself changed — a new premise needs a new image, not a new caption.",
          "Rule of thumb: if you would have to move the presenter, change the expression or replace the background to make the new headline make sense, start a fresh thumbnail. See [A/B testing](/youtube-thumbnail-to-layers/thumbnail-a-b-test) for how to decide with data rather than opinion.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I literally edit the existing letters?",
        a: "No. Flattened type has no glyph data. The workflow is to isolate the text region, remove it, and set new type in the same footprint.",
      },
      {
        q: "What if the text sits on top of the person?",
        a: "The area underneath is reconstructed as an estimate. Small overlaps read fine; a headline covering half a face will leave an obviously invented region.",
      },
      {
        q: "Can I keep the original text style?",
        a: "You can approximate it by matching weight, width and stroke. Exact font matching requires identifying and licensing the typeface.",
      },
      {
        q: "Does this work on a thumbnail downloaded from YouTube?",
        a: "Yes, but downloaded images are recompressed. Get the original 1280×720 export if you can — cleaner source means cleaner reconstruction.",
      },
      {
        q: "How many words should a thumbnail headline have?",
        a: "Two to five. Anything longer fails at sidebar size regardless of how well it is typeset.",
      },
    ],
    related: [
      "youtube-thumbnail-to-layers",
      "youtube-thumbnail-to-layers/thumbnail-a-b-test",
      "youtube-thumbnail-to-layers/1280x720-thumbnail",
      "layer-levels/detailed",
    ],
    updated: "2026-11-11",
  },

  {
    slug: "youtube-thumbnail-to-layers/1280x720-thumbnail",
    cluster: "youtube",
    title: "Image to Layers — 1280×720 Thumbnails at Native Size",
    description:
      "Image to Layers — separate a thumbnail at native 1280×720, re-compose it, and export under YouTube's 2 MB limit without losing the detail that reads at small sizes.",
    h1: "Image to Layers: thumbnails at 1280×720, without the guesswork",
    eyebrow: "Thumbnails · specs",
    intro: [
      "YouTube's thumbnail spec is narrow: 1280×720, 16:9, under 2 MB, JPG or PNG. Most thumbnail problems are not creative — they are a design that was never checked at the sizes the platform actually uses.",
      "This page is the specification side of the workflow: what to upload, what to rebuild, and what to check before uploading.",
    ],
    demo: "youtube",
    level: "L3",
    tool: true,
    sections: [
      {
        id: "spec",
        heading: "The numbers that matter",
        body: [
          "1280×720 is a 16:9 canvas with a minimum width of 640 pixels for custom thumbnails. Under 2 MB. JPG, GIF, PNG or BMP accepted, with JPG recommended for photographic content.",
          "Those are the upload rules. The design rules are harder: the image will be displayed at 1280px on a TV, around 360px in a desktop shelf, and roughly 120px in a sidebar. One composition has to work at all three.",
        ],
        table: {
          head: ["Placement", "Rendered width", "What survives"],
          rows: [
            ["Watch page", "~1280px", "Everything"],
            ["Home shelf", "~360px", "Face, one word, one shape"],
            ["Sidebar suggestion", "~120px", "Face silhouette and colour"],
            ["Mobile feed", "~400px", "Same as shelf"],
          ],
        },
      },
      {
        id: "rebuild",
        heading: "Rebuilding at native size",
        body: [
          "Always separate the original 1280×720 file rather than a scaled screenshot. The mask quality depends on edge pixels, and a screenshot has already lost them to compression.",
          "If the only available copy is smaller, separate it and rebuild the canvas — but accept that the reconstructed background will be softer than the rest of the composition, and keep type off those regions.",
        ],
        note: "Scaling up a thumbnail to 1280×720 does not add detail. If the source is 640px wide, the honest move is a new design, not an upscale.",
      },
      {
        id: "checks",
        heading: "Six checks before you upload",
        steps: [
          { title: "Canvas", text: "Exactly 1280×720, no letterboxing." },
          { title: "File size", text: "Under 2 MB — JPG at 85–90% quality usually lands well under." },
          { title: "Small-size read", text: "Shrink to 120px wide; the idea must still be legible." },
          { title: "Contrast against YouTube UI", text: "Dark thumbnails disappear into dark mode; check the white and dark themes." },
          { title: "No misleading overlays", text: "Avoid fake play buttons, fake progress bars and fake UI chrome." },
          { title: "Text safe area", text: "Keep type clear of the duration badge in the bottom-right." },
        ],
      },
      {
        id: "export",
        heading: "Exporting from a layer stack",
        body: [
          "Export the composite at 1280×720 and keep the layers. The composite is what YouTube receives; the layers are what makes next month's variant a ten-minute job instead of an hour.",
          "For animated or multi-variant testing, keep each variant on its own layer group so the changes between them are explicit and reversible.",
        ],
      },
    ],
    faq: [
      {
        q: "What is the maximum thumbnail file size?",
        a: "2 MB. Both JPG and PNG are accepted; JPG at high quality is usually the safest choice for photographic thumbnails with gradients.",
      },
      {
        q: "Does a PNG look better than a JPG?",
        a: "It can, for flat graphics and hard type edges, but YouTube re-encodes uploads anyway. At 1280×720 the difference is marginal and the file size cost is real.",
      },
      {
        q: "Can I upload a 1920×1080 thumbnail?",
        a: "YouTube will accept and downscale it, but there is no benefit — the platform renders 16:9 at 1280×720 for custom thumbnails.",
      },
      {
        q: "Why does my thumbnail look blurry in the feed?",
        a: "Usually because fine detail was designed at full size. Small placements cannot resolve thin strokes, small type or busy texture; simplify the composition instead of sharpening it.",
      },
      {
        q: "Does the duration badge cover part of my image?",
        a: "Yes, bottom-right. Keep important elements out of roughly the last 15% of the width along the bottom edge.",
      },
    ],
    related: [
      "youtube-thumbnail-to-layers",
      "youtube-thumbnail-to-layers/change-thumbnail-text",
      "youtube-thumbnail-to-layers/thumbnail-a-b-test",
      "layer-levels/detailed",
    ],
    updated: "2026-11-11",
  },

  {
    slug: "youtube-thumbnail-to-layers/thumbnail-a-b-test",
    cluster: "youtube",
    title: "Image to Layers — Thumbnail A/B Tests From One Stack",
    description:
      "Image to Layers — test thumbnail variants that differ in one variable at a time. Separate the stack once, change the headline or subject, and run a clean test.",
    h1: "Image to Layers: thumbnail tests that isolate one variable",
    eyebrow: "Thumbnails · testing",
    intro: [
      "Most thumbnail tests are invalid before they start: a new face, a new headline, a new colour and a new crop all at once. When the result comes in, nobody knows what caused it.",
      "A separated stack makes isolation easy — change one layer, keep everything else byte-identical, and the result is actually attributable.",
    ],
    demo: "youtube",
    level: "L3",
    tool: true,
    sections: [
      {
        id: "variables",
        heading: "Test one thing, or learn nothing",
        body: [
          "Thumbnail performance is driven by a small number of variables: the face and its expression, the headline copy, the graphic device, and the background contrast. Pick one per test.",
          "If your stack separates presenter, text region and background, each of those tests is a single layer swap. If it does not, every variant is a new composition and the comparison is contaminated.",
        ],
        bullets: [
          { title: "Expression test", text: "One presenter layer swapped for another; nothing else moves." },
          { title: "Copy test", text: "Same footprint, different words." },
          { title: "Colour test", text: "Background layer only — often the biggest effect on CTR." },
          { title: "Device test", text: "Arrow vs circle vs nothing, same position." },
        ],
      },
      {
        id: "platform",
        heading: "Use the platform's own test, not guesswork",
        body: [
          "YouTube's Test & Compare feature rotates thumbnails across real impressions and reports watch time share, which is a better signal than click-through rate alone — a shocking thumbnail can win clicks and lose retention.",
          "Run it long enough to clear normal variance. A two-day test on a small channel tells you about the day, not the thumbnail.",
        ],
        note: "Watch time share is the metric that matters. A thumbnail that wins clicks but loses retention has cost you distribution.",
      },
      {
        id: "build",
        heading: "Building the variant set",
        steps: [
          { title: "Separate the current winner", text: "L3, with the presenter and headline isolated." },
          { title: "Clone the stack", text: "Duplicate the PSD so each variant is one edited layer, not a new file." },
          { title: "Change one layer per variant", text: "Name the files by the variable, not by version number." },
          { title: "Export all at spec", text: "1280×720, under 2 MB, identical compression settings." },
          { title: "Log the hypothesis", text: "One line per variant: what you changed and what you expected." },
        ],
      },
      {
        id: "results",
        heading: "Reading results without fooling yourself",
        body: [
          "Small samples produce dramatic, meaningless swings. If the test ran for a few thousand impressions, treat the result as a hint rather than a finding.",
          "Also separate the thumbnail from the title: they compete for the same attention and users read them together. A headline that repeats the video title wastes the second slot.",
        ],
        table: {
          head: ["Signal", "What it means"],
          rows: [
            ["CTR up, retention down", "Over-promised; the thumbnail is misleading"],
            ["CTR flat, retention up", "Better fit with the content; keep it"],
            ["Both up", "Genuine improvement, roll it out"],
            ["Both down", "Revert and test a different variable"],
          ],
        },
      },
    ],
    faq: [
      {
        q: "How many variants should I test at once?",
        a: "Two or three. YouTube's comparison works best with a small set, and more variants dilute the impressions per variant on a small channel.",
      },
      {
        q: "How long should a thumbnail test run?",
        a: "Until each variant has meaningful impressions — typically one to two weeks on a mid-sized channel. Shorter tests mostly measure noise.",
      },
      {
        q: "Does a separated stack really make a difference?",
        a: "Yes, because it enforces isolation. When everything but one layer is identical, the result is attributable; when each variant is a fresh composition, it is not.",
      },
      {
        q: "Can I test different text on the same thumbnail?",
        a: "That is the cleanest test there is — same footprint, different words. Keep the type size and position identical so only the copy changes.",
      },
      {
        q: "Should I test thumbnails on old videos?",
        a: "Yes. Refreshing a thumbnail on an evergreen video is often the highest-return test available, and the stack lets you do it without a redesign.",
      },
    ],
    related: [
      "youtube-thumbnail-to-layers",
      "youtube-thumbnail-to-layers/change-thumbnail-text",
      "youtube-thumbnail-to-layers/1280x720-thumbnail",
      "showcase",
    ],
    updated: "2026-11-11",
  },
];
