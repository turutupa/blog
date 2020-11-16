import React from "react"
import styled from "styled-components"

import { rhythm } from "../../utils/typography"

import { userInputAtom } from "./atom"
import { useRecoilState } from "recoil"

const Wrapper = styled.div`
  font-family: Montserrat;
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width: 100%;
  margin-bottom: 40px;
`
// const colorExtraButtons = "#A5A5A5"
const UserInput = styled.input`
  width: auto;
  text-align: right;
  font-size: ${rhythm(3)};
  background-color: black;
  color: white;
  border: none;
  outline: none;
  -webkit-appearance: none;
`

const CorrectAnswer = styled.p`
  text-align: right;
  font-weight: bold;
  line-height: 20px;
  color: #a5a5a5;
`

export default function Screen(props) {
  const { isCorrect, correctAnswer } = props
  const [userInput, setUserInput] = useRecoilState(userInputAtom)

  function handleUserInput(val) {
    setUserInput(String(val))
  }

  function handleUserInputOnBlur() {
    if (userInput === "") setUserInput("0")
  }

  function handleUserInputOnFocus() {
    if (userInput === "0") setUserInput("")
  }

  return (
    <Wrapper>
      <UserInput
        className="no-arrow-buttons"
        type="number"
        value={userInput}
        max="999999"
        onChange={e => handleUserInput(e.target.value)}
        onBlur={handleUserInputOnBlur}
        onFocus={handleUserInputOnFocus}
      />
      <CorrectAnswer isCorrect={props.isCorrect}>
        {isCorrect && <>CORRECT!</>}
        {!isCorrect && (
          <>
            WRONG! <br />
            Correct answer was {correctAnswer}
          </>
        )}
      </CorrectAnswer>
    </Wrapper>
  )
}
