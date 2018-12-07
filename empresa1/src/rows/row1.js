import React, { Component } from 'react';
import Slider from "react-slick";

class Row1 extends Component {
  constructor(props){
    super(props);
    this.state= {
      slider: null
    };
    this.EventoChangeOverlay = this.EventoChangeOverlay.bind(this);
  }


  componentDidMount() {
    this.setState({
      slider: this.slider,
    });
  }
  EventoChangeOverlay(){
    this.state.slider.slickGoTo(1)
    console.log(this.state);
  }
  render() {
    var settings = {
	  accesibility: true,
	  arrows: false,
	  infinite: true,
	  speed: 500,
	  autoplay: false,
    adaptiveHeight: true,
    dots: true,
    afterChange:  index=> this.EventoChangeOverlay()
    };
    return (
      <div className="Row1_crrusel">
        <Slider {...settings} asNavFor={this.state.slider}  ref={slider => (this.slider = slider)} >
          <div className="video_container">
              <div className="Overlay_Home" id="overlay_1"></div>
              <div className="Text_container_home">
                    <h2>ENERGY</h2>
              </div>
              <video autoPlay="autoplay" loop="loop" muted="muted">
                <source src="./video/Energy.mp4" type="video/mp4"/> 
              </video>
          </div>
          <div className="video_container">
              <div className="Overlay_Home" id="overlay_2"></div> 
              <div className="Text_container_home">
                    <h2>Manufacturing</h2>
              </div>                     
              <video autoPlay="autoplay" loop="loop" muted="muted">
                  <source src="./video/Manufacturing.mp4" type="video/mp4"/> 
              </video>
          </div>
        </Slider>
      </div>
    );
  }
}
export default Row1;
