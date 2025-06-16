import React from 'react'
import {useLocation} from 'react-router-dom'
import './Hotels.css'
import paris11 from '../../assets/paris11.avif'
import paris21 from '../../assets/paris21.avif'
import paris31 from '../../assets/paris31.avif'

function Hotels() {
    const location = useLocation();
    const destination = location.state?.destination;
    if(!destination) {
        return <p className='text-center mt-[100px] text-[#2d232e]'>No destination selected. Please go back and search.</p>
    }
    return(
        <div className='container'>
            <h2 className='mt-[100px] text-[40px] text-[#2d232e]'>Top Best Stays in {destination}:</h2>
            <ol>
                <li>Room in Nanterre, {destination}
                    <div className='pics'>
                        <img src={paris11} alt="" className='pictures'/>
                        <p className="mr-[160px] text-[25px]">View More</p>
                    </div>
                </li>
                <li>Garges-lès-Gonesse, {destination}
                    <div className='pics'>
                        <img src={paris21} alt="" className='pictures'/>
                        <p className="mr-[160px] text-[25px]">View More</p>
                    </div>
                </li>
                <li>Asnières-sur-Seine, {destination}
                    <div className='pics'>
                        <img src={paris31} alt="" className='pictures'/>
                        <p className="mr-[160px] text-[25px]">View More</p>
                    </div>
                </li>
            </ol>
        </div>
    );
}
export default Hotels