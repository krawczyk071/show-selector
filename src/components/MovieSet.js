import Card from "./Card";
import React from "react";

const MovieSet = ({ videos }) => {
  const cards = videos.map((video) => <Card key={video.id} movie={video} />);

  return (
    <section className="layout-lg">
      <div className="library">{cards}</div>
    </section>
  );
};

export default MovieSet;
