import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";

/**
 * Interior page header. Same sun motif as the home hero, a third of the height,
 * and room for a row of facts so every page opens with the answer to its most
 * likely question rather than a wall of prose.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  facts,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: ReactNode;
  facts?: ReadonlyArray<{ label: string; value: string }>;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-72 w-72 rounded-full bg-sun-200/40 sm:h-80 sm:w-80"
      />

      <Container className="relative py-12 sm:py-16 lg:py-20">
        <p className="flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-plum-600">
          <span aria-hidden="true" className="h-px w-6 bg-sun-400" />
          {eyebrow}
        </p>

        <h1 className="mt-4 max-w-[24ch] font-display text-[2rem] font-semibold leading-[1.06] text-ink-900 sm:text-[2.5rem] lg:text-[2.8rem]">
          {title}
        </h1>

        <div className="mt-5 max-w-[58ch] text-[1.0625rem] leading-relaxed text-ink-600">{lede}</div>

        {children ? <div className="mt-8">{children}</div> : null}

        {facts?.length ? (
          <dl className="mt-10 grid gap-6 border-t border-ink-200/70 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-500">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 font-display text-[1.0625rem] font-semibold text-ink-900">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </Container>
    </section>
  );
}
