import React from 'react';
import Slider from "react-slick";
import img1 from "./images/carousel/img1.jpg";
import img2 from "./images/carousel/img2.jpg";
import img3 from "./images/carousel/img3.png";

export class Carousel extends React.Component {
  constructor() {
    super()
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    
    return (
      <Slider {...settings} className="Carousel">
        <div>
          <h3><img src={img1} alt="no image" /></h3>
        </div>
        <div>
          <h3><img src={img2} alt="no image" /></h3>
        </div>
        <div>
          <h3><img src={img3} alt="no image" /></h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
    </Slider>
    )
  }
}