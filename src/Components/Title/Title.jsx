import React from 'react'
import './Title.css'

function Title({subtitle, title}) {
    return(
        <div className='title'>
            <h2>{title}</h2>
            <h5>{subtitle}</h5>
        </div>
    );
}

export default Title