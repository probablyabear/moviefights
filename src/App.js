import React, { Fragment } from "react";
import Navbar from "./layout/Navbar";
import { HashRouter, Route, Switch } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { pink, blue } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./App.css";

import About from "./pages/About";
import Github from "./pages/Github";
import Home from "./pages/Home/Home";
import Fight from "./pages/Fight";
import NotFound from "./pages/NotFound";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink
  }
});

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <div className="App">
        <HashRouter basename="/">
          <ThemeProvider theme={theme}>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/fight" component={Fight} />
              <Route exact path="/about" component={About} />
              <Route exact path="/github" component={Github} />
              <Route component={NotFound} />
            </Switch>
          </ThemeProvider>
        </HashRouter>
      </div>
    </Fragment>
  );
}

export default App;
