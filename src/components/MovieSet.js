import Card from "./Card";
import React from "react";

const MovieSet = ({ videos }) => {
  const cards = videos.map((video) => <Card key={video.id} movie={video} />);

  return (
    <div className="mx-auto px-8 max-w-5xl">
      <div className="w-[960px] grid grid-cols-4 items-center my-4 ">
        {cards}
      </div>
    </div>
  );
};

export default MovieSet;
