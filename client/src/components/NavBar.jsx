import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

import hamburger from '../assets/hamburger.png'
import close from '../assets/close.png'

// animation
const slideUp = keyframes`
  0%{bottom: -10%; opacity: 0; border-bottom: ${({ theme }) => theme.blue} solid 1px}
  50%{bottom: -5%; opacity: .5; border-bottom: ${({ theme }) => theme.blue} solid 1px}
  100%{bottom: 0%; opacity: 1}

`

const Main = styled.nav`
  height: 100px;
  width: 100vw;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.blue};
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

  @media(max-width: 750px){
    display: none
  }
`
const Btn = styled.button`
  padding: 12px;
  width: 200px;
  background-color: ${({ theme }) => theme.orange};
  color: ${({ theme }) => theme.blue};
  border: ${({ theme }) => theme.orange} solid 1px;
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

const HamburgerMenu = styled.div`
  display: none;

  @media(max-width: 750px){
    display: block;
  }
`
const Modal = styled.div`
  position: fixed;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
  // background-color: ${({ theme }) => theme.blue};
  background-color: rgba(0,0,0,.7)
`
const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: red solid 2px;
  
`
const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  font-family: 'Julius Sans One', sans-serif;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 8px;
  background-color: ${({ theme }) => theme.blue};
`
const Close = styled.img`
  position: absolute;
  right: 0%;
  top: 0%;
  margin: 50px;
`
const Lnk = styled.a`
  text-decoration: none;
  color: white;
  margin: 40px 0px;
`

export default function NavBar() {
  const [modal, setModal] = useState(true)


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
      <HamburgerMenu>
        <img src={hamburger} alt='hamburger-menu' onClick={() => setModal(true)} />
        <Modal style={modal ? { display: 'block' } : { display: 'none' }}>
          <Navigation>
            <Close src={close} alt='close' onClick={() => setModal(false)}/>
            <List>
              <Lnk href="#work" onClick={() => setModal(false)}>What I Do</Lnk>
              <Lnk href="https://mango-mosaic.netlify.app/blog" target='_blank' rel="noopener noreferrer" onClick={() => setModal(false)}>Blog</Lnk>
              <Lnk href="#contact" onClick={() => setModal(false)}>Contact Me</Lnk>
            </List>
          </Navigation>
        </Modal>
      </HamburgerMenu>
    </Main>
  )
}
