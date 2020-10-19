import React from "react"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
`

const NavItem = styled.span`
  font-family: SF Mono, monospace;
  cursor: pointer;
  color: ${props => (props.active ? "#00c27e" : null)};

  &:hover {
    color: #78d6b5;
  }
`
export const home = "home"
export const about = "about"
export const contact = "contact"
export const sections = [home, about, contact]

export default function Navbar(props) {
  return (
    <Container>
      {sections.map(section => (
        <NavItem
          key={section}
          active={props.section === section}
          onClick={() => props.setSection(section)}
        >
          #{section}
        </NavItem>
      ))}
    </Container>
  )
}
