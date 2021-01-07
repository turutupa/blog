import React from "react"
import { graphql } from "gatsby"

import Activity from "../components/activity"

export default function ActivityPage(props) {
  return <Activity {...props} />
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: { fileAbsolutePath: { regex: "/activity/" } }) {
      nodes {
        rawBody
        excerpt(pruneLength: 999999999)
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
      }
    }
  }
`
