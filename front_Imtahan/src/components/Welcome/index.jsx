import React from 'react'
import "./index.scss"

function Welcome() {
  return (
    <div className='welcomePage'>
        <div className="welcomeAll">
            <div className="left">
                <div className="name">Italian Restaurant</div>
                <h3 className="header">WELCOME</h3>
                <div className="desc">Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</div>
                <div className="ourStory">
                    <span className='text'>OUR STORY</span><span><i className="fa-solid fa-arrow-right"></i></span>
                </div>
            </div>
            <div className="right">
                <img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg.webp" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Welcome