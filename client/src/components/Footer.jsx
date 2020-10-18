import React from 'react'
import styled from 'styled-components'
import SocialMedias from './SocialMedias'

// import arrow from '../assets/arrow.svg'

// animation
// const bounce = keyframes`
//   0%{
//     bottom: 8%
//   }
//   25%{
//     bottom: 7%
//   }
//   50%{
//     bottom: 6%
//   }
//   75%{
//     bottom: 7%
//   }
//   100%{
//     bottom: 8%
//   }
// `

const Foot = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px 0px;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 3px;
  height: 100px;
`
// const Arrow = styled.a`
//   opacity: .75;
//   position: fixed;
//   bottom: 10%;

//   animation: ${bounce} 1s ease-in-out infinite
// `

export default function Footer({ arrowHead, setArrow }) {



  return (
    <Foot>
      {/* {arrowHead ?
        <Arrow href="#top" onClick={()=> setArrow(false)}>
          <img src={arrow} alt="up-arrow" />
        </Arrow>
        : null
      } */}
      <h5>&#169; by Ashlea A. Morgan</h5>
      <SocialMedias />
    </Foot>
  )
}
