import React from 'react'
import { articleData } from '../data/data.js'

import styled from 'styled-components'

const ArticlesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Article = styled.article`
  display: flex; 
  // border: green solid 1px;
  padding: 50px
`
const Image = styled.img`
  width: 100%;

`
const Details = styled.section`
  // border: green solid 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px;
  font-family: 'Manrope', sans-serif;
  color: white;
  line-height: 1.75;
`
const Title = styled.h2`
  font-size: 36px
`
const Description = styled.p`
  font-size: 24px;
  margin: 50px 0
`
const Btn = styled.button`
  padding: 10px 5px;
  width: 150px;
  background-color: rgba(233,115,40, 0);
  color: white;
  border: white solid 1px;
  transition: all .3s ease-in-out;
  font-size: 24px;

  &:hover{
    transform: scale(1.05);
    background-color: rgb(255,135,60);
    color: black;
    box-shadow: 10px 10px 0px rgb(213,95,20);
    border-radius: 5px;
    border: rgb(255,135,60) solid 1px;
    font-weight: 700;
  }
`

export default function Articles() {

  const articles = articleData.map((article, idx) => {
    const rowReverse = {
      flexDirection: 'row-reverse'
    }
    return (
      <Article key={idx} style={idx % 2 ? rowReverse : null}>
        <Image src={article.image} alt={article.title} />
        <Details>
          <Title>{article.title}</Title>
          <Description>{article.description}</Description>
          <a href={article.url} target='_blank' rel="noopener noreferrer">
            <Btn>Read More</Btn>
          </a>
        </Details>
      </Article>
    )
  })

  return (
    <ArticlesSection>
      {articles}
    </ArticlesSection>
  )
}
