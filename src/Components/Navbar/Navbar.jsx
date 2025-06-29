import React, {useState, useEffect} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.png'

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll',handleScroll);
    return() => window.removeEventListener('scroll',handleScroll);
  }, []);

  const [place, setPlace] = useState('');
  const isHome = location.pathname === '/';

  const handlePlace = (e) => {
    const place = e.target.value;
    if (place != '') {
      navigate(`/placedetails/${place}`);
      setPlace('');
    }
  }

  return (
    <nav className={`container ${sticky ? 'navbar-sticky' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <select value={place} onChange={handlePlace} className='bg-transparent border-none'>
          <option value=''>Select</option>
          <option value='India'>India</option>
          <option value='Hawaii'>Hawaii</option>
          <option value='Australia'>Australia</option>
          <option value='Paris'>Paris</option>
        </select>
        <ul className={isHome ? 'text-white' : 'text-black'}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about-us'>About Us</Link></li>
            <li><Link to='/places'>Places</Link></li>
            <li><Link to='/bookings'>Bookings</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
        </ul>
    </nav>
  );
}

export default Navbar