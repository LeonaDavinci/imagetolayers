import Link from "next/link";
import { footerColumns, site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t" style={{ borderColor: "var(--line)" }}>
      <div className="container-wide py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <svg width="24" height="24" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                <rect x="1" y="7" width="16" height="16" rx="4" stroke="#8B7CFF" strokeWidth="1.4" opacity="0.55" />
                <rect x="5" y="4" width="16" height="16" rx="4" stroke="#8B7CFF" strokeWidth="1.4" opacity="0.8" />
                <rect x="9" y="1" width="16" height="16" rx="4" stroke="#5EEAD4" strokeWidth="1.6" />
              </svg>
              <span className="text-[15px] font-semibold">Image Layers</span>
            </Link>
            <p className="mt-3 max-w-[240px] text-[13px] leading-relaxed text-[#8b94a3]">
              AI layer separation for e-commerce images, covers, Live2D characters, and YouTube
              thumbnails. Separate, reconstruct, export.
            </p>
            <p className="mt-4 text-[12px] text-[#6b7482]">
              {site.email}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <p className="kicker mb-3">{col.title}</p>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-[#9aa3b2] transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t pt-6 text-[12px] text-[#6b7482] sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: "var(--line)" }}>
          <p>
            © {site.launchYear} {site.name}. Preview build — processing is simulated.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/ai-transparency" className="hover:text-white">AI transparency</Link>
            <Link href="/security" className="hover:text-white">Security</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
