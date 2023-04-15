import React, { useEffect, useState } from "react";
import Detail from "../components/Detail";
import Loader from "../components/Loader";
import CardMedium from "../components/CardMedium";
import { useParams } from "react-router-dom";

import { fetchFromAPI, MOVIE_API } from "../utils/fetchFromAPI";
import Scroller from "../components/Scroller";

const Movie = () => {
  const { id } = useParams();
  // console.log(id);
  const [movie, setMovie] = useState({ detail: {}, loading: true });
  const [recomend, setRecomend] = useState({ movies: {}, loading: true });

  useEffect(() => {
    fetchFromAPI(`/movie/${id}`)
      .then((data) => {
        setMovie((prev) => ({ ...prev, detail: data, loading: false }));
        // console.log(data);
      })
      .catch((err) => console.log(err));
    fetchFromAPI(`/movie/${id}/similar`).then((data) => {
      setRecomend({ movies: data.results, loading: false });
      // console.log(data.results);
    });
  }, [id]);
  return (
    <div>
      {movie.loading ? <Loader /> : <Detail movie={movie.detail} />}
      <section className="layout-lg">
        {recomend.loading ? <Loader /> : <Scroller movies={recomend.movies} />}
      </section>
    </div>
  );
};

export default Movie;
