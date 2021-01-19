import React from "react"
import styled from "styled-components"
// import Button from "../button"

import "./Contact.css"

import { contactme } from "../../lotties/contact"
import Lottie from "../lottie"

const Container = styled.div`
  margin-bottom: 0;
  padding-bottom: 0;
  position: relative;
`

const H1 = styled.h1`
  margin-bottom: 5px;
`
const Body = styled.p`
  margin-bottom: 50px;
`

const LottieWrapper = styled.div`
  max-width: 100%;
  margin-top: 0px;
  display: flex;
  justify-content: center;
`

const StyledLottie = styled(Lottie)`
  transition: all 0.5s ease-out;
  cursor: pointer;
  border-radius: 50%;
  border-color: rgb(0, 194, 126, 0);
  border-width: 5px;
  border-style: inset;
  width: 40%;
  min-width: 250px !important;

  &:hover {
    transition: all 0.5s ease-out;
    filter: brightness(1.3);
    border-width: 5px;
    border-style: inset;
    border-color: #00c27e;
    border-radius: 50%;
  }
`

function sendEmail() {
  const email = "albertodelgadocabrera@gmail.com"
  const subject = "Hey!"
  const message = "Hi Alberto, "
  window.open(`mailto:${email}?subject=${subject}&body=${message}`)
}

export default function Contact() {
  return (
    <Container className="contact">
      <H1>Contact</H1>
      <Body>
        I am always eager to collaborate in thrilling and innovative projects.
        Do you want to reinvent the Internet? Let's talk! <br />
        <br />
        Contact me even if you just want to say <i>Hi</i> and I will get back to
        you as soon as I can!
      </Body>

      <LottieWrapper target="_blank" onClick={() => sendEmail()}>
        <StyledLottie lottie={contactme} />
      </LottieWrapper>
    </Container>
  )
}
