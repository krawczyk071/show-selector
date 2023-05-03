import React from "react";
import YouTube from "react-youtube";

const SingleYT = ({ ytid }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      controls: 1,
      autoplay: 0,
    },
  };
  return ytid ? (
    <div className="flex flex-col items-center my-4">
      <h1 className="self-start">Trailer</h1>
      <div className="flex-1">
        <YouTube videoId={ytid} opts={opts} />
      </div>
    </div>
  ) : (
    <p>Sorry No trailer available</p>
  );
};

export default SingleYT;
