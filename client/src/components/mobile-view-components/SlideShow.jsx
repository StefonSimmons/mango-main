import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import arrow from '../../assets/leftArrow.svg'
import pause from '../../assets/pause.svg'
import play from '../../assets/play.svg'



const LeftArrow = styled.img`

`

const RightArrow = styled(LeftArrow)`
  transform: rotateY(180deg)

`
const NavigationSect = styled.div`
  display: flex;
  justify-content: space-between;
  border: red solid 1px;
`

export default function SlideShow({ works }) {

  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(changeCard, 2500)
    return () => clearInterval(interval);
  })

  const changeCard = () => {
    if (count > works.length - 2) setCount(0)
    else setCount(prevCount => prevCount + 1)
  }


  return (
    <div>
      <NavigationSect>
        <LeftArrow src={arrow} alt="left-slideshow-arrow" />
        <RightArrow src={arrow} alt="right-slideshow-arrow" />
      </NavigationSect>
      {works[count]}
      <img src={pause} alt='pause-button'/>

      <img src={play} alt='play-button'/>
    </div>
  )
}
