import React from "react";
import "./style.css";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { highlights, meta } from "../../content_option";

export const Work = () => {
  return (
    <Container className="About-header">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Work | {meta.title}</title>
        <meta
          name="description"
          content="Selected work and project highlights — engineering, architecture, and AI tooling."
        />
      </Helmet>

      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Selected work</h1>
          <hr className="t_border my-4 ml-0 text-left" />
          <p className="work-intro">
            A few representative projects and initiatives — focused on
            engineering impact rather than visual screenshots. Most of the
            production work I do is on internal systems that I can't fully share,
            so these are summaries rather than live links.
          </p>
        </Col>
      </Row>

      <div className="highlights-list">
        {highlights.map((item, i) => (
          <article key={i} className="highlight-card">
            <header className="highlight-header">
              <h2 className="highlight-title">{item.title}</h2>
              <div className="highlight-meta">
                <span className="highlight-company">{item.company}</span>
                <span className="highlight-period">{item.period}</span>
              </div>
            </header>
            <p className="highlight-summary">{item.summary}</p>
            {item.stack && item.stack.length > 0 && (
              <ul className="highlight-stack">
                {item.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            )}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
              >
                View project →
              </a>
            )}
          </article>
        ))}
      </div>
    </Container>
  );
};
