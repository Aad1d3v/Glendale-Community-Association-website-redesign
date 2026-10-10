/**
 * First tab stop on every page.
 *
 * Deliberately not built from `sr-only` plus `focus:not-sr-only`: those set
 * `position` and `padding`, and so do `focus:fixed` and `focus:px-5`, and two
 * utilities of equal specificity are resolved by stylesheet order rather than by
 * the order they appear in the class attribute. One transform does the whole job
 * instead — nothing to conflict with.
 */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-full bg-plum-700 px-5 py-3 text-sm font-semibold text-white shadow-pop transition-transform focus:translate-y-0"
    >
      Skip to main content
    </a>
  );
}
