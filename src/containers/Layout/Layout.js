import React from "react"
import Navbar from "components/navbar"
import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: #00c27e;
  height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
`

export default function Layout(props) {
  return <Wrapper>{props.children}</Wrapper>
}
