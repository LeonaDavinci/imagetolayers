import Link from "next/link";
import { nav } from "@/lib/site";
import { LogoMark } from "@/components/logo";

function Chevron() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        borderColor: "var(--line)",
        background: "rgba(255,255,255,0.94)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div className="container-wide flex h-[62px] items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Image to Layers home">
          <LogoMark />
          <span className="text-[15px] font-semibold tracking-[-0.015em]">Image to Layers</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((group) => (
            <div key={group.label} className="group relative">
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-[7px] px-3 py-2 text-[13.5px] text-[#46536a] transition hover:bg-[#f3f5f8] hover:text-[#101828]"
              >
                {group.label}
                <Chevron />
              </button>
              <div className="pointer-events-none absolute left-0 top-full pt-2 opacity-0 transition duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                <div className="glass-strong w-[300px] p-2">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-[7px] px-3 py-2.5 transition hover:bg-[#f5f7fa]"
                    >
                      <span className="block text-[13.5px] font-medium text-[#101828]">{link.label}</span>
                      {link.hint ? (
                        <span className="mt-0.5 block text-[12px] leading-snug text-[#5b6879]">{link.hint}</span>
                      ) : null}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <Link
            href="/pricing"
            className="rounded-[7px] px-3 py-2 text-[13.5px] text-[#46536a] transition hover:bg-[#f3f5f8] hover:text-[#101828]"
          >
            Pricing
          </Link>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/app" className="text-[13.5px] text-[#46536a] transition hover:text-[#101828]">
            Sign in
          </Link>
          <Link href="/app" className="btn btn-primary btn-sm">
            Start free
          </Link>
        </div>

        <details className="relative lg:hidden">
          <summary
            className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-[7px] border text-[#46536a]"
            style={{ borderColor: "var(--line-strong)" }}
            aria-label="Open menu"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 4.5H14M2 8H14M2 11.5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </summary>
          <div
            className="absolute right-0 top-full mt-2 w-[286px] rounded-xl border bg-white p-3"
            style={{
              borderColor: "var(--line)",
              boxShadow: "var(--shadow-lg)",
              maxHeight: "76vh",
              overflowY: "auto",
            }}
          >
            {nav.map((group) => (
              <div key={group.label} className="mb-3 last:mb-0">
                <p className="kicker mb-1.5 px-2">{group.label}</p>
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-[7px] px-2 py-1.5 text-[13.5px] text-[#46536a] hover:bg-[#f5f7fa]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              href="/pricing"
              className="block rounded-[7px] px-2 py-1.5 text-[13.5px] text-[#46536a] hover:bg-[#f5f7fa]"
            >
              Pricing
            </Link>
            <Link href="/app" className="btn btn-primary mt-3 w-full">
              Start free
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
