import React, { useEffect } from 'react'
import Articles from './Articles'
import { articleData } from '../data/data.js'

import writing from '../assets/writing.WebP'

import styled from 'styled-components'
import {orange} from './style-themes/style-themes'

export const Background = styled.div`
  background-image: url(${writing});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 75vh;
  display: flex;
  align-items: center;
  padding: 0px 200px
`
export const Title = styled.h1`
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 48px;
  letter-spacing: 4px;
  color: white;
`
export const WritingSection = styled.section`
  background-color: ${orange};
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
