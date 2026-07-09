import Link from "next/link";
import { ProductMockup } from "@/components/ProductMockup";
import { Section } from "@/components/Section";
import { WaitlistForm } from "@/components/WaitlistForm";
import {
  delayedFeatures,
  paperFeatures,
  productPrinciples,
  siteConfig,
} from "@/lib/site";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-neutral-950 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_32rem),radial-gradient(circle_at_top_right,rgba(99,102,241,0.16),transparent_28rem)]" />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Kumina Labs
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 text-sm text-neutral-400 sm:flex"
        >
          <Link href="#paper" className="transition hover:text-white">
            Paper
          </Link>
          <Link href="#principles" className="transition hover:text-white">
            Principles
          </Link>
          <Link href="#waitlist" className="transition hover:text-white">
            Waitlist
          </Link>
        </nav>

        <Link
          href="#waitlist"
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition hover:bg-neutral-200"
        >
          Join waitlist
        </Link>
      </header>

      <section className="relative z-10 mx-auto grid w-full max-w-6xl gap-14 px-6 pb-24 pt-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:pt-24">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300 backdrop-blur">
            A focused product lab building Paper first.
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            A calmer place to write things down.
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-neutral-400">
            Paper is a private, fast, offline-first writing and notes tool for
            drafts, thoughts, ideas, and anything you want to find later.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#waitlist"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-white px-6 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
            >
              Join the Paper waitlist
            </Link>

            <Link
              href="#paper"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              See what Paper is
            </Link>
          </div>

          <p className="mt-5 text-sm text-neutral-500">
            No workspace bloat. No account-first flow. No giant platform
            promise.
          </p>
        </div>
        
        <ProductMockup />
      </section>

      <Section
        id="paper"
        eyebrow="Paper"
        title={siteConfig.tagline}
        description="Paper is intentionally small. The first version should prove whether people want a fast, local-first place to write, search, and export their work."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {paperFeatures.map((feature) => (
            <article
              key={feature.title}
              className="rounded-4xl border border-white/10 bg-white/4 p-6 shadow-xl shadow-black/20"
            >
              <h3 className="text-lg font-semibold tracking-tight text-white">
                {feature.title}
              </h3>
              <p className="mt-3 leading-7 text-neutral-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="principles"
        eyebrow="Product principles"
        title="Small on purpose."
        description="Kumina Labs should not build a huge ecosystem too early. Paper earns features only when they help people write quickly, find later, or own their data."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-4xl border border-white/10 bg-white/4 p-6 shadow-xl shadow-black/20">
            <h3 className="text-lg font-semibold tracking-tight text-white">
              What Paper is for
            </h3>

            <ul className="mt-5 space-y-3 text-neutral-300">
              {productPrinciples.map((principle) => (
                <li key={principle} className="leading-7">
                  {principle}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-4xl border border-white/10 bg-white/4 p-6 shadow-xl shadow-black/20">
            <h3 className="text-lg font-semibold tracking-tight text-white">
              Delayed for now
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {delayedFeatures.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-sm text-neutral-400"
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
        eyebrow="Waitlist"
        title="Help shape the first version of Paper."
        description="The next goal is not scale. It is finding a small group of people who actually want a quieter writing tool and are willing to test an early version."
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-4xl border border-white/10 bg-white/4 p-6 shadow-xl shadow-black/20">
            <h3 className="text-lg font-semibold tracking-tight text-white">
              Good early testers probably:
            </h3>

            <ul className="mt-5 space-y-3 leading-7 text-neutral-300">
              <li>Write notes, drafts, or ideas often.</li>
              <li>Feel slowed down by heavy workspace apps.</li>
              <li>Care about keeping access to their own writing.</li>
              <li>Would rather test a focused tool than a huge platform.</li>
            </ul>
          </div>

          <WaitlistForm />
        </div>
      </Section>

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kumina Labs.</p>
          <p>Building practical, privacy-conscious software products.</p>
        </div>
      </footer>
    </main>
  );
}
