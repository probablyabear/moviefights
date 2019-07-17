import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

import MovieSearch from "../components/MovieSearch/MovieSearch";
import MovieSearchResults from "../components/MovieSearchResults/MovieSearchResults";
import Spinner from "../layout/Spinner/Spinner";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    marginBottom: "5rem"
  },
  title: {
    color: "#ffffff"
  },
  error: {
    textAlign: "center",
    color: "#ffffff"
  }
}));

const Fight = () => {
  const classes = useStyles();

  const [contenderQueries, setContenderQueries] = useState({
    contenderOneQuery: "",
    contenderTwoQuery: ""
  });

  const [contenderOneSearchResults, setContenderOneSearchResults] = useState(
    []
  );
  const [contenderTwoSearchResults, setContenderTwoSearchResults] = useState(
    []
  );

  const [errors, setErrors] = useState({
    contenderOneFormError: "",
    contenderTwoFormError: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const onChange = event => {
    setContenderQueries({
      ...contenderQueries,
      [event.target.name]: event.target.value
    });

    if (
      event.target.name === "contenderOneQuery" &&
      event.target.value.length > 2
    ) {
      setErrors({
        contenderOneFormError: ""
      });
    } else if (
      event.target.name === "contenderTwoQuery" &&
      event.target.value.length > 2
    ) {
      setErrors({
        contenderTwoFormError: ""
      });
    }
  };

  const onSubmit = async (value, name, event) => {
    event.preventDefault();

    setIsLoading(true);

    if (value.length < 2 && name === "contenderOneQuery") {
      const newErrors = { ...errors };
      newErrors.contenderOneFormError = "Please enter a query";
      setErrors(newErrors);
      return;
    } else if (value.length < 2 && name === "contenderTwoQuery") {
      const newErrors = { ...errors };
      newErrors.contenderTwoFormError = "Please enter a query";
      setErrors(newErrors);
      return;
    } else {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          process.env.REACT_APP_TMDBAPI
        }&query=${value}`
      );
      if (name === "contenderOneQuery") {
        setContenderOneSearchResults(response.data.results);
      } else if (name === "contenderTwoQuery") {
        setContenderTwoSearchResults(response.data.results);
      }
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <div className={classes.root}>
        <h1 className={classes.title}>Pick a Fight</h1>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <MovieSearch
            name="contenderOneQuery"
            value={contenderQueries.contenderOneQuery}
            onChange={onChange}
            label="Contender 1"
            onSubmit={onSubmit}
          />
          {errors.contenderOneFormError && (
            <p className={classes.error}>Please enter a query</p>
          )}
          {/* {isLoading && <Spinner />} */}
          {contenderOneSearchResults.length !== 0 ? (
            <MovieSearchResults results={contenderOneSearchResults} />
          ) : null}
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <MovieSearch
            name="contenderTwoQuery"
            value={contenderQueries.contenderTwoQuery}
            onChange={onChange}
            label="Contender 2"
            onSubmit={onSubmit}
          />
          {errors.contenderTwoFormError && (
            <p className={classes.error}>Please enter a query</p>
          )}
          {/* {isLoading && <Spinner />} */}
          {contenderTwoSearchResults.length !== 0 ? (
            <MovieSearchResults results={contenderTwoSearchResults} />
          ) : null}
        </Grid>
      </Grid>
      {isLoading && <Spinner />}
    </Container>
  );
};

export default Fight;
