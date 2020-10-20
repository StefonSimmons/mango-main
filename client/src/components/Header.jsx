import React from 'react'
import { useHistory, useLocation, Link } from 'react-router-dom'

import styled from 'styled-components'

import brainLogo from '../assets/brain3.png'
import arrow from '../assets/arrow.svg'


const HeaderTag = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: rgb(14,24,84);
  padding: 0 50px 5px 50px
`
const Back = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: rgb(233,115,40);
`
const BackArrow = styled.img`
  width: 60px;
  margin: 0 20px
`
const BackText = styled.h4`
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
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
const Forward = styled(Back)`
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  cursor: auto;
`
const Group = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: rgb(233,115,40);
`
const ForwardText = styled(BackText)`
`
const ForwardArrow = styled(BackArrow)`
  transform: rotateY(180deg)
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
    <HeaderTag id='top'>
      <Back onClick={() => history.goBack()}
        style={location.pathname === '/' ? { visibility: 'hidden' } : { visibility: 'visible' }}
      >
        <BackArrow src={arrow} alt='left-arrow' />
        <BackText>Back</BackText>
      </Back>

      <Lnk href='/'>
        <Section className='container'>
          <Logo src={brainLogo} alt="brain-logo" />
          <Title>Ashlea A. Morgan</Title>
        </Section>
        <HomeTitle id="home">Home</HomeTitle>
      </Lnk>

      <Forward style={location.pathname === '/' ? { visibility: 'hidden' } : { visibility: 'visible' }}>
        <Group to={goTo[0].path}>
          <ForwardText>{goTo[0].name}</ForwardText>
          <ForwardArrow src={arrow} alt='right-arrow' />
        </Group>

        <Group to={goTo[1].path}>
          <ForwardText>{goTo[1].name}</ForwardText>
          <ForwardArrow src={arrow} alt='right-arrow' />
        </Group>
      </Forward>
    </HeaderTag>

  )
}
