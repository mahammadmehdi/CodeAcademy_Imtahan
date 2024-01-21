import React from 'react'
import "./index.scss"

function CustomersSay() {
  return (
    <div className='customersSay'>
        <div className="customersSayAll">
            <div className="name">Customers Say</div>
            <div className="header">REVIEW</div>
            <img src="https://preview.colorlib.com/theme/pato/images/avatar-05.jpg.webp" alt="" />
            <div className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur nesciunt quae ipsa provident voluptas dolore sed a autem, iusto repellendus earum? Voluptas voluptates laboriosam quod eligendi eum temporibus aliquam corporis facilis d </div>
            <div className="icons">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>

            </div>
            <div className="author">
                Marrie Simons-New York
            </div>
            
        </div>
    </div>
  )
}

export default CustomersSay