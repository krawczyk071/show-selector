import React, { useEffect, useState } from "react";
import Detail from "../components/Detail";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import Alert from "../components/Alert";

const Movie = () => {
  const { id } = useParams();
  // console.log(id);
  const [movie, setMovie] = useState({ data: {}, loading: true });
  const [cast, setCast] = useState({ data: {}, loading: true });
  const [videos, setVideos] = useState({ data: {}, loading: true });
  const [recomend, setRecomend] = useState({ movies: {}, loading: true });
  const [alerts, setAlerts] = useState("loading");

  useEffect(() => {
    fetchFromAPI(`/movie/${id}`)
      .then((data) => {
        setMovie((prev) => ({ ...prev, data: data, loading: false }));
      })
      .catch((err) => {
        console.log(err);
        setAlerts("error");
      });

    fetchFromAPI(`/movie/${id}/similar`)
      .then((data) => {
        setRecomend({ movies: data.results, loading: false });
      })
      .catch((err) => {
        console.log(err);
        setAlerts("error");
      });

    fetchFromAPI(`/movie/${id}/credits`)
      .then((data) => {
        setCast((prev) => ({
          ...prev,
          data: data.cast.slice(0, 5),
          loading: false,
        }));
      })
      .catch((err) => {
        console.log(err);
        setAlerts("error");
      });

    fetchFromAPI(`/movie/${id}/videos`)
      .then((data) => {
        const trailer = data.results.find(
          (res) => res.official === true && res.type === "Trailer"
        );
        setVideos((prev) => ({
          ...prev,
          data: trailer?.key,
          loading: false,
        }));
      })
      .catch((err) => {
        console.log(err);
        // setAlerts("error");
      });
  }, [id]);

  if (alerts === "error") {
    return <Alert msg={"Sorry cannot connect to DB. Try in few minutes."} />;
  }

  return (
    <>
      {movie.loading || cast.loading || videos.loading ? (
        <Loader />
      ) : (
        <Detail
          movie={movie.data}
          cast={cast.data}
          trailer={videos.data}
          recomend={recomend}
        />
      )}
    </>
  );
};

export default Movie;
