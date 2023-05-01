import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Modal from "../components/Modal";

// const YT_BASE = "https://www.youtube.com/watch?v=";
const YT_THUMB = (ytId) => `https://img.youtube.com/vi/${ytId}/0.jpg`;
// https://i3.ytimg.com/vi/${ytId}/maxresdefault.jpg
// http://i3.ytimg.com/vi/${ytId}/hqdefault.jpg

const Top10 = () => {
  const [movies, setMovies] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [modal, setModal] = useState({ open: false });

  function toggleModal(ytid) {
    setModal((prev) => ({ ...prev, open: !prev.open, ytid }));
  }

  useEffect(() => {
    fetchFromAPI("/movie/popular").then((data) =>
      setMovies(data.results.slice(0, 10).map((res) => res.id))
    );
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
    listfetch().then((res) => setTrailers(res));
  }, [movies]);

  const links = trailers.map((trailer) => (
    <div
      className="trailer__card"
      key={trailer.ytid}
      onClick={() => toggleModal(trailer.ytid)}
    >
      <img src={YT_THUMB(trailer.ytid)} alt="" />
    </div>
  ));

  return (
    <section className="layout-lg">
      <h1>Top 10 Movies Trailers</h1>
      <div className="trailers">{links}</div>
      <Modal modal={modal} toggleModal={toggleModal} />
    </section>
  );
};

export default Top10;
