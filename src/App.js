import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Trending from "./pages/Trending";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";
import Top10 from "./pages/Top10";
import { FavProvider } from "./context/favorites";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <FavProvider>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/actors" element={<Actors />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/search/:q" element={<Search />} />
            <Route path="/trailers" element={<Top10 />} />
          </Routes>
        </FavProvider>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
