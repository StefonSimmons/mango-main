import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import styled from 'styled-components'

import brainLogo from '../assets/brain3.png'
import arrow from '../assets/arrow.svg'


const HeaderTag = styled.header`
  display: flex;
  background-color: rgb(14,24,84);
  padding: 0 50px 5px 50px
`
const Back = styled.div`
  display: flex;
  flex-basis: 39%;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  color: rgb(233,115,40);

`
const Arrow = styled.img`
  width: 60px;
  margin: 0 20px
`
const BackText = styled.h4`
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
`
const Lnk = styled.a`
  text-decoration: none;
  color: white;
  flex-basis: 60%;
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
  left: 14%;
  visibility: hidden;
`

export default function Header() {

  const history = useHistory()
  const location = useLocation()
  console.log(location.pathname)
  return (
    <HeaderTag id='top'>
      <Back onClick={() => history.goBack()}
        style={location.pathname === '/' ? { visibility: 'hidden' } : { visibility: 'visible' }}
      >
        <Arrow src={arrow} alt='left-arrow' />
        <BackText>What I Do</BackText>
      </Back>
      <Lnk href='/'>
        <Section className='container'>
          <Logo src={brainLogo} alt="brain-logo" />
          <Title>Ashlea A. Morgan</Title>
        </Section>
        <HomeTitle id="home">Home</HomeTitle>
      </Lnk>
    </HeaderTag>

  )
}
