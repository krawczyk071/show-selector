import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Trending from "./pages/Trending";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";

function App() {
  const [watch, setWatch] = useState(() => {
    return JSON.parse(localStorage.getItem("watchlist")) || [];
  });

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watch));
  }, [watch]);

  function addWatch(movie) {
    setWatch((prev) => {
      if (prev.includes(movie)) {
        return prev;
      } else {
        return [...prev, movie];
      }
    });
  }

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={<Homepage watch={watch} addWatch={addWatch} />}
          />
          <Route path="/trending" element={<Trending />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/favorites" element={<Favorites watch={watch} />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/search/:q" element={<Search />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
