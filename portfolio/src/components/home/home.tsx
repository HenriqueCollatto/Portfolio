import './home.css';
import myPhoto from '../../assets/myPhoto.jpeg'
export default function Home() {
    
    return (
        <div className="home">
            
            {/* <div className='mid'> */}
                <img src={myPhoto} className="photo" alt="photo" />
                <div className='text'>
                    <p id='hello'>Hello! My name is</p>
                    <p id='henrique'>Henrique Collatto</p>
                    <p id='im'>
                    I'm a data science and IA student
                    <br/> 
                    and
                    </p>
                    
                {/* </div> */}
            </div>
            {/* <img src={connectedPoints} className="connectedPoints" alt="connected points" /> */}
       
        </div> 
    )
}