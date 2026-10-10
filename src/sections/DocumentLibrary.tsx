import { useMemo, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { archiveByDate, kindLabels } from "@/content/documents";
import type { ArchiveDocument, DocumentKind } from "@/content/documents";
import { cn } from "@/lib/cn";
import { formatLongDate } from "@/lib/format";

/** Group order in the library, and the anchor each group answers to. */
const GROUPS: Array<{ kind: DocumentKind; anchor: string }> = [
  { kind: "newsletter", anchor: "newsletters" },
  { kind: "minutes", anchor: "minutes" },
  { kind: "bylaw", anchor: "bylaws" },
  { kind: "policy", anchor: "policies" },
  { kind: "finance", anchor: "financials" },
  { kind: "guide", anchor: "guides" },
];

const FILTERS: Array<{ id: "all" | DocumentKind; label: string }> = [
  { id: "all", label: "Everything" },
  ...GROUPS.map((group) => ({ id: group.kind, label: kindLabels[group.kind] })),
];

function DocumentCard({ entry }: { entry: ArchiveDocument }) {
  return (
    <Card as="li" className="flex flex-col">
      <div className="flex flex-wrap items-center gap-2">
        <Pill tone="plum">{kindLabels[entry.kind]}</Pill>
        {entry.issue ? <Pill tone="outline">{`Issue ${entry.issue}`}</Pill> : null}
      </div>

      <h3 className="mt-4 font-display text-[1.0625rem] font-semibold leading-snug">
        {entry.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-ink-600">{entry.summary}</p>

      <p className="mt-4 text-xs font-medium uppercase tracking-[0.08em] text-ink-500">
        {formatLongDate(entry.date)} · {entry.pages} pages · {entry.size}
      </p>

      <div className="mt-auto pt-5">
        <a
          href={`/documents/${entry.slug}.pdf`}
          download
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ink-300 bg-white px-4 text-sm font-semibold text-ink-800 transition-colors hover:border-plum-400 hover:text-plum-800"
        >
          <Icon name="download" className="h-4 w-4" />
          Download PDF
          <span className="sr-only"> — {entry.title}</span>
        </a>
      </div>
    </Card>
  );
}

export function DocumentLibrary() {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<"all" | DocumentKind>("all");
  const [year, setYear] = useState("all");

  const years = useMemo(() => {
    const found = new Set(archiveByDate.map((entry) => entry.date.slice(0, 4)));
    return [...found].sort((a, b) => b.localeCompare(a));
  }, []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return archiveByDate.filter((entry) => {
      if (kind !== "all" && entry.kind !== kind) return false;
      if (year !== "all" && !entry.date.startsWith(year)) return false;
      if (!needle) return true;

      return `${entry.title} ${entry.summary} ${entry.date.slice(0, 4)}`
        .toLowerCase()
        .includes(needle);
    });
  }, [query, kind, year]);

  const grouped = GROUPS.map((group) => ({
    ...group,
    documents: filtered.filter((entry) => entry.kind === group.kind),
  })).filter((group) => group.documents.length > 0);

  const isFiltered = query.trim() !== "" || kind !== "all" || year !== "all";

  const clearFilters = (): void => {
    setQuery("");
    setKind("all");
    setYear("all");
  };

  return (
    <Section id="library" tone="white">
      <SectionHeading
        eyebrow="Resource centre"
        title="Documents & newsletters"
        lede="Every issue of The Thumper, every set of board and AGM minutes, the bylaws, the policies, and the audited financial statements. All of it is public, and all of it downloads as a PDF."
      />

      <div className="mt-10 rounded-card border border-ink-200/80 bg-white p-5 shadow-card sm:p-6">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <label
              htmlFor="archive-search"
              className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-600"
            >
              Search the archive
            </label>
            <div className="relative mt-2">
              <Icon
                name="search"
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400"
              />
              <input
                id="archive-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Hall rental agreement, rink liner, March 2026…"
                className="h-11 w-full rounded-full border border-ink-300 bg-white pl-11 pr-4 text-sm text-ink-800 placeholder:text-ink-500 focus:border-plum-400"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="archive-year"
              className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-600"
            >
              Year
            </label>
            <select
              id="archive-year"
              value={year}
              onChange={(event) => setYear(event.target.value)}
              className="mt-2 h-11 w-full rounded-full border border-ink-300 bg-white px-4 text-sm text-ink-800 focus:border-plum-400"
            >
              <option value="all">Any year</option>
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div
          role="group"
          aria-label="Filter by document type"
          className="mt-6 flex flex-wrap gap-2 border-t border-ink-200/80 pt-5"
        >
          {FILTERS.map((filter) => {
            const active = kind === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={active}
                onClick={() => setKind(filter.id)}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold transition-colors",
                  active
                    ? "bg-plum-100 text-plum-800"
                    : "border border-ink-200 bg-white text-ink-700 hover:border-plum-300 hover:text-plum-800",
                )}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p aria-live="polite" className="text-sm text-ink-600">
          Showing {filtered.length} of {archiveByDate.length} documents
        </p>
        {isFiltered ? (
          <Button variant="ghost" size="md" icon="close" iconPosition="leading" onClick={clearFilters}>
            Clear filters
          </Button>
        ) : null}
      </div>

      {grouped.length === 0 ? (
        <div className="mt-8 rounded-card border border-dashed border-ink-300 bg-white p-10 text-center">
          <h3 className="font-display text-lg font-semibold">Nothing in the archive matches that</h3>
          <p className="mx-auto mt-2 max-w-[44ch] text-sm leading-relaxed text-ink-600">
            Try a shorter word, or clear the filters to see all {archiveByDate.length} documents.
            Anything not online yet can be requested from the hall office.
          </p>
          <Button variant="outline" className="mt-6" icon="close" iconPosition="leading" onClick={clearFilters}>
            Clear filters
          </Button>
        </div>
      ) : (
        grouped.map((group) => (
          <section key={group.kind} id={group.anchor} className="mt-12">
            <div className="flex items-baseline justify-between gap-4 border-b border-ink-200/80 pb-3">
              <h3 className="font-display text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-plum-700">
                {kindLabels[group.kind]}
              </h3>
              <p className="text-xs font-medium tabular-nums text-ink-500">
                {group.documents.length} {group.documents.length === 1 ? "file" : "files"}
              </p>
            </div>

            <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.documents.map((entry) => (
                <DocumentCard key={entry.slug} entry={entry} />
              ))}
            </ul>
          </section>
        ))
      )}
    </Section>
  );
}
