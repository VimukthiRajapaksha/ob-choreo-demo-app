import React from 'react'
import '../../../css/LandingPage.css'
import Container from "react-bootstrap/Col";
import {Carousel} from "react-bootstrap";
import Slider1 from "../../../images/Slider1.jpg"
import Slider2 from "../../../images/Slider2.jpg"
import Slider3 from "../../../images/Slider3.jpg"

export const SliderView = () => {

  return(
    <Container className = "slider-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-image"
            src={Slider1}
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-image"
            src={Slider2}
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-image"
            src={Slider3}
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}