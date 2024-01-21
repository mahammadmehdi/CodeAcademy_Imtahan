import React from "react";
import "./index.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="foot">
        <div className="top">
          <div className="contact">
            <div className="contactUs">
              <h3>Contact Us</h3>
              <div className="location">
                <i className="fa-solid fa-map-pin"></i>
                <p> 8th floor, 379 Hudson St, New York, NY 10018</p>
              </div>
              <div className="phone">
                <i className="fa-solid fa-phone"></i>
                <p> (+1) 96 716 6879</p>
              </div>
              <div className="email">
                <i className="fa-solid fa-envelope"></i>
                <p>contact@site.com</p>
              </div>
            </div>
            <div className="opneningTime">
              <h3>Opnening Times</h3>
              <div className="time">09:30 AM – 11:00 PM Every Day</div>
            </div>
          </div>
          <div className="latestTwitter">
            <h3>Latest Twitter</h3>
            <div className="email">
              Activello is a good option. It has a slider built into that
              displays the featured image in the slider. https://buff.ly/2zaSfAQ
            </div>
            <div className="buuf">
              Activello is a good option. It has a slider built into that
              displays https://buff.ly/2zaSfAQ
            </div>
          </div>
          <div className="gallery">
            <h3>Gallery</h3>
            <div className="image">
              <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-01.jpg.webp" />
              <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-02.jpg.webp" />
              <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-03.jpg.webp" />
              <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-04.jpg.webp" />
              <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-05.jpg.webp" />
              <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-06.jpg.webp" />
              <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-07.jpg.webp" />
              <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-08.jpg.webp" />
              <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-09.jpg.webp" />
              <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-10.jpg.webp" />
              <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-11.jpg.webp" />
              <img src="https://preview.colorlib.com/theme/pato/images/photo-gallery-thumb-12.jpg.webp" />
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="right">@ 2017 Colorlib. Get The Theme</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
