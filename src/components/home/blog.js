import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

import Tags from "./tags"
import { rhythm } from "../../utils/typography"
import "@deckdeckgo/highlight-code"

const Container = styled.div`
  margin: 50px 0 40px;
  width: 100vw;
  max-width: 100% !important;
`

const PostContainer = styled.div`
  padding: 1px 20px 20px 20px;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 3px 6px rgb(30, 30, 30, 0);

  &:hover {
    box-shadow: 0px 3px 6px rgb(30, 30, 30, 0.2);
  }
`

const H1 = styled.h1`
  font-size: ${rhythm(0.7)};
  margin-bottom: ${rhythm(1 / 5)};
  margin-top: 25px;
`

const P = styled.p`
  font-size: ${rhythm(0.5)};
  margin-bottom: 0px;
`

function Blog(props) {
  const { data } = props
  const [tagSelected, setTagSelected] = React.useState("All")

  const posts = data.allMdx.edges
  const selectedPosts = data.allMdx.edges.filter(post => {
    if (tagSelected === "All") return true
    return post.node.frontmatter.tags.includes(tagSelected)
  })

  return (
    <Container>
      <Tags
        posts={posts}
        tagSelected={tagSelected}
        setTagSelected={setTagSelected}
      />
      <>
        {selectedPosts.map(({ node }) => {
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
                <P
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
