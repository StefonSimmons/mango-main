import React from 'react'
import ashlea from '../assets/ashlea-home.png'


export default function HomeHeader() {
  return (
    <div>
      <div>
        <h2>Neuroscientist.</h2>
        <h2>PH.D Candidate.</h2>
        <h2>Writer.</h2>
        <section>
          <button>What I Do</button>
          <button>Blog</button>
          <button>Contact Me</button> 
        </section>
      </div>
      <img src={ashlea} alt=""/>
    </div>
  )
}
