import React from "react"
import Loader from "react-loader-spinner"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

function setSessionStorage(data, value) {
  try {
    window.sessionStorage.setItem(data, value)
  } catch (e) {
    console.error("Oops! Something went wrong setting session storage")
  }
}

function fetchSessionStorage(data) {
  try {
    return window.sessionStorage.getItem(data)
  } catch (e) {
    console.error("Oops! Something went wrong retrieving session storage")
  }
}

export default function LoaderSpinner(props) {
  const [renderChildren, setRenderChildren] = React.useState(false)
  const finishedLoading = "finishedLoading"
  const minTimeLoaderAnimation = 500

  React.useEffect(() => {
    setTimeout(() => {
      setRenderChildren(true)
      setSessionStorage(finishedLoading, true)
    }, minTimeLoaderAnimation)
  }, [props.isLoading])

  if (fetchSessionStorage(finishedLoading)) return <div>{props.children}</div>
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
    return <div>{props.children}</div>
  }
}
