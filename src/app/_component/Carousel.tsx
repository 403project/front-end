"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import Byul from "../../../public/Byul.svg";
import { CarouselContainer, CarouselImageContainer } from "@/styles/css-extracts/Carousel.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  const Images = [Byul, Byul, Byul, Byul, Byul];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={CarouselContainer}>
      <Slider {...settings}>
        {Images.map((image, index) => (
          <div key={index} className={CarouselImageContainer}>
            <Image src={image} layout="fill" alt="" objectFit="cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
