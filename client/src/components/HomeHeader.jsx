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
`
const LeftArea = styled.div`
  background-color: ${({theme})=> theme.blue};
  font-family: 'Manrope', sans-serif;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Center = styled.section`
  width: 625px;
  position: relative;
  padding: 30px 25px;
  border-radius: 5px;
  left: 20%;
  background-color: ${({theme})=> theme.orange}
`
const Titles = styled.section`
  text-align: left;
  font-size: 40px;
  font-weight: 700;
  line-height: 2em;
  color: ${({theme})=> theme.blue}
`
const Title = styled.h2`
  animation: ${fadeIn} 1.5s ease-in-out;
`
const Image = styled.img`
  width: 50%;
`

export default function HomeHeader() {
  return (
    <>
      <Main>
        <LeftArea>
          <Center>
            <Titles>
              <Title>Neuroscientist.</Title>
              <Title>Ph.D Candidate.</Title>
              <Title>Writer.</Title>
            </Titles>
          </Center>
        </LeftArea>
        <Image src={ashlea} alt="ashlea" />
      </Main>
      <NavBar/>
    </>
  )
}
