import React from "react";
import { IMAGE_PATH } from "../utils/fetchFromAPI";
import { useNavigate } from "react-router-dom";

const CardMedium = ({ movie }) => {
  const navigate = useNavigate();
  const photo = movie.poster_path
    ? IMAGE_PATH + movie.poster_path
    : "/img/noimg.svg";
  return (
    <div
      className="w-40 h-56 relative transition-all duration-200 mb-4 rounded-3xl overflow-hidden hover:scale-105 "
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <img className="max-w-full block" src={photo} alt="cover" />
      <div className="bg-gray-700/70 text-tlight absolute bottom-0 w-full flex flex-col">
        <p className="text-sm m-0 py-1 px-4 h-20 overflow-hidden">
          {movie.title}
        </p>
        <p className="text-sm m-0 py-1 px-4 hidden">
          {Math.round(movie.vote_average * 10) / 10}
        </p>
        <div className="absolute top-0 right-1  items-center justify-center py-2 px-0 hidden">
          <i className="fa fa-search"></i>
        </div>
      </div>
    </div>
  );
};

export default CardMedium;
