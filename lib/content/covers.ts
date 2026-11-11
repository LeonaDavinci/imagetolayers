import type { PageContent } from "./types";

export const coverPages: PageContent[] = [
  {
    slug: "cover-to-layers",
    cluster: "cover",
    title: "Image to Layers — Book, Album and Poster Covers",
    description:
      "Image to Layers — separate a finished cover into artwork, type, graphic marks and background layers so you can re-typeset or reformat without the source file.",
    h1: "Image to Layers: finished covers, reopened for editing",
    eyebrow: "Covers · L2–L3",
    intro: [
      "Covers outlive their source files. The designer leaves, the layered file is lost in a migration, and what remains is a flattened export at whatever size the last printer asked for.",
      "Separation turns that export back into something workable: artwork on its own, graphic marks on their own, type regions isolated, and a background that can be resized to a new trim size.",
    ],
    demo: "cover",
    level: "L3",
    tool: true,
    sections: [
      {
        id: "anatomy",
        heading: "The anatomy of a cover is unusually predictable",
        body: [
          "Book covers, album sleeves and posters share a structure: a background field, one or two graphic shapes, an image or illustration, and typography sitting in a deliberate hierarchy. That predictability is why separation works well on this class of image.",
          "It is also why L3 is the right level. Covers almost always contain text that needs its own region, plus at least one graphic element that must survive independently.",
        ],
        bullets: [
          { title: "Background field", text: "Flat colour, paper texture or photo — the layer that has to stretch to a new trim." },
          { title: "Artwork or image", text: "The illustration or photograph, with its own edge treatment." },
          { title: "Graphic marks", text: "Rules, shapes, frames, torn paper, gradients." },
          { title: "Type regions", text: "Title, author, subtitle, imprint — isolated as regions, not live text." },
        ],
      },
      {
        id: "retypeset",
        heading: "Re-typesetting is the main job",
        body: [
          "Most cover work after separation is typographic: a new edition needs a different imprint logo, a translated edition needs new copy, a reissue needs a new subtitle. In every case the artwork stays and the words change.",
          "Separation gives you the footprint of each text block. You remove the old glyphs and set new ones into the same measured area — which is why checking line count matters more than matching the font.",
        ],
        table: {
          head: ["Task", "What you need", "Layer used"],
          rows: [
            ["New subtitle or edition line", "Measured text footprint", "Text region"],
            ["New imprint or logo", "Clear space at the base", "Graphic mark"],
            ["Translated edition", "Phototype-free master", "Text-free stack"],
            ["New trim size", "Stretchable field", "Background"],
          ],
        },
        note: "Keep a text-free master. Every future edition, translation and reissue starts from that file, not from the last flattened export.",
      },
      {
        id: "formats",
        heading: "Same cover, different trim sizes",
        body: [
          "A cover exists at 6×9 inches for print, 1600px for an ebook listing, 1080×1080 for a social post and 1200×628 for a link preview. Resizing a flattened export scales the type with the artwork, which is why small-format covers end up with unreadable text.",
          "With layers, the background extends or crops, the artwork is repositioned, and the type is re-set at a size appropriate to the format. That is a real design task, but it no longer requires the original file.",
        ],
      },
      {
        id: "print",
        heading: "Print constraints worth knowing before you start",
        body: [
          "Separation output is raster. If the source was a 300dpi print file, reconstruction quality on occluded regions is whatever that resolution supports — generous for flat colour fields, marginal for fine illustration hidden behind a title block.",
          "Bleed is the other one. A separated cover's background layer usually stops at the trim edge, so extending for bleed means regenerating or stretching that layer rather than scaling the composite.",
        ],
        bullets: [
          { title: "Check the source resolution", text: "300dpi at final trim is the floor for print; below that, text edges soften." },
          { title: "Extend for bleed deliberately", text: "Stretch the background layer, do not scale the whole cover." },
          { title: "Keep type off reconstructed areas", text: "Generated texture under small type reads as noise in print." },
        ],
      },
    ],
    faq: [
      {
        q: "Can I get the original font back?",
        a: "No. Flattened type has no font, kerning or point-size data. You get a text region with a measurable footprint, then re-set the words in your own font.",
      },
      {
        q: "Which level should I use for a cover?",
        a: "L3 Detailed, which isolates text and graphic regions separately from the artwork. L2 merges type into the backdrop and is only enough when no text changes.",
      },
      {
        q: "Does it work on a photo-based cover?",
        a: "Yes, and it is often cleaner than a flat graphic cover because photographic depth gives the model real occlusion cues to work with.",
      },
      {
        q: "Can I separate a cover from a low-resolution preview?",
        a: "You can, but edges and reconstructed areas inherit that resolution. For print, always upload the largest file you have.",
      },
      {
        q: "Will the artwork still print at full quality?",
        a: "Raster layers are exported at source resolution without recompression of the composite. Only reconstructed (occluded) areas are estimated, so review those specifically.",
      },
      {
        q: "Can I use this for a client's reissue?",
        a: "Yes on paid plans. You are responsible for holding the rights to the source artwork; separation does not grant any licence to the underlying design.",
      },
    ],
    related: [
      "cover-to-layers/book-cover",
      "cover-to-layers/album-cover",
      "cover-to-layers/poster-to-editable-psd",
      "layer-levels/detailed",
    ],
    updated: "2026-11-11",
  },

  {
    slug: "cover-to-layers/book-cover",
    cluster: "cover",
    title: "Image to Layers — Re-Typeset a Finished Book Cover",
    description:
      "Image to Layers — separate a book cover into artwork, title block, author line, imprint and background layers. Re-set the type for a new edition or trim size.",
    h1: "Image to Layers: re-typeset a book cover you no longer have the file for",
    eyebrow: "Book covers",
    intro: [
      "Publishers reissue constantly, and the layered file from the first edition is usually gone. What survives is a print PDF someone flattened, or a JPEG on a backlist drive.",
      "Separating that file gives you the cover's structure back: artwork, title block, author line, imprint mark, and a field that can stretch to a new trim.",
    ],
    demo: "cover",
    level: "L3",
    tool: true,
    sections: [
      {
        id: "hierarchy",
        heading: "Covers are three editable decisions, not thirty",
        body: [
          "A cover looks dense but splits into a small number of genuine editing decisions: the artwork, the title treatment, the author line, and whatever sits at the base (imprint, quote, series mark). Everything else is either part of the background field or part of one of those blocks.",
          "This is why L3 is usually enough, and why pushing to a higher level produces fragments — half a letter here, a corner of the frame there — that no designer would edit separately.",
        ],
        bullets: [
          { title: "Artwork layer", text: "Illustration or photograph with its own alpha edge." },
          { title: "Title region", text: "The largest type block; measure it before removing." },
          { title: "Author region", text: "Often a different weight and tracking — keep it a separate region." },
          { title: "Base marks", text: "Imprint, series number, award seal." },
        ],
      },
      {
        id: "editions",
        heading: "New edition, same artwork",
        body: [
          "The most common job is a reissue: the publisher wants a new series look, a new subtitle, or a translated title, while keeping the commissioned illustration that the cover is built around.",
          "With a text-free master, that is a layout exercise. Without one, it is a manual reconstruction of the artwork behind the old title — the expensive part of any reissue.",
        ],
        table: {
          head: ["Edition change", "Keeps", "Redoes"],
          rows: [
            ["New subtitle", "Artwork, author, imprint", "Title block spacing"],
            ["Translation", "Everything visual", "All type, re-measured"],
            ["New series look", "Artwork", "Type system, base marks"],
            ["New trim size", "Everything", "Background extension, type scale"],
          ],
        },
      },
      {
        id: "measure",
        heading: "Measure before you delete",
        body: [
          "Before removing a text region, record its bounding box and the x-height of the original. Those two numbers let a new setting occupy the same visual space even in a different typeface.",
          "This is the part people skip, and it is why re-set covers often look wrong in a way nobody can name: the new block is technically correct but optically heavier or lighter than the one it replaced.",
        ],
        note: "Export the layer stack as a PSD and keep the text regions hidden rather than deleted. Future editions may need to reference the original footprint.",
      },
      {
        id: "covers-types",
        heading: "Where this works best — and where it does not",
        body: [
          "Illustrated covers, photographic covers and strong graphic covers all separate well. Covers built entirely from type — a title set in a single typeface across the whole surface — are the weak case, because there is no artwork to preserve and the type region is the entire cover.",
          "Hand-lettered or calligraphic titles also need care: the letters are artwork, so isolating them as a “text region” loses the detail that made them worth commissioning.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I separate a book cover from a PDF?",
        a: "Export the cover page to a high-resolution PNG first, then upload that. Multipage PDFs are not accepted directly in this preview.",
      },
      {
        q: "Will the spine and back cover be included?",
        a: "Only if they are in the file you upload. A full wrap needs a wide source; separate the front cover as its own job if that is all you need.",
      },
      {
        q: "How do I handle a quote or review line?",
        a: "Treat it as its own text region. It is usually small, tightly tracked and easy to miss when you plan the layer set — name it explicitly if the split leaves it attached to the artwork.",
      },
      {
        q: "Can I keep the original typeface?",
        a: "The pixels stay, but not the font. If you need the exact typeface, identify it from the sample and licence it — separation gives you placement, not typography.",
      },
      {
        q: "Is the reconstructed area safe for print?",
        a: "Review it at 100% before sending to press. Reconstructed regions under large type are usually fine; under small type or on textured stock they can read as noise.",
      },
    ],
    related: ["cover-to-layers", "cover-to-layers/album-cover", "cover-to-layers/poster-to-editable-psd", "image-to-psd"],
    updated: "2026-11-11",
  },

  {
    slug: "cover-to-layers/album-cover",
    cluster: "cover",
    title: "Image to Layers — Album Art, Type and Textures Apart",
    description:
      "Image to Layers — split an album sleeve into artwork, title type, logos and texture layers so a reissue or streaming variant keeps the original art direction.",
    h1: "Image to Layers: album artwork, ready for the next edition",
    eyebrow: "Album covers",
    intro: [
      "Album art is commissioned once and reused for decades: reissues, deluxe editions, anniversary pressings, streaming canvases, merchandise. Each format wants a different crop of the same artwork.",
      "Separation preserves the art direction while freeing the layout — the image stays, the typography and logos become movable parts.",
    ],
    demo: "cover",
    level: "L3",
    tool: true,
    sections: [
      {
        id: "sleeve",
        heading: "A sleeve is artwork plus marks",
        body: [
          "Most sleeves are one dominant image, a title treatment, and a small set of marks: label logo, catalogue number, parental advisory, sometimes a photographer credit. That is four or five groups — comfortable at L3.",
          "The temptation is to ask for more because the artwork is detailed. Resist it: detail inside the artwork is not a separate editing decision, and splitting it produces fragments the designer will just merge again.",
        ],
        bullets: [
          { title: "Artwork", text: "The commissioned image, with its grain or halftone texture intact." },
          { title: "Title type", text: "Often custom or heavily tracked; isolate the whole block." },
          { title: "Label marks", text: "Logo plus catalogue line, usually bottom corner." },
          { title: "Stickers and seals", text: "Advisory, anniversary seal, hype sticker — separate them." },
        ],
      },
      {
        id: "formats",
        heading: "One sleeve, five surfaces",
        body: [
          "A 12-inch sleeve is square. A streaming thumbnail is square but tiny. A canvas loop is 9:16. A deluxe box has a wider face. A merchandise print might be 18×24.",
          "Each needs the artwork re-centred and the type re-set at a size that survives the format. A sleeve whose title is 40% of the height reads as noise at 300px, so the small formats need a typographic decision rather than a scale-down.",
        ],
        table: {
          head: ["Surface", "Aspect", "Typical change"],
          rows: [
            ["12-inch sleeve", "1:1", "Master"],
            ["Streaming tile", "1:1", "Type re-sized, marks dropped"],
            ["Canvas loop", "9:16", "Artwork extended, title moved"],
            ["Deluxe box face", "Wide", "Artwork re-centred"],
            ["Merch print", "3:4", "No type, artwork only"],
          ],
        },
      },
      {
        id: "texture",
        heading: "Keeping the texture honest",
        body: [
          "Vinyl-era artwork carries print texture — halftone dots, misregistration, paper grain. That texture is part of the design, and it is the first thing lost when someone “cleans up” a separated layer.",
          "If you plan to re-composite, keep the original artwork layer with its texture and composite the new type over it, rather than rebuilding the artwork from clean parts.",
        ],
        note: "Never run a noise-reduction pass on a separated artwork layer before approval. It removes the artefact that makes the sleeve look like a record.",
      },
      {
        id: "reissue",
        heading: "A practical reissue workflow",
        steps: [
          { title: "Find the largest source", text: "The original sleeve scan beats any web export; upload that." },
          { title: "Separate at L3", text: "Artwork, title, label marks, stickers." },
          { title: "Build a text-free master", text: "Hide type layers and save the clean artwork for future formats." },
          { title: "Re-set per format", text: "New type sizes for tile, canvas and print, one at a time." },
        ],
      },
    ],
    faq: [
      {
        q: "Can I separate a vinyl sleeve scan?",
        a: "Yes. A flat scan of the printed sleeve is a normal raster image; separation works on it like any other. Dust and fold lines in the scan may be picked up as texture, so clean the scan first.",
      },
      {
        q: "Will the halftone texture survive?",
        a: "On the artwork layer, yes. Avoid sharpening or denoising passes afterwards if you want the print character to remain.",
      },
      {
        q: "Can I remove a parental advisory sticker?",
        a: "Yes — stickers separate as their own region, and the area underneath is reconstructed. Check that reconstruction at 100% before print.",
      },
      {
        q: "What about the artist's signature or handwriting?",
        a: "Treat it as artwork rather than type. Handwriting has no glyph structure to isolate, so it belongs with the image layer.",
      },
      {
        q: "Can I use this for merchandise printing?",
        a: "The artwork layer is usable, but check the resolution against the print size. A 1500px sleeve scan will not hold up at 18×24 inches.",
      },
    ],
    related: ["cover-to-layers", "cover-to-layers/book-cover", "cover-to-layers/podcast-cover", "layer-levels/detailed"],
    updated: "2026-11-11",
  },

  {
    slug: "cover-to-layers/poster-to-editable-psd",
    cluster: "cover",
    title: "Image to Layers — Poster to Editable PSD",
    description:
      "Image to Layers — convert a flattened poster, flyer or event graphic into a layered PSD: background, imagery, graphic rules and text regions, ready for a new date.",
    h1: "Image to Layers: turn a flattened poster into an editable PSD",
    eyebrow: "Posters · flyers",
    intro: [
      "Event posters go stale fast. The date changes, the lineup changes, the venue changes — and the file that would make those edits trivial is long gone.",
      "A separated poster gives you the same structure back: field, image, rules, and text blocks that can be emptied and re-set for the next edition.",
    ],
    demo: "cover",
    level: "L3",
    tool: true,
    sections: [
      {
        id: "structure",
        heading: "Poster structure is a grid with pictures on it",
        body: [
          "Most event graphics are a background field, one or two images, decorative rules or shapes, and a typographic block containing date, venue and lineup. The typographic block is usually the densest part and the one that changes every time.",
          "Separating it into regions — headline, date block, lineup list, footer — costs one extra level but saves the entire re-typesetting job next month.",
        ],
        bullets: [
          { title: "Headline", text: "Largest block; keeps the poster recognisable across editions." },
          { title: "Date and venue", text: "Changes most often; isolate it so it can be replaced cleanly." },
          { title: "Lineup list", text: "Dense small type — the region most likely to reveal reconstruction artefacts." },
          { title: "Imagery", text: "Photo or illustration with its own edge treatment." },
        ],
      },
      {
        id: "series",
        heading: "Building a poster series from one layout",
        body: [
          "A recurring event needs five posters a year that look like siblings. If the first one is separated, each subsequent edition is a text swap rather than a redesign.",
          "The efficient version keeps the imagery and the grid, replaces the type blocks, and only re-shoots photography when the event identity actually changes.",
        ],
        table: {
          head: ["Recurring change", "Layer touched"],
          rows: [
            ["Date and venue", "Text region"],
            ["Lineup", "Text region"],
            ["Sponsor row", "Graphic + text"],
            ["Season palette", "Background field"],
            ["New hero image", "Image layer only"],
          ],
        },
      },
      {
        id: "psd",
        heading: "What the PSD looks like when it opens",
        body: [
          "A layered document with the field at the bottom, the imagery above it, decorative rules, and each text block as its own raster layer with a transparent surround. Layer names follow what was detected — `Background`, `Headline block`, `Date`, `Image 1` — rather than sequential numbering.",
          "There are no smart objects, live type or adjustment layers. That is deliberate: it keeps compatibility broad across Photoshop, Affinity, Photopea and GIMP, and avoids broken links in a handoff.",
        ],
        note: "If you need the type truly editable, retype it. The PSD gives you placement and structure; typography still has to be set.",
      },
      {
        id: "print-check",
        heading: "Before it goes to print",
        steps: [
          { title: "Check the trim", text: "Posters are trimmed after print; extend the background field past the cut line." },
          { title: "Inspect reconstructed areas", text: "Small type over generated texture is where artefacts show first." },
          { title: "Confirm colour mode", text: "Output is sRGB; convert to CMYK before sending to a press." },
          { title: "Verify resolution at final size", text: "A4 at 300dpi and A1 at 300dpi are very different pixel counts." },
        ],
      },
    ],
    faq: [
      {
        q: "Can I convert a poster from a PDF?",
        a: "Render the poster page to a high-resolution PNG and upload that. The preview build accepts JPG, PNG and WebP only.",
      },
      {
        q: "Are the text blocks editable as text?",
        a: "No — they are isolated text regions. You delete or hide them and set new type in the same footprint.",
      },
      {
        q: "How many text regions will I get?",
        a: "Depends on the layout and on what you name. At L3 you typically get one region per visually distinct block; name specific blocks if the split merges them.",
      },
      {
        q: "Will the poster keep its exact colours?",
        a: "Raster layers keep source colours in sRGB without recompression of the composite. Convert to CMYK yourself for press, and expect minor gamut shifts in saturated areas.",
      },
      {
        q: "Can I rebuild a poster for a different aspect ratio?",
        a: "Yes — stretch the background field, reposition imagery, and re-set type. Do not scale the whole composition, or the type will end up the wrong optical size.",
      },
    ],
    related: ["cover-to-layers", "cover-to-layers/book-cover", "product-image-to-layers/ecommerce-ad-creative", "image-to-psd"],
    updated: "2026-11-11",
  },

  {
    slug: "cover-to-layers/podcast-cover",
    cluster: "cover",
    title: "Image to Layers — Podcast Cover, Every Platform Size",
    description:
      "Image to Layers — separate a podcast cover into portrait, type, logo and background layers, then cut square, vertical and banner variants without redesigning.",
    h1: "Image to Layers: podcast artwork that survives every platform crop",
    eyebrow: "Podcast covers",
    intro: [
      "A podcast cover gets cropped by every platform that shows it: square in Apple Podcasts and Spotify, vertical in some video feeds, wide in YouTube banners and newsletter headers.",
      "The show identity is usually a portrait, a wordmark and a colour field. Separating those three makes the variants a layout job instead of a redesign.",
    ],
    demo: "cover",
    level: "L2",
    tool: true,
    sections: [
      {
        id: "three-parts",
        heading: "Three parts, three platforms",
        body: [
          "Podcast artwork is unusually simple: a subject (host portrait, mascot or object), a wordmark, and a field. That is L2 territory — four to five layers, no need for deeper splits.",
          "The value is in what each layer unlocks: the subject for vertical formats, the wordmark for typographic legibility at small sizes, the field for platform-specific colour matching.",
        ],
        bullets: [
          { title: "Subject layer", text: "Host or mascot, ready for a vertical or banner crop." },
          { title: "Wordmark layer", text: "Re-scale independently when the cover is shown at 60px." },
          { title: "Field layer", text: "Re-tint to match a platform's dark or light UI." },
          { title: "Episode number badge", text: "If present, isolate it — it changes every week." },
        ],
      },
      {
        id: "small-sizes",
        heading: "Designing for the 60-pixel case",
        body: [
          "Most podcast covers are consumed as thumbnails. A wordmark that reads at 3000px often becomes a grey smear at 60px, and the fix is not more contrast — it is separating the wordmark and re-setting it larger for small contexts.",
          "That is only possible if the wordmark is its own layer. Otherwise the choice is a full redesign or an unreadable tile.",
        ],
        note: "Check every variant at 60px before publishing. If the title is unreadable, the separation did not solve the actual problem.",
      },
      {
        id: "episode",
        heading: "Episode artwork without a designer",
        body: [
          "Weekly episode covers reuse the same template with a new number, title and guest name. If the master artwork is layered, each episode is a text replacement in a fixed grid.",
          "This is the highest-leverage use of separation for podcast teams: one separation, then fifty episodes without opening a design file.",
        ],
        table: {
          head: ["Asset", "Built from"],
          rows: [
            ["Show cover", "Subject + wordmark + field"],
            ["Episode cover", "Show stack + episode text region"],
            ["YouTube banner", "Subject re-cropped wide + field"],
            ["Newsletter header", "Wordmark on extended field"],
          ],
        },
      },
      {
        id: "brand",
        heading: "Keeping the brand intact across variants",
        body: [
          "The risk with per-platform variants is drift: each one gets built slightly differently and after a year the show looks like four different podcasts.",
          "Fix a rule before you start — one subject scale, one wordmark size relationship, one field treatment — and treat the layers as the enforcement mechanism rather than the creative decision.",
        ],
      },
    ],
    faq: [
      {
        q: "Which level do I need for podcast artwork?",
        a: "L2 Standard is enough for most shows: subject, wordmark, field, and a badge if present. L3 is only worth it when the cover contains several graphic elements that change independently.",
      },
      {
        q: "Can I remove the show title and set a new one?",
        a: "Yes — the wordmark comes back as its own region. Delete it and set new type; the original font cannot be recovered from pixels.",
      },
      {
        q: "Will the portrait stay sharp in a vertical crop?",
        a: "It stays at source resolution. A square 3000px cover has enough height for most vertical crops, but a 1400px cover will soften when you crop hard.",
      },
      {
        q: "Can I produce episode covers in bulk?",
        a: "Not automatically in this preview. The pattern is one separated master plus a fixed text grid, with each episode set manually until batch templating ships.",
      },
      {
        q: "Does this work for a photographic host portrait?",
        a: "Yes, and hair edges are the usual cleanup point. Budget one manual matte pass on the portrait layer.",
      },
    ],
    related: ["cover-to-layers", "cover-to-layers/album-cover", "cover-to-layers/book-cover", "layer-levels/standard"],
    updated: "2026-11-11",
  },
];
