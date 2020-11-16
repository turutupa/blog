import React from "react"
import styled from "styled-components"

import Button from "./buttons"

import { useRecoilState } from "recoil"
import { userInputAtom } from "./atom"

import { BsBackspace } from "react-icons/bs"

const division = "÷"
const minus = "—"
const dot = ","
const times = "x"
const plus = "+"
const equal = "="
const none = "none"
const ac = "AC"
const gameModes = "M"

const NumpadWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-bottom: 0;
  height: auto;
`

const ButtonWrapper = styled.div`
  width: 100%;
  flex-basis: 25%;
  margin-right: 0;
`

export default function Numpad() {
  const [userInput, setUserInput] = useRecoilState(userInputAtom)

  // create numpad
  const numpad = [
    [gameModes, ac, BsBackspace, division],
    [7, 8, 9, times],
    [4, 5, 6, minus],
    [1, 2, 3, plus],
    [0, dot, equal, none],
  ]

  // transform numpad elements to actual components
  const buttons = numpad.map((row, i) => {
    return row.map(val => {
      const color = {
        [i === 0 && val !== division
          ? "extra"
          : Number.isInteger(val) || val == dot
          ? "secondary"
          : "main"]: true,
      }

      return (
        <ButtonWrapper
          key={val + i}
          style={val === "none" ? { display: "none" } : null}
        >
          <Button
            key={`row-${val}`}
            {...color}
            onClick={() => {
              handleNumbers(val)
            }}
          >
            {Number.isInteger(val)
              ? String(val)
              : typeof val === "string"
              ? val
              : BsBackspace()}
          </Button>
        </ButtonWrapper>
      )
    })
  })

  function handleNumbers(val) {
    if (val === ac) setUserInput("0")
    if (typeof val === "function") {
      if (userInput.length === 1) setUserInput("0")
      else setUserInput(userInput.slice(0, userInput.length - 1))
    }
    if (Number.isInteger(val)) {
      if (userInput === "0" && val !== ".") setUserInput(String(val))
      else setUserInput(userInput + String(val))
    }
  }

  return <NumpadWrapper>{buttons}</NumpadWrapper>
}
