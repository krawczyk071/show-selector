import Hero from "../components/Hero";
import MovieSet from "../components/MovieSet";
import React, { useEffect, useState } from "react";
import { fetchFromAPI, DISCOVER_API } from "../utils/fetchFromAPI";

const Homepage = (props) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(DISCOVER_API).then((data) => setVideos(data.results));
  }, []);
  return (
    <div>
      <Hero />
      <MovieSet videos={videos} {...props} />
    </div>
  );
};

export default Homepage;
