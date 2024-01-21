import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss"
import Slider from "../../components/Slider";

function Navbar() {
  return (
    <div className="navigation">
       
      <div className="navbar">
        <div className="left">
            <img className="image" src="https://preview.colorlib.com/theme/pato/images/icons/logo.png.webp" alt="" />
        </div>
        <div className="main">
          <ul className="pages">
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/addpages"}>Add Pages</NavLink></li>
            <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
            <li><NavLink to={"/basket"}>Basket</NavLink></li>
            <li><NavLink>Menu</NavLink></li>
            <li><NavLink>Reservation</NavLink></li>
            <li><NavLink>Blog</NavLink></li>
          </ul>
        </div>
        <div className="right">
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      <Slider></Slider>
    </div>
  );
}

export default Navbar;
