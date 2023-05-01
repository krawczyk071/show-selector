import React from "react";
import Filter from "../components/Filter";
import YouTube from "react-youtube";

const Actors = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      controls: 0,
    },
  };

  return (
    <section className="layout-lg">
      <Filter />
      <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onEnd={() => console.log("YTend")}
      />
    </section>
  );
};

export default Actors;
