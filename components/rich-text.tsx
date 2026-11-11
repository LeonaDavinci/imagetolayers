import Link from "next/link";
import type { ReactNode } from "react";

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;
const BOLD = /\*\*([^*]+)\*\*/g;

function inline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  LINK.lastIndex = 0;
  while ((match = LINK.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(...boldOnly(text.slice(lastIndex, match.index), `${keyPrefix}-t${match.index}`));
    }
    const href = match[2];
    const label = match[1];
    nodes.push(
      href.startsWith("/") ? (
        <Link key={`${keyPrefix}-l${match.index}`} href={href}>
          {label}
        </Link>
      ) : (
        <a key={`${keyPrefix}-a${match.index}`} href={href} rel="noreferrer noopener" target="_blank">
          {label}
        </a>
      ),
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    nodes.push(...boldOnly(text.slice(lastIndex), `${keyPrefix}-t${lastIndex}`));
  }
  return nodes;
}

function boldOnly(text: string, keyPrefix: string): ReactNode[] {
  const out: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  BOLD.lastIndex = 0;
  while ((match = BOLD.exec(text)) !== null) {
    if (match.index > lastIndex) out.push(text.slice(lastIndex, match.index));
    out.push(<strong key={`${keyPrefix}-b${match.index}`}>{match[1]}</strong>);
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) out.push(text.slice(lastIndex));
  return out;
}

export function RichText({ text, id }: { text: string; id: string }) {
  return <p>{inline(text, id)}</p>;
}
