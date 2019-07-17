import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  search: {
    backgroundColor: "#ffffff",
    background: "#ffffff"
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "#ffffff"
  }
}));

const MovieSearch = ({ onChange, name, onSubmit, value, label }) => {
  const classes = useStyles();

  return (
    <form
      className={classes.container}
      noValidate
      autoComplete="off"
      onSubmit={event => onSubmit(value, name, event)}
    >
      <TextField
        id="filled-full-width"
        label={label}
        placeholder="Search for a movie..."
        fullWidth
        margin="normal"
        variant="filled"
        name={name}
        className={classes.search}
        InputLabelProps={{
          shrink: true
        }}
        InputProps={{
          classes: {
            input: classes.search
          }
        }}
        value={value}
        onChange={onChange}
      />
      <Button variant="contained" color="secondary" fullWidth type="submit">
        Search
      </Button>
    </form>
  );
};

export default MovieSearch;
