import { style } from "@vanilla-extract/css";
import { title, fontFamily, neutral } from "../variants/token";

export const Main = style({
  maxWidth: 1160,
  margin: "0 auto",
  padding: "61px 0",
  color: neutral[90],
  fontSize: title["h2"]["fontSize"],
  fontWeight: title["h2"]["fontWeight"],
  fontFamily: fontFamily,
});
