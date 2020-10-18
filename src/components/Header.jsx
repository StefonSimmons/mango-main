import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

import brainLogo from '../assets/brain2.jpeg'

// animations
const phase = keyframes`
  0%{ 
    left:0% 
  }
  25%{ 
    left:-1% 
  }
  50%{ 
    left:0% 
  }
  75%{ 
    left:1% 
  }
  100%{ 
    left:0% 
  }
`
const fadeOut = keyframes`
  from{
    opacity:1
  }
  to{
    opacity:0
  }
`

const HeaderTag = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`
const Lnk = styled(Link)`
  text-decoration: none;
  color: black;
  position: relative;

  &:hover{
    animation: ${phase} .1s linear infinite;
  }
`
const Section = styled.section`
  text-align: center;
  font-family: 'Manrope', sans-serif;
  font-size: 28px;
  letter-spacing: 2px;
  font-weight: 700;

  &:hover{
    animation: ${fadeOut} 1.5s linear;
  }
`
const Logo = styled.img`
  margin: 10px 0
`


export default function Header() {
  return (
    <HeaderTag>
      <Lnk to='/'>
        <Section>
          <Logo src={brainLogo} alt="brain-logo" />
          <h1>Ashlea A. Morgan</h1>
        </Section>
      </Lnk>
    </HeaderTag>

  )
}
