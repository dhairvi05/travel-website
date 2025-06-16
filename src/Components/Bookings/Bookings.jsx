import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Bookings.css'

function Bookings() {
    const [destination, setDestination] = useState('');
    const navigate = useNavigate();
    const handleSearch = () => {
        if(destination.trim() != '') {
            navigate('/hotels',{state: {destination}});
        }
    };
        
    return(
        <div className='container'>
            <h2 className='text-[40px] text-[#2d232e] mt-[100px] ml-[-30px]'>Book you next trip now!</h2>
            <div className='book-place'>
                <p className='pt-[10px]'>Search for destination:</p>
                <input type='text' placeholder='Destination' className='destination' 
                    value={destination} onChange={(e) => setDestination(e.target.value)} />
                <p>Select check-in date:</p>
                <input type='date' className='destination' />
                <p>Select check-out date:</p>
                <input type='date' className='destination'/>
                <p>Number of Adults:</p>
                <select className='py-[5px] pl-[5px] my-[5px mx-[10px] w-[60px]'>
                    <option>1</option>
                    <option>2</option>
                </select>
                <p>Number of children:</p>
                <select className='py-[5px] pl-[5px] my-[5px mx-[10px] w-[60px]'>
                    <option>1</option>
                    <option>2</option>
                </select>
            </div>
            <button className='btn bg-center my-[10px] flex items-center justify-center' onClick={handleSearch}>Search</button>
        </div>
    );
}
export default Bookings