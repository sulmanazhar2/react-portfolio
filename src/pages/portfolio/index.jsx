import React from "react";
import "./style.css";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <Container className="About-header">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio | {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Portfolio</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <div className="mb-5 po_items_ho">
        {dataportfolio.map((data, i) => {
          const card = (
            <>
              <img
                src={data.img}
                alt={data.title || data.description}
                loading="lazy"
              />
              <div className="content">
                {data.title && <h3>{data.title}</h3>}
                <p>{data.description}</p>
                {data.link && <span className="view-link">View project</span>}
              </div>
            </>
          );

          return data.link ? (
            <a
              key={i}
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="po_item"
              aria-label={`View ${data.title || "project"}`}
            >
              {card}
            </a>
          ) : (
            <div key={i} className="po_item">
              {card}
            </div>
          );
        })}
      </div>
    </Container>
  );
};
