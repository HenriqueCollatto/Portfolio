

import './navbar.css';
import favicon from '../../../public/vite.svg'

import { useState } from "react";

export default function NavBar() {

    const [navBarOption, setNavBarOption] = useState("home");

    const [sizeOption, setSetOption] = useState("");

    return (
        <>
        <header>
            <nav className="nav">
                <a onClick={() => window.location.href = '/'}>
                    <img src={favicon} className="favicon" alt="favicon" />
                </a>
                <ul className="ul">
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
                    <li><a href="/contact" className='contact-button'>Contact Me</a></li>

                    
                </ul>
                
            </nav>

            <div className='burgerContainer'>
                <div className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
        
        </header>

    </>
    )
}