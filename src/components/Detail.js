import React, { useContext, useEffect, useState } from "react";
import { BACKDROP_PATH } from "../utils/fetchFromAPI";
import PersonCard from "./PersonCard";
import SingleYT from "./SingleYT";
import Star from "./Star";
import { FavContext } from "../context/favorites";
import Scroller from "../components/Scroller";
import Loader from "./Loader";

const Detail = ({ movie, cast, trailer, recomend }) => {
  const [favState, dispatch] = useContext(FavContext);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    setLiked(favState.some((w) => w.id === movie.id) ? true : false);
  }, [favState, movie]);
  function handleLike(e, movie) {
    e.stopPropagation();
    dispatch({ type: "TOGG_MOVIE", payload: movie });
  }
  const genreArr = movie.genres.map((genre) => (
    <span className="bg-gray-500 p-1 m-1 rounded-md" key={genre.name}>
      {genre.name}
    </span>
  ));
  const actors = cast.map((actor) => <PersonCard actor={actor} />);
  const {
    backdrop_path,
    title,
    overview,
    tagline,
    runtime,
    vote_average,
    vote_count,
  } = movie;
  return (
    <>
      <div
        className="bg-auto bg-top min-h-[500px] flex items-end pb-12 text-tlight relative  "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0)),
        url(${BACKDROP_PATH + backdrop_path})`,
        }}
      >
        <div
          className="absolute left-0 top-0 w-full h-full"
          style={{
            background: `linear-gradient(
          90deg,
          #000 10%,
          rgba(0, 0, 0, 0) 30%,
          rgba(0, 0, 0, 0) 70%,
          #000 90%)`,
          }}
        ></div>
        <div className="mx-auto px-8 max-w-5xl relative z-10 w-full">
          <h1 className="text-7xl mt-0 leading-none mb-3">{title}</h1>
          <p>{tagline}</p>
        </div>
      </div>
      <div className="mx-auto px-8 max-w-5xl">
        <div className="flex gap-4 items-center justify-end">
          <div>Duration: {runtime} mins.</div>
          <div>Rating: {`${vote_average} (${vote_count} votes)`}</div>
          <div onClick={(e) => handleLike(e, movie)}>
            <Star liked={liked} />
          </div>
        </div>
        <div className="text-base my-4">{overview}</div>
        <div>{genreArr}</div>

        <div className="my-4">
          <h1>Cast</h1>
          <div className="flex flex-wrap items-center justify-between my-4">
            {actors}
          </div>
        </div>
        <div className="w-80 sm:w-full overflow-hidden">
          <SingleYT ytid={trailer} />
        </div>
      </div>
      <div className="mx-auto px-8 max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-5xl">
        {recomend.loading ? <Loader /> : <Scroller movies={recomend.movies} />}
      </div>
    </>
  );
};

export default Detail;
