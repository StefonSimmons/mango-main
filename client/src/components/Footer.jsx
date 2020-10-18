import React from 'react'
import styled from 'styled-components'
import SocialMedias from './SocialMedias'

import arrow from '../assets/arrow.svg'

const Foot = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px 0px;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 3px;
  height: 100px;
`
const Arrow = styled.img`
  opacity: .75;
  position: fixed;
  bottom: 5%;
`

export default function Footer({ arrowHead }) {



  return (
    <Foot>
      {arrowHead ? <Arrow src={arrow} alt="up-arrow" /> : null}
      <h5>&#169; by Ashlea A. Morgan</h5>
      <SocialMedias />
    </Foot>
  )
}
