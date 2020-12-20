import React from "react"
import styled from "styled-components"

import Button from "./buttons"

import { useRecoilState } from "recoil"
import { userInputAtom } from "./atom"

import { numpadLayout } from "./numpadLayout"
import { integer, operand } from "./constants"
import { handleNumpad, calculator as Calculator } from "./operations"

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
  user-select: none;
`

export default function Numpad() {
  const [userInput, setUserInput] = useRecoilState(userInputAtom)
  const [calculator, _] = React.useState(Calculator(userInput))

  function handleNumbers(newVal) {
    const result = handleNumpad(calculator, newVal)
    if (result) setUserInput(result)
  }

  // transform numpad elements to actual components
  const numpad = numpadLayout.map((row, i) => {
    return row.map(button => {
      let color = { extra: true }

      if (button.type === integer) color = { secondary: true }
      if (button.type === operand) color = { primary: true }

      return (
        <ButtonWrapper key={button.value + i}>
          <Button
            key={`row-${button.value}`}
            {...color}
            onClick={e => {
              e.stopPropagation()
              handleNumbers(button)
            }}
          >
            {typeof button.value === "string" ? (
              button.value
            ) : (
              <div style={{ fontSize: "50px", paddingTop: "15px" }}>
                {button.value()}
              </div>
            )}
          </Button>
        </ButtonWrapper>
      )
    })
  })

  return <NumpadWrapper>{numpad}</NumpadWrapper>
}
