import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "2rem",
    textAlign: "center",
    color: "#ffffff"
  },
  title: {
    fontWeight: "bold"
  }
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.root}>
        <Typography className={classes.title} variant="h3">
          404 - Not Found
        </Typography>
        <Typography className={classes.title} variant="h3">
          :(
        </Typography>
      </div>
    </Container>
  );
};

export default NotFound;
