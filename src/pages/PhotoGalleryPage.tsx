import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { usePageMeta } from "@/hooks/usePageMeta";
import { officialPhotoAssets } from "@/content/reference";

type GalleryPhoto = { src: string; alt: string };

const sourceGalleryPhotos: GalleryPhoto[] = [
  ...officialPhotoAssets
    .filter((photo) => !photo.src.endsWith("glendale-neighbourhood-map.png") && !photo.src.endsWith("thumper-banner-april-2026.png"))
    .map(({ src, alt }) => ({ src, alt })),
  { src: "/images/community-rink-winter.jpg", alt: "Neighbours skating together at the Glendale outdoor rink" },
  { src: "/images/community-rink-evening.jpg", alt: "The Glendale rink and park in the evening" },
  { src: "/images/community-rink-summer.jpg", alt: "Neighbours playing a game at the Glendale rink" },
  { src: "/images/community-courts-summer.jpg", alt: "Glendale's outdoor recreation space in summer" },
  { src: "/images/glendale-community-garden.jpg", alt: "The Glendale Community Garden" },
  { src: "/images/glendale-tennis-courts.jpg", alt: "Tennis courts at Glendale" },
  { src: "/images/glendale-garden-sign.jpg", alt: "A sign at the Glendale community garden" },
  { src: "/images/glendale-courts-rink.jpg", alt: "The community courts and outdoor rink" },
  { src: "/images/glendale-pickleball-rink.jpg", alt: "Community members playing pickleball at Glendale" },
  { src: "/images/glendale-hall-rental-options.jpg", alt: "A view of Glendale community hall spaces" },
  { src: "/images/glendale-neighbourhood.jpg", alt: "Map showing the Glendale neighbourhood in southwest Calgary" },
  { src: "/images/glendale-community-sign.jpg", alt: "Glendale Community Association monument sign in a green park" },
  { src: "/images/glendale-playground.jpg", alt: "Playground and play structure in Glendale" },
  { src: "/images/glendale-historical-map.jpg", alt: "Historical map showing Glendale and Glendale Meadows outlined in green" },
  { src: "/images/glendale-rink-panorama.jpg", alt: "Wide summer view of the Glendale outdoor rink surrounded by trees" },
  { src: "/images/glendale-sidewalk-art.jpg", alt: "Colourful flower and butterfly chalk art along a Glendale pathway" },
];

const galleryPhotos = sourceGalleryPhotos.filter(
  (photo, index, photos) => photos.findIndex((candidate) => candidate.src === photo.src) === index,
);

export function PhotoGalleryPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [activeVisible, setActiveVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const activeIndexRef = useRef(0);

  usePageMeta({
    title: "Community photos",
    description: "Photos of Glendale neighbours, community events, recreation, and local places.",
  });

  const changeSlide = useCallback((step: number) => {
    const nextIndex = (activeIndexRef.current + step + galleryPhotos.length) % galleryPhotos.length;
    setPreviousIndex(activeIndexRef.current);
    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
    setActiveVisible(false);
    window.requestAnimationFrame(() => setActiveVisible(true));
  }, []);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => changeSlide(1), 6000);
    return () => window.clearInterval(timer);
  }, [changeSlide, paused]);

  useEffect(() => {
    if (previousIndex === null) return;
    const timer = window.setTimeout(() => setPreviousIndex(null), 1100);
    return () => window.clearTimeout(timer);
  }, [previousIndex]);

  const photo = galleryPhotos[activeIndex];

  return (
    <>
      <section
        aria-label="Glendale community photo slideshow"
        className="relative isolate flex min-h-[32rem] h-[72svh] max-h-[52rem] items-center justify-center overflow-hidden bg-ink-900 sm:min-h-[38rem]"
      >
        <h1 className="sr-only">Glendale community photos</h1>
        <div className="absolute inset-0" aria-hidden="true">
          {previousIndex !== null ? (
            <img
              src={galleryPhotos[previousIndex].src}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : null}
          <img
            key={photo.src}
            src={photo.src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${activeVisible ? "opacity-100" : "opacity-0"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/25 via-ink-900/10 to-ink-900/55" />
        </div>

        <div className="relative grid h-36 w-36 place-items-center rounded-full border border-white/70 bg-white/90 p-4 shadow-pop sm:h-44 sm:w-44">
          <img
            src="/image_95bf45.png"
            alt="Glendale / Glendale Meadows Community Association"
            className="h-full w-full object-contain mix-blend-multiply"
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 flex justify-center gap-3 pb-6 sm:pb-8">
          <button
            type="button"
            onClick={() => changeSlide(-1)}
            aria-label="Previous photo"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/50 bg-ink-900/55 text-white backdrop-blur transition hover:bg-ink-900/80"
          >
            <img src="/image_95bf45.png" alt="" className="h-5 w-5 object-contain" />
          </button>
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/50 bg-ink-900/55 text-white backdrop-blur transition hover:bg-ink-900/80"
          >
            {paused ? (
              <img src="/image_95bf45.png" alt="" className="h-5 w-5 object-contain" />
            ) : (
              <img src="/image_95bf45.png" alt="" className="h-5 w-5 object-contain" />
            )}
          </button>
          <button
            type="button"
            onClick={() => changeSlide(1)}
            aria-label="Next photo"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/50 bg-ink-900/55 text-white backdrop-blur transition hover:bg-ink-900/80"
          >
            <img src="/image_95bf45.png" alt="" className="h-5 w-5 object-contain" />
          </button>
        </div>
      </section>

      <section aria-labelledby="all-photos-title" className="bg-paper px-5 py-10 sm:px-8 sm:py-12">
        <Container className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h2 id="all-photos-title" className="font-display text-2xl font-semibold text-ink-900">
              More moments in Glendale
            </h2>
            <p className="mt-2 max-w-[50ch] text-sm leading-relaxed text-ink-600">
              Browse photos of our neighbours, community spaces, local history, and seasonal activities.
            </p>
          </div>
          <Button to="/photos/all" icon="arrowRight" className="shrink-0">
            See all photos
          </Button>
        </Container>
      </section>

      <section aria-labelledby="courts-video-title" className="bg-paper px-5 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-plum-700">Tennis & pickleball</p>
            <h2 id="courts-video-title" className="mt-2 font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
              Pickleball and tennis at Glendale
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              Watch neighbours out on the Glendale courts.
            </p>
          </div>
          <video
            controls
            playsInline
            preload="metadata"
            poster="/images/glendale-pickleball-action.jpg"
            aria-label="Video of community members playing pickleball and tennis at Glendale"
            className="w-full rounded-panel bg-ink-900 shadow-pop"
          >
            <source src="/videos/community-pickleball-tennis.mp4" type="video/mp4" />
            Your browser does not support MP4 video playback.
          </video>
          <a
            href="/videos/community-pickleball-tennis.mp4"
            download
            className="mt-4 inline-flex min-h-11 items-center font-semibold text-plum-700 underline decoration-plum-300 decoration-2 underline-offset-4 hover:decoration-plum-700"
          >
            Download the video
          </a>
        </div>
      </section>
    </>
  );
}

export function PhotoGalleryArchivePage() {
  usePageMeta({
    title: "All community photos",
    description: "Browse Glendale community, recreation, neighbourhood, and historical photos.",
  });

  return (
    <>
      <section className="bg-paper px-5 py-12 sm:px-8 sm:py-16">
        <Container>
          <Link to="/photos" className="inline-flex min-h-11 items-center font-semibold text-plum-700 underline decoration-plum-300 decoration-2 underline-offset-4 hover:decoration-plum-700">
            Back to slideshow
          </Link>
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-plum-700">Glendale community</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">All photos</h1>
          <p className="mt-3 max-w-[58ch] text-base leading-relaxed text-ink-600">
            A collection of neighbours, community spaces, recreation, and local history.
          </p>
        </Container>
      </section>

      <ul aria-label="All Glendale community photos" className="grid grid-cols-2 gap-1.5 bg-white sm:grid-cols-3 lg:grid-cols-4">
        {galleryPhotos.map((image) => (
          <li key={image.src} className="overflow-hidden bg-paper">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </li>
        ))}
      </ul>
    </>
  );
}
