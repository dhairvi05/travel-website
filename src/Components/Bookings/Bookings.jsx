import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Bookings.css'

function Bookings() {
        const [destination, setDestination] = useState('');
        const [adults, setAdults] = useState(1);
        const [kids, setKids] = useState(0);
        const [checkIn, setCheckIn] = useState('');
        const [checkOut, setCheckOut] = useState('');
        const navigate = useNavigate();
        const handleSubmit = () => {
            if(destination.trim() != '') {
                navigate(`/hotels/${destination}`);
            }
        };
        const today = new Date().toISOString().split('T')[0];
        
    return(
        <div className='container'>
            <h2 className='book text-[40px] text-[#2d232e] mt-[100px] ml-[-30px]'>Book you next trip now!</h2>
            <form onSubmit={handleSubmit}>
                <div className='book-place'>                
                    <div>
                        <label>Select a destination:</label>
                        <select className='pt-[10px] destination' value={destination} onChange={(e) => setDestination(e.target.value)} required>
                            <option value=''>Select</option>
                            <option value='India'>India</option>
                            <option value='Hawaii'>Hawaii</option>
                            <option value='Australia'>Australia</option>
                            <option value='Paris'>Paris</option>
                        </select>
                    </div>
                    <div>
                        <label>Select check-in date:</label>
                        <input type='date' className='destination' value={checkIn} onChange={(e) => setCheckIn(e.target.value)} min={today} required/>
                    </div>
                    <div>
                        <label>Select check-out date:</label>
                        <input type='date' className='destination' value={checkOut} onChange={(e) => setCheckOut(e.target.value)} min={checkIn || today} min={today} required/>
                    </div>
                    <div>
                        <label>Number of Adults:</label>
                        <input type='number' min='1' value={adults} onChange={(e) => setAdults(e.target.value)} className='py-[1px] pl-[5px] my-[5px] mx-[10px] w-[60px]' required/>
                    </div>
                    <div>
                        <label>Number of children:</label>
                        <input type='number' min='0' min='0' value={kids} onChange={(e) => setKids(e.target.value)} className='py-[1px] pl-[5px] my-[5px] mx-[10px] w-[60px]' required/>
                    </div>
                </div>
                    <button className='btn bg-center my-[10px] flex items-center justify-center' type='submit'>Search</button>
            </form>
        </div>
    );
}
export default Bookings


 