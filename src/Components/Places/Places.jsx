import React from 'react'
import {Link} from 'react-router-dom'
import './Places.css'
import India from '../../assets/India.avif'
import Europe from '../../assets/Europe.jpg'
import hawai from '../../assets/hawai.webp'

function Places() {
    return(
        <div className='places'>
            <Link to='/placedetails/India'>
                <div className='place'>
                    <img src={India} alt="" className='india mr-[50px]'/>
                    <div className='caption'>
                        <p>India</p>
                    </div>
                </div>            
            </Link>
            <Link to='/placedetails/Hawaii'>
                <div className='place'>
                    <img src={hawai} alt="" className='hawai'/>
                    <div className='caption'>
                        <p>Hawaii</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
export default Places