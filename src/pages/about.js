import React from "react"
import About from "containers/About"
import NavArrow from "components/arrow"

import { welcome, blog } from "utils/routes"

export default function App() {
  return (
    <>
      <NavArrow direction="left" to={welcome} />
      <NavArrow direction="down" to={blog} />
      <About />
    </>
  )
}
