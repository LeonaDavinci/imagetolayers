import type { PageContent } from "./types";

export const guidePages: PageContent[] = [
  {
    slug: "guides/how-many-layers",
    cluster: "guide",
    title: "How Many Layers Does an Image Need? A Practical Guide",
    description:
      "Count editing decisions, not objects. Ranges by image type, what over-splitting looks like, and the two-pass workflow that produces better stacks than asking for maximum detail.",
    h1: "How many layers does an image actually need?",
    eyebrow: "Guide · layer count",
    intro: [
      "The right layer count is the number of independent edits you intend to make — not the number of objects you can see, and certainly not the maximum the tool allows.",
      "Count the wrong thing and you get a stack full of fragments. Count the right thing and a five-layer output does everything a ten-layer one would have.",
    ],
    demo: "ecommerce",
    sections: [
      {
        id: "counting",
        heading: "Count decisions, not objects",
        body: [
          "Two objects that always move together, share a depth plane and receive the same edit do not need separate layers. A product box and the leaf leaning on it are one group if they will always travel as a pair — and two groups the moment you want to remove the leaf.",
          "So the unit of counting is a **decision**: something that will move, hide, recolour, deform or be replaced independently.",
        ],
        bullets: [
          { title: "Will it move?", text: "Then it needs its own layer." },
          { title: "Will it be hidden or deleted?", text: "Then it needs its own layer." },
          { title: "Will it get a different effect?", text: "Then it needs its own layer." },
          { title: "Does it always travel with a neighbour?", text: "Then they can share one." },
        ],
      },
      {
        id: "ranges",
        heading: "Practical ranges by image type",
        body: [
          "These ranges come from how these image classes are actually edited, not from what the model can theoretically separate.",
        ],
        table: {
          head: ["Image type", "Typical layers", "Level"],
          rows: [
            ["Logo or icon", "2–3", "L1"],
            ["Single product on a sweep", "3–4", "L1–L2"],
            ["Product with props", "4–6", "L2"],
            ["Podcast or album art", "4–6", "L2"],
            ["Poster with type", "6–8", "L3"],
            ["YouTube thumbnail", "5–7", "L3"],
            ["Multi-product bundle", "6–9", "L3"],
            ["Character for rigging", "10–20", "L4"],
          ],
        },
      },
      {
        id: "over",
        heading: "What over-splitting looks like",
        body: [
          "Ask a five-group scene for ten layers and the model fills the quota rather than finding new meaning. The failure modes are consistent and recognisable.",
        ],
        bullets: [
          { title: "Duplicates", text: "The same product appears on two layers; neither is more useful than the other." },
          { title: "Background residue", text: "A translucent sheet of the backdrop stays attached to a prop." },
          { title: "Mixed groups", text: "The box, the jar and a leaf arrive fused, while a tiny fragment gets its own layer." },
          { title: "Unnamed slivers", text: "Layers too small to correspond to any editing decision." },
        ],
        note: "A useful test: name every layer out loud. If you cannot name one, it is not a decision — it is noise.",
      },
      {
        id: "twopass",
        heading: "The two-pass workflow that beats a big first pass",
        body: [
          "Start at the level the scene supports. Review. Then split only the layers that still mix two decisions. The finished project can have more layers than the first pass — and each additional one corresponds to a real need.",
          "This is both cheaper and better than a maximum-detail first pass, because a targeted re-split has a narrow, verifiable goal.",
        ],
        steps: [
          { title: "First pass", text: "L2 for scenes, L3 for layouts, L4 for characters." },
          { title: "Review", text: "Find the one or two layers that combine unrelated edits." },
          { title: "Re-split those layers", text: "Not the whole image." },
          { title: "Name and export", text: "The final asset set is whatever the work required." },
        ],
      },
      {
        id: "checklist",
        heading: "A checklist before you press run",
        body: [
          "Six questions that catch most bad runs before they cost credits.",
        ],
        bullets: [
          { title: "What will I change first?", text: "If the answer is one thing, you probably need L1." },
          { title: "Does the background have to survive?", text: "If yes, you need reconstruction, so not a plain cutout." },
          { title: "Is there type I might edit?", text: "Then L3, no exceptions." },
          { title: "Will this be animated or rigged?", text: "Then anatomy-level separation." },
          { title: "Can two objects stay grouped?", text: "Default to grouped; split later if needed." },
          { title: "Is this the final size?", text: "Resolution decisions belong before separation, not after." },
        ],
      },
    ],
    faq: [
      {
        q: "Does requesting more layers improve quality?",
        a: "No. It changes the target, and past the natural group count it introduces duplicates, partial masks and fragments. Quality is about whether each layer maps to an editing decision.",
      },
      {
        q: "Is five layers a safe default?",
        a: "For product scenes and simple compositions, yes — it sits inside L2 and matches the structure of a typical commercial photograph. For layouts with type, five is too few.",
      },
      {
        q: "Can the final project have more layers than the first pass?",
        a: "Yes, and that is the recommended path. A five-layer first pass with two targeted re-splits can end with nine usable assets.",
      },
      {
        q: "How many layers for a character?",
        a: "Ten to twenty depending on the design. Anatomy, not object count, sets the number — hair sections, face parts, garments, limbs and accessories each count.",
      },
      {
        q: "What if one layer contains two objects I need separately?",
        a: "Re-split that single layer. Re-running the entire image at a higher level is usually slower and less predictable than a targeted split.",
      },
    ],
    related: ["layer-levels", "layer-levels/standard", "image-to-layers", "showcase"],
    updated: "2026-11-11",
  },

  {
    slug: "guides/live2d-layer-naming",
    cluster: "guide",
    title: "Live2D Layer Naming Conventions That Survive a Handoff",
    description:
      "A naming pattern for character part layers that riggers can sort, filter and bind without a phone call: group first, side last, depth in the stack.",
    h1: "Live2D layer naming that survives a handoff",
    eyebrow: "Guide · naming",
    intro: [
      "Half the cost of a bad handoff is sorting. A stack called Layer 1 through Layer 14 forces the rigger to open every layer to find out what it is, and every revision starts with that same exercise.",
      "A consistent naming pattern costs one minute at export and saves it on every future edit.",
    ],
    demo: "live2d",
    sections: [
      {
        id: "pattern",
        heading: "The pattern: group first, side last",
        body: [
          "Sorting happens alphabetically in most file browsers and rigging tools, so the leftmost token should be the group and the rightmost should be the side. That way all hair layers cluster together and left/right pairs sit adjacent.",
        ],
        table: {
          head: ["Layer", "Name", "Why"],
          rows: [
            ["Front bangs", "Hair_Front", "Group first, sorted with other hair"],
            ["Left side lock", "Hair_Side_L", "Side last, sorts next to its pair"],
            ["Right side lock", "Hair_Side_R", "Pair stays adjacent"],
            ["Face base", "Face_Base", "Group prefix"],
            ["Left eye", "Face_Eye_L", "Nested by group then part"],
            ["Mouth", "Face_Mouth", "Same group, distinct part"],
            ["Jacket", "Body_Coat", "Garment grouped under body"],
            ["Tail", "Acc_Tail", "Accessory prefix, never deformed with torso"],
          ],
        },
      },
      {
        id: "depth",
        heading: "Depth belongs in the stack, not the name",
        body: [
          "A common mistake is encoding order in the filename — `01_hair`, `02_face`. It feels tidy until an element needs to move in front of another, and now fourteen files need renaming.",
          "Keep z-order in the layer stack, which is what the rigging tool reads anyway. Names should describe identity, not position.",
        ],
        note: "If your pipeline re-sorts alphabetically on import, fix the import step. Encoding order in filenames is a workaround that becomes the problem.",
      },
      {
        id: "sides",
        heading: "Sides, mirrors and duplicated parts",
        body: [
          "Use `_L` and `_R` suffixes rather than `Left` / `Right` prefixes. Spatial rigging tools often have mirror helpers that key off a suffix convention, and suffixes keep pairs adjacent in a sorted list.",
          "For parts that are genuinely duplicated (a pair of earrings), name them by position, not by copy order: `Acc_Earring_L`, `Acc_Earring_R`.",
        ],
        bullets: [
          { title: "Always suffix", text: "Hair_Side_L, not LeftHair." },
          { title: "One convention", text: "Pick L/R or left/right and never mix." },
          { title: "Position over copy", text: "Name by where it is, not when it was made." },
        ],
      },
      {
        id: "flags",
        heading: "Flagging reconstructed and problem areas",
        body: [
          "Reconstruction estimates are invisible in a layer list but obvious during deformation. Flag them where the rigger will see them: a suffix in the name, or a one-page note that lists the affected regions.",
          "The same applies to parts you know need manual painting — an armpit behind a sleeve, a neck under a collar, a shoulder under hair.",
        ],
        note: "Suggested suffix: `_RECON` for reconstructed areas. It sorts harmlessly and makes the review pass obvious.",
      },
      {
        id: "export",
        heading: "Export settings that match",
        steps: [
          { title: "One PNG per part", text: "Source resolution, transparent, cropped loosely for deformation." },
          { title: "PSD as the master", text: "Same names, same order, editable later." },
          { title: "A one-page note", text: "Group list, pivot points, reconstructed regions." },
          { title: "No spaces anywhere", text: "Underscores survive every pipeline; spaces do not." },
        ],
      },
    ],
    faq: [
      {
        q: "Should layer names match bone names in Spine?",
        a: "Where possible, yes. Matching slot or bone names removes a mapping step in the rig and makes later debugging faster.",
      },
      {
        q: "Is there an official Live2D naming standard?",
        a: "Cubism does not enforce a naming scheme, but rigging shops converge on group-prefix conventions because they survive sorting. Agree the pattern with your rigger before the first export.",
      },
      {
        q: "What about numbered layers from the separator?",
        a: "Rename them. The default names describe what was detected, not how the part will be used; the rigging convention is the useful one.",
      },
      {
        q: "Do I need separate layers for eyebrows?",
        a: "If the brows are drawn as distinct shapes, yes — expression changes usually need them independent of the face plane.",
      },
      {
        q: "Can I keep the original art layer names too?",
        a: "Yes, as a suffix: `Face_Eye_L__art`. Both audiences can then find what they need without a legend.",
      },
    ],
    related: ["live2d-character-to-layers", "layer-levels/character-parts", "guides/how-many-layers", "image-to-psd"],
    updated: "2026-11-11",
  },
];
