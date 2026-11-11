export type DemoKey = "ecommerce" | "cover" | "live2d" | "youtube";

export type Bullet = {
  title: string;
  text: string;
};

export type Section = {
  id?: string;
  heading?: string;
  lead?: string;
  body?: string[];
  bullets?: Bullet[];
  steps?: { title: string; text: string }[];
  table?: { head: string[]; rows: string[][] };
  note?: string;
};

export type Faq = { q: string; a: string };

export type PageContent = {
  slug: string;
  cluster:
    | "core"
    | "level"
    | "ecommerce"
    | "cover"
    | "live2d"
    | "youtube"
    | "compare"
    | "guide"
    | "legal";
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string[];
  demo: DemoKey;
  level?: "L1" | "L2" | "L3" | "L4";
  tool?: boolean;
  sections: Section[];
  faq: Faq[];
  related: string[];
  updated: string;
};
