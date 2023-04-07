import React from "react";
import Detail from "../components/Detail";
import CardMedium from "../components/CardMedium";
import { useParams } from "react-router-dom";
const Movie = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <Detail />
      <section className="layout-lg">
        <div className="scroller">
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
