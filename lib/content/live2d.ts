import type { PageContent } from "./types";

export const live2dPages: PageContent[] = [
  {
    slug: "live2d-character-to-layers",
    cluster: "live2d",
    title: "Live2D Character Layers — Separate Character Art into Rig-Ready Parts",
    description:
      "Separate a character illustration into hair, face, eyes, clothing, limbs and accessories before rigging. Export transparent PNGs or a layered PSD for Live2D Cubism.",
    h1: "Prepare character art for Live2D",
    eyebrow: "Live2D · L4 parts",
    intro: [
      "Rigging starts before Cubism opens. If the character arrives as one flat illustration, the first day of work is not rigging — it is masking hair out of a face and guessing what the shoulder looked like under the collar.",
      "Part-level separation removes that day. You get hair, face, eyes, clothing and accessories as independent PNGs with depth order intact, and the rigging session starts at the mesh.",
    ],
    demo: "live2d",
    level: "L4",
    tool: true,
    sections: [
      {
        id: "parts",
        heading: "The parts a rig actually needs",
        body: [
          "A working 2D rig is not “one layer per object”. It is a hierarchy of parts that deform: head, hair front, hair back, eyes, brows, mouth, torso, arms, and whatever the design adds. Separation should aim at that hierarchy, not at visual tidiness.",
          "In practice that means a character sheet splits into ten or more groups. This is the one case where asking for more layers is correct, because the anatomy justifies it.",
        ],
        bullets: [
          { title: "Head group", text: "Face base, eyes, brows, mouth, nose line, blush." },
          { title: "Hair group", text: "Front bangs, side locks, back hair, ahoge — each with its own physics." },
          { title: "Body group", text: "Torso, arms, hands, legs; clothing layered over the base." },
          { title: "Accessories", text: "Horns, ears, ribbons, jewellery, weapons, tail." },
        ],
      },
      {
        id: "why-split",
        heading: "Why split before rigging instead of during",
        body: [
          "You can mask inside Cubism, and experienced riggers do it. But masking inside the rigging tool conflates two jobs and makes iteration expensive: changing a hair boundary later means touching the rig, not just the asset.",
          "Separating first keeps the boundary decisions in an image editor where they are cheap to revise, and gives the rigger a clean import with meaningful layer names.",
        ],
        table: {
          head: ["Approach", "Where boundaries are decided", "Cost of a revision"],
          rows: [
            ["Mask inside Cubism", "During rigging", "Re-edit the rig"],
            ["Separate first", "Before import", "Re-export one layer"],
            ["No separation", "Not decided at all", "Rebuild from scratch"],
          ],
        },
      },
      {
        id: "naming",
        heading: "Naming that survives a handoff",
        body: [
          "A stack called `Layer 1` through `Layer 14` costs the rigger an hour of sorting. Use the convention the rigging tool expects — prefix by group, suffix by side, and keep depth order in the stack rather than in the name.",
          "Our naming guide covers the exact pattern for Cubism and Spine: [Live2D layer naming conventions](/guides/live2d-layer-naming).",
        ],
        bullets: [
          { title: "Group first", text: "Hair_Front, Hair_Back, Face, Eye_L, Eye_R, Body, Accessory." },
          { title: "Side last", text: "Suffix _L and _R rather than prefixing, so sorting groups correctly." },
          { title: "Depth in the stack", text: "Order carries z-index; do not encode it in the filename." },
          { title: "No spaces", text: "Underscores survive every pipeline; spaces do not." },
        ],
      },
      {
        id: "occlusion",
        heading: "The occlusion problem in character art",
        body: [
          "Character illustrations are drawn for appearance, not for rigging. A sleeve covers the arm; a collar covers the neck; hair covers shoulders. The moment the arm rotates, the missing region becomes visible.",
          "Reconstruction fills those gaps with an estimate, which is usually good enough for skin and fabric at small deformation. Large rotations will still expose the estimate, so plan the range of motion before you rely on it.",
        ],
        note: "For extreme poses, hand-paint the hidden regions. Reconstruction is a starting point for moderate rigging, not a substitute for an artist's under-drawing.",
      },
      {
        id: "handoff",
        heading: "Export settings for a rigging handoff",
        steps: [
          { title: "Separate at L4", text: "Name the character parts explicitly in the instruction field." },
          { title: "Review the hierarchy", text: "Check that no part has merged an accessory into a body layer." },
          { title: "Export PNG + PSD", text: "PNGs for direct import, PSD as the editable master." },
          { title: "Document the conventions", text: "One page: group names, expected pivot points, known reconstruction areas." },
        ],
      },
    ],
    faq: [
      {
        q: "How many layers does a Live2D character need?",
        a: "More than a photo, and it depends on the design. A simple character needs around ten groups; a detailed design with accessories, tails and multiple hair sections can need twenty. L4 targets part-level anatomy rather than a fixed count.",
      },
      {
        q: "Can it separate eyes and mouth for blinking and lip-sync?",
        a: "Eyes separate cleanly as their own region. Mouths are harder on stylised art because the mouth is often drawn as a small shape inside the face plane — name it explicitly, and expect a manual pass on very small mouths.",
      },
      {
        q: "Will the hidden parts behind clothing be usable?",
        a: "They are reconstructed, not recovered. For moderate deformation the estimate holds; for large rotations you should paint the hidden anatomy yourself.",
      },
      {
        q: "Does it work on AI-generated character art?",
        a: "Yes, and often better than on scanned traditional art, because AI illustrations usually have clean edges and flat shading. Consistency between views is the usual issue, not separability.",
      },
      {
        q: "What export format is best for Cubism?",
        a: "Transparent PNGs at source resolution, one per part, with a layered PSD as the master. Cubism imports PNGs directly and the PSD preserves the ability to re-edit later.",
      },
      {
        q: "Can I separate a character that is already rigged?",
        a: "Only from a rendered flat image. If you have the original model, edit the source file instead — separating a render discards the rig.",
      },
    ],
    related: [
      "live2d-character-to-layers/vtuber",
      "live2d-character-to-layers/spine",
      "live2d-character-to-layers/anime-character-parts",
      "layer-levels/character-parts",
    ],
    updated: "2026-11-11",
  },

  {
    slug: "live2d-character-to-layers/vtuber",
    cluster: "live2d",
    title: "VTuber Model Prep — Separate a Character Design into Rig-Ready Parts",
    description:
      "Turn a VTuber character sheet into separate hair, face, eye, clothing and accessory layers before rigging, so the model build starts at the mesh instead of the mask.",
    h1: "From character sheet to VTuber model parts",
    eyebrow: "VTubing · model prep",
    intro: [
      "A VTuber model is a commission pipeline: art, separation, rigging, then endless iteration once the talent starts performing. Separation sits in the middle and quietly determines how painful everything after it is.",
      "Get the parts right and the rigger can add physics to hair, blink timing to eyes, and a toggle for the jacket without reopening the artwork.",
    ],
    demo: "live2d",
    level: "L4",
    tool: true,
    sections: [
      {
        id: "design",
        heading: "What the design implies for the split",
        body: [
          "VTuber designs are deliberately layered: coat over top, top over skin, hair over everything, accessories on top of that. Each visible boundary is also a rigging boundary, which makes this class of art unusually well suited to part separation.",
          "The complications are the parts that exist only to look good in one pose — a tail that curves behind the legs, a floating accessory, a cape that crosses the body. Those need their own layers or they will deform with whatever they were fused to.",
        ],
        bullets: [
          { title: "Layered outfit", text: "Coat, top, shorts, stockings — each a separate deformable group." },
          { title: "Hair sections", text: "Front bangs, side locks, back mass, and any ahoge, each with physics." },
          { title: "Floating accessories", text: "Horns, halos, star clips — separate so they can be toggled or animated." },
          { title: "Tail and appendages", text: "Isolate them; they never move with the torso." },
        ],
      },
      {
        id: "iteration",
        heading: "Designing for the iteration that always happens",
        body: [
          "Every model gets revised after the first stream: the hair is too heavy, the jacket needs a toggle, the eyes need a second expression. Whether that is a one-hour change or a two-day rebuild depends on how the parts were separated.",
          "Separate at the boundary you expect to revise. If the talent is likely to want outfit variants, the clothing must be independent of the body from day one.",
        ],
        table: {
          head: ["Later request", "Cheap if", "Expensive if"],
          rows: [
            ["Add a jacket toggle", "Coat is its own layer", "Coat fused to torso"],
            ["Second eye expression", "Eyes isolated", "Eyes part of face plane"],
            ["New hairstyle", "Hair sections separate", "Hair merged into one mass"],
            ["Colour variant", "Clothing layers separate", "One flat body layer"],
          ],
        },
      },
      {
        id: "delivery",
        heading: "Delivering the asset to a rigger",
        body: [
          "Riggers charge by complexity and by how much cleanup they have to do. A clean handoff is a commercial advantage, not just a courtesy.",
          "Send the PSD master, a folder of PNGs at source resolution, and a one-page note listing group names, which parts are reconstruction estimates, and any region that needs manual painting before deformation.",
        ],
        note: "Flag reconstructed regions explicitly. A rigger who discovers a soft armpit at the deformation stage will rebuild it anyway — better to know before quoting.",
      },
      {
        id: "expressions",
        heading: "Expressions and toggles",
        body: [
          "Expression variants are usually drawn as a separate sheet or as small mouth and eye swaps. If they exist in the same file, separate them into their own layers so they can be bound to keys.",
          "If they do not exist, separation cannot invent them — a single mouth shape gives you one mouth. What separation does give you is the clean geometry to draw new shapes against.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I separate a character sheet that has front and side views?",
        a: "Yes, but export each view as its own file first. Separating a sheet with three views in one image produces groups that mix views, which no rigger can use.",
      },
      {
        q: "Will the model be ready to rig after separation?",
        a: "It will be ready to start rigging. Meshing, deformation, physics and expression binding are still ahead — separation removes the masking stage, not the rigging stage.",
      },
      {
        q: "What about the parts hidden behind the hair?",
        a: "Reconstructed as estimates. For a head that turns, check the neck and ear regions and repaint them if the estimate is visible at your intended rotation range.",
      },
      {
        q: "Can I get a separate layer for each finger?",
        a: "Not reliably. Hands at illustration scale rarely have enough edge definition; separate the hand as one part and split it manually if the rig needs finger control.",
      },
      {
        q: "Does this replace a rigger?",
        a: "No. It replaces the masking and sorting that a rigger would otherwise bill for, which usually shortens the quote rather than the craft.",
      },
    ],
    related: [
      "live2d-character-to-layers",
      "live2d-character-to-layers/spine",
      "guides/live2d-layer-naming",
      "layer-levels/character-parts",
    ],
    updated: "2026-11-11",
  },

  {
    slug: "live2d-character-to-layers/spine",
    cluster: "live2d",
    title: "Spine Rigging Prep — Separate Character Art into Bone-Ready Parts",
    description:
      "Prepare character art for Spine by separating body parts, hair and accessories into named transparent layers with correct depth order, ready for mesh and bone setup.",
    h1: "Prepare character art for Spine",
    eyebrow: "Spine · game animation",
    intro: [
      "Spine rigs want fewer, larger parts than a Live2D face rig — a whole arm is usually one attachment, not five. That changes the target: separation should respect the bone hierarchy the animator will build, not the finest detail the artwork allows.",
      "The output is still transparent PNGs with depth order, but the grouping decisions are different, and getting them wrong means the animator merges your work back together.",
    ],
    demo: "live2d",
    level: "L4",
    tool: true,
    sections: [
      {
        id: "bones",
        heading: "Separate along bones, not along objects",
        body: [
          "A rigger thinks in deformation units. If the elbow bends, everything above and below it must be able to move independently — so the sleeve and the forearm are one attachment, not two.",
          "That is why a good Spine handoff often has *fewer* layers than a Live2D handoff for the same character. Aim at the bone structure and let the artwork follow.",
        ],
        bullets: [
          { title: "Upper arm / forearm", text: "One attachment each, sleeve included." },
          { title: "Torso", text: "One or two attachments depending on spine bend range." },
          { title: "Head", text: "Usually one attachment with separate eye and mouth swaps." },
          { title: "Hair and cape", text: "Separate chains for secondary motion." },
        ],
      },
      {
        id: "game-context",
        heading: "Game constraints that change the split",
        body: [
          "Mobile game characters have texture budgets. Ten large PNGs are cheaper than thirty small ones with lots of transparent area, because transparent padding still costs memory when packed into an atlas.",
          "So for game work, prefer fewer and tighter layers, cropped to content bounds — the opposite instinct from a portrait rig where generous padding helps smooth deformation.",
        ],
        table: {
          head: ["Target", "Layer strategy"],
          rows: [
            ["Live2D portrait", "Many small parts, generous padding"],
            ["Spine game character", "Fewer parts, tight crops"],
            ["Spine boss / large sprite", "Depth-grouped, effect layers separate"],
            ["UI illustration", "Flat grouping, no deformation"],
          ],
        },
      },
      {
        id: "export",
        heading: "Exporting for a Spine import",
        body: [
          "Spine imports individual PNGs or a texture atlas. Keep one PNG per attachment, named to match the bone or slot it will occupy, and keep the PSD as the editable master.",
          "Depth order matters more here than filename: the import order and z-index decide what draws on top, and a wrong order is invisible in the file browser but obvious in the animation.",
        ],
        note: "If your animator asks for a single sprite sheet instead, keep the separated PNGs anyway — re-packing later is trivial, re-separating is not.",
      },
      {
        id: "effects",
        heading: "Effects, weapons and VFX parts",
        body: [
          "Game characters often carry elements that are not anatomy: a glowing weapon, an aura, a floating rune. These should be isolated even if they overlap the body, because they are usually animated on a separate timeline with additive blending.",
          "Separation handles them as objects, which is exactly what you want — but check that the glow does not bleed into the body layer, since a soft additive edge is the hardest thing for a mask to place correctly.",
        ],
      },
    ],
    faq: [
      {
        q: "How is Spine prep different from Live2D prep?",
        a: "Spine usually wants fewer, larger deformable groups aligned to bones, while Live2D portrait rigs want many small parts for facial detail. The separation tool is the same; the grouping target is different.",
      },
      {
        q: "Can I get a mesh-ready output directly?",
        a: "No. Separation produces raster layers. Meshing and weighting happen in Spine, and the layers are the input to that step.",
      },
      {
        q: "Will transparent padding hurt performance?",
        a: "It can, once packed into an atlas. Crop each layer to its content bounds for game work, and keep generous padding only for smooth deformation areas.",
      },
      {
        q: "Can it separate a character with a large weapon?",
        a: "Yes, and you should name the weapon explicitly so it does not get merged with the hand holding it.",
      },
      {
        q: "Does the order of layers survive export?",
        a: "Yes, z-order is preserved in both the PSD and the ZIP. Confirm it after import, since some pipelines re-sort alphabetically.",
      },
    ],
    related: [
      "live2d-character-to-layers",
      "live2d-character-to-layers/vtuber",
      "live2d-character-to-layers/anime-character-parts",
      "layer-levels/character-parts",
    ],
    updated: "2026-11-11",
  },

  {
    slug: "live2d-character-to-layers/anime-character-parts",
    cluster: "live2d",
    title: "Anime Character Parts Extractor — Hair, Eyes, Clothing and Accessories",
    description:
      "Extract individual anime character parts — hair, eyes, mouth, clothing, horns, tails — from a single illustration, with reconstructed areas behind overlapping parts.",
    h1: "Extract individual anime character parts",
    eyebrow: "Anime · part extraction",
    intro: [
      "Anime illustration is drawn in flat planes with clean boundaries, which makes it the friendliest possible input for part extraction — and the most demanding about grouping, because a single misplaced boundary ruins a rig.",
      "This page is about the parts themselves: what separates cleanly, what needs naming, and what will always need a manual pass.",
    ],
    demo: "live2d",
    level: "L4",
    tool: true,
    sections: [
      {
        id: "clean",
        heading: "What separates cleanly",
        body: [
          "Flat-shaded anime art gives the model unambiguous edges: hair against skin, clothing against background, accessory against hair. These parts come back crisp with no fringe, which is why AI-generated character art is often easier to separate than photography.",
          "The remaining difficulty is not edge quality but **ownership** — deciding which layer a boundary belongs to when two elements share a colour.",
        ],
        bullets: [
          { title: "Hair vs skin", text: "Clean. The usual issue is thin strands, not the boundary." },
          { title: "Clothing vs body", text: "Clean on the outside, reconstructed underneath." },
          { title: "Eyes and mouth", text: "Clean at illustration scale; smaller shapes need naming." },
          { title: "Accessories", text: "Clean when they contrast; ambiguous when they sit on same-colour hair." },
        ],
      },
      {
        id: "tricky",
        heading: "The parts that need help",
        body: [
          "Four cases account for most failures, and three of them are solved by naming the part explicitly in the instruction field.",
        ],
        bullets: [
          { title: "White hair on white background", text: "No contrast at the silhouette; drop a coloured backdrop behind the character before uploading." },
          { title: "Same-colour accessories", text: "A white hair clip on white hair merges. Name it." },
          { title: "Translucent elements", text: "Veils, wings and glass accessories keep a fringe that needs manual cleanup." },
          { title: "Very thin strands", text: "One-pixel ahoge and flyaway hairs end up on the wrong layer." },
        ],
        note: "Practical fix: composite the character onto a mid-grey canvas before separation. Contrast at the silhouette improves every mask on the job.",
      },
      {
        id: "expressions",
        heading: "Eyes, mouths and expression sets",
        body: [
          "A single illustration contains one expression. Separation gives you that mouth and those eyes as isolated parts, which is what a rig needs to bind a blink or a lip-sync — but it cannot create the second expression.",
          "Draw variants against the separated base. Because the eye and mouth regions are already isolated with transparent surroundings, new shapes can be drawn directly into the same footprint.",
        ],
        table: {
          head: ["Expression asset", "Source"],
          rows: [
            ["Blink frames", "Drawn over the isolated eye layer"],
            ["Mouth shapes", "Drawn into the isolated mouth region"],
            ["Brow variants", "Separate layer if the brows are drawn apart from hair"],
            ["Full alternate face", "A second illustration, separated the same way"],
          ],
        },
      },
      {
        id: "checklist",
        heading: "A pre-rig checklist for extracted parts",
        steps: [
          { title: "Silhouette check", text: "Place every part on grey; nothing should have a coloured halo." },
          { title: "Layer count sanity", text: "If you have thirty layers for a single character, the level was pushed too far." },
          { title: "Naming pass", text: "Apply the group_side convention before export." },
          { title: "Document estimates", text: "List which regions were reconstructed and where manual painting is expected." },
        ],
      },
    ],
    faq: [
      {
        q: "Does it work on traditional scanned line art?",
        a: "Yes, though paper texture and slight scan skew make edges softer. Cleaning the scan — levelling the white point and removing dust — improves masks noticeably.",
      },
      {
        q: "Can it separate hair into front and back sections?",
        a: "Usually yes at L4, and explicitly if you name them. Very long hair that reads as one silhouette may come back as a single layer, which you can then split manually.",
      },
      {
        q: "What if the character has white hair on a white background?",
        a: "Put the character on a mid-grey or coloured canvas before uploading. With no contrast at the silhouette the model has nothing to separate along.",
      },
      {
        q: "Can I extract just the horns for a different design?",
        a: "Yes — name them. Small accessories are the case where an explicit instruction changes the output most.",
      },
      {
        q: "Will line art quality survive separation?",
        a: "Layers are exported at source resolution without recompression of the composite. Thin lines can lose antialiasing character if the source is heavily compressed, so upload a PNG rather than a JPEG where possible.",
      },
    ],
    related: [
      "live2d-character-to-layers",
      "live2d-character-to-layers/vtuber",
      "guides/live2d-layer-naming",
      "layer-levels/character-parts",
    ],
    updated: "2026-11-11",
  },
];
