import React from 'react'
import "./index.scss"

function LatestNews() {
  return (
    <div className='latestNews'>
        <div className="latestNewsAll">
            <div className="name">Latest News</div>
            <div className="header">THE BLOG</div>
            <div className="cards">
                <div className="card">
                    <img className='image' src="https://preview.colorlib.com/theme/pato/images/blog-01.jpg.webp" alt="" />
                    <div className="nameCard">BEST PLACES FOR WINE</div>
                    <div className="desc">Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</div>
                    <div className="continue">
                        <span className='text'>Continue Reading</span> <span><i className="fa-solid fa-arrow-right"></i></span>
                    </div>
                </div>
                <div className="card">
                    <img className='image' src="https://preview.colorlib.com/theme/pato/images/blog-02.jpg.webp" alt="" />
                    <div className="nameCard">EGGS AND CHEESE</div>
                    <div className="desc">Duis elementum, risus sit amet lobortis nunc justo condimentum ligula, vitae feugiat</div>
                    <div className="continue">
                    <span className='text'>Continue Reading</span> <span><i className="fa-solid fa-arrow-right"></i></span>

                    </div>
                </div>
                <div className="card">
                    <img className='image' src="https://preview.colorlib.com/theme/pato/images/blog-03.jpg.webp" alt="" />
                    <div className="nameCard">STYLE THE WEDDING PARTY</div>
                    <div className="desc">Sed ornare ligula eget tortor tempor, quis porta tellus dictum.</div>
                    <div className="continue">
                    <span className='text'>Continue Reading</span> <span><i className="fa-solid fa-arrow-right"></i></span>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LatestNews