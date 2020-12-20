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
const UserInput = styled.p`
  min-width: 400px;
  text-align: right;
  color: white;
  border: none;
  outline: none;
  -webkit-appearance: none;
  height: 200px;
  max-height: 200px;
  user-select: none;

  font-size: ${props =>
    props.children?.length <= 6 ? rhythm(3) : rhythm(1.5)};
  line-height: ${props =>
    props.children?.length <= 6 ? rhythm(2) : rhythm(1.5)};
`

const CorrectAnswer = styled.p`
  text-align: right;
  font-weight: bold;
  line-height: 20px;
  color: #a5a5a5;
  user-select: none;
`

export default function Screen(props) {
  const { isCorrect, correctAnswer } = props
  const [userInput, setUserInput] = useRecoilState(userInputAtom)

  // function handleUserInput(val) {
  //   setUserInput(String(val))
  // }

  // function handleUserInputOnBlur() {
  //   if (userInput === "") setUserInput("0")
  // }

  // function handleUserInputOnFocus() {
  //   if (userInput === "0") setUserInput("")
  // }

  return (
    <Wrapper>
      <UserInput
        className="no-arrow-buttons"
        type="text"
        // value={userInput}
        // max="999999"
        // onChange={e => handleUserInput(e.target.value)}
        // onBlur={handleUserInputOnBlur}
        // onFocus={handleUserInputOnFocus}
      >
        {userInput}
      </UserInput>
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
