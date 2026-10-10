import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { SkipLink } from "@/components/layout/SkipLink";
import { useRouteScroll } from "@/hooks/useRouteScroll";

/* One chunk per route. The hall booking form and the document archive are the
   two heaviest things on the site and neither belongs in the first payload. */
const HomePage = lazy(() => import("@/pages/HomePage").then((m) => ({ default: m.HomePage })));
const FacilitiesPage = lazy(() =>
  import("@/pages/FacilitiesPage").then((m) => ({ default: m.FacilitiesPage })),
);
const MembershipPage = lazy(() =>
  import("@/pages/MembershipPage").then((m) => ({ default: m.MembershipPage })),
);
const ChildcarePage = lazy(() =>
  import("@/pages/ChildcarePage").then((m) => ({ default: m.ChildcarePage })),
);
const CommunityPage = lazy(() =>
  import("@/pages/CommunityPage").then((m) => ({ default: m.CommunityPage })),
);
const AboutPage = lazy(() => import("@/pages/AboutPage").then((m) => ({ default: m.AboutPage })));
const ResourcesPage = lazy(() =>
  import("@/pages/ResourcesPage").then((m) => ({ default: m.ResourcesPage })),
);
const ContactPage = lazy(() =>
  import("@/pages/ContactPage").then((m) => ({ default: m.ContactPage })),
);
const CommunityLinksPage = lazy(() =>
  import("@/pages/CommunityLinksPage").then((m) => ({ default: m.CommunityLinksPage })),
);
const PhotoGalleryPage = lazy(() =>
  import("@/pages/PhotoGalleryPage").then((m) => ({ default: m.PhotoGalleryPage })),
);
const PhotoGalleryArchivePage = lazy(() =>
  import("@/pages/PhotoGalleryPage").then((m) => ({ default: m.PhotoGalleryArchivePage })),
);
const NotFoundPage = lazy(() =>
  import("@/pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })),
);

function RouteBody() {
  useRouteScroll();

  return (
    <Suspense fallback={<div className="min-h-[70vh] bg-paper" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/childcare" element={<ChildcarePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/community-links" element={<CommunityLinksPage />} />
        <Route path="/photos" element={<PhotoGalleryPage />} />
        <Route path="/photos/all" element={<PhotoGalleryArchivePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-dvh flex-col">
        <SkipLink />
        <Header />
        <main id="main" className="flex-1">
          <RouteBody />
        </main>
        <Footer />
        <MobileActionBar />
      </div>
    </BrowserRouter>
  );
}
