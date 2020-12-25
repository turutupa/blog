import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

import ThemeSwitcher from "../components/themeSwitcher"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

import Footer from "./footer"

// initiate code renderer
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

const H3 = styled.h3`
  font-family: Montserrat, sans-serif;

  display: inline;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
`

const StyledLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  margin-right: 0;
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const { pathname } = location

    const header = (
      <>
        <H3 style={{ paddingRight: 0 }}>
          <StyledLink to={`/#welcome`} className="noSelect">
            <span className="title">{title}</span>
          </StyledLink>
        </H3>
        {pathname !== "/" && pathname.split("/").includes("blog") && (
          <>
            <H3 style={{ marginRight: "10px", marginLeft: 0 }}>|</H3>

            <H3>
              <StyledLink
                className="go-home noSelect"
                to={"/#blog"}
                style={{ paddingRight: "30px", textDecoration: "underline" }}
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
        <FixedHeaderWrapper className="fixed-header">
          <FixedHeader>
            {header}
            <ThemeSwitcher />
          </FixedHeader>
        </FixedHeaderWrapper>

        <Body>{children}</Body>

        <Footer />
      </Wrapper>
    )
  }
}

export default Layout
