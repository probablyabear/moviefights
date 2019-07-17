import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

import fightImg from "../../assets/images/fight-white.png";

import "./home.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "2rem",
    textAlign: "center"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  title: {
    color: "#ffffff",
    fontWeight: "bold"
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="h3" gutterBottom className={classes.title}>
              Pick your movies.
            </Typography>
            <Typography variant="h5" gutterBottom className={classes.title}>
              Watch them fight.
            </Typography>
            <div className="headline-image">
              <img src={fightImg} alt="" />
            </div>
            <Link component={RouterLink} to="/fight" underline="none">
              <Button variant="contained" color="secondary">
                Start a fight
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Home;
