import React from "react"
import { graphql } from "gatsby"

import { fetchSessionStorage } from "../utils/sessionStorage"
import Home from "../components/home/home"
import Loader from "../components/loader"

import "./App.css"

function IndexPage(props) {
  const hasPreviouslyBeenLoaded = fetchSessionStorage("finishedLoading")
  const { data } = props

  return (
    <Loader isLoading={!hasPreviouslyBeenLoaded}>
      <Home {...props} data={data} />
    </Loader>
  )
}

export default IndexPage

// ideally this query is performed in blog component
// unfortunately I don't know why it is not working
// when performed from there
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
