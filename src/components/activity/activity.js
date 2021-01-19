import React from "react"
import styled from "styled-components"

import Layout from "../layout"
import SEO from "../seo"

import FadeIn from "react-fade-in"

import Timeline from "./timeline"

const H1 = styled.h1`
  font-size: 32px;
`

const P = styled.p`
  margin-bottom: 75px;
`

export default function Activity(props) {
  const siteTitle = props.data?.site?.siteMetadata?.title
  const timelineElements = props.data?.allMdx?.nodes

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[
          `alberto delgado`,
          `turutupa`,
          `javascript`,
          `react`,
          `typescript`,
        ]}
      />
      <FadeIn>
        <H1>What am I up to?</H1>
        <P>
          In this section you'll find my activity log. Books I have been
          reading, music I've enjoyed, work stuff, side projects I am working
          on... and any other stuff I might spend my time on
        </P>
        <Timeline timelineElements={timelineElements} />
        <p style={{ marginBottom: "75px" }}> </p>
      </FadeIn>
    </Layout>
  )
}
