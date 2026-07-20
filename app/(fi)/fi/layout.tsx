import { createRootMetadata } from "@/lib/metadata";
import type { ReactNode } from "react";
import "../../globals.css";

export const metadata = createRootMetadata("fi");

export default function FinnishRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fi" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
