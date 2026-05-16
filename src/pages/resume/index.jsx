import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, resumeFile } from "../../content_option";
import "./style.css";

export const Resume = () => {
  return (
    <Container className="About-header">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Resume | {meta.title}</title>
        <meta
          name="description"
          content="Resume / CV for Sulman Azhar Qureshi — Senior Software Engineer."
        />
      </Helmet>

      <Row className="mb-4 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Resume</h1>
          <hr className="t_border my-4 ml-0 text-left" />
          <p className="resume-intro">
            A PDF version of my CV. You can{" "}
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
            >
              open it in a new tab
            </a>{" "}
            or{" "}
            <a
              href={resumeFile}
              download="Sulman_Qureshi_Resume.pdf"
              className="resume-link"
            >
              download it
            </a>
            .
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col lg="12">
          <div className="resume-frame">
            <object
              data={`${resumeFile}#view=FitH`}
              type="application/pdf"
              className="resume-pdf"
              aria-label="Sulman Qureshi resume PDF"
            >
              <p>
                Your browser can&apos;t display the PDF inline.{" "}
                <a
                  href={resumeFile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open the resume in a new tab
                </a>{" "}
                instead.
              </p>
            </object>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
