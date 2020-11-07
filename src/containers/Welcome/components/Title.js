import React from "react"
import styled from "styled-components"

import { rhythm } from "utils/typography"

const textShadow = "text-shadow: 2px 2px rgb(0, 0, 0);"

const Wrapper = styled.div`
  position: absolute;
  left: 20%;
  top: 15%;
  max-width: 500px;
  z-index: 9999 !important;
`

const Main = styled.h1`
  margin-top: 0px;
  padding-top: 0px;
  font-size: ${rhythm(2)};
  ${textShadow}
`

const Title = styled.h1`
  margin-top: 0px;
  padding-top: 0px;
  ${textShadow}
`
const Subtitle = styled.h3`
  margin-bottom: 10px;
  padding-bottom: 10px;
  ${textShadow}
`

export default function WelcomeTitle() {
  return (
    <Wrapper>
      <Subtitle>Hi! My name is</Subtitle>
      <Main>Alberto Delgado</Main>
      <Title> I like to code, listen to music and read.</Title>
    </Wrapper>
  )
}
