import React, { useState, useEffect } from "react";

import axios from "axios";
import "./App.css";
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";
import Navbar from "./components/navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);
  const fetchMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=7d00255aa051dc37f32297843ec83ec5`
    );
    setMovies(res.data.results);
  };
  return (
    <div className="app">
      <Navbar movies={movies} />
      <main>
        <MovieList type="popular" title="Popular" emoji={Fire} />
        <MovieList type="top_rated" title="Top Rated" emoji={Star} />
        <MovieList type="upcoming" title="Upcoming" emoji={Party} />
      </main>
    </div>
  );
};

export default App;
