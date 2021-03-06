import React from 'react'
import styled from 'styled-components'
import { fadeIn } from '../components/HomeHeader'
import city from '../assets/city.WebP'

const BackgroundImage = styled.div`
  background-image: url(${city});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media(max-width: 750px){
    background-attachment: scroll;
    background-size: cover
  }
`
const AboutSection = styled.section`
  height: 990px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: 'Manrope', sans-serif;

  @media(max-width: 850px){
    justify-content: center;
  }
`
const AboutBox = styled.section`
  background-color: ${({ theme }) => theme.orangeTrans};
  height: 66%;
  width: 433px;
  margin: 100px;
  padding: 70px 100px;
  border-radius: 3px;
  animation: ${fadeIn} 2s ease-in-out;

  @media(max-width: 850px){
    padding: 35px 50px;
  }
  @media(max-width: 750px){
    width: 100%;
    margin: 0px;
  }
  @media(max-width: 450px){
    padding: 70px 10px;
    height: 50%
  }
`
export const AboutTitle = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.blue};
`

const Description = styled.p`
  color: white;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.875em;
  letter-spacing: 1.5px;
  margin: 40px 6px;

  @media(max-width: 750px){
    line-height: 2em;
  }
  @media(max-width: 650px){
    font-size: 20px;
  }
  @media(max-width: 450px){
    font-size: 18px;
  }
`

export default function About() {
  return (
    <BackgroundImage>
      <AboutSection>
        <AboutBox>
          <AboutTitle>About Me</AboutTitle>
          <Description>I'm Ashlea Morgan, scientist and writer. As a doctoral candidate in Neurobiology & Behavior at Columbia University, I study how neural signaling drives our ability to regulate emotions and behave flexibly. As a writer, I compose articles on scientific research for both scientific and general audiences and integrate those stories into other topics involving what makes us who we are.</Description>
        </AboutBox>
      </AboutSection>
    </BackgroundImage>
  )
}
