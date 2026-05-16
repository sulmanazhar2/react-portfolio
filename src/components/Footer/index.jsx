import React from "react";
import { socialprofils, logotext } from "../../content_option";

const SocialLink = ({ href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors no-underline"
    aria-label={label}
  >
    {label}
  </a>
);

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-20">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--color-text-secondary)]">
          &copy; {new Date().getFullYear()} {logotext}. All rights reserved.
        </p>
        <div className="flex gap-5 text-sm">
          {socialprofils.github && (
            <SocialLink href={socialprofils.github} label="GitHub" />
          )}
          {socialprofils.linkedin && (
            <SocialLink href={socialprofils.linkedin} label="LinkedIn" />
          )}
          {socialprofils.stackoverflow && (
            <SocialLink href={socialprofils.stackoverflow} label="Stack Overflow" />
          )}
        </div>
      </div>
    </footer>
  );
}
