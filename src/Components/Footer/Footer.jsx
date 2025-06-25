import React from 'react'
import './Footer.css'

function Footer() {
    return(
        <>
        <footer className="footer">
            <hr className='border-t border-gray-300'/>
            <p>© {new Date().getFullYear()} WanderNest. All rights reserved.</p>
            <p>Travel Smarter. Live Better.</p>
        </footer>
        </>
    );
}
export default Footer
