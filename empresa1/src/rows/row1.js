import React, { Component } from 'react';
import Slider from "react-slick";

class Row1 extends Component {
  render() {
    var settings = {
	  accesibility: true,
	  arrows: true,
	  infinite: true,
	  speed: 500,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  adaptiveHeight: true
    };
    return (
      <div className="Row1_crrusel">
        <Slider {...settings}>
          <div>
            <img alt="laboratorio1" src="./img/laboratory1.jpg" />
          </div>
          <div>
            <img alt="laboratorio2" src="./img/laboratory2.jpg" />
          </div>
          <div>
            <img alt="laboratorio3" src="./img/laboratory3.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}
export default Row1;
