import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import { getPostBySlug } from "../../blog/posts";
import { meta } from "../../content_option";
import { NotFound } from "../notfound";

const formatDate = (date) => {
  if (!date) return "";
  try {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return date;
  }
};

const mdxComponents = {
  a: (props) => (
    <a
      {...props}
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
    />
  ),
};

export const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <NotFound />;

  const { Component } = post;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Helmet>
        <title>{post.title} | {meta.title}</title>
        <meta name="description" content={post.summary || meta.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:type" content="article" />
      </Helmet>

      <Link
        to="/blog"
        className="text-sm text-[var(--color-text-secondary)] no-underline hover:text-[var(--color-text)] transition-colors mb-8 inline-block"
      >
        &larr; All posts
      </Link>

      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-heading font-bold leading-tight mb-4">
          {post.title}
        </h1>
        <div className="flex items-center flex-wrap gap-3 text-sm text-[var(--color-text-secondary)]">
          <time>{formatDate(post.date)}</time>
          <span>&middot;</span>
          <span>{post.readingTime}</span>
          {post.tags && post.tags.length > 0 && (
            <>
              <span>&middot;</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[var(--color-bg-muted)] px-2 py-0.5 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </>
          )}
        </div>
      </header>

      <article className="prose-article">
        <MDXProvider components={mdxComponents}>
          <Component />
        </MDXProvider>
      </article>
    </div>
  );
};
