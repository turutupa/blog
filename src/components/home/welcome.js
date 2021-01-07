import React from "react"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

import Posts from "./posts"

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

const Hr = styled.hr`
  margin-bottom: 10px;
  border-top-style: solid;
  border-color: rgb(100, 100, 100);
  border-width: 2px;
`

export default function Welcome(props) {
  const { data } = props
  const recentPosts = data.allMdx.edges.slice(0, 3)

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

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <Lottie
          lottie={developer}
          style={{
            marginBottom: "-130px",
          }}
        />
      </section>
      <h3 style={{ fontFamily: "Montserrat", marginBottom: "5px" }}>
        Latest Posts
      </h3>
      <Hr />
      {Posts(recentPosts)}
    </header>
  )
}
