import React from 'react'
import styled from 'styled-components'
import SocialMedias from './SocialMedias'

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
export default function Footer() {
  return (
    <Foot>
      <h5>&#169; by Ashlea A. Morgan</h5>
      <SocialMedias />
    </Foot>
  )
}
