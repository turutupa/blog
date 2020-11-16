import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../../utils/typography"
import "@deckdeckgo/highlight-code"

function Blog(props) {
  const { data } = props
  const posts = data.allMdx.edges

  return (
    <>
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
    </>
  )
}

export default Blog
