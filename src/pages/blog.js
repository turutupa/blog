import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"
import "@deckdeckgo/highlight-code"

function Blog(props) {
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
                  <AniLink
                    cover
                    bg="#00c27e"
                    duration={0.5}
                    direction="right"
                    style={{ boxShadow: `none` }}
                    to={`/blog${node.fields.slug}`}
                  >
                    {title}
                  </AniLink>
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
        <AniLink cover bg="#00c27e" duration={1} direction="up" to="/">
          <Button position="flex-start">Go Home</Button>
        </AniLink>
      </Layout>
    </>
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
