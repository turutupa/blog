import React from "react"
import styled from "styled-components"

const Button = props => (
  <Container position={props.position}>
    <ButtonWrapper className="button" props={props} {...props}>
      {props.children}
    </ButtonWrapper>
  </Container>
)

const Container = styled.div`
  display: flex;
  justify-content: ${props => props.position || "center"};
  padding-top: 10px;
`

const ButtonWrapper = styled.button`
  transition: all 0.5s ease;
  display: block;
  border: 1px solid black;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 20px 40px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;

  width: ${props => props.props.width || "auto"};
  background: ${props => props.props.background || "rgb(0,0,0,0)"};
  color: ${props => props.props.color || "rgb(0,0,0)"};
  font-size: ${props => props.props.fontSize || "15px"};
  font-weight: ${props => props.props.fontWeight || "600"};
  border-radius: ${props => props.props.radius || "6px"};
  margin-top: ${props => props.props.marginTop};
  margin-bottom: ${props => props.props.marginBottom};
`

export default Button
