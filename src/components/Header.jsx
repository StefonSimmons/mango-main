import React from 'react'
import styled from 'styled-components'

import brainLogo from '../assets/brain2.jpeg'

const HeaderTag = styled.header`
  display: flex;
  justify-content: center
`
const Section = styled.section`
  text-align: center;
  font-family: 'Manrope', sans-serif;
  font-size: 18px
`
const Logo = styled.img`
  margin: 10px 0
`

export default function Header() {
  return (
    <HeaderTag>
      <Section>
        <Logo src={brainLogo} alt="brain-logo" />
        <h1>Ashlea A. Morgan</h1>
      </Section>
    </HeaderTag>
  )
}
