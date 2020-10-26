import React, { useEffect } from 'react'
import { currentResearch } from '../data/data.js'

import research from '../assets/research2.jpg'
import styled from 'styled-components'
import { Background, Title } from './Writing'

import ResearchArticles from './ResearchArticles.jsx'


const BackgroundImage = styled(Background)`
  background-image: url(${research});
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

`
const TitleR = styled(Title)`
  color: ${({ theme }) => theme.blue};

  @media(max-width: 1440px){
    display: none
  }
`
const CurrentResearch = styled.div`
  background-color: ${({ theme }) => theme.orangeTrans};
  color: ${({ theme }) => theme.blue};
  font-family: 'Manrope', sans-serif;
  line-height: 1.75;
  font-size: 24px;
  font-weight: 700;
  border-radius: 5px;
  margin: 15px 0;

  @media(max-width: 1440px){
    display: none
  }
`
const Paragraph = styled.p`
  margin: 25px;
  letter-spacing: 1.75px;
`
const ResearchSection = styled.section`
  background-color: ${({ theme }) => theme.blue};
  padding: 40px 0;
`
const TitleP = styled(Title)`
  color: ${({ theme }) => theme.orange};
  text-align: center;
  margin-top: 20px;
`
const MobileView = styled.div`
  display: none;

  @media(max-width: 1440px){
    display: block
  }
`
const CurrentResearchMobile = styled(CurrentResearch)`
  @media(max-width: 1440px){
    display: block;
    color: white;
    background-color: ${({ theme }) => theme.blue};
    margin-bottom: 50px;
    font-size: 18px;
  }
`

export default function Research() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const currenResearchDescription = currentResearch.map((paragraph, idx) => {
    return (
      <Paragraph key={idx}>{paragraph}</Paragraph>
    )
  })

  return (
    <div>
      <BackgroundImage>
        {/* <span>Photo by <a href="https://unsplash.com/@yassine_khalfalli?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Yassine Khalfalli</a> on <a href="https://unsplash.com/s/photos/microscope?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */}
        <TitleR>Current Research</TitleR>
        <CurrentResearch>
          {currenResearchDescription}
        </CurrentResearch>
      </BackgroundImage>
      <ResearchSection>
        <MobileView>
          <TitleP>Current Research</TitleP>
          <CurrentResearchMobile>
            {currenResearchDescription}
          </CurrentResearchMobile>
        </MobileView>
        <TitleP>Published Papers</TitleP>
        <ResearchArticles />
      </ResearchSection>
    </div>
  )
}
