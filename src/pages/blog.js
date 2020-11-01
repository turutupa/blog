import React from "react"
import { Link, graphql } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Img from "gatsby-image"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"
import "@deckdeckgo/highlight-code"
import FadeIn from "react-fade-in"

function Blog(props) {
  // const breakpoints = useBreakpoint()
  const { data } = props
  const siteTitle = data.site?.siteMetadata?.title
  const posts = data.allMdx.edges

  return (
    <>
      <Layout location={props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <div style={{ margin: "20px 0 40px" }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h1
                  style={{
                    fontSize: rhythm(1),
                    marginBottom: rhythm(1 / 5),
                  }}
                >
                  <Link
                    style={{ boxShadow: `none` }}
                    to={`/blog${node.fields.slug}`}
                  >
                    {title}
                  </Link>
                </h1>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            )
          })}
        </div>
        <Link to="/">
          <Button position="flex-start">Go Home</Button>
        </Link>
      </Layout>
      {/* </Container> */}
    </>
  )
}

export default Blog

// file(relativePath: { eq: "blog-background.jpeg" }) {
//   childImageSharp {
//     fluid {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
