import React from 'react'
import ashlea from '../assets/ashlea-contact.WebP'

import styled from 'styled-components'
import { HeaderBar, HeaderTitle } from './WhatIDo'

const Bar = styled(HeaderBar)`
  border-top: solid rgba(222,196,94,0) 10px;
  background-color: rgb(233,115,40)
`
const ContactSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(233,115,40);
  font-family: 'Manrope', sans-serif;
  letter-spacing: 2px;
  font-weight: 700;
  padding-bottom: 95px
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 50%;
  border-radius: 5px;
  padding: 30px 25px;
`
const Title = styled(HeaderTitle)`
  color: rgb(14,24,84);
  margin-bottom: 20px;
`
const Image = styled.img`
  width: 50%
  height: 50%;
`
const Input = styled.input`
  height: 60px;
  width: 66%;
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 0 20px;
  margin: 8px 0;
  background: rgba(0,0,0,0);
  border: rgb(14,24,84) solid 1px;
  color: rgb(14,24,84);

  &::placeholder{
    color: rgb(14,24,84)
  }
`
const Message = styled.textarea`
height: 180px;
width: 66%;
font-family: 'Manrope', sans-serif;
font-size: 18px;
font-weight: 700;
letter-spacing: 2px;
padding: 20px;
margin: 8px 0;
background: rgba(0,0,0,0);
border: rgb(14,24,84) solid 1px;
color: rgb(14,24,84);

&::placeholder{
  color: rgb(14,24,84)
}
`
const SendBtn = styled.input`
  position: relative;
  bottom: 4%;
  width: 150px;
  height: 60px;
  border: rgb(14,24,84) 1px solid;
  background: rgba(255,255,255);
  color: rgb(14,24,84);
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  letter-spacing: 4px;
  transition: all .3s ease-in-out;
  
  &:hover{
    transform: scale(1.05);
    box-shadow: 5px 5px 0px rgb(14,24,84);
    background-color: rgb(235,235,235);
    font-weight: 700
  }
`

export default function ContactMe() {
  return (
    <>
      <Bar id='contact'>
        <Title>Contact Me</Title>
      </Bar>
      <ContactSection>
        <Form onSubmit={''}>
          <Input type="text" className='input' placeholder='Name' />
          <Input type="text" className='input' placeholder='Email' />
          <Input type="text" className='input' placeholder='Subject' />
          <Message type="text" className='input' placeholder='Type your message here...' />
          <SendBtn type="submit" value="Send!" />
        </Form>
        <Image src={ashlea} alt="" />
      </ContactSection>
    </>
  )
}
