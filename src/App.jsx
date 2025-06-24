import React from 'react'
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Places from './Components/Places/Places'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Customer from './Components/CustomerPlaces/Customer'
import Bookings from './Components/Bookings/Bookings'
import Placedetails from './Components/Placedata/Placedetails'
import Hotels from './Components/Hotels/Hotels'
import Bookhotel from './Components/Bookhotel/Bookhotel'

function App() {
  return(<>
           <Router>
             <Navbar />
             <Routes>
              <Route path='/' element={<Hero />}/>
              <Route path='/home' element={<Navigate to='/'/>}/>
              <Route path='/about-us' element={<div className='container'>
                                                  <About/>
                                                </div>}/>
              <Route path='/places' element={<>
                                              <div className='container'>
                                                <Title title='Places you may like'/>
                                                <Places />
                                                <Title title='Gallery' subtitle='Pictures from our previous customers'/>
                                                <Customer/>
                                              </div>
                                             </>}/>
              <Route path='/bookings' element={<>
                                                <div className='container'>
                                                  <Bookings/>
                                                </div>
                                               </>}/>
              <Route path='/placedetails/:placeName' element={<Placedetails/>}/>
              <Route path='/hotels/:placeName' element={<Hotels/>}/>
              <Route path='/book/:placeName/:hotelName' element={<Bookhotel/>}/>
             </Routes>
           </Router>
         </>
  );
}

export default App
                                             
                                             
                                    
