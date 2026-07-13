import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-6 sm:py-20"
    >
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
            {eyebrow}
          </p>
        ) : null}

        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
          {title}
        </h2>

        {description ? (
          <p className="mt-5 text-lg leading-8 text-neutral-400">
            {description}
          </p>
        ) : null}
      </div>

      {children ? <div className="mt-10 min-w-0 sm:mt-12">{children}</div> : null}
    </section>
  );
}
