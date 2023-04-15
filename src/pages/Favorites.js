import React from "react";
import MovieSet from "../components/MovieSet";
import { useContext } from "react";
import { FavContext } from "../context/favorites";

const Favorites = () => {
  const [favState, dispatch] = useContext(FavContext);

  // const watchlist = watch.map((movie) => <p>{movieId}</p>);
  return (
    <div>
      <MovieSet videos={favState} />
    </div>
  );
};

export default Favorites;
