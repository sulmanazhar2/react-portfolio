import React from "react";
import { Helmet } from "react-helmet-async";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  courses,
  recommendations,
} from "../../content_option";

export const About = () => {
  const bioLines = dataabout.aboutme.split("\n").filter((l) => l.trim());

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Helmet>
        <title>About | {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-heading font-bold mb-10">
        About me
      </h1>

      {/* Bio */}
      <section className="mb-16">
        <div className="prose-custom">
          {bioLines.map((line, i) => (
            <p
              key={i}
              className="text-[var(--color-text-secondary)] leading-relaxed mb-4"
            >
              {line}
            </p>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-16">
        <h2 className="text-2xl font-heading font-bold mb-8">Experience</h2>
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

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-2xl font-heading font-bold mb-8">Skills</h2>
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
                    className="px-3 py-1.5 text-sm border border-[var(--color-border)] rounded-md text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      {recommendations && recommendations.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-heading font-bold mb-8">
            Recommendations
          </h2>
          <div className="space-y-6">
            {recommendations.map((rec, i) => (
              <figure
                key={i}
                className="border-l-3 border-[var(--color-accent)] pl-6 py-2"
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

      {/* Courses */}
      <section>
        <h2 className="text-2xl font-heading font-bold mb-8">
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
    </div>
  );
};
