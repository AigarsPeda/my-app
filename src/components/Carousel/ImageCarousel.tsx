import React from "react";
import Slider from "react-slick";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IImageCarousel {
  repoImageList: string[] | undefined;
  closeImageCarousel: () => void;
}

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      zIndex: 25,
      marginTop: "50px"
    },
    popupClose: {
      color: "red",
      fontSize: 25,
      cursor: "pointer",
      fontWeight: "normal",
      float: "right",
      marginRight: "15px",
      zIndex: 60,
      "@media (min-width:1280px)": {
        position: "absolute",
        right: "50px",
        top: "25px",
        float: "none"
      }
    },
    arrow: {
      color: "red",
      zIndex: 30
    },
    image: {
      maxWidth: "49vh",
      maxHeight: "49vh",
      objectFit: "scale-down",
      margin: "auto",
      "@media (min-width:1280px)": {
        maxWidth: "95vh",
        maxHeight: "79vh"
      }
    },
    popup: {
      backgroundColor: "rgba(36, 53, 84, 0.800)",
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
      zIndex: 20,
      position: "fixed",
      className: "slides"
    }
  })
);

const ImageCarousel: React.FC<IImageCarousel> = props => {
  const { repoImageList, closeImageCarousel } = props;
  const classes = useStyles();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    draggable: true
  };

  return (
    <div className={classes.popup}>
      <span onClick={closeImageCarousel} className={classes.popupClose}>
        &#10005;
      </span>
      <Slider {...settings} className={classes.root}>
        {repoImageList?.map((image, index) => {
          return (
            <div key={index}>
              <img src={image} alt="repo" className={classes.image} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
