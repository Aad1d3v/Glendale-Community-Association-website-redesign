import { useEffect } from "react";

import { association } from "@/content/site";

const setMeta = (attribute: "name" | "property", key: string, value: string): void => {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.append(tag);
  }
  tag.setAttribute("content", value);
};

/**
 * Every route sets its own title and description. Without this, a
 * client-rendered site shows the same title on every page, which is the single
 * most common SEO defect in a redesigned SPA.
 */
export function usePageMeta({ title, description }: { title: string; description: string }): void {
  useEffect(() => {
    const fullTitle =
      title === association.name ? title : `${title} | ${association.shortName}`;

    document.title = fullTitle;
    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
  }, [title, description]);
}
