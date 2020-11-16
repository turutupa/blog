import React from "react"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

// lottie!
import Lottie from "../lottie"
import { developer } from "../../lotties/developer"

const P = styled.p`
  margin-top: 50px;
  margin-bottom: 10px;
`

const H1 = styled.h1`
  margin-top: 0;
  margin-bottom: 10px;
`

const H2 = styled.h1`
  margin-top: 0;
  font-size: ${rhythm(1)};
`

const Body = styled.p`
  margin-bottom: -20px;
`

export default function Header() {
  return (
    <header>
      <P>Hi! My name is</P>
      <H1>Alberto Delgado</H1>
      <H2>I like to code, listen to music and read.</H2>
      <Body>
        I'm a full stack developer with a passion for coding, innovation and
        learning new technologies. I love building from IoT projects to
        beautiful applications and anything in between.
      </Body>

      <Lottie lottie={developer} style={{ marginBottom: "-150px" }} />
    </header>
  )
}
