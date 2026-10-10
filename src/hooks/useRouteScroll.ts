import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** How long to keep looking for a hash target while a route chunk loads. */
const SEEK_WINDOW_MS = 3000;
const POLL_MS = 100;

/**
 * Client-side routing keeps the scroll position by default, so a new page opens
 * halfway down. A path change jumps to the top; a hash jump lands on the anchor.
 *
 * The page for a route is a lazy chunk, so on a first visit the anchor does not
 * exist yet when this effect runs. A MutationObserver notices the chunk landing
 * and jumps then, with a polling safety net for the case where nothing mutates.
 * Deliberately not built on requestAnimationFrame: that only fires while the
 * page is being painted, so it goes silent in a background tab or an
 * un-composited view — exactly when an anchor would silently never resolve.
 */
export function useRouteScroll(): void {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    let cancelled = false;
    let settled = false;
    let observer: MutationObserver | null = null;
    let timer = 0;

    const stop = (): void => {
      settled = true;
      observer?.disconnect();
      if (timer !== 0) window.clearInterval(timer);
    };

    /** Returns true once the target has been found and jumped to. */
    const seek = (): boolean => {
      if (cancelled || settled) return true;

      const target = document.getElementById(id);
      if (!target) return false;

      /* "instant" rather than the smooth behaviour set on html: a deep link
         should land on the section, not glide three thousand pixels to it. */
      target.scrollIntoView({ block: "start", behavior: "instant" });
      stop();
      return true;
    };

    /* If the chunk is already loaded — a second visit to this route — this
       resolves immediately and nothing else is registered. */
    if (seek()) {
      return () => {
        cancelled = true;
      };
    }

    observer = new MutationObserver(() => {
      seek();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    const deadline = Date.now() + SEEK_WINDOW_MS;
    timer = window.setInterval(() => {
      if (seek() || Date.now() > deadline) stop();
    }, POLL_MS);

    return () => {
      cancelled = true;
      stop();
    };
  }, [pathname, hash]);
}
