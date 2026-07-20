import type { Locale } from "@/lib/site";
import {
  absoluteUrl,
  localizedPath,
  siteConfig,
} from "@/lib/site";
import type { Metadata } from "next";

const descriptions = {
  en: "Kumina Labs designs and builds clear, fast websites for small businesses and creates focused software products such as Paper.",
  fi: "Kumina Labs suunnittelee ja toteuttaa selkeitä, nopeita verkkosivuja pienyrityksille sekä kehittää Paperin kaltaisia ohjelmistotuotteita.",
} as const;

export function createRootMetadata(
  locale: Locale
): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default:
        "Kumina Labs — Custom websites and focused software",
      template: `%s | ${siteConfig.name}`,
    },
    description: descriptions[locale],
    applicationName: siteConfig.name,
    authors: [{ name: "Ville Syrjälä" }],
    creator: "Kumina Labs",
    publisher: "Kumina Labs",
    icons: {
      icon: [
        {
          url: "/kumina-mark.svg",
          type: "image/svg+xml",
        },
      ],
      shortcut: [
        {
          url: "/kumina-mark.svg",
          type: "image/svg+xml",
        },
      ],
      apple: [
        {
          url: "/api/icon",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

type PageMetadataOptions = {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  paper?: boolean;
};

export function createPageMetadata({
  locale,
  path = "/",
  title,
  description,
  paper = false,
}: PageMetadataOptions): Metadata {
  const canonical = localizedPath(locale, path);
  const englishPath = localizedPath("en", path);
  const finnishPath = localizedPath("fi", path);

  const image = paper
    ? {
        url: "/og.png?v=2",
        width: 1200,
        height: 630,
        alt: "Paper by Kumina Labs — Write quickly. Find it later. Own your data.",
      }
    : {
        url: `/api/og?locale=${locale}`,
        width: 1200,
        height: 630,
        alt:
          locale === "fi"
            ? "Kumina Labs — Yksilölliset verkkosivut ja selkeät ohjelmistotuotteet."
            : "Kumina Labs — Custom websites and focused software.",
      };

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: englishPath,
        fi: finnishPath,
        "x-default": englishPath,
      },
    },
    openGraph: {
      type: "website",
      url: absoluteUrl(canonical),
      siteName: siteConfig.name,
      locale: locale === "fi" ? "fi_FI" : "en_US",
      alternateLocale:
        locale === "fi" ? ["en_US"] : ["fi_FI"],
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}
