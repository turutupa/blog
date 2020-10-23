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

  const howToWinFriendsAndInfluencePeopleUrl =
    "https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034/ref=sr_1_3?dchild=1&keywords=how+to+win+friends&qid=1603392854&sr=8-3"

  const theLittleBookOfStoicismUrl =
    "https://www.amazon.com/Little-Book-Stoicism-Resilience-Confidence/dp/3952506907/ref=sr_1_1_sspa?dchild=1&keywords=the+little+book+of+stoicism&qid=1603392899&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFZMUtLMUZaS1FHM0kmZW5jcnlwdGVkSWQ9QTAzOTQ4MDQzM0VYRktTSFVHRTM5JmVuY3J5cHRlZEFkSWQ9QTA2MTMzNDgzNjAwNDc1R0VPRU0md2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl"

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
          <i>How to win friends and influence people</i>
        </a>
        ,{" "}
        <a href={theLittleBookOfStoicismUrl} target="_blank">
          <i>The little book of Stoicism</i>
        </a>{" "}
        and{" "}
        <a>
          <i>Clean Code</i>
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
    </div>
  )
}
