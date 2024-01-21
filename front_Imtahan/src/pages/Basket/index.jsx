import React, { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import "./index.scss"

function Basket() {
  const {  increase, decrease, removeBasket, basket } =
    useContext(BasketContext);
  return (
    <div className="basketPage">
      <div className="cards">
        {basket.map((x) => (
          <ul key={x._id} className="card">
            <li className="image">
              {" "}
              <img src={x.image} />
            </li>
            <li className="name">{x.name}</li>
            <li className="desc">{x.desc}</li>
            <li className="price">${x.price}</li>
            <li onClick={() => increase(x)}>increase</li>
            <div>{x.count}</div>
            <li onClick={() => decrease(x)}>decrease</li>
            <li onClick={() => removeBasket(x)}>removeBasket</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Basket;
