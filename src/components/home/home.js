import React from "react"
import Layout from "../layout"
import SEO from "../seo"

export default function Home(props) {
  // const siteTitle = props.data?.site?.siteMetadata?.title

  return (
    <Layout location={props.location}>
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
    </Layout>
  )
}
