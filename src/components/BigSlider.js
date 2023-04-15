import React from "react";
import Slider from "react-slick";
import Hero from "./Hero";

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{ ...style, display: "block", background: "green" }}
    ></div>
  );
}

const BigSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    // prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      <Hero />
      <Hero />
      <Hero />
    </Slider>
  );
};

export default BigSlider;
