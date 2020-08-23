import React, { useEffect } from "react";
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

  const slideUpAnimation = (classToAnimation: string) => {
    const tl = gsap.timeline();

    tl.fromTo(
      `.${classToAnimation}`,
      1.8,
      {
        y: 170,
        opacity: 0,
        ease: "power4.out",
        delay: 1,
        // skewY: 7,
        stagger: {
          amount: 0.3
        }
      },
      {
        y: 0,
        opacity: 1
        // skewY: 0
      }
    );
  };

  useEffect(() => {
    slideUpAnimation(classes.container);
  });

  return (
    <Container style={{ overflow: "hidden" }}>
      <Grid container className={classes.container}>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          <div className={classes.text} aria-label="main head line">
            <h1 className={classes.title}>{text.text}</h1>
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
        <Grid
          item
          lg={6}
          md={6}
          sm={6}
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
