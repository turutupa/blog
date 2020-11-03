import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

function getDirectionTransformation(dir) {
  return `transform: rotate(${direction[dir]}deg);`
}

function getPosition(dir) {
  return `top: ${position[dir][0]}%; right: ${position[dir][1]}%;`
}

const direction = {
  up: "270",
  right: "0",
  down: "90",
  left: "180",
}

const position = {
  up: [10, 45],
  right: [45, 4],
  down: [90, 45],
  left: [45, 90],
}

const Wrapper = styled.div`
  z-index: 9999;
  position: absolute;
  ${props =>
    props.direction ? getPosition(props.direction) : getPosition("right")}
`

const FixDirection = styled.div`
  ${props =>
    props.direction
      ? getDirectionTransformation(props.direction)
      : getDirectionTransformation("right")}
`

export default function NavArrow(props) {
  return (
    <Wrapper direction={props.direction}>
      <FixDirection direction={props.direction}>
        <AniLink
          entryOffset={80}
          cover
          bg="#00c27e"
          duration={1}
          direction={props.direction}
          to={props.to}
        >
          Arrow
        </AniLink>
      </FixDirection>
    </Wrapper>
  )
}
