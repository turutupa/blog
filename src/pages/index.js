import React from "react"

import { fetchSessionStorage } from "../utils/sessionStorage"
import Home from "../components/home/home"
import Loader from "../components/loader"

import "./App.css"

function IndexPage(props) {
  const [isLoading, setIsLoading] = React.useState(true)
  const [finishedLoading, setFinishedLoading] = React.useState(false)
  const hasPreviouslyBeenLoaded = fetchSessionStorage("finishedLoading")

  React.useEffect(() => {}, [isLoading])

  if (hasPreviouslyBeenLoaded) return <Home {...props} />
  if (!finishedLoading)
    return <Loader isLoading={false} setFinishedLoading={setFinishedLoading} />
  else return <Home {...props} />
}

export default IndexPage
