import React from 'react'
import { useHistory, useLocation, Link } from 'react-router-dom'

import styled from 'styled-components'

import brainLogo from '../assets/brain3.svg'
import arrow from '../assets/arrow.svg'
import hamburger from '../assets/hamburger-head.png'

const HeaderNav = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.blue};
  padding: 0 50px 5px 50px;

  @media(max-width: 750px){
    // justify-content: flex-end;
    align-items: center;
  }
`
const Back = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.orange};
  
  @media(max-width: 750px){
    display: none;
  }
`
const BackArrow = styled.img`
  width: 60px;
  margin: 0 20px;
`
const BackText = styled.h4`
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
`

const Forward = styled(Back)`
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  cursor: auto;
`
const ForwardGroup = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.orange};
`
const ForwardText = styled(BackText)`
`
const ForwardArrow = styled(BackArrow)`
  transform: rotateY(180deg);
`

const Lnk = styled.a`
  text-decoration: none;
  color: white;
`
const Section = styled.section`
  text-align: center;
  position: relative;
  left: 0%;
  opacity: 1;
  width: 375px;
  transition: all 1s linear;

  &:hover{
    left: -30%;
    opacity: 0;
    width: 575px;
  }
`
const Logo = styled.img`
  margin: 10px 0
`
const Title = styled.h1`
  font-family: 'Manrope', sans-serif;
  font-size: 28px;
  letter-spacing: 2px;
  font-weight: 700;
`
const HomeTitle = styled(Title)`
  position: relative;
  bottom: 33.33%;
  left: 38%;
  visibility: hidden;
`

export default function Header() {

  const history = useHistory()
  const location = useLocation()

  const paths = [
    {
      path: '/research',
      name: 'Research'
    }, {
      path: '/writing',
      name: 'Writing'
    }, {
      path: '/outreach',
      name: 'Outreach'
    }
  ]

  const goTo = paths.filter(path => path.path !== location.pathname)

  return (
    <HeaderNav id='top'>
      <Back onClick={() => history.goBack()}
        style={location.pathname === '/' ? { visibility: 'hidden' } : { visibility: 'visible' }}
      >
        <BackArrow src={arrow} alt='left-arrow' />
        <BackText>Go Back</BackText>
      </Back>

      <Lnk href='/'>
        <Section className='container'>
          <Logo src={brainLogo} alt="brain-logo" />
          <Title>Ashlea A. Morgan</Title>
        </Section>
        <HomeTitle id="home">Home</HomeTitle>
      </Lnk>

      <Forward style={location.pathname === '/' ? { visibility: 'hidden' } : { visibility: 'visible' }}>
        <ForwardGroup to={goTo[0].path}>
          <ForwardText>{goTo[0].name}</ForwardText>
          <ForwardArrow src={arrow} alt='right-arrow' />
        </ForwardGroup>

        <ForwardGroup to={goTo[1].path}>
          <ForwardText>{goTo[1].name}</ForwardText>
          <ForwardArrow src={arrow} alt='right-arrow' />
        </ForwardGroup>
      </Forward>
      <div>
        <img src={hamburger} alt="menu" />
      </div>
    </HeaderNav>

  )
}
