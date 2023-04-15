import React from "react";
import CardMedium from "./CardMedium";
import Slider from "react-slick";

const Scroller = ({ movies }) => {
  const cards = movies.map((movie) => {
    return <CardMedium movie={movie} />;
  });

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    // <div className="scroller">
    // </div>
    <Slider {...settings}>{cards}</Slider>
  );
};

export default Scroller;
