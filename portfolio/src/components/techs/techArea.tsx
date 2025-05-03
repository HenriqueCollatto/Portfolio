import './techArea.css';

export default function TechArea(object : {name : string, image : string, desc : string}) {
    return (
        <div className="area">
            <div className="front-and-back-area">
                <div className='area-front'>
                    <img src={object.image} alt={object.name} id='img1' />
                    <p className="tech-name">{object.name}</p> 
                </div>
                <div className='area-back'>
                    <p className="description">{object.desc}</p> 
                </div>
            </div>
        </div>
        
    )
}

