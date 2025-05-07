import './about.css';

import dice from '../../assets/dice.png'
import analysis from '../../assets/analysisImg.png'
export default function About() {
    
    return (
        <div className="about">
            
            <h2 id='text'>About Me</h2>

            <div className='textAndImages'>
                {/* <img src={dice} className="dice" alt="dice"/> */}
                <div className='grey-rectangle'>
                    <p id='text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam eos delectus nemo obcaecati rerum natus adipisci 
                    dolorum. Quasi amet magnam officia, similique ea ipsum,
                    at debitis corporis beatae nam animi!
                    </p>
                </div>

                <img src={analysis} className="analysis" alt="analysis"/>
            </div>
        </div> 
    )
}