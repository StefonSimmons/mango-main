import React, { useEffect } from 'react'
import { currentResearch } from '../data/data.js'

import research from '../assets/research2.jpg'
import { Background, Title } from './Writing'
import styled from 'styled-components'
import ResearchArticles from './ResearchArticles.jsx'


const BackgroundImage = styled(Background)`
  background-image: url(${research});
  flex-direction: column;
  justify-content: center;
  align-items: flex-start 
`
const TitleR = styled(Title)`
  color: rgb(14,24,84);
`
const CurrentResearch = styled.div`
  background-color: rgba(233,115,40,.85);
  font-family: 'Manrope', sans-serif;
  color: white;
  line-height: 1.75;
  font-size: 24px;
  font-weight: 700;
  color: rgb(14,24,84);
  border-radius: 5px;
  margin: 15px 0;
`
const Paragraph = styled.p`
  margin: 25px 25px;
  letter-spacing: 1.75px
`
const ResearchSection = styled.section`
  background-color: rgb(14,24,84);
  padding: 40px 0;
`
const TitleP = styled(Title)`
  color: rgb(233,115,40);
  text-align: center;
  margin-top: 20px
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
        <TitleP>Published Papers</TitleP>
        <ResearchArticles />
      </ResearchSection>
    </div>
  )
}
