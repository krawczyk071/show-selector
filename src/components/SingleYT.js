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
    <div className="yt-single">
      <h1>Trailer</h1>
      <div className="yt-single__video">
        <YouTube videoId={ytid} opts={opts} />
      </div>
    </div>
  ) : (
    <p>Sorry No trailer available</p>
  );
};

export default SingleYT;
