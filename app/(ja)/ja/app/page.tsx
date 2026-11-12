import type { Metadata } from "next";
import StudioView from "@/components/studio-view";

export const metadata: Metadata = {
  title: "レイヤースタジオ",
  description: "画像をアップロードし、レイヤーレベルを選んで、レイヤー構成を確認して書き出します。",
  alternates: { canonical: "/ja/app" },
  robots: { index: false, follow: false },
};

export default function JaStudioPage() {
  return <StudioView locale="ja" />;
}
