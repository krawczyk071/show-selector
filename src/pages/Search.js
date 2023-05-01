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
      <p className="layout-lg">Results for: {q}</p>
      {!!movies.length ? (
        <MovieSet videos={movies} />
      ) : (
        <p className="layout-lg">No results</p>
      )}
    </div>
  );
};

export default Search;
