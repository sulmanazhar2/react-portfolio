import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import "./style.css";

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 - Page Not Found | {meta.title}</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Container className="notfound-container">
        <Row className="justify-content-center">
          <Col lg="8" className="text-center">
            <h1 className="display-1 mb-4">404</h1>
            <h2 className="mb-4">Page not found</h2>
            <p className="mb-5">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
            <Link to="/" className="ac_btn btn">
              Back to home
              <div className="ring one"></div>
              <div className="ring two"></div>
              <div className="ring three"></div>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};
