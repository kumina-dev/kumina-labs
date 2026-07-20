export type Locale = "en" | "fi";

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const siteConfig = {
  name: "Kumina Labs",
  productName: "Paper",
  url: configuredUrl || "https://paper-kumina.vercel.app",
  contactEmail: "ville.syrjala@protonmail.com",
  paperTagline: "Write quickly. Find it later. Own your data.",
};

export function localizedPath(locale: Locale, path = "/") {
  const normalizedPath = path === "/" ? "" : `/${path.replace(/^\/+|\/+$/g, "")}`;

  if (locale === "fi") {
    return `/fi${normalizedPath}` || "/fi";
  }

  return normalizedPath || "/";
}

export function absoluteUrl(path: string) {
  return new URL(path, `${siteConfig.url}/`).toString();
}
