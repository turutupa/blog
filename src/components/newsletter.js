import React from "react"
import styled from "styled-components"
import addToMailchimp from "gatsby-plugin-mailchimp"

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 75px;
  margin-bottom: 0;
`

const Card = styled.div`
  border-radius: 10px;
  padding: 30px;
`

const CardTitle = styled.div`
  font-family: Montserrat;
  font-size: 1.4rem;
  font-weight: bolder;
`

const CardBody = styled.div`
  font-family: Merriweather;
`
const InputWrapper = styled.div`
  position: relative;
`

const Input = styled.input`
  display: block;
  padding: 14px;
  padding-right: 150px;
  margin-top: 24px;
  margin-bottom: 14px;
  border-radius: 10px;
  width: 100%;
  outline: none;
  border: none;
  border-style: solid;
  border-color: grey;
  border-width: 1px;
  background-color: #f3f3f3;

  &:focus {
    box-shadow: 3px 3px #00ab84;
  }
`

const SubscribeButton = styled.button`
  position: absolute;
  right: 10px;
  bottom: 8px;
  font-size: 0.8rem;
  border-radius: 10px;
  border: none;
  font-family: Montserrat;
  font-weight: bolder;
  padding: 10px 18px;
  cursor: pointer;
  outline: none;

  &:active {
    filter: brightness(1.1);
  }
`

const SubscriptionMsg = styled.em``

export default function SubscriptionNewsletter() {
  const [mailChimpMsg, setMailChimpMsg] = React.useState("")
  const [email, setEmail] = React.useState("")

  async function handleSubmit(e) {
    try {
      e.preventDefault()
      const result = await addToMailchimp(email)
      setMailChimpMsg(result.msg)
    } catch (e) {
      setMailChimpMsg("Oops! Something went wrong!")
    }
  }

  return (
    <Container>
      <Card className="subscribe-card">
        <CardTitle>Subscribe to newsletter</CardTitle>
        <CardBody>
          I am running a newsletter with my blog updates. Subscribe so you don't
          miss them!
          <form onSubmit={handleSubmit}>
            <InputWrapper>
              <Input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <SubscribeButton type="submit" className="subscribe-button">
                SUBSCRIBE
              </SubscribeButton>
            </InputWrapper>
            <SubscriptionMsg
              dangerouslySetInnerHTML={{ __html: mailChimpMsg }}
            ></SubscriptionMsg>
          </form>
        </CardBody>
      </Card>
    </Container>
  )
}
