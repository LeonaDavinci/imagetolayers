import type { PageContent } from "./types";

export const ecommercePages: PageContent[] = [
  {
    slug: "product-image-to-layers",
    cluster: "ecommerce",
    title: "Image to Layers — Product Photo, Editable Elements",
    description:
      "Image to Layers — turn a flat product photo into editable layers: the product, its props, the surface, and a background rebuilt behind them. Made for marketplace main images.",
    h1: "Image to Layers: turn a product photo into editable layers",
    eyebrow: "E-commerce · L2 default",
    intro: [
      "A product photo is the most reused asset a brand owns and the least reusable file it stores. The bottle, the props, the surface and the backdrop live in one rectangle, so every new campaign starts with a reshoot or a clumsy mask.",
      "Separating the photo once fixes that permanently: the product becomes an asset you can drop into a new scene, and the old scene survives as a clean plate you can re-dress.",
    ],
    demo: "ecommerce",
    level: "L2",
    tool: true,
    sections: [
      {
        id: "what-separates",
        heading: "What a product scene actually splits into",
        body: [
          "Commercial product photography has a predictable anatomy: one hero object, two to four supporting props, a surface, a backdrop, and a shadow group that ties everything together. That is five to six layers — exactly the **L2 Standard** target.",
          "The reason L2 is the default here is not cost. It is that a product scene rarely contains more independent editing decisions than that. Asking for nine layers on a bottle-and-bowl setup produces duplicate bottles and background fragments, not more control.",
        ],
        bullets: [
          { title: "Hero product", text: "Clean alpha edge, no leftover backdrop pixels on the silhouette." },
          { title: "Supporting props", text: "Leaf, towel, riser, bowl — each movable without dragging the product." },
          { title: "Surface and shadow", text: "Kept as a group so the composition still feels grounded after a move." },
          { title: "Reconstructed backdrop", text: "The wall or sweep continues behind the product instead of ending in a hole." },
        ],
      },
      {
        id: "why",
        heading: "Why sellers separate instead of reshooting",
        body: [
          "Reshooting is the default because it is the only way to get a genuinely new photograph. But most seasonal refreshes do not need a new photograph — they need the same product on a different surface, in a different palette, with a different set of props.",
          "That is a composition problem, not a photography problem. Once the layers exist, a spring-to-autumn palette change is a background swap and a two-minute colour adjustment on the props.",
        ],
        table: {
          head: ["Task", "Reshoot", "Layered asset"],
          rows: [
            ["New background colour", "Full studio day", "Swap the base layer"],
            ["Seasonal prop change", "New props, new lighting", "Delete or replace one layer"],
            ["Extra crop for a marketplace", "Re-export from RAW", "Recrop the stack"],
            ["Localised packaging mockup", "New physical sample", "Layer a new label region"],
          ],
        },
      },
      {
        id: "workflow",
        heading: "A repeatable workflow for a catalogue",
        steps: [
          { title: "Shoot or collect the flat file", text: "Any JPG or PNG. Consistent lighting across a category matters more than resolution." },
          { title: "Separate at L2", text: "Lock the level for the whole set. Consistency across a category page is worth more than per-image optimisation." },
          { title: "Clean the hero edge", text: "One pass at 200% on the product silhouette; glass and mesh are the usual offenders." },
          { title: "Store the stack", text: "Keep the ZIP, not just the flattened export. The ZIP is the reusable asset." },
          { title: "Compose variants", text: "New base, same product — then export at each marketplace's required pixel size." },
        ],
      },
      {
        id: "marketplace",
        heading: "Platform requirements that affect the export",
        body: [
          "Amazon wants a pure white background on the main image with the product filling roughly 85% of the frame. A separated product on transparency makes that trivial: place it on white, scale, done — no masking the old backdrop out of the silhouette.",
          "Shopify and most DTC themes accept lifestyle and cutout images in the same gallery, so the same stack can produce both the clean main image and the styled secondary image without two shoots. We cover the platform-specific details on [Amazon main images](/product-image-to-layers/amazon-main-image) and [Shopify product photos](/product-image-to-layers/shopify-product-photo).",
        ],
        note: "Marketplace images are rarely the bottleneck — inconsistent lighting across a category is. Separation lets you relight by replacing the base and shadow group rather than reshooting.",
      },
      {
        id: "limits",
        heading: "Where product separation needs a human",
        body: [
          "Reflective packaging is the hard case. A mirror-finish box reflects the studio, the photographer and the adjacent prop; the model has to decide what belongs to the box and what belongs to the room, and it will sometimes get that wrong.",
          "Liquid in clear glass, steam, and very fine chains or mesh also need a manual matte pass. Budget for it on those SKUs instead of assuming the first run is final.",
        ],
        bullets: [
          { title: "Mirror finishes", text: "Reflections straddle two layers; expect to mask by hand." },
          { title: "Cast shadows on textured surfaces", text: "Shadow boundaries blur into the surface pattern." },
          { title: "Products with no clear silhouette", text: "Soft goods, fur, and draped fabric." },
        ],
      },
    ],
    faq: [
      {
        q: "Which layer level should I use for product photos?",
        a: "L2 Standard, which returns four to six layers: hero product, supporting props, surface and shadow group, and a reconstructed backdrop. It matches the number of real editing decisions in a typical commercial product scene.",
      },
      {
        q: "Do I get a pure white background for Amazon?",
        a: "You get the product on transparency plus a reconstructed backdrop layer. Place the product on a white canvas and export — that produces a compliant main image without re-masking the original backdrop.",
      },
      {
        q: "Can I use the output commercially?",
        a: "Yes, on paid plans, including client work. The separation is a transformation of your own source image; you keep responsibility for having the rights to that source.",
      },
      {
        q: "How consistent is output across a catalogue?",
        a: "Consistent enough for a category page if you lock one level and shoot with similar lighting. Radically different lighting setups will still produce different edge quality.",
      },
      {
        q: "What about product shadows?",
        a: "Cast shadows are returned as their own group at L2. Keep them when you want the product grounded, delete them when you need a floating asset for a composite.",
      },
      {
        q: "Can it separate two products in one photo?",
        a: "Yes at L2 or L3, and explicitly if you name each product in the instruction field. For bundles with heavy overlap, see the [product bundle workflow](/product-image-to-layers/product-bundle).",
      },
    ],
    related: [
      "product-image-to-layers/amazon-main-image",
      "product-image-to-layers/shopify-product-photo",
      "product-image-to-layers/product-bundle",
      "image-to-layers",
    ],
    updated: "2026-11-11",
  },

  {
    slug: "product-image-to-layers/amazon-main-image",
    cluster: "ecommerce",
    title: "Image to Layers — Amazon Main Image, White Background",
    description:
      "Image to Layers — separate an Amazon product photo into product, props and backdrop layers, then rebuild a compliant white main image and styled secondary images.",
    h1: "Image to Layers: Amazon main images from one separated source",
    eyebrow: "Amazon · main image",
    intro: [
      "Amazon's main image rules are simple and unforgiving: pure white background, product filling the frame, no added text or props. Meeting them usually means a dedicated shoot per SKU.",
      "A separated product photo gets you most of the way there from a lifestyle shot you already own — and gives you the styled secondary images in the same run.",
    ],
    demo: "ecommerce",
    level: "L2",
    tool: true,
    sections: [
      {
        id: "requirement",
        heading: "What the main image actually requires",
        body: [
          "A square canvas, product centred, roughly 85% of the frame filled, background RGB 255/255/255. No watermarks, no borders, no props that imply an accessory is included.",
          "The tricky part is not the white background — it is the **edge**. A product cut from a grey studio sweep carries a grey halo that becomes visible the moment it sits on pure white. That is why the alpha pass matters more than the backdrop replacement.",
        ],
        bullets: [
          { title: "Fill the frame", text: "Scale to about 85% of the long edge; leave breathing room for the zoom crop." },
          { title: "Check the halo", text: "Put the cutout on white and zoom to 200% before uploading." },
          { title: "Keep a shadow only if allowed", text: "Some categories permit a natural shadow; check the category style guide first." },
        ],
      },
      {
        id: "scenes",
        heading: "One shoot, three listing images",
        body: [
          "Sellers usually need a white main image, a lifestyle secondary image, and an infographic or comparison slide. A single separated stack supports all three: white canvas for the main, the reconstructed backdrop plus props for the lifestyle shot, and isolated elements for the infographic.",
          "Without separation, each of those is a separate retouch job. With it, they are three compositions from the same assets.",
        ],
        table: {
          head: ["Listing slot", "Built from"],
          rows: [
            ["Main image", "Product layer on white"],
            ["Lifestyle secondary", "Product + props + reconstructed backdrop"],
            ["Detail or infographic", "Product layer plus isolated prop callouts"],
            ["Variation thumbnail", "Product layer resized, no reshoot"],
          ],
        },
      },
      {
        id: "variants",
        heading: "Handling variations without extra photography",
        body: [
          "A colour variant is often the same product in a different finish. If you have one well-lit photograph and a variant photo taken badly, the good photo's structure can carry the variant's colour region — as long as the silhouette is identical.",
          "That is a compositing job, not a generation job, and it is exactly what a layer stack makes possible. The limit is shape: if the variant has different proportions, the silhouette will not line up and you need the real shot.",
        ],
        note: "Composite variants only when the silhouette matches. A stretched or warped product is the fastest way to fail a marketplace authenticity review.",
      },
      {
        id: "quality",
        heading: "Upload checks before the listing goes live",
        steps: [
          { title: "White, not off-white", text: "Sample the background pixel; it must read 255/255/255 after export." },
          { title: "No stray props", text: "Any object that could be read as included must be hidden." },
          { title: "Sharp edge at 100%", text: "Check the silhouette against white, not against the original backdrop." },
          { title: "Correct crop per category", text: "Square for most, portrait for apparel — recrop the stack rather than re-running." },
        ],
      },
    ],
    faq: [
      {
        q: "Does this produce a compliant Amazon main image automatically?",
        a: "It produces the product layer on transparency, which you place on a pure white square canvas and scale to roughly 85%. Compliance still depends on category-specific rules about shadows, props and packaging.",
      },
      {
        q: "Can I remove the original background completely?",
        a: "Yes — the product layer has its own alpha. The reconstructed backdrop is a separate layer you can simply not use.",
      },
      {
        q: "Will the edge have a halo from the old backdrop?",
        a: "Not usually on hard materials, but grey studio sweeps can leave a faint fringe on glass and light fabrics. Zoom to 200% on white and clean any residue before upload.",
      },
      {
        q: "Can I build A+ content images from the same stack?",
        a: "Yes. Isolated props and the reconstructed scene are both usable in A+ modules; you are not limited to the product cutout.",
      },
      {
        q: "Is a reshoot still needed for new packaging?",
        a: "Only if the packaging changes the silhouette or the label geometry. Colour and label copy changes can be composited onto the existing product layer.",
      },
    ],
    related: [
      "product-image-to-layers",
      "product-image-to-layers/shopify-product-photo",
      "product-image-to-layers/product-bundle",
      "image-to-psd",
    ],
    updated: "2026-11-11",
  },

  {
    slug: "product-image-to-layers/shopify-product-photo",
    cluster: "ecommerce",
    title: "Image to Layers — Shopify Product Photos, Reusable Assets",
    description:
      "Image to Layers — separate Shopify product photos into product, props and background layers so theme changes, collection banners and ad variants reuse the same photography.",
    h1: "Image to Layers: Shopify product photos that survive a theme change",
    eyebrow: "Shopify · catalogue",
    intro: [
      "Shopify stores change their look more often than they change their products. Every theme refresh, seasonal campaign and collection banner is a new composition — usually built from the same six product photos, badly reused.",
      "Layers turn those six photos into a small asset library: the product, its props, and a clean backdrop that can be re-tinted to match any theme.",
    ],
    demo: "ecommerce",
    level: "L2",
    tool: true,
    sections: [
      {
        id: "library",
        heading: "Build an asset library, not a photo folder",
        body: [
          "A folder of flattened exports is a dead archive. A folder of separated stacks is a library: you can pull the product for a collection tile, the props for a lifestyle banner, and the backdrop for a colour-matched hero without opening Photoshop.",
          "The practical rule is to keep the ZIP per SKU and name it by product handle. When the theme changes, you compose rather than retouch.",
        ],
        bullets: [
          { title: "Product layer", text: "Collection tiles, cart thumbnails, comparison tables." },
          { title: "Prop layers", text: "Lifestyle banners and editorial modules." },
          { title: "Backdrop layer", text: "Re-tint to the theme palette without touching the product." },
          { title: "Shadow group", text: "Keeps composites grounded when you reposition the product." },
        ],
      },
      {
        id: "collections",
        heading: "Collection pages need consistency more than detail",
        body: [
          "A collection grid is judged on rhythm: consistent framing, consistent background, consistent product scale. Ninety percent of the effort is not per-image quality but cross-image alignment.",
          "That is why L2 is the right level for catalogue work and L3 usually is not. Extra layers add detail you will not see in a 400px tile, while making the set harder to normalise.",
        ],
        note: "Lock one level and one crop rule for the whole collection. Review the grid, not the individual files.",
      },
      {
        id: "campaigns",
        heading: "Seasonal campaigns from existing photography",
        body: [
          "A spring campaign needs a lighter palette and a different set of props. If the products are separated, that is a background swap plus a prop replacement — no studio time, no shipping samples.",
          "The one thing that does not survive is a change in lighting direction. If the original key light comes from the left, a new backdrop with right-side light will read as a composite. Match the light, or keep the original shadow group.",
        ],
        table: {
          head: ["Change", "Reuses", "Needs new work"],
          rows: [
            ["Background colour", "Everything", "Nothing"],
            ["Prop set", "Product, backdrop, shadow", "New prop photography"],
            ["Crop or aspect ratio", "Everything", "Recrop only"],
            ["Lighting direction", "Product", "Shadow group, backdrop"],
          ],
        },
      },
      {
        id: "handoff",
        heading: "Handing assets to an agency or freelancer",
        body: [
          "A PSD with named layers is the difference between a two-hour brief and a two-day one. The agency can see the intended structure without asking which part is which.",
          "Export the layered PSD for the files that will be heavily edited, and the ZIP of PNGs for the ones that will just be composited. Sending only a ZIP forces the recipient to rebuild groups by hand.",
        ],
      },
    ],
    faq: [
      {
        q: "How many photos should I separate from a catalogue?",
        a: "Start with hero SKUs and anything that appears in campaigns or collection banners. Products that only ever appear in a single grid tile rarely justify the round trip.",
      },
      {
        q: "Can I match a new theme's background colour?",
        a: "Yes. The backdrop layer is a separate full-bleed raster, so recolouring it does not affect the product. Keep the shadow group if the surface is visible.",
      },
      {
        q: "Do you support batch uploads?",
        a: "One image per run in the preview build. Batch runs with a locked level are on the roadmap; for now the ZIP-per-SKU naming convention keeps a manual batch manageable.",
      },
      {
        q: "Will the product scale stay consistent between images?",
        a: "Only if you normalise it afterwards. Separation preserves the original framing; align scale and position when you compose the collection grid.",
      },
      {
        q: "Is the PSD safe to send to an external agency?",
        a: "It contains no proprietary metadata beyond layer names and order. If your contract requires watermarking or limited retention, handle that before delivery.",
      },
    ],
    related: [
      "product-image-to-layers",
      "product-image-to-layers/amazon-main-image",
      "product-image-to-layers/ecommerce-ad-creative",
      "image-to-psd",
    ],
    updated: "2026-11-11",
  },

  {
    slug: "product-image-to-layers/product-bundle",
    cluster: "ecommerce",
    title: "Image to Layers — Bundles With Overlapping Products",
    description:
      "Image to Layers — split a bundle or gift-set photo into individual products, packaging and backdrop layers so you can recombine or rebuild the set for a new campaign.",
    h1: "Image to Layers: separate a bundle photo into individual products",
    eyebrow: "Bundles · overlapping objects",
    intro: [
      "Bundle photography is the hardest product case: three or four items, deliberately overlapped, lit as one composition. Unbundling it by hand means masking each product out of its neighbour.",
      "Separation handles the overlap directly, and the reconstructed regions are what make the individual products reusable — each one comes back complete, not with a bite taken out of it.",
    ],
    demo: "ecommerce",
    level: "L3",
    tool: true,
    sections: [
      {
        id: "occlusion",
        heading: "Overlap is the whole problem",
        body: [
          "In a gift set, the rear product is partly hidden by the front one. A cutout leaves the rear product incomplete — you cannot stand it on its own because a section of it simply is not there.",
          "Reconstruction fills that gap with an estimate based on the product's visible geometry. A boxed item with straight edges and repeating label patterns reconstructs well; a crumpled bag of coffee does not.",
        ],
        bullets: [
          { title: "Front products", text: "Clean separation, usually no reconstruction needed." },
          { title: "Rear products", text: "Partially reconstructed; check the hidden edge before reusing alone." },
          { title: "Packaging", text: "Often the layer that binds the composition — keep or drop it deliberately." },
          { title: "Shared shadows", text: "A single shadow group behaves better than per-product shadows." },
        ],
      },
      {
        id: "levels",
        heading: "When to use L3 instead of L2",
        body: [
          "L2 gives you four to six groups, which is right for a single hero product with props. A bundle with four distinct sellable items needs more, because each item has to be independently usable afterwards.",
          "Use **L3** and name the products explicitly. Naming matters more here than anywhere else: “the serum, the jar, the box” tells the model which groupings are commercially meaningful.",
        ],
        table: {
          head: ["Bundle size", "Level", "Expected layers"],
          rows: [
            ["Two products", "L2", "4–5"],
            ["Three to four products", "L3", "6–8"],
            ["Set with packaging and inserts", "L3", "7–9"],
            ["Mixed set for a catalogue page", "L3, locked", "Consistent per set"],
          ],
        },
      },
      {
        id: "reuse",
        heading: "Selling items individually after the bundle",
        body: [
          "Bundles get discontinued. When they do, the individual products usually need their own listings, which means new photography for items you already photographed.",
          "If the set was separated at L3, each product is already a standalone asset with a transparent edge. The listing image becomes a canvas, a placement and a shadow — not a shoot.",
        ],
        note: "Check reconstructed areas on any product that will be sold as a standalone hero image. A gap that reads fine at bundle scale is obvious at 1500px.",
      },
      {
        id: "compose",
        heading: "Recombining into a new bundle",
        steps: [
          { title: "Separate the original set", text: "L3, with each product named in the instruction field." },
          { title: "Pick the keepers", text: "Delete items that are leaving the bundle; the backdrop stays intact." },
          { title: "Re-space the composition", text: "Products can now be moved independently, which is the point of unbundling." },
          { title: "Rebuild the surface", text: "Use the reconstructed backdrop or a new surface, then re-apply one shadow group." },
        ],
      },
    ],
    faq: [
      {
        q: "Can it separate products that are touching each other?",
        a: "Yes, and touching is easier than overlapping. The hard case is occlusion — where one product hides a section of another — because the hidden part has to be reconstructed rather than cut.",
      },
      {
        q: "Will each product be complete enough to sell on its own?",
        a: "Usually, with a review. Straight-edged packaging reconstructs convincingly; soft or highly textured items may need a manual patch before standalone use.",
      },
      {
        q: "What happens to the bundle's shared shadow?",
        a: "It stays as its own group. Keeping one shadow for the whole composition reads more naturally than stacking per-product shadows that were never photographed separately.",
      },
      {
        q: "How do I make sure products are grouped correctly?",
        a: "Name them. An empty instruction lets the model guess which regions are commercially meaningful; naming the items removes that ambiguity.",
      },
      {
        q: "Can I add a product that was never in the bundle?",
        a: "Yes, if you have it separated too. Compose the new item onto the same backdrop and match the light direction of the existing shadow group.",
      },
    ],
    related: [
      "product-image-to-layers",
      "product-image-to-layers/ecommerce-ad-creative",
      "layer-levels/detailed",
      "image-to-layers",
    ],
    updated: "2026-11-11",
  },

  {
    slug: "product-image-to-layers/ecommerce-ad-creative",
    cluster: "ecommerce",
    title: "Image to Layers — E-commerce Ad Creative, Every Format",
    description:
      "Image to Layers — separate a product ad into product, props, text regions and background layers so one creative rebuilds for every placement without a new shoot.",
    h1: "Image to Layers: one ad creative, every placement",
    eyebrow: "Ads · multi-format",
    intro: [
      "A paid campaign needs the same product in six shapes: 1:1 for feed, 4:5 for mobile, 9:16 for stories, 16:9 for display, plus two localisations. Most teams rebuild each one by hand from a flattened export.",
      "Separating the creative turns that into a layout problem. The product stays, the type gets repositioned, the backdrop extends or crops.",
    ],
    demo: "ecommerce",
    level: "L3",
    tool: true,
    sections: [
      {
        id: "text",
        heading: "Text regions are the reason to use L3",
        body: [
          "Product ads carry type: an offer, a price, a legal line, a call to action. At L2 those glyphs stay welded to the backdrop, which means changing “20% off” to “30% off” requires rebuilding the composition.",
          "At L3 the text region is isolated as its own layer. You cannot edit the characters, but you can delete the region and place fresh type in exactly the same footprint — which is what a resize actually needs.",
        ],
        bullets: [
          { title: "Headline block", text: "Isolated as a region so a new headline can occupy the same space." },
          { title: "Offer and price", text: "Often the only element that changes between two versions of an ad." },
          { title: "Legal line", text: "Frequently resized per market; keep it as its own region." },
          { title: "Logo", text: "Separate layer, so a co-branded version does not need a rebuild." },
        ],
      },
      {
        id: "formats",
        heading: "Resizing without wrecking the composition",
        body: [
          "The mistake in multi-format resizing is scaling the whole composition. A 9:16 story is not a 1:1 feed post stretched — the product scale and the negative space change completely.",
          "With layers you keep the product at a constant optical size and re-flow everything else: extend the backdrop, move the text block, reposition props out of frame if they do not earn their space.",
        ],
        table: {
          head: ["Placement", "Product scale", "What changes"],
          rows: [
            ["1:1 feed", "Baseline", "Nothing"],
            ["4:5 mobile", "Slightly larger", "Backdrop extended vertically"],
            ["9:16 stories", "Larger, lower third", "Text moves to top safe area"],
            ["16:9 display", "Smaller", "Props repositioned into the wider frame"],
          ],
        },
      },
      {
        id: "localisation",
        heading: "Localising without the original layout file",
        body: [
          "Translating an ad usually means asking the agency for the source file, waiting, then re-typesetting. With a separated creative you can remove the language-specific text regions and set new copy yourself.",
          "This is where the honest limitation matters: you are replacing a region, not translating in place. Line lengths change, so the footprint has to be re-checked — a three-word English CTA can become a nine-word German one and overflow.",
        ],
        note: "Keep a text-free master layer stack. Every future localisation and every seasonal offer starts from that, not from the last flattened export.",
      },
      {
        id: "workflow",
        heading: "A production-ready ad workflow",
        steps: [
          { title: "Separate at L3", text: "Product, props, text regions, graphics, backdrop." },
          { title: "Build a text-free master", text: "Hide or delete text regions and export a clean plate." },
          { title: "Compose per placement", text: "Same product scale, new type, extended backdrop." },
          { title: "Keep the stack with the campaign", text: "Next quarter's version starts here rather than at the flattened JPG." },
        ],
      },
    ],
    faq: [
      {
        q: "Can I change the price or offer text?",
        a: "You can remove the existing text region and place new type in the same area. The original characters are not editable — flattened glyphs cannot be restored as live text.",
      },
      {
        q: "Will the product look identical across all formats?",
        a: "Yes if you hold optical scale constant rather than scaling the whole canvas. Perception of size depends on the frame around it, so re-check each placement by eye.",
      },
      {
        q: "Can I extract the logo for a co-branded version?",
        a: "Yes. Logos separate as their own region at L3, which makes co-branding a composition change rather than a redesign.",
      },
      {
        q: "Does this replace a design system?",
        a: "No. It replaces the manual re-cutting that happens before a design system can be applied. Templates still need to exist; they just no longer need a fresh mask per product.",
      },
      {
        q: "What about animated ad formats?",
        a: "The separated stack is what makes parallax and layered motion possible in After Effects — separate the stills first, then animate the layers rather than the composite.",
      },
    ],
    related: [
      "product-image-to-layers",
      "product-image-to-layers/product-bundle",
      "cover-to-layers/poster-to-editable-psd",
      "layer-levels/detailed",
    ],
    updated: "2026-11-11",
  },
];
