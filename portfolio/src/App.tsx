import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import NavBar from './components/navBar/navbar'
import Home from './components/home/home'
import About from './components/about/about'
import Techs from './components/techs/techs'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

import './app.css'
import { useEffect } from 'react'


function App() {

  

  return (
    <Router>
      <NavBar />

      <Routes>
        
        <Route path="/" element={
          <>
            <div className='container' id='home'>
              <Home></Home>
            
            </div>
            <div className='container' id='about'>
              <About/>
            </div>
            <div className='container' id='techs'>
              <Techs />
            </div>
            <div className='container' id='projects'>
              <Projects />
            </div>
          </>
        } />

        
        <Route path="/contact" element={
          <div className='container' id='contact'>
            <Contact />
          </div>
        } />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
