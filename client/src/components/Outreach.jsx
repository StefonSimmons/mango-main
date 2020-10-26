import React, { useEffect } from 'react'
import { outreachData } from '../data/data.js'
import Articles from './Articles'

import outreach from '../assets/outreach2.jpg'
import { Background, Title, WritingSection } from './Writing'

import styled from 'styled-components'

const BackgroundImage = styled(Background)`
  background-image: url(${outreach});

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
        <TitleR>Outreach</TitleR>
      </BackgroundImage>
      <OutreachSection>
        <Articles articleData={outreachData} />
      </OutreachSection>
    </div>
  )
}
