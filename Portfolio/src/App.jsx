import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Clients from './components/Clients'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Services/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Clients/>
      <Contact/>
      <Footer />
    </>
  )
}

export default App