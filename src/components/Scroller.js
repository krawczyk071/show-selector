import React from "react";
import CardMedium from "./CardMedium";
import Slider from "react-slick";

const Scroller = ({ movies }) => {
  const cards = movies.map((movie) => {
    return <CardMedium key={movie.id} movie={movie} />;
  });

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="scroller">
      <h1>Recomended:</h1>
      <Slider {...settings}>{cards}</Slider>
    </div>
  );
};

export default Scroller;
