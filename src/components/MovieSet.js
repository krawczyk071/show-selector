import React, { useEffect, useState } from "react";
import Card from "./Card";

import { fetchFromAPI, DISCOVER_API } from "../utils/fetchFromAPI";

const MovieSet = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(DISCOVER_API).then((data) => setVideos(data.results));
  }, []);

  const cards = videos.map((video) => <Card key={video.id} movie={video} />);

  return (
    <section className="layout-lg">
      <div className="library">{cards}</div>
    </section>
  );
};

export default MovieSet;
