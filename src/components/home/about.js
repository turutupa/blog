import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./About.css"

const H1 = styled.h1`
  margin-bottom: 5px;
`

const AvatarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

const AvatarBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  height: 220px;
  width: 220px;
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  border-color: #00c27e;
`

const Avatar = styled(Img)`
  height: 200px;
  width: 200px;
  border-radius: 50%;
`

const Ul = styled.ul`
  columns: 2;
  list-style: none;
  padding: 0;
  margin: 0;
`

const Li = styled.li`
  padding-left: 16px;
  margin-bottom: 5px;
  font-family: "Merriweather", "Georgia", serif;

  &:before {
    content: ">";
    padding-right: 8px;
    font-weight: bold;
  }
`

function renderSkills(skills) {
  return skills.map(skill => {
    return <Li>{skill}</Li>
  })
}

export default function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Docker",
    "HTML & CSS",
    "Python",
    "Node.js",
    "AWS Serverless",
  ]

  const avatar = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "zoom.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

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

      <h3>Skills</h3>

      <Ul>{renderSkills(skills)}</Ul>
      <AvatarWrapper>
        <AvatarBorder>
          <Avatar
            fluid={avatar?.file?.childImageSharp?.fluid}
            alt=""
            objectFit="cover"
          />
        </AvatarBorder>
      </AvatarWrapper>
    </div>
  )
}
