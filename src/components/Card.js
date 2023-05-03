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
    <div
      className="w-52 relative transition-all duration-200 mb-4 rounded-3xl overflow-hidden hover:scale-105"
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <img className="max-w-full block" src={cover} alt="cover" />
      <div className="bg-gray-700/70 text-tlight absolute bottom-0 w-full flex flex-col">
        <p className="text-base m-0 py-1 px-4 h-20 overflow-hidden">
          {movie.title}
        </p>
      </div>
      <div
        className="absolute top-0 right-1 flex items-center justify-center py-2 px-0"
        onClick={(e) => handleLike(e, movie)}
      >
        <Star liked={liked} />
      </div>
    </div>
  );
};

export default Card;
