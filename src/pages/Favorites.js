import React from "react";
import MovieSet from "../components/MovieSet";
import { useContext } from "react";
import { FavContext } from "../context/favorites";

const Favorites = () => {
  const [favState] = useContext(FavContext);

  // const watchlist = watch.map((movie) => <p>{movieId}</p>);
  if (favState.length === 0) {
    return (
      <div className="mx-auto px-8 max-w-5xl flex items-center justify-center h-full">
        <p className="flex-1 my-4">Start adding some movies to the list</p>
      </div>
    );
  }
  return (
    <div>
      <MovieSet videos={favState} />;
    </div>
  );
};

export default Favorites;
