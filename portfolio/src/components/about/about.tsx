import './about.css';

import dice from '../../assets/dice.png'
import analysis from '../../assets/analysisImg.png'
import programming from '../../assets/programming.svg'
export default function About() {
    
    return (
        <div className="about">
            
            <h2 id='about-title'>About Me</h2>

            <div className='text-and-images'>
                {/* <img src={dice} className="dice" alt="dice"/> */}
                <img src={programming} className="about-image" id='programming' alt="programming"/> 
                <div className='about-text-area'> 
                    <p id='about-text'>
                    Hi! My name is Henrique Collatto. I'm a Data Science student at PUCRS and I live in Porto Alegre, Brazil. I initially started my academic journey in Computer Science, but over time I realized that my true passion lies in working with data. That insight led me to switch paths and fully dedicate myself to the field of Data Science.

                    I've always enjoyed math and statistics, which naturally drew me toward data analysis and artificial intelligence. I'm also deeply interested in sports and can see myself working in that area in the future — combining analytics and performance.

                    I'm constantly learning and looking for new ways to apply technical knowledge to solve real-world problems in innovative and meaningful ways.
                    </p>
                </div>

                <img src={analysis} className="about-image" id="analysis" alt="analysis"/>
            </div>
        </div> 
    )
}