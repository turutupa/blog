import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import Toggle from "react-toggle"
import "react-toggle/style.css"
import "./ThemeSwitcher.css"
import styled from "styled-components"

const Wrapper = styled.div`
  position: absolute !important;
  right: 10px;
`

export default function ThemeSwitcher() {
  return (
    <Wrapper>
      <ThemeToggler>
        {({ theme, toggleTheme }) => {
          if (!theme) return <label></label>
          else
            return (
              <label>
                <Toggle
                  onChange={e =>
                    toggleTheme(e.target.checked ? "dark" : "light")
                  }
                  checked={theme === "dark"}
                  icons={{
                    unchecked: "☀️",
                    checked: "🌒",
                  }}
                />
              </label>
            )
        }}
      </ThemeToggler>
    </Wrapper>
  )
}
