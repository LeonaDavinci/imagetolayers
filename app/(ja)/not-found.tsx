import Link from "next/link";

export default function JaNotFound() {
  return (
    <div className="container-narrow py-24 text-center">
      <span className="chip mx-auto">
        <span className="chip-dot" />
        404
      </span>
      <h1 className="mt-5 text-[30px] leading-tight tracking-tight sm:text-[38px]">
        このページはまだ分解されていません
      </h1>
      <p className="mx-auto mt-3 max-w-[46ch] text-[14.5px] leading-relaxed text-[#526071]">
        URL が公開中のページと一致しませんでした。レイヤースタジオから始めるか、下の用途から選んでください。
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
        <Link href="/ja/app" className="btn btn-primary">
          レイヤースタジオを開く
        </Link>
        <Link href="/ja" className="btn btn-ghost">
          ホームへ戻る
        </Link>
      </div>
      <div className="mt-10 grid gap-2 text-left sm:grid-cols-2">
        {[
          { href: "/ja/image-to-layers", label: "画像をレイヤーに" },
          { href: "/ja/product-image-to-layers", label: "商品画像" },
          { href: "/ja/cover-to-layers", label: "表紙・ポスター" },
          { href: "/ja/character-to-layers", label: "キャラクター・Live2D" },
          { href: "/ja/youtube-thumbnail-to-layers", label: "YouTube サムネイル" },
          { href: "/ja/pricing", label: "料金" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="card-link rounded-xl border px-4 py-3 text-[13.5px] text-[#344054]"
            style={{ borderColor: "var(--line)" }}
          >
            {link.label} →
          </Link>
        ))}
      </div>
    </div>
  );
}
