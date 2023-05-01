import React, { useContext, useEffect, useState } from "react";
import { BACKDROP_PATH } from "../utils/fetchFromAPI";
import PersonCard from "./PersonCard";
import SingleYT from "./SingleYT";
import Star from "./Star";
import { FavContext } from "../context/favorites";
import Scroller from "../components/Scroller";
import Loader from "./Loader";
// backdrop_path
// poster_path
// overview
// tagline
// vote_average
// vote_count

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
  // const bg =
  //   "https://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg";
  const genreArr = movie.genres.map((genre) => (
    <span className="detail__tag">{genre.name}</span>
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
        className="poster"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0)),
        url(${BACKDROP_PATH + backdrop_path})`,
        }}
      >
        <div className="layout-lg poster__body">
          <h1 className="poster__title">{title}</h1>
          <p className="poster__text">{tagline}</p>
        </div>
      </div>
      <div className="detail layout-lg">
        <div className="detail__info">
          <div>Duration: {runtime} mins.</div>
          <div>Rating: {`${vote_average} (${vote_count} votes)`}</div>
          <div onClick={(e) => handleLike(e, movie)}>
            <Star liked={liked} />
          </div>
        </div>
        <div className="detail__text">{overview}</div>
        <div>{genreArr}</div>

        <div className="actors">
          <h1>Cast</h1>
          <div className="actors__list">{actors}</div>
        </div>
        <SingleYT ytid={trailer} />
      </div>
      <section className="layout-lg">
        {recomend.loading ? <Loader /> : <Scroller movies={recomend.movies} />}
      </section>
    </>
  );
};

export default Detail;
