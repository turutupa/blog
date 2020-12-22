import React from "react"
import styled from "styled-components"
import ReactTypingEffect from "../../vendor/react-typing-effect/src/lib"
import { rhythm } from "../../utils/typography"

import { navigate } from "gatsby"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`

const NavItem = styled.span`
  position: relative;
  font-family: SF Mono, monospace;
  cursor: pointer;
  font-size: ${rhythm(8 / 15)};
  color: ${props => (props.active ? "rgb(0,0,0,0)" : null)} !important;
  user-select: none;

  &:hover {
    color: #78d6b5;
  }
`

const TypingEffect = styled(ReactTypingEffect)`
  font-weight: bold;
  position: absolute;
  color: #00c27e;
  width: calc(100% + 12px);
`

export const welcome = "welcome"
export const about = "about"
export const contact = "contact"
export const blog = `blog`
export const sections = [welcome, about, contact, blog]

function handleSetSection(section) {
  navigate(`#${section}`)
}

function renderSectionWithTypingEffect(section) {
  try {
    return (
      <TypingEffect
        text={[`#${section}`]}
        speed={50}
        typingDelay={70}
        eraseDelay={5000}
      />
    )
  } catch (e) {
    return ""
  }
}

export default function Navbar(props) {
  return (
    <Wrapper>
      {sections.map(section => (
        <NavItem
          key={section}
          active={props.section === section}
          onClick={() => handleSetSection(section)}
          className="noSelect"
        >
          {props.section === section && renderSectionWithTypingEffect(section)}#
          {section}
        </NavItem>
      ))}
    </Wrapper>
  )
}
