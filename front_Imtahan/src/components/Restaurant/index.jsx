import React, { useContext, useEffect, useState } from "react";
import "./index.scss"
import { WishlistContext } from "../../context/wishlistContext";
import { NavLink } from "react-router-dom";
import { BasketContext } from "../../context/BasketContext";

function Restaurant() {
    const {addBasket} = useContext(BasketContext)
  const [restaurant, setRestaurant] = useState([]);
  const {addWishlist,isWishlist} = useContext(WishlistContext)

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setRestaurant(data));
  }, []);

  return (
    <div className="restaurantPage">
      <div className="restaurantAll">
        {restaurant.map((x) => (
          <ul key={x._id} className="cards">
            <li className="image"><img src={x.image} alt="" /></li>
            <li className="name">{x.name}</li>
            <li className="desc">{x.desc}</li>
            <li className="price">${x.price}</li>
            <li className="icons"><i onClick={()=>addWishlist(x)} className={`fa-solid fa-heart ${isWishlist(x) ? "red" : ""}  `}></i> <NavLink to={"/detail/"+x._id}><i className="fa-solid fa-eye"></i></NavLink><li onClick={()=>addBasket(x)}><i className="fa-solid fa-bag-shopping"></i></li></li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Restaurant;
