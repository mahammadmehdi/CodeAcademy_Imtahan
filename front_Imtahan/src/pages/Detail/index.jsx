import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import "./index.scss"

function Detail() {
    const [detail, setDetail] = useState([])

    const {id} = useParams()
    useEffect(() => {
        fetch("http://localhost:3000/"+id)
        .then((res) => res.json())
        .then((data) => setDetail(data));
    }, [])
    
  return (
    <div className='detailPage'>
        <Helmet>
            <title>Detail</title>
        </Helmet>
        <div className="cards">
            <div className="card">
                <li className='image'><img src={detail.image} alt="" /></li>
                <li className='name'>{detail.name}</li>
                <li className='desc'>{detail.desc}</li>
                <li className='price'>${detail.price}</li>

            </div>
        </div>
    </div>
  )
}

export default Detail