import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

import ThemeSwitcher from "../components/themeSwitcher"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

const StyledDot = styled.span`
  padding-left: 10px;
  padding-right: 10px;
  font-weight: bold;
`

function DotSeparator() {
  return <StyledDot>·</StyledDot>
}

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    const header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/blog/`}
        >
          {title}
        </Link>
      </h3>
    )
    // }
    return (
      <Wrapper>
        <div
          style={{
            position: "relative",
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <ThemeSwitcher />
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Built with love
          <p>
            <a
              href="https://www.linkedin.com/in/albertodelgadocabrera/"
              target="_blank"
            >
              LinkedIn
            </a>
            <DotSeparator />
            <a href="https://www.buymeacoffee.com/turutupa" target="_blank">
              Buy me a beer
            </a>
            <DotSeparator />
            <a
              href="https://open.spotify.com/user/metalbatros91?si=96mrGNfHR7y95eVPjjziFQ"
              target="_blank"
            >
              Spotify
            </a>
          </p>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
