import './navbar.css';
import favicon from '../../../public/vite.svg'
export default function NavBar() {
    
    return (
        <>
        <nav className="nav">
            <a href="#home">
                <img src={favicon} className="favicon" alt="favicon" />
            </a>
            <ul className="ul">
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#techs">Techs</a></li>
                <li><a href="#projects">Projects</a></li>
                <li>
                    <a href="/contact" className='contact-button'>Contact Me</a>
                </li>
            </ul>
        </nav>

    </>
    )
}