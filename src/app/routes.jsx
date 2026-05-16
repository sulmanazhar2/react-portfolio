import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Work } from "../pages/work";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Blog } from "../pages/blog";
import { BlogPost } from "../pages/blog/post";
import { Resume } from "../pages/resume";
import { NotFound } from "../pages/notfound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/portfolio" element={<Work />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
