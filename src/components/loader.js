import React from "react"
import Loader from "react-loader-spinner"
import styled from "styled-components"
import { setSessionStorage } from "../utils/sessionStorage"

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 10px);
  width: calc(100vw - 14px);
`

export default function LoaderSpinner(props) {
  const [animationFinished, setAnimationFinished] = React.useState(false)
  const finishedLoading = "finishedLoading"
  const minTimeLoaderAnimation = 500

  React.useEffect(() => {
    setTimeout(() => {
      setSessionStorage(finishedLoading, true)
      setAnimationFinished(true)
    }, minTimeLoaderAnimation)
  }, [props.isLoading])

  if (props.isLoading && !animationFinished) {
    return (
      <Container>
        <Loader
          type="Audio"
          color="#00c27e"
          height={100}
          width={100}
          timeout={0}
        />
      </Container>
    )
  } else {
    return <>{props.children}</>
  }
}
