import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import MovieSet from "../components/MovieSet";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const { q } = useParams();
  useEffect(() => {
    fetchFromAPI(`search/movie?query=${q}`).then((data) =>
      setMovies(data.results)
    );
    // fetchFromAPI(`search/keyword?query=${q}`).then((data) => console.log(data));
  }, [q]);

  return (
    <div>
      <p className="mx-auto px-8 max-w-5xl py-2">Results for: {q}</p>
      {!!movies.length ? (
        <MovieSet videos={movies} />
      ) : (
        <p className="mx-auto px-8 max-w-5xl">No results</p>
      )}
    </div>
  );
};

export default Search;
