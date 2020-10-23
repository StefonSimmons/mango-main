import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import arrow from '../../assets/what_I_do_arrow.svg'
import pause from '../../assets/pause.png'
import play from '../../assets/play.png'



const LeftArrow = styled.img`

`

const RightArrow = styled(LeftArrow)`
  transform: rotateY(180deg)

`
const NavigationSect = styled.div`
  display: flex;
  justify-content: space-between;
`

const ControllerSect = styled.div`
  display: flex;
  justify-content: center
`
const Pause = styled.img`

`
const Play = styled.img`

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
    console.log(count)
    if (count <= 0) setCount(2)
    else setCount(prevCount => prevCount - 1)
  }

  const goForward = () => {
    console.log(count)
    if (count >= 2) setCount(0)
    else setCount(prevCount => prevCount + 1)
  }

  return (
    <div>
      <NavigationSect>
        {stop ?
          <>
            <LeftArrow src={arrow}
              alt="left-slideshow-arrow"
              onClick={goBack}
            />
            <RightArrow src={arrow}
              alt="right-slideshow-arrow"
              onClick={goForward}
            />
          </>
          : null
        }
      </NavigationSect>
      {works[count]}
      <ControllerSect>
        <Pause src={pause} alt='pause-button' onClick={() => { setStop(true) }} />
        <Play src={play} alt='play-button' onClick={() => { setStop(false) }} />
      </ControllerSect>
    </div>
  )
}
