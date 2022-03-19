import React from 'react'
import styled from 'styled-components'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'

const LinkList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;

  @media(max-width: 750px){
    width: 90%;
    margin-bottom: 20px 
`
const MediumLnk = styled.a`
  color: rgb(38,38,38);
  text-decoration: none
`
const Item = styled.a`
  cursor: pointer
`

export default function SocialMedias() {
  return (
    <LinkList>
      <Item href='https://twitter.com/ashleaamorgan1' target='_blank' rel="noopener noreferrer">
        <img src={twitter} alt="twitter-icon" />
      </Item>
      <Item href='https://www.linkedin.com/in/ashlea-a-morgan/' target='_blank' rel="noopener noreferrer">
        <img src={linkedin} alt="linkedin-icon" />
      </Item>
      <MediumLnk href='https://medium.com/@ashleaamorgan' target='_blank' rel="noopener noreferrer">Medium</MediumLnk>
    </LinkList>
  )
}
