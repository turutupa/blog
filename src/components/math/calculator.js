import React from "react"
import styled from "styled-components"

// recoil
import { RecoilRoot } from "recoil"

// modules
import Screen from "./screen"
import Numpad from "./numpad"
import Information from "./information"

const Wrapper = styled.div`
  border-radius: 6px;
  // min-height: calc(100vh - 270px);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0.8);
  transform-origin: top;
  z-index: 1;
  margin-bottom: -100px;
  padding-top: 75px;
  max-height: 870px;
  min-height: 100vh;
`

const CalculatorContainer = styled.div`
  // border-radius: 25px;
  // background-color: rgb(10, 10, 10);
  position: relative;
  height: 870px;
  padding: 10px;
  width: 450px;
`

export default function Calculator() {
  const isCorrect = false

  return (
    <RecoilRoot>
      <Wrapper>
        <CalculatorContainer>
          <Information />
          <Screen isCorrect={isCorrect} correctAnswer="179" />
          <Numpad />
        </CalculatorContainer>
      </Wrapper>
    </RecoilRoot>
  )
}
