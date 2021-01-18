import React from "react"
import styled from "styled-components"

import SocialMedia from "./socialMedia"

function DotSeparator() {
  return <StyledDot className="blog-date">·</StyledDot>
}

const StyledDot = styled.span`
  padding-left: 10px;
  padding-right: 10px;
  font-size: 32px;
  color: lightgrey;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default function footer() {
  return (
    <Footer>
      © {new Date().getFullYear()}, Thank you for visiting
      <p
        className="noSelect"
        style={{ marginTop: "15px", verticalAlign: "middle" }}
      >
        <SocialMedia platform="github" />
        {/* <DotSeparator /> */}
        <SocialMedia platform="linkedin" />
        {/* <DotSeparator /> */}
        <SocialMedia platform="buyMeABeer" />
        {/* <DotSeparator /> */}
        <SocialMedia platform="spotify" />
      </p>
    </Footer>
  )
}
