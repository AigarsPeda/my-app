import React from "react";
import { Grid, Container } from "@material-ui/core";
import { useStyles } from "./headStyles";

// import gsap from "gsap";

import { Link } from "react-scroll";
import { FaChevronDown } from "react-icons/fa";

import SvgProgrammer from "../../assets/Programmer/SvgProgrammer";

interface IHead {
  text: Language;
  titleRef: React.MutableRefObject<null>;
  buttonRef: React.MutableRefObject<null>;
  imageRef: React.MutableRefObject<null>;
}

const Head: React.FC<IHead> = (props) => {
  const { text, titleRef, buttonRef, imageRef } = props;
  const classes = useStyles();

  return (
    <Container className={classes.main}>
      <Grid
        container
        className={classes.container}
        style={{ transform: "translate(0px, 0px)" }}
      >
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <div className={classes.text} aria-label="main head line">
            <h1 ref={titleRef} className={classes.title}>
              {text.text}
            </h1>
          </div>
          <div ref={buttonRef}>
            <Link
              className={classes.button}
              activeClass="repositories"
              to="sectionContacts"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              aria-label="contact me"
            >
              {text.button}
            </Link>
          </div>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          className={classes.imageContainer}
        >
          <div ref={imageRef} aria-label="image of programmer">
            <SvgProgrammer className={classes.image} />
          </div>
        </Grid>
        <div className={classes.arrow}>
          <Link
            activeClass="repositories"
            to="repositories"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <FaChevronDown aria-label="arrow down" />
          </Link>
        </div>
      </Grid>
    </Container>
  );
};

export default Head;
