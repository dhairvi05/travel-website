import React from 'react'
import './Customer.css'
import people1 from '../../assets/people1.jpg'
import tourists2 from '../../assets/tourists2.jpg'
import city2 from '../../assets/city2.jpg'
import tourists1 from '../../assets/tourists1.jpg'
import tourists3 from '../../assets/tourists3.jpg'
import pisaTower from '../../assets/pisaTower.jpg'

function Customer() {
    return(
        <div className='customer'>
            <div className='gallery'>
                <img src={people1} alt=""/>
                <img src={tourists2} alt="" className='h-[200px]'/>
                <img src={city2} alt=""/>
                <img src={tourists1} alt="" className='h-[200px]'/>
                <img src={tourists3} alt=""/>
                <img src={pisaTower} alt=""/>
            </div>
            <button className='btn darkbtn'>See More</button>

        </div>
    );
}
export default Customer