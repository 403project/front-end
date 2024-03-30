import { style } from "@vanilla-extract/css";

export const MainContainer = style({
  display: "flex",
  width: "100%",
  padding: "0px 140px",
  margin: "0 auto",
  marginTop: "68px",
  gap: 87,
  "@media": {
    "screen and (max-width: 1200px)": {
      flexDirection: "column-reverse",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      padding: "0px 30px",
      gap: 20,
      margin: "0px",
    },
  },
});

export const RankingWrapper = style({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  maxWidth: "450px",
  padding: "0px 0px 0px 0px",
  height: "fit-content",
  "@media": {
    "screen and (max-width: 1200px)": {
      maxWidth: "100%",
      width: "100%",
      padding: "0px",
      flexDirection: "column-reverse",
    },
  },
});

export const RankingContainer = style({
  marginTop: "144px",
  width: "70%",
  display: "flex",
  justifyContent: "flex-start",
  "@media": {
    "screen and (max-width: 1200px)": {
      maxWidth: "100%",
      width: "100%",
      padding: "0px",
      flexDirection: "column-reverse",
    },
  },
});
