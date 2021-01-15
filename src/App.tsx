import React from "react";
import Home from "./pages/home";
import ReactGa from "react-ga";

import { makeStyles } from "@material-ui/core/styles";

import { Container } from "@material-ui/core";
// import { useState } from "react";
// import { useEffect } from "react";
import { Parallax } from "react-parallax";
import { useEffect } from "react";

const useStyles = makeStyles({
  root: {
    color: "#ffff",
    // backgroundColor: "#08062b",
    maxWidth: "90vw",
    margin: "auto",
    overflow: "hidden"
  }
});

const App: React.FC = () => {
  const classes = useStyles();

  useEffect(() => {
    ReactGa.initialize("G-L4LX8P37QE");

    // to report page view
    ReactGa.pageview("/");
    ReactGa.pageview("/my-app/");
    ReactGa.pageview("my-app/");
  }, []);

  return (
    <Parallax
      // blur={10}
      bgImage={require("./assets/svgBackgroundLong.svg")}
      bgImageAlt="background"
      strength={1300}
      bgImageStyle={{
        width: "100%",
        height: "auto"
      }}
    >
      <div className={classes.root}>
        <Container style={{ overflow: "hidden" }}>
          <Home />
        </Container>
      </div>
    </Parallax>
  );
};

export default App;
