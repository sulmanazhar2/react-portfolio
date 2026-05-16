import React from "react";
import { Helmet } from "react-helmet-async";
import { highlights, meta } from "../../content_option";

export const Work = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Helmet>
        <title>Work | {meta.title}</title>
        <meta
          name="description"
          content="Selected work and project highlights from Sulman Azhar Qureshi."
        />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
        Selected work
      </h1>
      <p className="text-[var(--color-text-secondary)] leading-relaxed mb-12 max-w-2xl">
        A few representative projects and initiatives. Most production work
        involves internal systems, so these are summaries focused on
        engineering impact rather than live links.
      </p>

      <div className="space-y-6">
        {highlights.map((item, i) => (
          <article
            key={i}
            className="border border-[var(--color-border)] rounded-lg p-6 hover:border-[var(--color-accent)]/40 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
              <h2 className="text-lg font-heading font-semibold">
                {item.title}
              </h2>
              <span className="text-xs text-[var(--color-text-secondary)] shrink-0">
                {item.period}
              </span>
            </div>
            <p className="text-sm text-[var(--color-accent)] font-medium mb-2">
              {item.company}
            </p>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
              {item.summary}
            </p>
            {item.stack && (
              <div className="flex flex-wrap gap-1.5">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs border border-[var(--color-border)] rounded text-[var(--color-text-secondary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-[var(--color-accent)] no-underline hover:underline"
              >
                View project &rarr;
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};
