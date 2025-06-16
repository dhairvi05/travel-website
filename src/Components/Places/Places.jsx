import React from 'react'
import './Places.css'
import India from '../../assets/India.avif'
import Europe from '../../assets/Europe.jpg'
import hawai from '../../assets/hawai.webp'

function Places() {
    return(
        <div className='places'>
            <div className='place'>
                <img src={India} alt="" className='india'/>
                <div className='caption'>
                    <p>India</p>
                </div>
            </div>
            <div className='place'>
                <img src={Europe} alt="" className='europe'/>
                <div className='caption'>
                    <p>Europe</p>
                </div>
            </div>
            <div className='place'>
                <img src={hawai} alt="" className='hawai'/>
                <div className='caption'>
                    <p>Hawai</p>
                </div>
            </div>
        </div>
    );
}
export default Places