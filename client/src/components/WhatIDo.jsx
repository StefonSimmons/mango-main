import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import outreachImg from '../assets/outreach.png'
import writingImg from '../assets/writing.png'
import researchImg from '../assets/research.png'

export const HeaderBar = styled.div`
  height: 75px;
  width: 100vw;
  padding: 25px 0;
  background-color: rgb(14,24,84);
  display: flex;
  align-items: center;
  justify-content: center;
`
export const HeaderTitle = styled.h2`
  text-align: center;
  font-family:'Manrope', sans-serif;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 5px;
  color: rgb(233,115,40);
`
const WorkContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const Work = styled.section`
  height: 70vh;
  width: 33.33%;
  display: flex;
  align-items: flex-end;
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: rgba(14,24,84,.35);
  font-family: 'Manrope', sans-serif;
`
const Title = styled.h3`
  color: rgb(14,24,84);
  background: rgba(233,115,40,.9);
  box-shadow: 0px 0px 10px 5px rgba(14,24,84,.2);
  border-radius: 5px;
  padding: 5px 20px;
  margin-bottom: 50px;
  letter-spacing: 5px;
  font-size: 36px;
`
export const Btn = styled.button`
  background-color: rgba(0,0,0,0);
  color: white;
  font-size: 24px;
  border: rgb(233,115,40) 1px solid;
  padding: 15px 30px;
  transition: all .3s ease-in-out;
  
  &:hover{
    background-color: rgba(255,135,60,1);
    transform: scale(1.05);
    font-weight: 700;
    box-shadow: 5px 5px 0px rgb(233,115,40);
    border: rgba(255,135,60,.1) 1px solid;
    color: black

  }

`

export default function WhatIDo() {

  // background image styles
  const writing = {
    backgroundImage: `url(${writingImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
  const outreach = {
    backgroundImage: `url(${outreachImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'

  }
  const research = {
    backgroundImage: `url(${researchImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'

  }
  const iDoArr = [
    {
      text: 'writing',
      style: writing
    },
    {
      text: 'research',
      style: research
    },
    {
      text: 'outreach',
      style: outreach
    }
  ]
  const iDo = iDoArr.map((work,idx )=> {
    const formatedText = work.text.charAt(0).toUpperCase().concat(work.text.slice(1)) //proper case
    return (
      <Work key={idx} style={work.style}>
        <Box>
          <Title>{formatedText}</Title>
          <Link to={`/${work.text}`}>
            <Btn>Go to</Btn>
          </Link>
        </Box>
      </Work>
    )
  })

  return (
    <>
      <HeaderBar id='work'>
        <HeaderTitle>What I Do</HeaderTitle>
      </HeaderBar>
      <WorkContainer >
        {iDo}
      </WorkContainer>
      <HeaderBar>
      </HeaderBar>
    </>
  )
}
