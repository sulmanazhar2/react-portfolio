import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { meta, resumeFile } from "../../content_option";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

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

  const pageWidth = containerWidth ? Math.min(containerWidth - 2, 800) : 800;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50/60 to-slate-100">
      <Helmet>
        <title>Resume | {meta.title}</title>
        <meta
          name="description"
          content="Resume / CV for Sulman Azhar Qureshi — Senior Software Engineer."
        />
      </Helmet>

      <div
        ref={containerRef}
        className="max-w-4xl mx-auto px-6 py-12 flex flex-col items-center"
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
                className="mb-8 shadow-xl rounded-lg overflow-hidden bg-white ring-1 ring-black/5"
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

        {numPages && (
          <a
            href={resumeFile}
            download="Sulman_Qureshi_Resume.pdf"
            className="inline-flex items-center gap-2 mt-2 mb-4 px-5 py-2.5 text-sm font-medium bg-[var(--color-accent)] text-white rounded-md no-underline hover:bg-[var(--color-accent-light)] transition-colors shadow-md"
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
        )}
      </div>
    </div>
  );
};
