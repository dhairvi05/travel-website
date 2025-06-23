import React from 'react'
import {useLocation, useParams} from 'react-router-dom'
import './Hotels.css'
import Hotelsdata from './Hotelsdata.js'

function Hotels() {
        const {placeName} = useParams();
        const placeKey = placeName.charAt(0).toUpperCase() + placeName.slice(1).toLowerCase();
        const hotels = Hotelsdata[placeKey];
        return(
            <div className="container">
                <h1 className="hotels-title pt-[100px] text-[60px] text-[#2e2323]">Hotels in {placeKey}:</h1>
                {hotels.map((hotel, idx) => (
                    <div key={idx} className="hotels-card">
                        <div className="hotels-left">
                            <h2 className="text-2xl font-semibold mb-2">{hotel.name}</h2>
                            <div className="hotels-images">
                            {hotel.images.map((img, i) => (
                                <img key={i} src={img} alt={`${hotel.name} ${i + 1}`} 
                                    className={`hotels-img ${hotel.name === 'Asnières-sur-Seine' && i === 0 ? "h-[180px]" : ""}`}/>
                            ))}
                            </div>
                        </div>
                        <div className="hotels-right">
                            <p><strong>Location:</strong> {hotel.location}</p>
                            <p><strong>Price:</strong> {hotel.price}</p>
                            <p><strong>Rating:</strong> ⭐ {hotel.rating}</p>
                            <div className='pt-[20px]'>
                                <button className='btn'>Book Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
}
export default Hotels