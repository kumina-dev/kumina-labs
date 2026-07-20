import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const ogImage = {
  url: "/og.png?v=2",
  width: 1200,
  height: 630,
  alt: "Paper by Kumina Labs — Write quickly. Find it later. Own your data.",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.productName} by ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Paper",
    "Kumina Labs",
    "private notes app",
    "offline notes",
    "local-first writing app",
    "markdown notes",
    "writing tool",
    "notes tool",
  ],
  authors: [{ name: "Kumina Labs" }],
  creator: "Kumina Labs",
  publisher: "Kumina Labs",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.productName} by ${siteConfig.name}`,
    description: siteConfig.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.productName} by ${siteConfig.name}`,
    description: siteConfig.description,
    images: [ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
