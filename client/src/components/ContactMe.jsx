import React, { useState } from 'react'
import { sendEmail } from '../services/sendEmail'
import ashlea from '../assets/ashlea-contact.WebP'

import styled, { keyframes } from 'styled-components'
import { HeaderBar, HeaderTitle } from './WhatIDo'

const flashIn = keyframes`
  from{
    box-shadow: 5px 5px 0px rgb(235,235,235);
    background-color: rgb(235,235,235);
  }
  to{
    box-shadow: 5px 5px 0px rgb(14,24,84);
    background-color: rgb(0,100,0);
  }
`

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
  background-color: rgba(255,255,255);
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
const ThankYouMsg = styled.h4`
  padding: 18px;
  font-size: 24px;
  letter-spacing: 3px;
  color: rgb(235,235,235);
  box-shadow: 5px 5px 0px rgb(14,24,84);
  background-color: rgb(0,100,0);
  animation: ${flashIn} 1s ease-in-out
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

  const handleSubmit = async (e) => {
    e.preventDefault()
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
        <Form onSubmit={handleSubmit}>
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
          {sent.msg === 'success' ?
            <ThankYouMsg>Thanks for the Message!</ThankYouMsg>
            :
            <SendBtn type="submit" value="Send!" />
          }
        </Form>
        <Image src={ashlea} alt="" />
      </ContactSection>
    </>
  )
}
