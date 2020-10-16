import React from "react"
import styled from "styled-components"
import Button from "../button"

const Container = styled.div``

const H1 = styled.h1`
  margin-bottom: 5px;
`

const Input = styled.input`
  border-radius: 6px;
  background-color: #303a45;
  border: none;
  color: #e5e5e6;
  width: 100% !important;
  padding: 7px 20px;
  margin-bottom: 10px;

  &:focus {
    border-radius: 6px;
    outline: none;
    box-shadow: 0 0 0.5pt 0.5pt #00c27e;
  }
`

const TextArea = styled.textarea`
  background-color: #303a45;
  border: none;
  border-radius: 6px;
  color: #e5e5e6;
  box-shadow: none;
  width: 100% !important;
  padding: 7px 20px;
  margin-bottom: 10px;
  min-height: 180px;
  resize: none;

  &:focus {
    border-radius: 6px;
    outline: none;
    box-shadow: 0 0 0.5pt 0.5pt #00c27e;
  }
`

export default function Contact() {
  const email = "adc.batros@gmail.com"
  const [subject, setSubject] = React.useState("")
  const [message, setMessage] = React.useState("")

  function sendEmail() {
    window.open(`mailto:${email}?subject=${subject}&body=${message.trim()}`)
  }

  return (
    <Container className="contact">
      <H1>Contact</H1>
      <p>
        Do you have any questions? Any out of one's mind innovative project you
        need help with? Or do you just want to chat, feel free to contact me!
      </p>
      <form
        onSubmit={e => {
          e.preventDefault()
          sendEmail()
        }}
      >
        <Input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={e => setSubject(e.target.value)}
          required
        />
        <TextArea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        />
        <Button>Send message</Button>
      </form>
    </Container>
  )
}
