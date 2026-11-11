import Link from "next/link";
import { footerColumns, site } from "@/lib/site";
import { LogoMark } from "@/components/logo";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t" style={{ borderColor: "var(--line)" }}>
      <div className="container-wide py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <LogoMark size={24} />
              <span className="text-[15px] font-semibold">Image Layers</span>
            </Link>
            <p className="mt-3 max-w-[240px] text-[13px] leading-relaxed text-[#5b6879]">
              AI layer separation for e-commerce images, covers, Live2D characters, and YouTube
              thumbnails. Separate, reconstruct, export.
            </p>
            <p className="mt-4 text-[12px] text-[#6b7280]">
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
                        className="text-[13px] text-[#9aa3b2] transition hover:text-[#101828]"
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

        <div className="mt-12 flex flex-col gap-3 border-t pt-6 text-[12px] text-[#6b7280] sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: "var(--line)" }}>
          <p>
            © {site.launchYear} {site.name}. Preview build — processing is simulated.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/ai-transparency" className="hover:text-[#101828]">AI transparency</Link>
            <Link href="/security" className="hover:text-[#101828]">Security</Link>
            <Link href="/privacy" className="hover:text-[#101828]">Privacy</Link>
            <Link href="/terms" className="hover:text-[#101828]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
