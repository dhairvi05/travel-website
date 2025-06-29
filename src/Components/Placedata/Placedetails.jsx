import React, {useState} from 'react'
import {useNavigate, useParams, Link} from 'react-router-dom'
import PlaceData from './Placedata.js'
import './Placedata.css'

function Placedetails() {
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    const {placeName} = useParams();
    const place = PlaceData[capitalize(placeName)];
    const navigate = useNavigate();

    const handleCheckHotels = () => {
            navigate(`/hotels/${place.name}`);
        };

    const [image, setImage] = useState(null);
    const openImg = (src) => {
        setImage(src);
        };
    const closeImg =() => {
        setImage(null);
         };

    return(
        <div className='container'>
            <h1 className='name'>{place.name}</h1>
            <div className='images'>
                {place.images.map((url,idx) => (
                    <img key={idx} src={url} alt={`${place.name} ${idx+1}`}
                        className={`${place.name === "India" && idx === 3 ? "pt-[1px] h-[300px]" : ""}
                                    ${place.name === "India" && idx === 2 ? "h-[300px]" : ""}
                                    ${place.name === "Hawaii" && idx === 3 ? "pt-[23px]" : ""}
                                    ${place.name === "Hawaii" && idx === 2 ? "h-[275px]" : ""}`}
                        onClick={()=>openImg(url)}/>
                ))}
            </div>
            <p className='description pt-[30px] text-[30px]'>{place.description}</p>
            <div className='flex justify-center pt-[10px]'>
                <button className='btn flex items-center justify-center' onClick={handleCheckHotels}>Check Hotels</button>
            </div>
            {image && (
                    <div className='big-place' onClick={closeImg}>
                        <img src={image} alt="Enlarged" className='popup-place'/>
                    </div>
                )}
        </div>
    );
}
export default Placedetails


