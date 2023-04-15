import React from "react";
import MovieSet from "../components/MovieSet";

const Favorites = ({ watch }) => {
  // const watchlist = watch.map((movie) => <p>{movieId}</p>);
  return (
    <div>
      <MovieSet videos={watch} watch={watch} />
    </div>
  );
};

export default Favorites;
