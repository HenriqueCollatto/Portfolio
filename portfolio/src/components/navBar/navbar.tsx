

import './navBar.css';
import favicon from '../../assets/logo2.svg'
import favicon2 from '../../../public/logo.svg'

import { useState } from "react";

export default function NavBar() {

    const [navBarOption, setNavBarOption] = useState("home");

    const [menuOpen, setMenuOpen] = useState(true);

    return (
        <>
        <header>
            <nav className="nav">
                <a className='favicon' onClick={() => window.location.href = '/'}>
                    <img src={favicon} className="faviconImg" alt="favicon" />
                    <img src={favicon2} className="faviconImg" alt="favicon2" />
                </a>

                {/* Menu de navegação - aparece em telas grandes e, com a classe, no mobile */}
                <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
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

                {/* Botão hambúrguer */}
                <div className='burgerContainer' onClick={() => setMenuOpen(!menuOpen)}>
                    <div className={`burger ${menuOpen ? 'open' : ''}`}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
            </nav>

            {/* <nav className="nav">
                <a className='favicon' onClick={() => window.location.href = '/'}>
                    <img src={favicon} className="faviconImg" alt="favicon" />
                    <img src={favicon2} className="faviconImg" alt="favicon2" />
                </a>
                <div className='right-side'>
                    <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
                        <li>
                            <a className={navBarOption === "home" ? "active" : ""} href="/#home"
                                onClick={() => setNavBarOption("home")}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a className={navBarOption === "about" ? "active" : ""} href="/#about"
                                onClick={() => setNavBarOption("about")}>
                                About
                            </a>
                        </li>
                        <li>
                            <a className={navBarOption === "techs" ? "active" : ""} href="/#techs"
                                onClick={() => setNavBarOption("techs")}>
                                Techs
                            </a>
                        </li>
                        <li>
                            <a className={navBarOption === "projects" ? "active" : ""} href="/#projects"
                                onClick={() => setNavBarOption("projects")}>
                                Projects
                            </a>
                        </li>
                    </ul>
                    <a href="/contact" id='contact-button'>Contact Me</a>
                </div>

                <div className='burgerContainer' onClick={() => setMenuOpen(!menuOpen)}>
                    <div className={`burger ${menuOpen ? 'open' : ''}`}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
                
            </nav> */}

            
        
        </header>

    </>
    )
}