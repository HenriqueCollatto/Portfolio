import './projectArea.css';

import github from '../../assets/logos/github.svg'

export default function ProjectArea(object : {name : string,
                                             image : string,
                                             desc : string,
                                             githubLink : string
                                             techStackImages : string[]
                                            }) {
    return (
        <div className="project-area">
            <img src={object.image} alt={object.name} id='project-img' />
            <h4>{object.name}</h4>

            
            <p id='project-desc'>{object.desc}</p>
            

            <div className='tech-stack-and-view-projects'>
                    <div className="tech-stack">
                        Tech stack:
                        <div className="tech-stack-icons">
                            {object.techStackImages.map((src, index) => (
                            <img src={src} alt={`tech-${index}`} className="tech-icon" />
                            ))}
                        </div>
                    </div>

                    <div className='view-projects'>
                        View project:  
                        <a href={object.githubLink}>
                            <img src={github} alt='object.name' id='github-img' />
                        </a>
                    </div>                
            </div>
        </div>
        
    )
}

