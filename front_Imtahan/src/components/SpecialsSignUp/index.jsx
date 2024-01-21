import React from 'react'
import './index.scss'

function SpecialUp() {
  return (
    <div className='SpecialUp'>
        <div className="specialUpAll">
            <div className="header">SPECIALS SIGN UP</div>
            <div className="input">
                <input type="text" placeholder='E-mail Adress'/>
                <i className="fa-solid fa-envelope"></i>
            </div>
            <button className='btn'>Sign-Up</button>
        </div>
    </div>
  )
}

export default SpecialUp