import './home.css';
import myPhoto from '../../assets/myPhoto.jpeg'
import connectedPoints from '../../assets/background/connectedPoints.png'
// import connectedPoints2 from '../../assets/background/points.png'
// import connectedPoints3 from '../../assets/background/points2.png'
// import connectedPoints4 from '../../assets/background/points3.png'
// import connectedPoints5 from '../../assets/background/points4.png'

export default function Home() {
    
    return (
        <div className="home">
            <div className='mid'>
                <img src={myPhoto} className="photo" alt="photo" />
                <div className='text-container'>
                    <div className='home-text'>
                        <p className='typing' id='hello'>Hello! My name is</p>
                        <p className='typing'>
                            <span className='typing-span' id='henrique'>Henrique Collatto</span>
                        </p>
                        <div className='im-and-and'>
                            <p className='typing' id='im'>
                            I'm passionate about data, technology,</p>
                            <p className='typing' id='and'>
                            and intelligent solutions.
                            </p>
                        </div>
                    </div>  
                </div>
            </div>
            <img src={connectedPoints} className="connectedPoints" alt="connected points" />
        </div> 
    )
}