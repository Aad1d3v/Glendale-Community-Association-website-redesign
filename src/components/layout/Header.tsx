import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { Brand } from "@/components/brand/Brand";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { association, primaryNav, quickActions, socialLinks } from "@/content/site";
import { rentalsEmail } from "@/content/contact";
import { cn } from "@/lib/cn";

const desktopLink = ({ isActive }: { isActive: boolean }): string =>
  cn(
    "inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-2 text-[0.75rem] font-semibold transition-colors xl:px-2.5 xl:text-[0.8125rem] 2xl:px-3 2xl:text-sm",
    isActive ? "bg-plum-50 text-plum-800" : "text-ink-700 hover:bg-ink-50 hover:text-plum-800",
  );

const mobileLink = ({ isActive }: { isActive: boolean }): string =>
  cn(
    "flex items-center justify-between rounded-xl px-3 py-3 text-[0.9375rem] font-semibold transition-colors",
    isActive ? "bg-plum-50 text-plum-800" : "text-ink-800 hover:bg-ink-50",
  );

export function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  /* Navigating from inside the drawer should close it. */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Rotating a phone to landscape must not leave the drawer open and scroll locked. */
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = (): void => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  /* Drawer behaviour: escape closes, focus stays inside, background cannot scroll. */
  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-paper",
        scrolled && "border-b border-ink-200/70 shadow-[0_10px_30px_-26px_rgba(42,15,87,0.55)]",
      )}
    >
      {/* Utility strip: only where there is room for it. */}
      <div className="hidden bg-plum-900 text-plum-100 lg:block">
        <Container className="flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a
              href={association.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white"
            >
              <Icon name="mapPin" className="h-3.5 w-3.5" />
              {association.addressLine}
            </a>
            <span className="inline-flex items-center gap-1.5 text-plum-200">
              <Icon name="clock" className="h-3.5 w-3.5" />
              Hall office: Mon–Thu 9–3, Fri 9–12
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={association.phoneHref}
              className="inline-flex items-center gap-1.5 font-semibold hover:text-white"
            >
              <Icon name="phone" className="h-3.5 w-3.5" />
              {association.phone}
            </a>
            <a href={association.mailtoHref} className="hover:text-white">
              {association.email}
            </a>
            <a href={`mailto:${rentalsEmail}`} className="hover:text-white">
              Rentals: {rentalsEmail}
            </a>
          </div>
        </Container>
      </div>

      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Link to="/" className="shrink-0" aria-label={`${association.name} — home`}>
          <Brand />
        </Link>

        <nav aria-label="Main" className="hidden min-w-0 flex-1 lg:block">
          <ul className="flex items-center justify-center gap-0 lg:gap-0.5">
            {primaryNav.map((item) => (
              <li key={item.to} className="group relative">
                <NavLink to={item.to} end={item.to === "/"} className={desktopLink}>
                  {item.label}
                  {item.children ? <Icon name="chevronDown" className="h-3.5 w-3.5" /> : null}
                </NavLink>

                {item.children ? (
                  /* Revealed on hover and on keyboard focus. Opacity rather than
                     `hidden` so the links stay reachable by tab order. */
                  <div className="pointer-events-none absolute left-0 top-full z-50 pt-2 opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 lg:left-auto lg:right-0">
                    <div className="w-72 rounded-card border border-ink-200 bg-white p-2 shadow-pop">
                      <p className="px-3 pb-1 pt-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink-500">
                        {item.label}
                      </p>
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className="block rounded-xl px-3 py-2 transition-colors hover:bg-plum-50"
                        >
                          <span className="block text-sm font-semibold text-ink-800">
                            {child.label}
                          </span>
                          {child.description ? (
                            <span className="mt-0.5 block text-xs leading-snug text-ink-500">
                              {child.description}
                            </span>
                          ) : null}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-1.5 2xl:flex">
          <Button
            to={quickActions[0].to}
            variant="sun"
            icon="hall"
            iconPosition="leading"
            size="sm"
          >
            {quickActions[0].label}
          </Button>
          <Button to={quickActions[1].to} variant="primary" size="sm">
            {quickActions[1].label}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink-300 bg-white text-ink-800 transition-colors hover:border-plum-400 hover:text-plum-800 lg:hidden"
        >
          <Icon name="menu" className="h-5 w-5" />
        </button>
      </Container>

      {open ? (
        <div className="fixed inset-0 z-[55] lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 h-full w-full cursor-default bg-plum-900/45"
          />
          <div
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-paper shadow-pop"
          >
            <div className="flex items-center justify-between border-b border-ink-200 px-5 py-4">
              <Brand />
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink-300 bg-white text-ink-800"
              >
                <Icon name="close" className="h-5 w-5" />
              </button>
            </div>

            <nav aria-label="Site" className="flex-1 px-4 py-4">
              <ul className="space-y-0.5">
                {primaryNav.map((item) => (
                  <li key={item.to}>
                    <NavLink to={item.to} end={item.to === "/"} className={mobileLink}>
                      <span>{item.label}</span>
                      <Icon name="chevronRight" className="h-4 w-4 shrink-0 text-ink-400" />
                    </NavLink>
                    {item.description ? (
                      <p className="px-3 text-xs leading-snug text-ink-500">{item.description}</p>
                    ) : null}

                    {item.children?.length ? (
                      <ul className="ml-3 mt-1 space-y-0.5 border-l border-ink-200 pl-3">
                        {item.children.map((child) => (
                          <li key={child.to}>
                            <NavLink
                              to={child.to}
                              className="block rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:bg-plum-50"
                            >
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-ink-200 px-5 py-5">
              <div className="flex flex-col gap-2.5">
                <Button to={quickActions[0].to} variant="sun" fullWidth icon="hall" iconPosition="leading">
                  {quickActions[0].label}
                </Button>
                <Button to={quickActions[1].to} variant="primary" fullWidth>
                  {quickActions[1].label}
                </Button>
              </div>

              <dl className="mt-6 space-y-2.5 text-sm">
                <div className="flex gap-2.5">
                  <dt className="text-ink-500">
                    <Icon name="phone" className="h-4 w-4" title="Telephone" />
                  </dt>
                  <dd>
                    <a href={association.phoneHref} className="font-semibold text-ink-800">
                      {association.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-2.5">
                  <dt className="text-ink-500">
                    <Icon name="mail" className="h-4 w-4" title="Email" />
                  </dt>
                  <dd>
                    <a href={association.mailtoHref} className="break-all text-ink-800">
                      {association.email}
                    </a>
                    <a href={`mailto:${rentalsEmail}`} className="mt-1 block break-all text-xs font-medium text-plum-700">
                      Hall rentals: {rentalsEmail}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-2.5">
                  <dt className="text-ink-500">
                    <Icon name="mapPin" className="h-4 w-4" title="Address" />
                  </dt>
                  <dd className="text-ink-700">{association.addressLine}</dd>
                </div>
              </dl>

              <ul className="mt-6 flex items-center gap-2">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-300 bg-white text-ink-700 transition-colors hover:border-plum-400 hover:text-plum-800"
                    >
                      <Icon name={social.icon} className="h-4.5 w-4.5" title={social.label} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
