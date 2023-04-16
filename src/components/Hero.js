import React from "react";

const Hero = ({ data }) => {
  return (
    <div className="hero layout-lg">
      <div className="hero__text">
        <h1>{data.title}</h1>
        <h2>{data.text}</h2>
      </div>
      <div className="hero__photo">
        <img className="hero__img" src={data.img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
