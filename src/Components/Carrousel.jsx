
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carrousel.css";
import dbz from '../Multimedia/dbz.jpg';
import goku from '../Multimedia/goku.jpg';
import gohan from "../Multimedia/gohan.webp";

function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true
  };
  return (
    <div className="carousel">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
           <img src={dbz} alt="" /> 
          </div>
          <div>
            <img src={goku} alt="" />
          </div>
          <div>
            <img src={gohan} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default PauseOnHover;