import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { IoMdReturnLeft } from "react-icons/io"

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
`

const NavItem = styled.span`
  position: relative;
  font-family: SF Mono, monospace;
  cursor: pointer;
  color: ${props => (props.active ? "#00c27e" : null)};

  &:hover {
    color: #78d6b5;
  }
`

const IconWrapper = styled.span`
  position: absolute;
  right: -20px;
  top: 4px;
`

export const welcome = "welcome"
export const about = "about"
export const contact = "contact"
export const blog = `blog`
export const sections = [welcome, about, contact, blog]

export default function Navbar(props) {
  return (
    <Container>
      {sections.map(section => (
        <NavItem
          key={section}
          active={props.section === section}
          onClick={() => {
            if (section === blog) {
              return navigate("/blog/")
            }
            props.setSection(section)
          }}
        >
          #{section}{" "}
          {section === blog && (
            <IconWrapper>
              <IoMdReturnLeft />
            </IconWrapper>
          )}
        </NavItem>
      ))}
    </Container>
  )
}
