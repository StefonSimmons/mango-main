import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import Header from './components/Header'
import HomeHeader from './components/HomeHeader'
import About from './components/About'
import WhatIDo from './components/WhatIDo'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Writing from './components/Writing'


function App() {

  const [arrow, setArrow] = useState(false)


  return (
    <div>
      <Header />

      <Route exact path='/'>
        <HomeHeader setArrow={setArrow}/>
        <About />
        <WhatIDo />
        <ContactMe />
      </Route>

      <Route path='/writing'>
        <Writing />
      </Route>

      <Footer arrowHead={arrow}/>
    </div>
  );
}

export default App;
