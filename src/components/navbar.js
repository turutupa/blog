import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  position: absolute;
  top: 0;
  background-color: rgb(255, 255, 255);
  filter: opacity(0.3);
  display: flex;
  align-items: center;
  padding: 40px;

  &:hover {
    transition: all 1s ease;
    filter: opacity(0.7);
  }
`

const NavItem = styled.div`
  cursor: pointer;

  &:hover {
    filter: opacity(1) !important;
  }
`

export default function Navbar() {
  return (
    <Wrapper>
      <NavItem>Blog</NavItem>
    </Wrapper>
  )
}
