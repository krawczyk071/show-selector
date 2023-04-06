import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Trending from "./pages/Trending";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
