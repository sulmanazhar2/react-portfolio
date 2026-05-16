import React from "react";
import "./style.css";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { posts } from "../../blog/posts";
import { meta } from "../../content_option";

const formatDate = (date) => {
  if (!date) return "";
  try {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return date;
  }
};

export const Blog = () => {
  return (
    <Container className="About-header">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog | {meta.title}</title>
        <meta
          name="description"
          content="Writing on software engineering, AI tooling, and the things I'm working on."
        />
      </Helmet>

      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Blog</h1>
          <hr className="t_border my-4 ml-0 text-left" />
          <p className="blog-intro">
            Occasional notes on software engineering, AI tooling, and whatever
            else is on my mind.
          </p>
        </Col>
      </Row>

      {posts.length === 0 ? (
        <Row className="mb-5">
          <Col lg="8">
            <p className="blog-empty">Nothing here yet. Check back soon.</p>
          </Col>
        </Row>
      ) : (
        <div className="post-list">
          {posts.map((post) => (
            <article key={post.slug} className="post-card">
              <Link to={`/blog/${post.slug}`} className="post-card-link">
                <header className="post-card-header">
                  <time className="post-card-date">
                    {formatDate(post.date)}
                  </time>
                  <h2 className="post-card-title">{post.title}</h2>
                </header>
                {post.summary && (
                  <p className="post-card-summary">{post.summary}</p>
                )}
                <div className="post-card-footer">
                  {post.tags && post.tags.length > 0 && (
                    <ul className="post-card-tags">
                      {post.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  )}
                  <span className="post-card-reading">{post.readingTime}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </Container>
  );
};
