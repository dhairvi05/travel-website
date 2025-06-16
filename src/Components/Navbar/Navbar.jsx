import React, {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.png'

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const location = useLocation();

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [query, setQuery] = useState('');
  const darkNav = location.pathname !== '/' || sticky;

  useEffect(() => {
    console.log("Query changed to: ", query);
  },[query]);
  return (
    <nav className={`container ${darkNav? 'darkNav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <input type="text" placeholder="Search for places..." className='bg-transparent h-[30px] w-[200px] placeholder '
              onChange= {(e) => {
                setQuery(e.target.value);
              }}></input>
        <ul className='text-white hover:text-blue-400'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about-us'>About Us</Link></li>
            <li><Link to='/places'>Places</Link></li>
            <li><Link to='/bookings'>Bookings</Link></li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
    </nav>
  );
}

export default Navbar