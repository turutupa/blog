import React from "react"
import Layout from "containers/Layout"
import NavArrow from "components/arrow"
import { blog, contact, welcome } from "utils/routes"

export default function Contact() {
  return (
    <Layout>
      <NavArrow direction="right" to={welcome} />
      <NavArrow direction="down" to={blog} />
      what
    </Layout>
  )
}
