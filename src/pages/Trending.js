import MovieSet from "../components/MovieSet";

import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Trending = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI("/trending/movie/week").then((data) =>
      setVideos(data.results)
    );
  }, []);
  return (
    <div>
      <MovieSet videos={videos} />
    </div>
  );
};

export default Trending;
