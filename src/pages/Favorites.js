import React from "react";
import MovieSet from "../components/MovieSet";
import { useContext } from "react";
import { FavContext } from "../context/favorites";

const Favorites = () => {
  const [favState] = useContext(FavContext);

  // const watchlist = watch.map((movie) => <p>{movieId}</p>);
  if (favState.length === 0) {
    return <p className="layout-lg">Start adding some movies to the list</p>;
  }
  return <MovieSet videos={favState} />;
};

export default Favorites;
