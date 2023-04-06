import React from "react";
import Detail from "../components/Detail";
import CardMedium from "../components/CardMedium";
const Movie = () => {
  return (
    <div>
      <Detail />
      <section class="layout-lg">
        <div class="scroller">
          <CardMedium />
          <CardMedium />
          <CardMedium />
          <CardMedium />
          <CardMedium />
          <CardMedium />
          <CardMedium />
          <CardMedium />
          <CardMedium />
        </div>
      </section>
    </div>
  );
};

export default Movie;
