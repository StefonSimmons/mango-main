import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import outreachImg from '../assets/outreach.png'
import writingImg from '../assets/writing.png'
import researchImg from '../assets/research.png'


const WorkContainer = styled.div`
  display: flex;
  flex-direction: row;
  // border: red solid 2px;
`
const Work = styled.section`
  height: 500px;
  width: 33.33%;
  // border: green 4px solid
`

// additional styles
const writing = {
  backgroundImage: `url(${writingImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}
const outreach = {
  backgroundImage: `url(${outreachImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'

}
const research = {
  backgroundImage: `url(${researchImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'

}


export default function WhatIDo() {

  const iDoArr = [
    {
      text: 'writing',
      style: writing
    },
    {
      text: 'research',
      style: research
    },
    {
      text: 'outreach',
      style: outreach
    }
  ]
  const iDo = iDoArr.map(work => {
    return (
      <Work style={work.style}>

        <div>

          <h3>{work.text}</h3>
          <Link to='/writing'>
            <button>Go to</button>
          </Link>
        
        </div>

      </Work>
    )
  })

  return (
    <WorkContainer>
      {iDo}
    </WorkContainer>
  )
}
