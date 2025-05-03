import './about.css';

import dice from '../../assets/dice.png'
import analysis from '../../assets/analysisImg.png'
export default function About() {
    
    return (
        <div className="about">
            
            <h2 id='text'>About Me</h2>

            <div className='textAndImages'>
                <img src={dice} className="dice" alt="dice"/>
                <div className='grey-rectangle'>
                    <p id='text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda dolorum alias id possimus aut laboriosam exercitationem
                    saepe temporibus asperiores! Placeat voluptate nemo minus debitis
                    nihil optio, atque deleniti aliquam incidunt?
                    </p>
                </div>

                <img src={analysis} className="analysis" alt="analysis"/>
            </div>
        </div> 
    )
}