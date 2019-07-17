import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: "5rem"
  }
}));

const About = () => {
  const classes = useStyles();
  return (
    <Container>
      <Paper className={classes.root} elevation={12}>
        <Typography variant="h5" component="h3" gutterBottom>
          MovieFights
        </Typography>
        <Typography component="p" />
        <Typography component="p">
          MovieFights is a small hobby project built to settle arguments about
          which movies are rated better than others. And to explore{" "}
          <Link href="https://reactjs.org/">ReactJS</Link>. It was built with{" "}
          <Link href="https://reactjs.org/">ReactJS</Link>,{" "}
          <Link href="https://reacttraining.com/react-router/web/guides/quick-start">
            react-router-dom
          </Link>
          , <Link href="https://material-ui.com/">Material-UI</Link>, and{" "}
          <Link href="https://github.com/axios/axios">Axios</Link>.
        </Typography>
        <Typography component="p" gutterBottom />
        <Typography component="p" gutterBottom>
          Movie data comes from the awesome{" "}
          <Link href="https://www.themoviedb.org/">TheMovieDB API</Link> -{" "}
          <span style={{ fontStyle: "italic" }}>Thanks!</span>
        </Typography>
        <Typography component="p">
          The project is available on GitHub if you'd like to mess around with
          it.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
