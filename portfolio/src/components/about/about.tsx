import './about.css';


import programming from '../../assets/about/programming.svg'
import analytics from '../../assets/about/analytics.svg'
import soccer from '../../assets/about/soccer.svg'

export default function About() {
    
    return (
        <div className="about">
            
            <h2 id='about-title'>About Me</h2>

            <div className='text-and-images'>
                <div className='about-right-images'>
                    <img src={programming} className="about-image" id='programming' alt="programming"/> 
                </div>
                
                <div className='about-text-area'> 
                    <p id='about-text'>
                        I'm a Data Science student at PUCRS in Porto Alegre, Brazil. My journey began in Computer Science, but I soon discovered a deeper fascination with turning data into insights—leading me to pivot toward analytics, statistics and AI.

                        Beyond numbers, I'm a sports enthusiast and love exploring how data can enhance performance, whether on the field or in strategy. When I'm not studying or coding, you'll probably find me watching games, brainstorming problem-solving ideas, or diving into new hobbies that challenge me to think differently.

                        I'm always looking for ways to apply technical skills to real-world challenges—especially those that merge my interests in analytics and sports.
                    </p>
                </div>
                <div className='about-left-images'>
                    <img src={analytics} className="about-image" id='analytics' alt="analytics"/> 
                    <img src={soccer} className="about-image" id="soccer" alt="soccer"/>
                </div>
            </div>
        </div> 
    )
}