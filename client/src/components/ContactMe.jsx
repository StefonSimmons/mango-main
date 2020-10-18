import React from 'react'
import ashlea from '../assets/ashlea-contact.png'
import styled from 'styled-components'
import {HeaderBar} from './WhatIDo'
import { AboutTitle } from '../components/About'

const ContactSection = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgb(233,115,40);
  font-family: 'Manrope', sans-serif;
  letter-spacing: 2px;
  font-weight: 700
`
const Bar = styled(HeaderBar)`
  border-top: solid rgb(59,150,201, 0) 10px;
  border-bottom: solid rgb(59,150,201) 10px;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`
const Title = styled(AboutTitle)`
  color: rgb(14,24,84);
  margin-bottom: 20px;
`
const Image = styled.img`
  width: 50%
`
const Input = styled.input`
  height: 60px;
  width: 66%;
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  letter-spacing: 2px;
  padding: 0 20px;
  margin: 8px 0;
  background: rgba(0,0,0,0);
  border: white solid 1px;
  color: white;

  &::placeholder{
    color: white
  }
`
const Message = styled.textarea`
height: 180px;
width: 66%;
font-family: 'Manrope', sans-serif;
font-size: 18px;
letter-spacing: 2px;
padding: 20px;
margin: 8px 0;
background: rgba(0,0,0,0);
border: white solid 1px;
color: white;

&::placeholder{
  color: white
}
`
const SendBtn = styled.input`
  position: relative;
  bottom: 4%;
  width: 150px;
  height: 60px;
  border: white 1px solid;
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  letter-spacing: 2px;
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
      <Bar></Bar>
      <ContactSection id='contact'>
        <Form onSubmit={''}>
          <Title>Contact Me</Title>
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
