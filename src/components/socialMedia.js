import React from "react"
import styled from "styled-components"

// icons
import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa"
import { IoIosBeer } from "react-icons/io"

const socialPlatforms = {
  spotify: {
    link:
      "https://open.spotify.com/user/metalbatros91?si=96mrGNfHR7y95eVPjjziFQ",
    icon: FaSpotify,
  },
  linkedin: {
    link: "https://www.linkedin.com/in/albertodelgadocabrera/",
    icon: FaLinkedin,
  },
  buyMeABeer: {
    link: "https://www.buymeacoffee.com/turutupa",
    icon: IoIosBeer,
  },
  github: {
    link: "https://github.com/turutupa/",
    icon: FaGithub,
  },
}

const Anchor = styled.a`
  box-shadow: none;

  &:hover {
    box-shadow: 0 1px 0 0 currentColor;
  }
`

export default function SocialMedia({ platform }) {
  const { link, icon } = socialPlatforms[platform]

  return (
    <Anchor href={link} target="_blank">
      {icon({ size: 28 })}
    </Anchor>
  )
}
