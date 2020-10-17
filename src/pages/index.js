import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Img from "gatsby-image"
import styled from "styled-components"

import FadeIn from "react-fade-in"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Header from "../components/home/header"
import Contact from "../components/home/contact"
import About from "../components/home/about"
import Navbar, { home, about, contact } from "../components/home/navbar"

import "./App.css"

const Container = styled.div`
  min-height: 100vh;
  margin-left: ${props => (props.breakpoints ? "40%" : null)};
  padding-left: ${props => (props.breakpoints ? "30px" : null)};
  padding-right: ${props => (props.breakpoints ? "30px" : null)};
`

const SideImage = styled(Img)`
  position: fixed !important;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 42%;
  height: 100vh;
  margin-right: 100px;
`

function IndexPage(props) {
  const breakpoints = useBreakpoint()
  const siteTitle = "turutupa's garage"
  const [section, setSection] = React.useState(home)

  const backgroundImage = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home-background.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      {!breakpoints.md ? (
        <SideImage
          fluid={backgroundImage?.file?.childImageSharp?.fluid}
          alt=""
          objectFit="cover"
        />
      ) : null}

      <Container breakpoints={!breakpoints.md}>
        <Layout location={props.location} title={siteTitle}>
          <SEO
            title="Home"
            keywords={[`blog`, `turutpa`, `javascript`, `react`, `typescript`]}
          />
          <Navbar section={section} setSection={setSection} />
          {section === home && (
            <FadeIn>
              <Header />
              <Link to="/blog/">
                <Button marginTop="35px">Go to Blog</Button>
              </Link>
            </FadeIn>
          )}
          {section === about && (
            <FadeIn>
              <About />
            </FadeIn>
          )}
          {section === contact && (
            <FadeIn>
              <Contact />
            </FadeIn>
          )}
        </Layout>
      </Container>
    </>
  )
}

export default IndexPage
