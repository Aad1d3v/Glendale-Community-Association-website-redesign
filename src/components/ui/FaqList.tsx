import { Icon } from "@/components/ui/Icon";

/**
 * Question and answer list built on <details>, so it works without JavaScript
 * and is announced correctly by screen readers. The summary is the target, so
 * it clears 44px on its own.
 */
export function FaqList({ items }: { items: ReadonlyArray<{ q: string; a: string }> }) {
  return (
    <ul className="divide-y divide-ink-200/70 border-y border-ink-200/70">
      {items.map((item) => (
        <li key={item.q}>
          <details className="group">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left font-display text-[1.0625rem] font-semibold text-ink-900 marker:content-none [&::-webkit-details-marker]:hidden hover:text-plum-800">
              {item.q}
              <Icon
                name="chevronDown"
                className="mt-1 h-5 w-5 shrink-0 text-plum-600 transition-transform duration-200 group-open:rotate-180"
              />
            </summary>
            <p className="max-w-[68ch] pb-6 pr-10 text-[0.9375rem] leading-relaxed text-ink-600">
              {item.a}
            </p>
          </details>
        </li>
      ))}
    </ul>
  );
}
