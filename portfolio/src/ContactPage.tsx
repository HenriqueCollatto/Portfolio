import NavBar from './components/navBar/navbar'

import './contactPage.css'

import Footer from './components/footer/footer'

import Contact from './components/contact/contact'

export default function ContactPage() {
  return (
    <>
      <NavBar></NavBar>
      <div className='container' id='contact'>
        <Contact></Contact>
      </div>  
      <Footer></Footer>
      
    </>
  )
}

