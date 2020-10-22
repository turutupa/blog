import React from "react"
import styled from "styled-components"
import Button from "../button"

import "./Contact.css"

const Container = styled.div``

const H1 = styled.h1`
  margin-bottom: 5px;
`
const P = styled.p`
  margin-bottom: 50px;
`
function sendEmail() {
  const email = "adc.batros@gmail.com"
  const subject = "Hey!"
  const message = "Hi Alberto, "
  window.open(`mailto:${email}?subject=${subject}&body=${message}`)
}

export default function Contact() {
  return (
    <Container className="contact">
      <H1>Contact</H1>
      <P>
        I am always eager to collaborate in thrilling and innovative projects.
        Do you want to reinvent the Internet? Let's talk! Contact me even if you
        just want to say <i>Hi</i> and I will get back to you as soon as I can!
      </P>
      <Button onClick={() => sendEmail()}>Get in touch</Button>
    </Container>
  )
}
