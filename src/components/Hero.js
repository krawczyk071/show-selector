import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="hero layout-lg" onClick={() => navigate(data.url)}>
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
