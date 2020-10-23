import React from "react"
import Loader from "react-loader-spinner"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

function setSessionStorage(data, value) {
  window.sessionStorage.setItem(data, value)
}

function fetchSessionStorage(data) {
  return window.sessionStorage.getItem(data)
}

export default function LoaderSpinner(props) {
  const [renderChildren, setRenderChildren] = React.useState(false)
  const finishedLoading = "finishedLoading"
  const minTimeLoaderAnimation = 800

  React.useEffect(() => {
    setTimeout(() => {
      setRenderChildren(true)
      setSessionStorage(finishedLoading, true)
    }, minTimeLoaderAnimation)
  }, [props.isLoading])

  if (fetchSessionStorage(finishedLoading)) return props.children
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
    return props.children
  }
}
