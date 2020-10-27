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

const H3 = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
  display: inline;
  margin-right: 15px;
  margin-left: 0;
`

const StyledLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const header = (
      <>
        <H3>
          <StyledLink to={`/`}>{title}</StyledLink>
        </H3>
        {location.pathname !== "/" && (
          <>
            <H3>/</H3>
            <H3>
              <StyledLink to={"/blog/"}>blog</StyledLink>
            </H3>
          </>
        )}
      </>
    )

    return (
      <Wrapper>
        <div
          style={{
            minHeight: "calc(100vh - 110px)",
            position: "relative",
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(22),
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
