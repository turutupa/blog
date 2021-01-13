import React from "react"
import styled from "styled-components"

import { GiJumpingDog } from "react-icons/gi"
import { VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import ReactMarkdown from "react-markdown"

import { rhythm } from "../../utils/typography"

const H1 = styled.h1`
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 1.4rem;
`

function removeMdHeader(rawBody) {
  const words = rawBody.split("---")
  const body = words.pop()
  return body
}

export default function TimelineElement(props) {
  const { data } = props
  const { title, date } = data.frontmatter
  const rawBody = data.rawBody

  return (
    <VerticalTimelineElement
      // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      // contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date={date}
      iconStyle={{
        color: "#fff",
      }}
      icon={<GiJumpingDog />}
    >
      <H1>{title}</H1>

      <ReactMarkdown>{removeMdHeader(rawBody)}</ReactMarkdown>
    </VerticalTimelineElement>
  )
}
