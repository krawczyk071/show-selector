import React from "react";
import { IMAGE_PATH } from "../utils/fetchFromAPI";
import { useNavigate } from "react-router-dom";

const CardMedium = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      className="card card--medium"
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
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

export default CardMedium;
