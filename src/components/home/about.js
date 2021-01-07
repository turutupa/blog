import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./About.css"

import Contact from "./contact"

import {
  howToWinFriendsAndInfluencePeopleUrl,
  theLittleBookOfStoicismUrl,
  cleanCodeUrl,
} from "../../utils/books"

const H1 = styled.h1`
  margin-bottom: 5px;
`

const AvatarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 70px;
`

const AvatarBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  height: 230px;
  width: 230px;
  border-radius: 50%;
  border-width: 3px;
  border-style: outset;
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
  position: relative;
  padding-left: 30px;
  margin-bottom: 5px;
  word-wrap: break-word;
  list-style-type: "";

  &:before {
    position: absolute;
    left: 14px;
    content: ">";
    text-shadow: 1px 1px black;
    padding-right: 8px;
    font-weight: bold;
  }
`

function renderSkills(skills) {
  return skills.map(skill => {
    return <Li key={skill}>{skill}</Li>
  })
}

export default function About() {
  const skills = [
    "TypeScript",
    "Node.js",
    "React",
    "Google Firebase",
    "HTML & CSS",
    "Python",
    "Docker",
    "AWS Serverless Stack",
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
        My source of joy is building, from huge projects with tons of
        microservices to small fun IoT projects like a smart watering system to
        keep your plants nice and healthy.
      </p>
      <p>
        JavaScript is my weapon of choice, ideally in its most beautiful form
        and structure shaped by TypeScript - good job Microsoft. My preferred
        stack would include React, very fond of Gatsby and Next.js; the
        wonderful AWS for my backend services; and DynamoDB or MongoDB as
        desireable Databases.
      </p>
      <p>
        On my own time I love to play padel tennis - being the subsequent beers
        equally important; hike and read - always accompanied by the best tunes.
        Some of the books I've most enjoyed are{" "}
        <a href={howToWinFriendsAndInfluencePeopleUrl} target="_blank">
          How to win friends and influence people
        </a>
        ,{" "}
        <a href={theLittleBookOfStoicismUrl} target="_blank">
          The little book of Stoicism
        </a>{" "}
        and{" "}
        <a href={cleanCodeUrl} target="_blank">
          Clean Code
        </a>
        . The last being an essential read, even for developers who might feel
        overqualified for an apparently elementary read.
      </p>

      <p>Some of the technologies I like using:</p>
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
      <Contact />
    </div>
  )
}
