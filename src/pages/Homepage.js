import Hero from "../components/Hero";
import MovieSet from "../components/MovieSet";
import React, { useEffect, useState } from "react";
import { fetchFromAPI, DISCOVER_API } from "../utils/fetchFromAPI";
import BigSlider from "../components/BigSlider";

const Homepage = (props) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(DISCOVER_API).then((data) => setVideos(data.results));
  }, []);
  console.log(videos);
  return (
    <div>
      <section className="layout-lg">
        <BigSlider />
      </section>
      <MovieSet videos={videos} {...props} />
    </div>
  );
};

export default Homepage;
