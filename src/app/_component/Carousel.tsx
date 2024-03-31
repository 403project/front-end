"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import Byul from "../../../public/Byul.svg";
import { CarouselContainer, CarouselImageContainer, dotsClass } from "@/styles/css-extracts/Carousel.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  images: string[];
};

function SimpleSlider({ images }: Props) {
  const Images = images.length > 0 ? [...images, Byul] : [Byul, Byul];

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
        {Images?.map((image) => (
          <div key={image} className={CarouselImageContainer}>
            <Image src={image} layout="fill" objectFit="cover" style={{ objectFit: "cover", width: "100%" }} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
