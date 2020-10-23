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

  @media(max-width: 750px){
    // flex-direction: column;
  }
`

export default function Footer() {

  return (
    <Foot>
      <h4>&#169; by Ashlea A. Morgan </h4>
      <h4>Crafted by Stefon Simmons</h4>
      <SocialMedias />
    </Foot>
  )
}
