import React, { useEffect, useState } from "react";
import { IMAGE_PATH } from "../utils/fetchFromAPI";
import { useNavigate } from "react-router-dom";
import { FavContext } from "../context/favorites";
import { useContext } from "react";
import Star from "./Star";

const Card = ({ movie, addWatch, watch }) => {
  const [favState, dispatch] = useContext(FavContext);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    setLiked(favState.some((w) => w.id === movie.id) ? true : false);
  }, [favState, movie]);
  function handleLike(e, movie) {
    e.stopPropagation();
    dispatch({ type: "TOGG_MOVIE", payload: movie });
  }
  const navigate = useNavigate();
  const cover = movie.poster_path
    ? IMAGE_PATH + movie.poster_path
    : "/img/noimg.svg";
  return (
    <div className="card" onClick={() => navigate(`/movie/${movie.id}`)}>
      <img className="card__img" src={cover} alt="cover" />
      <div className="card__info">
        <p className="card__title">{movie.title}</p>
        {/* <p className="card__text">Genre</p> */}
      </div>
      <div className="card__icon" onClick={(e) => handleLike(e, movie)}>
        <Star liked={liked} />
      </div>
    </div>
  );
};

export default Card;
