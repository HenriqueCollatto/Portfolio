import './techs.css';
import TechArea from './techArea';


import python from '../../assets/logos/python.svg'


import numpy from '../../assets/logos/numpy.svg'

import pandas from '../../assets/logos/pandas.svg'
import sql_developer from '../../assets/logos/sql_developer.svg'
import sql from '../../assets/logos/sql.svg'




export default function Techs() {
    
    return (
        <div className="techs">
            
            <h2 id='text'>Technologies</h2>

            <div className='all-techs-area'>
                <TechArea name = "Python" image={python} desc="teste"></TechArea> 
                
                
                <TechArea name = "NUMPY" image={numpy} desc="teste" ></TechArea> 
               
                <TechArea name = "PANDAS" image={pandas} desc="teste"></TechArea> 
                <TechArea name = "ORACLE SQL DEVELOPER" image={sql_developer} desc="teste"></TechArea> 
                <TechArea name = "SQL" image={sql} desc="teste"></TechArea> 
                        
            </div>
        </div> 
    )
}