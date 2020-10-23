import React from "react"

import { fetchSessionStorage } from "../utils/sessionStorage"
import Home from "../components/home/home"
import Loader from "../components/loader"

import "./App.css"

function IndexPage(props) {
  const hasPreviouslyBeenLoaded = fetchSessionStorage("finishedLoading")

  return (
    <Loader isLoading={!hasPreviouslyBeenLoaded}>
      <Home {...props} />
    </Loader>
  )
}

export default IndexPage
