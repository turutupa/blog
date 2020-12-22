import React from "react"
import styled from "styled-components"
import "./Tags.css"

import { rhythm } from "../../utils/typography"

const Ul = styled.ul`
  // position: sticky;
  // top: 83px;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;
`

const Tag = styled.div`
  // ${props => (props.active ? "outline: 1px solid #00c27e;" : null)}
  display: inline-block;
  padding: 7px 15px;
  margin-bottom: 5px;
  font-size: ${rhythm(0.4)};
  box-sizing: border-box;
  border-radius: 15px !important;
  white-space: normal;
  cursor: pointer;
  margin-right: 10px;
  box-shadow: ${props =>
    props.active ? "-2px 0px #00c27e" : `0px 1px 3px rgb(30, 30, 30, 0.3);`}
`

function getAllTags(posts) {
  if (!posts) return []
  const tags = posts.reduce((prev, current) => {
    for (let tag of current.node.frontmatter.tags) {
      prev.add(tag)
    }
    return prev
  }, new Set())
  return ["All", ...tags]
}

export default function Tags(props) {
  const { posts, tagSelected, setTagSelected } = props

  return (
    <Ul className="tags-container">
      {getAllTags(posts).map(tag => {
        return (
          <Tag
            className="tag"
            key={tag}
            onClick={() => setTagSelected(tag)}
            active={tag === tagSelected}
          >
            {tag}
          </Tag>
        )
      })}
    </Ul>
  )
}
