import React from 'react';
import Slider from "react-slick";
import banner1 from "../images/banner1.png";
import banner2 from "../images/banner2.jpg";
import banner4 from "../images/bannar4.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Banner.css"

const Banners = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // Set the interval between slides
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide navigation arrows
    pauseOnHover:false
  };

  return (
    <Slider {...settings}>
      <div >
        <img src={banner1} alt="Banner 1" className='w-full bannerimg' />
      </div>
      <div>
        <img src={banner2} alt="Banner 2" className='w-full bannerimg ' />
      </div>
      <div>
        <img src={banner4} alt="Banner 3" className='w-full bannerimg' />
      </div>
    </Slider>
  );
};

export default Banners;
