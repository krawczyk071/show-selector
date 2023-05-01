import Card from "./Card";
import React from "react";

const MovieSet = ({ videos }) => {
  const cards = videos.map((video) => <Card key={video.id} movie={video} />);

  return (
    <div className="layout-lg">
      <div className="library ">{cards}</div>
    </div>
  );
};

export default MovieSet;
