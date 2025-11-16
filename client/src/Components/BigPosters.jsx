import React, { useState } from "react";
import "./BigPosters.css";
import { Link } from "react-router-dom";
import { dummyShowsData } from "../assets/assets";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BigPosters = () => {
  const movies = dummyShowsData;
  const postersPerSlide = 2;

  const totalSlides = Math.ceil(movies.length / postersPerSlide);
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    if (slide < totalSlides - 1) setSlide(slide + 1);
  };

  const prevSlide = () => {
    if (slide > 0) setSlide(slide - 1);
  };

  const getVisibleMovies = () => {
    const start = slide * postersPerSlide;
    return movies.slice(start, start + postersPerSlide);
  };

  return (
    <div className="bigposters-container">

      {/* LEFT ARROW */}
      {slide > 0 && (
        <button className="bp-arrow bp-left" onClick={prevSlide}>
          <ChevronLeft />
        </button>
      )}

      <div className="bigposters-inner">
        {getVisibleMovies().map((movie) => (
          <div className="bigposter-card" key={movie._id}>

            {/* POSTER */}
            <Link to={`/movies/${movie._id}`} className="poster-wrapper">
              <img
                src={movie.poster_path}
                alt={movie.title}
                className="bigposter-image"
              />
            </Link>

            {/* TITLE */}
            <p className="bigposter-title">{movie.title}</p>

            {/* INFO DOTS -> rating, year, duration */}
            <div className="bigposter-dots">
              <div className="bp-info-box">
                ⭐ {movie.vote_average.toFixed(1)}
              </div>

              <div className="bp-info-box">
                {movie.release_date.split("-")[0]}
              </div>

              <div className="bp-info-box">
                {movie.runtime}m
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* RIGHT ARROW */}
      {slide < totalSlides - 1 && (
        <button className="bp-arrow bp-right" onClick={nextSlide}>
          <ChevronRight />
        </button>
      )}

    </div>
  );
};

export default BigPosters;
