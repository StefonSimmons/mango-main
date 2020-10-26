import React from 'react'
import NavBar from './NavBar'
import styled, { keyframes } from 'styled-components'

import ashlea from '../assets/ashlea1.WebP'

// animations
export const fadeIn = keyframes`
  0%{opacity: 0}
  100%{opactiy: 1}
`
const Main = styled.div`
  display: flex;
  justify-content: space-between;

  @media(max-width: 850px){
    flex-direction: column-reverse;
  }
`
const LeftArea = styled.div`
  background-color: ${({theme})=> theme.blue};
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width: 850px){
    width: 100%
  }
`
const ColorBlock = styled.section`
  font-family: 'Manrope', sans-serif;
  width: 85%;
  position: relative;
  padding: 30px 25px;
  border-radius: 5px;
  left: 20%;
  background-color: ${({ theme }) => theme.orange};
  
  @media(max-width: 950px){
    padding: 15px 12px;
  }
  @media(max-width: 850px){
    width: 50%;
    left: 0%;
  }
  @media(max-width: 450px){
    width: 90%
  }
`
const Titles = styled.section`
  text-align: left;
  font-size: 40px;
  font-weight: 700;
  line-height: 2em;
  color: ${({ theme }) => theme.blue};
  
  @media(max-width: 650px){
    font-size: 28px;
  }
`
const Title = styled.h2`
  animation: ${fadeIn} 1.5s ease-in-out;
`
const Image = styled.img`
  width: 50%;

  @media(max-width: 850px){
    width: 100%;
  }
`

export default function HomeHeader() {
  return (
    <>
      <Main>
        <LeftArea>
          <ColorBlock>
            <Titles>
              <Title>Neuroscientist.</Title>
              <Title>Ph.D Candidate.</Title>
              <Title>Writer.</Title>
            </Titles>
          </ColorBlock>
        </LeftArea>
        <Image src={ashlea} alt="ashlea" />
      </Main>
      <NavBar/>
    </>
  )
}
