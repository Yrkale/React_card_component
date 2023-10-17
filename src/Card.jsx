
import profilepic from './assets/profile picture.jpg'

function Card()
{
    return(

        <div className="Card">
            <img src={profilepic} alt="profile picture" className='Card-image'></img>
            <h2 className='Card-title'>Yogesh kale </h2>
            <p className='Card-text'>I am a student </p>

        </div>

    );
}
export default Card