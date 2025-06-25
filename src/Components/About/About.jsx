import React, {useState} from 'react'
import './About.css'
import playIcon from '../../assets/playIcon.png'
import flightPerson from '../../assets/flightPerson.jpg'

function About() {
    const [play, setPlay] = useState(false);

    return(
        <div className='about'>
            <div className='about-left'>
                {play ? (<div className='video'>
                              <iframe src='https://www.youtube.com/embed/ShLu1dJHlfA?si=gK-2HP4l1X9iO28R' title='Intro to our website' allow='autoplay; encrypted-media' 
                                      allowFullScreen></iframe>
                         </div>) : 
                            (
                                <div onClick={() => setPlay(true)}>
                                    <img src={flightPerson} alt="" className='w-[40em] rounded-[10%] h-[24em] cursor-pointer'/>
                                    <img src={playIcon} alt="" className='w-[60px] rounded-[10%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'/>
                                </div>
                            )}
                
            </div>
            <div className='about-right'>
                <h3 className='pt-[150px]'>Who are we?</h3>
                <p>At WanderNest, we believe travel isn’t just about reaching a destination—it’s about 
                    the stories you collect along the way. Born from a shared love for adventure, 
                    we started this platform to help every kind of traveler plan smarter, discover more, 
                    and explore with ease. From curated itineraries and hidden gems to travel tips and 
                    exclusive deals, everything you need is just a click away.
                </p>
                <p>Our mission is to make travel simple, meaningful, and accessible. With real experiences, 
                    honest advice, and a focus on responsible travel, we’re here to guide you—whether it’s 
                    your first trip or your fiftieth. Join our community of explorers and let the journey begin.
                </p>
            </div>
        </div>
    );
}
export default About