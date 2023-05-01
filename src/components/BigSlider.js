import React from "react";
import Slider from "react-slick";
import Hero from "./Hero";
import { herosData } from "../utils/data";

const BigSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
  };
  const heros = herosData.map((hero) => <Hero key={hero.title} data={hero} />);

  return <Slider {...settings}>{heros}</Slider>;
};

export default BigSlider;
