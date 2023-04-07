import React from "react";
import { IMAGE_PATH } from "../utils/fetchFromAPI";

const Card = ({ movie }) => {
  return (
    <div className="card">
      <img
        className="card__img"
        src={IMAGE_PATH + movie.poster_path}
        alt="cover"
      />
      <div className="card__info">
        <p className="card__title">{movie.title}</p>
        <p className="card__text">Genre</p>
        <div className="card__icon">
          <i className="fa fa-search"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
