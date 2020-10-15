import React from "react"
import styled from "styled-components"

const H1 = styled.h1`
  margin-bottom: 5px;
`

export default function Header() {
  return (
    <header>
      <H1>
        Welcome to
        <br />
        Alberto Delgado's homepage{" "}
      </H1>
      <p>I like to code, listen to music and read.</p>
    </header>
  )
}
