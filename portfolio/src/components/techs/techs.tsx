import './techs.css';
import TechArea from './techArea';
import { useState } from "react";

import python from '../../assets/logos/python.svg'
import numpy from '../../assets/logos/numpy.svg'
import pandas from '../../assets/logos/pandas.svg'
import sql_developer from '../../assets/logos/sql_developer.svg'
import sql from '../../assets/logos/sql.svg'

import html from '../../assets/logos/html.svg';
import css from '../../assets/logos/css.svg';
import js from '../../assets/logos/js.svg';
import react from '../../assets/logos/react.svg';
import nest from '../../assets/logos/nest.svg';
import node from '../../assets/logos/node.svg';
import ts from '../../assets/logos/ts.svg';


import java from '../../assets/logos/java.svg';
import prisma from '../../assets/logos/prisma.svg';
import git from '../../assets/logos/git.svg';


export default function Techs() {
    const [techs, setTechs] = useState("ds");
    
    return (
        <div className="techs">

            <div className='title-and-buttons'>
                <h2 id='techs-title'>Technologies</h2>
                <div className='buttons-area'>                    
                    <button 
                        className={`techs-button ${techs === "ds" ? "active" : ""}`}
                        id='ds-button'
                        onClick={() => setTechs("ds")}>
                        Data <br /> Science
                    </button>

                    <button 
                        className={`techs-button ${techs === "web" ? "active" : ""}`}
                        id='web-button' 
                        onClick={() => setTechs("web")}>
                        Web <br /> Dev
                    </button>

                    <button 
                        className={`techs-button ${techs === "others" ? "active" : ""}`}
                        id='others-button'
                        onClick={() => setTechs("others")}>
                        Others <br /> 
                    </button>
                </div>
            </div>


            
            {techs === "ds" && (
                <div className='techs-area' id='ds-techs'>
                    <TechArea name="Python" image={python} desc="A versatile programming language widely used in data science, machine learning, and automation" />
                    <TechArea name="Pandas" image={pandas} desc="A powerful Python library for data analysis and manipulation using structures like DataFrames" />
                    <TechArea name="Numpy" image={numpy} desc="A Python library for numerical operations and efficient manipulation of multidimensional arrays" />
                    <TechArea name="Oracle SQL Developer" image={sql_developer} desc=" A graphical tool by Oracle for developing and managing SQL-based databases" />
                    <TechArea name="SQL" image={sql} desc="A standard language for querying, managing, and manipulating relational databases"/>
                </div>
            )}

            {techs === "web" && (
                <div className='techs-area' id='web-techs'>
                    <TechArea name="HTML" image={html} desc="A markup language used to structure content on the web" />
                    <TechArea name="CSS" image={css} desc="A styling language used to define the visual presentation of HTML elements" />
                    <TechArea name="JavaScript" image={js} desc="A scripting language used to create dynamic and interactive web content" />
                    <TechArea name="React" image={react} desc="A JavaScript library for building responsive and component-based user interfaces" />
                    <TechArea name="TypeScript" image={ts} desc="A statically typed superset of JavaScript that adds type safety and modern features for scalable application development" />
                    <TechArea name="NestJS" image={nest} desc="A backend framework for Node.js that uses TypeScript and a modular architecture inspired by Angular" />
                    <TechArea name="NodeJS" image={node} desc="A JavaScript runtime environment for building scalable and real-time server-side applications" />
                </div>
            )}

            {techs === "others" && (
                <div className='techs-area' id='others-techs'>
                    <TechArea name="Java" image={java} desc="A robust, object-oriented programming language widely used in enterprise systems and Android development" />
                    <TechArea name="Git" image={git} desc="A distributed version control system used to track changes in source code and collaborate on software development"></TechArea>
                    <TechArea name="Prisma" image={prisma} desc="A modern ORM that simplifies database access with strong typing and optimized performance" />
                </div>
            )}    
            
        </div> 
    )
}