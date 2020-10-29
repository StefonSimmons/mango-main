import React from 'react'
import { researchData } from '../data/data.js'

import styled from 'styled-components'

import { Btn } from './WhatIDo'

const ResearchDetail = styled.article`
  color: white;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  line-height: 1.75;
  letter-spacing: 1.75px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`
const Publication = styled.p`
  width: 50%;
  margin: 20px 0;

  @media(max-width: 1000px){
    width: 75%;
    font-size: 18px;
  }
`

export default function ResearchArticles() {

  const research = researchData.map((research, idx) => {
    return (
      <ResearchDetail key={idx}>
        <Publication>{research.publication}</Publication>
        <a href={research.url} target='_blank' rel='noopener noreferrer'>
          <Btn>Go to</Btn>
        </a>
      </ResearchDetail>
    )
  })

  return (
    <>
      {research}
    </>
  )
}
