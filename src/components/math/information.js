import React from "react"
import { RiInformationLine } from "react-icons/ri"
import styled from "styled-components"

const ShowInfo = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 9999;
  top: -25px;
  left: 20px;
  color: white;
`

export default function Information() {
  return (
    <ShowInfo style={{ color: "white" }}>
      <RiInformationLine size={32} />
    </ShowInfo>
  )
}
