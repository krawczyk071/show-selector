import MovieSet from "../components/MovieSet";
import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import BigSlider from "../components/BigSlider";
import Loader from "../components/Loader";
import Alert from "../components/Alert";

const Homepage = (props) => {
  const [videos, setVideos] = useState([]);
  const [alerts, setAlerts] = useState("loading");

  useEffect(() => {
    const source = () => {
      const choices = ["movie/popular", "movie/now_playing"];
      const index = Math.floor(Math.random() * choices.length);
      return choices[index];
    };
    fetchFromAPI(source())
      .then((data) => {
        setVideos(data.results);
        setAlerts("ok");
      })
      .catch((err) => {
        console.log(err);
        setAlerts("error");
      });
  }, []);

  if (alerts === "loading") {
    return <Loader />;
  } else if (alerts === "error") {
    return <Alert msg={"Sorry cannot connect to DB. Try in few minutes."} />;
  }

  return (
    <div>
      <section className="mx-auto px-8 max-w-5xl">
        <BigSlider />
      </section>
      <MovieSet videos={videos} />
    </div>
  );
};

export default Homepage;
