import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { meta } from "../../content_option";

export const NotFound = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32 text-center">
      <Helmet>
        <title>404 | {meta.title}</title>
        <meta name="description" content="Page not found." />
      </Helmet>
      <h1 className="text-6xl font-heading font-bold text-[var(--color-accent)] mb-4">
        404
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">
        This page doesn&apos;t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-5 py-2.5 text-sm font-medium bg-[var(--color-accent)] text-white rounded-md no-underline hover:bg-[var(--color-accent-light)] transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
};
