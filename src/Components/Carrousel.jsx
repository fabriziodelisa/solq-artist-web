
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./Carrousel.css";

// function PauseOnHover() {
//     const baseUrl = process.env.PUBLIC_URL + '/Multimedia/EsaConviccion';
//     const corazon = baseUrl + '/corazon.jpg';
//     const entero = baseUrl + '/entero.jpg';
//     const entero2 = baseUrl + '/entero2.jpg';
//     const interior = baseUrl + '/interior.jpg';
//     const castagnino1 = baseUrl + '/castagnino1.jpeg';
//     const castagnino2 = baseUrl + '/castagnino2.jpeg';

//   var settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     pauseOnHover: true
//   };
//   return (
//     <div className="carousel">
//       <div className="slider-container">
//         <h3><u>Esa convicción interior, invencible</u></h3>
//         <br/>
//         <Slider {...settings}>
//           <div>
//            <img src={corazon} alt="" /> 
//           </div>
//           <div>
//             <img src={entero} alt="" />
//           </div>
//           <div>
//             <img src={interior} alt="" />
//           </div>
//           <div>
//             <img src={entero2} alt="" />
//           </div>
//           <div>
//             <img src={castagnino2} alt="" />
//           </div>
//           <div>
//             <img src={castagnino1} alt="" />
//           </div>
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default PauseOnHover;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carrousel.css";

function Carrousel({urlImagenes}) {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <div className="carousel">
      <div className="slider-container">
        <h3>
          <u>Esa convicción interior, invencible</u>
        </h3>
        <br />
        <Slider {...settings}>
          {urlImagenes.map((imagePath, index) => (
            <div key={index}>
              <img src={imagePath} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carrousel;