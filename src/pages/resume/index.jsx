import React from "react";
import { Helmet } from "react-helmet-async";
import { meta, resumeFile } from "../../content_option";

export const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Helmet>
        <title>Resume | {meta.title}</title>
        <meta name="description" content="Resume / CV for Sulman Azhar Qureshi." />
      </Helmet>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-heading font-bold">Resume</h1>
        <div className="flex gap-3">
          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium border border-[var(--color-border)] rounded-md no-underline hover:bg-gray-50 transition-colors"
          >
            Open in new tab
          </a>
          <a
            href={resumeFile}
            download="Sulman_Qureshi_Resume.pdf"
            className="px-4 py-2 text-sm font-medium bg-[var(--color-accent)] text-white rounded-md no-underline hover:bg-[var(--color-accent-light)] transition-colors"
          >
            Download PDF
          </a>
        </div>
      </div>

      <div className="border border-[var(--color-border)] rounded-lg overflow-hidden bg-gray-50" style={{ height: "calc(100vh - 250px)", minHeight: "600px" }}>
        <object
          data={`${resumeFile}#view=FitH`}
          type="application/pdf"
          className="w-full h-full"
          aria-label="Sulman Qureshi resume"
        >
          <div className="flex items-center justify-center h-full text-center px-6">
            <div>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Your browser doesn&apos;t support inline PDFs.
              </p>
              <a
                href={resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium bg-[var(--color-accent)] text-white rounded-md no-underline"
              >
                Open resume in a new tab
              </a>
            </div>
          </div>
        </object>
      </div>
    </div>
  );
};
