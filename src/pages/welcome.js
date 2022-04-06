import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

import Posts from "../components/posts"
import Layout from "../components/layout"
import FadeIn from "react-fade-in"
import Contact from "../components/home/contact"

// lottie!
import Lottie from "../components/lottie"
import { developer } from "../lotties/developer"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {
  howToWinFriendsAndInfluencePeopleUrl,
  theLittleBookOfStoicismUrl,
  cleanCodeUrl,
} from "../utils/books"

const AvatarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
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
`

const Avatar = styled(Img)`
  height: 200px;
  width: 200px;
  border-radius: 50%;
`

const Ul = styled.ul`
  columns: 2;
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
    top: -5px;
    left: 10px;
    content: ">";
    text-shadow: 0px 2px black;
    padding-right: 8px;
    font-weight: bold;
  }
`

const P = styled.p`
  margin-top: 50px;
  margin-bottom: 10px;
`

const H1 = styled.h1`
  margin-top: 0;
  margin-bottom: 10px;
`

const H2 = styled.h1`
  margin-top: 0;
  font-size: ${rhythm(1)};
`

const Body = styled.p`
  margin-bottom: -20px;
`

const Hr = styled.hr`
  margin-bottom: 10px;
  border-top-style: solid;
  border-color: rgb(100, 100, 100);
  border-width: 2px;
`

function renderSkills(skills) {
  return skills.map(skill => {
    return <Li key={skill}>{skill}</Li>
  })
}

export default function Welcome(props) {
  const { data } = props
  const recentPosts = data.allMdx.edges
    .filter(post => !post.node.frontmatter.draft)
    .filter(post => post.node.frontmatter.tags)
    .slice(0, 3)

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

  const avatar = data

  return (
    <Layout>
      <FadeIn>
        <header>
          <P>Hi! My name is</P>
          <H1>Alberto Delgado</H1>
          <H2>I like to code, listen to music and read.</H2>
          <Body>
            I'm a full stack developer with a passion for coding, innovation and
            learning new technologies. I love building from IoT projects to
            beautiful applications and anything in between.
          </Body>
          <section
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "50px",
            }}
          >
            <Lottie
              lottie={developer}
              style={{
                marginBottom: "0px",
                marginTop: "60px"
              }}
            />
          </section>
          <H1>About</H1>
          <p>
            My source of joy is building, from huge projects with tons of
            microservices to small fun IoT projects like a smart watering system
            to keep your plants nice and healthy.
          </p>
          <p>
            JavaScript is my weapon of choice, ideally in its most beautiful
            form and structure shaped by TypeScript - good job Microsoft. My
            preferred stack would include React, very fond of Gatsby and
            Next.js; the wonderful AWS for my backend services; and DynamoDB or
            MongoDB as desireable Databases.
          </p>
          <p>
            On my own time I love to play padel tennis - being the subsequent
            beers equally important; hike and read - always accompanied by the
            best tunes. Some of the books I've most enjoyed are{" "}
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
            . The last being an essential read, even for developers who might
            feel overqualified for an apparently elementary read.
          </p>
          <p>Some of the technologies I like using:</p>
          <Ul>{renderSkills(skills)}</Ul>
          <AvatarWrapper>
            <AvatarBorder className="avatar-border">
              <Avatar
                fluid={avatar?.file?.childImageSharp?.fluid}
                alt=""
                objectFit="cover"
              />
            </AvatarBorder>
          </AvatarWrapper>
          <Contact />
        </header>
        <h3
          style={{
            fontFamily: "Montserrat",
            marginBottom: "5px",
            marginTop: "120px",
          }}
        >
          Latest Posts
        </h3>
        <Hr />
        {Posts(recentPosts)}
      </FadeIn>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "zoom.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            draft
          }
        }
      }
    }
  }
`
