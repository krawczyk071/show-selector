import MovieSet from "../components/MovieSet";

import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loader from "../components/Loader";
import Alert from "../components/Alert";

const Trending = () => {
  const [videos, setVideos] = useState([]);
  const [alerts, setAlerts] = useState("loading");

  useEffect(() => {
    fetchFromAPI("/trending/movie/week")
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
      <MovieSet videos={videos} />
    </div>
  );
};

export default Trending;
