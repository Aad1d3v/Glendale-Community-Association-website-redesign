import { useEffect } from "react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { association } from "@/content/site";
import { usePageMeta } from "@/hooks/usePageMeta";

export function NotFoundPage() {
  usePageMeta({
    title: "Page not found",
    description:
      "That page has moved or never existed. Find the community hall, programmes, and documents from here.",
  });

  /* The SPA fallback serves this page with a 200, so keep it out of the index. */
  useEffect(() => {
    const tag = document.createElement("meta");
    tag.setAttribute("name", "robots");
    tag.setAttribute("content", "noindex, follow");
    document.head.append(tag);
    return () => tag.remove();
  }, []);

  return (
    <section className="bg-paper">
      <Container className="flex min-h-[60vh] flex-col items-start justify-center py-20">
        <img src="/image_95bf45.png" alt="" className="h-12 w-auto object-contain" />
        <p className="mt-8 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-plum-600">
          404
        </p>
        <h1 className="mt-3 max-w-[24ch] font-display text-[2rem] font-semibold leading-tight text-ink-900 sm:text-[2.5rem]">
          That page is not here
        </h1>
        <p className="mt-4 max-w-[52ch] text-[1.0625rem] leading-relaxed text-ink-600">
          The link may be old, or we may have moved something when the site was rebuilt. These four
          pages cover almost everything people come looking for.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/" size="lg" icon="arrowRight">
            Back to the home page
          </Button>
          <Button to="/facilities" variant="outline" size="lg">
            Facilities &amp; rentals
          </Button>
          <Button to="/resources" variant="outline" size="lg">
            Documents &amp; newsletters
          </Button>
        </div>

        <p className="mt-10 text-sm text-ink-500">
          Still stuck? Call the hall office on{" "}
          <a
            href={association.phoneHref}
            className="font-semibold text-plum-700 underline decoration-plum-300 decoration-2 underline-offset-2"
          >
            {association.phone}
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
