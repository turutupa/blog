import React from "react"
import Loader from "react-loader-spinner"
import styled from "styled-components"
import { setSessionStorage } from "../utils/sessionStorage"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

export default function LoaderSpinner(props) {
  const [renderChildren, setRenderChildren] = React.useState(false)
  const finishedLoading = "finishedLoading"
  const minTimeLoaderAnimation = 500

  React.useEffect(() => {
    setTimeout(() => {
      setSessionStorage(finishedLoading, true)
      setRenderChildren(true)
      props.setFinishedLoading(true)
    }, minTimeLoaderAnimation)
  }, [])

  if (!renderChildren) {
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
    return <></>
  }
}
