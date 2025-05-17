import './navBar.css';
import favicon from '../../assets/logo2.svg'
import favicon2 from '../../../public/logo.svg'

import { useState } from "react";

export default function NavBar() {

    const [navBarOption, setNavBarOption] = useState("home");

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <header>
            <nav className="nav">
                <a className='favicon' onClick={() => window.location.href = '/'}>
                    <img src={favicon} className="faviconImg" alt="favicon" />
                    <img src={favicon2} className="faviconImg" alt="favicon2" />
                </a>

                
                <ul className={menuOpen ? 'nav-links' : 'nav-links open'}>
                    <li>
                        <a className={navBarOption === "home" ? "active" : ""} href="/#home"
                            onClick={() => { setNavBarOption("home"); setMenuOpen(false); }}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a className={navBarOption === "about" ? "active" : ""} href="/#about"
                            onClick={() => { setNavBarOption("about"); setMenuOpen(false); }}>
                            About
                        </a>
                    </li>
                    <li>
                        <a className={navBarOption === "techs" ? "active" : ""} href="/#techs"
                            onClick={() => { setNavBarOption("techs"); setMenuOpen(false); }}>
                            Techs
                        </a>
                    </li>
                    <li>
                        <a className={navBarOption === "projects" ? "active" : ""} href="/#projects"
                            onClick={() => { setNavBarOption("projects"); setMenuOpen(false); }}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="/contact" id='contact-button' onClick={() => setMenuOpen(false)}>Contact Me</a>
                    </li>
                </ul>

                
                <div className='burgerContainer' onClick={() => setMenuOpen(!menuOpen)}>
                    <div className={`burger ${menuOpen ? 'open' : ''}`}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
            </nav>        
        
        </header>

    </>
    )
}