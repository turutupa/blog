import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Img from "gatsby-image"
import styled from "styled-components"

import FadeIn from "react-fade-in"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Loader from "../components/loader"

import Welcome from "../components/home/welcome"
import Contact from "../components/home/contact"
import About from "../components/home/about"
import Navbar, { welcome, about, contact } from "../components/home/navbar"

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
  let breakpoints = useBreakpoint()
  const siteTitle = "turutupa's garage"
  const [section, setSection] = React.useState(welcome)
  const [loading, setLoading] = React.useState(true)

  const sideImage = useStaticQuery(graphql`
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

  React.useEffect(() => {
    setLoading(false)
  }, [])

  const sections = [welcome, about, contact]
  const sectionsComponents = {
    [welcome]: <Welcome />,
    [about]: <About />,
    [contact]: <Contact />,
  }

  // rendering of Welcome/About/Contact sections
  function renderSections() {
    return sections.map(s => {
      return (
        section === s && <FadeIn key={section}>{sectionsComponents[s]}</FadeIn>
      )
    })
  }

  return (
    <Loader isLoading={loading}>
      {!breakpoints.md ? (
        <SideImage
          fluid={sideImage?.file?.childImageSharp?.fluid}
          alt=""
          objectFit="cover"
        />
      ) : null}

      <Container breakpoints={!breakpoints.md}>
        <Layout location={props.location} title={siteTitle}>
          <SEO
            title="Turutupa"
            keywords={[`blog`, `turutpa`, `javascript`, `react`, `typescript`]}
          />
          <Navbar section={section} setSection={setSection} />
          {renderSections()}
        </Layout>
      </Container>
    </Loader>
  )
}

export default IndexPage
