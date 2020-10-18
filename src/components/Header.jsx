import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

import brainLogo from '../assets/brain2.jpeg'


const HeaderTag = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`
const Lnk = styled(Link)`
  text-decoration: none;
  color: black;
`
const Section = styled.section`
  text-align: center;
  position: relative;
  left: 0%;
  opacity: 1;
  width: 375px;
  transition: all 1s linear;

  &:hover{
    left: -30%;
    opacity: 0;
    width: 575px;
  }
`
const Logo = styled.img`
  margin: 10px 0
`
const Title = styled.h1`
  font-family: 'Manrope', sans-serif;
  font-size: 28px;
  letter-spacing: 2px;
  font-weight: 700;
`
const HomeTitle = styled(Title)`
  position: relative;
  bottom: 33.33%;
  left: 33.33%;
  visibility: hidden;
`

export default function Header() {



  return (
    <HeaderTag>
      <Lnk to='/'>
        <Section className='container'>
          <Logo src={brainLogo} alt="brain-logo" />
          <Title>Ashlea A. Morgan</Title>
        </Section>
        <HomeTitle id="home">Home</HomeTitle>
      </Lnk>
    </HeaderTag>

  )
}
