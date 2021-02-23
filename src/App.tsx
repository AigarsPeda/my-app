import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Parallax } from "react-parallax";
import Home from "./pages/home";

import svgBackgroundLong from "./assets/svgBackgroundLong.svg";

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

  return (
    <Parallax
      bgImage={svgBackgroundLong}
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
