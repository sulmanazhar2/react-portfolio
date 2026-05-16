import React from "react";
import "./style.css";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  courses,
  recommendations,
} from "../../content_option";

const BioParagraphs = () => {
  const lines = dataabout.aboutme.split("\n").filter((l) => l.trim());
  return (
    <>
      {lines.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </>
  );
};

export const About = () => {
  return (
    <Container className="About-header">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">About me</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>

      <Row className="sec_sp">
        <Col lg="5">
          <h3 className="color_sec py-4">{dataabout.title}</h3>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <div className="about-bio">
            <BioParagraphs />
          </div>
        </Col>
      </Row>

      <Row className="sec_sp">
        <Col lg="5">
          <h3 className="color_sec py-4">Experience</h3>
        </Col>
        <Col lg="7">
          <ol className="timeline">
            {worktimeline.map((role, i) => (
              <li key={i} className="timeline-item">
                <div className="timeline-header">
                  <h4 className="timeline-title">
                    {role.jobtitle}
                    {role.where && (
                      <span className="timeline-where">
                        {" — "}
                        {role.link ? (
                          <a
                            href={role.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {role.where}
                          </a>
                        ) : (
                          role.where
                        )}
                      </span>
                    )}
                  </h4>
                  <div className="timeline-meta">
                    <span>{role.date}</span>
                    {role.location && <span>{role.location}</span>}
                  </div>
                </div>
                {role.highlights && role.highlights.length > 0 && (
                  <ul className="timeline-highlights">
                    {role.highlights.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </Col>
      </Row>

      <Row className="sec_sp">
        <Col lg="5">
          <h3 className="color_sec py-4">Skills</h3>
        </Col>
        <Col lg="7">
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h4 className="skill-category-title">{category}</h4>
                <ul className="skill-tags">
                  {items.map((item) => (
                    <li key={item} className="skill-tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Col>
      </Row>

      {recommendations && recommendations.length > 0 && (
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Recommendations</h3>
          </Col>
          <Col lg="7">
            {recommendations.map((rec, i) => (
              <figure key={i} className="recommendation">
                <blockquote>
                  <p>{rec.quote}</p>
                </blockquote>
                <figcaption>
                  <strong>{rec.name}</strong>
                  <span>{rec.title}</span>
                  {rec.relationship && (
                    <span className="recommendation-meta">
                      {rec.relationship}
                    </span>
                  )}
                </figcaption>
              </figure>
            ))}
          </Col>
        </Row>
      )}

      <Row className="sec_sp">
        <Col lg="5">
          <h3 className="color_sec py-4">Courses</h3>
        </Col>
        <Col lg="7">
          {courses.map((data, i) => {
            const { title, description, link } = data;
            return (
              <div className="service_ py-3" key={i}>
                <h5 className="service__title">
                  {title && link ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {title}
                    </a>
                  ) : (
                    title
                  )}
                </h5>
                <p className="service_desc">{description}</p>
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};
