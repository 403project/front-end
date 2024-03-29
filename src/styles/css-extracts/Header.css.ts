import { style } from "@vanilla-extract/css";
import { title, fontFamily, neutral } from "../variants/token";
import { vars } from "../variants/variants.css";

export const Main = style({
  maxWidth: 1160,
  margin: "0 auto",
  padding: "61px 0",
  color: vars.neutral[90],
  ...title.h2,
  fontFamily: fontFamily,
});
