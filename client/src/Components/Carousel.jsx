import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./Carousel.css";
import { dummyShowsData } from "../assets/assets";

const Carousel = () => {
  const movies = dummyShowsData.slice(0, 8);
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % movies.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + movies.length) % movies.length);
  };

  return (
    <div className="carousel-container">
      
      {/* Left Arrow */}
      <button className="carousel-arrow left" onClick={prevSlide}>
        <ChevronLeft />
      </button>

      {/* Poster (Clickable) */}
      <div className="carousel-image-wrapper">
        <Link to={`/movies/${movies[index]._id}`}>
          <img
            src={movies[index].poster_path}
            alt={movies[index].title}
            className="carousel-image"
          />
        </Link>
      </div>

      {/* Right Arrow */}
      <button className="carousel-arrow right" onClick={nextSlide}>
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="carousel-dots">
        {movies.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
