import React from 'react'
import './Contact.css'

function Contact() {
    return(
        <div className='container'>
            <h1 className='contact text-[40px] text-[#2d232e] mt-[100px] ml-[-30px]'>Have any queries? Reach us out!</h1>
            <p>
                <img src="https://img.icons8.com/ios-filled/20/000000/new-post.png" alt="Email Icon" />
                Email: <a href="mailto:contact@wandernest.com">contact@wandernest.com</a>
            </p>
            <p>
                <img src="https://img.icons8.com/ios-glyphs/20/000000/instagram-new.png" alt="Instagram Icon" />
                Instagram: <a href="https://www.instagram.com/wandernest" target="_blank">@wandernest</a>
            </p>
            <p>
                <img src="https://img.icons8.com/ios-filled/20/000000/phone.png" alt="Phone Icon" />
                Phone: +91 xxxxx xxxxx
            </p>
        </div>
    );
}
export default Contact