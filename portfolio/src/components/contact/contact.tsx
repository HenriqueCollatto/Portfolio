import './contact.css';
import ContactArea from './contactArea';


import linkedin from '../../assets/logos/linkedin.svg'
import github from '../../assets/logos/github.svg'
import gmail from '../../assets/logos/gmail.svg'



export default function Contact() {
    
    return (
        <div className="contact">
            <div className='contact-text'>
                <h2 id='text'>Contact Me</h2>
                <p>Click to open my socials</p>
            </div>
            <div className='all-contacts'>
                <ContactArea name='Linkedin' image={linkedin} link='https://www.linkedin.com/in/henrique-collatto-5858bb325/'></ContactArea>
                <ContactArea name='GitHub' image={github} link='https://github.com/HenriqueCollatto/'></ContactArea>
                <ContactArea name='E-mail' image={gmail} link='https://github.com/HenriqueCollatto/'></ContactArea>
            </div>
        </div> 
    )
}