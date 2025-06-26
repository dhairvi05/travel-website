import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './Bookhotel.css'

function Bookhotel() {
    const {place, hotelName} = useParams();
    const [adults, setAdults] = useState(1);
    const [kids, setKids] = useState(0);
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [payment, setPayment] = useState('');

    const handleBooking = (e) => {
        e.preventDefault();
        alert(`Booking confirmed at ${hotelName} in ${place}! \n Adults: ${adults} \n Kids: ${kids}\n From: ${checkIn} To: ${checkOut} \n Payment: ${payment}`);
    };

    return(
        <div className='container'>
            <h1 className='mt-[90px] text-[50px] text-[##2e2323]'>Book {decodeURIComponent(hotelName)}</h1>
            <form className='form' onSubmit={handleBooking}>
                <div>
                    <label>Check-in Date: </label>
                    <DatePicker selected={checkIn} onChange={(date) => setCheckIn(date)} minDate={new Date()} required/>
                </div>
                <div>
                    <label>Check-out Date: </label>
                    <DatePicker selected={checkOut} onChange={(date) => setCheckOut(date)} minDate={checkIn || new Date()} required/>
                </div>
                <div>
                    <label>Number of Adults: </label>
                    <input type='number' min='1' value={adults} onChange={(e) => setAdults(e.target.value)} required/>
                </div>
                <div>
                    <label>Number of Kids: </label>
                    <input type='number' min='0' value={kids} onChange={(e) => setKids(e.target.value)} required/>
                </div>
                <div>
                    <label>Select Payment Method:</label>
                    <select value={payment} onChange={(e) => setPayment(e.target.value)} required>
                        <option value="">Select</option>
                        <option value="UPI">UPI</option>
                        <option value="Credit/Debit Card">Credit/Debit Card</option>
                    </select>
                </div>
                <div>
                    <button className='btn' type='submit'>Confirm Boooking</button>
                </div>
            </form>
        </div>
    );
}
export default Bookhotel