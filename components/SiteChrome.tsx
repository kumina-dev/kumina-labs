import { chromeContent } from "@/lib/content";
import { localizedPath, siteConfig, type Locale } from "@/lib/site";
import Link from "next/link";

type PageKind = "studio" | "paper" | "legal";

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" className={className}>
      <rect width="64" height="64" rx="18" fill="currentColor" />
      <path
        d="M20 14v36M21 33 43 15M21 33l23 17"
        fill="none"
        stroke="#1b1206"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="46" cy="32" r="4" fill="#1b1206" />
    </svg>
  );
}

export function SiteHeader({
  locale,
  page,
}: {
  locale: Locale;
  page: PageKind;
}) {
  const copy = chromeContent[locale];
  const navigation =
    page === "paper"
      ? copy.paperNavigation
      : copy.studioNavigation.map((item) => ({
          ...item,
          href:
            page === "legal" && item.href.startsWith("#")
              ? localizedPath(locale, `/${item.href}`)
              : item.href,
        }));

  const homeHref = localizedPath(locale);
  const alternateLocale = locale === "en" ? "fi" : "en";
  const alternatePath =
    page === "paper" ? "/paper" : page === "legal" ? "/privacy" : "/";
  const alternateHref = localizedPath(alternateLocale, alternatePath);
  const ctaHref =
    page === "paper"
      ? "#waitlist"
      : page === "legal"
        ? localizedPath(locale, "/#contact")
        : "#contact";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0906]/88 backdrop-blur-xl">
      <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link
          href={homeHref}
          className="inline-flex shrink-0 items-center gap-3 font-semibold tracking-tight text-(--foreground)"
        >
          <BrandMark className="size-9 text-(--accent)" />
          <span>{siteConfig.name}</span>
        </Link>

        <nav
          aria-label={
            locale === "en" ? "Main navigation" : "Päänavigaatio"
          }
          className="hidden items-center gap-7 text-sm text-(--muted) lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-(--foreground)"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href={alternateHref}
            hrefLang={alternateLocale}
            className="inline-flex h-10 items-center rounded-full border border-white/12 px-3 text-xs font-semibold text-(--muted) transition hover:border-white/25 hover:text-(--foreground) sm:px-4 sm:text-sm"
            aria-label={copy.languageLabel}
          >
            {copy.languageCode}
          </Link>

          <Link
            href={ctaHref}
            className="inline-flex h-10 items-center rounded-full bg-(--accent) px-4 text-xs font-semibold text-(--accent-ink) transition hover:bg-(--accent-strong) sm:px-5 sm:text-sm"
          >
            <span className="hidden sm:inline">
              {page === "paper" ? copy.paperCta : copy.studioCta}
            </span>
            <span className="sm:hidden">
              {page === "paper"
                ? locale === "en"
                  ? "Waitlist"
                  : "Lista"
                : locale === "en"
                  ? "Contact"
                  : "Yhteys"}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = chromeContent[locale];

  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-10 text-sm text-(--muted) sm:px-8 md:grid-cols-[1fr_auto] md:items-end lg:px-10">
        <div>
          <Link
            href={localizedPath(locale)}
            className="inline-flex items-center gap-3 font-semibold text-(--foreground)"
          >
            <BrandMark className="size-8 text-(--accent)" />
            {siteConfig.name}
          </Link>

          <p className="mt-4">{copy.footerLine}</p>
          <p className="mt-2">
            © {new Date().getFullYear()} Kumina Labs.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
          <Link
            href={localizedPath(locale, "/#services")}
            className="transition hover:text-(--foreground)"
          >
            {copy.services}
          </Link>
          <Link
            href={localizedPath(locale, "/paper")}
            className="transition hover:text-(--foreground)"
          >
            {copy.product}
          </Link>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="transition hover:text-(--foreground)"
          >
            {siteConfig.contactEmail}
          </a>
          <Link
            href={localizedPath(locale, "/privacy")}
            className="transition hover:text-(--foreground)"
          >
            {copy.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
