import React from 'react'
import {useLocation} from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

import ashlea from '../assets/ashlea1.png'


const Main = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
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
  width: 350px;
`
// animation
export const fadeIn = keyframes`
  0%{opacity: 0}
  100%{opactiy: 1}
`
const slideIn = keyframes`
  0%{left: 100%; opacity: 0}
  100%{left: 0%; opacity: 1}
`
const Titles = styled.section`
  text-align: left;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.35em;
  color: rgb(233,115,40);
`
const Title = styled.h2`
  animation: ${fadeIn} 1.5s ease-in-out;
`
const BtnSection = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 15px 0;
  position: relative;
  animation: ${slideIn} 1.5s linear;

`
const Btn = styled.button`
  padding: 6px;
  width: 100px;
  background-color: rgb(233,115,40);
  border: rgb(233,115,40);
  border-radius: 5px;
  box-shadow: 5px 5px 0px rgb(233,115,40);
  transition: all .3s ease-in-out;

  &:hover{
    transform: scale(1.05);
    background-color: rgb(255,135,60);
    box-shadow: 5px 5px 0px rgb(213,95,20);
  }
`

const Image = styled.img`
  width: 50%;
`

export default function HomeHeader() {

  const location = useLocation()
  console.log(location.hash)
  return (
    <Main>
      <LeftArea>
        <Center>
          <Titles>
            <Title>Neuroscientist.</Title>
            <Title>PH.D Candidate.</Title>
            <Title>Writer.</Title>
          </Titles>
          <BtnSection>
            <a href='#work'>
              <Btn>What I Do</Btn>
            </a>
            <a href="https://mango-mosaic.netlify.app/blog" target='_blank' rel="noopener noreferrer">
              <Btn>Blog</Btn>
            </a>
            <Btn>Contact Me</Btn>
          </BtnSection>
        </Center>
      </LeftArea>
      <Image src={ashlea} alt="ashlea" />
    </Main>
  )
}
