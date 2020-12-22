import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import RandomQuotes from "./randomQuotes"

const Container = styled.div`
  display: flex;
  margin-top: 50px;
  margin-bottom: 30px;
`

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <Container>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1),
                marginBottom: 0,
                minWidth: 75,
                minHeight: 75,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <div style={{ fontSize: rhythm(0.55), marginBottom: "25px" }}>
              Written by <strong>{author}</strong> who loves building cool stuff
              and learning one or two things in the process.
              <br />
              <RandomQuotes />
            </div>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/zoom.png/" }) {
      childImageSharp {
        fixed(width: 65, height: 65) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
