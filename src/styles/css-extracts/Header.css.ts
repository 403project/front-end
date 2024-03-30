import { style } from "@vanilla-extract/css";
import { title, fontFamily, neutral } from "../variants/token";
import { vars } from "../variants/variants.css";

export const Main = style({
  width: "100%",
  maxWidth: 1200,
  marginTop: "64px",
  paddingLeft: "30px",
  display: "flex",
  flexDirection: "column",
  color: vars.neutral[90],
  ...title.h2,
  gap: 48,
  fontFamily: fontFamily,
});
