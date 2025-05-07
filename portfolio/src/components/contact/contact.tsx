import './contact.css';
import ContactArea from './contactArea';



import github from '../../assets/logos/github.svg'




export default function Contact() {
    
    return (
        <div className="contact">
            
            <h2 id='text'>Contact Me</h2>
            <p>Click to open my socials</p>

            <div className='all-contacts'>
                <ContactArea name='GitHub' image={github} link='https://github.com/HenriqueCollatto/'></ContactArea>
            </div>
        </div> 
    )
}