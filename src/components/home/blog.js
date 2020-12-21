import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

import { rhythm } from "../../utils/typography"
import "@deckdeckgo/highlight-code"

const Container = styled.div`
  margin: 50px 0 40px;
`

const PostContainer = styled.div`
  padding: 1px 20px;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 3px 6px rgb(30, 30, 30, 0);

  &:hover {
    box-shadow: 0px 3px 6px rgb(30, 30, 30, 0.2);
  }
`

const H1 = styled.h1`
  font-size: ${rhythm(0.8)};
  margin-bottom: ${rhythm(1 / 5)};
  margin-top: 30px;
`

function Blog(props) {
  const { data } = props
  const posts = data.allMdx.edges

  return (
    <Container>
      <>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Link
              style={{ boxShadow: `none` }}
              to={`/blog${node.fields.slug}`}
              key={node.fields.slug}
            >
              <PostContainer className="blog-description-container">
                <H1>{title}</H1>
                <small className="blog-date">{node.frontmatter.date}</small>
                <p
                  className="blog-description"
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </PostContainer>
            </Link>
          )
        })}
      </>
    </Container>
  )
}

export default Blog
