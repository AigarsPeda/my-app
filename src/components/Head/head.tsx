import React from "react";
import Programmer1 from "../../assets/programmer1.svg";
import { Grid, Container } from "@material-ui/core";
import { useStyles } from "./headStyles";

import { Link } from "react-scroll";
import { FaChevronDown } from "react-icons/fa";

interface IHead {
  text: Language;
}

const Head: React.FC<IHead> = (props) => {
  const { text } = props;
  const classes = useStyles();
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
            <img className={classes.image} src={Programmer1} alt="programmer" />
          </div>
        </Grid>
        <div className={classes.arrow} aria-label="cards with repository info">
          <Link
            activeClass="repositories"
            to="repositories"
            spy={true}
            smooth={true}
            offset={-70}
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
