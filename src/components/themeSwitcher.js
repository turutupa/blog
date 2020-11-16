import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import Toggle from "react-toggle"
import "react-toggle/style.css"
import "./ThemeSwitcher.css"
import styled from "styled-components"

const Img = styled.img`
  max-width: none;
`

function renderIcon(src) {
  return <Img src={src} alt="" width="17px" height="17px" />
}

export default function ThemeSwitcher() {
  const sunIconUrl =
    "https://www.flaticon.com/svg/static/icons/svg/146/146199.svg"
  const moonIconUrl =
    "https://www.flaticon.com/svg/static/icons/svg/740/740880.svg"

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        if (!theme) return <label></label>
        else
          return (
            <label>
              <Toggle
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
                icons={{
                  unchecked: renderIcon(sunIconUrl),
                  checked: renderIcon(moonIconUrl),
                }}
              />
            </label>
          )
      }}
    </ThemeToggler>
  )
}
