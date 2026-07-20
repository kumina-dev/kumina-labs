import { paperContent } from "@/lib/content";
import type { Locale } from "@/lib/site";

export function ProductMockup({
  locale,
}: {
  locale: Locale;
}) {
  const copy = paperContent[locale].mockup;
  const icons = ["↯", "⌕", "↥"];

  return (
    <div className="relative mx-auto w-full min-w-0 max-w-2xl perspective-[1600px]">
      <div className="absolute -inset-6 rounded-full bg-indigo-500/20 blur-3xl sm:-inset-12" />
      <div className="absolute -bottom-10 left-16 right-16 h-16 rounded-full bg-black/80 blur-3xl" />
      <div className="absolute -right-8 top-20 size-56 rounded-full bg-violet-400/15 blur-3xl" />
      <div className="absolute -left-10 bottom-12 size-44 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative origin-center transform-gpu rounded-3xl border border-white/15 bg-neutral-950/95 p-2 shadow-2xl shadow-black/80 sm:rotate-2 sm:rounded-[2.25rem] sm:p-3">
        <div className="overflow-hidden rounded-[1.1rem] border border-white/10 bg-[#0b0b0d] shadow-inner shadow-white/5 sm:rounded-[1.75rem]">
          <div className="flex items-center justify-between border-b border-white/10 bg-white/4 px-3 py-3 sm:px-5 sm:py-4">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-neutral-600 sm:size-3" />
              <span className="size-2.5 rounded-full bg-neutral-600 sm:size-3" />
              <span className="size-2.5 rounded-full bg-neutral-600 sm:size-3" />
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200 shadow-lg shadow-black/20 sm:gap-2 sm:px-4 sm:py-1.5 sm:text-sm">
              <span className="text-base leading-none">
                ✓
              </span>
              {copy.saved}
            </div>
          </div>

          <div className="grid w-full sm:min-h-107.5 sm:grid-cols-[minmax(0,3fr)_minmax(0,7fr)]">
            <aside className="hidden w-full min-w-0 overflow-hidden border-r border-white/10 bg-black/25 px-4 py-6 sm:block">
              <div className="mb-7 inline-flex -rotate-2 items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950 shadow-xl shadow-white/10">
                <span className="text-lg leading-none">+</span>
                {copy.new}
              </div>

              <div className="space-y-4">
                {copy.notes.map(([title, meta], index) => (
                  <div
                    key={title}
                    className={
                      index === 1
                        ? "relative rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl shadow-black/30 before:absolute before:left-0 before:top-3 before:h-10 before:w-0.5 before:rounded-full before:bg-violet-400"
                        : "px-2 py-1"
                    }
                  >
                    <p className="wrap-break-word text-sm font-semibold leading-snug text-white">
                      {title}
                    </p>
                    <p className="mt-1 text-sm italic leading-tight text-neutral-400">
                      {meta}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-4 shadow-inner shadow-black/40">
                <div className="flex items-center gap-2 text-neutral-400">
                  <span className="text-lg leading-none">⌕</span>
                  <span className="text-sm">{copy.search}</span>
                </div>
                <p className="mt-1 text-sm italic text-neutral-400">
                  {copy.offline.toLowerCase()}
                </p>
              </div>
            </aside>

            <article className="relative w-full min-w-0 overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.07),transparent_20rem)] px-5 py-6 sm:px-7 sm:py-8">
              <div className="flex items-center justify-between gap-3">
                <p className="text-base italic text-neutral-400 sm:text-lg">
                  {copy.draft}
                </p>

                <div className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-red-200 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm">
                  <span className="size-1.5 rounded-full bg-red-300" />
                  {copy.offline}
                </div>
              </div>

              <h2
                className={`mt-6 max-w-sm font-semibold leading-[1.12] tracking-[-0.045em] text-white sm:mt-7 ${
                  locale === "fi"
                    ? "text-2xl sm:text-3xl"
                    : "text-2xl sm:text-4xl"
                }`}
              >
                {copy.title}
              </h2>

              <p
                className={`mt-5 max-w-md text-base leading-7 text-neutral-300 sm:mt-7 ${
                  locale === "fi"
                    ? "sm:text-base sm:leading-7"
                    : "sm:text-lg sm:leading-8"
                }`}
              >
                {copy.body}
              </p>

              <div className="mt-6 max-w-md rounded-2xl border border-white/10 bg-white/4 p-3 shadow-2xl shadow-black/30 sm:mt-9 sm:rounded-3xl">
                <div className="flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-full bg-violet-500/15 text-violet-300 sm:size-9">
                    ◒
                  </span>
                  <p className="text-sm font-semibold text-white sm:text-base">
                    {copy.ruleLabel}
                  </p>
                </div>

                <p
                  className={`mt-3 pl-11 italic text-neutral-300 sm:pl-12 ${
                    locale === "fi"
                      ? "text-base"
                      : "text-base sm:text-lg"
                  }`}
                >
                  {copy.rule}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-7">
                {copy.actions.map(
                  (label, index) => (
                    <span
                      key={label}
                      className="inline-flex min-w-0 items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-black/30 px-2 py-2 text-xs text-neutral-200 shadow-lg shadow-black/20 sm:text-sm"
                    >
                      <span className="text-cyan-200">
                        {icons[index]}
                      </span>
                      {label}
                    </span>
                  )
                )}
              </div>
            </article>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-8 left-10 right-10 h-10 rounded-full bg-black/60 blur-2xl" />
    </div>
  );
}
