import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { posts } from "../../blog/posts";
import { meta } from "../../content_option";

const formatDate = (date) => {
  if (!date) return "";
  try {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return date;
  }
};

export const Blog = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Helmet>
        <title>Blog | {meta.title}</title>
        <meta
          name="description"
          content="Writing on software engineering, AI tooling, and what I'm working on."
        />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
        Blog
      </h1>
      <p className="text-[var(--color-text-secondary)] leading-relaxed mb-12">
        Occasional notes on software engineering, AI tooling, and whatever
        else is on my mind.
      </p>

      {posts.length === 0 ? (
        <p className="text-[var(--color-text-secondary)] italic">
          Nothing here yet. Check back soon.
        </p>
      ) : (
        <div className="space-y-1">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block group -mx-4 px-4 py-5 rounded-lg no-underline hover:bg-[var(--color-bg-subtle)] transition-colors"
            >
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <h2 className="text-lg font-heading font-semibold group-hover:text-[var(--color-accent)] transition-colors">
                  {post.title}
                </h2>
                <time className="text-xs text-[var(--color-text-secondary)] shrink-0">
                  {formatDate(post.date)}
                </time>
              </div>
              {post.summary && (
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {post.summary}
                </p>
              )}
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2 mt-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[var(--color-text-secondary)] bg-[var(--color-bg-muted)] px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
