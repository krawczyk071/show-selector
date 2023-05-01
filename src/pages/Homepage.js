import MovieSet from "../components/MovieSet";
import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import BigSlider from "../components/BigSlider";

const Homepage = (props) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const source = () => {
      const choices = ["movie/popular", "movie/now_playing"];
      const index = Math.floor(Math.random() * choices.length);
      return choices[index];
    };
    fetchFromAPI(source()).then((data) => setVideos(data.results));
  }, []);
  return (
    <div>
      <section className="layout-lg">
        <BigSlider />
      </section>
      <MovieSet videos={videos} />
    </div>
  );
};

export default Homepage;
