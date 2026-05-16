import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  introdata,
  meta,
  socialprofils,
  worktimeline,
  skills,
  recommendations,
  courses,
} from "../../content_option";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      {/* ─── Hero ─── */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          <div className="shrink-0">
            <img
              src={introdata.your_img}
              alt={`Portrait of ${introdata.title}`}
              className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-[var(--color-border)] shadow-sm"
              style={{ objectPosition: "center 20%" }}
              loading="eager"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-2">
              {introdata.title}
            </h1>
            <p className="text-lg text-[var(--color-accent)] font-medium mb-4">
              {introdata.tagline}
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-xl mb-6">
              {introdata.shortBio}
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
              <Link
                to="/work"
                className="px-5 py-2.5 text-sm font-medium bg-[var(--color-accent)] text-white rounded-md no-underline hover:bg-[var(--color-accent-light)] transition-colors"
              >
                View my work
              </Link>
              <Link
                to="/contact"
                className="px-5 py-2.5 text-sm font-medium border border-[var(--color-border)] text-[var(--color-text)] rounded-md no-underline hover:bg-[var(--color-bg-subtle)] transition-colors"
              >
                Get in touch
              </Link>
            </div>
            <div className="flex gap-5 justify-center md:justify-start text-sm text-[var(--color-text-secondary)]">
              {socialprofils.github && (
                <a
                  href={socialprofils.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-text)] transition-colors no-underline"
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
                >
                  Stack Overflow
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <hr className="border-[var(--color-border)] max-w-5xl mx-auto" />

      {/* ─── Experience ─── */}
      <section id="experience" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-10">
          Experience
        </h2>
        <div className="space-y-8">
          {worktimeline.map((role, i) => (
            <div
              key={i}
              className="relative pl-6 border-l-2 border-[var(--color-border)]"
            >
              <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[var(--color-accent)]" />
              <h3 className="text-lg font-semibold font-heading leading-snug">
                {role.jobtitle}
                {role.where && (
                  <span className="text-[var(--color-text-secondary)] font-normal">
                    {" at "}
                    {role.link ? (
                      <a
                        href={role.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-[var(--color-accent)]/30 underline-offset-2 hover:decoration-[var(--color-accent)]"
                      >
                        {role.where}
                      </a>
                    ) : (
                      role.where
                    )}
                  </span>
                )}
              </h3>
              <div className="flex flex-wrap gap-3 text-sm text-[var(--color-text-secondary)] mt-1 mb-2">
                <span>{role.date}</span>
                {role.location && (
                  <>
                    <span>&middot;</span>
                    <span>{role.location}</span>
                  </>
                )}
              </div>
              {role.highlights && (
                <ul className="mt-3 space-y-1.5">
                  {role.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="text-sm text-[var(--color-text-secondary)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-border)]"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <hr className="border-[var(--color-border)] max-w-5xl mx-auto" />

      {/* ─── Skills ─── */}
      <section id="skills" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-10">
          Skills
        </h2>
        <div className="space-y-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xs font-medium uppercase tracking-wider text-[var(--color-text-secondary)] mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm border border-[var(--color-border)] rounded-md text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-[var(--color-border)] max-w-5xl mx-auto" />

      {/* ─── Recommendations ─── */}
      {recommendations && recommendations.length > 0 && (
        <section id="recommendations" className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-10">
            What people say
          </h2>
          <div className="space-y-8">
            {recommendations.map((rec, i) => (
              <figure
                key={i}
                className="border-l-[3px] border-[var(--color-accent)] pl-6 py-1"
              >
                <blockquote>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed italic">
                    &ldquo;{rec.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-3">
                  <p className="text-sm font-semibold">{rec.name}</p>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    {rec.title}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <hr className="border-[var(--color-border)] max-w-5xl mx-auto" />

      {/* ─── Certifications ─── */}
      <section id="certifications" className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">
          Certifications
        </h2>
        <div className="grid gap-3">
          {courses.map((c, i) => (
            <div key={i} className="flex items-baseline gap-3">
              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium underline decoration-[var(--color-accent)]/30 underline-offset-2 hover:decoration-[var(--color-accent)] transition-colors"
              >
                {c.title}
              </a>
              <span className="text-xs text-[var(--color-text-secondary)]">
                {c.description}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
