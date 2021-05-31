import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Posts from "../components/posts"
import Tags from "../components/tags"
import Layout from "../components/layout"
import FadeIn from "react-fade-in"

import "@deckdeckgo/highlight-code"

const Container = styled.div`
  margin: 50px 0;
`

function Blog(props) {
  const { data } = props

  const [tagSelected, setTagSelected] = React.useState("All")

  const posts = data.allMdx?.edges
    .filter(post => !post.node.frontmatter.draft)
    .filter(post => post.node.frontmatter.tags)
  const selectedPosts = posts.filter(post => {
    if (tagSelected === "All") return true
    return post.node.frontmatter.tags.includes(tagSelected)
  })

  return (
    <Layout>
      <FadeIn>
        <Container>
          <Tags
            posts={posts}
            tagSelected={tagSelected}
            setTagSelected={setTagSelected}
          />
          <>{Posts(selectedPosts)}</>
        </Container>
      </FadeIn>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            draft
          }
        }
      }
    }
  }
`
