import React, { useRef, useEffect } from "react";
import { Grid, Container } from "@material-ui/core";
import { useStyles } from "./headStyles";

import { TweenMax, Linear } from "gsap";

import { Link } from "react-scroll";
import { FaChevronDown } from "react-icons/fa";

import SvgProgrammer from "../../assets/Programmer/SvgProgrammer";

interface IHead {
  text: Language;
}

const Head: React.FC<IHead> = (props) => {
  const { text } = props;
  const smoke1 = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    TweenMax.fromTo(
      smoke1.current,
      5,
      { y: 18 },
      { y: -18, ease: Linear.easeNone, opacity: 0, repeat: -1 }
    );
  });

  return (
    <Container>
      <Grid container className={classes.container}>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <div className={classes.text} aria-label="main head line">
            <h1>{text.text}</h1>
          </div>
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
        </Grid>

        <Grid item lg={6} md={6} sm={6} xs={12}>
          <div
            className={classes.imageContainer}
            aria-label="image of programmer"
          >
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
