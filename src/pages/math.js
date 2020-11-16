import React from "react"
import { Calculator } from "../components/math"
import styled from "styled-components"

import "./App.css"

const Container = styled.div`
  background-color: rgb(0, 0, 0);
  // background-color: rgb(255, 255, 255);
  min-height: 100vh;
  height: auto;
`

export default function Multiplication() {
  return (
    <Container>
      <Calculator />
      <p
        style={{
          color: "white",
          marginBottom: 0,
          textAlign: "center",
          fontFamily: "Montserrat",
        }}
      >
        Made by turutupa <span style={{ fontSize: "32px" }}>👨🏻‍💻</span>
      </p>
    </Container>
  )
}
