import React, { useState } from 'react'
import { sendEmail } from '../services/sendEmail'
import ashlea from '../assets/ashlea-contact.WebP'

import styled, { keyframes } from 'styled-components'

import { ColorBar, HeaderTitle } from './WhatIDo'

const flashIn = keyframes`
  from{
    box-shadow: 5px 5px 0px ${({ theme }) => theme.offWhite};
    background-color: ${({ theme }) => theme.offWhite};
  }
  to{
    box-shadow: 5px 5px 0px ${({ theme }) => theme.blue};
    background-color: rgb(0,100,0);
  }
`

const Bar = styled(ColorBar)`
  border-top: solid rgba(222,196,94,0) 10px;
  background-color: ${({ theme }) => theme.orange};
`
const ContactSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.orange};
  font-family: 'Manrope', sans-serif;
  letter-spacing: 2px;
  font-weight: 700;
  padding-bottom: 95px;

  @media(max-width: 1000px){
    flex-direction: column
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 50%;
  border-radius: 5px;
  padding: 30px 25px;

  @media(max-width: 1000px){
    width: 75%;
  }
  @media(max-width: 450px){
    width: 100%;
    padding: 30px 0px;
  }
`
const Title = styled(HeaderTitle)`
  color: ${({ theme }) => theme.blue};
  margin-bottom: 20px;
`
const Image = styled.img`
  width: 50%;
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
  background: ${({ theme }) => theme.orange};
  border: ${({ theme }) => theme.blue} solid 1px;
  color: ${({ theme }) => theme.blue};

  &::placeholder{
    color: ${({ theme }) => theme.blue}
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
background: ${({ theme }) => theme.orange};
border: ${({ theme }) => theme.blue} solid 1px;
color: ${({ theme }) => theme.blue};

&::placeholder{
  color: ${({ theme }) => theme.blue}
}
`
const SendBtn = styled.button`
  position: relative;
  bottom: 4%;
  width: 150px;
  height: 60px;
  padding: ${(({ disabled }) => disabled && '0 15px')};
  border: ${({ theme, disabled }) => !disabled ? theme.blue : theme.greyDisabled} 1px solid;
  background-color: ${({ theme, disabled }) => !disabled ? 'white' : theme.whiteDisabled};
  color: ${({ theme, disabled }) => !disabled ? theme.blue : theme.greyDisabled};
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  letter-spacing: 4px;
  transition: all .3s ease-in-out;
  cursor: pointer;
  
  &:hover{
    transform: ${({ disabled }) => !disabled ? "scale(1.05)" : "scale(1)"};
    box-shadow: ${({ theme, disabled }) => !disabled ? `5px 5px 0px ${theme.blue}` : 'none'};
    background-color: ${({ theme, disabled }) => !disabled && theme.offWhite};
    font-weight: ${({ disabled }) => !disabled && '700'};
  }
`
const ThankYouMsg = styled.h4`
  padding: 18px;
  font-size: 24px;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.offWhite};
  box-shadow: 5px 5px 0px ${({ theme }) => theme.blue};
  background-color: rgb(0,100,0);
  animation: ${flashIn} 1s ease-in-out;

  @media(max-width: 500px){
    padding: 10px;
    text-align: center;
  }
`

export default function ContactMe() {
  const [sent, updateSent] = useState('')
  const [emailData, setEmailData] = useState(
    {
      name: '',
      fromEmail: '',
      subject: '',
      message: ''
    }
  )

  const handleChange = (e) => {
    updateSent({ msg: '' })
    const { name, value } = e.target
    setEmailData({
      ...emailData,
      [name]: value
    })
  }

  const { name, fromEmail, subject, message } = emailData

  const handleSubmit = async () => {
    const response = await sendEmail(emailData)
    setEmailData({
      name: '',
      fromEmail: '',
      subject: '',
      message: ''
    })
    updateSent(response.data)

  }

  return (
    <>
      <Bar id='contact'>
        <Title>Contact Me</Title>
      </Bar>
      <ContactSection>
        <Form>
          <Input
            type="text"
            className='input'
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e) => handleChange(e)}
          />
          <Input
            type="text"
            className='input'
            placeholder='Email'
            name='fromEmail'
            value={fromEmail}
            onChange={(e) => handleChange(e)}
          />
          <Input
            type="text"
            className='input'
            placeholder='Subject'
            name='subject'
            value={subject}
            onChange={(e) => handleChange(e)}
          />
          <Message
            type="text"
            className='input'
            placeholder='Type your message here...'
            name='message'
            value={message}
            onChange={(e) => handleChange(e)}
          />
          {!sent.msg &&
            <SendBtn onClick={() => {
              updateSent({ msg: 'sending' })
              handleSubmit()
            }} type="button">Send</SendBtn>
          }
          {sent.msg === 'sending' &&
            <SendBtn disabled type="button" sendingColor="grey">Sending</SendBtn>
          }
          {sent.msg === 'success' &&
            <ThankYouMsg>Thanks for the Message!</ThankYouMsg>
          }
        </Form>
        <Image src={ashlea} alt="ashlea" />
      </ContactSection>
    </>
  )
}
