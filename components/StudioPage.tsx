import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { paperContent, studioContent } from "@/lib/content";
import { localizedPath, siteConfig, type Locale } from "@/lib/site";
import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="size-4 fill-none"
    >
      <path
        d="M4 10h12m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="size-5 fill-none"
    >
      <path
        d="m4 10.5 3.5 3.5L16 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WebsitePreview({ locale }: { locale: Locale }) {
  const copy = studioContent[locale].preview;

  return (
    <div className="mt-6 leading-7 text-(--muted)">
      <div className="absolute -inset-8 rounded-full bg-(--accent)/12 blur-3xl" />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#15110c] p-2 shadow-2xl shadow-black/50 sm:rotate-1 sm:rounded-[2.25rem] sm:p-3">
        <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#f3eadc] text-[#21180d] sm:rounded-[1.65rem]">
          <div className="flex items-center justify-between border-b border-black/10 bg-[#e9decd] px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-[#aa9c87]" />
              <span className="size-2.5 rounded-full bg-[#aa9c87]" />
              <span className="size-2.5 rounded-full bg-[#aa9c87]" />
            </div>

            <span className="rounded-full border border-black/10 bg-white/50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#6e604d] sm:text-xs">
              {copy.label}
            </span>
          </div>

          <div className="px-5 py-5 sm:px-8 sm:py-7">
            <div className="flex items-center justify-between gap-4 border-b border-black/10 pb-5">
              <p className="font-semibold tracking-tight">
                {copy.business}
              </p>

              <div className="hidden gap-5 text-xs font-medium text-[#6e604d] sm:flex">
                {copy.navigation.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="grid gap-8 py-9 sm:grid-cols-[1fr_0.38fr] sm:items-end sm:py-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a681f]">
                  {copy.eyebrow}
                </p>

                <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-[1.02] tracking-tighter sm:text-4xl">
                  {copy.title}
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-6 text-[#665947] sm:text-base sm:leading-7">
                  {copy.body}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#21180d] px-5 py-3 text-sm font-semibold text-[#f7efe2]">
                  {copy.cta}
                  <ArrowIcon />
                </div>
              </div>

              <div className="hidden aspect-[0.82] rounded-3xl bg-[linear-gradient(145deg,#d8a24e,#8a5b25)] p-3 sm:flex sm:items-end">
                <div className="w-full rounded-2xl border border-white/20 bg-black/30 p-4 text-[#fff8ed] backdrop-blur">
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <span className="size-2 rounded-full bg-[#f8dcae]" />
                    {copy.status}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 border-t border-black/10 pt-5">
              {["01", "02", "03"].map((number) => (
                <div key={number} className="rounded-xl bg-black/5 p-3">
                  <p className="text-xs font-semibold text-[#9a681f]">
                    {number}
                  </p>
                  <div className="mt-3 h-1.5 rounded-full bg-black/10" />
                  <div className="mt-2 h-1.5 w-2/3 rounded-full bg-black/10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaperPreview({ locale }: { locale: Locale }) {
  const copy = studioContent[locale].paper;
  const mockup = paperContent[locale].mockup;

  return (
    <div className="relative overflow-hidden rounded-4xl border border-white/12 bg-[#0c0b11] p-6 shadow-2xl shadow-black/40 sm:p-8">
      <div className="absolute -right-20 -top-20 size-64 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
          <span className="text-lg font-semibold tracking-[-0.03em] text-white">
            Paper
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300">
            <span className="size-1.5 rounded-full bg-violet-300" />
            {mockup.offline}
          </span>
        </div>

        <p className="mt-8 text-sm italic text-neutral-500">
          {mockup.draft}
        </p>

        <h3 className="mt-5 max-w-lg text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-4xl">
          {copy.tagline}
        </h3>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {mockup.actions.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-neutral-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function StudioPage({ locale }: { locale: Locale }) {
  const copy = studioContent[locale];
  const paperHref = localizedPath(locale, "/paper");
  const emailSubject = encodeURIComponent(
    locale === "en" ? "Website enquiry" : "Verkkosivukysely"
  );

  return (
    <main className="min-h-screen overflow-hidden bg-(--background) text-(--foreground)">
      <SiteHeader locale={locale} page="studio" />

      <section className="relative">
        <div className="studio-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute left-[10%] top-10 size-80 rounded-full bg-(--accent)/8 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10 lg:pb-32 lg:pt-28">
          <div>
            <p className="inline-flex rounded-full border border-(--accent)/25 bg-(--accent)/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-(--accent-strong) sm:text-sm">
              {copy.hero.eyebrow}
            </p>

            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              {copy.hero.title}{" "}
              <span className="text-(--accent-strong)">
                {copy.hero.accent}
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-(--muted) sm:text-xl">
              {copy.hero.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-(--accent) px-6 text-sm font-semibold text-(--accent-ink) transition hover:bg-(--accent-strong)"
              >
                {copy.hero.primaryCta}
                <ArrowIcon />
              </Link>

              <Link
                href="#services"
                className="inline-flex h-13 items-center justify-center rounded-full border border-white/15 bg-white/4 px-6 text-sm font-semibold transition hover:border-white/30 hover:bg-white/8"
              >
                {copy.hero.secondaryCta}
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-(--muted)">
              {copy.hero.points.map((point) => (
                <span key={point} className="inline-flex items-center gap-2">
                  <span className="text-(--accent-strong)">
                    <CheckIcon />
                  </span>
                  {point}
                </span>
              ))}
            </div>
          </div>

          <WebsitePreview locale={locale} />
        </div>
      </section>

      <Section
        id="services"
        eyebrow={copy.services.eyebrow}
        title={copy.services.title}
        description={copy.services.description}
        tone="raised"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {copy.services.cards.map((card) => (
            <article
              key={card.number}
              className="group rounded-[1.75rem] border border-white/10 bg-[#15110d] p-6 transition hover:-translate-y-1 hover:border-(--accent)/30 sm:p-8"
            >
              <div className="flex items-start justify-between gap-5">
                <span className="text-sm font-semibold text-(--accent-strong)">
                  {card.number}
                </span>
                <span className="size-2 rounded-full bg-white/15 transition group-hover:bg-(--accent)" />
              </div>

              <h3 className="mt-10 text-2xl font-semibold tracking-[-0.035em]">
                {card.title}
              </h3>

              <p className="mt-4 leading-7 text-(--muted)">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={copy.fit.eyebrow}
        title={copy.fit.title}
        description={copy.fit.description}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {copy.fit.items.map((item, index) => (
            <div
              key={item}
              className="flex gap-4 rounded-3xl border border-white/10 bg-white/3 p-5 sm:p-6"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-(--accent)/12 text-sm font-semibold text-(--accent-strong)">
                {index + 1}
              </span>
              <p className="pt-1 leading-7 text-[#d8cec0]">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="process"
        eyebrow={copy.process.eyebrow}
        title={copy.process.title}
        description={copy.process.description}
        tone="raised"
      >
        <ol className="grid gap-px overflow-hidden rounded-4xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {copy.process.steps.map((step) => (
            <li key={step.number} className="bg-[#100d09] p-6 sm:p-8">
              <span className="text-sm font-semibold text-(--accent-strong)">
                {step.number}
              </span>

              <h3 className="mt-12 text-2xl font-semibold tracking-[-0.035em]">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-(--muted)">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        eyebrow={copy.delivery.eyebrow}
        title={copy.delivery.title}
        description={copy.delivery.description}
      >
        <div className="grid overflow-hidden rounded-4xl border border-white/10 bg-[#15110d] lg:grid-cols-[0.72fr_1.28fr]">
          <div className="border-b border-white/10 bg-(--accent) p-7 text-(--accent-ink) sm:p-9 lg:border-b-0 lg:border-r">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] opacity-70">
              {copy.delivery.includedTitle}
            </p>
            <p className="mt-8 text-2xl font-semibold leading-snug tracking-[-0.035em]">
              {copy.delivery.note}
            </p>
          </div>

          <ul className="grid gap-px bg-white/10 sm:grid-cols-2">
            {copy.delivery.included.map((item) => (
              <li
                key={item}
                className="flex gap-3 bg-[#15110d] p-6 leading-7 text-[#ddd3c5] sm:p-7"
              >
                <span className="mt-1 text-(--accent-strong)">
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        id="paper"
        eyebrow={copy.paper.eyebrow}
        title={copy.paper.title}
        description={copy.paper.description}
        tone="raised"
      >
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <p className="text-2xl font-semibold leading-snug tracking-[-0.035em] text-white">
              {copy.paper.tagline}
            </p>
            <p className="mt-5 text-sm text-(--muted)">
              {copy.paper.status}
            </p>

            <Link
              href={paperHref}
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full border border-white/15 px-5 text-sm font-semibold transition hover:border-white/30 hover:bg-white/5"
            >
              {copy.paper.cta}
              <ArrowIcon />
            </Link>
          </div>

          <PaperPreview locale={locale} />
        </div>
      </Section>

      <Section
        id="about"
        eyebrow={copy.about.eyebrow}
        title={copy.about.title}
        description={copy.about.description}
      >
        <div className="grid gap-4 md:grid-cols-3">
          {copy.about.points.map((point, index) => (
            <div key={point} className="border-t border-white/15 pt-5">
              <span className="text-xs font-semibold text-(--accent-strong)">
                0{index + 1}
              </span>
              <p className="mt-5 leading-7 text-[#d8cec0]">{point}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow={copy.contact.eyebrow}
        title={copy.contact.title}
        description={copy.contact.description}
        tone="raised"
      >
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="rounded-[1.75rem] border border-white/10 bg-[#15110d] p-6 sm:p-8">
            <p className="text-sm font-semibold text-(--accent-strong)">
              {copy.contact.emailLabel}
            </p>

            <a
              href={`mailto:${siteConfig.contactEmail}?subject=${emailSubject}`}
              className="mt-4 block break-all text-lg font-semibold text-(--foreground) underline decoration-white/25 underline-offset-4 transition hover:decoration-(--accent)"
            >
              {siteConfig.contactEmail}
            </a>

            <p className="mt-6 leading-7 text-(--muted)">
              {copy.contact.responseNote}
            </p>
          </div>

          <ContactForm locale={locale} />
        </div>
      </Section>

      <SiteFooter locale={locale} />
    </main>
  );
}
