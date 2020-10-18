import React from 'react';
import { Route } from 'react-router-dom'
import Header from './components/Header'
import HomeHeader from './components/HomeHeader'
import About from './components/About'
import WhatIDo from './components/WhatIDo'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />

      <Route exact path='/'>
        <HomeHeader />
        <About />
        <WhatIDo />
      </Route>

      <Route path='/writing'>
        <h1>Hi there</h1>
      </Route>

      <Footer/>
    </div>
  );
}

export default App;
