import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'

const LinkList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px
`
const MediumLnk = styled.a`
  color: rgb(38,38,38);
  text-decoration: none
`
const Item = styled(Link)`
  cursor: pointer
`

export default function SocialMedias() {
  return (
    <LinkList>
      <Item><img src={twitter} alt="twitter-icon" /></Item>
      <Item><img src={linkedin} alt="linkedin-icon" /></Item>
      <MediumLnk href='https://medium.com/@ashleaamorgan' target='_blank' >Medium</MediumLnk>
    </LinkList>
  )
}
