type Props = { size?: number; className?: string };

/**
 * Stacked-planes mark. Geometry mirrors app/icon.svg and public/brand/logo-mark.svg
 * so the header, the favicon and the social assets stay consistent.
 */
export function LogoMark({ size = 26, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g transform="translate(-0.65,-1.21) scale(1.1286)">
        <rect x="0.75" y="12.25" width="17" height="17" rx="4.2" fill="#E4EEFF" stroke="#B7D2FA" strokeWidth="1.15" />
        <rect x="6.25" y="6.75" width="17" height="17" rx="4.2" fill="#93B8F7" />
        <rect x="11.75" y="1.25" width="17" height="17" rx="4.2" fill="#2563EB" />
        <path d="M16.1 8.3h8M16.1 12.5h6" stroke="#FFFFFF" strokeWidth="1.95" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function Logo({ size = 26 }: Props) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark size={size} />
      <span className="text-[15px] font-semibold tracking-[-0.015em] text-[#101828]">Image to Layers</span>
    </span>
  );
}
