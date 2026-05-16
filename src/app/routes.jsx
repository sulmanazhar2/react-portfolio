import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Work } from "../pages/work";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Blog } from "../pages/blog";
import { BlogPost } from "../pages/blog/post";
import { NotFound } from "../pages/notfound";

// Lazy-load Resume page (includes react-pdf + pdfjs-dist which is ~400KB)
const ResumeLazy = lazy(() =>
  import("../pages/resume").then((mod) => ({ default: mod.Resume }))
);

function ResumeRoute() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center py-32">
          <p className="text-sm text-[var(--color-text-secondary)]">
            Loading resume...
          </p>
        </div>
      }
    >
      <ResumeLazy />
    </Suspense>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/portfolio" element={<Work />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/resume" element={<ResumeRoute />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
