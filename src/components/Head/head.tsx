import React from "react";
import main_img from "../../assets/main_img.png";
import { Grid } from "@material-ui/core";
import useStyles from "./headStyles";

const Head = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item md={6} sm={12}>
        <div className={classes.text}>
          <h1>
            Hi! My name is Aigars, I am front end developer and I’m looking for
            a job
          </h1>
        </div>
        <button className={classes.button}>Contact me</button>
      </Grid>
      <Grid item md={6} sm={12}>
        <div className={classes.imageContainer}>
          <img className={classes.image} src={main_img} alt="programmer" />
        </div>
      </Grid>
    </Grid>
  );
};

export default Head;
