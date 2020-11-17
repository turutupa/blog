import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

import ThemeSwitcher from "../components/themeSwitcher"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

const Wrapper = styled.div`
  display: flex;
  flex-direction: column !important;
`

const FixedHeaderWrapper = styled.div`
  position: fixed !important;
  width: 100%;
  max-width: 100vw;
  z-index: 99999;
`

const FixedHeader = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(22)};
  padding: ${rhythm(0.8)} ${rhythm(0.4)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}}
`

const Body = styled.div`
  min-height: calc(100vh - 160px);
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(22)};
  padding: ${rhythm(2.5)} ${rhythm(0.4)};
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

  display: inline;
  margin-top: 0;
  margin-right: 15px;
  margin-bottom: 0;
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
          <StyledLink to={`/#welcome`} className="noSelect">
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
        <FixedHeaderWrapper className="sticky-header">
          <FixedHeader>
            {header}
            <ThemeSwitcher />
          </FixedHeader>
        </FixedHeaderWrapper>

        <Body>{children}</Body>

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
