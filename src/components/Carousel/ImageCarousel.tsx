import React from "react";
import Slider from "react-slick";

import { useStyles } from "./ImageCarouselStyles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IImageCarousel {
  repoImageList: string[] | undefined;
  closeImageCarousel: () => void;
}

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
