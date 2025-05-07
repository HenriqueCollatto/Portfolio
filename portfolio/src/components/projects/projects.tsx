import './projects.css';
import ProjectArea from './projectArea';

import CurrencyConverter from '../../assets/projectImages/currencyConverter.png'
import Calculator from '../../assets/projectImages/calculadora.png'



import html from '../../assets/logos/html.svg'  
import css from '../../assets/logos/css.svg'
import js from '../../assets/logos/js.svg'





export default function Projects() {
    
    return (
        <div className="projects">
            
            <h2 id='text'>Projects</h2>

            <div className='projects-area'>
                <ProjectArea name='Currency Converter'
                             image={CurrencyConverter}  
                             desc='A simple and efficient tool that allows users to quickly convert values
                                   between different currencies. It provides real-time conversion based on
                                   the selected exchange rates, offering a smooth and intuitive user experience.'
                             githubLink='https://github.com/HenriqueCollatto/ConversorMonetario.git'
                             techStackImages={[html, css, js]}>
                </ProjectArea>

                <ProjectArea name='Calculator'
                             image={Calculator}  
                             desc='A simple and intuitive tool that enables users to perform basic arithmetic
                                   operations with ease. It offers a clean interface and quick results, making
                                   everyday calculations fast and hassle-free.'
                             githubLink='https://github.com/HenriqueCollatto/Calculadora.git'
                             techStackImages={[html, css, js]}>
                </ProjectArea>

                <ProjectArea name='Calculator'
                             image={Calculator}  
                             desc='A simple and intuitive tool that enables users to perform basic arithmetic
                                   operations with ease. It offers a clean interface and quick results, making
                                   everyday calculations fast and hassle-free.'
                             githubLink='https://github.com/HenriqueCollatto/Calculadora.git'
                             techStackImages={[html, css, js]}>
                </ProjectArea>

                                
            </div>
        </div> 
    )
}