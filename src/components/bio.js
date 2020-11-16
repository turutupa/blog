import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const Container = styled.div`
  display: flex;
  margin-top: 50px;
`

const P = styled.p`
  margin-bottom: -8px;
`

const Highlight = styled.span`
  background-color: #94dcc0;
  color: rgb(20, 20, 20);
  font-weight: bold;
  padding: 0 5px;
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
            <div style={{ marginBottom: "25px" }}>
              Personal blog by <strong>{author}</strong>
              <br />
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: "16px",
                }}
              >
                <P>First, solve the problem</P>
                <P>
                  Then, <Highlight>write the code</Highlight>
                </P>
                {/* <P>while(!noSuccess){`{`}</P> */}
                {/* <P style={{ paddingLeft: "20px" }}>tryAgain();</P> */}
                {/* <P style={{ paddingLeft: "20px" }}>beAwesome();</P> */}
                {/* <P>{`}`}</P> */}
              </div>
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
