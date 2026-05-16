import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../pages/home";
import { Work } from "../pages/work";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Blog } from "../pages/blog";
import { BlogPost } from "../pages/blog/post";
import { Resume } from "../pages/resume";
import { NotFound } from "../pages/notfound";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function AnimatedRoutes() {
  const location = useLocation();
  const nodeRef = React.useRef(null);

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        nodeRef={nodeRef}
        timeout={{ enter: 400, exit: 400 }}
        classNames="page"
        unmountOnExit
      >
        <div ref={nodeRef}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            {/* Backwards-compat redirect-ish: keep old /portfolio link working */}
            <Route path="/portfolio" element={<Work />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
