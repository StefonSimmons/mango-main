import React from 'react'
import writing from '../assets/writing.png'

import styled from 'styled-components'

const Background = styled.div`
  background-image: url(${writing});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 75vh;
  display: flex;
  align-items: center;
  padding: 0px 200px
`
const Title = styled.h1`
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 48px;
  letter-spacing: 4px;
  color: white;
`
const WritingSection = styled.section`
  background-color: rgb(233,115,40);
  height: 100vh
`

export default function Writing() {
  return (
    <div>
      <Background>
        <Title>Writing</Title>
      </Background>
      <WritingSection>

      </WritingSection>
    </div>
  )
}
