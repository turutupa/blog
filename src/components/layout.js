import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

import ThemeSwitcher from "../components/themeSwitcher"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

const Wrapper = styled.div``

const StickyHeader = styled.div`
  position: fixed;
  width: 100%;
  z-index: 99999;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

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
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const { pathname } = location

    const header = (
      <>
        <H3>
          <StyledLink to={`/#welcome`}>
            <span className="title">{title}</span>
          </StyledLink>
        </H3>
        {pathname !== "/" && pathname !== "/math" && (
          <>
            <H3>|</H3>
            <H3>
              <StyledLink
                className="go-home"
                style={{
                  textDecoration: "underline",
                }}
                to={"/#blog"}
              >
                go home
              </StyledLink>
            </H3>
          </>
        )}
      </>
    )

    return (
      <Wrapper>
        <StickyHeader className="sticky-header">
          <div
            style={{
              position: "relative",
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(22),
              padding: `${rhythm(1)} ${rhythm(0.4)}`,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <header>{header}</header>
            <ThemeSwitcher />
          </div>
        </StickyHeader>

        <div
          style={{
            minHeight: "calc(100vh - 120px)",
            position: "relative",
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(22),
            padding: `${rhythm(2)} ${rhythm(0.4)}`,
          }}
        >
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

export default Layout
