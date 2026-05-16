import React from "react";
import "./style.css";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import { getPostBySlug } from "../../blog/posts";
import { meta } from "../../content_option";
import { NotFound } from "../notfound";

const formatDate = (date) => {
  if (!date) return "";
  try {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return date;
  }
};

const mdxComponents = {
  a: (props) => (
    <a
      {...props}
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
    />
  ),
};

export const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <NotFound />;
  }

  const { Component } = post;

  return (
    <Container className="About-header post-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {post.title} | {meta.title}
        </title>
        <meta name="description" content={post.summary || meta.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:type" content="article" />
      </Helmet>

      <Row className="mb-4 mt-3 pt-md-3">
        <Col lg="9">
          <Link to="/blog" className="post-back">
            ← All posts
          </Link>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <time>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readingTime}</span>
            {post.tags && post.tags.length > 0 && (
              <>
                <span>·</span>
                <ul className="post-meta-tags">
                  {post.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>

      <Row className="mb-5">
        <Col lg="9">
          <article className="post-content">
            <MDXProvider components={mdxComponents}>
              <Component />
            </MDXProvider>
          </article>
        </Col>
      </Row>
    </Container>
  );
};
