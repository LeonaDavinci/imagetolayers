import type { Metadata } from "next";
import StudioView from "@/components/studio-view";

export const metadata: Metadata = {
  title: "Layer studio",
  description: "Upload an image, choose a layer level, review the stack and export.",
  alternates: { canonical: "/app" },
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  return <StudioView locale="en" />;
}
