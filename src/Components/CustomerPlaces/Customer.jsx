import React, {useState} from 'react'
import './Customer.css'
import people1 from '../../assets/people1.jpg'
import tourists2 from '../../assets/tourists2.jpg'
import city2 from '../../assets/city2.jpg'
import tourists1 from '../../assets/tourists1.jpg'
import tourists3 from '../../assets/tourists3.jpg'
import pisaTower from '../../assets/pisaTower.jpg'

function Customer() {
    const [image, setImage] = useState(null);
    const openImg = (src) => {
        setImage(src);
    };
    const closeImg =() => {
        setImage(null);
    };

    return(
        <div className='customer'>
            <div className='gallery'>
                <img src={pisaTower} alt="" onClick={()=>openImg(pisaTower)}/>
                <img src={tourists2} alt="" onClick={()=>openImg(tourists2)} className='h-[238px]'/>
                <img src={city2} alt="" onClick={()=>openImg(city2)}/>
                <img src={tourists1} alt="" onClick={()=>openImg(tourists1)} className='h-[242px]'/>
                <img src={tourists3} alt="" onClick={()=>openImg(tourists3)}/>
                <img src={people1} alt="" onClick={()=>openImg(people1)}/>
            </div>
            {image && (
                <div className='big' onClick={closeImg}>
                    <img src={image} alt="Enlarged" className='popup' style={image === people1 ? {width: '70vw', height: 'auto'} : {}}/>
                </div>
            )}
        </div>
    );
}
export default Customer