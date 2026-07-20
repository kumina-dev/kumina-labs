import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  tone?: "default" | "raised";
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  tone = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${tone === "raised" ? "border-y border-white/10 bg-white/3" : ""} ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-(--accent-strong) sm:text-sm">
              {eyebrow}
            </p>
          ) : null}

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-(--foreground) sm:text-5xl lg:text-6xl">
            {title}
          </h2>

          {description ? (
            <p className="mt-6 max-w-2xl text-lg leading-8 text-(--muted) sm:text-xl">
              {description}
            </p>
          ) : null}
        </div>

        {children ? (
          <div className="mt-12 min-w-0 sm:mt-16">{children}</div>
        ) : null}
      </div>
    </section>
  );
}
