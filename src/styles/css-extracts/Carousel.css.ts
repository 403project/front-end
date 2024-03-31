import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../variants/variants.css";

export const CarouselContainer = style({
  position: "relative",
  margin: "0 auto",
  maxWidth: "460px",
  maxHeight: "300px",
  width: "100%",
});

globalStyle(".slick-prev:before, .slick-next:before", {
  color: `${vars.primary[100]} !important;`,
});

export const CarouselImageContainer = style({
  position: "relative",
  maxHeight: "300px",
  outline: "none",
  height: "300px",
  maxWidth: "460px",
  width: "100%",
});

export const prevBtn = style({
  position: "absolute",
  top: "50%",
  right: "-40px",
});

export const dotsClass = style({
  color: "black",
  fill: "black",
  stroke: "black",
});
