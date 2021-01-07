import React from "react"
import styled from "styled-components"

import Posts from "./posts"

import Tags from "./tags"
import "@deckdeckgo/highlight-code"

const Container = styled.div`
  margin: 50px 0;
`

function Blog(props) {
  const { data } = props

  const [tagSelected, setTagSelected] = React.useState("All")

  const posts = data.allMdx?.edges
  const selectedPosts = data.allMdx.edges.filter(post => {
    if (tagSelected === "All") return true
    return post.node.frontmatter.tags.includes(tagSelected)
  })

  return (
    <Container>
      <Tags
        posts={posts}
        tagSelected={tagSelected}
        setTagSelected={setTagSelected}
      />
      <>{Posts(selectedPosts)}</>
    </Container>
  )
}

export default Blog
