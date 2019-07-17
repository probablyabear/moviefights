import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none"
  },
  button: {
    color: "#ffffff"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    color: "#ffffff"
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link component={RouterLink} to="/" className={classes.link}>
              Moviefights
            </Link>
          </Typography>

          <Link component={RouterLink} to="/fight" underline="none">
            <Button className={classes.button}>Fight</Button>
          </Link>
          <Link component={RouterLink} to="/about" underline="none">
            <Button className={classes.button}>About</Button>
          </Link>
          <Link
            href="https://github.com/probablyabear/moviefights"
            underline="none"
            target="_blank"
          >
            <Button className={classes.button}>Github</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
