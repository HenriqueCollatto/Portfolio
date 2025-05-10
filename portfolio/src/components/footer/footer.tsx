import './footer.css';

import github from '../../assets/logos/github.svg'
import linkedin from '../../assets/logos/linkedin.svg'


export default function Footer({ background = 'linear-gradient(to bottom, #23e4c7, #14143d)' }: {background : string}) {

    return (
        <div className='footer' style={{background}}>
            <p className='footer-text'>
                Copyright © Henrique Collatto, 2025
            </p> 
            <div className='footer-images'>
                <a href="https://github.com/HenriqueCollatto" target='_blank'>
                    <img src={github} alt="github" className='footer-image' />
                </a>
                <a href="https://www.linkedin.com/in/henrique-collatto-5858bb325/" target='_blank'>
                    <img src={linkedin} alt="linkedin" className='footer-image' />
                </a>
            </div> 
        </div>
    )
}