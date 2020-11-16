import React from "react"
import * as Lottie from "lottie-web"

export default function AnimationComponent(props) {
  const { lottie, animateOnHover } = props

  const animElement = React.useRef()

  React.useEffect(() => {
    try {
      const anim = Lottie.loadAnimation({
        animationData: JSON.parse(lottie),
        loop: true,
        renderer: "svg",
        container: animElement.current,
        autoplay: !animateOnHover,
      })

      return () => {
        anim.stop()
        anim.destroy()
        Lottie.stop()
        Lottie.destroy()
      }
    } catch (e) {
      console.error("wtf", e)
    }
  }, [])

  return (
    <div
      {...props}
      // onMouseEnter={() => Lottie.play()}
      // onMouseLeave={() => Lottie.goToAndStop(200)}
      style={{ zIndex: "1", ...props.style }}
      ref={animElement}
    />
  )
}
