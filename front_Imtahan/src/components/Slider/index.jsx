import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.scss"

function Slider() {
  return (
    <div className="slider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="restaurant">
            <div className="welcome">Welcome to</div>
            <h2 className="header">PATO PLACE</h2>
            <button className="btn">Look Menu</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="beaftek">
            <div className="welcome">Welcome to</div>
            <h2 className="header">PATO PLACE</h2>
            <button className="btn">Look Menu</button>
          </div>
        </SwiperSlide>
        <SwiperSlide><div className="salad">
            <div className="welcome">Welcome to</div>
            <h2 className="header">PATO PLACE</h2>
            <button className="btn">Look Menu</button>
          </div></SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}

export default Slider;
