import Card from "./Card";
import React from "react";

const MovieSet = ({ videos }) => {
  const cards = videos.map((video) => <Card key={video.id} movie={video} />);

  return (
    <div className="mx-auto px-4 sm:px-8 max-w-5xl">
      <div className="my-4  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-items-center">
        {cards}
      </div>
    </div>
  );
};

export default MovieSet;
