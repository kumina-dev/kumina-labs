import { createRootMetadata } from "@/lib/metadata";
import type { ReactNode } from "react";
import "../globals.css";

export const metadata = createRootMetadata("en");

export default function EnglishRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
