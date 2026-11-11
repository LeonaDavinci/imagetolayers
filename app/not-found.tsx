import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-narrow py-24 text-center">
      <span className="chip mx-auto">
        <span className="chip-dot" />
        404
      </span>
      <h1 className="mt-5 text-[32px] leading-tight tracking-tight sm:text-[40px]">
        That page has not been separated yet
      </h1>
      <p className="mx-auto mt-3 max-w-[46ch] text-[14.5px] leading-relaxed text-[#98a2b3]">
        The URL does not match any published workflow. Start from the layer studio, or pick one of the
        four workflows below.
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
        <Link href="/app" className="btn btn-primary">
          Open the layer studio
        </Link>
        <Link href="/" className="btn btn-ghost">
          Back to home
        </Link>
      </div>
      <div className="mt-10 grid gap-2 text-left sm:grid-cols-2">
        {[
          { href: "/image-to-layers", label: "Image to layers" },
          { href: "/product-image-to-layers", label: "Product images" },
          { href: "/cover-to-layers", label: "Covers and posters" },
          { href: "/live2d-character-to-layers", label: "Live2D characters" },
          { href: "/youtube-thumbnail-to-layers", label: "YouTube thumbnails" },
          { href: "/layer-levels", label: "Layer levels" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="card-link rounded-xl border px-4 py-3 text-[13.5px] text-[#c3cad6]"
            style={{ borderColor: "var(--line)" }}
          >
            {link.label} →
          </Link>
        ))}
      </div>
    </div>
  );
}
