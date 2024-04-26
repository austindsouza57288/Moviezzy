import React, { useState } from "react";
import "./Navbar.css";
import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";
import DarkMode from "../DarkMode/DarkMode";

const Navbar = ({ movies }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    let found = false;
    e.preventDefault();
    movies.map((movie) => {
      if (movie.title.toLowerCase().includes(searchTerm.trim())) {
        console.log(movie.title);
        found = true;
      }
      return movie;
    });
    if (!found) {
      alert("Movie not found");
    }
  };
  return (
    <nav className="navbar">
      <h1>
        <a href="/">M🌏VIEEZY </a>
      </h1>

      <div className="navbar_links">
        <DarkMode />
        <a href="#popular">
          Popular <img src={Fire} className="navbar_emoji" />
        </a>
        <a href="#top_rated">
          Top Rated <img src={Star} className="navbar_emoji" />
        </a>
        <a href="#upcoming">
          Upcoming <img src={Party} className="navbar_emoji" />
        </a>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            value={searchTerm}
            placeholder="Search..."
            className="search_input"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          ></input>
          <div className="dropdown">
            {movies
              .filter((movie) => {
                return (
                  searchTerm &&
                  movie.title.toLowerCase().includes(searchTerm.trim())
                );
              })
              .slice(0, 5)
              .map((movie) => (
                <a
                  href={`https://www.themoviedb.org/movie/${movie.id}`}
                  target="_dusroTab"
                >
                  <div className="dropdown_row" key={movie.id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt=""
                    />
                    {movie.title}
                  </div>
                </a>
              ))}
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
