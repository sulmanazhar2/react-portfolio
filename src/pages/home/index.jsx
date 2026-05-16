import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { introdata, meta, socialprofils } from "../../content_option";

export const Home = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 md:py-32">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Photo */}
        <div className="shrink-0">
          <img
            src={introdata.your_img}
            alt={`Portrait of ${introdata.title}`}
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-[var(--color-border)] shadow-sm"
            loading="eager"
          />
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-3">
            {introdata.title}
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-accent)] font-medium mb-4">
            {introdata.tagline}
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-xl mb-8">
            {introdata.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
            <Link
              to="/work"
              className="px-5 py-2.5 text-sm font-medium bg-[var(--color-accent)] text-white rounded-md no-underline hover:bg-[var(--color-accent-light)] transition-colors"
            >
              View my work
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2.5 text-sm font-medium border border-[var(--color-border)] text-[var(--color-text)] rounded-md no-underline hover:bg-gray-50 transition-colors"
            >
              Get in touch
            </Link>
          </div>

          {/* Social links */}
          <div className="flex gap-4 justify-center md:justify-start text-sm text-[var(--color-text-secondary)]">
            {socialprofils.github && (
              <a
                href={socialprofils.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-text)] transition-colors no-underline"
                aria-label="GitHub"
              >
                GitHub
              </a>
            )}
            {socialprofils.linkedin && (
              <a
                href={socialprofils.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-text)] transition-colors no-underline"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            )}
            {socialprofils.stackoverflow && (
              <a
                href={socialprofils.stackoverflow}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-text)] transition-colors no-underline"
                aria-label="Stack Overflow"
              >
                Stack Overflow
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
