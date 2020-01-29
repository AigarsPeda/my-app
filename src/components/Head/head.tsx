import React from "react";
import main_img from "../../assets/main_img.png";
import { Grid, Container } from "@material-ui/core";
import useStyles from "./headStyles";

interface IHead {
  refProp: React.MutableRefObject<null>;
  scrollToRef: (ref: any) => void;
}

const Head: React.FC<IHead> = props => {
  const { refProp, scrollToRef } = props;
  const classes = useStyles();
  return (
    <Container>
      <Grid container className={classes.container} alignContent="center">
        <Grid item lg={6} md={12} xs={12}>
          <div className={classes.text}>
            <h1>
              Hi! My name is Aigars, I am front end developer and I’m looking
              for a job
            </h1>
          </div>
          <button className={classes.button}>Contact me</button>
        </Grid>
        <Grid item lg={6} md={12} xs={12}>
          <div className={classes.imageContainer}>
            <img className={classes.image} src={main_img} alt="programmer" />
          </div>
        </Grid>
        <span className={classes.arrow}>
          <i
            className="fas fa-chevron-down"
            onClick={() => scrollToRef(refProp)}
          />
        </span>
      </Grid>
    </Container>
  );
};

export default Head;
