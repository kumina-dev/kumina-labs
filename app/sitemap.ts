import {
  absoluteUrl,
  localizedPath,
} from "@/lib/site";
import type {
  MetadataRoute,
} from "next";

const pages = [
  {
    path: "/",
    changeFrequency: "monthly" as const,
    priority: 1,
  },
  {
    path: "/paper",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/privacy",
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) => {
    const englishPath = localizedPath(
      "en",
      page.path
    );
    const finnishPath = localizedPath(
      "fi",
      page.path
    );

    const alternates = {
      languages: {
        en: absoluteUrl(englishPath),
        fi: absoluteUrl(finnishPath),
      },
    };

    return [
      {
        url: absoluteUrl(englishPath),
        changeFrequency:
          page.changeFrequency,
        priority: page.priority,
        alternates,
      },
      {
        url: absoluteUrl(finnishPath),
        changeFrequency:
          page.changeFrequency,
        priority: page.priority,
        alternates,
      },
    ];
  });
}
