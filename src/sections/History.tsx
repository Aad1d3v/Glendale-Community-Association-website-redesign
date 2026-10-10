import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stat } from "@/components/ui/Stat";
import { communityStats, historyIntro, historyTimeline } from "@/content/about";

export function History() {
  return (
    <Section id="history" tone="white">
      <SectionHeading eyebrow="Our history" title="It started with a rink and a shack" />

      <figure className="mt-8 overflow-hidden rounded-panel border border-ink-200/80 bg-paper">
        <img
          src="/images/glendale-neighbourhood-map.png"
          alt="Historical map highlighting Glendale and Glendale Meadows in southwest Calgary"
          loading="lazy"
          decoding="async"
          className="max-h-[30rem] w-full object-contain"
        />
        <figcaption className="px-5 py-3 text-xs text-ink-500">Glendale and Glendale Meadows on a historical southwest Calgary map.</figcaption>
      </figure>

      <div className="mt-8 grid gap-x-12 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {historyIntro.map((paragraph) => (
          <p key={paragraph} className="max-w-[46ch] text-[0.9375rem] leading-relaxed text-ink-600">
            {paragraph}
          </p>
        ))}
      </div>

      <ol className="mt-14 border-l border-ink-200 pl-6 sm:pl-8">
        {historyTimeline.map((entry) => (
          <li key={entry.title} className="relative pb-10 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[1.6rem] top-1.5 h-2.5 w-2.5 rounded-full bg-sun-400 ring-4 ring-white sm:-left-[2.1rem]"
            />
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-plum-600">
              {entry.era}
            </p>
            <h3 className="mt-1.5 font-display text-lg font-semibold text-ink-900">{entry.title}</h3>
            <p className="mt-2 max-w-[68ch] text-sm leading-relaxed text-ink-600">{entry.body}</p>
          </li>
        ))}
      </ol>

      <dl className="mt-6 grid gap-8 rounded-panel border border-ink-200/80 bg-paper p-7 sm:grid-cols-2 lg:grid-cols-4">
        {communityStats.map((stat) => (
          <Stat key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </dl>

      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        <a href="/community" className="inline-flex min-h-11 items-center font-semibold text-plum-700 underline underline-offset-4">Meet neighbours and get involved</a>
      </div>
    </Section>
  );
}
