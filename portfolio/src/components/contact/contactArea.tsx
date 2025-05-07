import './contactArea.css';

export default function ContactArea(object : {name : string,
                                             image : string,
                                             link : string
                                            }) {
    return (
        <div className="contact-area">
            <a href={object.link} target='_blank'>
                <h4>{object.name}</h4>
                <img src={object.image} alt={object.name} id='contact-img' />
            </a>
        </div>
        
    )
}

