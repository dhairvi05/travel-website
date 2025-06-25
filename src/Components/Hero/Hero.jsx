import React from 'react'
import './Hero.css'
import darkArrow from '../../assets/darkArrow.png'
import Signin from '../Signin/Signin'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Hero() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signin');
    }

    return(
        <>
          <div>
      <h1>Hello from Hero</h1>
      {/* your existing Hero content */}
    </div>
        </>
    );
}

export default Hero