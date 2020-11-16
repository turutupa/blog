import React from "react"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

const colorPrimaryButton = "#FF9402"
const colorSecondaryButton = "#333333"
const colorExtraButtons = "#A5A5A5"

const themes = {
  dark: {
    primary: "#FF9402",
    secondary: "#333333",
    extra: "#A5A5A5",
  },
  light: {
    primary: "#007AFF",
    secondary: "#CCCCCC",
    extra: "#09CCFC",
  },
}

const Wrapper = styled.div`
  float: right;
  margin-bottom: 15px;
`

const Button = styled.div`
  margin: 0;
  cursor: pointer;
  border-radius: 50%;
  width: ${rhythm(3)};
  height: ${rhythm(3)};
  padding: 30px;
  font-size: ${rhythm(1.5)};
  font-family: Montserrat;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  background-color: ${props =>
    props.main
      ? colorPrimaryButton
      : props.secondary
      ? colorSecondaryButton
      : props.extra
      ? colorExtraButtons
      : null};
    

    // smaller font size for Game mods so they fit
    ${props => (props.extra ? `font-size: ${rhythm(1.5)};` : null)}
    // specific css for numpad 0
    ${props => (props.children === "0" ? `justify-content: flex-start;` : null)}
    ${props => (props.children === "0" ? `padding-left: 40px;` : null)}
    ${props => (props.children === "0" ? `width: ${rhythm(6.5)};` : null)}
    ${props => (props.children === "0" ? `border-radius: 50px;` : null)}

  &:hover {
    filter: ${props =>
      props.secondary ? "brightness(1.8);" : "brightness(1.2);"}
  }
`

export default function Buttons(props) {
  return (
    <Wrapper {...props}>
      <Button {...props}>{props.children}</Button>
    </Wrapper>
  )
}
