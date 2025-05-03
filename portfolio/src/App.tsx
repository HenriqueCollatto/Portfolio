import { useState } from 'react'

import NavBar from './components/navBar/navbar'
import Home from './components/home/home'
import About from './components/about/about'
import Techs from './components/techs/techs'
import Projects from './components/projects/projects'

import './app.css'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className='container' id='home'>
        <Home></Home>
      </div>
      <div className='container' id='about'>
        <About></About>
      </div>
      <div className='container' id='techs'>
        <Techs></Techs>
      </div>
      <div className='container' id='projects'>
        <Projects></Projects>
      </div>
    </>
  )
}

export default App

/* <div>

   const [count, setCount] = useState(0)
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <Batata nome = "funciona"></Batata> 
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
