import React from 'react'
import styled, { keyframes } from 'styled-components'


// animation
const slideUp = keyframes`
  0%{bottom: -10%; opacity: 0; border-bottom: ${({theme})=> theme.blue} solid 1px}
  50%{bottom: -5%; opacity: .5; border-bottom: ${({theme})=> theme.blue} solid 1px}
  100%{bottom: 0%; opacity: 1}
`

const Main = styled.nav`
  height: 100px;
  width: 100vw;
  padding: 20px 0;
  background-color: ${({theme})=> theme.blue};
  display: flex;
  align-items: center;
  justify-content: center;
`
const BtnSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  position: relative;
  animation: ${slideUp} 1.5s linear;
`
const Btn = styled.button`
  padding: 12px;
  width: 200px;
  background-color: ${({theme})=> theme.orange};
  color: ${({theme})=> theme.blue};
  border: ${({theme})=> theme.orange} solid 1px;
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

export default function NavBar() {
  return (
    <Main>
      <BtnSection>
        <a href='#work'>
          <Btn>What I Do</Btn>
        </a>
        <a href="https://mango-mosaic.netlify.app/blog" target='_blank' rel="noopener noreferrer">
          <Btn>Blog</Btn>
        </a>
        <a href='#contact'>
          <Btn>Contact Me</Btn>
        </a>
      </BtnSection>
    </Main>
  )
}
