import React from "react"
import { navigate } from "gatsby"

import "./App.css"

export default () => {
  React.useEffect(() => {
    navigate("/welcome")
  }, [])
  return null
}
