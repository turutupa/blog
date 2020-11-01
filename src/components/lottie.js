import React from "react"
import * as Lottie from "lottie-web"

export default function AnimationComponent(props) {
  const { lottie } = props

  const animElement = React.useRef()

  React.useEffect(() => {
    const anim = Lottie.loadAnimation({
      animationData: JSON.parse(lottie),
      loop: true,
      renderer: "svg",
      container: animElement.current,
      autoplay: true,
    })

    return () => {
      anim.stop()
      anim.destroy()
      Lottie.stop()
      Lottie.destroy()
    }
  }, [])

  return <div ref={animElement} />
}
