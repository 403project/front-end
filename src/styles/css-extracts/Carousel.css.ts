import { style } from "@vanilla-extract/css";

export const CarouselContainer = style({
  position: "relative",
  margin: "0 auto",
  width: "460px",
});

export const CarouselImageContainer = style({
  position: "relative",
  height: "280px",
  outline: "none",
});

export const prevBtn = style({
  position: "absolute",
  top: "50%",
  right: "-40px",
});
