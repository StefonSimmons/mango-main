import React from 'react'

import styled from 'styled-components'

import { Background, Title } from './Writing'
import { Overlay } from './Outreach'
import mangoBlog from '../assets/blog-coming-soon.webp'


const BackgroundImage = styled(Background)`
  background-image: url(${mangoBlog});
  padding: 0px;
`
const OverlayBack = styled(Overlay)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const MangoTitle = styled(Title)`
  color: ${({ theme }) => theme.orange}
`
const Subtitle = styled.h2`
  color: white;
  font-size: 32px;
  padding-top: 30px
`

export default function Blog() {
  return (
    <div>
      <BackgroundImage>
        <OverlayBack>
          <MangoTitle>Mango Mosaic</MangoTitle>
          <Subtitle>Coming Soon</Subtitle>
        </OverlayBack>
      </BackgroundImage>
    </div>
  )
}
