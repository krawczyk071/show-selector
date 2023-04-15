import React, { useState } from "react";
import { IMAGE_PATH } from "../utils/fetchFromAPI";
import { useNavigate } from "react-router-dom";

const Card = ({ movie, addWatch, watch }) => {
  const [liked, setLiked] = useState(() => {
    return watch.some((w) => w.id === movie.id) ? true : false;
  });
  const navigate = useNavigate();
  function handleLike(e, movie) {
    e.stopPropagation();
    addWatch(movie);
    setLiked(true);
  }
  return (
    <div className="card" onClick={() => navigate(`/movie/${movie.id}`)}>
      <img
        className="card__img"
        src={IMAGE_PATH + movie.poster_path}
        alt="cover"
      />
      <div className="card__info">
        <p className="card__title">{movie.title}</p>
        <p className="card__text">Genre</p>
        <div className="card__icon" onClick={(e) => handleLike(e, movie)}>
          {liked ? "X" : <i className="fa fa-search"></i>}
        </div>
      </div>
    </div>
  );
};

export default Card;
