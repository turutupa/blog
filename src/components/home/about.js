import React from "react"
import styled from "styled-components"

const H1 = styled.h1`
  margin-bottom: 5px;
`

export default function About() {
  return (
    <div>
      <H1>About</H1>
      <p>
        I am working on a fancy cool description about who I am and what I love
        doing. Some of that will envolve more coding on my spare time, yes, I do
        that, cause I also love IoT and creating cool projects; playing padel
        and reading. Lately I have read a lot of self-development books which
        are amazing such as <i>How to win friends and influence people</i> or{" "}
        <i>The little book of Stoicism</i>.
      </p>

      <p>
        Some of the stuff I am looking forward to learning is Systems Designs
        and building scalable applications, I am particulary interested in
        creating microservices with docker
      </p>
    </div>
  )
}
