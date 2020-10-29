import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import close from '../assets/close.png'


const HamburgerMenu = styled.div`
  display: none;

  @media(max-width: 750px){
    display: block;

  }
`
const Hamburger = styled.img`
  @media(max-width: 450px){width: 70px}
`
const Modal = styled.div`
  display: ${({ modal }) => modal ? 'block' : 'none'};
  position: fixed;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.7);
  z-index: 2
`
const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: rgba(14,24,84,.2) solid 2px;
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
  padding: 20px;
  background-color: ${({ theme }) => theme.blue};
  border-radius: 5px;
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
const Lnk2 = styled(Link)`
  text-decoration: none;
  color: white;
  margin: 40px 0px;
`
const BackTxt = styled.h4`
  color: white;
  margin: 40px 0px;
`

export default function ModalComponent({
  hamburger,
  navOneName,
  navOnePath,
  navTwoName,
  navTwoPath,
  history
}) {

  const [modal, setModal] = useState(false)
  const location = useLocation()

  return (
    <HamburgerMenu>
      <Hamburger src={hamburger} alt='hamburger-menu' onClick={() => setModal(true)} />
      { location.pathname === '/' ?
        < Modal modal={modal}>
          <Navigation>
            <Close src={close} alt='close' onClick={() => setModal(false)} />
            <List>
              <Lnk onClick={() => {
                setModal(false)
                window.scrollTo(0, 1730)
              }
              } to='#work'>What I Do</Lnk>
              <Lnk onClick={() => setModal(false)} href="https://mango-mosaic.netlify.app/blog" target='_blank' rel="noopener noreferrer">Blog</Lnk>
              <Lnk onClick={() => {
                setModal(false)
                window.scrollTo(0, 2435)
              }
              } to='#contact'>Contact</Lnk>
            </List>
          </Navigation>
        </Modal>
        :
        < Modal modal={modal}>
          <Navigation>
            <Close src={close} alt='close' onClick={() => setModal(false)} />
            <List>
              <BackTxt onClick={() => {
                history.goBack()
                setModal(false)
              }
              }>Back</BackTxt>
              <Lnk2 to={navOnePath} onClick={() => setModal(false)}>{navOneName}</Lnk2>
              <Lnk2 to={navTwoPath} onClick={() => setModal(false)}>{navTwoName}</Lnk2>
            </List>
          </Navigation>
        </Modal>
      }
    </HamburgerMenu >
  )
}
