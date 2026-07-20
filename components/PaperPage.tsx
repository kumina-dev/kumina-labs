import { ProductMockup } from "@/components/ProductMockup";
import { Section } from "@/components/Section";
import {
  SiteFooter,
  SiteHeader
} from "@/components/SiteChrome";
import { WaitlistForm } from "@/components/WaitlistForm";
import { paperContent } from "@/lib/content";
import type { Locale } from "@/lib/site";
import Link from "next/link";

export function PaperPage({
  locale,
}: {
  locale: Locale;
}) {
  const copy = paperContent[locale];

  return (
    <main className="min-h-screen overflow-hidden bg-[#07070a] text-white">
      <SiteHeader locale={locale} page="paper" />

      <section className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,166,77,0.1),transparent_30rem),radial-gradient(circle_at_top_right,rgba(124,58,237,0.2),transparent_32rem)]" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-10 lg:pb-32 lg:pt-28">
          <div>
            <p className="inline-flex rounded-full border border-violet-300/20 bg-violet-400/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-200 sm:text-sm">
              {copy.hero.eyebrow}
            </p>

            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              {copy.hero.title}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-300 sm:text-xl">
              {copy.hero.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#waitlist"
                className="inline-flex h-13 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
              >
                {copy.hero.primaryCta}
              </Link>

              <Link
                href="#overview"
                className="inline-flex h-13 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold transition hover:border-white/30 hover:bg-white/10"
              >
                {copy.hero.secondaryCta}
              </Link>
            </div>

            <p className="mt-6 text-sm leading-6 text-neutral-400">
              {copy.hero.note}
            </p>
          </div>

          <ProductMockup locale={locale} />
        </div>
      </section>

      <Section
        id="overview"
        eyebrow={copy.overview.eyebrow}
        title={copy.overview.title}
        description={copy.overview.description}
        tone="raised"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {copy.overview.features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[1.75rem] border border-white/10 bg-[#0d0d12] p-6 shadow-xl shadow-black/20 sm:p-8"
            >
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                {feature.title}
              </h3>
              <p className="mt-4 leading-7 text-neutral-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="principles"
        eyebrow={copy.principles.eyebrow}
        title={copy.principles.title}
        description={copy.principles.description}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-[#0d0d12] p-6 sm:p-8">
            <h3 className="text-xl font-semibold tracking-[-0.03em]">
              {copy.principles.currentTitle}
            </h3>

            <ul className="mt-6 space-y-4 text-neutral-300">
              {copy.principles.current.map(
                (principle) => (
                  <li
                    key={principle}
                    className="flex gap-3 leading-7"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-300" />
                    {principle}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-[#0d0d12] p-6 sm:p-8">
            <h3 className="text-xl font-semibold tracking-[-0.03em]">
              {copy.principles.delayedTitle}
            </h3>

            <div className="mt-6 flex flex-wrap gap-2">
              {copy.principles.delayed.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="waitlist"
        eyebrow={copy.waitlist.eyebrow}
        title={copy.waitlist.title}
        description={copy.waitlist.description}
        tone="raised"
      >
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="rounded-[1.75rem] border border-white/10 bg-[#0d0d12] p-6 sm:p-8">
            <h3 className="text-xl font-semibold tracking-[-0.03em]">
              {copy.waitlist.testersTitle}
            </h3>

            <ul className="mt-6 space-y-4 text-neutral-300">
              {copy.waitlist.testers.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 leading-7"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <WaitlistForm locale={locale} />
        </div>
      </Section>

      <SiteFooter locale={locale} />
    </main>
  );
}
