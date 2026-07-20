import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy notice",
  description: "How Kumina Labs handles Paper waitlist information.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  const deletionSubject = encodeURIComponent(
    "Paper waitlist deletion request"
  );

  return (
    <main className="min-h-screen bg-neutral-950 px-5 py-12 text-white sm:px-6 sm:py-16">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm font-medium text-neutral-300 transition hover:text-white"
        >
          ← Back to Paper
        </Link>

        <header className="mt-10 border-b border-white/10 pb-8">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-400">
            Kumina Labs
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Privacy notice
          </h1>
          <p className="mt-4 text-sm text-neutral-400">
            Last updated July 13, 2026
          </p>
        </header>

        <div className="space-y-10 py-10 text-base leading-7 text-neutral-300">
          <section aria-labelledby="controller-heading">
            <h2
              id="controller-heading"
              className="text-xl font-semibold text-white"
            >
              Who controls the data
            </h2>
            <p className="mt-3">
              Kumina Labs controls the personal information submitted through
              the Paper waitlist.
            </p>
          </section>

          <section aria-labelledby="collection-heading">
            <h2
              id="collection-heading"
              className="text-xl font-semibold text-white"
            >
              What is collected and why
            </h2>
            <p className="mt-3">
              The waitlist collects your email address, testing preference,
              and any optional details you provide about your current tool or
              problems with it. Kumina Labs uses this information to manage
              early access, understand who Paper may help, invite suitable
              testers, and send relevant product updates.
            </p>
          </section>

          <section aria-labelledby="providers-heading">
            <h2
              id="providers-heading"
              className="text-xl font-semibold text-white"
            >
              Service providers
            </h2>
            <p className="mt-3">
              Supabase stores waitlist submissions. Vercel hosts and delivers
              this website and may process standard request and operational
              data needed to provide the service. These providers process data
              on behalf of Kumina Labs under their own service and privacy
              terms.
            </p>
          </section>

          <section aria-labelledby="retention-heading">
            <h2
              id="retention-heading"
              className="text-xl font-semibold text-white"
            >
              Retention
            </h2>
            <p className="mt-3">
              Waitlist information is kept while Paper is being developed and
              for no more than 24 months after your last waitlist interaction,
              unless you ask for deletion sooner or a longer period is required
              by law.
            </p>
          </section>

          <section aria-labelledby="rights-heading">
            <h2
              id="rights-heading"
              className="text-xl font-semibold text-white"
            >
              Access and deletion requests
            </h2>
            <p className="mt-3">
              To request a copy or deletion of your waitlist information, email{" "}
              <a
                href={`mailto:${siteConfig.privacyEmail}?subject=${deletionSubject}`}
                className="font-medium text-white underline decoration-neutral-500 underline-offset-4"
              >
                {siteConfig.privacyEmail}
              </a>{" "}
              from the address you used to join. Kumina Labs may need to verify
              that the request belongs to you before acting on it.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
