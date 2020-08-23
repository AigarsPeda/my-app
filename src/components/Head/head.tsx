import React, { useEffect, useRef } from "react";
import { Grid, Container } from "@material-ui/core";
import { useStyles } from "./headStyles";

import gsap from "gsap";

import { Link } from "react-scroll";
import { FaChevronDown } from "react-icons/fa";

import SvgProgrammer from "../../assets/Programmer/SvgProgrammer";

interface IHead {
  text: Language;
}

const Head: React.FC<IHead> = (props) => {
  const { text } = props;
  const classes = useStyles();

  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  // const slideUpAnimation = (refToAnimation: React.MutableRefObject<null>) => {
  //   const tl = gsap.timeline();

  //   tl.fromTo(
  //     refToAnimation.current,
  //     3,
  //     {
  //       y: 200,
  //       opacity: 0,
  //       delay: 1,
  //       skewY: 7
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       ease: "elastic.out(0.5, 0.3)",
  //       skewY: 0
  //     }
  //   );
  // };

  useEffect(() => {
    // slideUpAnimation(titleRef);
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      2.5,
      {
        y: 200,
        opacity: 0,
        delay: 1,
        skewY: 7
      },
      {
        y: 0,
        opacity: 1,
        ease: "elastic.out(0.4, 0.2)",
        skewY: 0
      }
    );
    tl.fromTo(
      buttonRef.current,
      1,
      {
        y: -200,
        opacity: 0,
        delay: 1,
        skewY: 7
      },
      {
        y: 0,
        opacity: 1,
        ease: "elastic.out(0.4, 0.2)",
        skewY: 0
      },
      "-=1.5"
    );
  });

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
          <div aria-label="image of programmer">
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
