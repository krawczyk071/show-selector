import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Modal from "../components/Modal";
import Loader from "../components/Loader";
import Alert from "../components/Alert";

// const YT_BASE = "https://www.youtube.com/watch?v=";
const YT_THUMB = (ytId) => `https://img.youtube.com/vi/${ytId}/0.jpg`;
// https://i3.ytimg.com/vi/${ytId}/maxresdefault.jpg
// http://i3.ytimg.com/vi/${ytId}/hqdefault.jpg

const Top10 = () => {
  const [movies, setMovies] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [alerts, setAlerts] = useState("loading");
  const [modal, setModal] = useState({ open: false });

  function toggleModal(ytid) {
    setModal((prev) => ({ ...prev, open: !prev.open, ytid }));
  }

  useEffect(() => {
    fetchFromAPI("/movie/popular")
      .then((data) => setMovies(data.results.slice(0, 10).map((res) => res.id)))
      .catch((err) => {
        console.log(err);
        setAlerts("error");
      });
  }, []);

  useEffect(() => {
    const listfetch = async () => {
      const tlist = [];
      for (const movieId of movies) {
        const { results } = await fetchFromAPI(`/movie/${movieId}/videos`);
        const trailer = results.find(
          (res) => res.official === true && res.type === "Trailer"
        );
        tlist.push({ ytid: trailer.key, id: movieId });
      }
      return tlist;
    };
    listfetch()
      .then((res) => {
        setTrailers(res);
        setAlerts("ok");
      })
      .catch((err) => {
        console.log(err);
        setAlerts("error");
      });
  }, [movies]);

  if (alerts === "loading") {
    return <Loader />;
  } else if (alerts === "error") {
    return <Alert msg={"Sorry cannot connect to DB. Try in few minutes."} />;
  }

  const links = trailers.map((trailer) => (
    <div
      className="w-[230px] cursor-pointer sm:first-of-type:col-span-2 md:first-of-type:col-span-3 first-of-type:w-5/6 [&>img]:w-full rounded-lg overflow-hidden"
      key={trailer.ytid}
      onClick={() => toggleModal(trailer.ytid)}
    >
      <img src={YT_THUMB(trailer.ytid)} alt="" />
    </div>
  ));

  return (
    <div className="mx-auto px-4 max-w-5xl">
      <h1 className="my-2">Top 10 Movies Trailers</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center mb-4">
        {links}
      </div>
      <Modal modal={modal} toggleModal={toggleModal} />
    </div>
  );
};

export default Top10;
