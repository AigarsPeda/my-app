import React from "react";
import main_img from "../../assets/main_img.png";
import Grid from "@material-ui/core/Grid";
import useStyles from "./headStyles";

const Head = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Grid item xs={12} md={8} sm={12}>
        <div className={classes.text}>
          <h1>
            Hi! My name is Aigars, I am front end developer and I’m looking for
            a job
          </h1>
        </div>
        <button className={classes.button}>Contact me</button>
      </Grid>
      <Grid item xs={12} md={4} sm={12}>
        <img className={classes.img} src={main_img} alt="programmer" />
      </Grid>
    </Grid>
  );
};

export default Head;
