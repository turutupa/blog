import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rythm } from "utils/typography"

import { BiDownArrow, BiLeftArrow, BiRightArrow } from "react-icons/bi"
import { IconContext } from "react-icons"

function getPosition(dir) {
  return `top: ${position[dir][0]}%; right: ${position[dir][1]}%;`
}

const direction = {
  up: "270",
  right: "0",
  down: "90",
  left: "180",
}

// [top, right]
const position = {
  up: [10, 45],
  right: [45, 2],
  down: [94, 45],
  left: [45, 92],
}

const icon = {
  left: BiLeftArrow,
  right: BiRightArrow,
  down: BiDownArrow,
}

function renderArrow(direction) {
  let Arrow = icon[direction]

  const transform = direction === "down" ? "scale(4, 0.5)" : "scale(0.5, 4)"

  return <Arrow size={48} style={{ transform }} />
}

const Wrapper = styled.div`
  z-index: 9999;
  position: absolute;

  ${props =>
    props.direction ? getPosition(props.direction) : getPosition("right")}
`

const StyledLink = styled(Link)`
  transition: all 1 ease;
  box-shadow: none;
  font-weight: bold;
  filter: opacity(0.5);

  &:hover {
    transition: all 1s ease;
    filter: opacity(0.8);
  }
`

export default function NavArrow(props) {
  return (
    <Wrapper direction={props.direction}>
      <IconContext.Provider value={{ className: "arrows-classname" }}>
        <StyledLink style={{ textDecoration: "none" }} to={props.to}>
          {renderArrow(props.direction)}
        </StyledLink>
      </IconContext.Provider>
    </Wrapper>
  )
}
