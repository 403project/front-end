import { style } from "@vanilla-extract/css";

export const MainContainer = style({
  display: "flex",
  width: "100%",
  padding: "0px 140px",
  minHeight: "100%",
  paddingBottom: "120px",
  margin: "0 auto",
  marginTop: "68px",
  gap: 87,
  "@media": {
    "screen and (max-width: 1200px)": {
      flexDirection: "column-reverse",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      padding: "0px 5px",
      gap: 20,
      margin: "0px",
    },
  },
});

export const ProjectDetailMain = style({
  minHeight: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  "@media": {
    "screen and (max-width: 1200px)": {
      justifyContent: "flex-start",
      flexDirection: "column",
      padding: "0px 10px",
      gap: 20,
    },
  },
});

export const FooterContainer = style({
  width: "100%",
  backgroundColor: "#EBEBEB",
  marginTop: 20,
  padding: "20px",
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
      marginTop: "80px",
      width: "100%",
      padding: "0px",
      flexDirection: "column-reverse",
    },
  },
});
