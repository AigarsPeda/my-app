import React from "react";
import Home from "./pages/home";

import { makeStyles } from "@material-ui/core/styles";

import { Container } from "@material-ui/core";
// import { useState } from "react";
// import { useEffect } from "react";
import { Parallax } from "react-parallax";

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
  // const [offsetY, setOffsetY] = useState(0);

  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // style={{ transform: `translateY(${offsetY * 0.7}px)` }}

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
