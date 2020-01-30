import React from "react";
import main_img from "../../assets/main_img.png";
import { Grid, Container } from "@material-ui/core";
import { useStyles } from "./headStyles";

interface IHead {
  refProp: React.MutableRefObject<HTMLDivElement | undefined>;
  text: Language;
  scrollToRef: (ref: any) => void;
}

const Head: React.FC<IHead> = props => {
  const { refProp, scrollToRef, text } = props;
  const classes = useStyles();
  return (
    <Container>
      <Grid container className={classes.container}>
        <Grid item lg={6} md={12} xs={12}>
          <div className={classes.text}>
            <h1>{text.text}</h1>
          </div>
          <button className={classes.button}>{text.button}</button>
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
