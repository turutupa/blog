import React from "react"
import Layout from "../components/layout"

function randomTwoDigitNumber() {
  const randomNumber = Math.floor(Math.random() * 21)
  return randomNumber <= 1 ? randomTwoDigitNumber() : randomNumber
}

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)

export default function Multiplication(props) {
  const [firstNumber, setFirstNumber] = React.useState(0)
  const [secondNumber, setSecondNumber] = React.useState(0)
  const [response, setResponse] = React.useState("")
  const [correctAnswersCounter, setCorrectAnswersCounter] = React.useState(0)
  const [counter, setCounter] = React.useState(0)
  const [answerMsg, setAnswerMsg] = React.useState("")
  const [correctAnswer, setCorrectAnswer] = React.useState("")
  const [incorrectAnswers, setIncorrectAnswers] = React.useState([])
  const CORRECT = "Correct!"
  const WRONG = "Wrong!"

  const myRef = React.useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  React.useEffect(() => {
    executeScroll()
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
      setIncorrectAnswers([
        ...incorrectAnswers,
        `${firstNumber} x ${secondNumber}`,
      ])
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
          ref={myRef}
          onKeyDown={e => {
            if (e.key === "Enter") {
              submit(e)
            }
          }}
          value={response}
          onChange={e => setResponse(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            borderColor: answerMsg === CORRECT ? "green" : "red",
            borderRadius: "5px",
            borderWidth: "3px",
            outline: "none",
          }}
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
      {/* {incorrectAnswers.length > 0 ? (
        <div>
          <h3>Wrong answers</h3>
          {incorrectAnswers.map(a => a)}
        </div>
      ) : (
        ""
      )} */}
    </Layout>
  )
}
