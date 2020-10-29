import React, { useEffect } from 'react'
import Articles from './Articles'
import { articleData } from '../data/data.js'

import writing from '../assets/writing.WebP'

import styled from 'styled-components'

export const Background = styled.div`
  background-image: url(${writing});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 75vh;
  display: flex;
  align-items: center;
  padding: 0px 200px;

  @media(max-width: 750px){
    justify-content: center;
  }
  @media(max-width: 400px){
    padding: 0px;
    background-attachment: scroll;
  }
`
export const Title = styled.h1`
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 56px;
  letter-spacing: 4px;
  color: white;
`
export const WritingSection = styled.section`
  background-color: ${({theme})=> theme.orange};
  height: 100%;
`

export default function Writing() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Background>
        <Title>Writing</Title>
      </Background>
      <WritingSection>
        <Articles articleData={articleData} />
      </WritingSection>
    </div>
  )
}
