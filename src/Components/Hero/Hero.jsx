import React from 'react'
import './Hero.css'
import darkArrow from '../../assets/darkArrow.png'
import Signin from '../Signin/Signin'
import { useNavigate } from 'react-router-dom'

function Hero() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signin');
    }

    return(
        <div className='hero container'>
            <div className='hero-text'>
                <h1>Tailored journeys, unforgettable moments—travel, redefined just for you.</h1>
                <p>Welcome to your one-stop travel companion. Whether you're chasing sunsets or city lights, 
                    we've got the routes, stays, and stories to get you there.</p>
                    <button className='btn !px-[15px] !py-[10px]' onClick={handleClick}>Create Account/Sign In~</button>
            </div>
        </div>
    );
}

export default Hero