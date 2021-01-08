import React from "react"
import styled from "styled-components"
import "./Tags.css"

import { rhythm } from "../utils/typography"

const Container = styled.div`
  max-width: 100% !important;
  overflow: hidden;
`

const Ul = styled.ul`
  user-select: none;
  margin: 0;
  padding: 20px;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    width: 100vw;
  }
`

export const Tag = styled.div`
  user-select: none;
  display: inline-block;
  padding: 7px 15px;
  margin-bottom: 10px;
  font-size: ${rhythm(0.4)};
  box-sizing: border-box;
  border-radius: 15px !important;
  white-space: normal;
  cursor: pointer;
  margin-right: 10px;
  box-shadow: ${props =>
    props.active ? "0px 2px #00c27e" : `0px 2px 3px rgb(30, 30, 30, 0.3)`};

  &:active {
    transform: translateY(2px);
    box-shadow: 0px 1px #00c27e;
  }
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
    <Container>
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
    </Container>
  )
}
