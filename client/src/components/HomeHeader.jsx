import React from 'react'
import styled, { keyframes } from 'styled-components'

import ashlea from '../assets/ashlea1.png'

// animations
export const fadeIn = keyframes`
  0%{opacity: 0}
  100%{opactiy: 1}
`
const slideIn = keyframes`
  0%{bottom: -10%; opacity: 0; border-bottom: rgb(14,24,84) solid 1px}
  50%{bottom: -5%; opacity: .5; border-bottom: rgb(14,24,84) solid 1px}
  100%{bottom: 0%; opacity: 1}
`


const Main = styled.div`
  display: flex;
  justify-content: space-between;
`
const LeftArea = styled.div`
  background-color: rgb(14,24,84);
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
  background-color: rgb(233,115,40)
`
const Titles = styled.section`
  text-align: left;
  font-size: 40px;
  font-weight: 700;
  line-height: 2em;
  color: rgb(14,24,84)
`
const Title = styled.h2`
  animation: ${fadeIn} 1.5s ease-in-out;
`
const NavBar = styled.nav`
  height: 100px;
  width: 100vw;
  padding: 20px 0;
  background-color: rgb(14,24,84);
  display: flex;
  align-items: center;
  justify-content: center;
  // border-bottom: solid rgb(59,150,201) 10px;
  // border-bottom: solid rgb(222,196,94) 10px;
`
const BtnSection = styled.section`
  display: flex;
  justify-content: space-around;
  width: 50%;

  position: relative;
  animation: ${slideIn} 1.5s linear;
`
const Btn = styled.button`
  padding: 12px;
  width: 200px;
  background-color: rgba(233,115,40, 0);
  color: white;
  border: rgb(233,115,40) solid 1px;
  transition: all .3s ease-in-out;
  font-size: 24px;

  &:hover{
    transform: scale(1.05);
    background-color: rgb(255,135,60);
    color: black;
    box-shadow: 10px 10px 0px rgb(213,95,20);
    border-radius: 5px;
    font-weight: 700;
  }
`
const Image = styled.img`
  width: 50%;
`

export default function HomeHeader({setArrow}) {
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
      <NavBar>
        <BtnSection>
          <a href='#work' onClick={()=> setArrow(true)}>
            <Btn>What I Do</Btn>
          </a>
          <a href="https://mango-mosaic.netlify.app/blog" target='_blank' rel="noopener noreferrer">
            <Btn>Blog</Btn>
          </a>
          <a href='#contact' onClick={()=> setArrow(true)}>
            <Btn>Contact Me</Btn>
          </a>
        </BtnSection>
      </NavBar>
    </>
  )
}
