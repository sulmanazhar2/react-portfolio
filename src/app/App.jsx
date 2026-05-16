import React, { useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { trackEvent } from "../firebase/firebaseConfig";

function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return children;
}

export default function App() {
  useEffect(() => {
    trackEvent("app_loaded");
  }, []);

  return (
    <Router>
      <ScrollToTop>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}
