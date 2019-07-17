import React from "react";
import "./MovieSearchResultsItem.css";

const MovieSearchResultsItem = ({ movie }) => {
  return (
    <div className="movie-container">
      <div className="movie-info-wrapper">
        <h3 className="movie-title">
          {movie.original_title} -
          <span className="movie-year">
            {movie.release_date.substring(0, 4)}
          </span>
        </h3>
        <p>{movie.overview}</p>
      </div>
      <div className="movie-rating-wrapper">
        <h1>{movie.vote_average}</h1>
        <p className="movie-votes">{movie.vote_count} Votes</p>
      </div>
    </div>
  );
};

export default MovieSearchResultsItem;
