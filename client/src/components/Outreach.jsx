import React, { useEffect } from 'react'
import { outreachData } from '../data/data.js'
import Articles from './Articles'

import outreach from '../assets/outreach1.jpg'
import { Background, Title, WritingSection } from './Writing'

import styled from 'styled-components'

const BackgroundImage = styled(Background)`
  background-image: url(${outreach});
  padding: 0px
`
const Overlay = styled.div`
  background-color: rgba(0,0,0,.4);
  width: 100vw;
  height: 100%;
  padding-left: 200px;
  display: flex;
  align-items: center;

  @media(max-width: 750px){
    justify-content: center;
    padding: 0px;
  }
`
const TitleR = styled(Title)`
  color: ${({ theme }) => theme.orange}
`
const OutreachSection = styled(WritingSection)`
`

export default function Outreach() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div>
      <BackgroundImage>
        <Overlay>
          <TitleR>Outreach</TitleR>
        </Overlay>
      </BackgroundImage>
      <OutreachSection>
        <Articles articleData={outreachData} />
      </OutreachSection>
    </div>
  )
}
