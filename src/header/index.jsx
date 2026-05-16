import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/blog", label: "Blog" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

const Headermain = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.classList.toggle("ovhidden");
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.classList.remove("ovhidden");
    }
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/" onClick={closeMenu}>
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
            <Themetoggle />
            <button
              className="menu__button nav_ac"
              onClick={handleToggle}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="site-navigation"
              type="button"
            >
              {isMenuOpen ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <nav
          id="site-navigation"
          className={`site__navigation ${isMenuOpen ? "menu__opend" : ""}`}
          aria-hidden={!isMenuOpen}
        >
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  {navItems.map((item) => (
                    <li key={item.to} className="menu_item">
                      <Link
                        onClick={handleToggle}
                        to={item.to}
                        className="my-3"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex gap-3">
              {socialprofils.github && (
                <a
                  href={socialprofils.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {socialprofils.linkedin && (
                <a
                  href={socialprofils.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              )}
              {socialprofils.stackoverflow && (
                <a
                  href={socialprofils.stackoverflow}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stack Overflow
                </a>
              )}
            </div>
            <p className="copyright m-0">
              &copy; {new Date().getFullYear()} {logotext}
            </p>
          </div>
        </nav>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
