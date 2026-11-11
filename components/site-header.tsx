import Link from "next/link";
import { nav } from "@/lib/site";

function LogoMark() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <rect x="1" y="7" width="16" height="16" rx="4" stroke="url(#lg1)" strokeWidth="1.4" opacity="0.55" />
      <rect x="5" y="4" width="16" height="16" rx="4" stroke="url(#lg1)" strokeWidth="1.4" opacity="0.8" />
      <rect x="9" y="1" width="16" height="16" rx="4" fill="url(#lg2)" fillOpacity="0.18" stroke="url(#lg1)" strokeWidth="1.6" />
      <defs>
        <linearGradient id="lg1" x1="1" y1="1" x2="25" y2="25" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B7CFF" />
          <stop offset="1" stopColor="#5EEAD4" />
        </linearGradient>
        <linearGradient id="lg2" x1="9" y1="1" x2="25" y2="17" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B7CFF" />
          <stop offset="1" stopColor="#2DD4BF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Chevron() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        borderColor: "var(--line)",
        background: "rgba(7,9,13,0.74)",
        backdropFilter: "blur(18px) saturate(140%)",
        WebkitBackdropFilter: "blur(18px) saturate(140%)",
      }}
    >
      <div className="container-wide flex h-[64px] items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Image Layers home">
          <LogoMark />
          <span className="text-[15px] font-semibold tracking-tight">Image Layers</span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {nav.map((group) => (
            <div key={group.label} className="group relative">
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13.5px] text-[#c3cad6] transition hover:bg-white/5 hover:text-white"
              >
                {group.label}
                <Chevron />
              </button>
              <div className="pointer-events-none absolute left-0 top-full pt-2 opacity-0 transition duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                <div className="glass-strong w-[286px] p-2">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-xl px-3 py-2.5 transition hover:bg-white/[0.07]"
                    >
                      <span className="block text-[13.5px] font-medium text-[#eef2f7]">{link.label}</span>
                      {link.hint ? (
                        <span className="mt-0.5 block text-[12px] text-[#8b94a3]">{link.hint}</span>
                      ) : null}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <Link
            href="/pricing"
            className="rounded-full px-3.5 py-2 text-[13.5px] text-[#c3cad6] transition hover:bg-white/5 hover:text-white"
          >
            Pricing
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/app" className="text-[13.5px] text-[#c3cad6] transition hover:text-white">
            Sign in
          </Link>
          <Link href="/app" className="btn btn-primary btn-sm">
            Start free
          </Link>
        </div>

        <details className="relative lg:hidden">
          <summary
            className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-full border"
            style={{ borderColor: "var(--line-strong)" }}
            aria-label="Open menu"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 4.5H14M2 8H14M2 11.5H14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </summary>
          <div
            className="absolute right-0 top-full mt-2 w-[280px] rounded-2xl border p-3"
            style={{ borderColor: "var(--line-strong)", background: "#0b0f15", maxHeight: "76vh", overflowY: "auto" }}
          >
            {nav.map((group) => (
              <div key={group.label} className="mb-3 last:mb-0">
                <p className="kicker mb-1.5 px-2">{group.label}</p>
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-2 py-1.5 text-[13.5px] text-[#c3cad6] hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link href="/pricing" className="block rounded-lg px-2 py-1.5 text-[13.5px] text-[#c3cad6] hover:bg-white/5">
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
