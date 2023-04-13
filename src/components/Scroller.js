import React from "react";
import CardMedium from "./CardMedium";

const Scroller = ({ movies }) => {
  const cards = movies.map((movie) => {
    return <CardMedium movie={movie} />;
  });
  return <div className="scroller">{cards}</div>;
};

export default Scroller;
