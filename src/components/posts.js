import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const PostContainer = styled.div`
  transition: all 0.1s ease-in;

  padding: 1px 20px 20px 20px;
  border-radius: 10px;
  box-shadow: 0px 3px 6px rgb(30, 30, 30, 0);

  &:hover {
    box-shadow: 0px 3px 6px rgb(30, 30, 30, 0.2);
  }
`

const H1 = styled.h1`
  font-size: ${rhythm(0.8)};
  margin-bottom: ${rhythm(1 / 5)};
  margin-top: 25px;
`

const P = styled.p`
  font-size: ${rhythm(0.5)};
  margin-bottom: 0px;
`

const Tag = styled.small`
  border-radius: 15px;
  box-shadow: ;
`

export default function Posts(posts) {
  return posts.map(({ node }) => {
    const title = node.frontmatter.title || node.fields.slug
    const { tags } = node.frontmatter

    return (
      <Link
        style={{ boxShadow: `none` }}
        to={`/blog${node.fields.slug}`}
        key={node.fields.slug}
      >
        <PostContainer
          className="blog-description-container"
          id={node.fields.slug}
        >
          <H1>{title}</H1>
          <small className="blog-date">
            {node.frontmatter.date} · {node.timeToRead} min read
          </small>

          <P
            className="blog-description"
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          />
          <P>
            {tags.map(tag => (
              <Tag
                key={title + tag}
                style={{
                  marginRight: "10px",
                  fontSize: rhythm(0.45),
                }}
              >
                <strong>#{tag}</strong>
              </Tag>
            ))}
          </P>
        </PostContainer>
      </Link>
    )
  })
}
