import React from "react"
import { VerticalTimeline } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import TimelineElement from "./timelineElement"

export default function Timeline(props) {
  const { timelineElements } = props
  return (
    <VerticalTimeline layout="1-column">
      {timelineElements.map(el => (
        <TimelineElement key={el.excerpt} data={el} />
      ))}
    </VerticalTimeline>
  )
}
