import React from 'react'
import styled from 'styled-components'

import ashlea from '../assets/ashlea1.png'

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`
const LeftArea = styled.div`
  background-color: rgb(14,24,84);
  font-family: 'Manrope', sans-serif;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Center = styled.section`
  width: 350px;
`
const Titles = styled.section`
  text-align: left;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.35em;
  color: rgb(233,115,40)
`
const BtnSection = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 15px 0

`
const Btn = styled.button`
  padding: 6px;
  width: 100px;
  background-color: rgb(233,115,40);
  border: rgb(233,115,40);
  border-radius: 5px;
  box-shadow: 5px 5px 0px rgb(233,115,40)


`

const Image = styled.img`
  width: 50%;
`

export default function HomeHeader() {
  return (
    <Main>
      <LeftArea>
        <Center>
          <Titles>
            <h2>Neuroscientist.</h2>
            <h2>PH.D Candidate.</h2>
            <h2>Writer.</h2>
          </Titles>
          <BtnSection>
            <Btn>What I Do</Btn>
            <Btn>Blog</Btn>
            <Btn>Contact Me</Btn>
          </BtnSection>
        </Center>
      </LeftArea>
      <Image src={ashlea} alt="" />
    </Main>
  )
}
