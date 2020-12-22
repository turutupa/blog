import React from "react"
import styled from "styled-components"

const Monospace = styled.div`
  font-family: monospace;
  font-size: 16px;
`

const Highlight = styled.span`
  background-color: #94dcc0;
  color: rgb(20, 20, 20);
  font-weight: bold;
  padding: 0 5px;
`

const P = styled.p`
  margin-bottom: -8px;
`

const lifeMotto = () => (
  <Monospace>
    <P>
      <strong>
        <i>//life motto</i>
      </strong>
    </P>
    <P>if( sad() === true) {`{`} </P>
    <P style={{ marginLeft: "10px" }}>sad().stop();</P>
    <P style={{ marginLeft: "10px" }}>
      <Highlight>beAwesome();</Highlight>
    </P>
    <P>{`}`}</P>
  </Monospace>
)

const firstSolveTheProblem = () => (
  <Monospace>
    <P>First, solve the problem</P>
    <P>
      Then, <Highlight>write the code</Highlight>
    </P>
  </Monospace>
)

const randomQuote = () => (
  <Monospace>
    Insert inspirational quote <Highlight>here</Highlight>
  </Monospace>
)

const eatSleepCode = () => (
  <Monospace>
    Eat, Sleep, <Highlight>Code</Highlight>
  </Monospace>
)

const body = () => (
  <Monospace>
    <P style={{ fontWeight: "bold", fontSize: "20px" }}>
      {`<`}Body{`>`}
    </P>
    <P>
      I need to lose some <Highlight>weight</Highlight>
    </P>
  </Monospace>
)

const quotes = [
  body,
  lifeMotto,
  firstSolveTheProblem,
  randomQuote,
  eatSleepCode,
]

export default (function(quotes) {
  const length = quotes.length

  const randomIndex = Math.floor(Math.random() * length)

  return quotes[randomIndex]
})(quotes)
