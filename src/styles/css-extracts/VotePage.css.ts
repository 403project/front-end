import { style } from "@vanilla-extract/css";
import { vars } from "../variants/variants.css";

export const voteContainer = style({
  padding: "0 140px",
});

export const voteWrapper = style({
  display: "flex",
  justifyContent: "space-around",
});

export const voteCardBox = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 24,
});

export const voteTitle = style({
  ...vars.title.h3,
  marginBottom: 28,
});
