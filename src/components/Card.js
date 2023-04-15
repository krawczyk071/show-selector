import React, { useState } from "react";
import { IMAGE_PATH } from "../utils/fetchFromAPI";
import { useNavigate } from "react-router-dom";
import { FavContext } from "../context/favorites";
import { useContext } from "react";

const Card = ({ movie, addWatch, watch }) => {
  const [favState, dispatch] = useContext(FavContext);
  const [liked, setLiked] = useState(() => {
    return favState.some((w) => w.id === movie.id) ? true : false;
  });
  const navigate = useNavigate();
  function handleLike(e, movie) {
    e.stopPropagation();
    // addWatch(movie);
    dispatch({ type: "TOGG_MOVIE", payload: movie });
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
          {liked ? (
            <i className="fa-solid fa-star"></i>
          ) : (
            <i className="fa-regular fa-star"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
