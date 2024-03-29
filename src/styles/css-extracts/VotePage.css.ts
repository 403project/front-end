import { style } from "@vanilla-extract/css";
import { vars } from "../variants/variants.css";

export const voteContainer = style({
  padding: "0 140px",
  marginTop: 129,
});

export const voteWrapper = style({
  display: "flex",
  justifyContent: "space-around",
  marginTop: 30,
});

export const rankingBox = style({
  // flex: 1,
});

export const voteSelect = style({
  border: `1px solid ${vars.strokeLine[10]}`,
  padding: "6px 12px",
  borderRadius: 10,
});

export const voteCardBox = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 24,
  // flex: 2,
});

export const voteTitle = style({
  ...vars.title.h3,
  marginBottom: 28,
});
