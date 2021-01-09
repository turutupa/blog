import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data?.site?.siteMetadata?.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        {/* Related posts */}
        {post.frontmatter.related_posts &&
          post.frontmatter.related_posts.length > 0 && (
            <>
              <p style={{ marginBottom: 0, marginTop: "40px" }}>
                Related posts:
              </p>
              <ul style={{ listStyleType: "none", paddingLeft: "10px" }}>
                {post.frontmatter.related_posts.map(p => (
                  <li
                    key={p}
                    style={{
                      fontSize: "0.9rem",
                    }}
                  >
                    <Link
                      to={`/blog/${p
                        .trim()
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`}
                    >
                      {p}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}

        {/* Title and date */}
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>

        {/* Post body */}
        <MDXRenderer>{post.body}</MDXRenderer>

        {/* Blog Post Footer */}
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li style={{ listStyleType: '""' }}>
            {previous && (
              <Link to={`/blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li style={{ listStyleType: '""' }}>
            {next && (
              <Link to={`/blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        related_posts
      }
    }
  }
`
