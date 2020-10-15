import React from "react"
import VideoBg from "reactjs-videobg"
import poster from "../images/led-love.jpg"
import Intro from "../videos/VideoHero.mp4"

export default function VideoHero() {
  return (
    <VideoBg
      poster={poster}
      videoClass="video-bg"
      wrapperClass="video-bg-wrapper"
    >
      <VideoBg.Source src={Intro} type="video/mp4" />
    </VideoBg>
  )
}
