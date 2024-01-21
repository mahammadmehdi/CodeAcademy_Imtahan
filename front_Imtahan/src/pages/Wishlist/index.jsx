import React, { useContext } from "react";
import { WishlistContext } from "../../context/wishlistContext";
import "./index.scss"
import { Helmet } from "react-helmet-async";

function Wishlist() {
  const { wishlist, addWishlist, isWishlist } = useContext(WishlistContext);
  return (
    <div className="wislistPage">
        <Helmet>
            <title>Wishlist</title>
        </Helmet>
      <div className="cards">
        {wishlist.map((x) => (
          <ul className="card" key={x._id}>
            
                <li className="image"><img src={x.image}  /></li>
        
                <li className="name">{x.name}</li>
              
                <li className="desc">{x.desc}</li>
              
                <li className="price">${x.price}</li>
              
              <i onClick={()=>addWishlist(x)} className={`fa-solid fa-heart ${isWishlist(x) ? "red" : ""}  `}></i>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
