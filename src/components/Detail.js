import React from "react";
import { BACKDROP_PATH } from "../utils/fetchFromAPI";
// backdrop_path
// poster_path
// overview
// tagline
// vote_average
// vote_count

const Detail = ({ movie }) => {
  // const bg =
  //   "https://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg";
  return (
    <>
      <div
        className="poster"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0)),
        url(${BACKDROP_PATH + movie.backdrop_path})`,
        }}
      >
        <div className="layout-lg">
          <h1 className="poster__title">{movie.title}</h1>
          <p className="poster__text">{movie.overview}</p>
        </div>
      </div>
      <div className="detail layout-lg">
        <div className="detail__text">{movie.tagline}</div>
      </div>
    </>
  );
};

export default Detail;
