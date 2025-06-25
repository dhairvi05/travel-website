import React from 'react'
import {useLocation} from 'react-router-dom'
import './Footer.css'

function Footer() {
    const location = useLocation();
    const isHome = location.pathname === '/';
    return(
        <>
        <footer className={`footer ${isHome ? 'transparent-footer' : ''}`}>
            <hr className='border-t border-gray-300'/>
            <p>© {new Date().getFullYear()} WanderNest. All rights reserved.</p>
            <p>Travel Smarter. Live Better.</p>
        </footer>
        </>
    );
}
export default Footer
