import React from "react"
import Layout from "../components/layout"

function randomTwoDigitNumber() {
  const randomNumber = Math.floor(Math.random() * 21)
  return randomNumber === 0 ? randomTwoDigitNumber() : randomNumber
}

export default function Multiplication(props) {
  const [firstNumber, setFirstNumber] = React.useState(0)
  const [secondNumber, setSecondNumber] = React.useState(0)
  const [response, setResponse] = React.useState("")
  const [correctAnswersCounter, setCorrectAnswersCounter] = React.useState(0)
  const [counter, setCounter] = React.useState(0)
  const [answerMsg, setAnswerMsg] = React.useState("")
  const [correctAnswer, setCorrectAnswer] = React.useState("")
  const CORRECT = "Correct!"
  const WRONG = "Wrong!"

  React.useEffect(() => {
    setFirstNumber(randomTwoDigitNumber())
    setSecondNumber(randomTwoDigitNumber())
  }, [counter])

  function submit(e) {
    e.preventDefault()
    if (response === "") return
    setResponse("")
    const answer = Number(firstNumber) * Number(secondNumber)
    if (Number(response) === answer) {
      setAnswerMsg(CORRECT)
      setCorrectAnswersCounter(correctAnswersCounter + 1)
    } else {
      setAnswerMsg(WRONG)
      setCorrectAnswer(answer)
    }
    setCounter(counter + 1)
  }

  return (
    <Layout location={props.location}>
      <h1>Multiplication exercises</h1>
      <h3>
        What is the result of{" "}
        <span
          style={{
            float: "right",
            fontWeight: "bold",
            fontFamily: `Montserrat, sans-serif`,
          }}
        >
          {correctAnswersCounter}/{counter}
        </span>
      </h3>

      <h1
        style={{ textAlign: "center", marginTop: "15%", marginBottom: "15%" }}
      >
        {firstNumber} x {secondNumber}
      </h1>
      <form onSubmit={e => submit(e)}>
        <input
          onKeyDown={e => {
            if (e.key === "Enter") {
              submit(e)
            }
          }}
          value={response}
          onChange={e => setResponse(e.target.value)}
          style={{ width: "100%", padding: "15px" }}
          type="number"
          autoFocus
        ></input>
      </form>
      <h1
        style={{
          textAlign: "center",
          color: answerMsg === CORRECT ? "green" : "red",
        }}
      >
        {answerMsg}
      </h1>
      {answerMsg === WRONG ? (
        <h3 style={{ textAlign: "center" }}>
          Correct answer was {correctAnswer}
        </h3>
      ) : (
        ""
      )}
    </Layout>
  )
}
