import './projects.css';

import dice from '../../assets/dice.png'
import analysis from '../../assets/analysisImg.png'
export default function Projects() {
    
    return (
        <div className="projects">
            
            <h2 id='text'>Projetcs</h2>

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