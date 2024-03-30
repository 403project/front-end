import { style } from "@vanilla-extract/css";
import { vars } from "../variants/variants.css";

export const voteContainer = style({
  padding: "0 140px",
  marginTop: 129,
  "@media": {
    "screen and (max-width: 1200px)": {
      padding: "0 16px",
      marginTop: 150,
    },
  },
});

export const voteWrapper = style({
  display: "flex",
  justifyContent: "space-around",
  marginTop: 30,
  "@media": {
    "screen and (max-width: 1200px)": {
      flexDirection: "column-reverse",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      gap: 20,
    },
  },
});

export const rankingBox = style({
  // flex: 1,
  "@media": {
    "screen and (max-width: 1200px)": {
      maxWidth: "100%",
      width: "100%",
      padding: "0px",
      flexDirection: "column-reverse",
    },
  },
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
  // display: "none",
  // flex: 2,
});

export const voteTitle = style({
  ...vars.title.h3,
  marginBottom: 28,
});
