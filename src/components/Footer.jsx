import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'

const Foot = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 60px;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 3px;
  height: 100px;
`
const LinkList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 12%
`
const MediumLnk = styled(Link)`
  color: rgb(38,38,38);
  text-decoration: none
`
const Item = styled(Link)`
  cursor: pointer
`

export default function Footer() {
  return (
    <Foot>
      <h5>&#169; by Ashlea A. Morgan</h5>
      <LinkList>
        <Item><img src={twitter} alt="twitter-icon"/></Item>
        <Item><img src={linkedin} alt="linkedin-icon"/></Item>
        <MediumLnk to='https://medium.com/@ashleaamorgan'>Medium</MediumLnk>
      </LinkList>
    </Foot>
  )
}
