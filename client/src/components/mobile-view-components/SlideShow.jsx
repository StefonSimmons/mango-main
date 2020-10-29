import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import arrow from '../../assets/what_I_do_arrow.png'
import pause from '../../assets/pause.png'
import play from '../../assets/play.png'


const ControllerSect = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.blue};
`
const LeftArrow = styled.img`
  height: 50px;
  border-radius: 45px;
  padding: 10px 23px;
  background-color: rgba(36, 56, 123, .4);
`
const RightArrow = styled(LeftArrow)`
  transform: rotateY(180deg)
`

const PausePlay = styled.img`
  width: 80px
`
export default function SlideShow({ works }) {

  const [count, setCount] = useState(0)
  const [stop, setStop] = useState(false)

  useEffect(() => {
    if (!stop) {
      const interval = setInterval(changeCard, 2500)
      return () => clearInterval(interval);
    }
    else return () => null
  })

  const changeCard = () => {
    if (count > works.length - 2) setCount(0)
    else setCount(prevCount => prevCount + 1)
  }

  const goBack = () => {
    if (count <= 0) setCount(2)
    else setCount(prevCount => prevCount - 1)
  }

  const goForward = () => {
    if (count >= 2) setCount(0)
    else setCount(prevCount => prevCount + 1)
  }

  return (
    <div>
      {works[count]}
      <ControllerSect>
        <LeftArrow
          src={arrow}
          alt="left-slideshow-arrow"
          onClick={goBack}
        />
        {!stop ?
          <PausePlay src={pause} alt='pause-button' onClick={() => { setStop(true) }} />
          :
          <PausePlay src={play} alt='play-button' onClick={() => { setStop(false) }} />
        }
        <RightArrow
          src={arrow}
          alt="right-slideshow-arrow"
          onClick={goForward}
        />
      </ControllerSect>
    </div>
  )
}
