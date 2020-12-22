import React from "react"
import { graphql } from "gatsby"

import Home from "../components/home/home"

import "./App.css"

function IndexPage(props) {
  const { data } = props
  return <Home {...props} data={data} />
}

export default IndexPage

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
            tags
          }
        }
      }
    }
  }
`
