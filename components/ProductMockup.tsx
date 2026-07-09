export function ProductMockup() {
  const notes = [
    {
      title: "Launch notes",
      meta: "Yesterday",
    },
    {
      title: "Draft: calm writing",
      meta: "Edited now",
      active: true,
    },
    {
      title: "Ideas to revisit",
      meta: "Local note",
    },
    {
      title: "Export checklist",
      meta: "Markdown",
    },
  ];

  const actions = [
    {
      label: "Fast",
      icon: "↯",
    },
    {
      label: "Search",
      icon: "⌕",
    },
    {
      label: "Export",
      icon: "↥",
    },
  ];
  
  return (
    <div className="relative mx-auto w-full max-w-2xl perspective-[1600px]">
      <div className="absolute -inset-12 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute -bottom-10 left-16 right-16 h-16 rounded-full bg-black/80 blur-3xl" />
      <div className="absolute -right-8 top-20 h-56 w-56 rounded-full bg-violet-400/15 blur-3xl" />
      <div className="absolute -left-10 bottom-12 h-44 w-44 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative origin-center transform-gpu rotate-z-3 rounded-[2.25rem] border border-white/15 bg-neutral-950/95 p-3 shadow-2xl shadow-black/80">
        <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b0b0d] shadow-inner shadow-white/5">
          <div className="flex items-center justify-between border-b border-white/10 bg-white/4 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-neutral-600" />
              <span className="h-3 w-3 rounded-full bg-neutral-600" />
              <span className="h-3 w-3 rounded-full bg-neutral-600" />
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-neutral-200 shadow-lg shadow-black/20">
              <span className="text-base leading-none">✓</span>
              Saved
            </div>
          </div>

          <div className="grid min-h-107.5 grid-cols-[0.34fr_0.66fr]">
            <aside className="border-r border-white/10 bg-black/25 px-5 py-6">
              <button className="mb-7 inline-flex -rotate-2 items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950 shadow-xl shadow-white/10">
                <span className="text-lg leading-none">+</span>
                New
              </button>

              <div className="space-y-4">
                {notes.map((note) => (
                  <div
                    key={note.title}
                    className={
                      note.active
                        ? "relative rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl shadow-black/30 before:absolute before:left-0 before:top-3 before:h-10 before:w-0.5 before:rounded-full before:bg-violet-400"
                        : "px-2 py-1"
                    }
                  >
                    <p className="text-base font-semibold leading-tight text-white">
                      {note.title}
                    </p>
                    <p className="mt-1 text-sm italic leading-tight text-neutral-500">
                      {note.meta}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-4 shadow-inner shadow-black/40">
                <div className="flex items-center gap-2 text-neutral-400">
                  <span className="text-lg leading-none">⌕</span>
                  <span className="text-sm">Search</span>
                </div>
                <p className="mt-1 text-sm italic text-neutral-500">offline</p>
              </div>
            </aside>

            <article className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.07),transparent_20rem)] px-8 py-8">
              <div className="absolute right-7 top-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-red-200">
                <span className="h-1.5 w-1.5 rounded-full bg-red-300" />
                Offline
              </div>

              <p className="text-lg italic text-neutral-500">Draft</p>

              <h3 className="mt-7 max-w-sm text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-white">
                A quieter place to write
              </h3>

              <p className="mt-7 max-w-md text-lg leading-8 text-neutral-300">
                Start with a blank paper. No workspace setup. No account wall.
                Just a fast place to get the thought down.
              </p>

              <div className="mt-9 max-w-md rounded-3xl border border-white/10 bg-white/4 p-3 shadow-2xl shadow-black/30">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-violet-500/15 text-violet-300">
                    ◒
                  </span>
                  <p className="text-base font-semibold text-white">
                    Product rule
                  </p>
                </div>

                <p className="mt-3 pl-12 text-lg italic text-neutral-300">
                  Write. Find. Own.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                {actions.map((action) => (
                  <span
                    key={action.label}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-2 py-2 text-sm text-neutral-200 shadow-lg shadow-black/20"
                  >
                    <span className="text-cyan-200">{action.icon}</span>
                    {action.label}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-8 left-10 right-10 h-10 rounded-full bg-black/60 blur-2xl" />
    </div>
  );
}