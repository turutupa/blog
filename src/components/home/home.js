import React from "react"
import Layout from "../layout"
import SEO from "../seo"

import FadeIn from "react-fade-in"

// import Navbar from "./navbar"
import Welcome from "./welcome"
import Contact from "./contact"
import About from "./about"
import Blog from "./blog"

import { welcome, about, contact, blog } from "./navbar"

export default function Home(props) {
  const siteTitle = props.data?.site?.siteMetadata?.title
  const [section, setSection] = React.useState(welcome)

  React.useEffect(() => {
    try {
      const hash = window?.location?.hash
      if (hash) {
        const hashSection = hash.slice(1)
        setSection(hashSection)
      }
    } catch (e) {
      console.error("Oops! Something went wrong!")
    }
  })

  const sectionsComponents = {
    [welcome]: <Welcome {...props} />,
    [about]: <About {...props} />,
    [contact]: <Contact {...props} />,
    [blog]: <Blog {...props} />,
  }

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
      {/* <Navbar section={section} setSection={setSection} /> */}
      <FadeIn key={section}>{sectionsComponents[section]}</FadeIn>
    </Layout>
  )
}
