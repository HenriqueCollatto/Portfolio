import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

import NavBar from './components/navBar/navBar'
import Home from './components/home/home'
import About from './components/about/about'
import Techs from './components/techs/techs'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

import './app.css'



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
            
           <Footer background={'linear-gradient(to bottom, #23e4c7, #14143d)'} />
          </>
        } />

        
        <Route path="/contact" element={
          <div className='container' id='contact'>
            <Contact />
          </div>
        } />
      </Routes>

      
    </Router>
  )
}

export default App
