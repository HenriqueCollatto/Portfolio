import './contactArea.css';

export default function ContactArea(object : {name : string,
                                             image : string,
                                             link : string
                                            }) {
    return (
        <div className="contact-area">
            <h4>{object.name}</h4>
            <a href={object.link}>
                <img src={object.image} alt={object.name} id='contact-img' />
            </a>
        </div>
        
    )
}

