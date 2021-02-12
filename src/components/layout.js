import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

import ThemeSwitcher from "../components/themeSwitcher"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

import NewsLetterSubscription from "./newsletter"
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
  z-index: 99999;
`

const FixedHeader = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(0.8)} ${rhythm(0.4)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}}
`

const Body = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
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

const Header = styled(Link)`
  height: 100% !important;
  font-size: 1.4rem;
  box-shadow: none;
  text-decoration: none !important;
  margin-right: 2vw;
  display: none;

  &:hover {
    filter: brightness(1.4) !important;
  }

  @media (min-width: 768px) {
    display: inline-block;
  }
`

const SmallHeader = styled(Link)`
  font-size: 1.2rem;
  box-shadow: none;
  text-decoration: none;
  margin-right: 2vw;
  display: inline-block !important;

  @media (min-width: 768px) {
    display: none !important;
  }
`

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  box-shadow: none;
  text-decoration: none !important;
  margin-right: 1vw;
  padding-right: 10px !important;
`

function handleScroll() {
  try {
    const navbar = document.querySelector(".fixed-header")
    if (window.scrollY > 20) {
      navbar.className = "fixed-header scroll"
    } else {
      navbar.className = "fixed-header"
    }
  } catch (e) {
    console.error(e)
  }
}
class Layout extends React.Component {
  state = {
    currentPage: "welcome",
  }

  componentDidMount() {
    try {
      window.addEventListener("scroll", handleScroll)
      const location = window.location

      this.setState({ currentPage: location.pathname.slice(1) })
    } catch (e) {
      console.error(e)
    }
  }

  componentWillUnmount() {
    try {
      window.removeEventListener("scroll", handleScroll)
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    const { children } = this.props
    const { currentPage } = this.state
    const title = "Alberto Delgado"

    const header = (
      <>
        <H3>
          <SmallHeader
            to={`/welcome`}
            className={`noSelect nav-item ${
              currentPage.includes("welcome") ? "nav-item-active" : ""
            }`}
            onClick={() => this.setState({ currentPage: "welcome" })}
          >
            <span className="title">A.D</span>
          </SmallHeader>
        </H3>
        <H3 onClick={() => this.setState({ currentPage: "welcome" })}>
          <Header
            to={`/welcome`}
            className={`noSelect nav-item ${
              currentPage === "welcome" ? "nav-item-active" : ""
            }`}
          >
            <span className="title">{title}</span>
          </Header>
        </H3>
        <>
          <H3>
            <StyledLink
              onClick={() => this.setState({ currentPage: "about" })}
              className={`noSelect nav-item ${
                currentPage.includes("about") ? "nav-item-active" : ""
              }`}
              to={"/about"}
              style={{ paddingRight: "30px" }}
            >
              About
            </StyledLink>
          </H3>
          <H3>
            <StyledLink
              onClick={() => this.setState({ currentPage: "blog" })}
              className={`noSelect nav-item ${
                currentPage.includes("blog") ? "nav-item-active" : ""
              }`}
              to={"/blog"}
              style={{ paddingRight: "30px" }}
            >
              Blog
            </StyledLink>
          </H3>
          <H3>
            <StyledLink
              onClick={() => this.setState({ currentPage: "activity" })}
              className={`noSelect nav-item ${
                currentPage.includes("activity") ? "nav-item-active" : ""
              }`}
              to={"/activity"}
              style={{ paddingRight: "30px" }}
            >
              Activity
            </StyledLink>
          </H3>
        </>
      </>
    )

    return (
      <Wrapper>
        <FixedHeaderWrapper className="fixed-header">
          <FixedHeader>
            <div>{header}</div>
            <ThemeSwitcher />
          </FixedHeader>
        </FixedHeaderWrapper>

        <Body>
          {children}

          <NewsLetterSubscription />
        </Body>

        <Footer />
      </Wrapper>
    )
  }
}

export default Layout
