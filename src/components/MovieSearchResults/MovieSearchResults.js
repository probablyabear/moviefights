import React from "react";
import MovieSearchResultsItem from "../MovieSearchResultsItem/MovieSearchResultsItem";

const MovieSearchResults = ({ results }) => {
  return (
    <div style={styles}>
      {results &&
        results.map(movie => {
          return <MovieSearchResultsItem movie={movie} key={movie.id} />;
        })}
    </div>
  );
};

const styles = {
  marginTop: "20px"
};

export default MovieSearchResults;
