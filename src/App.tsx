import React from "react";
import Home from "./pages/home";

import { makeStyles } from "@material-ui/core/styles";

import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    color: "#ffff",
    backgroundColor: "#08062b",
    maxWidth: "98vw",
    margin: "auto"
  }
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Home />
      </Container>
    </div>
  );
};

export default App;
