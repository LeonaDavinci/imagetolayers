import type { PageContent } from "./types";

export const legalPages: PageContent[] = [
  {
    slug: "about",
    cluster: "legal",
    title: "Image to Layers — About the Product",
    description:
      "Image to Layers — why layer separation is built around four workflows: e-commerce images, covers, Live2D characters and YouTube thumbnails, not a general editor.",
    h1: "Image to Layers: a layer tool built around four jobs",
    eyebrow: "About",
    intro: [
      "Image to Layers exists because layer separation keeps being sold as a general feature and delivered as a demo. The output looks impressive in a gallery and falls apart the first time someone needs it for a real deliverable.",
      "We built it around four jobs instead: e-commerce product images, covers, Live2D characters and YouTube thumbnails. Each has a different notion of what a “good” layer is, and the levels exist to express that.",
    ],
    demo: "ecommerce",
    sections: [
      {
        id: "why",
        heading: "Why these four",
        body: [
          "These are the workflows where separation changes the economics rather than just the aesthetics. A seller who can rebuild a main image without a reshoot, a designer who can re-typeset a cover without the source file, a rigger who starts at the mesh instead of the mask, a creator who can test a second thumbnail in ten minutes.",
          "A general-purpose image editor would serve none of them particularly well. A narrow tool with explicit levels can.",
        ],
        bullets: [
          { title: "E-commerce", text: "One shoot, many compositions." },
          { title: "Covers", text: "Artwork survives, type changes." },
          { title: "Live2D and Spine", text: "Parts before meshes." },
          { title: "YouTube", text: "Isolate the one variable you are testing." },
        ],
      },
      {
        id: "principles",
        heading: "Three principles we hold to",
        body: [
          "**Say what is estimated.** Reconstructed background is generated, not recovered. A tool that hides this creates expensive surprises downstream.",
          "**Structure beats resolution.** A five-layer stack that maps to real decisions is worth more than a fifteen-layer stack of fragments.",
          "**Keep it exportable.** PNG, ZIP, layered PSD — files that open elsewhere. No lock-in through format.",
        ],
      },
      {
        id: "status",
        heading: "Where this build stands",
        body: [
          "You are looking at a preview build. The interface, the level system and the export structure are real; the separation itself is simulated, and the layer results shown are sample stacks.",
          "We are publishing the structure first so the workflows and the content can be reviewed honestly, rather than shipping a demo that promises behaviour the pipeline cannot yet deliver.",
        ],
        note: "If you need production separation today for a client deadline, tell us before uploading client material — we will be explicit about what this build can and cannot do.",
      },
      {
        id: "contact",
        heading: "Talk to us",
        body: [
          "For partnerships, bulk catalogue work, rigging pipelines or anything that needs a processing agreement before trial, write to hello@image-layers.com. We answer questions about limits faster than we answer questions about pricing.",
        ],
      },
    ],
    faq: [
      {
        q: "Is this a real product or a prototype?",
        a: "A preview build. The workflows, level system and export structure are production-shaped; the separation itself is simulated and the layer stacks shown are samples.",
      },
      {
        q: "Where do you get the model technology?",
        a: "The pipeline is built on open layer-decomposition research and licensed hosted models. Details and licensing notes are on the AI transparency page.",
      },
      {
        q: "Do you take feature requests?",
        a: "Yes, and they shape the roadmap — batch runs, grouped PSD export and a Figma plugin are the most requested items.",
      },
    ],
    related: ["ai-transparency", "security", "how-it-works", "pricing"],
    updated: "2026-11-11",
  },

  {
    slug: "privacy",
    cluster: "legal",
    title: "Image to Layers — Privacy Policy",
    description:
      "Image to Layers — what we collect, how uploaded images are processed and deleted, retention windows, subprocessors, and how to request deletion of your data.",
    h1: "Image to Layers: privacy policy",
    eyebrow: "Legal",
    intro: [
      "This policy explains what happens to an image after you upload it, how long it is kept, and what you can ask us to delete. It is written to be read, not to be survived.",
      "Last updated 11 November 2026. This is a preview build; the policy will be reissued before general availability.",
    ],
    demo: "ecommerce",
    sections: [
      {
        id: "collect",
        heading: "What we collect",
        body: [
          "**Account data**: email address, authentication identifiers, plan and credit balance. **Usage data**: runs started, levels used, credits consumed, export formats requested, plus standard server logs (IP, user agent, timestamps) for security and abuse prevention.",
          "**Uploaded content**: the images you submit and the layers generated from them. We do not collect contact lists, address books, or anything from your device beyond what a browser sends normally.",
        ],
      },
      {
        id: "processing",
        heading: "How uploaded images are handled",
        body: [
          "Files are stored in object storage, processed by the separation pipeline, and delivered back through signed URLs that expire. Access is limited to the systems that need it for the job.",
          "We do not use customer uploads to train models. We do not sell uploaded content. We do not use it for advertising.",
        ],
        table: {
          head: ["Data", "Purpose", "Retention"],
          rows: [
            ["Uploaded image", "Process the separation job", "Plan window, then deleted"],
            ["Generated layers", "Delivery and re-download", "Plan window, then deleted"],
            ["Account record", "Authentication and billing", "Life of the account"],
            ["Server logs", "Security and abuse prevention", "Up to 90 days"],
          ],
        },
      },
      {
        id: "rights",
        heading: "Your rights",
        body: [
          "You can request access to, correction of, export of, or deletion of your personal data at any time by writing to hello@image-layers.com. Job outputs can be deleted from the workspace without contacting us.",
          "If you are in the EEA or UK, you have rights under GDPR including objection and restriction. If you are in California, you have rights under CCPA including the right to know and the right to delete. We do not sell personal information.",
        ],
      },
      {
        id: "subprocessors",
        heading: "Subprocessors",
        body: [
          "We use infrastructure providers for hosting, object storage, payments and email delivery. A current list is available on request before you sign a processing agreement, and we notify account holders before adding a subprocessor that handles uploaded content.",
        ],
      },
      {
        id: "cookies",
        heading: "Cookies and analytics",
        body: [
          "Essential cookies handle authentication and session state. Product analytics are aggregate and do not include uploaded image content. We do not run third-party advertising trackers on this site.",
        ],
      },
    ],
    faq: [
      {
        q: "Do you train on my images?",
        a: "No. Uploads are used to complete the job you started and are excluded from training data.",
      },
      {
        q: "How long are files kept?",
        a: "For the retention window of your plan — seven days on the free trial, thirty on Creator, one year on Studio. You can delete earlier from the workspace.",
      },
      {
        q: "Can I get my data deleted entirely?",
        a: "Yes. Delete jobs in the workspace, or email us to remove the account and its records. Backups roll off within thirty days.",
      },
      {
        q: "Do you sell data?",
        a: "No. We do not sell personal information or uploaded content, and we do not share it with advertisers.",
      },
      {
        q: "Where is data stored?",
        a: "In the region your workspace is provisioned in, currently EU or US. Enterprise workspaces can request a specific region.",
      },
    ],
    related: ["terms", "security", "ai-transparency", "about"],
    updated: "2026-11-11",
  },

  {
    slug: "terms",
    cluster: "legal",
    title: "Image to Layers — Terms of Service",
    description:
      "Image to Layers — the terms covering accounts, credits, acceptable use, ownership of outputs, availability and liability.",
    h1: "Image to Layers: terms of service",
    eyebrow: "Legal",
    intro: [
      "These terms cover your use of Image to Layers. By creating an account or using the service you agree to them.",
      "Last updated 11 November 2026. This is a preview build; terms will be reissued before general availability.",
    ],
    demo: "ecommerce",
    sections: [
      {
        id: "service",
        heading: "The service",
        body: [
          "Image to Layers separates a flat image into editable layers and exports the result as PNG, ZIP or a layered PSD. Output quality depends on the source image and the level you select, and reconstructed areas are estimates rather than recovered originals.",
          "We may change, suspend or discontinue features. Paid plans are not affected by feature removals during a billing period.",
        ],
      },
      {
        id: "accounts",
        heading: "Accounts and credits",
        body: [
          "You are responsible for activity under your account and for keeping credentials secure. Credits are consumed per run at the level you select, are not refundable once a run completes successfully, and expire according to your plan.",
          "Failed runs — where no output is produced — are credited back automatically. If a run produced output you consider unusable, contact us; we review these case by case rather than hiding behind a no-refund clause.",
        ],
      },
      {
        id: "use",
        heading: "Acceptable use",
        body: [
          "Do not upload content you do not have the rights to process. Do not use the service to remove watermarks or attribution from material you do not own, to create deceptive imagery of real people, or to circumvent a platform's authenticity rules.",
          "Do not attempt to extract model weights, resell raw API access, or use automated scraping against the interface. Commercial use of outputs is permitted on paid plans.",
        ],
        bullets: [
          { title: "You must hold the rights", text: "Separation does not grant a licence to the underlying image." },
          { title: "No deceptive use", text: "Especially not synthetic imagery of identifiable people." },
          { title: "No watermark laundering", text: "Removing attribution you do not own is prohibited." },
        ],
      },
      {
        id: "ownership",
        heading: "Ownership of outputs",
        body: [
          "You retain ownership of your source images and of the layers generated from them. We claim no licence over your content beyond what is needed to process and deliver it.",
          "We retain ownership of the service, the models and the interface. Nothing in these terms transfers model rights to you.",
        ],
      },
      {
        id: "liability",
        heading: "Availability and liability",
        body: [
          "The service is provided as-is. We do not warrant that reconstruction of occluded areas will match the original scene, or that output will meet a specific marketplace or print standard.",
          "To the extent permitted by law, our aggregate liability is limited to the amount you paid in the twelve months before the claim. We are not liable for lost revenue, lost contracts or reputational harm arising from use of the output.",
        ],
        note: "Review reconstructed regions before any commercial delivery. You are the last check in the pipeline, not us.",
      },
    ],
    faq: [
      {
        q: "Can I use outputs commercially?",
        a: "Yes on paid plans, including client work. You must hold the rights to the source image; the service does not grant rights to third-party material.",
      },
      {
        q: "Are credits refundable?",
        a: "Failed runs are credited back automatically. Completed runs that produced output are not refunded, but we review disputes individually.",
      },
      {
        q: "Do you own my images?",
        a: "No. You keep ownership of your source images and generated layers; we take only the licence needed to process and deliver them.",
      },
      {
        q: "Can I remove a watermark with this?",
        a: "Only from material you own. Using the service to strip attribution from someone else's work is prohibited and will terminate the account.",
      },
      {
        q: "What happens if the service shuts down?",
        a: "You can export your layer stacks at any time. We will give notice before any shutdown so paid workspaces can retrieve their files.",
      },
    ],
    related: ["privacy", "security", "ai-transparency", "pricing"],
    updated: "2026-11-11",
  },

  {
    slug: "security",
    cluster: "legal",
    title: "Image to Layers — How Uploaded Images Are Protected",
    description:
      "Image to Layers — transport encryption, signed delivery URLs, access scoping, retention windows, deletion, and what to check before uploading client material.",
    h1: "Image to Layers: security and file handling",
    eyebrow: "Trust",
    intro: [
      "Layer separation means uploading unreleased product photography, unpublished covers and client character art. That is not casual data, and it should not be treated casually.",
      "Here is what happens to a file between upload and deletion.",
    ],
    demo: "ecommerce",
    sections: [
      {
        id: "transit",
        heading: "In transit and at rest",
        body: [
          "Uploads and downloads use TLS. Stored objects are encrypted at rest with provider-managed keys, and access is scoped to the service role that processes the job — not to a public bucket.",
          "Delivery uses signed URLs with short expiry, so a link shared from your dashboard stops working rather than becoming a permanent public reference.",
        ],
        bullets: [
          { title: "TLS everywhere", text: "No plaintext transport, including internal service calls." },
          { title: "Encrypted at rest", text: "Provider-managed keys, per-object access control." },
          { title: "Signed delivery", text: "Time-limited URLs instead of public object paths." },
          { title: "Scoped access", text: "Job workers see one job, not the bucket." },
        ],
      },
      {
        id: "retention",
        heading: "Retention and deletion",
        body: [
          "Files are kept for the retention window of your plan and then deleted automatically. Deleting a job in the workspace removes the upload and its outputs immediately from primary storage; backups roll off within thirty days.",
        ],
        table: {
          head: ["Plan", "Retention"],
          rows: [
            ["Starter trial", "7 days"],
            ["Creator", "30 days"],
            ["Studio", "1 year"],
          ],
        },
      },
      {
        id: "training",
        heading: "No training on customer content",
        body: [
          "Uploaded images are not added to training data, and generated layers are not used to improve models. This is a contractual commitment, not just a policy preference — see the [AI transparency note](/ai-transparency).",
        ],
      },
      {
        id: "before",
        heading: "Before you upload client material",
        body: [
          "Three things worth confirming: that you have the rights to process the image, that your agreement with the client permits third-party processing, and that the retention window is acceptable for the sensitivity of the asset.",
          "If any of those is unclear, email us before uploading. We would rather answer a question than handle an incident.",
        ],
        note: "For unreleased campaigns, use the shortest retention window available and delete the job as soon as the export is downloaded.",
      },
    ],
    faq: [
      {
        q: "Can anyone else see my uploads?",
        a: "No. Access is scoped per job, delivery uses signed URLs, and files are not used for training or shared with other accounts.",
      },
      {
        q: "Are files encrypted?",
        a: "Yes — TLS in transit, provider-managed encryption at rest, with per-object access control.",
      },
      {
        q: "How do I delete a file immediately?",
        a: "Delete the job from the workspace. Primary storage is cleared at once; backups roll off within thirty days.",
      },
      {
        q: "Do you support a DPA?",
        a: "Yes, for Creator and Studio workspaces. Ask before uploading regulated or client-confidential material.",
      },
      {
        q: "Is there a SOC 2 report?",
        a: "Not yet. This is a preview build; audit readiness is planned before general availability, and we will say so plainly when it exists.",
      },
    ],
    related: ["privacy", "ai-transparency", "terms", "about"],
    updated: "2026-11-11",
  },

  {
    slug: "ai-transparency",
    cluster: "legal",
    title: "Image to Layers — What Is Generated vs Recovered",
    description:
      "Image to Layers — what the model does, which parts of an output are generated estimates, which are preserved pixels, and the model licensing behind the pipeline.",
    h1: "Image to Layers: what is generated, and what is real",
    eyebrow: "Transparency",
    intro: [
      "Every separation produces two kinds of pixels: the ones that came from your image, and the ones the model invented where something was hidden. Mixing them silently is how a tool becomes untrustworthy.",
      "This page is the disclosure we would want if we were the customer.",
    ],
    demo: "cover",
    sections: [
      {
        id: "preserved",
        heading: "Preserved from your image",
        body: [
          "Every detected element is cut from your source at its original pixels and resolution. Layer edges are refined against the local background, but the interior of each element is your image, not a reconstruction.",
          "That means a product's label, a character's line art and a cover's texture are unchanged. Recompression of the composite is avoided on export.",
        ],
      },
      {
        id: "generated",
        heading: "Generated by the model",
        body: [
          "Two categories of pixels are estimates, and both matter commercially.",
        ],
        bullets: [
          { title: "Occluded regions", text: "The area behind a subject, filled so the background layer is complete. Never photographed, never recoverable." },
          { title: "Amodal completion", text: "Parts of an element that were hidden by another element, completed so each layer is usable on its own." },
        ],
        note: "Treat generated regions the way you treat any generative fill: review at 100%, and replace them when the composition itself is the deliverable.",
      },
      {
        id: "not",
        heading: "What the model cannot do",
        body: [
          "It cannot restore flattened text as editable characters. It cannot recover an object that is completely hidden. It cannot recover original pixels behind an occlusion, only a plausible continuation.",
          "It also cannot guarantee identical output across runs — edge treatment and ambiguous grouping vary, so each run should be reviewed rather than assumed.",
        ],
      },
      {
        id: "models",
        heading: "Model and licensing notes",
        body: [
          "The pipeline builds on open layer-decomposition research, including work released under permissive licences, alongside licensed hosted models for specific components. Output rights follow the terms on this site; model licences govern the underlying technology, not your images.",
          "If you need a component-level list for a procurement review, email us and we will send the current inventory with licences.",
        ],
      },
      {
        id: "commit",
        heading: "Our commitments",
        body: [
          "No training on customer uploads. No silent change of model behind an unchanged feature name — if the underlying model changes materially, the release notes say so. No claim of “recovered” pixels where the model estimated.",
        ],
      },
    ],
    faq: [
      {
        q: "Is the reconstructed background real?",
        a: "No. It is generated to be plausible, based on surrounding texture, lighting and perspective. Those pixels never existed in your file.",
      },
      {
        q: "Can I tell which parts were generated?",
        a: "Not from the layer alone in this build. The reconstructed areas are the regions that were occluded in the source — a job-level report flagging them is on the roadmap.",
      },
      {
        q: "Do you train models on my uploads?",
        a: "No. Uploads are used to complete the job and are excluded from training data.",
      },
      {
        q: "Which models power the pipeline?",
        a: "A combination of open layer-decomposition research and licensed hosted models. Component-level detail is available on request for procurement reviews.",
      },
      {
        q: "Can I use generated regions commercially?",
        a: "Yes on paid plans, subject to the terms. You remain responsible for reviewing output before commercial delivery.",
      },
    ],
    related: ["how-it-works", "security", "privacy", "terms"],
    updated: "2026-11-11",
  },
];
