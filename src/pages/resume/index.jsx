import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { meta, resumeFile } from "../../content_option";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [containerWidth, setContainerWidth] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // Scale the PDF to fit the container, with a max width for readability
  const pageWidth = containerWidth
    ? Math.min(containerWidth - 2, 800)
    : 800;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--color-bg-subtle)] to-[var(--color-bg)]">
      <Helmet>
        <title>Resume | {meta.title}</title>
        <meta
          name="description"
          content="Resume / CV for Sulman Azhar Qureshi — Senior Software Engineer."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto px-6 pt-12 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-heading font-bold">
            Resume
          </h1>
          <a
            href={resumeFile}
            download="Sulman_Qureshi_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-[var(--color-accent)] text-white rounded-md no-underline hover:bg-[var(--color-accent-light)] transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download PDF
          </a>
        </div>
      </div>

      <div
        ref={containerRef}
        className="max-w-4xl mx-auto px-6 pb-16 flex flex-col items-center"
      >
        <Document
          file={resumeFile}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center py-32">
              <div className="text-[var(--color-text-secondary)] text-sm">
                Loading resume...
              </div>
            </div>
          }
          error={
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <p className="text-[var(--color-text-secondary)] mb-4">
                Could not load the resume.
              </p>
              <a
                href={resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium bg-[var(--color-accent)] text-white rounded-md no-underline"
              >
                Open PDF directly
              </a>
            </div>
          }
        >
          {numPages &&
            Array.from(new Array(numPages), (_, index) => (
              <div
                key={`page_${index + 1}`}
                className="mb-6 shadow-lg rounded-lg overflow-hidden bg-white"
              >
                <Page
                  pageNumber={index + 1}
                  width={pageWidth}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                />
              </div>
            ))}
        </Document>
      </div>
    </div>
  );
};
