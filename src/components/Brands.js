import React from 'react';
import './Brands.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BPLogo from './images/BPLogo.png';
import amoco from './images/amoco.png';
import mobil from './images/Mobil-Logo.wine.png';
import chevron from './images/Chevron.png';
import texaco from './images/texaco.png';
import exxon from './images/exxon.png';
import sunoco from './images/sunoco-logo.png';
import citgo from './images/citgo.png';
import shell from './images/shell.png';
function Brands() {
    var settings = {
        arrows:false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows:false 
            }
          },
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows:false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false
            }
          }
        ]
      };
  return (
    <div>
      <section className='brands'>
        <Slider className='carousel
        ' {...settings}>
          <div><img src={BPLogo} alt="BP Logo" /></div>
          <div><img src={amoco} alt="amoco Logo" /></div>
          <div><img src={shell} alt="shell Logo" /></div>
          <div><img src={exxon} alt="exxon Logo" /></div>
          <div><img src={sunoco} alt="sunoco Logo" /></div>
          <div><img src={texaco} alt="texaco Logo" /></div>
          <div><img src={chevron} alt="chevron Logo" /></div>
          <div><img src={mobil} alt="mobil Logo" /></div>
          <div><img src={citgo} alt="citgo Logo" /></div>
        </Slider>
      </section>
    </div>
  )
}

export default Brands
