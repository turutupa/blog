import React from "react"
import { contact, blog, about } from "utils/routes"
import { lottie } from "lottie/work-from-home"
import styled from "styled-components"
import Lottie from "components/lottie"

// modules
import NavArrow from "components/arrow"
import Layout from "containers/Layout"

const LottieWrapper = styled.div`
  width: 50%;
`

export default function Welcome() {
  return (
    <Layout>
      <NavArrow to={contact} direction="left" />
      <NavArrow to={blog} direction="down" />
      <NavArrow to={about} direction="right" />

      <LottieWrapper>
        <Lottie lottie={lottie} />
      </LottieWrapper>
    </Layout>
  )
}
